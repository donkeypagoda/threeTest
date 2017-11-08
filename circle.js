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
    this.trigger = 0
    // build the gong
    let baseFreq = 250;

// freq ratios for scales, might replace this with arrpeggios
const allTwelve = [1, 16/15, 9/8, 6/5, 5/4, 4/3, 45/32, 3/2, 8/5, 5/3, 16/9, 15/8]

let scaleChoice = minPent;

// attack and relase arrays
const attackArr = [0.2, 0.1, 0.08, 0.06 ,0.05, 0.04, 0.03];
const relArr = [6, 4, 3.5, 2.8, 2.2, 2, 1.9];

//shape choices
const stepChoice = [
  [1],
  [3, 5],
  [3, 5],
  [3, 5, 7],
  [3, 5, 3, 5],
  [3, 5, 7, 1, 5],
  [1, 3, 5, 7, 3, 5],
  [1, 3, 5, 7, 3, 5, 7]
]

// sound structure
const limiter = new Tone.Limiter(-10);
Tone.Master.chain(limiter);

// oscillator and envelope arrays
let oscArr1 = [];
let oscArr2 = [];
let envArr1 = [];
let envArr2 = [];

let synth = new Tone.Synth
synth.oscillator.type = "sine"
synth.envelope.attack = 0.09;
synth.envelope.decay = 0.1;
synth.envelope.sustain = 0.1;
synth.envelope.release = 3;
synth.toMaster();

let synth2 = new Tone.Synth
synth2.oscillator.type = "sine"
synth2.envelope.attack = 0.1;
synth2.envelope.decay = 7;
synth2.envelope.sustain = 7;
synth2.envelope.release = 13;
synth2.toMaster();

let synth3 = new Tone.Synth
synth3.oscillator.type = "sine"
synth3.envelope.attack = 1;
synth3.envelope.decay = 1;
synth3.envelope.sustain = 1;
synth3.envelope.release = 4;
synth3.toMaster();

let synth4 = new Tone.Synth
synth4.oscillator.type = "sine"
synth4.envelope.attack = 0.09;
synth4.envelope.decay = 0.1;
synth4.envelope.sustain = 0.4;
synth4.envelope.release = 20;
synth4.toMaster();

let synth5 = new Tone.Synth
synth5.oscillator.type = "sine"
synth5.envelope.attack = 0.09;
synth5.envelope.decay = 0.1;
synth5.envelope.sustain = 0.1;
synth5.envelope.release = 10;
synth5.toMaster();

let synth6 = new Tone.Synth
synth6.oscillator.type = "sine"
synth6.envelope.attack = 0.09;
synth6.envelope.decay = 0.1;
synth6.envelope.sustain = 0.1;
synth6.envelope.release = 10;
synth6.toMaster();

let synth7 = new Tone.Synth
synth7.oscillator.type = "sine"
synth7.envelope.attack = 0.09;
synth7.envelope.decay = 0.1;
synth7.envelope.sustain = 0.1;
synth7.envelope.release = 22;
synth7.toMaster();

let synth8 = new Tone.Synth
synth8.oscillator.type = "sine"
synth8.envelope.attack = 0.09;
synth8.envelope.decay = 0.1;
synth8.envelope.sustain = 0.1;
synth8.envelope.release = 35;
synth8.toMaster();

//lfo shimmy
let lfo1 = new Tone.LFO(5, -4, 4)

lfo1.fan(synth.oscillator.detune,
        synth2.oscillator.detune,
        synth3.oscillator.detune,
        synth4.oscillator.detune,
        synth5.oscillator.detune,
        synth6.oscillator.detune,
        synth7.oscillator.detune,
        synth8.oscillator.detune
      )

lfo1.start()

function ringMyBell(){
synth.triggerAttackRelease(baseFreq, 0.04) // root
synth2.triggerAttackRelease((baseFreq * allTwelve[10]), 0.02) // m7 up
synth3.triggerAttackRelease((baseFreq * (9/8)), 0.1) // m3 up
synth4.triggerAttackRelease((baseFreq / 2), 0.04)  // oct down
synth5.triggerAttackRelease(baseFreq * (3/2), 0.03) // fifth up
synth6.triggerAttackRelease(baseFreq * 2, 0.01) // oct up
synth7.triggerAttackRelease(baseFreq * (18/8), 0.004) // 9th
synth8.triggerAttackRelease(baseFreq * 2 * (9/8), 0.004) // m3 above high octave


  // for (let i = 0; i < oscArr1.length; i++){
  //   envArr1[i].triggerAttack("+0", 0.08);
  // }
}
let intervalID = setInterval(ringMyBell, 3000)








    // the callback, could be used to determine gong attack times, and all the other bullshit
    this.group.quaternion.onChange(() => {
      // console.log((1000 * Math.abs(this.group.quaternion.z)).toFixed(0));
      this.trigger = (1000 * Math.abs(this.group.quaternion.z)).toFixed(0);
      if(this.trigger === "0"){
        console.log("circle");
      }

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
