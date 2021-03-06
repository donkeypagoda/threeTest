let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let cam = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100);
cam.position.set(0, 0, 50);
cam.lookAt(new THREE.Vector3(0, 0, 0));

let scene = new THREE.Scene();
let polyArr = [];
let size = 3;
let speed = 150;

let sizePick = document.querySelector("#sizePick");
sizePick.onchange = () => {
  size = sizePick.value;
}

let speedPick = document.querySelector("#speedPick");
speedPick.onchange = () => {
  speed = 3000 / speedPick.value;
  console.log(speed);
}

const circleAdd = document.querySelector("#circleAdd");
circleAdd.onclick = () => {
  let circleShape = new Circle(size, speed, [0,0,0])
  scene.add(circleShape.group);
  polyArr.push(circleShape);
  // console.log(circleShape.group);
  console.log(scene);
}

const lineAdd = document.querySelector("#lineAdd");
lineAdd.onclick = () => {
  let lineShape = new Line(size, speed, [0,0,0])
  scene.add(lineShape.group);
  polyArr.push(lineShape);
    console.log(scene);
}

const triangleAdd = document.querySelector("#triangleAdd");
triangleAdd.onclick = () => {
  let triangleShape = new Triangle(size, speed, [0,0,0])
  scene.add(triangleShape.group);
  polyArr.push(triangleShape);
}

const squareAdd = document.querySelector("#squareAdd");
squareAdd.onclick = () => {
  let squareShape = new Square(size, speed, [0,0,0])
  scene.add(squareShape.group);
  polyArr.push(squareShape);
}

const pentagonAdd = document.querySelector("#pentagonAdd");
pentagonAdd.onclick = () => {
  let pentagonShape = new Pentagon(size, speed, [0,0,0])
  scene.add(pentagonShape.group);
  polyArr.push(pentagonShape);
}

const hexagonAdd = document.querySelector("#hexagonAdd");
hexagonAdd.onclick = () => {
  let hexagonShape = new Hexagon(size, speed, [0,0,0])
  scene.add(hexagonShape.group);
  polyArr.push(hexagonShape);
}

const heptagonAdd = document.querySelector("#heptagonAdd");
heptagonAdd.onclick = () => {
  let heptagonShape = new Heptagon(size, speed, [0,0,0])
  scene.add(heptagonShape.group);
  polyArr.push(heptagonShape);
}
const lastRemove = document.querySelector("#lastRemove");
lastRemove.onclick = () => {
  scene.children.pop()
  polyArr.pop()
}

function animate(){
  requestAnimationFrame(animate);
  for(let i = 0; i < scene.children.length; i++){
    polyArr[i].rotate();
  }

  renderer.render(scene, cam);
}
animate()
