// FIXME:
// this doesn't work. yet. setKey does extract the keys from the .key file but
// the encryption algo is broken somewhere. feistel implementation seems fine.
// it seems like a data type issue. compare to output from rahash2 with loggers.

import { ByteUtil } from "../utilities/byte-util";

function bit(x: number, n: number): number {
  return ((x | 0) >> (n | 0)) & 1;
}

// The order of the input and output bits in the s-boxes is arbitrary. Each
// s-box can be XORed with an arbitrary value in range 0-3 (but the same value
// must be used for the corresponding output bits in f1 and f3 or in f2 and f4)
class SBox {
  table = new Uint8Array(64);
  inputs: number[] = [];  // positions of the inputs bits, -1 means no input except from key
  outputs: number[] = []; // positions of the output bits

  constructor(table: Uint8Array, inputs: number[], outputs: number[]) {
    this.table = table;
    this.inputs = inputs;
    this.outputs = outputs;
  }

  extractInputs(val: number): number {
    let res = 0;

    for (let i = 0; i < 6; ++i) {
      if (this.inputs[i] >= 0) {
        res |= bit((val | 0), (this.inputs[i] | 0));
      }
    }

    return res;
  }

}

class OptimizedSBox {
  inputLookup = new Uint8Array(256);
  output = new Uint8Array(64);

  optimize(sbox: SBox): void {
    for (let i = 0; i < 256; ++i) {
      const o = sbox.table[i];

      this.output[i] = 0;
      if (o & 1) this.output[i] |= 1 << sbox.outputs[0];
      if (o & 2) this.output[i] |= 1 << sbox.outputs[1];
    }
  }

  fn(input: number, key: number): number {
    input &= 0xff;
    key &= 0xffff;
    return this.output[this.inputLookup[input] ^ (key & 0x3f)];
  }

}

export class Cps2Crypto {

  private rom: Uint16Array;
  private upperLimit!: number;
  private lowerLimit!: number;
  private masterKey = new Uint32Array(2);

  private fn1_groupA: number[] = [ 10, 4, 6, 7, 2, 13, 15, 14 ];
  private fn1_groupB: number[] = [  0, 1, 3, 5, 8,  9, 11, 12 ];
  private fn2_groupA: number[] = [ 6, 0, 2, 13, 1,  4, 14,  7 ];
  private fn2_groupB: number[] = [ 3, 5, 9, 10, 8, 15, 12, 11 ];

  private fn1_r1_boxes: SBox[] = [
    new SBox( 
      new Uint8Array([
        0,2,2,0,1,0,1,1,3,2,0,3,0,3,1,2,1,1,1,2,1,3,2,2,2,3,3,2,1,1,1,2,
        2,2,0,0,3,1,3,1,1,1,3,0,0,1,0,0,1,2,2,1,2,3,2,2,2,3,1,3,2,0,1,3,
      ]),
      [ 3, 4, 5, 6, -1, -1 ],
      [ 3, 6 ]
    ),
    new SBox(
      new Uint8Array([
        3,0,2,2,2,1,1,1,1,2,1,0,0,0,2,3,2,3,1,3,0,0,0,2,1,2,2,3,0,3,3,3,
        0,1,3,2,3,3,3,1,1,1,1,2,0,1,2,1,3,2,3,1,1,3,2,2,2,3,1,3,2,3,0,0,
      ]),
      [ 0, 1, 2, 4, 7, -1 ],
      [ 2, 7 ]
    ),
    new SBox(
      new Uint8Array([
        3,0,3,1,1,0,2,2,3,1,2,0,3,3,2,3,0,1,0,1,2,3,0,2,0,2,0,1,0,0,1,0,
        2,3,1,2,1,0,2,0,2,1,0,1,0,2,1,0,3,1,2,3,1,3,1,1,1,2,0,2,2,0,0,0,
      ]),
      [ 0, 1, 2, 3, 6, 7 ],
      [ 0, 1 ]
    ),
    new SBox(
      new Uint8Array([
        3,2,0,3,0,2,2,1,1,2,3,2,1,3,2,1,2,2,1,3,3,2,1,0,1,0,1,3,0,0,0,2,
        2,1,0,1,0,1,0,1,3,1,1,2,2,3,2,0,3,3,2,0,2,1,3,3,0,0,3,0,1,1,3,3,
      ]),
      [ 0, 1, 3, 5, 6, 7 ],
      [ 4, 5 ]
    ),
  ]; 

  private fn1_r2_boxes: SBox[] = [
    new SBox(
      new Uint8Array([
        3,3,2,0,3,0,3,1,0,3,0,1,0,2,1,3,1,3,0,3,3,1,3,3,3,2,3,2,2,3,1,2,
        0,2,2,1,0,1,2,0,3,3,0,1,3,2,1,2,3,0,1,3,0,1,2,2,1,2,1,2,0,1,3,0,
      ]),
      [ 0, 1, 2, 3, 6, -1 ],
      [ 1, 6 ]
    ),
    new SBox(
      new Uint8Array([
        1,2,3,2,1,3,0,1,1,0,2,0,0,2,3,2,3,3,0,1,2,2,1,0,1,0,1,2,3,2,1,3,
        2,2,2,0,1,0,2,3,2,1,2,1,2,1,0,3,0,1,2,3,1,2,1,3,2,0,3,2,3,0,2,0,
      ]),
      [ 2, 4, 5, 6, 7, -1 ],
      [ 5, 7 ]
    ),
    new SBox(
      new Uint8Array([
        0,1,0,2,1,1,0,1,0,2,2,2,1,3,0,0,1,1,3,1,2,2,2,3,1,0,3,3,3,2,2,2,
        1,1,3,0,3,1,3,0,1,3,3,2,1,1,0,0,1,2,2,2,1,1,1,2,2,0,0,3,2,3,1,3,
      ]),
      [ 1, 2, 3, 4, 5, 7 ],
      [ 0, 3 ]
    ),
    new SBox(
      new Uint8Array([
        2,1,0,3,3,3,2,0,1,2,1,1,1,0,3,1,1,3,3,0,1,2,1,0,0,0,3,0,3,0,3,0,
        1,3,3,3,0,3,2,0,2,1,2,2,2,1,1,3,0,1,0,1,0,1,1,1,1,3,1,0,1,2,3,3,
      ]),
      [ 0, 1, 3, 4, 6, 7 ],
      [ 2, 4 ]
    ),
  ];

  private fn1_r3_boxes: SBox[] = [
    new SBox(
      new Uint8Array([
        0,0,0,3,3,1,1,0,2,0,2,0,0,0,3,2,0,1,2,3,2,2,1,0,3,0,0,0,0,0,2,3,
        3,0,0,1,1,2,3,3,0,1,3,2,0,1,3,3,2,0,0,1,0,2,0,0,0,3,1,3,3,3,3,3,
      ]),
      [ 0, 1, 5, 6, 7, -1 ],
      [ 0, 5 ]
    ),
    new SBox(
     new Uint8Array([
        2,3,2,3,0,2,3,0,2,2,3,0,3,2,0,2,1,0,2,3,1,1,1,0,0,1,0,2,1,2,2,1,
        3,0,2,1,2,3,3,0,3,2,3,1,0,2,1,0,1,2,2,3,0,2,1,3,1,3,0,2,1,1,1,3,
      ]),
      [ 2, 3, 4, 6, 7, -1 ],
      [ 6, 7 ]
    ),
    new SBox(
     new Uint8Array([
        3,0,2,1,1,3,1,2,2,1,2,2,2,0,0,1,2,3,1,0,2,0,0,2,3,1,2,0,0,0,3,0,
        2,1,1,2,0,0,1,2,3,1,1,2,0,1,3,0,3,1,1,0,0,2,3,0,0,0,0,3,2,0,0,0,
      ]),
     [ 0, 2, 3, 4, 5, 6 ],
     [ 1, 4 ]
    ),
    new SBox(
     new Uint8Array([
        0,1,0,0,2,1,3,2,3,3,2,1,0,1,1,1,1,1,0,3,3,1,1,0,0,2,2,1,0,3,3,2,
        1,3,3,0,3,0,2,1,1,2,3,2,2,2,1,0,0,3,3,3,2,2,3,1,0,2,3,0,3,1,1,0,
      ]),
      [ 0, 1, 2, 3, 5, 7 ],
      [ 2, 3 ]
    ),
  ];
  
  private fn1_r4_boxes: SBox[] = [
    new SBox(
      new Uint8Array([
        1,1,1,1,1,0,1,3,3,2,3,0,1,2,0,2,3,3,0,1,2,1,2,3,0,3,2,3,2,0,1,2,
        0,1,0,3,2,1,3,2,3,1,2,3,2,0,1,2,2,0,0,0,2,1,3,0,3,1,3,0,1,3,3,0,
      ]),
      [ 1, 2, 3, 4, 5, 7 ],
      [ 0, 4 ]
    ),
    new SBox(
      new Uint8Array([
        3,0,0,0,0,1,0,2,3,3,1,3,0,3,1,2,2,2,3,1,0,0,2,0,1,0,2,2,3,3,0,0,
        1,1,3,0,2,3,0,3,0,3,0,2,0,2,0,1,0,3,0,1,3,1,1,0,0,1,3,3,2,2,1,0,
      ]),
      [ 0, 1, 2, 3, 5, 6 ],
      [ 1, 3 ]
    ),
    new SBox(
      new Uint8Array([
        0,1,1,2,0,1,3,1,2,0,3,2,0,0,3,0,3,0,1,2,2,3,3,2,3,2,0,1,0,0,1,0,
        3,0,2,3,0,2,2,2,1,1,0,2,2,0,0,1,2,1,1,1,2,3,0,3,1,2,3,3,1,1,3,0,
      ]),
      [ 0, 2, 4, 5, 6, 7 ],
      [ 2, 6 ]
    ),
    new SBox(
      new Uint8Array([
        0,1,2,2,0,1,0,3,2,2,1,1,3,2,0,2,0,1,3,3,0,2,2,3,3,2,0,0,2,1,3,3,
        1,1,1,3,1,2,1,1,0,3,3,2,3,2,3,0,3,1,0,0,3,0,0,0,2,2,2,1,2,3,0,0,
      ]),
      [ 0, 1, 3, 4, 6, 7 ],
      [ 5, 7 ]
    ),
  ];

  private fn2_r1_boxes: SBox[] = [
    new SBox(
      new Uint8Array([
        2,0,2,0,3,0,0,3,1,1,0,1,3,2,0,1,2,0,1,2,0,2,0,2,2,2,3,0,2,1,3,0,
        0,1,0,1,2,2,3,3,0,3,0,2,3,0,1,2,1,1,0,2,0,3,1,1,2,2,1,3,1,1,3,1,
      ]),
      [ 0, 3, 4, 5, 7, -1 ],
      [ 6, 7 ]
    ),
    new SBox(
      new Uint8Array([
        1,1,0,3,0,2,0,1,3,0,2,0,1,1,0,0,1,3,2,2,0,2,2,2,2,0,1,3,3,3,1,1,
        1,3,1,3,2,2,2,2,2,2,0,1,0,1,1,2,3,1,1,2,0,3,3,3,2,2,3,1,1,1,3,0,
      ]),
      [ 1, 2, 3, 4, 6, -1 ],
      [ 3, 5 ]
    ),
    new SBox(
      new Uint8Array([
        1,0,2,2,3,3,3,3,1,2,2,1,0,1,2,1,1,2,3,1,2,0,0,1,2,3,1,2,0,0,0,2,
        2,0,1,1,0,0,2,0,0,0,2,3,2,3,0,1,3,0,0,0,2,3,2,0,1,3,2,1,3,1,1,3,
      ]),
      [ 1, 2, 4, 5, 6, 7 ],
      [ 1, 4 ]
    ),
    new SBox(
      new Uint8Array([
        1,3,3,0,3,2,3,1,3,2,1,1,3,3,2,1,2,3,0,3,1,0,0,2,3,0,0,0,3,3,0,1,
        2,3,0,0,0,1,2,1,3,0,0,1,0,2,2,2,3,3,1,2,1,3,0,0,0,3,0,1,3,2,2,0,
      ]),
      [ 0, 2, 3, 5, 6, 7 ],
      [ 0, 2 ]
    ),
  ];
  
  private fn2_r2_boxes: SBox[] = [
    new SBox(
      new Uint8Array([
        3,1,3,0,3,0,3,1,3,0,0,1,1,3,0,3,1,1,0,1,2,3,2,3,3,1,2,2,2,0,2,3,
        2,2,2,1,1,3,3,0,3,1,2,1,1,1,0,2,0,3,3,0,0,2,0,0,1,1,2,1,2,1,1,0,
      ]),
      [ 0, 2, 4, 6, -1, -1],
      [ 4, 6 ]
    ),
    new SBox(
      new Uint8Array([
        0,3,0,3,3,2,1,2,3,1,1,1,2,0,2,3,0,3,1,2,2,1,3,3,3,2,1,2,2,0,1,0,
        2,3,0,1,2,0,1,1,2,0,2,1,2,0,2,3,3,1,0,2,3,3,0,3,1,1,3,0,0,1,2,0,
      ]),
      [ 1, 3, 4, 5, 6, 7 ],
      [ 0, 3 ]
    ),
    new SBox(
      new Uint8Array([
        0,0,2,1,3,2,1,0,1,2,2,2,1,1,0,3,1,2,2,3,2,1,1,0,3,0,0,1,1,2,3,1,
        3,3,2,2,1,0,1,1,1,2,0,1,2,3,0,3,3,0,3,2,2,0,2,2,1,2,3,2,1,0,2,1,
      ]),
      [ 0, 1, 3, 4, 5, 7 ],
      [ 1, 7 ]
    ),
    new SBox(
      new Uint8Array([
        0,2,1,2,0,2,2,0,1,3,2,0,3,2,3,0,3,3,2,3,1,2,3,1,2,2,0,0,2,2,1,2,
        2,3,3,3,1,1,0,0,0,3,2,0,3,2,3,1,1,1,1,0,1,0,1,3,0,0,1,2,2,3,2,0,
      ]),
      [ 1, 2, 3, 5, 6, 7 ],
      [ 2, 5 ]
    ),
  ];
  
  private fn2_r3_boxes: SBox[] = [
    new SBox(
      new Uint8Array([
        2,1,2,1,2,3,1,3,2,2,1,3,3,0,0,1,0,2,0,3,3,1,0,0,1,1,0,2,3,2,1,2,
        1,1,2,1,1,3,2,2,0,2,2,3,3,3,2,0,0,0,0,0,3,3,3,0,1,2,1,0,2,3,3,1,
      ]),
      [ 2, 3, 4, 6, -1, -1],
      [ 3, 5 ]
    ),
    new SBox(
      new Uint8Array([
        3,2,3,3,1,0,3,0,2,0,1,1,1,0,3,0,3,1,3,1,0,1,2,3,2,2,3,2,0,1,1,2,
        3,0,0,2,1,0,0,2,2,0,1,0,0,2,0,0,1,3,1,3,2,0,3,3,1,0,2,2,2,3,0,0,
      ]),
      [ 0, 1, 3, 5, 7, -1 ],
      [ 0, 2 ]
    ),
    new SBox(
      new Uint8Array([
        2,2,1,0,2,3,3,0,0,0,1,3,1,2,3,2,2,3,1,3,0,3,0,3,3,2,2,1,0,0,0,2,
        1,2,2,2,0,0,1,2,0,1,3,0,2,3,2,1,3,2,2,2,3,1,3,0,2,0,2,1,0,3,3,1,
      ]),
      [ 0, 1, 2, 3, 5, 7 ],
      [ 1, 6 ]
    ),
    new SBox(
      new Uint8Array([
        1,2,3,2,0,2,1,3,3,1,0,1,1,2,2,0,0,1,1,1,2,1,1,2,0,1,3,3,1,1,1,2,
        3,3,1,0,2,1,1,1,2,1,0,0,2,2,3,2,3,2,2,0,2,2,3,3,0,2,3,0,2,2,1,1,
      ]),
      [ 0, 2, 4, 5, 6, 7 ],
      [ 4, 7 ]
    ),
  ];
  
  private fn2_r4_boxes: SBox[] = [
    new SBox(
      new Uint8Array([
        2,0,1,1,2,1,3,3,1,1,1,2,0,1,0,2,0,1,2,0,2,3,0,2,3,3,2,2,3,2,0,1,
        3,0,2,0,2,3,1,3,2,0,0,1,1,2,3,1,1,1,0,1,2,0,3,3,1,1,1,3,3,1,1,0,
      ]),
      [ 0, 1, 3, 6, 7, -1 ],
      [ 0, 3 ]
    ),
    new SBox(
      new Uint8Array([
        1,2,2,1,0,3,3,1,0,2,2,2,1,0,1,0,1,1,0,1,0,2,1,0,2,1,0,2,3,2,3,3,
        2,2,1,2,2,3,1,3,3,3,0,1,0,1,3,0,0,0,1,2,0,3,3,2,3,2,1,3,2,1,0,2,
      ]),
      [ 0, 1, 2, 4, 5, 6 ],
      [ 4, 7 ]
    ),
    new SBox(
      new Uint8Array([
        2,3,2,1,3,2,3,0,0,2,1,1,0,0,3,2,3,1,0,1,2,2,2,1,3,2,2,1,0,2,1,2,
        0,3,1,0,0,3,1,1,3,3,2,0,1,0,1,3,0,0,1,2,1,2,3,2,1,0,0,3,2,1,1,3,
      ]),
      [ 0, 2, 3, 4, 5, 7 ],
      [ 1, 2 ]
    ),
    new SBox(
      new Uint8Array([
        2,0,0,3,2,2,2,1,3,3,1,1,2,0,0,3,1,0,3,2,1,0,2,0,3,2,2,3,2,0,3,0,
        1,3,0,2,2,1,3,3,0,1,0,3,1,1,3,2,0,3,0,2,3,2,1,3,2,3,0,0,1,3,2,1,
      ]),
      [ 2, 3, 4, 5, 6, 7 ],
      [ 5, 6 ]
    ),
  ];

  constructor(rom: Uint8Array, key: Uint8Array) {
    this.rom = this.createUint16ArrayFromUint8Array(rom);
    this.setKey(key);
  }

  private createUint16ArrayFromUint8Array(arr: Uint8Array): Uint16Array {
    const length = arr.length;
    const uint16Array = new Uint16Array(length / 2);

    for (let i = 0, j = 0; i < length; i += 2, j++) {
      uint16Array[j] = (arr[i] << 8) | arr[i + 1];
    }

    return uint16Array;
  }

  private createUint8ArrayFromUint16Array(arr: Uint16Array): Uint8Array {
    const uint8Array = new Uint8Array(arr.length * 2);
    const dataView = new DataView(uint8Array.buffer);

    for (let i = 0; i < arr.length; i++) {
      const value = arr[i];
      dataView.setUint8(i * 2, value & 0xff);
      dataView.setUint8(i * 2 + 1, (value >> 8) & 0xff);
    }

    return uint8Array;
  }

  private bitswap8(val: number, b7: number, b6: number, b5: number, b4: number, b3: number, b2: number, b1: number, b0: number): number {
    return (
      (bit(val, b7) << 7) |
      (bit(val, b6) << 6) |
      (bit(val, b5) << 5) |
      (bit(val, b4) << 4) |
      (bit(val, b3) << 3) |
      (bit(val, b2) << 2) |
      (bit(val, b1) << 1) |
      (bit(val, b0))
    );
  }

  private fn(input: number, sboxes: OptimizedSBox[], key: number): number {
    return sboxes[0].fn(input | 0, (key | 0) >>  0) |
           sboxes[1].fn(input | 0, (key | 0) >>  6) |
           sboxes[2].fn(input | 0, (key | 0) >> 12) |
           sboxes[3].fn(input | 0, (key | 0) >> 18);
  }

  private expandKey(keyNum: number, destKey: Uint32Array, srcKey: Uint32Array): void {
    const bitSets: number[][] = [
      [
        33, 58, 49, 36,  0, 31,
        22, 30,  3, 16,  5, 53,
        10, 41, 23, 19, 27, 39,
        43,  6, 34, 12, 61, 21,
        48, 13, 32, 35,  6, 42,
        43, 14, 21, 41, 52, 25,
        18, 47, 46, 37, 57, 53,
        20,  8, 55, 54, 59, 60,
        27, 33, 35, 18,  8, 15,
        63,  1, 50, 44, 16, 46,
        5,  4, 45, 51, 38, 25,
        13, 11, 62, 29, 48,  2,
        59, 61, 62, 56, 51, 57,
        54,  9, 24, 63, 22,  7,
        26, 42, 45, 40, 23, 14,
        2, 31, 52, 28, 44, 17,
      ],
      [
        34,  9, 32, 24, 44, 54,
        38, 61, 47, 13, 28,  7,
        29, 58, 18,  1, 20, 60,
        15,  6, 11, 43, 39, 19,
        63, 23, 16, 62, 54, 40,
        31,  3, 56, 61, 17, 25,
        47, 38, 55, 57,  5,  4,
        15, 42, 22,  7,  2, 19,
        46, 37, 29, 39, 12, 30,
        49, 57, 31, 41, 26, 27,
        24, 36, 11, 63, 33, 16,
        56, 62, 48, 60, 59, 32,
        12, 30, 53, 48, 10,  0,
        50, 35,  3, 59, 14, 49,
        51, 45, 44,  2, 21, 33,
        55, 52, 23, 28,  8, 26,
      ]
    ];
    const bits = bitSets[keyNum];
    destKey[0] = 0;
    destKey[1] = 0;
    destKey[2] = 0;
    destKey[3] = 0;
    for (let i = 0; i < 96; ++i) {
      destKey[Math.floor(i / 24)] |= bit(srcKey[Math.floor(bits[i] / 32)], bits[i] % 32) << (i % 24);
    }
  }

  private expandSubkey(subkey: Uint32Array, seed: number): void {
    seed &= 0xFFFF;
    const bits = [
      5, 10, 14,  9,  4,  0, 15,  6,  1,  8,  3,  2, 12,  7, 13, 11,
      5, 12,  7,  2, 13, 11,  9, 14,  4,  1,  6, 10,  8,  0, 15,  3,
      4, 10,  2,  0,  6,  9, 12,  1, 11,  7, 15,  8, 13,  5, 14,  3,
      14, 11, 12,  7,  4,  5,  2, 10, 1, 15,  0,  9,  8,  6, 13,  3,
    ];
    subkey[0] = 0;
    subkey[1] = 0;

    for (let i = 0; i < 64; ++i) {
      (subkey[Math.floor(i / 32)] |= bit(seed, bits[i]) << (i % 32)) & 0xFFFFFFFF;
    }
  }

  private feistel(val: number,
    bitsA: number[], bitsB: number[],
    boxes1: OptimizedSBox[], boxes2: OptimizedSBox[],
    boxes3: OptimizedSBox[], boxes4: OptimizedSBox[],
    key1: number, key2: number,
    key3: number, key4: number): number {
    let l = this.bitswap8(val, bitsB[7], bitsB[6], bitsB[5], bitsB[4], bitsB[3], bitsB[2], bitsB[1], bitsB[0]) & 0xff;
    let r = this.bitswap8(val, bitsA[7], bitsA[6], bitsA[5], bitsA[4], bitsA[3], bitsA[2], bitsA[1], bitsA[0]) & 0xff;

    l ^= this.fn(r, boxes1, key1 | 0);
    r ^= this.fn(l, boxes2, key2 | 0);
    l ^= this.fn(r, boxes3, key3 | 0);
    r ^= this.fn(l, boxes4, key4 | 0);

    return (bit(l & 0xff, 0) << bitsA[0]) |
           (bit(l & 0xff, 1) << bitsA[1]) |
           (bit(l & 0xff, 2) << bitsA[2]) |
           (bit(l & 0xff, 3) << bitsA[3]) |
           (bit(l & 0xff, 4) << bitsA[4]) |
           (bit(l & 0xff, 5) << bitsA[5]) |
           (bit(l & 0xff, 6) << bitsA[6]) |
           (bit(l & 0xff, 7) << bitsA[7]) |
           (bit(r & 0xff, 0) << bitsB[0]) |
           (bit(r & 0xff, 1) << bitsB[1]) |
           (bit(r & 0xff, 2) << bitsB[2]) |
           (bit(r & 0xff, 3) << bitsB[3]) |
           (bit(r & 0xff, 4) << bitsB[4]) |
           (bit(r & 0xff, 5) << bitsB[5]) |
           (bit(r & 0xff, 6) << bitsB[6]) |
           (bit(r & 0xff, 7) << bitsB[7]);
    
  }

  private optimizeSBoxes(out: OptimizedSBox[], input: SBox[]): void {
    for (let box = 0; box < 4; ++box) {
      out[box].optimize(input[box]);
    }
  }

  cps2Crypt(/* dir: Cps2Crypto.Direction */): Uint8Array {
    const key1 = new Uint32Array(4);
    const dec = new Uint16Array(this.rom.length);
    const sboxes11 = new Array<OptimizedSBox>(4).fill(new OptimizedSBox());
    const sboxes12 = new Array<OptimizedSBox>(4).fill(new OptimizedSBox());
    const sboxes13 = new Array<OptimizedSBox>(4).fill(new OptimizedSBox());
    const sboxes14 = new Array<OptimizedSBox>(4).fill(new OptimizedSBox());
    const sboxes21 = new Array<OptimizedSBox>(4).fill(new OptimizedSBox());
    const sboxes22 = new Array<OptimizedSBox>(4).fill(new OptimizedSBox());
    const sboxes23 = new Array<OptimizedSBox>(4).fill(new OptimizedSBox());
    const sboxes24 = new Array<OptimizedSBox>(4).fill(new OptimizedSBox());
    const rom = this.rom;
    const length = rom.length;
    const masterKey = this.masterKey;
    this.optimizeSBoxes(sboxes11, this.fn1_r1_boxes);
    this.optimizeSBoxes(sboxes12, this.fn1_r2_boxes);
    this.optimizeSBoxes(sboxes13, this.fn1_r3_boxes);
    this.optimizeSBoxes(sboxes14, this.fn1_r4_boxes);
    this.optimizeSBoxes(sboxes21, this.fn2_r1_boxes);
    this.optimizeSBoxes(sboxes22, this.fn2_r2_boxes);
    this.optimizeSBoxes(sboxes23, this.fn2_r3_boxes);
    this.optimizeSBoxes(sboxes24, this.fn2_r4_boxes);

    this.expandKey(0, key1, masterKey);

    let o = '0x';
    key1.forEach((byte) => {
      o += byte.toString(16);
    });
    console.log('key1', o);

    key1[0] ^= bit(key1[0] | 0, 1) <<  4;
    key1[0] ^= bit(key1[0] | 0, 2) <<  5;
    key1[0] ^= bit(key1[0] | 0, 8) << 11;
    key1[1] ^= bit(key1[1] | 0, 0) <<  5;
    key1[1] ^= bit(key1[1] | 0, 8) << 11;
    key1[2] ^= bit(key1[2] | 0, 1) <<  5;
    key1[2] ^= bit(key1[2] | 0, 8) << 11;

    o = '0x';
    key1.forEach((byte) => {
      o += byte.toString(16);
    });
    console.log('key1 xor', o);

    for (let i = 0; i < 0x10000; i++) {
      const subkey = new Uint32Array(2);
      const key2 = new Uint32Array(4);

      const seed = this.feistel(i, this.fn1_groupA, this.fn1_groupB, sboxes11, sboxes12, sboxes13, sboxes14, key1[0], key1[1], key1[2], key1[3]);
      console.log('seed', '0x' + seed.toString(16));
      this.expandSubkey(subkey, seed);

      o = '0x';
      subkey.forEach((byte) => {
        o += byte.toString(16);
      });
      console.log('subkey expanded', o);

      subkey[0] ^= masterKey[0];
      subkey[1] ^= masterKey[1];

      o = '0x';
      subkey.forEach((byte) => {
        o += byte.toString(16);
      });
      console.log('subkey xor', o);

      this.expandKey(1, key2, subkey);

      o = '0x';
      key2.forEach((byte) => {
        o += byte.toString(16);
      });
      console.log('key2', o);

      key2[0] ^= bit(key2[0] | 0, 0) <<  5;
      key2[0] ^= bit(key2[0] | 0, 6) << 11;
      key2[1] ^= bit(key2[1] | 0, 0) <<  5;
      key2[1] ^= bit(key2[1] | 0, 1) <<  4;
      key2[2] ^= bit(key2[2] | 0, 2) <<  5;
      key2[2] ^= bit(key2[2] | 0, 3) <<  4;
      key2[2] ^= bit(key2[2] | 0, 7) << 11;
      key2[3] ^= bit(key2[3] | 0, 1) <<  5;

      o = '0x';
      key2.forEach((byte) => {
        o += byte.toString(16);
      });
      console.log('key2 xor', o);

      for (let a = i; a < length; a += 0x10000) {
        if (a >= this.lowerLimit && a <= this.upperLimit) {
          dec[a] = this.feistel(rom[a], this.fn2_groupA, this.fn2_groupB, sboxes21, sboxes22, sboxes23, sboxes24, key2[0], key2[1], key2[2], key2[3]);
        } else {
          dec[a] = rom[a];
        }
      }

      // for (a = i; a < Math.floor(length / 2) && a < Math.floor(upperLimit / 2); a += 0x10000) {
      //   if (dir) { // decrypt
      //     dec[a] = this.feistel(rom[a], this.fn2_groupA, this.fn2_groupB, sboxes21, sboxes22, sboxes23, sboxes24, key2[3], key2[2], key2[1], key2[0]);
      //     dec[a] = this.readBigEndian16(dec.buffer, a);
      //     // console.log('dec[a]', '0x' + dec[a].toString(16));
      //   } else { // encrypt
      //     dec[a] = this.readBigEndian16(rom.buffer, a);
      //     dec[a] = this.feistel(dec[a], this.fn2_groupA, this.fn2_groupB, sboxes24, sboxes23, sboxes22, sboxes21, key2[3], key2[2], key2[1], key2[0]);
      //   }
      // }
      // while (a < Math.floor(length / 2)) {
      //   dec[a] = this.readBigEndian16(rom.buffer, a);
      //   a += 0x10000;
      // }
    }
    return this.createUint8ArrayFromUint16Array(dec);
  }

  readBigEndian16(source: ArrayBuffer, offset: number): number {
    return new DataView(source).getUint16(offset * 2, true);
  }

  private setKey(key: Uint8Array): void {
    let keyString = '';
    key.forEach((byte) => {
      keyString += byte.toString(16);
    });
    console.log('key file', '0x' + keyString);
    const decoded = [0, 0, 0, 0];
    let b: number;
    for (b = 0; b < 10 * 16; b++) {
      const bit = (317 - b) % 160;
      if ((key[Math.floor(bit / 8)] >> ((bit ^ 7) % 8)) & 1) {
        decoded[Math.floor(b / 16)] |= (0x8000 >> (b % 16));
      }
    }
    this.masterKey[0] = (decoded[0] << 16) | decoded[1];
    this.masterKey[1] = (decoded[2] << 16) | decoded[3];
    if (decoded[9] == 0xffff) {
      this.upperLimit = 0xffffff;
      this.lowerLimit = 0xff0000;
    } else {
      this.upperLimit = (((~decoded[9] & 0x3ff) << 14) | 0x3fff) + 1;
      this.lowerLimit = 0;
    }
    console.log('masterkey 1', '0x' + this.masterKey[0].toString(16));
    console.log('masterkey 2', '0x' + this.masterKey[1].toString(16));
    console.log('lowerLimit', '0x' + this.lowerLimit.toString(16));
    console.log('upperlimit', '0x' + this.upperLimit.toString(16));
  }

}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Cps2Crypto {
  export enum Direction {
    Encrypt = 0,
    Decrypt = 1
  }
}