class Line {
  constructor (size, centArr) {
    this.size = size;
    this.centArr = centArr;
    this.numbSides = 2;
    this.malletColor = 0xffffff;
    this.malletMap = new THREE.TextureLoader().load('circle.png');
    this.malletMaterial =  new THREE.SpriteMaterial({map: this.malletMap, color: this.malletColor, alphaTest: 0.5, transparent: true});
    this.malletMaterial.color.setHSL( 1.0, 0.3, 0.7 );
    this.lineColor = 0x0000ff;
    this.lineMaterial = new THREE.LineBasicMaterial({ color: this.lineColor });
    this.trigger = true;

    //build the a group with lines and mallets
    this.group = helperPolygon(this.numbSides, this.size, this.centArr, this.malletMaterial, this.lineMaterial);
    //
    this.rotationIncrement = Math.PI / 365;
    this.quaternion = new THREE.Quaternion();
    this.check = 0;
    this.hold = 0;
    // this.keeper = this.group.quaternion.z
    // the callback, could be used to determine gong attack times, and all the other bullshit
    this.group.quaternion.onChange(() => {
      //gong triggering

      if(this.check <= Math.round(100000 * Math.abs(this.group.quaternion.z))){
        this.check = Math.round(100000 * Math.abs(this.group.quaternion.z))
        this.hold = this.check;
        console.log(this.hold);
      }
      else{
        this.hold = Math.round(100000 * (1 - Math.abs(this.group.quaternion.z)))
        console.log(this.hold);
      }

      // color changes
      let h = ( 360 * ( 1.0 + Math.abs(this.group.quaternion.z) ) % 360 ) / 360;
      this.group.children[0].material.color.setHSL( h, 0.5, 0.5 );
    })

  } // end of constructor
  rotate(){
    this.quaternion.setFromAxisAngle( new THREE.Vector3( 0, 0, 1 ), this.rotationIncrement );
    this.group.applyQuaternion(this.quaternion);
  }
}
