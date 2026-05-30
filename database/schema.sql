CREATE TABLE IF NOT EXISTS personagens (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    categoria VARCHAR(80) NOT NULL,
    grau VARCHAR(80) NOT NULL DEFAULT 'Nao informado',
    tecnica VARCHAR(150),
    descricao TEXT,
    imagem_url TEXT
);

INSERT INTO personagens (nome, categoria, grau, tecnica, descricao, imagem_url)
SELECT 'Yuji Itadori', 'Estudante', 'Grau 1', 'Black Flash', 'Estudante impulsivo que se tornou recipiente de Sukuna.', '/Yuji-Itadori.webp'
WHERE NOT EXISTS (SELECT 1 FROM personagens WHERE nome = 'Yuji Itadori');

INSERT INTO personagens (nome, categoria, grau, tecnica, descricao, imagem_url)
SELECT 'Satoru Gojo', 'Professor', 'Grau Especial', 'Ilimitado', 'Professor mais forte da escola Jujutsu e usuario dos Seis Olhos.', '/Satoru-Gojo.jpg'
WHERE NOT EXISTS (SELECT 1 FROM personagens WHERE nome = 'Satoru Gojo');

INSERT INTO personagens (nome, categoria, grau, tecnica, descricao, imagem_url)
SELECT 'Ryomen Sukuna', 'Maldicao', 'Grau Especial', 'Santuario Malevolo', 'Rei das Maldicoes e uma das maiores ameacas da obra.', '/Ryomen-Sukuna.jpg'
WHERE NOT EXISTS (SELECT 1 FROM personagens WHERE nome = 'Ryomen Sukuna');

INSERT INTO personagens (nome, categoria, grau, tecnica, descricao, imagem_url)
SELECT 'Megumi Fushiguro', 'Estudante', 'Grau 1', 'Tecnica das Dez Sombras', 'Feiticeiro do cla Zenin que invoca shikigamis usando sombras.', '/Megumi-Fushiguro.webp'
WHERE NOT EXISTS (SELECT 1 FROM personagens WHERE nome = 'Megumi Fushiguro');

INSERT INTO personagens (nome, categoria, grau, tecnica, descricao, imagem_url)
SELECT 'Nobara Kugisaki', 'Estudante', 'Grau 2', 'Tecnica do Boneco de Palha', 'Feiticeira determinada que usa martelo, pregos e ressonancia contra maldicoes.', '/Nobara-Kugisaki.webp'
WHERE NOT EXISTS (SELECT 1 FROM personagens WHERE nome = 'Nobara Kugisaki');

INSERT INTO personagens (nome, categoria, grau, tecnica, descricao, imagem_url)
SELECT 'Yuta Okkotsu', 'Feiticeiro', 'Grau Especial', 'Rika', 'Feiticeiro de grau especial ligado a Rika e com grande quantidade de energia amaldicoada.', '/Yuta-Okkotsu.jpg'
WHERE NOT EXISTS (SELECT 1 FROM personagens WHERE nome = 'Yuta Okkotsu');

INSERT INTO personagens (nome, categoria, grau, tecnica, descricao, imagem_url)
SELECT 'Toge Inumaki', 'Estudante', 'Grau 1', 'Fala Amaldicoada', 'Membro do cla Inumaki que usa palavras carregadas de energia amaldicoada.', '/Toge-Inumaki.jpg'
WHERE NOT EXISTS (SELECT 1 FROM personagens WHERE nome = 'Toge Inumaki');

INSERT INTO personagens (nome, categoria, grau, tecnica, descricao, imagem_url)
SELECT 'Maki Zenin', 'Estudante', 'Grau 4', 'Ferramentas Amaldicoadas', 'Especialista em combate fisico e armas amaldicoadas, apesar da baixa energia amaldicoada.', '/Maki-Zenin.webp'
WHERE NOT EXISTS (SELECT 1 FROM personagens WHERE nome = 'Maki Zenin');
