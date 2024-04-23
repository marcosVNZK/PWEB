<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Listagem de Usuários</title>
    <style>
        table {
            width: 50%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>

<h1>Seja bem-vindo à listagem de usuários!</h1>
<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Senha</th>
            <th>Data de Nascimento</th>
        </tr>
    </thead>
    <tbody>
        <c:forEach items="${lstUsuario}" var="usuario">
            <tr>
                <td>${usuario.getId()}</td>
                <td>${usuario.getNome()}</td>
                <td>${usuario.getEmail()}</td>
                <td>${usuario.getSenha()}</td>
                <td>${usuario.getDataNascimento()}</td>
            </tr>
        </c:forEach>
    </tbody>
</table>

</body>
</html>
