class Rotator{
  constructor(){
    this.currentPosition = 0;
    this.gongValue = 0;
    this.quaternion = new THREE.Quaternion();
  }
  rotate(){
      this.currentPosition += this.rotationIncrement;

      if (this.currentPosition > (2 * Math.PI)){
        this.currentPosition = 0;
        this.gongValue = 0;
      }
      if(this.currentPosition > this.gongValue ){
        console.log('gong', this.gongValue);
        const arc = (2 * Math.PI) / this.numbSides;
        this.gongValue = this.gongValue + arc;
      }

      this.quaternion.setFromAxisAngle( new THREE.Vector3( 0, 0, 1 ), this.rotationIncrement );
      this.group.applyQuaternion(this.quaternion);
    }
  addGroup(group){
    this.group = group;
  }
}
