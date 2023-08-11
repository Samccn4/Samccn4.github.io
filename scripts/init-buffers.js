function initBuffers(gl) {
    const positionBuffer = initPositionBuffer(gl);
    const colorBuffer = initColorBuffer(gl);
    const indexBuffer = initIndexBuffer(gl);
  
    return {
      position: positionBuffer,
      color: colorBuffer,
      indices: indexBuffer,
    };
  }
  
  function initPositionBuffer(gl) {
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  
    const positions = [
      -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0,
      -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0,
      -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0,
      -1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, -1.0, 1.0,
      1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0,
      -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
  
    return positionBuffer;
  }
  
  function initColorBuffer(gl) {
    const faceColors = [
      [0.000, 0.603, 0.266, 1.0], 
      [0.000, 0.239, 0.647, 1.0], 
      [1.000, 1.000, 1.000, 1.0], 
      [1.000, 0.843, 0.000, 1.0], 
      [0.729, 0.047, 0.184, 1.0], 
      [0.996, 0.313, 0.000, 1.0], 
    ];
  
    var colors = [];
  
    for (var j = 0; j < faceColors.length; ++j) {
      const c = faceColors[j];
      colors = colors.concat(c, c, c, c);
    }
  
    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
  
    return colorBuffer;
  }
  
  function initIndexBuffer(gl) {
    const indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer); 
    const indices = [
      0,
      1,
      2,
      0,
      2,
      3, 
      4,
      5,
      6,
      4,
      6,
      7, 
      8,
      9,
      10,
      8,
      10,
      11, 
      12,
      13,
      14,
      12,
      14,
      15, 
      16,
      17,
      18,
      16,
      18,
      19, 
      20,
      21,
      22,
      20,
      22,
      23, 
    ];
  
    gl.bufferData(
      gl.ELEMENT_ARRAY_BUFFER,
      new Uint16Array(indices),
      gl.STATIC_DRAW
    );
  
    return indexBuffer;
  }