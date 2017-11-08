const rotationTable = Array.from(new Array(2512), (x, i) => (i * 0.25) + 0.25);

// main polygon and mallet group constructor function
const helperPolygon = function (numbSides, size, centArr, malletMaterial, lineMaterial) {
  const group = new THREE.Group();
  let shape = new THREE.Geometry();

  //adding all the mallet and shape vertices
  shape.vertices.push(new THREE.Vector3(centArr[0] +  size * Math.cos(0), centArr[1] +  size *  Math.sin(0), centArr[2]))

  for (let i = 1; i <= numbSides; i++) {
    let mallet = new THREE.Sprite(malletMaterial)
    mallet.position.x = centArr[0] + size * Math.cos(i * 2 * Math.PI / numbSides);
    mallet.position.y = centArr[1] + size * Math.sin(i * 2 * Math.PI / numbSides);
    mallet.position.z = centArr[2];
    group.add(mallet);
    shape.vertices.push(mallet.position);
  }
  let line = new THREE.Line(shape, lineMaterial)
  group.add(line);
  return group;
}

const makeGongDegArray = function(numbSides){
  let gongDegs = [];
  for (let i = 0; i < numbSides; i++){
    gongDegs.push((360 / numbSides) * i + 1)
  }
  return gongDegs;
}

const makeGongYetArray = function(numbSides){
  let gongYet = [];
  for (let i = 0; i < numbSides; i++){
    gongYet.push(false)
  }
  return gongYet;
}
const toDegree = function(radians) {
  return radians * (180 / Math.PI);
}
