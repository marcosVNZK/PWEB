-- Tabela de Clientes
CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    telefone VARCHAR(20),
    email VARCHAR(70)
);
CREATE TABLE veiculos (
    id SERIAL PRIMARY KEY,
    marca VARCHAR(50) NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    ano INT,
    idcliente INT,
    FOREIGN KEY (idcliente) REFERENCES clientes(id)
);
CREATE TABLE servico (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(200) NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    idveiculo INT,
    FOREIGN KEY (idveiculo) REFERENCES veiculos(id)
);
CREATE TABLE mecanico (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    especialidade VARCHAR(100),
    carga_horaria INT
);
CREATE TABLE realiza (
    idservico INT,
    idmecanico INT,
    FOREIGN KEY (idservico) REFERENCES servico(id),
    FOREIGN KEY (idmecanico) REFERENCES mecanico(id)
);
