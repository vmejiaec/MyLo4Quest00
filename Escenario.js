function Bosque(x,y){
	push();	
  Arbol(x, y);
	Arbol(85, 0);
	Arbol(85, 0);	
	pop();
}

function Suelo(sueloY){
	push();
	stroke(55,100,0);
	strokeWeight(5);
	fill(0,255,0);
	rect(0,sueloY,width,sueloY+100);
	pop();
}

function Arbol (x, y){
	stroke(55,100,0);
	strokeWeight(5);
	translate(x,y);
	triangle(
		0-40,170,
		90+40,170,
		45,50);	
	triangle(
		0-20,120,
		90+20,120,
		45,30);
	triangle(
		0,75,
		90,75,
		45,0);
	rect(35,170,20,80);	
}