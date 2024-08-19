class ScoreClase{
	constructor(x,y){
		this.x = x;
		this.y = y;
		this.puntosLuz = 0;
		this.puntosSombra = 0;
	}
	
	update(puntoLuz, puntoSombra){
		this.puntosLuz += puntoLuz;
		this.puntosSombra += puntoSombra;
	}
	
	display(){
		push();
		textSize(30);
		fill(0);
		text("Luces: "+this.puntosLuz,this.x,this.y);
		text("Sombras: "+this.puntosSombra,this.x,this.y+50);
		pop();
	}
	
}