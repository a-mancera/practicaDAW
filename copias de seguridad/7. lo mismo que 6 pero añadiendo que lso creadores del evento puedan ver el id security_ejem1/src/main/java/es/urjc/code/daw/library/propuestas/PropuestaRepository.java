package es.urjc.code.daw.library.propuestas;
import org.springframework.data.jpa.repository.JpaRepository;

import es.urjc.code.daw.library.user.User;

/**
 * Repository to manage users in database.
 * 
 * NOTE: This interface is intended to be extended by developer adding new
 * methods. Current method can not be removed because it is used in
 * authentication procedures.
 */
public interface PropuestaRepository extends JpaRepository<PropuestaEvento, Long> {


}
