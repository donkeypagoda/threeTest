class Pentagon {
  constructor (size, centArr) {
    this.size = size;
    this.centArr = centArr;
    this.numbSides = 5;
    this.malletColor = 0xffffff;
    this.malletMap = new THREE.TextureLoader().load('circle.png');
    this.malletMaterial =  new THREE.SpriteMaterial({map: this.malletMap, color: this.malletColor, alphaTest: 0.5, transparent: true});
    this.malletMaterial.color.setHSL( 1.0, 0.3, 0.7 );
    this.lineColor = 0x0000ff;
    this.lineMaterial = new THREE.LineBasicMaterial({ color: this.lineColor });

    //build the a group with lines and mallets
    this.group = helperPolygon(this.numbSides, this.size, this.centArr, this.malletMaterial, this.lineMaterial);
    //
    this.rotationIncrement = Math.PI / 65;
    this.quaternion = new THREE.Quaternion();

    // the callback, could be used to determine gong attack times, and all the other bullshit
    this.group.quaternion.onChange(() => {
      let h = ( 360 * ( 1.0 + Math.abs(this.group.quaternion.z) ) % 360 ) / 360;
      this.group.children[0].material.color.setHSL( h, 0.5, 0.5 );
    })

  } // end of constructor
  rotate(){
    this.quaternion.setFromAxisAngle( new THREE.Vector3( 0, 0, 1 ), this.rotationIncrement );
    this.group.applyQuaternion(this.quaternion);
    // counter for number of rotations, total number of rotations divide by shape sides will be gong trigger point
    console.log(this.quaternion);
  }
}
