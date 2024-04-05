package ifgoiano.edu.br;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/CadastroServlet")
public class CadastroServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public CadastroServlet() {
        super();
        // TODO Auto-generated constructor stub
    }
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String Email = request.getParameter("Email");
		String Senha =  request.getParameter("Senha");
			
			if (Email.contains("@ifgoiano") && Senha.equals("123456")) {
				request.getRequestDispatcher("dashbord.jsp").forward(request, response);
			}else {
				request.setAttribute("mostrarFalha", true);
				request.getRequestDispatcher("index.jsp").forward(request, response);
			}
	}

}
