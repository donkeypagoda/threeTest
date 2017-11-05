class Line {
  constructor (size, centArr) {
    this.size = size;
    this.centArr = centArr;
    this.numbSides = 2;
    this.lineColor = 0x0000ff
    this.malletColor = 0xffffff

    //build the a group with lines and mallets
    this.group = helperPolygon(this.numbSides, this.size, this.centArr, this.malletColor, this.lineColor)
    //
    this.rotationIncrement = Math.PI / 365;
    this.quaternion = new THREE.Quaternion();
    this.quaternion.setFromAxisAngle( new THREE.Vector3( 0, 0, 1 ), this.rotationIncrement );




    //the callback, could be used to determine gong attack times,
    this.quaternion.onChange(function(){
      h = ( 360 * ( 1.0 + Math.abs(this.quaternion.z) ) % 360 ) / 360;
      this.group.malletMaterial.color.setHSL( h, 0.5, 0.5 );
    })

  } // end of constructor
}
