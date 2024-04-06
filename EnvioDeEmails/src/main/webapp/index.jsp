<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Serviço de Mensageria</title>
<link href="style.css" rel="stylesheet">
</head>
<body>

	<div class="container">
		<h1>Serviço de Mensageria</h1>
		<h3>formulário para envio de e-mails</h3>
	</div>

	<form action="EmailsServlet" method="post">
	<label for="email">E-mail:</label>
	<select class="email" name="email" id="email">
		<c:forEach items="${listaEmail}" var="emai">
			<option value="${emai.email}">${emai.email}</option>
		</c:forEach>

	</select>

	<br>

	<div class="op">
		<input type="radio" id="optRespfor" name="respForm"value="formal" checked>
		<label for="optRespfor">Cumprimento formal</label> 
		<input type="radio" id="optRespIn" name="respForm" value="conformeHorario">
		<label for="optRespIn">Cumprimento comforme o horario</label>
	</div>

	<br>

	<input class="emAuto" type="checkbox" id="RespAuto" name="respAuto">
	<label for="respAuto">Incluir aviso de "Email Automatico"</label>

	<br>

	<label for="titulo">Título:</label>
	<input class="titulo" type="text" id="titulo" name="titulo">

	<br>

	<label class="textoLab">Texto:</label>
	<textarea class="texto" id="text" name="text"></textarea>

	<br>
	
	<div class="butt"></div>
		<button type="submit">Enviar</button>
	</div>
	<c:if test="${mostrarAlerta}">
			<h1>Reveja suas informações!</h1>
	</c:if>
	</form>
</body>
</html>