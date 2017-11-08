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
