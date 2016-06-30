package es.urjc.code.daw.library.user;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.fasterxml.jackson.annotation.JsonIgnore;

import es.urjc.code.daw.library.TipoEvento;
import es.urjc.code.daw.library.eventos.Evento;

/**
 * This is the entity to store in database user information. It contains the
 * following basic information:
 * <ul>
 * <li>name: The name of the user. This name have to be used to logIn into the
 * service</li>
 * <li>passwordHash: The hash of the password. The password in never stored in
 * plain text to avoid information leak</li>
 * <li>roles: The roles of this user</li>
 * 
 * To check if a user can be logged into the service, this object is loaded from
 * database and password is verified. If user is authenticated, then this
 * database object is returned to the user.
 * 
 * NOTE: This class is intended to be extended by developer adding new
 * attributes. Current attributes can not be removed because they are used in
 * authentication procedures.
 */

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String name;

	
	private String pass;
	
	private boolean patrocinador;
	
	private String nombre;
	
	private String descripcion;
	
	private String web;
	
	private ArrayList<String> tiposEventos;
	
	private String twitter;
	
	private String facebook;
	
	private String instagram;
	
	private String youtube;
	
	@ElementCollection(fetch = FetchType.EAGER)
	private List<String> roles;
	
	private ArrayList<String> mensajes;
	
	@OneToMany(cascade=CascadeType.ALL)
	private List<Evento> eventos = new ArrayList<>();
	
	public User() {
	}

	public User(String name, String password, String... roles) {
		this.name = name;
		this.pass = new BCryptPasswordEncoder().encode(password);
		this.roles = new ArrayList<>(Arrays.asList(roles));
		this.mensajes = new ArrayList<>();
	}
	
	public User(String name, String password, String nombre, String web,
			ArrayList<String> tipos, String twitter, String facebook, 
			String instagram, String youtube, String descripcion, boolean patrocinador, 
			String... roles) {
		this.name = name;
		this.pass = new BCryptPasswordEncoder().encode(password);
		this.roles = new ArrayList<>(Arrays.asList(roles));
		this.nombre = nombre;
		this.web = web;
		this.tiposEventos = tipos;
		this.twitter = twitter;
		this.facebook = facebook;
		this.instagram = instagram;
		this.youtube = youtube;
		this.descripcion = descripcion;
		this.patrocinador = patrocinador;
		this.mensajes = new ArrayList<>();
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPasswordHash() {
		return pass;
	}

	public void setPass(String passwordHash) {
		this.pass = passwordHash;
	}

	public List<String> getRoles() {
		return roles;
	}

	public void setRoles(List<String> roles) {
		this.roles = roles;
	}
	
	public String getDescripcion(){
		return this.descripcion;
	}
	
	public boolean getPatrocinador(){
		return this.patrocinador;
	}
	
	public String getWeb(){
		return this.web;
	}
	
	public String getNombre(){
		return this.nombre;
	}
	
	public String getTwitter(){
		return this.twitter;
	}
	
	public String getInstagram(){
		return this.instagram;
	}
	
	public String getFacebook(){
		return this.facebook;
	}
	
	public String getYoutube(){
		return this.youtube;
	}
	
	public ArrayList<String> getMensajes(){
		this.mensajes.add("mensaje 1");
		return this.mensajes;
	}
	
	public ArrayList<String> getTiposEventos(){
		return this.tiposEventos;
	}
}