class ScreensClase{
	constructor(){
	}	
	
	displayScreenScore(Score) {
		var puntosLuz = Score.puntosLuz;
		var puntosSombra = Score.puntosSombra;
		push();
		let xCentro = width / 2;  // Centro horizontal de la pantalla
		let yPos = height * 3 / 4;  // 3/4 de la altura de la pantalla
		// Título "LUCES Y SOMBRAS"
		textAlign(CENTER, CENTER);
		fill(255);  
		textSize(42);
		text("", xCentro, yPos - 40);
		// Puntos de Luz
		textSize(40);
		text( puntosLuz + " LUCES", xCentro, yPos);
		// Puntos de Sombra
		text(puntosSombra +" SOMBRAS" , xCentro, yPos + 40);  // Posicionar los puntos de sombra más abajo
		pop();
	}
	
	displayScreenStart(){
		push();
		background(0);
		textAlign(CENTER, CENTER);
		textSize(32);
		fill(255);
		text("Run MyLo, Ruuuun!", width/2, height/2 -50);
		text("ENTER para Start", width/2, height/2 );
		pop();
	}
	
	displayScreenGameOver(){
		push();
		background(255, 0, 0);
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255);
    text("Game Over", width / 2, height / 2 - 50);
    text("Presiona R para Reset", width / 2, height / 2);
		pop();
	}
}