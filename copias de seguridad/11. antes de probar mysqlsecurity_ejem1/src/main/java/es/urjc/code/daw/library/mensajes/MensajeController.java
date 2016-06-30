package es.urjc.code.daw.library.mensajes;

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
@RequestMapping("/mensajes")
public class MensajeController {

	
	@Autowired
	private MensajeRepository repository;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<Mensaje> getMensajes() {
		return repository.findAll();
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Collection<Mensaje> getMensajes(@PathVariable String id) {
		return repository.findByRemitente(id);
	}
	
	@RequestMapping(value = "/mensaje/{id}", method = RequestMethod.GET)
	public Mensaje getMensajes(@PathVariable long id) {
		return repository.findOne(id);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Mensaje> actualizarMensaje(@PathVariable long id, @RequestBody Mensaje mensajeActualizado) {

		Mensaje anuncio = repository.findOne(id);
		if (anuncio != null) {

			mensajeActualizado.setId(id);
			repository.save(mensajeActualizado);

			return new ResponseEntity<>(mensajeActualizado, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Mensaje nuevoAnuncio(@RequestBody Mensaje mensaje) {
		mensaje.setFecha();
		repository.save(mensaje);

		return mensaje;
	}

	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Mensaje> borraAnuncio(@PathVariable long id) {

		if (repository.exists(id)) {
			repository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
