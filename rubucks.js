function rubucks() {
	
	var CANVAS_HEIGHT = 800;
	var CANVAS_WIDTH = 800;
	var NUM_CUBELETS = 26;
	
	var VERTICES = [
		0.0, 0.0, 0.0,
		1.0, 0.0, 0.0,
		0.0, 1.0, 0.0,
		0.0, 0.0, 1.0,
		1.0, 1.0, 0.0,
		1.0, 0.0, 1.0,
		0.0, 1.0, 1.0,
		1.0, 1.0, 1.0,
    	];
	
	var canvas;
	var gl;
	
	var cubeBuffer;
	var cubelets = [];
	
	this.InitGL = function() {

		canvas = document.getElementById('canvas');
		canvas.style.height = CANVAS_HEIGHT+'px';
		canvas.style.width = CANVAS_WIDTH+'px';

		try {
			gl = canvas.getContext('experimental-webgl');
			gl.viewport(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		}
		catch(e) {}
		
		if (!gl) {
			alert("GET A REAL BROWSER FOO");
			return;
		}
		
		gl.viewport(0, 0, canvas.width, canvas.height); 
		gl.clearColor(1, 0, 0, 1);
		gl.clear(gl.COLOR_BUFFER_BIT);
	}
	
	this.InitShaders = function() {

		
	}

	this.Run = function() {

		this.InitGL();
		this.InitShaders();
		this.DrawSimpleCube();
	}
	
	this.DrawSimpleCube = function() {
	
		cubeBuffer = gl.createBuffer();
		
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeBuffer); // tell webgl what buffer to use
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(VERTICES), gl.STATIC_DRAW); // setup the buffer data
		
		cubeBuffer.itemSize = 3; // because it's 3d!
		cubeBuffer.numItems = (VERTICES.length / cubeBuffer.itemSize); // number of vertices
		
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
		
		gl.vertexAttribPointer(0, cubeBuffer.itemSize, gl.FLOAT, false, 0, 0);
		
		gl.drawArrays(gl.GL_QUADS, 0, cubeBuffer.numItems);
	}
}
