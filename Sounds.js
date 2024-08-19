var screamSound;
var fanfarriaSound;
var startSound;
var endingSound;
var dropSound;

function initSounds(){
	// Carga los sonidos
	soundFormats('mp3', 'ogg');
    screamSound = loadSound('e-oh.mp3');
	fanfarriaSound = loadSound('fanfarria.mp3');
	startSound = loadSound('start.mp3');
	endingSound = loadSound('ending.mp3');
	dropSound = loadSound('drop.mp3');
}