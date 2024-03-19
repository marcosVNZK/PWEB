package edu.br.ifgoiano;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/login")
public class CadastroServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
   
	@Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String responsavel = req.getParameter("responsavel");
		String aluno =  req.getParameter("aluno");
		String telefone =  req.getParameter("telefone");
		
		if (responsavel.isEmpty() || aluno.isEmpty() || telefone.isEmpty()) {
			req.getRequestDispatcher("errorPage.jsp").forward(req, resp);
		} else {
		
		req.setAttribute("telefone", telefone);
		req.setAttribute("responsavel", responsavel);
		req.setAttribute("aluno", aluno);
		
		req.getRequestDispatcher("cadastrado.jsp").forward(req, resp);
		}
	}

}
