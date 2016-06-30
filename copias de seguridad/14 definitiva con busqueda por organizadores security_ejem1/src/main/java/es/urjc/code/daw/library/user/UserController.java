package es.urjc.code.daw.library.user;

import java.util.Collection;
import java.util.Collections;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import es.urjc.code.daw.library.book.Book;

@RestController
@RequestMapping("/usuario")
public class UserController {

	

	@Autowired
	private UserRepository repository;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<User> getUsuarios() {
		return repository.findAll();
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<User> getUsuario(@PathVariable long id) {
		
		

		User anuncio = repository.findOne(id);
		if (anuncio != null) {
			return new ResponseEntity<>(anuncio, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public User nuevoAnuncio(@RequestBody User usuario) {
		usuario.getRoles().add("ROLE_USER");
		usuario.getRoles().add("ROLE_ADMIN");
		String pass = usuario.getPasswordHash();
		usuario.setPass(new BCryptPasswordEncoder().encode(pass));
		repository.save(usuario);

		return usuario;
	}

	/*@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Book> actulizaAnuncio(@PathVariable long id, @RequestBody Book updatedBook) {

		Book anuncio = repository.findOne(id);
		if (anuncio != null) {

			updatedBook.setId(id);
			repository.save(updatedBook);

			return new ResponseEntity<>(updatedBook, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}*/

	/*@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Book> borraAnuncio(@PathVariable long id) {

		if (repository.exists(id)) {
			repository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}*/

}