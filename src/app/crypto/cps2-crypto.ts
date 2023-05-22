import { OptimizedSBox, SBox } from './s-box';

// FIXME:
// this doesn't work. yet. setKey does extract the keys from the .key file but
// the encryption algo is broken somewhere. feistel implementation seems fine.
// it seems like a data type issue. compare to output from rahash2 with loggers.
export class Cps2Crypto {

  private rom: Uint16Array;
  private upperLimit: number;
  private masterKey = new Uint32Array(2);

  private fn1_groupA: number[] = [ 10, 4, 6, 7, 2, 13, 15, 14 ];
  private fn1_groupB: number[] = [  0, 1, 3, 5, 8,  9, 11, 12 ];
  private fn2_groupA: number[] = [ 6, 0, 2, 13, 1,  4, 14,  7 ];
  private fn2_groupB: number[] = [ 3, 5, 9, 10, 8, 15, 12, 11 ];

  private fn1_r1_boxes: SBox[] = [
    {
      table: new Uint8Array([
        0,2,2,0,1,0,1,1,3,2,0,3,0,3,1,2,1,1,1,2,1,3,2,2,2,3,3,2,1,1,1,2,
        2,2,0,0,3,1,3,1,1,1,3,0,0,1,0,0,1,2,2,1,2,3,2,2,2,3,1,3,2,0,1,3,
      ]),
      inputs: [3, 4, 5, 6, -1, -1 ],
      outputs: [ 3, 6 ]
    },
    {
      table: new Uint8Array([
        3,0,2,2,2,1,1,1,1,2,1,0,0,0,2,3,2,3,1,3,0,0,0,2,1,2,2,3,0,3,3,3,
        0,1,3,2,3,3,3,1,1,1,1,2,0,1,2,1,3,2,3,1,1,3,2,2,2,3,1,3,2,3,0,0,
      ]),
      inputs: [ 0, 1, 2, 4, 7, -1 ],
      outputs: [ 2, 7 ]
    },
    {
      table: new Uint8Array([
        3,0,3,1,1,0,2,2,3,1,2,0,3,3,2,3,0,1,0,1,2,3,0,2,0,2,0,1,0,0,1,0,
        2,3,1,2,1,0,2,0,2,1,0,1,0,2,1,0,3,1,2,3,1,3,1,1,1,2,0,2,2,0,0,0,
      ]),
      inputs: [ 0, 1, 2, 3, 6, 7 ],
      outputs: [ 0, 1 ]
    },
    {
      table: new Uint8Array([
        3,2,0,3,0,2,2,1,1,2,3,2,1,3,2,1,2,2,1,3,3,2,1,0,1,0,1,3,0,0,0,2,
        2,1,0,1,0,1,0,1,3,1,1,2,2,3,2,0,3,3,2,0,2,1,3,3,0,0,3,0,1,1,3,3,
      ]),
      inputs: [ 0, 1, 3, 5, 6, 7 ],
      outputs: [ 4, 5 ]
    },
  ]; 

  private fn1_r2_boxes: SBox[] = [
    {
      table: new Uint8Array([
        3,3,2,0,3,0,3,1,0,3,0,1,0,2,1,3,1,3,0,3,3,1,3,3,3,2,3,2,2,3,1,2,
        0,2,2,1,0,1,2,0,3,3,0,1,3,2,1,2,3,0,1,3,0,1,2,2,1,2,1,2,0,1,3,0,
      ]),
      inputs: [ 0, 1, 2, 3, 6, -1 ],
      outputs: [ 1, 6 ]
    },
    {
      table: new Uint8Array([
        1,2,3,2,1,3,0,1,1,0,2,0,0,2,3,2,3,3,0,1,2,2,1,0,1,0,1,2,3,2,1,3,
        2,2,2,0,1,0,2,3,2,1,2,1,2,1,0,3,0,1,2,3,1,2,1,3,2,0,3,2,3,0,2,0,
      ]),
      inputs: [ 2, 4, 5, 6, 7, -1 ],
      outputs: [ 5, 7 ]
    },
    {
      table: new Uint8Array([
        0,1,0,2,1,1,0,1,0,2,2,2,1,3,0,0,1,1,3,1,2,2,2,3,1,0,3,3,3,2,2,2,
        1,1,3,0,3,1,3,0,1,3,3,2,1,1,0,0,1,2,2,2,1,1,1,2,2,0,0,3,2,3,1,3,
      ]),
      inputs: [ 1, 2, 3, 4, 5, 7 ],
      outputs: [ 0, 3 ]
    },
    {
      table: new Uint8Array([
        2,1,0,3,3,3,2,0,1,2,1,1,1,0,3,1,1,3,3,0,1,2,1,0,0,0,3,0,3,0,3,0,
        1,3,3,3,0,3,2,0,2,1,2,2,2,1,1,3,0,1,0,1,0,1,1,1,1,3,1,0,1,2,3,3,
      ]),
      inputs: [ 0, 1, 3, 4, 6, 7 ],
      outputs: [ 2, 4 ]
    },
  ];

  private fn1_r3_boxes: SBox[] = [
    {
      table: new Uint8Array([
        0,0,0,3,3,1,1,0,2,0,2,0,0,0,3,2,0,1,2,3,2,2,1,0,3,0,0,0,0,0,2,3,
        3,0,0,1,1,2,3,3,0,1,3,2,0,1,3,3,2,0,0,1,0,2,0,0,0,3,1,3,3,3,3,3,
      ]),
      inputs: [ 0, 1, 5, 6, 7, -1 ],
      outputs: [ 0, 5 ]
    },
    {
     table: new Uint8Array([
        2,3,2,3,0,2,3,0,2,2,3,0,3,2,0,2,1,0,2,3,1,1,1,0,0,1,0,2,1,2,2,1,
        3,0,2,1,2,3,3,0,3,2,3,1,0,2,1,0,1,2,2,3,0,2,1,3,1,3,0,2,1,1,1,3,
      ]),
      inputs: [ 2, 3, 4, 6, 7, -1 ],
      outputs: [ 6, 7 ]
    },
    {
     table: new Uint8Array([
        3,0,2,1,1,3,1,2,2,1,2,2,2,0,0,1,2,3,1,0,2,0,0,2,3,1,2,0,0,0,3,0,
        2,1,1,2,0,0,1,2,3,1,1,2,0,1,3,0,3,1,1,0,0,2,3,0,0,0,0,3,2,0,0,0,
      ]),
      inputs: [ 0, 2, 3, 4, 5, 6 ],
      outputs: [ 1, 4 ]
    },
    {
     table: new Uint8Array([
        0,1,0,0,2,1,3,2,3,3,2,1,0,1,1,1,1,1,0,3,3,1,1,0,0,2,2,1,0,3,3,2,
        1,3,3,0,3,0,2,1,1,2,3,2,2,2,1,0,0,3,3,3,2,2,3,1,0,2,3,0,3,1,1,0,
      ]),
      inputs: [ 0, 1, 2, 3, 5, 7 ],
      outputs: [ 2, 3 ]
    },
  ];
  
  private fn1_r4_boxes: SBox[] = [
    {
      table: new Uint8Array([
        1,1,1,1,1,0,1,3,3,2,3,0,1,2,0,2,3,3,0,1,2,1,2,3,0,3,2,3,2,0,1,2,
        0,1,0,3,2,1,3,2,3,1,2,3,2,0,1,2,2,0,0,0,2,1,3,0,3,1,3,0,1,3,3,0,
      ]),
      inputs: [ 1, 2, 3, 4, 5, 7 ],
      outputs: [ 0, 4 ]
    },
    {
      table: new Uint8Array([
        3,0,0,0,0,1,0,2,3,3,1,3,0,3,1,2,2,2,3,1,0,0,2,0,1,0,2,2,3,3,0,0,
        1,1,3,0,2,3,0,3,0,3,0,2,0,2,0,1,0,3,0,1,3,1,1,0,0,1,3,3,2,2,1,0,
      ]),
      inputs: [ 0, 1, 2, 3, 5, 6 ],
      outputs: [ 1, 3 ]
    },
    {
      table: new Uint8Array([
        0,1,1,2,0,1,3,1,2,0,3,2,0,0,3,0,3,0,1,2,2,3,3,2,3,2,0,1,0,0,1,0,
        3,0,2,3,0,2,2,2,1,1,0,2,2,0,0,1,2,1,1,1,2,3,0,3,1,2,3,3,1,1,3,0,
      ]),
      inputs: [ 0, 2, 4, 5, 6, 7 ],
      outputs: [ 2, 6 ]
    },
    {
      table: new Uint8Array([
        0,1,2,2,0,1,0,3,2,2,1,1,3,2,0,2,0,1,3,3,0,2,2,3,3,2,0,0,2,1,3,3,
        1,1,1,3,1,2,1,1,0,3,3,2,3,2,3,0,3,1,0,0,3,0,0,0,2,2,2,1,2,3,0,0,
      ]),
      inputs: [ 0, 1, 3, 4, 6, 7 ],
      outputs: [ 5, 7 ]
    },
  ];

  private fn2_r1_boxes: SBox[] = [
    {
      table: new Uint8Array([
        2,0,2,0,3,0,0,3,1,1,0,1,3,2,0,1,2,0,1,2,0,2,0,2,2,2,3,0,2,1,3,0,
        0,1,0,1,2,2,3,3,0,3,0,2,3,0,1,2,1,1,0,2,0,3,1,1,2,2,1,3,1,1,3,1,
      ]),
      inputs: [ 0, 3, 4, 5, 7, -1 ],
      outputs: [ 6, 7 ]
    },
    {
      table: new Uint8Array([
        1,1,0,3,0,2,0,1,3,0,2,0,1,1,0,0,1,3,2,2,0,2,2,2,2,0,1,3,3,3,1,1,
        1,3,1,3,2,2,2,2,2,2,0,1,0,1,1,2,3,1,1,2,0,3,3,3,2,2,3,1,1,1,3,0,
      ]),
      inputs: [ 1, 2, 3, 4, 6, -1 ],
      outputs: [ 3, 5 ]
    },
    {
      table: new Uint8Array([
        1,0,2,2,3,3,3,3,1,2,2,1,0,1,2,1,1,2,3,1,2,0,0,1,2,3,1,2,0,0,0,2,
        2,0,1,1,0,0,2,0,0,0,2,3,2,3,0,1,3,0,0,0,2,3,2,0,1,3,2,1,3,1,1,3,
      ]),
      inputs: [ 1, 2, 4, 5, 6, 7 ],
      outputs: [ 1, 4 ]
    },
    {
      table: new Uint8Array([
        1,3,3,0,3,2,3,1,3,2,1,1,3,3,2,1,2,3,0,3,1,0,0,2,3,0,0,0,3,3,0,1,
        2,3,0,0,0,1,2,1,3,0,0,1,0,2,2,2,3,3,1,2,1,3,0,0,0,3,0,1,3,2,2,0,
      ]),
      inputs: [ 0, 2, 3, 5, 6, 7 ],
      outputs: [ 0, 2 ]
    },
  ];
  
  private fn2_r2_boxes: SBox[] = [
    {
      table: new Uint8Array([
        3,1,3,0,3,0,3,1,3,0,0,1,1,3,0,3,1,1,0,1,2,3,2,3,3,1,2,2,2,0,2,3,
        2,2,2,1,1,3,3,0,3,1,2,1,1,1,0,2,0,3,3,0,0,2,0,0,1,1,2,1,2,1,1,0,
      ]),
      inputs: [ 0, 2, 4, 6, -1, -1],
      outputs: [ 4, 6 ]
    },
    {
      table: new Uint8Array([
        0,3,0,3,3,2,1,2,3,1,1,1,2,0,2,3,0,3,1,2,2,1,3,3,3,2,1,2,2,0,1,0,
        2,3,0,1,2,0,1,1,2,0,2,1,2,0,2,3,3,1,0,2,3,3,0,3,1,1,3,0,0,1,2,0,
      ]),
      inputs: [ 1, 3, 4, 5, 6, 7 ],
      outputs: [ 0, 3 ]
    },
    {
      table: new Uint8Array([
        0,0,2,1,3,2,1,0,1,2,2,2,1,1,0,3,1,2,2,3,2,1,1,0,3,0,0,1,1,2,3,1,
        3,3,2,2,1,0,1,1,1,2,0,1,2,3,0,3,3,0,3,2,2,0,2,2,1,2,3,2,1,0,2,1,
      ]),
      inputs: [ 0, 1, 3, 4, 5, 7 ],
      outputs: [ 1, 7 ]
    },
    {
      table: new Uint8Array([
        0,2,1,2,0,2,2,0,1,3,2,0,3,2,3,0,3,3,2,3,1,2,3,1,2,2,0,0,2,2,1,2,
        2,3,3,3,1,1,0,0,0,3,2,0,3,2,3,1,1,1,1,0,1,0,1,3,0,0,1,2,2,3,2,0,
      ]),
      inputs: [ 1, 2, 3, 5, 6, 7 ],
      outputs: [ 2, 5 ]
    },
  ];
  
  private fn2_r3_boxes: SBox[] = [
    {
      table: new Uint8Array([
        2,1,2,1,2,3,1,3,2,2,1,3,3,0,0,1,0,2,0,3,3,1,0,0,1,1,0,2,3,2,1,2,
        1,1,2,1,1,3,2,2,0,2,2,3,3,3,2,0,0,0,0,0,3,3,3,0,1,2,1,0,2,3,3,1,
      ]),
      inputs: [ 2, 3, 4, 6, -1, -1],
      outputs: [ 3, 5 ]
    },
    {
      table: new Uint8Array([
        3,2,3,3,1,0,3,0,2,0,1,1,1,0,3,0,3,1,3,1,0,1,2,3,2,2,3,2,0,1,1,2,
        3,0,0,2,1,0,0,2,2,0,1,0,0,2,0,0,1,3,1,3,2,0,3,3,1,0,2,2,2,3,0,0,
      ]),
      inputs: [ 0, 1, 3, 5, 7, -1 ],
      outputs: [ 0, 2 ]
    },
    {
      table: new Uint8Array([
        2,2,1,0,2,3,3,0,0,0,1,3,1,2,3,2,2,3,1,3,0,3,0,3,3,2,2,1,0,0,0,2,
        1,2,2,2,0,0,1,2,0,1,3,0,2,3,2,1,3,2,2,2,3,1,3,0,2,0,2,1,0,3,3,1,
      ]),
      inputs: [ 0, 1, 2, 3, 5, 7 ],
      outputs: [ 1, 6 ]
    },
    {
      table: new Uint8Array([
        1,2,3,2,0,2,1,3,3,1,0,1,1,2,2,0,0,1,1,1,2,1,1,2,0,1,3,3,1,1,1,2,
        3,3,1,0,2,1,1,1,2,1,0,0,2,2,3,2,3,2,2,0,2,2,3,3,0,2,3,0,2,2,1,1,
      ]),
      inputs: [ 0, 2, 4, 5, 6, 7 ],
      outputs: [ 4, 7 ]
    },
  ];
  
  private fn2_r4_boxes: SBox[] = [
    {
      table: new Uint8Array([
        2,0,1,1,2,1,3,3,1,1,1,2,0,1,0,2,0,1,2,0,2,3,0,2,3,3,2,2,3,2,0,1,
        3,0,2,0,2,3,1,3,2,0,0,1,1,2,3,1,1,1,0,1,2,0,3,3,1,1,1,3,3,1,1,0,
      ]),
      inputs: [ 0, 1, 3, 6, 7, -1 ],
      outputs: [ 0, 3 ]
    },
    {
      table: new Uint8Array([
        1,2,2,1,0,3,3,1,0,2,2,2,1,0,1,0,1,1,0,1,0,2,1,0,2,1,0,2,3,2,3,3,
        2,2,1,2,2,3,1,3,3,3,0,1,0,1,3,0,0,0,1,2,0,3,3,2,3,2,1,3,2,1,0,2,
      ]),
      inputs: [ 0, 1, 2, 4, 5, 6 ],
      outputs: [ 4, 7 ]
    },
    {
      table: new Uint8Array([
        2,3,2,1,3,2,3,0,0,2,1,1,0,0,3,2,3,1,0,1,2,2,2,1,3,2,2,1,0,2,1,2,
        0,3,1,0,0,3,1,1,3,3,2,0,1,0,1,3,0,0,1,2,1,2,3,2,1,0,0,3,2,1,1,3,
      ]),
      inputs: [ 0, 2, 3, 4, 5, 7 ],
      outputs: [ 1, 2 ]
    },
    {
      table: new Uint8Array([
        2,0,0,3,2,2,2,1,3,3,1,1,2,0,0,3,1,0,3,2,1,0,2,0,3,2,2,3,2,0,3,0,
        1,3,0,2,2,1,3,3,0,1,0,3,1,1,3,2,0,3,0,2,3,2,1,3,2,3,0,0,1,3,2,1,
      ]),
      inputs: [ 2, 3, 4, 5, 6, 7 ],
      outputs: [ 5, 6 ]
    },
  ];

  constructor(rom: Uint8Array, key: Uint8Array, upperLimit: number) {
    this.rom = this.createUint16ArrayFromUint8Array(rom);
    this.setKey(key);
    this.upperLimit = upperLimit;
  }

  private createUint16ArrayFromUint8Array(arr: Uint8Array): Uint16Array {
    const uint16Array = new Uint16Array(arr.length);

    for (let i = 0; i < uint16Array.length; i++) {
      uint16Array[i] = arr[i];
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

  private bit(x: number, n: number): number {
    return (x >> n) & 1;
  }

  private bitswap8(val: number, b7: number, b6: number, b5: number, b4: number, b3: number, b2: number, b1: number, b0: number): number {
    return (
      (this.bit(val, b7) << 7) |
      (this.bit(val, b6) << 6) |
      (this.bit(val, b5) << 5) |
      (this.bit(val, b4) << 4) |
      (this.bit(val, b3) << 3) |
      (this.bit(val, b2) << 2) |
      (this.bit(val, b1) << 1) |
      (this.bit(val, b0))
    );
  }

  private fn(input: number, sboxes: OptimizedSBox[], key: number): number {
    return sboxes[0].output[sboxes[0].inputLookup[input] ^ ((key >>  0) & 0x3f)] |
           sboxes[1].output[sboxes[1].inputLookup[input] ^ ((key >>  6) & 0x3f)] |
           sboxes[2].output[sboxes[2].inputLookup[input] ^ ((key >> 12) & 0x3f)] | 
           sboxes[3].output[sboxes[3].inputLookup[input] ^ ((key >> 18) & 0x3f)];
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
    for (let i = 0; i < 96; i++) {
      destKey[Math.floor(i / 24)] |= this.bit(srcKey[Math.floor(bits[i] / 32)], bits[i] % 32) << (i % 24);
    }
  }

  private expandSubkey(subkey: Uint32Array, seed: number): void {
    const bits = [
      5, 10, 14,  9,  4,  0, 15,  6,  1,  8,  3,  2, 12,  7, 13, 11,
      5, 12,  7,  2, 13, 11,  9, 14,  4,  1,  6, 10,  8,  0, 15,  3,
      4, 10,  2,  0,  6,  9, 12,  1, 11,  7, 15,  8, 13,  5, 14,  3,
      14, 11, 12,  7,  4,  5,  2, 10,  1, 15,  0,  9,  8,  6, 13,  3,
    ];
    subkey[0] = 0;
    subkey[1] = 0;

    for (let i = 0; i < 64; i++) {
      subkey[Math.floor(i / 32)] |= this.bit(seed, bits[i]) << (i % 32);
    }
  }

  private feistel(val: number,
    bitsA: number[], bitsB: number[],
    boxes1: OptimizedSBox[], boxes2: OptimizedSBox[],
    boxes3: OptimizedSBox[], boxes4: OptimizedSBox[],
    key1: number, key2: number,
    key3: number, key4: number): number {
    let l = this.bitswap8(val, bitsB[7], bitsB[6], bitsB[5], bitsB[4], bitsB[3], bitsB[2], bitsB[1], bitsB[0]);
    let r = this.bitswap8(val, bitsA[7], bitsA[6], bitsA[5], bitsA[4], bitsA[3], bitsA[2], bitsA[1], bitsA[0]);

    l ^= this.fn(r, boxes1, key1);
    r ^= this.fn(l, boxes2, key2);
    l ^= this.fn(r, boxes3, key3);
    r ^= this.fn(l, boxes4, key4);

    return (this.bit(l, 0) << bitsA[0]) |
           (this.bit(l, 1) << bitsA[1]) |
           (this.bit(l, 2) << bitsA[2]) |
           (this.bit(l, 3) << bitsA[3]) |
           (this.bit(l, 4) << bitsA[4]) |
           (this.bit(l, 5) << bitsA[5]) |
           (this.bit(l, 6) << bitsA[6]) |
           (this.bit(l, 7) << bitsA[7]) |
           (this.bit(r, 0) << bitsB[0]) |
           (this.bit(r, 1) << bitsB[1]) |
           (this.bit(r, 2) << bitsB[2]) |
           (this.bit(r, 3) << bitsB[3]) |
           (this.bit(r, 4) << bitsB[4]) |
           (this.bit(r, 5) << bitsB[5]) |
           (this.bit(r, 6) << bitsB[6]) |
           (this.bit(r, 7) << bitsB[7]);
    
  }

  private extractInputs(val: number, inputs: number[]): number {
    let result = 0;
    for (let i = 0; i < 6; i++) {
      if (inputs[i] != -1) {
        result |= this.bit(val, inputs[i]) << i;
      }
    }
    return result;
  }

  private optimizeSBoxes(out: OptimizedSBox[], input: SBox[]): void {
    for (let box = 0; box < 4; box++) {
      for (let i = 0; i < 256; i++) {
        out[box].inputLookup[i] = this.extractInputs(i, input[box].inputs);
      }
      for (let i = 0; i < 64; i++) {
        const o = input[box].table[i];
        out[box].output[i] = 0;
        if (o & 1) {
          out[box].output[i] |= 1 << input[box].outputs[0];
        }
        if (o & 2) {
          out[box].output[i] |= 1 << input[box].outputs[1];
        }
      }
    }
  }

  cps2Crypt(dir: Cps2Crypto.Direction): Uint8Array {
    let key1 = new Uint32Array(4);
    let dec = new Uint16Array(this.rom.length);
    let sboxes11 = new Array<OptimizedSBox>(4).fill(new OptimizedSBox());
    let sboxes12 = new Array<OptimizedSBox>(4).fill(new OptimizedSBox());
    let sboxes13 = new Array<OptimizedSBox>(4).fill(new OptimizedSBox());
    let sboxes14 = new Array<OptimizedSBox>(4).fill(new OptimizedSBox());
    let sboxes21 = new Array<OptimizedSBox>(4).fill(new OptimizedSBox());
    let sboxes22 = new Array<OptimizedSBox>(4).fill(new OptimizedSBox());
    let sboxes23 = new Array<OptimizedSBox>(4).fill(new OptimizedSBox());
    let sboxes24 = new Array<OptimizedSBox>(4).fill(new OptimizedSBox());
    let rom = this.rom;
    let length = rom.length;
    let masterKey = this.masterKey;
    let upperLimit = this.upperLimit;
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

    key1[0] ^= this.bit(key1[0], 1) <<  4;
    key1[0] ^= this.bit(key1[0], 2) <<  5;
    key1[0] ^= this.bit(key1[0], 8) << 11;
    key1[1] ^= this.bit(key1[1], 0) <<  5;
    key1[1] ^= this.bit(key1[1], 8) << 11;
    key1[2] ^= this.bit(key1[2], 1) <<  5;
    key1[2] ^= this.bit(key1[2], 8) << 11;

    o = '0x';
    key1.forEach((byte) => {
      o += byte.toString(16);
    });
    console.log('key1 xor', o);

    for (let i = 0; i < 0x10000; i++) {
      let a;
      let subkey = new Uint32Array(2);
      let key2 = new Uint32Array(4);

      let seed = this.feistel(i, this.fn1_groupA, this.fn1_groupB, sboxes11, sboxes12, sboxes13, sboxes14, key1[0], key1[1], key1[2], key1[3]);
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

      key2[0] ^= this.bit(key2[0], 0) <<  5;
      key2[0] ^= this.bit(key2[0], 6) << 11;
      key2[1] ^= this.bit(key2[1], 0) <<  5;
      key2[1] ^= this.bit(key2[1], 1) <<  4;
      key2[2] ^= this.bit(key2[2], 2) <<  5;
      key2[2] ^= this.bit(key2[2], 3) <<  4;
      key2[2] ^= this.bit(key2[2], 7) << 11;
      key2[3] ^= this.bit(key2[3], 1) <<  5;

      o = '0x';
      key2.forEach((byte) => {
        o += byte.toString(16);
      });
      console.log('key2 xor', o);

      for (a = i; a < Math.floor(length / 2) && a < Math.floor(upperLimit / 2); a += 0x10000) {
        if (dir) { // decrypt
          dec[a] = this.feistel(rom[a], this.fn2_groupA, this.fn2_groupB, sboxes21, sboxes22, sboxes23, sboxes24, key2[3], key2[2], key2[1], key2[0]);
          dec[a] = this.readBigEndian16(dec.buffer, a);
          // console.log('dec[a]', '0x' + dec[a].toString(16));
        } else { // encrypt
          dec[a] = this.readBigEndian16(rom.buffer, a);
          dec[a] = this.feistel(dec[a], this.fn2_groupA, this.fn2_groupB, sboxes24, sboxes23, sboxes22, sboxes21, key2[3], key2[2], key2[1], key2[0]);
        }
      }
      while (a < Math.floor(length / 2)) {
        dec[a] = this.readBigEndian16(rom.buffer, a);
        a += 0x10000;
      }
    }
    return this.createUint8ArrayFromUint16Array(dec);
  }

  readBigEndian16(source: ArrayBuffer, offset: number): number {
    return new DataView(source).getUint16(offset * 2, true);
  }

  private setKey(key: Uint8Array): void {
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
    console.log('masterkey 1', '0x' + this.masterKey[0].toString(16));
    console.log('masterkey 2', '0x' + this.masterKey[1].toString(16));
  }

};

export namespace Cps2Crypto {
  export enum Direction {
    Encrypt = 0,
    Decrypt = 1
  }
}