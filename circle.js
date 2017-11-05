class Circle {
  constructor (size, centArr) {
    this.size = size;
    this.centArr = centArr;

    this.malletColor = 0xffffff;
    this.malletMap = new THREE.TextureLoader().load('circle.png');
    this.malletMaterial =  new THREE.SpriteMaterial({map: this.malletMap, color: this.malletColor, alphaTest: 0.5, transparent: true});
    this.malletMaterial.color.setHSL( 1.0, 0.3, 0.7 );
    this.lineColor = 0x0000ff;
    this.lineMaterial = new THREE.LineBasicMaterial({ color: this.lineColor });

    //build the group
    this.group = new THREE.Group();
    // add the mallet
    this.mallet = new THREE.Sprite(this.malletMaterial)
    this.mallet.position.x = centArr[0] + size * Math.cos(0);
    this.mallet.position.y = centArr[1] + size * Math.sin(0);
    this.mallet.position.z = centArr[2];
    this.group.add(this.mallet);
    // add the line
    this.circle = new THREE.CircleGeometry(this.size, 1000);
    this.circle.vertices.shift();
    this.group.add(new THREE.Line(this.circle, this.lineMaterial));

    this.rotationIncrement = Math.PI / 365;
    this.quaternion = new THREE.Quaternion();

    // the callback, could be used to determine gong attack times, and all the other bullshit
    this.group.quaternion.onChange(() => {
      let h = ( 360 * ( 1.0 + Math.abs(this.group.quaternion.z) ) % 360 ) / 360;
      // note that if below children[1] is chosen, it changes the line instead of the mallet
      this.group.children[0].material.color.setHSL( h, 0.5, 0.5 );
    })

  } // end of constructor
  rotate(){
    this.quaternion.setFromAxisAngle( new THREE.Vector3( 0, 0, 1 ), this.rotationIncrement );
    this.group.applyQuaternion(this.quaternion);
  }
}