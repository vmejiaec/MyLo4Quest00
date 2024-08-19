class BolaClase{
	constructor(x,y,r){
		this.x = x;
		this.y = y;
		this.r = r;
	}
	
	display(x,y){
		this.x = x;
		this.y = y;
		push();
		stroke(245);
		strokeWeight(6);
		fill(255,255,255,100);
		circle(this.x,this.y,this.r);
		pop();
	}
}