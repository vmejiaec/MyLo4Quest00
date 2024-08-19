class EstrellitaClase{
	constructor(estado, x, y, velocidad){
		this.x = x;
		this.y = y;
		this.velocidad = velocidad;
		this.estado = estado;
		//
		this.Bola = new BolaClase(this.x, this.y, 35);
	}
	
	update(){
		this.y = this.y + this.velocidad;
	}
	
	display(){		
		EstrellitaDibujar(this.x,this.y);
		this.Bola.display(this.x, this.y);
		//this.displayCoord();
	}
	
	displayCoord(){
		push();
		textSize(10);
		fill(0);
		text(round(this.x)+"-"+round(this.y), this.x, this.y);
		pop();
	}
}