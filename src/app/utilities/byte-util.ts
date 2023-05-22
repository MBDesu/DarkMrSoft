export class ByteUtil {
   
  static swapBytePairs(array: Uint8Array): Uint8Array {
    const swappedArray = new Uint8Array(array.length);
    for (let i = 0; i < array.length; i += 2) {
      swappedArray[i] = array[i + 1];
      swappedArray[i + 1] = array[i];
    }
    return swappedArray;
  }

  static getMachineEndianness(): string {
    const buffer = new ArrayBuffer(4);
    const uint32Array = new Uint32Array(buffer);
    const uint8Array = new Uint8Array(buffer);
  
    uint32Array[0] = 0x01020304;
  
    if (uint8Array[0] === 0x04 && uint8Array[1] === 0x03 && uint8Array[2] === 0x02 && uint8Array[3] === 0x01) {
      return 'little';
    } else if (uint8Array[0] === 0x01 && uint8Array[1] === 0x02 && uint8Array[2] === 0x03 && uint8Array[3] === 0x04) {
      return 'big';
    } else {
      return 'unknown';
    }
  }

  /**
   * For use with the types of hex strings you find in a .mra file.
   */
  static convertDelimitedHexStringToUint8Array(hexString: string, delimeter = ' '): Uint8Array {
    const bytesAsStrings = hexString.split(delimeter);
    const buffer = new Uint8Array(bytesAsStrings.length);
    for (let i = 0; i < buffer.length; i++) {
      buffer[i] = Number(`0x${bytesAsStrings[i]}`)
    }
    return buffer;
  }

};