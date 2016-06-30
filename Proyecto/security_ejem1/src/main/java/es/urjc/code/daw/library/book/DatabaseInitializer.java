package es.urjc.code.daw.library.book;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;

import es.urjc.code.daw.library.TipoEvento;
import es.urjc.code.daw.library.eventos.Evento;
import es.urjc.code.daw.library.eventos.EventoRepository;
import es.urjc.code.daw.library.mensajes.Mensaje;
import es.urjc.code.daw.library.mensajes.MensajeRepository;
import es.urjc.code.daw.library.propuestas.PropuestaEvento;
import es.urjc.code.daw.library.propuestas.PropuestaRepository;
import es.urjc.code.daw.library.reseña.Comentario;
import es.urjc.code.daw.library.reseña.ComentarioRepository;
import es.urjc.code.daw.library.user.User;
import es.urjc.code.daw.library.user.UserRepository;


@Controller
public class DatabaseInitializer implements CommandLineRunner {

	@Autowired
	private BookRepository bookRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private EventoRepository eventoRepository;
	
	@Autowired
	private ComentarioRepository reseñaRepository;	
	
	@Autowired
	private PropuestaRepository propuestaRepository;
	
	@Autowired
	private MensajeRepository mensajeRepository;
	
	@Override
	public void run(String... args) throws Exception {
		
		// Sample books

		
		// Sample users
		//Comentario reseña = new Comentario(1,"Muy buen evento, volveré a repetir",5,"Anonimo");
		//reseñaRepository.save(reseña);
		//ArrayList<Comentario> reseñas = new ArrayList<>();
		//reseñas.add(reseña);
		Evento even = new Evento("Evento de prueba1","resumen", "Esto es un evento de prueba para probar",
			"Puerta del Sol","Madrid", "Patrocinador1","Organizador1","Reality Experience", "26/06/2016","22:00");
		
		//eventoRepository.save(even);
		//userRepository.save(new User("user", "pass", "ROLE_USER"));
		//userRepository.save(new User("admin", "pass", "ROLE_USER", "ROLE_ADMIN"));
		ArrayList<String> tipos = new ArrayList<String>();
		tipos.add("Reality Experience");
		tipos.add("Concierto");
		ArrayList<Evento> eventos = new ArrayList<Evento>();
		eventos.add(even);
		//userRepository.save(new User("Patrocinador1","1234","Ooeoe","www.google.es",
			//	tipos,"","","","","Usuario pruieba",true,"ROLE_USER", "ROLE_ADMIN"));
		//userRepository.save(new User("Organizador1","1234","Ooeoe","www.google.es",
				//tipos,"","","","","Usuario pruieba",false,"ROLE_USER", "ROLE_ADMIN"));
		/*userRepository.save(new User("Patrocinador1","1234","Ooeoe","www.google.es",
				tipos,"","","","","Usuario pruieba",true,"ROLE_USER", "ROLE_ADMIN"));
		userRepository.save(new User("Organizador1","1234","Ooeoe","www.google.es",
				tipos,"","","","","Usuario pruieba",false,"ROLE_USER", "ROLE_ADMIN"));*/
		//Mensaje m = new Mensaje("Organizador1","Patrocinador1"
			//	,"Patrocinio evento","Hola estaría interesado en patrocinarte");
		//mensajeRepository.save(m);
		//PropuestaEvento p = new PropuestaEvento("Propuesta 1", "Resumen1","Descripcion1","Direccion1",
			//	"Valencia","Organizador1","Reality Experience","22/06/2016","22:00",1000);
		
		//propuestaRepository.save(p);
		
	}

}
