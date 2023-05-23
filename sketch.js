var canvas;

function centerCanvas() {
	var x = (windowWidth - width)/2;
	var y = (windowHeight - height)/2;
	canvas.position(x, y);
}

function setup() {
	//create canvas
	canvas = createCanvas(500,500);
	centerCanvas();
}

function windowResized() {
    centerCanvas();
}

function draw() {
	//visit every pixel on canvas
	for(var x = 0; x < 500; x++) {
		for(var y = 0; y < 500; y++) {
			var a = map(x, 0, 500, -2.50, 0.31);
			var b = map(y, 0, 500, -1.37, 1.5);
			
			var max = 55;
			var real = 0;
			var i = 0;
			
			for(var iter = 1; (iter <= max) && (dist(0,0, real, i) < 2); iter++) {
				var rTemp = (real * real) - (i * i) + a;
			i = (2 * real * i) + b;
			real = rTemp;
			}
		if(iter == max+1) {
			stroke(0,0,0);
			point(x,y);
		}
			else {
				stroke(iter%2+10,iter%3,iter*5);
				point(x,y);
			}
		}
	}
}