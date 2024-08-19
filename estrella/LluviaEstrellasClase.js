class LluviaEstrellasClase{
	constructor(n){
		this.Estrellas = [];
		for (let i=0; i<n; i++){
			this.Estrellas.push(
				new EstrellitaClase(0,random(100,width-100),random(-500,50),random(0.8,3.5)));
		}
	}
	
	display(){
		for(let Estrella of this.Estrellas){
			Estrella.update();
			Estrella.display();
		}	
	}	
}