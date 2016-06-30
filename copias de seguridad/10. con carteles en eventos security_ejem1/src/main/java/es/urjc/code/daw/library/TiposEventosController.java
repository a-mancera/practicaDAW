package es.urjc.code.daw.library;

import java.util.ArrayList;
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
@RequestMapping("/tiposEventos")
public class TiposEventosController {

	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<TipoEvento> getBooks() {
		ArrayList<TipoEvento> tipos = new ArrayList<TipoEvento>();
		tipos.add(new TipoEvento("Reality Experience"));
		tipos.add(new TipoEvento("Aventura"));
		tipos.add(new TipoEvento("Survival Zombie"));
		tipos.add(new TipoEvento("Concierto"));
		return tipos;
	}
}