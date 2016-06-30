package es.urjc.code.daw.library.mensajes;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


public interface MensajeRepository extends JpaRepository<Mensaje, Long> {
	List<Mensaje> findByRemitente(String remitente);
}