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

let poly3 = helperPolygon(2, 3, [0,0,0]);
scene.add(poly3);

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

  var quaternion3 = new THREE.Quaternion();
  quaternion3.setFromAxisAngle( new THREE.Vector3( 0, 0, 1 ), Math.PI / 175 );
  poly3.applyQuaternion( quaternion3 );

  var quaternion4 = new THREE.Quaternion();
  quaternion4.setFromAxisAngle( new THREE.Vector3( 0, 0, 1 ), Math.PI / -175 );
  poly4.applyQuaternion( quaternion4 );

  // poly1.rotation.z += 0.01;
  // poly2.rotation.z -= 0.01;
  // poly3.rotation.z += 0.02;
  // poly4.rotation.z -= 0.02;
  renderer.render(scene, cam);
}
animate()
