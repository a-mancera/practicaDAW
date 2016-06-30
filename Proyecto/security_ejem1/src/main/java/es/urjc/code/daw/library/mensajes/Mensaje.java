package es.urjc.code.daw.library.mensajes;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Mensaje {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id = -1;
	
	private String remitente;
	
	private String emisor;
	
	private String asunto;
	
	private String mensaje;
	
	private boolean leido;
	
	private String fecha;
	
	public Mensaje() {}

	public Mensaje(String remitente, String emisor, String asunto, String mensaje) {
		this.remitente = remitente;
		this.emisor = emisor;
		this.asunto = asunto;
		this.mensaje = mensaje;
		this.leido = false;
		DateFormat formatoDias = new SimpleDateFormat("dd/MM/yyyy HH:mm");
		this.fecha = formatoDias.format(new Date());
	}
	
	public long getId(){
		return this.id;
	}
	
	public void setId(long id){
		this.id = id;
	}
	
	public String getRemitente(){
		return this.remitente;
	}
	
	public String getEmisor(){
		return this.emisor;
	}
	
	public String getAsunto(){
		return this.asunto;
	}
	
	public String getMensaje(){
		return this.mensaje;
	}
	
	public boolean getLeido(){
		return this.leido;
	}
	
	public String getFecha(){				
		return fecha;
	}
}
