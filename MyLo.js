// Funciones para dibujar a Mylo
function MyLo_Tocado(x,y){
	push();
	translate(x,y);
	// Cambiar el ancho del lápiz
	strokeWeight(5);	
	// Cabeza cuando está quieto
	stroke(55,100,0);       // Color de la cabeza
	triangle(
		0 , 0,   // Esquina superior izquierda
		200, 0,   // Esquina superior derecha
		100, 100    // Esquina inferior
	);
	// Ojos                 
	stroke(255,100,0);      // Color de los ojos
	line (60,35,90,35+5);  
	line (111,35+5,142,35);
	// Boca
	stroke(255,100,0);      // Color de la boca     
	circle(100,65,25);
	// Pelo
	stroke(0,100,255);      // Color del pelo
	line ( 95,-15,75,15);
	line (115,-15,95,15);
	pop();
}

function MyLo_Quieto(x,y){
	push();
	translate(x,y);
	// Cambiar el ancho del lápiz
	strokeWeight(5);	
	// Cabeza cuando está quieto
	stroke(55,100,0);       // Color de la cabeza
	triangle(
		0 , 0,   // Esquina superior izquierda
		200, 0,   // Esquina superior derecha
		100, 100    // Esquina inferior
	);
	// Ojos                 
	stroke(255,100,0);      // Color de los ojos
	line (110-50,135-100,140-50,135-100);  
	line (161-50,135-100,192-50,135-100);
	// Boca
	stroke(255,100,0);      // Color de la boca     
	line (140-50,170-100,160-50,170-100);
	// Pelo
	stroke(0,100,255);      // Color del pelo
	line (145-50,85-100,125-50,115-100);
	line (165-50,85-100,145-50,115-100);
	pop();
}


function MyLo_Izquierda(x,y){
	push();
	translate(x,y);
	// Cambiar el ancho del lápiz
	strokeWeight(5);	
	// Cabeza
	stroke(55,100,0);       // Color de la cabeza
	triangle(
		75-50,100-100,   // Esquina superior izquierda
		250-50,125-100,   // Esquina superior derecha
		150-50,200-100    // Esquina inferior
	);	
	// Ojos de sorpresa
	stroke(255,100,0);      // Color de los ojos
	circle(125-50, 135-100,20);
	circle(175-50, 135-100,20);
	// Boca de gusto
	stroke(255,100,0);      // Color de la boca
	line (150-50,170-100,170-50,160-100);
	// Pelo
	stroke(0,100,255);      // Color del pelo
	line (145+40-50,85-5-100,125+20-50,115-15-100);
	line (165+40-50,85-5-100,145+20-50,115-15-100);
	pop();
}

function MyLo_Derecha(x,y){
	push();
	translate(x,y);
	// Cambiar el ancho del lápiz
	strokeWeight(5);	
	// Cabeza 
	stroke(55,100,0);       // Color de la cabeza
	triangle(
		50-50 , 125-100,   // Esquina superior izquierda
		225-50, 100-100,   // Esquina superior derecha
		150-50, 200-100    // Esquina inferior
	);
	
	// Ojos de sorpresa
	stroke(255,100,0);      // Color de los ojos
	circle(125-50, 135-100,20);
	circle(175-50, 135-100,20);
	// Boca de serio
	stroke(255,100,0);      // Color de la boca
	line (150-50,170-100,170-50,160-100);
	// Pelo
	stroke(0,100,255);      // Color del pelo
	line (145-50-50,85-100,125-50,115-10-100);
	line (165-50-50,85-100,145-50,115-10-100);
	pop();
}