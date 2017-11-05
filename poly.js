const helperPolygon = function (numbSides, size, centArr) {
  let shape = new THREE.Geometry();
  shape.vertices.push(new THREE.Vector3(centArr[0] +  size * Math.cos(0), centArr[1] +  size *  Math.sin(0), centArr[2]))
  for (let i = 1; i <= numbSides; i++) {
      shape.vertices.push(new THREE.Vector3(centArr[0] + size * Math.cos(i * 2 * Math.PI / numbSides), centArr[1] + size * Math.sin(i * 2 * Math.PI / numbSides), centArr[2]));
  }
  console.log(shape.vertices);
  return shape;
  }



// cxt.beginPath();
// cxt.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));


// cxt.strokeStyle = "#000000";
// cxt.lineWidth = 1;
// cxt.stroke();
