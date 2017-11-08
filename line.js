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
    this.gongYet = false;
    this.gong2Yet = false;
    this.toDegree = function(radians) {
      return radians * (180 / Math.PI);
    }
    this.degs = 0;

    // the callback, could be used to determine gong attack times, and all the other bullshit
    this.group.quaternion.onChange(() => {
      //gong triggering
      const { w, z, x, y} = this.group.quaternion;
      let t1 = 2.0 * (w * z + x * y)
        let t2 = 1.0 - 2.0 * (Math.pow(y,2) + Math.pow(z,2))
        let Z = Math.atan2(t1, t2)
      if (Z > 0) {
        this.degs = Math.floor(this.toDegree(Z))
        // console.log(this.toDegree(Z))
      }
      else {
        this.degs = Math.round(this.toDegree(Z) + 360)
        // console.log(toDegree(Z) + 360)
      }
      if (this.degs === 1 && this.gongYet === false) {
        console.log("gong 1 bitches");
        this.gongYet = true;
      }
      if (this.degs > 3){
        this.gongYet = false;
      }
      if (this.degs === 180 && this.gongYet === false) {
        console.log("gong 2 bitches");
        this.gongYet = true;
      }
      if (this.degs > 183){
        this.gongYet = false;
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
