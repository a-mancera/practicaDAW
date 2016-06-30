package es.urjc.code.daw.library.eventos;

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
public class Evento {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id = -1;
	private String nombre;
	
	private String resumen;
	
	private String descripcion;
	
	private String direccion;
	
	private String ciudad;
	
	private String patrocinador;
	
	private String organizador;
	
	private String tipo;
	
	private String fecha;
	
	private String hora;
	
	private String foto;
	//@OneToMany(cascade=CascadeType.ALL)
	//private List<Reseña> reseñas = new ArrayList<>();
	
	public Evento() {}

	public Evento(String nombre, String resumen, String descripcion,String direccion, String ciudad,
			String patrocinador, String organizador,String tipo, String fecha,String hora) {
		this.nombre = nombre;
		this.resumen = resumen;
		this.descripcion = descripcion;
		this.direccion = direccion;
		this.ciudad = ciudad;
		this.patrocinador = patrocinador;
		this.organizador = organizador;
		this.tipo = tipo;
		this.fecha = fecha;
		this.hora = hora;
		this.foto = "defecto";
	}
	
	/*public Evento(String nombre, String resumen, String descripcion,String direccion, String patrocinador, 
			String organizador,String tipo, String fecha,String hora, List<Reseña> reseñas) {
		this.nombre = nombre;
		this.resumen = resumen;
		this.descripcion = descripcion;
		this.direccion = direccion;
		this.patrocinador = patrocinador;
		this.organizador = organizador;
		this.tipo = tipo;
		this.fecha = fecha;
		this.hora = hora;
		this.reseñas = reseñas;
	}*/
	
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
	
	public String getPatrocinador(){
		return this.patrocinador;
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
	
	public String getFoto(){
		return this.foto;
	}
	
	public String getCiudad(){
		return this.ciudad;
	}
	/*public List<Reseña> getReseñas(){
		return this.reseñas;		
	}*/
}