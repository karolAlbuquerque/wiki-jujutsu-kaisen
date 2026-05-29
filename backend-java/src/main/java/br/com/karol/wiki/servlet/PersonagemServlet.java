package br.com.karol.wiki.servlet;

import br.com.karol.wiki.dao.PersonagemDAO;
import br.com.karol.wiki.model.Personagem;
import com.google.gson.Gson;
import com.google.gson.JsonSyntaxException;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@WebServlet("/api/personagens/*")
public class PersonagemServlet extends HttpServlet {
    private static final List<String> ALLOWED_ORIGINS = List.of(
            "http://localhost:5173",
            "http://127.0.0.1:5173",
            "http://localhost:5174",
            "http://127.0.0.1:5174",
            "http://localhost",
            "http://127.0.0.1"
    );

    private final PersonagemDAO personagemDAO = new PersonagemDAO();
    private final Gson gson = new Gson();

    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        configurarCors(req, resp);

        if ("OPTIONS".equalsIgnoreCase(req.getMethod())) {
            resp.setStatus(HttpServletResponse.SC_NO_CONTENT);
            return;
        }

        super.service(req, resp);
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        try {
            Integer id = extrairId(req);
            if (id == null) {
                List<Personagem> personagens = personagemDAO.listar();
                responderJson(resp, HttpServletResponse.SC_OK, personagens);
                return;
            }

            Optional<Personagem> personagem = personagemDAO.buscarPorId(id);
            if (personagem.isEmpty()) {
                responderErro(resp, HttpServletResponse.SC_NOT_FOUND, "Personagem nao encontrado.");
                return;
            }

            responderJson(resp, HttpServletResponse.SC_OK, personagem.get());
        } catch (IllegalArgumentException exception) {
            responderErro(resp, HttpServletResponse.SC_BAD_REQUEST, exception.getMessage());
        } catch (SQLException exception) {
            exception.printStackTrace();
            responderErro(resp, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Erro ao consultar personagens.");
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        try {
            Personagem personagem = lerCorpo(req);
            validar(personagem);
            Personagem criado = personagemDAO.criar(personagem);
            responderJson(resp, HttpServletResponse.SC_CREATED, criado);
        } catch (IllegalArgumentException | JsonSyntaxException exception) {
            responderErro(resp, HttpServletResponse.SC_BAD_REQUEST, exception.getMessage());
        } catch (SQLException exception) {
            exception.printStackTrace();
            responderErro(resp, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Erro ao criar personagem.");
        }
    }

    @Override
    protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        try {
            Integer id = extrairId(req);
            if (id == null) {
                responderErro(resp, HttpServletResponse.SC_BAD_REQUEST, "Informe o id do personagem.");
                return;
            }

            Personagem personagem = lerCorpo(req);
            validar(personagem);

            boolean atualizado = personagemDAO.atualizar(id, personagem);
            if (!atualizado) {
                responderErro(resp, HttpServletResponse.SC_NOT_FOUND, "Personagem nao encontrado.");
                return;
            }

            personagem.setId(id);
            responderJson(resp, HttpServletResponse.SC_OK, personagem);
        } catch (IllegalArgumentException | JsonSyntaxException exception) {
            responderErro(resp, HttpServletResponse.SC_BAD_REQUEST, exception.getMessage());
        } catch (SQLException exception) {
            exception.printStackTrace();
            responderErro(resp, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Erro ao atualizar personagem.");
        }
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        try {
            Integer id = extrairId(req);
            if (id == null) {
                responderErro(resp, HttpServletResponse.SC_BAD_REQUEST, "Informe o id do personagem.");
                return;
            }

            boolean excluido = personagemDAO.excluir(id);
            if (!excluido) {
                responderErro(resp, HttpServletResponse.SC_NOT_FOUND, "Personagem nao encontrado.");
                return;
            }

            responderJson(resp, HttpServletResponse.SC_OK, Map.of("mensagem", "Personagem excluido com sucesso."));
        } catch (IllegalArgumentException exception) {
            responderErro(resp, HttpServletResponse.SC_BAD_REQUEST, exception.getMessage());
        } catch (SQLException exception) {
            exception.printStackTrace();
            responderErro(resp, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Erro ao excluir personagem.");
        }
    }

    private Personagem lerCorpo(HttpServletRequest req) throws IOException {
        req.setCharacterEncoding(StandardCharsets.UTF_8.name());
        return gson.fromJson(req.getReader(), Personagem.class);
    }

    private Integer extrairId(HttpServletRequest req) {
        String pathInfo = req.getPathInfo();
        if (pathInfo == null || pathInfo.isBlank() || "/".equals(pathInfo)) {
            return null;
        }

        String[] partes = pathInfo.split("/");
        if (partes.length < 2 || partes[1].isBlank()) {
            return null;
        }

        try {
            return Integer.parseInt(partes[1]);
        } catch (NumberFormatException exception) {
            throw new IllegalArgumentException("Id invalido.");
        }
    }

    private void validar(Personagem personagem) {
        if (personagem == null) {
            throw new IllegalArgumentException("Corpo da requisicao invalido.");
        }
        if (isBlank(personagem.getNome())) {
            throw new IllegalArgumentException("O campo nome e obrigatorio.");
        }
        if (isBlank(personagem.getCategoria())) {
            throw new IllegalArgumentException("O campo categoria e obrigatorio.");
        }
        if (isBlank(personagem.getGrau())) {
            personagem.setGrau("Nao informado");
        }
        if (personagem.getTecnica() == null) {
            personagem.setTecnica("");
        }
        if (personagem.getDescricao() == null) {
            personagem.setDescricao("");
        }
        if (personagem.getImagemUrl() == null) {
            personagem.setImagemUrl("");
        }
    }

    private boolean isBlank(String valor) {
        return valor == null || valor.isBlank();
    }

    private void responderJson(HttpServletResponse resp, int status, Object payload) throws IOException {
        resp.setStatus(status);
        resp.setCharacterEncoding(StandardCharsets.UTF_8.name());
        resp.setContentType("application/json");
        resp.getWriter().write(gson.toJson(payload));
    }

    private void responderErro(HttpServletResponse resp, int status, String mensagem) throws IOException {
        responderJson(resp, status, Map.of("erro", mensagem));
    }

    private void configurarCors(HttpServletRequest req, HttpServletResponse resp) {
        String origin = req.getHeader("Origin");
        if (origin != null && ALLOWED_ORIGINS.contains(origin)) {
            resp.setHeader("Access-Control-Allow-Origin", origin);
        }
        resp.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        resp.setHeader("Access-Control-Allow-Headers", "Content-Type");
        resp.setHeader("Vary", "Origin");
    }
}
