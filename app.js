import initShaders from "./initShaders.js"

let canvas = document.getElementById('webgl')
let gl = canvas.getContext('webgl')


//3D
let vertexShader = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`
let fragmentShader = `

 void main() {
  gl_FragColor = vec4(1.0,1.0,0.0, 1.0);
 }
`

initShaders(gl, vertexShader, fragmentShader)

let vertices = [
  -0.5, 0.0,
  0.5, 0.0,
  0.0, 0.8
]

vertices = new Float32Array(vertices)


//清空canvas画布
gl.clearColor(0.5, 0.5, 0.5, 1.0)
gl.clear(gl.COLOR_BUFFER_BIT)


let buffer = gl.createBuffer()

gl.bindBuffer(gl.ARRAY_BUFFER, buffer)

gl.bufferData(gl.ARRAY_BUFFER,vertices, gl.STATIC_DRAW)

let a_position = gl.getAttribLocation(gl.program, 'a_position')
gl.vertexAttribPointer(
  a_position, 2, gl.FLOAT, false, 0, 0)

  gl.enableVertexAttribArray(a_position)

  gl.drawArrays(gl.TRIANGLES, 0, 3)





