import initShaders from "./initShaders.js"

let canvas = document.getElementById('webgl')
let gl = canvas.getContext('webgl')


//3D
let vertexShader = `
attribute vec2 a_position;
attribute float a_size;
varying vec2 v_Test;
void main() {
  v_Test = a_position;
  gl_Position = vec4(a_position, 0.0, 1.0);
  gl_PointSize = a_size;
}
`
let fragmentShader = `
precision mediump float;
uniform vec3 u_color;
varying vec2 v_Test;

 void main() {
  gl_FragColor = vec4(v_Test,0.0, 1.0);
 }
`

initShaders(gl,vertexShader,fragmentShader)


//清空canvas画布
gl.clearColor(0.5,0.5,0.5,1.0)
gl.clear(gl.COLOR_BUFFER_BIT)


let x = 0
let y = 0
let n = 10000;
for (let i = 0; i < n;i++)
{
  let r = i /1000
  x = r * Math.cos(i)
  y = r * Math.sin(i)
  let position = [x,y]
  let a_position = gl.getAttribLocation(gl.program, 'a_position')
  // gl.vertexAttrib2f(a_position, x,y)
  gl.vertexAttrib2f(a_position, ...position)

  let a_size = gl.getAttribLocation(gl.program, 'a_size')
  gl.vertexAttrib1f(a_size, r*5)

  let u_color = gl.getUniformLocation(gl.program, 'u_color')
  gl.uniform3f(u_color, 1.0,1.0,0.0)

  
  //画一个点
  gl.drawArrays(gl.POINTS, 0, 1)
}



