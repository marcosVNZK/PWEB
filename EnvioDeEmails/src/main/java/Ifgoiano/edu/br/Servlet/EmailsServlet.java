package Ifgoiano.edu.br.servlet;

import java.io.IOException;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Ifgoiano.edu.br.entidade.Email;

@WebServlet("/EmailsServlet")
public class EmailsServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        List<Email> emailInformados = new ArrayList<Email>();
        for (int i = 0; i < 10; i++) {
            Email email = new Email();
            email.setNome("Usuario" + i);
            email.setEmail("Usuario" + i + "@gmail.com");
            emailInformados.add(email);
        }
        request.setAttribute("listaEmail", emailInformados);

        request.getRequestDispatcher("index.jsp").forward(request, response);
    }


    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String mensagemEmail = "";
        String email = request.getParameter("email");
        String respForm =  request.getParameter("respForm");
        String respAuto =  request.getParameter("respAuto");
        String titulo =  request.getParameter("titulo");
        String texto =  request.getParameter("text");

        if (email.isEmpty() || titulo.isEmpty() || texto.isEmpty()) {
            request.setAttribute("mostrarAlerta", true);
            request.getRequestDispatcher("index.jsp").forward(request, response);
        } else {
            mensagemEmail = "O E-mail foi enviado com sucesso para: " + email + "\n com o Titulo: " + titulo;
        }

        if (respForm.equals("formal")) {	
			texto = "Prezada(o),\n" + texto;
		} else {
        LocalTime horaAtual = LocalTime.now();
        int hora = horaAtual.getHour();

        if ((5 <= hora) && (hora <= 11)) {
            texto = "Bom dia,\n" + texto;
        } else if ((12 <= hora) && (hora <= 18)) {
            texto = "Boa tarde,\n" + texto;
        } else {
            texto = "Boa noite,\n" + texto;
        }
		}

        if (respAuto != null) {
            texto += "Atenção: esse e um e-mail automatico e não deve ser respondido!";
        }

        System.out.println(mensagemEmail);
        request.setAttribute("email", email);
        request.setAttribute("titulo", titulo);
        request.setAttribute("texto", texto);
        request.setAttribute("mostrarSucesso", true);
        request.getRequestDispatcher("PaginaFinal.jsp").forward(request, response);
    }
}
