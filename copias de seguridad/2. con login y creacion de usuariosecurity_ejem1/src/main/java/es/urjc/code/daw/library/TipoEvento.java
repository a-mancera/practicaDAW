package es.urjc.code.daw.library;

public class TipoEvento {
	private String tipo;
	private boolean checked;
	
	public TipoEvento(){}
	
	public TipoEvento(String tipo){
		this.tipo = tipo;
		checked = false;
	}
	
	public String getTipo(){
		return this.tipo;
	}
	
	public boolean getChecked(){
		return this.checked;
	}
	
	public String toString(){
		return "Tipo: "+this.tipo;
		}
}
