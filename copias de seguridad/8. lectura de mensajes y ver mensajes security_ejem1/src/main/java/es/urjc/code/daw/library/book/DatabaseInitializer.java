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

		bookRepository.save(new Book("SUEÑOS DE ACERO Y NEON",
				"Los personajes que protagonizan este relato sobreviven en una sociedad en decadencia a la que, no obstante, lograrán devolver la posibilidad de un futuro. Año 2484. En un mundo dominado por las grandes corporaciones, solo un hombre, Jordi Thompson, detective privado deslenguado y vividor, pero de gran talento y sentido d..."));
		bookRepository.save(new Book("LA VIDA SECRETA DE LA MENTE",
				"La vida secreta de la mentees un viaje especular que recorre el cerebro y el pensamiento: se trata de descubrir nuestra mente para entendernos hasta en los más pequeños rincones que componen lo que somos, cómo forjamos las ideas en los primeros días de vida, cómo damos forma a las decisiones que nos constituyen, cómo soñamos y cómo imaginamos, por qué sentimos ciertas emociones hacia los demás, cómo los demás influyen en nosotros, y cómo el cerebro se transforma y, con él, lo que somos."));
		bookRepository.save(new Book("CASI SIN QUERER",
				"El amor algunas veces es tan complicado como impredecible. Pero al final lo que más valoramos son los detalles más simples, los más bonitos, los que llegan sin avisar. Y a la hora de escribir sobre sentimientos, no hay nada más limpio que hacerlo desde el corazón. Y eso hace Defreds en este libro."));
		bookRepository.save(new Book("TERMINAMOS Y OTROS POEMAS SIN TERMINAR",
				"Recopilación de nuevos poemas, textos en prosa y pensamientos del autor. Un sabio dijo una vez: «Pocas cosas hipnotizan tanto en este mundo como una llama y como la luna, será porque no podemos cogerlas o porque nos iluminan en la penumbra». Realmente no sé si alguien dijo esta cita o me la acabo de inventar pero deberían de haberla escrito porque el poder hipnótico que ejercen esa mujer de rojo y esa dama blanca sobre el ser humano es digna de estudio."));
		bookRepository.save(new Book("LA LEGIÓN PERDIDA",
				"En el año 53 a. C. el cónsul Craso cruzó el Éufrates para conquistar Oriente, pero su ejército fue destrozado en Carrhae. Una legión entera cayó prisionera de los partos. Nadie sabe a ciencia cierta qué pasó con aquella legión perdida.150 años después, Trajano está a punto de volver a cruzar el Éufrates. ..."));

		// Sample users
		Comentario reseña = new Comentario(1,"Muy buen evento, volveré a repetir",5,"Anonimo");
		reseñaRepository.save(reseña);
		ArrayList<Comentario> reseñas = new ArrayList<>();
		reseñas.add(reseña);
		Evento even = new Evento("Evento de prueba1","resumen", "Esto es un evento de prueba para probar",
			"Puerta del Sol, Madrid", "Patrocinador1","Organizador1","Reality Experience", "26/06/2016","22:00");
		
		eventoRepository.save(even);
		
		userRepository.save(new User("user", "pass", "ROLE_USER"));
		userRepository.save(new User("admin", "pass", "ROLE_USER", "ROLE_ADMIN"));
		ArrayList<String> tipos = new ArrayList<String>();
		tipos.add("Reality Experience");
		ArrayList<Evento> eventos = new ArrayList<Evento>();
		eventos.add(even);
		userRepository.save(new User("Patrocinador1","1234","Ooeoe","www.google.es",
				tipos,"","","","","Usuario pruieba",true,"ROLE_USER", "ROLE_ADMIN"));
		userRepository.save(new User("Organizador1","1234","Ooeoe","www.google.es",
				tipos,"","","","","Usuario pruieba",false,"ROLE_USER", "ROLE_ADMIN"));
		/*userRepository.save(new User("Patrocinador1","1234","Ooeoe","www.google.es",
				tipos,"","","","","Usuario pruieba",true,"ROLE_USER", "ROLE_ADMIN"));
		userRepository.save(new User("Organizador1","1234","Ooeoe","www.google.es",
				tipos,"","","","","Usuario pruieba",false,"ROLE_USER", "ROLE_ADMIN"));*/
		Mensaje m = new Mensaje("Organizador1","Patrocinador1"
				,"Patrocinio evento","Hola estaría interesado en patrocinarte");
		mensajeRepository.save(m);
		PropuestaEvento p = new PropuestaEvento("Propuesta 1", "Resumen1","Descripcion1","Direccion1",
				"Organizador1","Reality Experience","22/06/2016","22:00",1000);
		
		propuestaRepository.save(p);
		
	}

}
