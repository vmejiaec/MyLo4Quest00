class CajaClase{
	constructor(x,y,l,a){
		this.x = x;
		this.y = y;
		this.l = l;
		this.a = a;
	}
	
	update(x, y){
		this.x = x;
		this.y = y;
	}
	
	display(){
		push();
		fill(255,255,255,100);
		stroke(0,0,255);
		rect(this.x,this.y,this.l,this.a);
		pop();		
	}
}
