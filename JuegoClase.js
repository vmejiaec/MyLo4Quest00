class JuegoClase{
	constructor(){			
		this.Init();		
	}
	
	Init(){
		this.estado = "Start"; // "Play", "GameOver", "TheEnd"
		this.MyLo = new MyLoClase(0,300,400,0);	
		this.LluviaEstrellas = new LluviaEstrellasClase(40);
		this.Score = new ScoreClase(400,100);	
		startSound.play();
	}
	
	display(){
		Suelo(500);
		this.MyLo.display();
		this.LluviaEstrellas.display();
	}
	
	update(){
		this.MyLo.update();
	}
	
	// Acciones para cuando se presiona una tecla  ---------------------------------------------
	keyPressed(key){
		// Pasa la tecla a MyLo
		this.MyLo.keyPressed(key);
		// Gestiona el teclao para el cambio de estados del juego
		switch(this.estado){
			case "Start":
				if (key == "Enter"){
					this.estado = "Play";
					startSound.stop();
					fanfarriaSound.play();
				}
				break;
			case "Play":
				break;
			case "GameOver":
				if (key == "r"){
					this.estado = "Start";
					endingSound.stop();
					this.Init();
				}
				break;
			case "TheEnd":
				break;				
		}
	}
	
	// Lo que ocurre cuando una estrella llega al piso  ----------------------------------------
	estrellada(i){
		// Borra la estrella que llega al piso
		this.LluviaEstrellas.Estrellas.splice(i, 1);
		// Suena una gota en la lata
		dropSound.play();
		// Aumenta los puntos de sombra en el score
		this.Score.update(0,1);
	}
	
	// Lo que ocurre cuando hay una colisión  --------------------------------------------------
	colision(i) {
		// Si hay colisión, elimina la estrella
		this.LluviaEstrellas.Estrellas.splice(i, 1);
		// Crea una nueva estrella y la pone arriba
		this.LluviaEstrellas.Estrellas.push(new EstrellitaClase(0,random(50,800),random(-500,200),random(0.8,3.5)));
		// Detengo a MyLo y le cambio la cara
		this.MyLo.velocidad = 0;
		this.MyLo.estado = 2;
		screamSound.play();
		// Actualiza el score con un punto de luz
		this.Score.update(1,0);
	}

// Lógica del juego ---------------------------------------------------------------------------	
	logic(){
		var n = this.LluviaEstrellas.Estrellas.length;	  
		// Verifica el fin del juego
		if (n == 0) {
			this.estado = "GameOver";
			endingSound.play();
		}
		// Verificar Colisiones
		for (let i = n - 1; i >= 0; i--) {
			let Estrella = this.LluviaEstrellas.Estrellas[i];
			if (this.hayPiso(Estrella.Bola)){
				this.estrellada(i);
				continue;
			} 
			if (this.hayColision( this.MyLo.Caja, Estrella.Bola)) {
				this.colision(i);				
				continue;
			}
		}
	}
	
	// Averigua si ha llegado al piso  -----------------------------------------------------------
	hayPiso(bola){
		if (bola.y + bola.r/2 > 500){
			return true;
		}
		return false;
	}
	// Averigua si hay colisión entre la caja y la bola	 -----------------------------------------
	hayColision(caja, bola){
		if (bola.x + bola.r/2 > caja.x && bola.x - bola.r/2 < caja.x + caja.l) {
			if (bola.y + bola.r/2 > caja.y && bola.y - bola.r/2 < caja.y + caja.a) {
				return true;
			}			
		}
		return false;
	}

}

