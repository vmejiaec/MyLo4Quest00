function EstrellitaVertices() {	
	let vertices = [];	
	vertices.push({ x:  0*1.5-18, y:  9*1.5-20});
	vertices.push({ x:  8*1.5-18, y:  8*1.5-20});
	vertices.push({ x: 12*1.5-18, y:  0*1.5-20});
	vertices.push({ x: 16*1.5-18, y: 8*1.5-20});
	vertices.push({ x: 24*1.5-18, y: 9*1.5-20});
	vertices.push({ x: 18*1.5-18, y: 15*1.5-20});
	vertices.push({ x: 19*1.5-18, y: 24*1.5-20});
	vertices.push({ x: 12*1.5-18, y: 19*1.5-20});
	vertices.push({ x:  5*1.5-18, y: 24*1.5-20});
	vertices.push({ x:  6*1.5-18, y: 15*1.5-20});
	
  return vertices;
}

function EstrellitaDibujar(x,y) {
	let vertices = EstrellitaVertices();
	push();
	stroke(255,255,255);
	strokeWeight(1);
	
	translate(x,y);
	
  beginShape();
	fill(255,0,255);
  for (let v of vertices) {
    vertex(v.x, v.y);
  }
  endShape(CLOSE);
	
	pop();
}