<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Enviado com Sucesso</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f7f7f7;
            margin: 0;
            padding: 0;
        }

        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .letter {
            background-color: #fff;
            border: 1px solid #ccc;
            padding: 20px;
            max-width: 600px;
            width: 100%;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .title {
            color: #333;
            text-align: center;
        }

        .content {
            margin-top: 20px;
        }

        .content p {
            margin-bottom: 10px;
        }

        .content ul {
            padding: 0;
            margin: 0;
            list-style-type: none;
        }

        .content ul li {
            margin-bottom: 5px;
        }

        .content ul li strong {
            margin-right: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="letter">
            <h1 class="title">Email Enviado com Sucesso</h1>
            <div class="content">
                <p>Obrigado por entrar em contato conosco!</p>
                <p>Seu email foi enviado com sucesso.</p>
                <p>Aqui estão os detalhes do email enviado:</p>
                <ul>
                    <li><strong>Para:</strong>${email}</li>
                    <li><strong>Assunto:</strong>${titulo}</li>
                    <li><strong>Mensagem:</strong>${texto}</li>
                </ul>
            </div>
        </div>
    </div>
</body>
</html>
