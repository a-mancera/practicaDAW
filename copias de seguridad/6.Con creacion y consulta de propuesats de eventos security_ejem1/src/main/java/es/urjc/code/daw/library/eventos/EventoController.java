package es.urjc.code.daw.library.eventos;
import java.util.Collection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/eventos")
public class EventoController {

	

	@Autowired
	private EventoRepository repository;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<Evento> getEventos() {
		return repository.findAll();
	}
	
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Evento> getEvento(@PathVariable long id) {

		
		Evento evento = repository.findOne(id);
		if (evento != null) {
			return new ResponseEntity<>(evento, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
/*
	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Book nuevoAnuncio(@RequestBody Book anuncio) {

		repository.save(anuncio);

		return anuncio;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Book> actulizaAnuncio(@PathVariable long id, @RequestBody Book updatedBook) {

		Book anuncio = repository.findOne(id);
		if (anuncio != null) {

			updatedBook.setId(id);
			repository.save(updatedBook);

			return new ResponseEntity<>(updatedBook, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Book> borraAnuncio(@PathVariable long id) {

		if (repository.exists(id)) {
			repository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}*/

}