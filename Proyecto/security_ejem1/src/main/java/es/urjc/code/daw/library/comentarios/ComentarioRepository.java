package es.urjc.code.daw.library.comentarios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import es.urjc.code.daw.library.eventos.Evento;

public interface ComentarioRepository extends JpaRepository<Comentario, Long> {
	List<Comentario> findByEvento(long evento);
}