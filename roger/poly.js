const helperPolygon = function (numbSides, size, centArr) {
  const group = new THREE.Group();
  let shape = new THREE.Geometry();

  var spriteMap = new THREE.TextureLoader().load('circle.png');
  var material =  new THREE.SpriteMaterial({map:spriteMap, color: 0xffffff, alphaTest: 0.5, transparent: true});
  material.color.setHSL( 1.0, 0.3, 0.7 );

  let lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });


  shape.vertices.push(new THREE.Vector3(centArr[0] +  size * Math.cos(0), centArr[1] +  size *  Math.sin(0), centArr[2]))

  for (let i = 1; i <= numbSides; i++) {
    const point = new THREE.Sprite(material)
    point.position.x = centArr[0] + size * Math.cos(i * 2 * Math.PI / numbSides);
    point.position.y = centArr[1] + size * Math.sin(i * 2 * Math.PI / numbSides);
    point.position.z = centArr[2];


    // add sprite to group
    group.add(point);

    // add vertice to geometry
    shape.vertices.push(point.position);
  }
  const line = new THREE.Line(shape, lineMaterial)

  group.quaternion.onChange(function(){
    h = ( 360 * ( 1.0 + Math.abs(group.quaternion.z) ) % 360 ) / 360;
		material.color.setHSL( h, 0.5, 0.5 );
  })

  group.add(line);

  return group;
}
