var screamSound;
var fanfarriaSound;
var startSound;
var endingSound;
var dropSound;

function initSounds(){
	// Carga los sonidos
	soundFormats('mp3', 'ogg');
    screamSound = loadSound('sounds/e-oh.mp3');
	fanfarriaSound = loadSound('sounds/fanfarria.mp3');
	startSound = loadSound('sounds/start.mp3');
	endingSound = loadSound('sounds/ending.mp3');
	dropSound = loadSound('sounds/drop.mp3');
}