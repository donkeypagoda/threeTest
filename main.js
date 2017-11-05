// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
//
// var renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );
//
// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// var cube = new THREE.Mesh( geometry, material );
// scene.add( cube );
// camera.position.z = 5;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(new THREE.Vector3(0, 0, 0));

var scene = new THREE.Scene();
var material = new THREE.LineBasicMaterial({ color: 0x0000ff });
var geometry = new THREE.Geometry();
let shape = helperPolygon(5, 5, [0,0,0])
var poly = new THREE.Line(shape, material);
scene.add(poly);

function animate(){
  requestAnimationFrame(animate);
  poly.rotation.z += 0.01;
  renderer.render(scene, camera);
}
animate()

//
// function animate() {
// 	requestAnimationFrame( animate );
//   // cube.rotation.x += 0.01;
//   // cube.rotation.y += 0.01;
//   // cube.rotation.z += 0.01;
// 	renderer.render( scene, camera );
// }
// animate();
