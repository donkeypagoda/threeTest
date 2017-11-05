let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let cam = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100);
cam.position.set(0, 0, 50);
cam.lookAt(new THREE.Vector3(0, 0, 0));

let scene = new THREE.Scene();

let poly1 = helperPolygon(5, 5, [0,0,0]);
scene.add(poly1);

let poly2 = helperPolygon(3, 8, [0,0,0]);
scene.add(poly2);

let poly3 = new Line(3, [0,0,0]);
console.log(poly3.group);
scene.add(poly3.group);

let poly4 = helperPolygon(7, 10, [0,0,0]);
scene.add(poly4);

function animate(){
  requestAnimationFrame(animate);
  var quaternion1 = new THREE.Quaternion();
  quaternion1.setFromAxisAngle( new THREE.Vector3( 0, 0, 1 ), Math.PI / 365 );
  poly1.applyQuaternion( quaternion1 );

  var quaternion2 = new THREE.Quaternion();
  quaternion2.setFromAxisAngle( new THREE.Vector3( 0, 0, 1 ), Math.PI / -365 );
  poly2.applyQuaternion( quaternion2 );

  // var quaternion3 = new THREE.Quaternion();
  // poly3.group.quaternion.setFromAxisAngle( new THREE.Vector3( 0, 0, 1 ), Math.PI / 175 );
  // poly3.group.applyQuaternion( poly3.group.quaternion );
  poly3.rotate();


  var quaternion4 = new THREE.Quaternion();
  quaternion4.setFromAxisAngle( new THREE.Vector3( 0, 0, 1 ), Math.PI / -175 );
  poly4.applyQuaternion( quaternion4 );

  renderer.render(scene, cam);
}
animate()
