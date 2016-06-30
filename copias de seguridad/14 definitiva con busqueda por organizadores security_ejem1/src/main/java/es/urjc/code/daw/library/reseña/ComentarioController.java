package es.urjc.code.daw.library.reseña;

import java.util.Collection;
import java.util.List;

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
@RequestMapping("/comentarios")
public class ComentarioController {

	

	@Autowired
	private ComentarioRepository repository;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<Comentario> getComentarios() {
		return repository.findAll();
	}
	
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Collection<Comentario> getEvento(@PathVariable long id) {
		
		List<Comentario> reseñas = repository.findByEvento(id);
		return reseñas;
	}

	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Comentario nuevoComentario(@RequestBody Comentario comentario) {
		comentario.setFecha();
		comentario.setHora();
		repository.save(comentario);

		return comentario;
	}
/*
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