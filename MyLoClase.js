class MyLoClase {
	constructor(estado,x,y,velocidad){
		this.x = x;
		this.y = y;
		this.velocidad = velocidad;
		this.estado = estado;
		// Caja
		this.Caja = new CajaClase(this.x, this.y,200,100);
	}
	
	// Reglas para el movimiento
	update(){
		this.x = this.x + this.velocidad;
		// Si llega al margen derecho, Kylo se para
		if (this.x > width-200){
			this.estado = 0;
			this.velocidad = 0;
		}
		// Si llega al margen izquierdo, Kylo se para
		if (this.x < 0){
			this.estado = 0;
			this.velocidad = 0;
		}
	}
	
	// Dibujar a MyLo
	display(){
		// Dibujo la caja
		this.Caja.update(this.x,this.y);
		//this.coord();
		// Determina cual MyLo presentar
		switch(this.estado){
			case 0: // Quieto
				MyLo_Quieto(this.x,this.y);
				break;
			case 1: // Derecha
				MyLo_Derecha(this.x,this.y);
				break;
			case -1: // Izquierda
				MyLo_Izquierda(this.x,this.y);
				break;
			case 2: // Tocado
				MyLo_Tocado(this.x, this.y);
		}
	}
	
	// Gestión del teclado
	keyPressed(key){
	  switch(key){
		case "a":
			this.velocidad = -3;
			this.estado = -1;
			break;
		case "d":
			this.velocidad = 3;
			this.estado = 1;
			break;
		case "s":
			this.velocidad = 0;
			this.estado = 0;
			break;
		}
	}
	
	// Presenta las coordenadas
	coord(){
		push();
		textSize(10);
		fill(0);
		text(round(this.x)+"-"+round(this.y), this.x, this.y);
		pop();
	}
}