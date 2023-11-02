import initShaders from "./initShaders.js"

let canvas = document.getElementById('webgl')
let gl = canvas.getContext('webgl')


//3D
let vertexShader = `
attribute vec2 a_position;
attribute vec3 a_color;
varying vec3 v_color;
void main() {
  v_color = a_color;
  gl_Position = vec4(a_position, 0.0, 1.0);
  gl_PointSize = 10.0;
}
`
let fragmentShader = `
precision mediump float;
varying vec3 v_color;

 void main() {
  gl_FragColor = vec4(v_color, 1.0);
 }
`

initShaders(gl, vertexShader, fragmentShader)

let vertices = [
  -0.5, 0.0, 1.0, 0.0, 0.0,
  0.5, 0.0, 0.0, 1.0, 0.0,
  0.0, 0.8, 0.0, 0.0, 1.0
]

vertices = new Float32Array(vertices)
let FSIZE = vertices.BYTES_PER_ELEMENT

//清空canvas画布
gl.clearColor(0.5, 0.5, 0.5, 1.0)
gl.clear(gl.COLOR_BUFFER_BIT)


let buffer = gl.createBuffer()

gl.bindBuffer(gl.ARRAY_BUFFER, buffer)

gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)

let a_position = gl.getAttribLocation(gl.program, 'a_position')
gl.vertexAttribPointer(a_position, 2, gl.FLOAT, false, 5*FSIZE, 0)

let a_color = gl.getAttribLocation(gl.program, 'a_color')
gl.vertexAttribPointer(a_color, 3, gl.FLOAT, false, 5*FSIZE, 2*FSIZE)

gl.enableVertexAttribArray(a_position)
gl.enableVertexAttribArray(a_color)

// gl.drawArrays(gl.TRIANGLES, 0, 3)
// gl.drawArrays(gl.POINT, 0, 2)
gl.drawArrays(gl.LINES, 1, 3)





