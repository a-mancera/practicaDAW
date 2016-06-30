package es.urjc.code.daw.library.propuestas;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.springframework.beans.factory.annotation.Autowired;

import es.urjc.code.daw.library.reseña.Comentario;
import es.urjc.code.daw.library.user.User;
import es.urjc.code.daw.library.user.UserRepository;

@Entity
public class PropuestaEvento {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id = -1;
	private String nombre;
	
	private String resumen;
	
	private String descripcion;
	
	private String direccion;
	
	private String organizador;
	
	private String tipo;
	
	private String fecha;
	
	private String hora;
	
	private double estimacionPatrocinio;
	
	public PropuestaEvento() {}

	public PropuestaEvento(String nombre, String resumen, String descripcion,String direccion,  
			String organizador,String tipo, String fecha,String hora, double estimacionPatrocinio) {
		this.nombre = nombre;
		this.resumen = resumen;
		this.descripcion = descripcion;
		this.direccion = direccion;
		this.organizador = organizador;
		this.tipo = tipo;
		this.fecha = fecha;
		this.hora = hora;
		this.estimacionPatrocinio = estimacionPatrocinio;
	}
		
	public long getId(){
		return this.id;
	}
	
	public String getNombre(){
		return this.nombre;
	}
	
	public String getDescripcion(){
		return this.descripcion;
	}
	
	public String getDireccion(){
		return this.direccion;
	}
	
	public String getOrganizador(){
		return this.organizador;
	}
	
	public String getTipo(){
		return this.tipo;
	}
	
	public String getResumen(){
		return this.resumen;
	}
	
	public String getFecha(){
		return this.fecha;
	}
	
	public String getHora(){
		return this.hora;
	}
	
	public double getEstimacionPatrocinio(){
		return this.estimacionPatrocinio;
	}
	
	/*public List<Reseña> getReseñas(){
		return this.reseñas;		
	}*/
}
