let canvas = document.getElementById('webgl')
let gl = canvas.getContext('webgl')


//3D
let vertexSource = `
void main() {
  gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
  gl_PointSize = 10.0;
}
`
let fragmentSource = `
 void main() {
  gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
 }
`

let vertexShader = gl.createShader(gl.VERTEX_SHADER)
let fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)

gl.shaderSource(vertexShader,vertexSource)
gl.shaderSource(fragmentShader,fragmentSource)

gl.compileShader(vertexShader)
gl.compileShader(fragmentShader)

//program
let program = gl.createProgram()
gl.attachShader(program, vertexShader)
gl.attachShader(program,fragmentShader)
gl.linkProgram(program)
gl.useProgram(program)




//清空canvas画布
gl.clearColor(0.5,0.5,0.5,1.0)
gl.clear(gl.COLOR_BUFFER_BIT)

//画一个点
gl.drawArrays(gl.POINTS, 0, 1)

//2D
// let gl = canvas.getContext('2d')
// gl.fillStyle ='red'
// gl.fillRect(0,0,400,400)