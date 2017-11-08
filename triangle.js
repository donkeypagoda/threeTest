class Triangle {
  constructor (size, centArr) {
    this.size = size;
    this.centArr = centArr;
    this.numbSides = 3;
    this.malletColor = 0xffffff;
    this.malletMap = new THREE.TextureLoader().load('circle.png');
    this.malletMaterial =  new THREE.SpriteMaterial({map: this.malletMap, color: this.malletColor, alphaTest: 0.5, transparent: true});
    this.malletMaterial.color.setHSL( 1.0, 0.3, 0.7 );
    this.lineColor = 0x0000ff;
    this.lineMaterial = new THREE.LineBasicMaterial({ color: this.lineColor });

    //build the a group with lines and mallets
    this.group = helperPolygon(this.numbSides, this.size, this.centArr, this.malletMaterial, this.lineMaterial);
    //
    this.rotationIncrement = Math.PI / 150;
    this.degreeIncrement = toDegree(this.rotationIncrement)
    this.quaternion = new THREE.Quaternion();
    this.degs = 0;
    this.gongDegs = makeGongDegArray(this.numbSides)
    this.gongYet = []

    // the callback, could be used to determine gong attack times, and all the other bullshit
    this.group.quaternion.onChange(() => {
      //gong triggering
      this.degreeIncrement = toDegree(this.rotationIncrement)
      this.gongYet = makeGongYetArray(this.numbSides);
      const { w, z, x, y} = this.group.quaternion;
      let t1 = 2.0 * (w * z + x * y)
        let t2 = 1.0 - 2.0 * (Math.pow(y,2) + Math.pow(z,2))
        let Z = Math.atan2(t1, t2)
      if (Z > 0) {
        this.degs = Math.floor(toDegree(Z))
      }
      else {
        this.degs = Math.floor(toDegree(Z) + 360)
      }
      for (let i = 0; i < this.gongDegs.length; i++) {
        if (this.degs > Math.floor((this.gongDegs[i] - this.degreeIncrement)) && this.degs < Math.floor((this.gongDegs[i] + this.degreeIncrement)) && this.gongYet[i] === false){
          this.gongYet[i] = true;
          console.log("gong" + i);
        }
        if (this.degs > Math.floor((this.gongDegs[i] + 25))){ this.gongYet[i] = false}
      }

      //color changes
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
