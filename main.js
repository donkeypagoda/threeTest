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
geometry.vertices.push(new THREE.Vector3(10, 10, 0));
geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
geometry.vertices.push(new THREE.Vector3(10, -10, 0));
geometry.vertices.push(new THREE.Vector3(10, 10, 0));
var line = new THREE.Line(geometry, material);
scene.add(line);
function animate(){
  requestAnimationFrame(animate);
  line.rotation.z += 0.01;
  renderer.render(scene, camera);
}
animate()

// hexagon
// var numberOfSides = 6,
//     size = 20,
//     Xcenter = 25,
//     Ycenter = 25;
//
// cxt.beginPath();
// cxt.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));
//
// for (var i = 1; i <= numberOfSides;i += 1) {
//     cxt.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
// }
//
// cxt.strokeStyle = "#000000";
// cxt.lineWidth = 1;
// cxt.stroke();
//
// function animate() {
// 	requestAnimationFrame( animate );
//   // cube.rotation.x += 0.01;
//   // cube.rotation.y += 0.01;
//   // cube.rotation.z += 0.01;
// 	renderer.render( scene, camera );
// }
// animate();
