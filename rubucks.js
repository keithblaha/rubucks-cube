function rubucks() {
	
	var CANVAS_HEIGHT = 800;
	var CANVAS_WIDTH = 800;
	var CANVAS;

	var VERTICES = [
		// Front face
		-1.0, -1.0,  1.0,
		1.0, -1.0,  1.0,
		1.0,  1.0,  1.0,
		-1.0,  1.0,  1.0,

		// Back face
		-1.0, -1.0, -1.0,
		-1.0,  1.0, -1.0,
		1.0,  1.0, -1.0,
		1.0, -1.0, -1.0,

		// Top face
		-1.0,  1.0, -1.0,
		-1.0,  1.0,  1.0,
		1.0,  1.0,  1.0,
		1.0,  1.0, -1.0,

		// Bottom face
		-1.0, -1.0, -1.0,
		1.0, -1.0, -1.0,
		1.0, -1.0,  1.0,
		-1.0, -1.0,  1.0,

		// Right face
		1.0, -1.0, -1.0,
		1.0,  1.0, -1.0,
		1.0,  1.0,  1.0,
		1.0, -1.0,  1.0,

		// Left face
		-1.0, -1.0, -1.0,
		-1.0, -1.0,  1.0,
		-1.0,  1.0,  1.0,
		-1.0,  1.0, -1.0
	];

	colors = [
		[1.0,  1.0,  1.0,  1.0],    // Front face: white
		[1.0,  0.0,  0.0,  1.0],    // Back face: red
		[0.0,  1.0,  0.0,  1.0],    // Top face: green
		[0.0,  0.0,  1.0,  1.0],    // Bottom face: blue
		[1.0,  1.0,  0.0,  1.0],    // Right face: yellow
		[1.0,  0.0,  1.0,  1.0]     // Left face: purple
	]; 

	this.Initialize = function() {

		CANVAS = document.getElementById('canvas');
		CANVAS.style.height = CANVAS_HEIGHT+'px';
		CANVAS.style.width = CANVAS_WIDTH+'px';

		CANVAS.getContext('webgl');
	}

	this.Run = function() {

		this.Initialize();
		this.DrawCube();
	}

	this.DrawCube = function() {

		var generatedColors = [];
		  
		for (j=0; j<6; j++) {

			var c = colors[j];

			for (var i=0; i<4; i++) {
				generatedColors = generatedColors.concat(c);
			}
		}
		  
		  cubeVerticesColorBuffer = gl.createBuffer();
		  gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesColorBuffer);
		  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(generatedColors), gl.STATIC_DRAW);

		var generatedColors = [];
	  
		for (j=0; j<6; j++) {

			var c = colors[j];

			for (var i=0; i<4; i++) {
				generatedColors = generatedColors.concat(c);
			}
		}
	  
		  cubeVerticesColorBuffer = gl.createBuffer();
		  gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesColorBuffer);
		  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(generatedColors), gl.STATIC_DRAW);

ndBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVerticesIndexBuffer);
  setMatrixUniforms();
  gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0);
	var generatedColors = [];
	  
	for (j=0; j<6; j++) {

		var c = colors[j];

		for (var i=0; i<4; i++) {
			generatedColors = generatedColors.concat(c);
		}
	}
	  
	cubeVerticesColorBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesColorBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(generatedColors), gl.STATIC_DRAW);
	}
}


