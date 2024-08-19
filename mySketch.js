function preload(){
	initSounds();
}

function setup() {
	createCanvas(8*windowWidth/9, windowHeight);	
	// Pasar estos 	
	Screens = new ScreensClase();
	Juego = new JuegoClase();
}

function draw() {	
	background(255,255,0);
	
	switch(Juego.estado){
			case("Start"):
				Screens.displayScreenStart();
				break;
			case("Play"):
				Juego.update();
				Juego.display();
				Juego.logic();
			  Screens.displayScreenScore(Juego.Score);
				break;
			case("GameOver"):
				Screens.displayScreenGameOver();
				break;
			case("ThEnd"):
				break;
	}	
}

function keyPressed(){	
	Juego.keyPressed(key);
}



