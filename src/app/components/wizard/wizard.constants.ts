import { FileDroppableConfig } from '../file-dropper/file-dropper-config';

export const WIZARD_CONFIG: WizardConfig = {
  operations: {

    'to_mame': {
      dropperConfig: {
        minFiles: 2,
        maxFiles: 2,
        allowedFileExtensions: [ 'mra', 'zip' ],
        uniqueExtensions: true,
      },
      labelHtml: 'Patch MAME ROM <code>.zip</code> with <code>.mra</code> file',
      helpText: 'Upload a MAME ROM and a .mra file that contains the patches you wish to apply. The output will be a patched MAME format ROM.',
      operationButtonText: 'Apply Patch',
      metadata: {
        hasRom: true,
        hasMra: true,
      },
    },

    'to_darksoft': {
      dropperConfig: {
        minFiles: 1,
        maxFiles: 1,
        allowedFileExtensions: [ 'zip' ],
        uniqueExtensions: true,
      },
      labelHtml: 'Convert MAME ROM <code>.zip</code> &#8594 Darksoft format <code>.zip</code>',
      helpText: 'Upload a MAME ROM to convert to the Darksoft file format. The output will be a .zip file containing all of a Darksoft converted ROM. You must create your own NAME file.',
      operationButtonText: 'Convert MAME to Darksoft',
      metadata: {
        hasRom: true,
        hasMra: false,
      },
    },

    // 'mra_to_ips': {
    //   dropperConfig: {
    //     minFiles: 2,
    //     maxFiles: 2,
    //     allowedFileExtensions: [ 'mra', 'zip' ],
    //     uniqueExtensions: true,
    //   },
    //   labelHtml: 'Convert <code>.mra</code> file &#8594 <code>.ips</code> file',
    //   helpText: 'Upload a MAME ROM and a .mra file that contains the patches you wish to convert to .ips format. The output will be a .zip containing .ips files named the same as the ROM parts you need to apply the patches to.',
    //   operationButtonText: 'Convert .mra to .ips',
    //   metadata: {
    //     hasRom: true,
    //     hasMra: false,
    //   },
    // },

    // 'ips_to_mra': {
    //   dropperConfig: {
    //     minFiles: 1,
    //     maxFiles: 1,
    //     allowedFileExtensions: [ 'ips' ],
    //     uniqueExtensions: true,
    //   },
    //   labelHtml: 'Convert <code>.ips</code> file &#8594 <code>.mra</code> file',
    //   helpText: 'Upload a MAME ROM and a .ips file that contains the patches you wish to convert to .mra format. The output will be a .mra file that contains only the <patch>es (you must complete the file yourself).',
    //   operationButtonText: 'Convert .ips to .mra',
    //   metadata: {
    //     hasRom: false,
    //     hasMra: true,
    //   },
    // },

    'concatenate': {
      dropperConfig: {
        minFiles: 1,
        maxFiles: 1,
        allowedFileExtensions: [ 'zip' ],
        uniqueExtensions: true,
      },
      labelHtml: 'Concatenate MAME ROM <code>.zip</code> executable (<code>maincpu</code>) files &#8594 <code>.bin</code>',
      helpText: 'Upload a MAME ROM you wish to concatenate the executable regions of. The output will be a .bin file of the concatenated executable files.',
      operationButtonText: 'Concatenate Executables',
      metadata: {
        hasRom: true,
        hasMra: false,
      },
    },

    'split': {
      dropperConfig: {
        minFiles: 2,
        maxFiles: 2,
        allowedFileExtensions: [ 'bin', 'zip' ],
        uniqueExtensions: true,
      },
      labelHtml: 'Split executable <code>.bin</code> &#8594 MAME ROM files',
      helpText: 'Upload a concatenated .bin and the MAME ROM it was split from. The output will be a .zip containing the split ROM files.',
      operationButtonText: 'Split Executable',
      metadata: {
        hasRom: true,
        hasMra: false,
      },
    },

    'decrypt_zip_opcodes': {
      dropperConfig: {
        minFiles: 1,
        maxFiles: 1,
        allowedFileExtensions: [ 'zip' ],
        uniqueExtensions: true,
      },
      labelHtml: 'Decrypt MAME ROM opcodes <code>.zip</code> &#8594 <code>.bin</code>',
      helpText: 'Upload a MAME ROM that you wish to decrypt the opcodes of. Note that this tool decrypts the opcodes in a way that is destructive to the data. This tool uses no heuristics to determine what is data and decrypts the entire region of encrypted ROM. You must use your own heuristics if modifying a ROM. The output will be a .bin file of the executable ROM space, decrypted and concatenated.',
      operationButtonText: 'Decrypt Opcodes',
      metadata: {
        hasRom: true,
        hasMra: false,
      }
    },

    'decrypt_bin_opcodes': {
      dropperConfig: {
        minFiles: 1,
        maxFiles: 1,
        allowedFileExtensions: [ 'bin' ],
        uniqueExtensions: true,
      },
      labelHtml: 'Decrypt MAME ROM opcodes <code>.bin</code> &#8594 <code>.bin</code>',
      helpText: 'Upload a .bin that contains the opcodes you wish to decrypt and a clean MAME ROM with a .key file. Note that this tool decrypts the opcodes in a way that is destructive to the data. This tool uses no heuristics to determine what is data and decrypts the entire region of encrypted ROM. You must use your own heuristics if modifying a ROM. The output will be a .bin containing the decrypted opcodes of the .bin you uploaded.',
      operationButtonText: 'Decrypt Opcodes',
      metadata: {
        hasRom: true,
        hasMra: false,
      }
    },

    'encrypt_opcodes': {
      dropperConfig: {
        minFiles: 2,
        maxFiles: 2,
        allowedFileExtensions: [ 'bin', 'zip' ],
        uniqueExtensions: true,
      },
      labelHtml: 'Encrypt MAME ROM opcodes <code>.bin</code> &#8594 <code>.bin</code>',
      helpText: 'Upload a .bin file of decrypted opcodes to re-encrypt and a clean MAME ROM with a .key file. Output will be a .bin of the encrypted opcodes.',
      operationButtonText: 'Encrypt Opcodes',
      metadata: {
        hasRom: true,
        hasMra: false,
      }
    }

    // 'get_graphics': {
    //   dropperConfig: {
    //     minFiles: 1,
    //     maxFiles: 1,
    //     allowedFileExtensions: [ 'zip' ],
    //     uniqueExtensions: true,
    //   },
    //   labelHtml: 'Get MAME ROM graphics binary, interleaved',
    //   helpText: 'Upload a MAME ROM that you wish to extract the interleaved graphics binary data from. The output will be a .bin containing the graphics binary data.',
    //   operationButtonText: 'Get Graphics',
    //   metadata: {
    //     hasRom: true,
    //     hasMra: false,
    //   },
    // },

  }
}

interface WizardConfig {
  operations: { [operation: string]: WizardOperation };
}

interface WizardOperation {
  dropperConfig: FileDroppableConfig;
  labelHtml: string;
  helpText: string;
  operationButtonText: string;
  metadata: WizardOperationMetadata;
  do?: () => Promise<void>;
}

interface WizardOperationMetadata {
  hasRom: boolean;
  hasMra: boolean;
}