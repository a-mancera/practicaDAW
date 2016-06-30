package es.urjc.code.daw.library.comentarios;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import org.springframework.beans.factory.annotation.Autowired;

import es.urjc.code.daw.library.user.User;
import es.urjc.code.daw.library.user.UserRepository;

@Entity
public class Comentario {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id = -1;
	
	private long evento;
	
	private String comentario;
	
	private double valoracion;
	
	private String fecha;
	
	private String usuario;
	
	private String hora;
	
	public Comentario() {}
		
	public Comentario(long evento, String reseña, double valoracion, String usuario) {
		this.evento = evento;
		this.comentario = reseña;
		this.valoracion = valoracion;
		DateFormat formatoDias = new SimpleDateFormat("dd/MM/yyyy");
		fecha = formatoDias.format(new Date());
		DateFormat formatoHoras = new SimpleDateFormat("HH:mm");
		this.hora = formatoHoras.format(new Date());
		this.usuario = usuario;
		
	}
	
	public long getId(){
		return this.id;
	}
	
	public long getEvento(){
		return this.evento;
	}
	
	public String getComentario(){
		return this.comentario;
	}
	
	public double getValoracion(){
		return this.valoracion;
	}
	
	public String getFecha(){
		return this.fecha;
	}
	
	public void setFecha(){
		DateFormat formatoDias = new SimpleDateFormat("dd/MM/yyyy");
		fecha = formatoDias.format(new Date());
	}
	
	public String getHora(){
		return this.hora;
	}
	
	public void setHora(){
		DateFormat formatoHoras = new SimpleDateFormat("HH:mm");
		this.hora = formatoHoras.format(new Date());
	}
	
	public String getUsuario(){
		return this.usuario;
	}
}