package br.edu.ifgoiano;

import java.io.IOException;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/agora")
public class AgoraServlet extends HttpServlet {
	
	private static final long serialVersionUID = 7769396913830609224L;
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("Funfou!");
		String data = new Date().toString();
		
		String html = "<html><body><h1>" + data + " </br> Sou lindo demais!😘 " +"</h1></body></html>";
		
		resp.setContentType("text/html;charset=UTF-8");
		resp.getWriter().print(html);
	}
}
