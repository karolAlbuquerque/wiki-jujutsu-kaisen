package br.com.karol.wiki.dao;

import br.com.karol.wiki.config.ConnectionFactory;
import br.com.karol.wiki.model.Personagem;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class PersonagemDAO {
    public List<Personagem> listar() throws SQLException {
        String sql = """
            SELECT id, nome, categoria, grau, tecnica, descricao, imagem_url
            FROM personagens
            ORDER BY nome ASC
            """;

        try (Connection connection = ConnectionFactory.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql);
             ResultSet resultSet = statement.executeQuery()) {
            List<Personagem> personagens = new ArrayList<>();
            while (resultSet.next()) {
                personagens.add(mapear(resultSet));
            }
            return personagens;
        }
    }

    public Optional<Personagem> buscarPorId(int id) throws SQLException {
        String sql = """
            SELECT id, nome, categoria, grau, tecnica, descricao, imagem_url
            FROM personagens
            WHERE id = ?
            """;

        try (Connection connection = ConnectionFactory.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, id);
            try (ResultSet resultSet = statement.executeQuery()) {
                if (resultSet.next()) {
                    return Optional.of(mapear(resultSet));
                }
                return Optional.empty();
            }
        }
    }

    public Personagem criar(Personagem personagem) throws SQLException {
        String sql = """
            INSERT INTO personagens (nome, categoria, grau, tecnica, descricao, imagem_url)
            VALUES (?, ?, ?, ?, ?, ?)
            """;

        try (Connection connection = ConnectionFactory.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
            preencherStatement(statement, personagem);
            statement.executeUpdate();

            try (ResultSet generatedKeys = statement.getGeneratedKeys()) {
                if (generatedKeys.next()) {
                    personagem.setId(generatedKeys.getInt(1));
                }
            }
        }

        return personagem;
    }

    public boolean atualizar(int id, Personagem personagem) throws SQLException {
        String sql = """
            UPDATE personagens
            SET nome = ?, categoria = ?, grau = ?, tecnica = ?, descricao = ?, imagem_url = ?
            WHERE id = ?
            """;

        try (Connection connection = ConnectionFactory.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {
            preencherStatement(statement, personagem);
            statement.setInt(7, id);
            return statement.executeUpdate() > 0;
        }
    }

    public boolean excluir(int id) throws SQLException {
        String sql = "DELETE FROM personagens WHERE id = ?";

        try (Connection connection = ConnectionFactory.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, id);
            return statement.executeUpdate() > 0;
        }
    }

    private void preencherStatement(PreparedStatement statement, Personagem personagem) throws SQLException {
        statement.setString(1, personagem.getNome());
        statement.setString(2, personagem.getCategoria());
        statement.setString(3, personagem.getGrau());
        statement.setString(4, personagem.getTecnica());
        statement.setString(5, personagem.getDescricao());
        statement.setString(6, personagem.getImagemUrl());
    }

    private Personagem mapear(ResultSet resultSet) throws SQLException {
        Personagem personagem = new Personagem();
        personagem.setId(resultSet.getInt("id"));
        personagem.setNome(resultSet.getString("nome"));
        personagem.setCategoria(resultSet.getString("categoria"));
        personagem.setGrau(resultSet.getString("grau"));
        personagem.setTecnica(resultSet.getString("tecnica"));
        personagem.setDescricao(resultSet.getString("descricao"));
        personagem.setImagemUrl(resultSet.getString("imagem_url"));
        return personagem;
    }
}
