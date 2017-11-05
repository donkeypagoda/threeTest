let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let cam = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100);
cam.position.set(0, 0, 50);
cam.lookAt(new THREE.Vector3(0, 0, 0));

let scene = new THREE.Scene();
let material1 = new THREE.LineBasicMaterial({ color: 0x0000ff });
let shape1 = helperPolygon(5, 5, [0,0,0]);
let poly1 = new THREE.Line(shape1, material1);
scene.add(poly1);

let material2 = new THREE.LineBasicMaterial({ color: 0xf47442 });
let shape2 = helperPolygon(3, 8, [0,0,0]);
let poly2 = new THREE.Line(shape2, material2);
scene.add(poly2);

let material3 = new THREE.LineBasicMaterial({ color: 0xF213EA });
let shape3 = helperPolygon(2, 3, [0,0,0]);
let poly3 = new THREE.Line(shape3, material3);
scene.add(poly3);

let material4 = new THREE.LineBasicMaterial({ color: 0x13F21B });
let shape4 = helperPolygon(7, 10, [0,0,0]);
let poly4 = new THREE.Line(shape4, material4);
scene.add(poly4);

function animate(){
  requestAnimationFrame(animate);
  poly1.rotation.z += 0.01;
  poly2.rotation.z -= 0.01;
  poly3.rotation.z += 0.02;
  poly4.rotation.z -= 0.02;
  renderer.render(scene, cam);
}
animate()
