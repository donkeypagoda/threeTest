let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let cam = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100);
cam.position.set(0, 0, 50);
cam.lookAt(new THREE.Vector3(0, 0, 0));

let scene = new THREE.Scene();
let polyArr = [];

let poly1 = new Pentagon(5, [0,0,0]);
scene.add(poly1.group);
polyArr.push(poly1);

let poly2 = new Triangle(8, [0,0,0]);
scene.add(poly2.group);
polyArr.push(poly2);

let poly3 = new Line(3, [0,0,0]);
scene.add(poly3.group);
polyArr.push(poly3);

let poly4 = new Heptagon(10, [0,0,0]);
scene.add(poly4.group);
polyArr.push(poly4);

let poly5 = new Circle(6, [0,0,0]);
scene.add(poly5.group);
polyArr.push(poly5);

let poly6 = new Hexagon(12, [0,0,0]);
scene.add(poly6.group);
polyArr.push(poly6);

let poly7 = new Square(11, [0,0,0]);
scene.add(poly7.group);
polyArr.push(poly7);

function animate(){
  requestAnimationFrame(animate);
  for(let i = 0; i < scene.children.length; i++){
    polyArr[i].rotate();
  }
  // poly1.rotate();
  //
  // poly2.rotate();
  //
  // poly3.rotate();


  // var quaternion4 = new THREE.Quaternion();
  // quaternion4.setFromAxisAngle( new THREE.Vector3( 0, 0, 1 ), Math.PI / -175 );
  // poly4.applyQuaternion( quaternion4 );

  renderer.render(scene, cam);
}
animate()
