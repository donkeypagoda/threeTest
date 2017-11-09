let baseFreq = 250;

// freq ratios for scales, might replace this with arrpeggios
const allTwelve = [1, 16/15, 9/8, 6/5, 5/4, 4/3, 45/32, 3/2, 8/5, 5/3, 16/9, 15/8]

// // attack and relase arrays
const attackArr = [0.1, 0.08, 0.06 ,0.05, 0.04, 0.03];
// const relArr = [6, 4, 3.5, 2.8, 2.2, 2, 1.9];


// sound structure
const limiter = new Tone.Limiter(-10);
Tone.Master.chain(limiter);

let synth = new Tone.Synth
synth.oscillator.type = "sine"
synth.envelope.attack = 0.09;
synth.envelope.decay = 0.1;
synth.envelope.sustain = 0.1;
synth.envelope.release = 3;
synth.toMaster();

let synth2 = new Tone.Synth
synth2.oscillator.type = "sine"
synth2.envelope.attack = 0.09;
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

function circleGong(){
  synth.triggerAttackRelease(baseFreq, 0.04) // root
  synth2.triggerAttackRelease(baseFreq * allTwelve[10], 0.02) // m7 up
  synth3.triggerAttackRelease(baseFreq * allTwelve[4], 0.1) // M3
  synth4.triggerAttackRelease(baseFreq * 0.5, 0.04)  // oct down
  synth5.triggerAttackRelease(baseFreq * allTwelve[7], 0.03) // fifth
  synth6.triggerAttackRelease(baseFreq * 2, 0.01) // oct up
  synth7.triggerAttackRelease(baseFreq * 2 * allTwelve[2], 0.004) // 9th
  synth8.triggerAttackRelease(baseFreq * 2 * allTwelve[3], 0.004) // m3 above high octave
}

let synth9 = new Tone.Synth
synth9.oscillator.type = "sine"
synth9.envelope.attack = 0.09;
synth9.envelope.decay = 0.1;
synth9.envelope.sustain = 0.1;
synth9.envelope.release = 3;
synth9.toMaster();

let synth10 = new Tone.Synth
synth10.oscillator.type = "sine"
synth10.envelope.attack = 0.09;
synth10.envelope.decay = 7;
synth10.envelope.sustain = 7;
synth10.envelope.release = 13;
synth10.toMaster();

let synth11 = new Tone.Synth
synth11.oscillator.type = "sine"
synth11.envelope.attack = 1;
synth11.envelope.decay = 1;
synth11.envelope.sustain = 1;
synth11.envelope.release = 4;
synth11.toMaster();

let synth12 = new Tone.Synth
synth12.oscillator.type = "sine"
synth12.envelope.attack = 0.09;
synth12.envelope.decay = 0.1;
synth12.envelope.sustain = 0.4;
synth12.envelope.release = 20;
synth12.toMaster();

let synth13 = new Tone.Synth
synth13.oscillator.type = "sine"
synth13.envelope.attack = 0.09;
synth13.envelope.decay = 0.1;
synth13.envelope.sustain = 0.1;
synth13.envelope.release = 10;
synth13.toMaster();


//lfo shimmy
let lfo2 = new Tone.LFO(5, -4, 4)

lfo2.fan(synth9.oscillator.detune,
        synth10.oscillator.detune,
        synth11.oscillator.detune,
        synth12.oscillator.detune,
        synth13.oscillator.detune
      )

lfo2.start()

function lineGong(){
  synth9.triggerAttackRelease(baseFreq * 2, 0.04)
  synth10.triggerAttackRelease(baseFreq * 0.5 * allTwelve[7], 0.02)
  synth11.triggerAttackRelease(baseFreq * allTwelve[9], 0.1)
  synth12.triggerAttackRelease(baseFreq * 0.5, 0.04)
  synth13.triggerAttackRelease(baseFreq * allTwelve[4], 0.03)
}

let synth14 = new Tone.Synth
synth14.oscillator.type = "sine"
synth14.envelope.attack = 0.09;
synth14.envelope.decay = 0.1;
synth14.envelope.sustain = 0.1;
synth14.envelope.release = 3;
synth14.toMaster();

let synth15 = new Tone.Synth
synth15.oscillator.type = "sine"
synth15.envelope.attack = 0.09;
synth15.envelope.decay = 7;
synth15.envelope.sustain = 7;
synth15.envelope.release = 13;
synth15.toMaster();

let synth16 = new Tone.Synth
synth16.oscillator.type = "sine"
synth16.envelope.attack = 1;
synth16.envelope.decay = 1;
synth16.envelope.sustain = 1;
synth16.envelope.release = 4;
synth16.toMaster();

let synth17 = new Tone.Synth
synth17.oscillator.type = "sine"
synth17.envelope.attack = 0.09;
synth17.envelope.decay = 0.1;
synth17.envelope.sustain = 0.4;
synth17.envelope.release = 20;
synth17.toMaster();

let synth18 = new Tone.Synth
synth18.oscillator.type = "sine"
synth18.envelope.attack = 0.09;
synth18.envelope.decay = 0.1;
synth18.envelope.sustain = 0.1;
synth18.envelope.release = 10;
synth18.toMaster();


//lfo shimmy
let lfo3 = new Tone.LFO(5, -4, 4)

lfo3.fan(synth14.oscillator.detune,
        synth15.oscillator.detune,
        synth16.oscillator.detune,
        synth17.oscillator.detune,
        synth18.oscillator.detune
      )

lfo3.start()

function triangleGong(){
  synth14.triggerAttackRelease(baseFreq * 0.5, 0.04)
  synth15.triggerAttackRelease(baseFreq * 0.5 * allTwelve[4], 0.02)
  synth16.triggerAttackRelease(baseFreq * allTwelve[4], 0.1)
  synth17.triggerAttackRelease(baseFreq * allTwelve[9], 0.04)
  synth18.triggerAttackRelease(baseFreq * 2, 0.03)
}

let synth19 = new Tone.Synth
synth19.oscillator.type = "sine"
synth19.envelope.attack = 0.09;
synth19.envelope.decay = 0.1;
synth19.envelope.sustain = 0.1;
synth19.envelope.release = 3;
synth19.toMaster();

let synth20 = new Tone.Synth
synth20.oscillator.type = "sine"
synth20.envelope.attack = 0.09;
synth20.envelope.decay = 7;
synth20.envelope.sustain = 7;
synth20.envelope.release = 13;
synth20.toMaster();

let synth21 = new Tone.Synth
synth21.oscillator.type = "sine"
synth21.envelope.attack = 1;
synth21.envelope.decay = 1;
synth21.envelope.sustain = 1;
synth21.envelope.release = 4;
synth21.toMaster();

let synth22 = new Tone.Synth
synth22.oscillator.type = "sine"
synth22.envelope.attack = 0.09;
synth22.envelope.decay = 0.1;
synth22.envelope.sustain = 0.4;
synth22.envelope.release = 20;
synth22.toMaster();


//lfo shimmy
let lfo4 = new Tone.LFO(5, -4, 4)

lfo4.fan(synth19.oscillator.detune,
        synth20.oscillator.detune,
        synth21.oscillator.detune,
        synth22.oscillator.detune
      )

lfo4.start()

function squareGong(){
  synth19.triggerAttackRelease(baseFreq * 2, 0.04)
  synth20.triggerAttackRelease(baseFreq * 0.5, 0.02)
  synth21.triggerAttackRelease(baseFreq * 0.5 * allTwelve[3], 0.1)
  synth22.triggerAttackRelease(baseFreq * allTwelve[3], 0.04)
}
