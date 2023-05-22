export class SBox {
  table = new Uint8Array(64);
  inputs: number[] = [];
  outputs: number[] = [];
}

export class OptimizedSBox {
  inputLookup = new Uint8Array(256);
  output = new Uint8Array(64);
}