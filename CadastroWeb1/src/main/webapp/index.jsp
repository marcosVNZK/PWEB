<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!doctype html>
<html lang="pt-br" data-bs-theme="auto">
  <head><script src="assets/js/color-modes.js"></script>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">	
    <title>Tela Principal</title>
	<link href="assets/dist/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="sign-in.css">
    
    <!-- Custom styles for this template -->
    <link href="style.css" rel="stylesheet">
  </head>
  <body> 
<main >
  <form action="CadastroServlet" method="post">
    <img class="mb-4" src="assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
    <h1 class="h3 mb-3 fw-normal">Login</h1>
    
    <label for="Email">Email</label>
      <input type="Email" class="form-control" name="Email">
   
    <label for="Senha">Senha</label>
      <input type="password" class="form-control"name="Senha" >   
    <br>
    <button class="btn btn-primary w-100 py-2" type="submti">Salvar</button>
  </form>
  <c:if test="${mostrarFalha}">
  <div class="alert alert-sucesso" role="alert">Tem algo errado!</div>
  </c:if>
</main>
<script src="assets/dist/js/bootstrap.bundle.min.js"></script>
    </body>
</html>