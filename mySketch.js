var screamSound;
var fanfarriaSound;
var startSound;
var endingSound;
var dropSound;

function preload(){
	// Carga los sonidos
	soundFormats('mp3', 'ogg');
    screamSound = loadSound('e-oh.mp3');
	fanfarriaSound = loadSound('fanfarria.mp3');
	startSound = loadSound('start.mp3');
	endingSound = loadSound('ending.mp3');
	dropSound = loadSound('drop.mp3');
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



