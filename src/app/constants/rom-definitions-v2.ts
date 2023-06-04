import { RomMapV2 } from '../models/rom-map';

export const ROM_DEFINITIONS_V2: { [romName: string]: RomMapV2 } = {
  '1944': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'nffe.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'nffe.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'nffe.05': {
            offset: 0x100000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'nff.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'nff.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'nff.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'nff.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'nff.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'nff.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'nff.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'nff.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'nff.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'nff.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'nff.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          '1944.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  '1944u': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'nffu.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'nff.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'nffu.05': {
            offset: 0x100000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'nff.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'nff.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'nff.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'nff.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'nff.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'nff.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'nff.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'nff.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'nff.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'nff.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'nff.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          '1944u.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  '1944j': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'nffj.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'nffj.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'nffj.05': {
            offset: 0x100000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'nff.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'nff.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'nff.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'nff.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'nff.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'nff.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'nff.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'nff.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'nff.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'nff.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'nff.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          '1944j.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  '19xx': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          '19xe.03b': {
            offset: 0x000000,
            size: 0x080000,
          },
          '19xe.04b': {
            offset: 0x080000,
            size: 0x080000,
          },
          '19xe.05b': {
            offset: 0x100000,
            size: 0x080000,
          },
          '19xe.06b': {
            offset: 0x180000,
            size: 0x080000,
          },
          '19x.07': {
            offset: 0x200000,
            size: 0x080000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          '19x.13m': {
            offset: 0x0000000,
            size: 0x080000,
          },
          '19x.15m': {
            offset: 0x0000002,
            size: 0x080000,
          },
          '19x.17m': {
            offset: 0x0000004,
            size: 0x080000,
          },
          '19x.19m': {
            offset: 0x0000006,
            size: 0x080000,
          },
          '19x.14m': {
            offset: 0x0800000,
            size: 0x200000,
          },
          '19x.16m': {
            offset: 0x0800002,
            size: 0x200000,
          },
          '19x.18m': {
            offset: 0x0800004,
            size: 0x200000,
          },
          '19x.20m': {
            offset: 0x0800006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          '19x.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          '19x.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          '19x.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          '19xx.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  '19xxu': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          '19xu.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          '19xu.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          '19xu.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          '19xu.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          '19x.07': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          '19x.13m': {
            offset: 0x0000000,
            size: 0x080000,
          },
          '19x.15m': {
            offset: 0x0000002,
            size: 0x080000,
          },
          '19x.17m': {
            offset: 0x0000004,
            size: 0x080000,
          },
          '19x.19m': {
            offset: 0x0000006,
            size: 0x080000,
          },
          '19x.14m': {
            offset: 0x0800000,
            size: 0x200000,
          },
          '19x.16m': {
            offset: 0x0800002,
            size: 0x200000,
          },
          '19x.18m': {
            offset: 0x0800004,
            size: 0x200000,
          },
          '19x.20m': {
            offset: 0x0800006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          '19x.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          '19x.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          '19x.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          '19xxu.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  '19xxj': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          '19xj-03b.6a': {
            offset: 0x000000,
            size: 0x80000,
          },
          '19xj-04b.7a': {
            offset: 0x080000,
            size: 0x80000,
          },
          '19xj-05b.8a': {
            offset: 0x100000,
            size: 0x80000,
          },
          '19xj-06b.9a': {
            offset: 0x180000,
            size: 0x80000,
          },
          '19xj-07.6d': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          '19x-69.4j': {
            offset: 0x0000000,
            size: 0x080000,
          },
          '19x-59.4d': {
            offset: 0x0000002,
            size: 0x080000,
          },
          '19x-79.4m': {
            offset: 0x0000004,
            size: 0x080000,
          },
          '19x-89.4p': {
            offset: 0x0000006,
            size: 0x080000,
          },
          '19x-73.8j': {
            offset: 0x0800000,
            size: 0x080000,
          },
          '19x-74.9j': {
            offset: 0x0a00000,
            size: 0x080000,
          },
          '19x-75.10j': {
            offset: 0x0c00000,
            size: 0x080000,
          },
          '19x-76.11j': {
            offset: 0x0e00000,
            size: 0x080000,
          },
          '19x-63.8d': {
            offset: 0x0800002,
            size: 0x080000,
          },
          '19x-64.9d': {
            offset: 0x0a00002,
            size: 0x080000,
          },
          '19x-65.10d': {
            offset: 0x0c00002,
            size: 0x080000,
          },
          '19x-66.11d': {
            offset: 0x0e00002,
            size: 0x080000,
          },
          '19x-83.8m': {
            offset: 0x0800004,
            size: 0x080000,
          },
          '19x-84.9m': {
            offset: 0x0a00004,
            size: 0x080000,
          },
          '19x-85.10m': {
            offset: 0x0c00004,
            size: 0x080000,
          },
          '19x-86.11m': {
            offset: 0x0e00004,
            size: 0x080000,
          },
          '19x-93.8p': {
            offset: 0x0800006,
            size: 0x080000,
          },
          '19x-94.9p': {
            offset: 0x0a00006,
            size: 0x080000,
          },
          '19x-95.10p': {
            offset: 0x0c00006,
            size: 0x080000,
          },
          '19x-96.11p': {
            offset: 0x0e00006,
            size: 0x080000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          '19x-01.1a': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          '19x-51.6a': {
            offset: 0x000000,
            size: 0x080000,
          },
          '19x-52.7a': {
            offset: 0x080000,
            size: 0x080000,
          },
          '19x-53.8a': {
            offset: 0x100000,
            size: 0x080000,
          },
          '19x-54.9a': {
            offset: 0x180000,
            size: 0x080000,
          },
          '19x-55.10a': {
            offset: 0x200000,
            size: 0x080000,
          },
          '19x-56.11a': {
            offset: 0x280000,
            size: 0x080000,
          },
          '19x-57.12a': {
            offset: 0x300000,
            size: 0x080000,
          },
          '19x-58.13a': {
            offset: 0x380000,
            size: 0x080000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          '19xxj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  '19xxjr1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          '19xj.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          '19xj.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          '19xj.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          '19xj.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          '19x.07': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          '19x.13m': {
            offset: 0x0000000,
            size: 0x080000,
          },
          '19x.15m': {
            offset: 0x0000002,
            size: 0x080000,
          },
          '19x.17m': {
            offset: 0x0000004,
            size: 0x080000,
          },
          '19x.19m': {
            offset: 0x0000006,
            size: 0x080000,
          },
          '19x.14m': {
            offset: 0x0800000,
            size: 0x200000,
          },
          '19x.16m': {
            offset: 0x0800002,
            size: 0x200000,
          },
          '19x.18m': {
            offset: 0x0800004,
            size: 0x200000,
          },
          '19x.20m': {
            offset: 0x0800006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          '19x.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          '19x.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          '19x.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          '19xxj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  '19xxjr2': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          '19xj.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          '19xj.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          '19xj.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          '19xj.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          '19x.07': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          '19x.13m': {
            offset: 0x0000000,
            size: 0x080000,
          },
          '19x.15m': {
            offset: 0x0000002,
            size: 0x080000,
          },
          '19x.17m': {
            offset: 0x0000004,
            size: 0x080000,
          },
          '19x.19m': {
            offset: 0x0000006,
            size: 0x080000,
          },
          '19x.14m': {
            offset: 0x0800000,
            size: 0x200000,
          },
          '19x.16m': {
            offset: 0x0800002,
            size: 0x200000,
          },
          '19x.18m': {
            offset: 0x0800004,
            size: 0x200000,
          },
          '19x.20m': {
            offset: 0x0800006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          '19x.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          '19x.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          '19x.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          '19xxj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  '19xxa': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          '09xa.03b': {
            offset: 0x000000,
            size: 0x80000,
          },
          '09xa.04b': {
            offset: 0x080000,
            size: 0x80000,
          },
          '09xa.05b': {
            offset: 0x100000,
            size: 0x80000,
          },
          '09xa.06b': {
            offset: 0x180000,
            size: 0x80000,
          },
          '19xa.07': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          '19x.13m': {
            offset: 0x0000000,
            size: 0x080000,
          },
          '19x.15m': {
            offset: 0x0000002,
            size: 0x080000,
          },
          '19x.17m': {
            offset: 0x0000004,
            size: 0x080000,
          },
          '19x.19m': {
            offset: 0x0000006,
            size: 0x080000,
          },
          '19x.14m': {
            offset: 0x0800000,
            size: 0x200000,
          },
          '19x.16m': {
            offset: 0x0800002,
            size: 0x200000,
          },
          '19x.18m': {
            offset: 0x0800004,
            size: 0x200000,
          },
          '19x.20m': {
            offset: 0x0800006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          '19x.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          '19x.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          '19x.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          '19xxa.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  '19xxar1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          '19xa.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          '19xa.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          '19xa.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          '19xa.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          '19x.07': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          '19x.13m': {
            offset: 0x0000000,
            size: 0x080000,
          },
          '19x.15m': {
            offset: 0x0000002,
            size: 0x080000,
          },
          '19x.17m': {
            offset: 0x0000004,
            size: 0x080000,
          },
          '19x.19m': {
            offset: 0x0000006,
            size: 0x080000,
          },
          '19x.14m': {
            offset: 0x0800000,
            size: 0x200000,
          },
          '19x.16m': {
            offset: 0x0800002,
            size: 0x200000,
          },
          '19x.18m': {
            offset: 0x0800004,
            size: 0x200000,
          },
          '19x.20m': {
            offset: 0x0800006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          '19x.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          '19x.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          '19x.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          '19xxa.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  '19xxh': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          '19xh.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          '19xh.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          '19xh.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          '19xh.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          '19x.07': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          '19x.13m': {
            offset: 0x0000000,
            size: 0x080000,
          },
          '19x.15m': {
            offset: 0x0000002,
            size: 0x080000,
          },
          '19x.17m': {
            offset: 0x0000004,
            size: 0x080000,
          },
          '19x.19m': {
            offset: 0x0000006,
            size: 0x080000,
          },
          '19x.14m': {
            offset: 0x0800000,
            size: 0x200000,
          },
          '19x.16m': {
            offset: 0x0800002,
            size: 0x200000,
          },
          '19x.18m': {
            offset: 0x0800004,
            size: 0x200000,
          },
          '19x.20m': {
            offset: 0x0800006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          '19x.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          '19x.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          '19x.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          '19xxh.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  '19xxb': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          '19xb.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          '19xb.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          '19xb.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          '19xb.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          '19x.07': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          '19x.13m': {
            offset: 0x0000000,
            size: 0x080000,
          },
          '19x.15m': {
            offset: 0x0000002,
            size: 0x080000,
          },
          '19x.17m': {
            offset: 0x0000004,
            size: 0x080000,
          },
          '19x.19m': {
            offset: 0x0000006,
            size: 0x080000,
          },
          '19x.14m': {
            offset: 0x0800000,
            size: 0x200000,
          },
          '19x.16m': {
            offset: 0x0800002,
            size: 0x200000,
          },
          '19x.18m': {
            offset: 0x0800004,
            size: 0x200000,
          },
          '19x.20m': {
            offset: 0x0800006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          '19x.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          '19x.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          '19x.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          '19xxb.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'armwar': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'pwge.03c': {
            offset: 0x000000,
            size: 0x80000,
          },
          'pwge.04c': {
            offset: 0x080000,
            size: 0x80000,
          },
          'pwge.05b': {
            offset: 0x100000,
            size: 0x80000,
          },
          'pwg.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'pwg.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'pwg.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'pwg.09a': {
            offset: 0x300000,
            size: 0x80000,
          },
          'pwg.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'pwg.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'pwg.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'pwg.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'pwg.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'pwg.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'pwg.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'pwg.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'pwg.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'pwg.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'pwg.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'pwg.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'pwg.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'armwar.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'armwarb': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'pwgb.03b': {
            offset: 0x000000,
            size: 0x80000,
          },
          'pwgb.04b': {
            offset: 0x080000,
            size: 0x80000,
          },
          'pwgb.05b': {
            offset: 0x100000,
            size: 0x80000,
          },
          'pwg.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'pwg.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'pwg.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'pwg.09a': {
            offset: 0x300000,
            size: 0x80000,
          },
          'pwg.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'pwg.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'pwg.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'pwg.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'pwg.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'pwg.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'pwg.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'pwg.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'pwg.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'pwg.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'pwg.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'pwg.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'pwg.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'armwarb.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'armwarr1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'pwge.03b': {
            offset: 0x000000,
            size: 0x80000,
          },
          'pwge.04b': {
            offset: 0x080000,
            size: 0x80000,
          },
          'pwge.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'pwg.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'pwg.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'pwg.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'pwg.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'pwg.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'pwg.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'pwg.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'pwg.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'pwg.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'pwg.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'pwg.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'pwg.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'pwg.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'pwg.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'pwg.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'pwg.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'pwg.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'armwar.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'armwaru': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'pwgu.03b': {
            offset: 0x000000,
            size: 0x80000,
          },
          'pwgu.04b': {
            offset: 0x080000,
            size: 0x80000,
          },
          'pwgu.05b': {
            offset: 0x100000,
            size: 0x80000,
          },
          'pwg.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'pwg.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'pwg.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'pwg.09a': {
            offset: 0x300000,
            size: 0x80000,
          },
          'pwg.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'pwg.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'pwg.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'pwg.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'pwg.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'pwg.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'pwg.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'pwg.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'pwg.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'pwg.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'pwg.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'pwg.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'pwg.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'armwaru.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'armwaru1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'pwgu.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'pwgu.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'pwgu.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'pwg.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'pwg.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'pwg.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'pwg.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'pwg.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'pwg.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'pwg.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'pwg.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'pwg.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'pwg.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'pwg.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'pwg.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'pwg.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'pwg.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'pwg.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'pwg.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'pwg.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'armwaru.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'pgear': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'pwgj.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'pwgj.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'pwgj.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'pwg.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'pwg.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'pwg.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'pwg.09a': {
            offset: 0x300000,
            size: 0x80000,
          },
          'pwg.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'pwg.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'pwg.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'pwg.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'pwg.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'pwg.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'pwg.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'pwg.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'pwg.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'pwg.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'pwg.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'pwg.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'pwg.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'pgear.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'pgearr1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'pwgj.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'pwgj.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'pwgj.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'pwg.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'pwg.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'pwg.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'pwg.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'pwg.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'pwg.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'pwg.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'pwg.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'pwg.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'pwg.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'pwg.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'pwg.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'pwg.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'pwg.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'pwg.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'pwg.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'pwg.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'pgear.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'armwara': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'pwga.03b': {
            offset: 0x000000,
            size: 0x80000,
          },
          'pwga.04b': {
            offset: 0x080000,
            size: 0x80000,
          },
          'pwga.05b': {
            offset: 0x100000,
            size: 0x80000,
          },
          'pwg.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'pwg.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'pwg.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'pwg.09a': {
            offset: 0x300000,
            size: 0x80000,
          },
          'pwg.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'pwg.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'pwg.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'pwg.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'pwg.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'pwg.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'pwg.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'pwg.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'pwg.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'pwg.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'pwg.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'pwg.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'pwg.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'armwara.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'armwarar1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'pwga.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'pwga.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'pwga.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'pwg.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'pwg.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'pwg.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'pwg.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'pwg.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'pwg.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'pwg.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'pwg.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'pwg.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'pwg.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'pwg.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'pwg.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'pwg.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'pwg.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'pwg.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'pwg.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'pwg.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'armwara.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'avsp': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'avpe.03d': {
            offset: 0x000000,
            size: 0x80000,
          },
          'avpe.04d': {
            offset: 0x080000,
            size: 0x80000,
          },
          'avp.05d': {
            offset: 0x100000,
            size: 0x80000,
          },
          'avp.06': {
            offset: 0x180000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'avp.13m': {
            offset: 0x0000000,
            size: 0x200000,
          },
          'avp.15m': {
            offset: 0x0000002,
            size: 0x200000,
          },
          'avp.17m': {
            offset: 0x0000004,
            size: 0x200000,
          },
          'avp.19m': {
            offset: 0x0000006,
            size: 0x200000,
          },
          'avp.14m': {
            offset: 0x0800000,
            size: 0x100000,
          },
          'avp.16m': {
            offset: 0x0800002,
            size: 0x100000,
          },
          'avp.18m': {
            offset: 0x0800004,
            size: 0x100000,
          },
          'avp.20m': {
            offset: 0x0800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'avp.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'avp.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'avp.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'avsp.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'avspu': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'avpu.03d': {
            offset: 0x000000,
            size: 0x80000,
          },
          'avpu.04d': {
            offset: 0x080000,
            size: 0x80000,
          },
          'avp.05d': {
            offset: 0x100000,
            size: 0x80000,
          },
          'avp.06': {
            offset: 0x180000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'avp.13m': {
            offset: 0x0000000,
            size: 0x200000,
          },
          'avp.15m': {
            offset: 0x0000002,
            size: 0x200000,
          },
          'avp.17m': {
            offset: 0x0000004,
            size: 0x200000,
          },
          'avp.19m': {
            offset: 0x0000006,
            size: 0x200000,
          },
          'avp.14m': {
            offset: 0x0800000,
            size: 0x100000,
          },
          'avp.16m': {
            offset: 0x0800002,
            size: 0x100000,
          },
          'avp.18m': {
            offset: 0x0800004,
            size: 0x100000,
          },
          'avp.20m': {
            offset: 0x0800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'avp.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'avp.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'avp.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'avspu.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'avspj': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'avpj.03d': {
            offset: 0x000000,
            size: 0x80000,
          },
          'avpj.04d': {
            offset: 0x080000,
            size: 0x80000,
          },
          'avp.05d': {
            offset: 0x100000,
            size: 0x80000,
          },
          'avp.06': {
            offset: 0x180000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'avp.13m': {
            offset: 0x0000000,
            size: 0x200000,
          },
          'avp.15m': {
            offset: 0x0000002,
            size: 0x200000,
          },
          'avp.17m': {
            offset: 0x0000004,
            size: 0x200000,
          },
          'avp.19m': {
            offset: 0x0000006,
            size: 0x200000,
          },
          'avp.14m': {
            offset: 0x0800000,
            size: 0x100000,
          },
          'avp.16m': {
            offset: 0x0800002,
            size: 0x100000,
          },
          'avp.18m': {
            offset: 0x0800004,
            size: 0x100000,
          },
          'avp.20m': {
            offset: 0x0800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'avp.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'avp.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'avp.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'avspj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'avspa': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'avpa.03d': {
            offset: 0x000000,
            size: 0x80000,
          },
          'avpa.04d': {
            offset: 0x080000,
            size: 0x80000,
          },
          'avp.05d': {
            offset: 0x100000,
            size: 0x80000,
          },
          'avp.06': {
            offset: 0x180000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'avp.13m': {
            offset: 0x0000000,
            size: 0x200000,
          },
          'avp.15m': {
            offset: 0x0000002,
            size: 0x200000,
          },
          'avp.17m': {
            offset: 0x0000004,
            size: 0x200000,
          },
          'avp.19m': {
            offset: 0x0000006,
            size: 0x200000,
          },
          'avp.14m': {
            offset: 0x0800000,
            size: 0x100000,
          },
          'avp.16m': {
            offset: 0x0800002,
            size: 0x100000,
          },
          'avp.18m': {
            offset: 0x0800004,
            size: 0x100000,
          },
          'avp.20m': {
            offset: 0x0800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'avp.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'avp.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'avp.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'avspa.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'avsph': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'avph.03d': {
            offset: 0x000000,
            size: 0x80000,
          },
          'avph.04d': {
            offset: 0x080000,
            size: 0x80000,
          },
          'avp.05d': {
            offset: 0x100000,
            size: 0x80000,
          },
          'avp.06': {
            offset: 0x180000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'avp.13m': {
            offset: 0x0000000,
            size: 0x200000,
          },
          'avp.15m': {
            offset: 0x0000002,
            size: 0x200000,
          },
          'avp.17m': {
            offset: 0x0000004,
            size: 0x200000,
          },
          'avp.19m': {
            offset: 0x0000006,
            size: 0x200000,
          },
          'avp.14m': {
            offset: 0x0800000,
            size: 0x100000,
          },
          'avp.16m': {
            offset: 0x0800002,
            size: 0x100000,
          },
          'avp.18m': {
            offset: 0x0800004,
            size: 0x100000,
          },
          'avp.20m': {
            offset: 0x0800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'avp.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'avp.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'avp.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'avsph.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'batcir': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'btce.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'btce.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'btce.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'btce.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'btc.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'btc.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'btc.09': {
            offset: 0x300000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'btc.13m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'btc.15m': {
            offset: 0x000002,
            size: 0x400000,
          },
          'btc.17m': {
            offset: 0x000004,
            size: 0x400000,
          },
          'btc.19m': {
            offset: 0x000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'btc.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'btc.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'btc.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'btc.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'batcir.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'batcirj': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'btcj.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'btcj.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'btcj.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'btcj.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'btc.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'btc.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'btc.09': {
            offset: 0x300000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'btc.13m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'btc.15m': {
            offset: 0x000002,
            size: 0x400000,
          },
          'btc.17m': {
            offset: 0x000004,
            size: 0x400000,
          },
          'btc.19m': {
            offset: 0x000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'btc.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'btc.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'btc.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'btc.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'batcirj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'batcira': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'btca.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'btca.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'btca.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'btca.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'btc.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'btc.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'btc.09': {
            offset: 0x300000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'btc.13m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'btc.15m': {
            offset: 0x000002,
            size: 0x400000,
          },
          'btc.17m': {
            offset: 0x000004,
            size: 0x400000,
          },
          'btc.19m': {
            offset: 0x000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'btc.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'btc.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'btc.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'btc.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'batcira.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'choko': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'tkoj.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'tkoj.04': {
            offset: 0x080000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'tkoj1_d.simm1': {
            offset: 0x0000000,
            size: 0x200000,
          },
          'tkoj1_c.simm1': {
            offset: 0x0000001,
            size: 0x200000,
          },
          'tkoj1_b.simm1': {
            offset: 0x0000002,
            size: 0x200000,
          },
          'tkoj1_a.simm1': {
            offset: 0x0000003,
            size: 0x200000,
          },
          'tkoj3_d.simm3': {
            offset: 0x0000004,
            size: 0x200000,
          },
          'tkoj3_c.simm3': {
            offset: 0x0000005,
            size: 0x200000,
          },
          'tkoj3_b.simm3': {
            offset: 0x0000006,
            size: 0x200000,
          },
          'tkoj3_a.simm3': {
            offset: 0x0000007,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'tko.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'tkoj5_a.simm5': {
            offset: 0x000000,
            size: 0x200000,
          },
          'tkoj5_b.simm5': {
            offset: 0x000001,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'choko.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'csclub': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'csce.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'csce.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'csce.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'csce.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'csce.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'csc.73': {
            offset: 0x800000,
            size: 0x080000,
          },
          'csc.74': {
            offset: 0xa00000,
            size: 0x080000,
          },
          'csc.75': {
            offset: 0xc00000,
            size: 0x080000,
          },
          'csc.76': {
            offset: 0xe00000,
            size: 0x080000,
          },
          'csc.63': {
            offset: 0x800002,
            size: 0x080000,
          },
          'csc.64': {
            offset: 0xa00002,
            size: 0x080000,
          },
          'csc.65': {
            offset: 0xc00002,
            size: 0x080000,
          },
          'csc.66': {
            offset: 0xe00002,
            size: 0x080000,
          },
          'csc.83': {
            offset: 0x800004,
            size: 0x080000,
          },
          'csc.84': {
            offset: 0xa00004,
            size: 0x080000,
          },
          'csc.85': {
            offset: 0xc00004,
            size: 0x080000,
          },
          'csc.86': {
            offset: 0xe00004,
            size: 0x080000,
          },
          'csc.93': {
            offset: 0x800006,
            size: 0x080000,
          },
          'csc.94': {
            offset: 0xa00006,
            size: 0x080000,
          },
          'csc.95': {
            offset: 0xc00006,
            size: 0x080000,
          },
          'csc.96': {
            offset: 0xe00006,
            size: 0x080000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'csc.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'csc.51': {
            offset: 0x000000,
            size: 0x080000,
          },
          'csc.52': {
            offset: 0x080000,
            size: 0x080000,
          },
          'csc.53': {
            offset: 0x100000,
            size: 0x080000,
          },
          'csc.54': {
            offset: 0x180000,
            size: 0x080000,
          },
          'csc.55': {
            offset: 0x200000,
            size: 0x080000,
          },
          'csc.56': {
            offset: 0x280000,
            size: 0x080000,
          },
          'csc.57': {
            offset: 0x300000,
            size: 0x080000,
          },
          'csc.58': {
            offset: 0x380000,
            size: 0x080000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'csclub.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'csclub1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'csce.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'csce.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'csce.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'csce.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'csc.07': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'csc.14m': {
            offset: 0x800000,
            size: 0x200000,
          },
          'csc.16m': {
            offset: 0x800002,
            size: 0x200000,
          },
          'csc.18m': {
            offset: 0x800004,
            size: 0x200000,
          },
          'csc.20m': {
            offset: 0x800006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'csc.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'csc.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'csc.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'csclub.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'csclubj': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'cscj.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'cscj.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'cscj.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'cscj.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'csc.07': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'csc.14m': {
            offset: 0x800000,
            size: 0x200000,
          },
          'csc.16m': {
            offset: 0x800002,
            size: 0x200000,
          },
          'csc.18m': {
            offset: 0x800004,
            size: 0x200000,
          },
          'csc.20m': {
            offset: 0x800006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'csc.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'csc.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'csc.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'csclubj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'csclubjy': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'cscj.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'cscj.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'cscj.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'cscj.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'csc.07': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'csc.73': {
            offset: 0x800000,
            size: 0x080000,
          },
          'csc.74': {
            offset: 0xa00000,
            size: 0x080000,
          },
          'csc.75': {
            offset: 0xc00000,
            size: 0x080000,
          },
          'csc.76': {
            offset: 0xe00000,
            size: 0x080000,
          },
          'csc.63': {
            offset: 0x800002,
            size: 0x080000,
          },
          'csc.64': {
            offset: 0xa00002,
            size: 0x080000,
          },
          'csc.65': {
            offset: 0xc00002,
            size: 0x080000,
          },
          'csc.66': {
            offset: 0xe00002,
            size: 0x080000,
          },
          'csc.83': {
            offset: 0x800004,
            size: 0x080000,
          },
          'csc.84': {
            offset: 0xa00004,
            size: 0x080000,
          },
          'csc.85': {
            offset: 0xc00004,
            size: 0x080000,
          },
          'csc.86': {
            offset: 0xe00004,
            size: 0x080000,
          },
          'csc.93': {
            offset: 0x800006,
            size: 0x080000,
          },
          'csc.94': {
            offset: 0xa00006,
            size: 0x080000,
          },
          'csc.95': {
            offset: 0xc00006,
            size: 0x080000,
          },
          'csc.96': {
            offset: 0xe00006,
            size: 0x080000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'csc.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'csc.51': {
            offset: 0x000000,
            size: 0x080000,
          },
          'csc.52': {
            offset: 0x080000,
            size: 0x080000,
          },
          'csc.53': {
            offset: 0x100000,
            size: 0x080000,
          },
          'csc.54': {
            offset: 0x180000,
            size: 0x080000,
          },
          'csc.55': {
            offset: 0x200000,
            size: 0x080000,
          },
          'csc.56': {
            offset: 0x280000,
            size: 0x080000,
          },
          'csc.57': {
            offset: 0x300000,
            size: 0x080000,
          },
          'csc.58': {
            offset: 0x380000,
            size: 0x080000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'csclubj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },

  'cscluba': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'csca.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'csca.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'csca.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'csca.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'csc.07': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'csc.14m': {
            offset: 0x800000,
            size: 0x200000,
          },
          'csc.16m': {
            offset: 0x800002,
            size: 0x200000,
          },
          'csc.18m': {
            offset: 0x800004,
            size: 0x200000,
          },
          'csc.20m': {
            offset: 0x800006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'csc.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'csc.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'csc.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'cscluba.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'csclubh': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'csch.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'csch.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'csch.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'csch.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'csc.07': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'csc.14m': {
            offset: 0x800000,
            size: 0x200000,
          },
          'csc.16m': {
            offset: 0x800002,
            size: 0x200000,
          },
          'csc.18m': {
            offset: 0x800004,
            size: 0x200000,
          },
          'csc.20m': {
            offset: 0x800006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'csc.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'csc.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'csc.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'csclubh.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'cybots': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'cybe.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'cybe.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'cyb.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'cyb.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'cyb.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'cyb.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'cyb.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'cyb.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'cyb.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'cyb.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'cyb.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'cyb.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'cyb.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'cyb.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'cyb.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'cyb.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'cyb.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'cyb.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'cyb.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'cyb.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'cybots.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'cybotsu': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'cybu.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'cybu.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'cyb.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'cyb.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'cyb.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'cyb.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'cyb.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'cyb.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'cyb.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'cyb.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'cyb.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'cyb.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'cyb.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'cyb.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'cyb.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'cyb.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'cyb.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'cyb.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'cyb.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'cyb.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'cybotsu.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'cybotsj': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'cybj.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'cybj.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'cyb.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'cyb.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'cyb.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'cyb.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'cyb.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'cyb.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'cyb.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'cyb.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'cyb.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'cyb.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'cyb.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'cyb.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'cyb.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'cyb.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'cyb.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'cyb.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'cyb.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'cyb.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'cybotsj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ddtod': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'dade.03c': {
            offset: 0x000000,
            size: 0x80000,
          },
          'dade.04c': {
            offset: 0x080000,
            size: 0x80000,
          },
          'dade.05c': {
            offset: 0x100000,
            size: 0x80000,
          },
          'dad.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'dad.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'dad.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dad.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'dad.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'dad.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'dad.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'dad.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'dad.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'dad.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'dad.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'dad.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dad.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ddtod.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ddtodr1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'dade.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'dade.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'dade.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'dad.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'dad.07': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'dad.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dad.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'dad.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'dad.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'dad.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'dad.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'dad.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'dad.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'dad.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'dad.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dad.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ddtod.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ddtodu': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'dadu.03b': {
            offset: 0x000000,
            size: 0x80000,
          },
          'dadu.04b': {
            offset: 0x080000,
            size: 0x80000,
          },
          'dadu.05b': {
            offset: 0x100000,
            size: 0x80000,
          },
          'dad.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'dad.07': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'dad.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dad.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'dad.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'dad.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'dad.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'dad.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'dad.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'dad.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'dad.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'dad.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dad.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ddtodu.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ddtodur1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'dadu.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'dadu.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'dadu.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'dad.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'dad.07': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'dad.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dad.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'dad.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'dad.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'dad.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'dad.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'dad.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'dad.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'dad.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'dad.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dad.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ddtodu.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ddtodj': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'dadj.03c': {
            offset: 0x000000,
            size: 0x80000,
          },
          'dadj.04c': {
            offset: 0x080000,
            size: 0x80000,
          },
          'dadj.05c': {
            offset: 0x100000,
            size: 0x80000,
          },
          'dad.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'dad.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'dad.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dad.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'dad.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'dad.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'dad.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'dad.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'dad.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'dad.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'dad.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'dad.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dad.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ddtodj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ddtodjr1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'dadj.03b': {
            offset: 0x000000,
            size: 0x80000,
          },
          'dadj.04b': {
            offset: 0x080000,
            size: 0x80000,
          },
          'dadj.05b': {
            offset: 0x100000,
            size: 0x80000,
          },
          'dad.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'dad.07': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'dad.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dad.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'dad.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'dad.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'dad.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'dad.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'dad.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'dad.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'dad.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'dad.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dad.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ddtodj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ddtodjr2': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'dadj.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'dadj.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'dadj.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'dad.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'dad.07': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'dad.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dad.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'dad.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'dad.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'dad.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'dad.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'dad.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'dad.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'dad.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'dad.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dad.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ddtodj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ddtoda': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'dada.03c': {
            offset: 0x000000,
            size: 0x80000,
          },
          'dada.04c': {
            offset: 0x080000,
            size: 0x80000,
          },
          'dada.05c': {
            offset: 0x100000,
            size: 0x80000,
          },
          'dad.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'dad.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'dad.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dad.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'dad.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'dad.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'dad.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'dad.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'dad.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'dad.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'dad.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'dad.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dad.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ddtoda.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ddtodar1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'dada.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'dada.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'dada.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'dad.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'dad.07': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'dad.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dad.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'dad.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'dad.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'dad.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'dad.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'dad.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'dad.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'dad.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'dad.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dad.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ddtoda.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ddtodh': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'dadh.03c': {
            offset: 0x000000,
            size: 0x80000,
          },
          'dadh.04c': {
            offset: 0x080000,
            size: 0x80000,
          },
          'dadh.05c': {
            offset: 0x100000,
            size: 0x80000,
          },
          'dad.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'dad.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'dad.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dad.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'dad.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'dad.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'dad.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'dad.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'dad.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'dad.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'dad.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'dad.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dad.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ddtodh.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ddtodhr1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'dadh.03b': {
            offset: 0x000000,
            size: 0x80000,
          },
          'dadh.04b': {
            offset: 0x080000,
            size: 0x80000,
          },
          'dadh.05b': {
            offset: 0x100000,
            size: 0x80000,
          },
          'dad.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'dad.07': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'dad.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dad.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'dad.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'dad.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'dad.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'dad.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'dad.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'dad.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'dad.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'dad.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dad.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ddtodh.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ddtodhr2': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'dadh.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'dadh.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'dadh.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'dad.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'dad.07': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'dad.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dad.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'dad.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'dad.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'dad.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'dad.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'dad.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'dad.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'dad.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'dad.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dad.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ddtodh.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ddsom': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'dd2e.03e': {
            offset: 0x000000,
            size: 0x80000,
          },
          'dd2e.04e': {
            offset: 0x080000,
            size: 0x80000,
          },
          'dd2e.05e': {
            offset: 0x100000,
            size: 0x80000,
          },
          'dd2e.06e': {
            offset: 0x180000,
            size: 0x80000,
          },
          'dd2e.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'dd2e.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'dd2e.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'dd2e.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1800000,
        files: {
          'dd2.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'dd2.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'dd2.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'dd2.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'dd2.14m': {
            offset: 0x1000000,
            size: 0x200000,
          },
          'dd2.16m': {
            offset: 0x1000002,
            size: 0x200000,
          },
          'dd2.18m': {
            offset: 0x1000004,
            size: 0x200000,
          },
          'dd2.20m': {
            offset: 0x1000006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'dd2.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'dd2.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'dd2.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dd2.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ddsom.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ddsomr1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'dd2e.03d': {
            offset: 0x000000,
            size: 0x80000,
          },
          'dd2e.04d': {
            offset: 0x080000,
            size: 0x80000,
          },
          'dd2e.05d': {
            offset: 0x100000,
            size: 0x80000,
          },
          'dd2e.06d': {
            offset: 0x180000,
            size: 0x80000,
          },
          'dd2e.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'dd2e.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'dd2e.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'dd2e.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1800000,
        files: {
          'dd2.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'dd2.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'dd2.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'dd2.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'dd2.14m': {
            offset: 0x1000000,
            size: 0x200000,
          },
          'dd2.16m': {
            offset: 0x1000002,
            size: 0x200000,
          },
          'dd2.18m': {
            offset: 0x1000004,
            size: 0x200000,
          },
          'dd2.20m': {
            offset: 0x1000006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'dd2.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'dd2.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'dd2.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dd2.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ddsom.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ddsomr2': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'dd2e.03b': {
            offset: 0x000000,
            size: 0x80000,
          },
          'dd2e.04b': {
            offset: 0x080000,
            size: 0x80000,
          },
          'dd2e.05b': {
            offset: 0x100000,
            size: 0x80000,
          },
          'dd2e.06b': {
            offset: 0x180000,
            size: 0x80000,
          },
          'dd2e.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'dd2e.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'dd2e.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'dd2e.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1800000,
        files: {
          'dd2.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'dd2.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'dd2.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'dd2.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'dd2.14m': {
            offset: 0x1000000,
            size: 0x200000,
          },
          'dd2.16m': {
            offset: 0x1000002,
            size: 0x200000,
          },
          'dd2.18m': {
            offset: 0x1000004,
            size: 0x200000,
          },
          'dd2.20m': {
            offset: 0x1000006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'dd2.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'dd2.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'dd2.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dd2.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ddsom.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ddsomr3': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'dd2e.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'dd2e.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'dd2e.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'dd2e.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'dd2e.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'dd2e.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'dd2e.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'dd2e.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1800000,
        files: {
          'dd2.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'dd2.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'dd2.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'dd2.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'dd2.14m': {
            offset: 0x1000000,
            size: 0x200000,
          },
          'dd2.16m': {
            offset: 0x1000002,
            size: 0x200000,
          },
          'dd2.18m': {
            offset: 0x1000004,
            size: 0x200000,
          },
          'dd2.20m': {
            offset: 0x1000006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'dd2.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'dd2.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'dd2.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dd2.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ddsom.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ddsomu': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'dd2u.03g': {
            offset: 0x000000,
            size: 0x80000,
          },
          'dd2u.04g': {
            offset: 0x080000,
            size: 0x80000,
          },
          'dd2.05g': {
            offset: 0x100000,
            size: 0x80000,
          },
          'dd2.06g': {
            offset: 0x180000,
            size: 0x80000,
          },
          'dd2.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'dd2.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'dd2.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'dd2.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1800000,
        files: {
          'dd2.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'dd2.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'dd2.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'dd2.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'dd2.14m': {
            offset: 0x1000000,
            size: 0x200000,
          },
          'dd2.16m': {
            offset: 0x1000002,
            size: 0x200000,
          },
          'dd2.18m': {
            offset: 0x1000004,
            size: 0x200000,
          },
          'dd2.20m': {
            offset: 0x1000006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'dd2.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'dd2.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'dd2.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dd2.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ddsomu.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ddsomur1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'dd2u.03d': {
            offset: 0x000000,
            size: 0x80000,
          },
          'dd2u.04d': {
            offset: 0x080000,
            size: 0x80000,
          },
          'dd2.05d': {
            offset: 0x100000,
            size: 0x80000,
          },
          'dd2.06d': {
            offset: 0x180000,
            size: 0x80000,
          },
          'dd2.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'dd2.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'dd2.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'dd2.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1800000,
        files: {
          'dd2.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'dd2.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'dd2.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'dd2.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'dd2.14m': {
            offset: 0x1000000,
            size: 0x200000,
          },
          'dd2.16m': {
            offset: 0x1000002,
            size: 0x200000,
          },
          'dd2.18m': {
            offset: 0x1000004,
            size: 0x200000,
          },
          'dd2.20m': {
            offset: 0x1000006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'dd2.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'dd2.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'dd2.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dd2.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ddsomu.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ddsomj': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'dd2j.03g': {
            offset: 0x000000,
            size: 0x80000,
          },
          'dd2j.04g': {
            offset: 0x080000,
            size: 0x80000,
          },
          'dd2.05g': {
            offset: 0x100000,
            size: 0x80000,
          },
          'dd2.06g': {
            offset: 0x180000,
            size: 0x80000,
          },
          'dd2.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'dd2.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'dd2.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'dd2.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1800000,
        files: {
          'dd2.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'dd2.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'dd2.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'dd2.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'dd2.14m': {
            offset: 0x1000000,
            size: 0x200000,
          },
          'dd2.16m': {
            offset: 0x1000002,
            size: 0x200000,
          },
          'dd2.18m': {
            offset: 0x1000004,
            size: 0x200000,
          },
          'dd2.20m': {
            offset: 0x1000006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'dd2.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'dd2.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'dd2.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dd2.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ddsomj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ddsomjr1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'dd2j.03b': {
            offset: 0x000000,
            size: 0x80000,
          },
          'dd2j.04b': {
            offset: 0x080000,
            size: 0x80000,
          },
          'dd2.05b': {
            offset: 0x100000,
            size: 0x80000,
          },
          'dd2.06b': {
            offset: 0x180000,
            size: 0x80000,
          },
          'dd2.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'dd2.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'dd2.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'dd2.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1800000,
        files: {
          'dd2.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'dd2.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'dd2.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'dd2.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'dd2.14m': {
            offset: 0x1000000,
            size: 0x200000,
          },
          'dd2.16m': {
            offset: 0x1000002,
            size: 0x200000,
          },
          'dd2.18m': {
            offset: 0x1000004,
            size: 0x200000,
          },
          'dd2.20m': {
            offset: 0x1000006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'dd2.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'dd2.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'dd2.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dd2.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ddsomj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ddsomjr2': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'dd2j.03b': {
            offset: 0x000000,
            size: 0x80000,
          },
          'dd2j.04b': {
            offset: 0x080000,
            size: 0x80000,
          },
          'dd2.05b': {
            offset: 0x100000,
            size: 0x80000,
          },
          'dd2.06b': {
            offset: 0x180000,
            size: 0x80000,
          },
          'dd2.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'dd2.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'dd2.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'dd2.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1800000,
        files: {
          'dd2.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'dd2.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'dd2.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'dd2.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'dd2.14m': {
            offset: 0x1000000,
            size: 0x200000,
          },
          'dd2.16m': {
            offset: 0x1000002,
            size: 0x200000,
          },
          'dd2.18m': {
            offset: 0x1000004,
            size: 0x200000,
          },
          'dd2.20m': {
            offset: 0x1000006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'dd2.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'dd2.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'dd2.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dd2.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ddsomj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ddsoma': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'dd2a.03g': {
            offset: 0x000000,
            size: 0x80000,
          },
          'dd2a.04g': {
            offset: 0x080000,
            size: 0x80000,
          },
          'dd2.05g': {
            offset: 0x100000,
            size: 0x80000,
          },
          'dd2.06g': {
            offset: 0x180000,
            size: 0x80000,
          },
          'dd2.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'dd2.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'dd2.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'dd2.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1800000,
        files: {
          'dd2.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'dd2.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'dd2.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'dd2.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'dd2.14m': {
            offset: 0x1000000,
            size: 0x200000,
          },
          'dd2.16m': {
            offset: 0x1000002,
            size: 0x200000,
          },
          'dd2.18m': {
            offset: 0x1000004,
            size: 0x200000,
          },
          'dd2.20m': {
            offset: 0x1000006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'dd2.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'dd2.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'dd2.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dd2.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ddsoma.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },

  'ddsomar1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'dd2a.03c': {
            offset: 0x000000,
            size: 0x80000,
          },
          'dd2a.04c': {
            offset: 0x080000,
            size: 0x80000,
          },
          'dd2a.05c': {
            offset: 0x100000,
            size: 0x80000,
          },
          'dd2a.06c': {
            offset: 0x180000,
            size: 0x80000,
          },
          'dd2.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'dd2.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'dd2.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'dd2.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1800000,
        files: {
          'dd2.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'dd2.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'dd2.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'dd2.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'dd2.14m': {
            offset: 0x1000000,
            size: 0x200000,
          },
          'dd2.16m': {
            offset: 0x1000002,
            size: 0x200000,
          },
          'dd2.18m': {
            offset: 0x1000004,
            size: 0x200000,
          },
          'dd2.20m': {
            offset: 0x1000006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'dd2.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'dd2.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'dd2.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dd2.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ddsoma.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ddsomb': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'dd2b.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'dd2b.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'dd2b.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'dd2b.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'dd2b.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'dd2e.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'dd2e.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'dd2e.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1800000,
        files: {
          'dd2.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'dd2.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'dd2.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'dd2.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'dd2.14m': {
            offset: 0x1000000,
            size: 0x200000,
          },
          'dd2.16m': {
            offset: 0x1000002,
            size: 0x200000,
          },
          'dd2.18m': {
            offset: 0x1000004,
            size: 0x200000,
          },
          'dd2.20m': {
            offset: 0x1000006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'dd2.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'dd2.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'dd2.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dd2.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ddsomb.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ddsomh': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'dd2h.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'dd2h.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'dd2h.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'dd2h.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'dd2h.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
          'dd2e.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'dd2e.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'dd2e.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1800000,
        files: {
          'dd2.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'dd2.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'dd2.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'dd2.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'dd2.14m': {
            offset: 0x1000000,
            size: 0x200000,
          },
          'dd2.16m': {
            offset: 0x1000002,
            size: 0x200000,
          },
          'dd2.18m': {
            offset: 0x1000004,
            size: 0x200000,
          },
          'dd2.20m': {
            offset: 0x1000006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'dd2.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'dd2.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'dd2.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'dd2.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ddsomh.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'dimahoo': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'gmde.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'gmd.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'gmd.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'gmd.06': {
            offset: 0x180000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'gmd.13m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'gmd.15m': {
            offset: 0x000002,
            size: 0x400000,
          },
          'gmd.17m': {
            offset: 0x000004,
            size: 0x400000,
          },
          'gmd.19m': {
            offset: 0x000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'gmd.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'gmd.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'gmd.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'gmd.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'dimahoo.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'dimahoou': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'gmdu.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'gmd.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'gmd.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'gmd.06': {
            offset: 0x180000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'gmd.13m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'gmd.15m': {
            offset: 0x000002,
            size: 0x400000,
          },
          'gmd.17m': {
            offset: 0x000004,
            size: 0x400000,
          },
          'gmd.19m': {
            offset: 0x000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'gmd.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'gmd.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'gmd.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'gmd.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'dimahoou.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'gmahou': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'gmdj.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'gmd.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'gmd.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'gmd.06': {
            offset: 0x180000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'gmd.13m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'gmd.15m': {
            offset: 0x000002,
            size: 0x400000,
          },
          'gmd.17m': {
            offset: 0x000004,
            size: 0x400000,
          },
          'gmd.19m': {
            offset: 0x000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'gmd.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'gmd.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'gmd.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'gmd.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'gmahou.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'dstlk': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'vame.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'vame.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'vame.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'vame.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'vame.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
          'vame.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'vame.09a': {
            offset: 0x300000,
            size: 0x80000,
          },
          'vame.10a': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'vam.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'vam.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'vam.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'vam.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'vam.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'vam.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'vam.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'vam.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'vam.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'vam.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'vam.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'vam.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'dstlk.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'dstlku': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'vamu.03b': {
            offset: 0x000000,
            size: 0x80000,
          },
          'vamu.04b': {
            offset: 0x080000,
            size: 0x80000,
          },
          'vamu.05b': {
            offset: 0x100000,
            size: 0x80000,
          },
          'vamu.06b': {
            offset: 0x180000,
            size: 0x80000,
          },
          'vamu.07b': {
            offset: 0x200000,
            size: 0x80000,
          },
          'vamu.08b': {
            offset: 0x280000,
            size: 0x80000,
          },
          'vamu.09b': {
            offset: 0x300000,
            size: 0x80000,
          },
          'vamu.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'vam.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'vam.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'vam.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'vam.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'vam.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'vam.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'vam.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'vam.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'vam.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'vam.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'vam.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'vam.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'dstlku.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'dstlkur1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'vamu.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'vamu.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'vamu.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'vamu.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'vamu.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
          'vamu.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'vamu.09a': {
            offset: 0x300000,
            size: 0x80000,
          },
          'vamu.10a': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'vam.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'vam.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'vam.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'vam.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'vam.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'vam.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'vam.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'vam.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'vam.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'vam.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'vam.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'vam.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'dstlku.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'vampj': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'vamj.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'vamj.04b': {
            offset: 0x080000,
            size: 0x80000,
          },
          'vamj.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'vamj.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'vamj.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
          'vamj.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'vamj.09a': {
            offset: 0x300000,
            size: 0x80000,
          },
          'vamj.10a': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'vam.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'vam.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'vam.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'vam.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'vam.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'vam.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'vam.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'vam.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'vam.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'vam.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'vam.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'vam.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'vampj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'vampja': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'vamj.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'vamj.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'vamj.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'vamj.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'vamj.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
          'vamj.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'vamj.09a': {
            offset: 0x300000,
            size: 0x80000,
          },
          'vamj.10a': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'vam.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'vam.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'vam.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'vam.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'vam.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'vam.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'vam.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'vam.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'vam.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'vam.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'vam.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'vam.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'vampj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'vampjr1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'vamj.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'vamj.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'vamj.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'vamj.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'vamj.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'vamj.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'vamj.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'vamj.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'vam.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'vam.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'vam.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'vam.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'vam.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'vam.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'vam.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'vam.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'vam.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'vam.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'vam.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'vam.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'vampj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'dstlka': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'vama.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'vama.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'vama.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'vama.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'vama.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
          'vama.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'vama.09a': {
            offset: 0x300000,
            size: 0x80000,
          },
          'vama.10a': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'vam.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'vam.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'vam.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'vam.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'vam.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'vam.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'vam.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'vam.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'vam.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'vam.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'vam.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'vam.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'dstlka.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'dstlkh': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'vamh.03c': {
            offset: 0x000000,
            size: 0x80000,
          },
          'vamh.04c': {
            offset: 0x080000,
            size: 0x80000,
          },
          'vamh.05c': {
            offset: 0x100000,
            size: 0x80000,
          },
          'vamh.06c': {
            offset: 0x180000,
            size: 0x80000,
          },
          'vamh.07c': {
            offset: 0x200000,
            size: 0x80000,
          },
          'vamh.08c': {
            offset: 0x280000,
            size: 0x80000,
          },
          'vamh.09c': {
            offset: 0x300000,
            size: 0x80000,
          },
          'vamh.10c': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'vam.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'vam.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'vam.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'vam.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'vam.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'vam.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'vam.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'vam.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'vam.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'vam.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'vam.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'vam.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'dstlkh.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ecofghtr': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'uece.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'uece.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'uece.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'uece.06': {
            offset: 0x180000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'uec.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'uec.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'uec.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'uec.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'uec.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'uec.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'uec.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'uec.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'uec.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'uec.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'uec.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ecofghtr.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ecofghtru': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'uecu.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'uecu.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'uecu.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'uecu.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'uec.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'uec.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'uec.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'uec.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'uec.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'uec.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'uec.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'uec.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'uec.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'uec.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'uec.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ecofghtru.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ecofghtru1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'uecu.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'uecu.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'uecu.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'uecu.06': {
            offset: 0x180000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'uec.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'uec.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'uec.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'uec.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'uec.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'uec.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'uec.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'uec.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'uec.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'uec.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'uec.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ecofghtru.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'uecology': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'uecj.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'uecj.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'uecj.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'uecj.06': {
            offset: 0x180000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'uec.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'uec.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'uec.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'uec.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'uec.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'uec.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'uec.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'uec.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'uec.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'uec.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'uec.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'uecology.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ecofghtra': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'ueca.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'ueca.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'ueca.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'ueca.06': {
            offset: 0x180000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'uec.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'uec.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'uec.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'uec.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'uec.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'uec.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'uec.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'uec.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'uec.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'uec.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'uec.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ecofghtra.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ecofghtrh': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'uech.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'uech.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'uech.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'uech.06': {
            offset: 0x180000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'uec.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'uec.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'uec.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'uec.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'uec.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'uec.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'uec.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'uec.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'uec.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'uec.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'uec.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ecofghtrh.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'gigawing': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'ggwu.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'ggwu.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'ggw.05': {
            offset: 0x100000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'ggw.13m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'ggw.15m': {
            offset: 0x000002,
            size: 0x400000,
          },
          'ggw.17m': {
            offset: 0x000004,
            size: 0x400000,
          },
          'ggw.19m': {
            offset: 0x000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'ggw.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'ggw.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'ggw.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'gigawing.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'gigawingj': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'ggwj.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'ggwj.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'ggwj.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'ggw.13m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'ggw.15m': {
            offset: 0x000002,
            size: 0x400000,
          },
          'ggw.17m': {
            offset: 0x000004,
            size: 0x400000,
          },
          'ggw.19m': {
            offset: 0x000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'ggw.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'ggw.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'ggw.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'gigawingj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'gigawinga': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'ggwa.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'ggwa.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'ggwa.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'ggw.13m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'ggw.15m': {
            offset: 0x000002,
            size: 0x400000,
          },
          'ggw.17m': {
            offset: 0x000004,
            size: 0x400000,
          },
          'ggw.19m': {
            offset: 0x000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'ggw.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'ggw.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'ggw.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'gigawinga.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'gigawingh': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'ggwh.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'ggwh.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'ggw.05': {
            offset: 0x100000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'ggw.13m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'ggw.15m': {
            offset: 0x000002,
            size: 0x400000,
          },
          'ggw.17m': {
            offset: 0x000004,
            size: 0x400000,
          },
          'ggw.19m': {
            offset: 0x000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'ggw.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'ggw.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'ggw.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'gigawingh.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'gigawingb': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'ggwb.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'ggwb.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'ggw.05': {
            offset: 0x100000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'ggw.13m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'ggw.15m': {
            offset: 0x000002,
            size: 0x400000,
          },
          'ggw.17m': {
            offset: 0x000004,
            size: 0x400000,
          },
          'ggw.19m': {
            offset: 0x000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'ggw.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'ggw.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'ggw.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'gigawingb.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'hsf2': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'hs2u.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'hs2u.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'hs2.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'hs2.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'hs2.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'hs2.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'hs2.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'hs2.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'hs2.13m': {
            offset: 0x0000000,
            size: 0x800000,
          },
          'hs2.15m': {
            offset: 0x0000002,
            size: 0x800000,
          },
          'hs2.17m': {
            offset: 0x0000004,
            size: 0x800000,
          },
          'hs2.19m': {
            offset: 0x0000006,
            size: 0x800000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'hs2.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'hs2.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'hs2.11m': {
            offset: 0x000000,
            size: 0x800000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'hsf2.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'hsf2a': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'hs2a.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'hs2a.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'hs2.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'hs2.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'hs2.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'hs2.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'hs2.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'hs2.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'hs2.13m': {
            offset: 0x0000000,
            size: 0x800000,
          },
          'hs2.15m': {
            offset: 0x0000002,
            size: 0x800000,
          },
          'hs2.17m': {
            offset: 0x0000004,
            size: 0x800000,
          },
          'hs2.19m': {
            offset: 0x0000006,
            size: 0x800000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'hs2.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'hs2.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'hs2.11m': {
            offset: 0x000000,
            size: 0x800000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'hsf2a.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'hsf2j': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'hs2j.03c': {
            offset: 0x000000,
            size: 0x80000,
          },
          'hs2j.04b': {
            offset: 0x080000,
            size: 0x80000,
          },
          'hs2j.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'hs2j.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'hs2j.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'hs2j.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'hs2j.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'hs2j.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'hs2.13m': {
            offset: 0x0000000,
            size: 0x800000,
          },
          'hs2.15m': {
            offset: 0x0000002,
            size: 0x800000,
          },
          'hs2.17m': {
            offset: 0x0000004,
            size: 0x800000,
          },
          'hs2.19m': {
            offset: 0x0000006,
            size: 0x800000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'hs2.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'hs2.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'hs2.11m': {
            offset: 0x000000,
            size: 0x800000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'hsf2j.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'hsf2j1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'hs2j.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'hs2j.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'hs2.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'hs2.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'hs2.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'hs2.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'hs2.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'hs2.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'hs2.13m': {
            offset: 0x0000000,
            size: 0x800000,
          },
          'hs2.15m': {
            offset: 0x0000002,
            size: 0x800000,
          },
          'hs2.17m': {
            offset: 0x0000004,
            size: 0x800000,
          },
          'hs2.19m': {
            offset: 0x0000006,
            size: 0x800000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'hs2.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'hs2.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'hs2.11m': {
            offset: 0x000000,
            size: 0x800000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'hsf2j.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'jyangoku': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'majj.03': {
            offset: 0x000000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'maj1_d.simm1': {
            offset: 0x0000000,
            size: 0x200000,
          },
          'maj1_c.simm1': {
            offset: 0x0000001,
            size: 0x200000,
          },
          'maj1_b.simm1': {
            offset: 0x0000002,
            size: 0x200000,
          },
          'maj1_a.simm1': {
            offset: 0x0000003,
            size: 0x200000,
          },
          'maj3_d.simm3': {
            offset: 0x0000004,
            size: 0x200000,
          },
          'maj3_c.simm3': {
            offset: 0x0000005,
            size: 0x200000,
          },
          'maj3_b.simm3': {
            offset: 0x0000006,
            size: 0x200000,
          },
          'maj3_a.simm3': {
            offset: 0x0000007,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'maj.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'maj5_a.simm5': {
            offset: 0x000000,
            size: 0x200000,
          },
          'maj5_b.simm5': {
            offset: 0x000001,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'jyangoku.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'megaman2': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'rm2u.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'rm2u.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'rm2.05': {
            offset: 0x100000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'rm2.14m': {
            offset: 0x800000,
            size: 0x200000,
          },
          'rm2.16m': {
            offset: 0x800002,
            size: 0x200000,
          },
          'rm2.18m': {
            offset: 0x800004,
            size: 0x200000,
          },
          'rm2.20m': {
            offset: 0x800006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'rm2.01a': {
            offset: 0x00000,
            size: 0x08000,
          },
          'rm2.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'rm2.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'rm2.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'megaman2.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'megaman2a': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'rm2a.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'rm2a.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'rm2.05': {
            offset: 0x100000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'rm2.14m': {
            offset: 0x800000,
            size: 0x200000,
          },
          'rm2.16m': {
            offset: 0x800002,
            size: 0x200000,
          },
          'rm2.18m': {
            offset: 0x800004,
            size: 0x200000,
          },
          'rm2.20m': {
            offset: 0x800006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'rm2.01a': {
            offset: 0x00000,
            size: 0x08000,
          },
          'rm2.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'rm2.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'rm2.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'megaman2a.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'rockman2j': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'rm2j.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'rm2j.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'rm2.05': {
            offset: 0x100000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'rm2.14m': {
            offset: 0x800000,
            size: 0x200000,
          },
          'rm2.16m': {
            offset: 0x800002,
            size: 0x200000,
          },
          'rm2.18m': {
            offset: 0x800004,
            size: 0x200000,
          },
          'rm2.20m': {
            offset: 0x800006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'rm2.01a': {
            offset: 0x00000,
            size: 0x08000,
          },
          'rm2.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'rm2.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'rm2.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'rockman2j.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'megaman2h': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'rm2h.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'rm2h.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'rm2.05': {
            offset: 0x100000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'rm2.14m': {
            offset: 0x800000,
            size: 0x200000,
          },
          'rm2.16m': {
            offset: 0x800002,
            size: 0x200000,
          },
          'rm2.18m': {
            offset: 0x800004,
            size: 0x200000,
          },
          'rm2.20m': {
            offset: 0x800006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'rm2.01a': {
            offset: 0x00000,
            size: 0x08000,
          },
          'rm2.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'rm2.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'rm2.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'megaman2h.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
/*

Gigaman 2 - 2004 Chinese rebuild Bootleg

Just dumped the program roms. Other 3 are soldered and are MX26L6420MC-90
Probably a rebuild for chinese market
Copyrighted J-TECH 2004 on game :)


CPU : Motorola 68000 16 mhz
video : Actel A54SX16A-F
Sound : Atmel AT89C4051-24PI + M6295 (noted AD-65)

*/

  // 'gigaman2': {
  //   regions: {
  //     'maincpu': {
  //       size: 0x0400000,
  //       files: {
  //         'sys_rom1.bin': {
  //           offset: 0x000000,
  //           size: 0x400000,
  //         },
  //       },
  //     },
  //     'mcu': {
  //       size: 0x10000,
  //       files: {      /* sound MCU code */
  //         '89c4051.bin': {
  //           offset: 0x000000,
  //           size: 0x10000,
  //         },
  //       },
  //     },
  //     'gfx': {
  //       size: 0x800000,
  //       files: {
  //         'cg_rom1.bin': {
  //           offset: 0x0000000,
  //           size: 0x400000,
  //         },
  //         'cg_rom2.bin': {
  //           offset: 0x0400000,
  //           size: 0x400000,
  //         },
  //       },
  //     },
  //     'oki': {
  //       size: 0x800000,
  //       files: { // QSound samples
	// /* No Qsound, OKI instead.. */
  //         'pcm_rom1.bin': {
  //           offset: 0x000000,
  //           size: 0x800000,
  //         },
  //       }
  //     }
  //   }
  // },
  'mmatrix': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mmxu.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mmxu.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'mmxu.05': {
            offset: 0x100000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'mmx.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'mmx.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'mmx.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'mmx.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'mmx.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'mmx.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'mmx.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'mmx.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'mmx.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'mmx.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'mmx.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mmatrix.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mmatrixa': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mmxa.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mmxa.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'mmxa.05': {
            offset: 0x100000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'mmx.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'mmx.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'mmx.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'mmx.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'mmx.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'mmx.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'mmx.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'mmx.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'mmx.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'mmx.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'mmx.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mmatrixa.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mmatrixj': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mmxj.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mmxj.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'mmxj.05': {
            offset: 0x100000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'mmx.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'mmx.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'mmx.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'mmx.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'mmx.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'mmx.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'mmx.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'mmx.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'mmx.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'mmx.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'mmx.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mmatrixj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'msh': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mshe.03e': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mshe.04e': {
            offset: 0x080000,
            size: 0x80000,
          },
          'msh.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'msh.06b': {
            offset: 0x180000,
            size: 0x80000,
          },
          'msh.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
          'msh.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'msh.09a': {
            offset: 0x300000,
            size: 0x80000,
          },
          'msh.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'msh.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'msh.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'msh.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'msh.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'msh.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'msh.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'msh.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'msh.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'msh.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'msh.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'msh.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'msh.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'msh.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mshu': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mshu.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mshu.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'msh.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'msh.06b': {
            offset: 0x180000,
            size: 0x80000,
          },
          'msh.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
          'msh.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'msh.09a': {
            offset: 0x300000,
            size: 0x80000,
          },
          'msh.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'msh.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'msh.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'msh.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'msh.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'msh.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'msh.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'msh.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'msh.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'msh.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'msh.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'msh.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'msh.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mshu.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mshj': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mshj.03g': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mshj.04g': {
            offset: 0x080000,
            size: 0x80000,
          },
          'msh.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'msh.06b': {
            offset: 0x180000,
            size: 0x80000,
          },
          'msh.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
          'msh.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'msh.09a': {
            offset: 0x300000,
            size: 0x80000,
          },
          'msh.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'msh.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'msh.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'msh.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'msh.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'msh.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'msh.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'msh.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'msh.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'msh.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'msh.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'msh.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'msh.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mshj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mshjr1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mshj.03f': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mshj.04f': {
            offset: 0x080000,
            size: 0x80000,
          },
          'msh.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'msh.06b': {
            offset: 0x180000,
            size: 0x80000,
          },
          'msh.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
          'msh.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'msh.09a': {
            offset: 0x300000,
            size: 0x80000,
          },
          'msh.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'msh.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'msh.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'msh.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'msh.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'msh.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'msh.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'msh.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'msh.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'msh.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'msh.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'msh.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'msh.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mshj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'msha': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'msha.03e': {
            offset: 0x000000,
            size: 0x80000,
          },
          'msha.04e': {
            offset: 0x080000,
            size: 0x80000,
          },
          'msh.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'msh.06b': {
            offset: 0x180000,
            size: 0x80000,
          },
          'msh.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
          'msh.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'msh.09a': {
            offset: 0x300000,
            size: 0x80000,
          },
          'msh.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'msh.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'msh.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'msh.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'msh.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'msh.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'msh.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'msh.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'msh.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'msh.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'msh.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'msh.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'msh.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'msha.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mshh': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mshh.03c': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mshh.04c': {
            offset: 0x080000,
            size: 0x80000,
          },
          'msh.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'msh.06b': {
            offset: 0x180000,
            size: 0x80000,
          },
          'msh.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
          'msh.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'msh.09a': {
            offset: 0x300000,
            size: 0x80000,
          },
          'msh.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'msh.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'msh.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'msh.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'msh.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'msh.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'msh.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'msh.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'msh.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'msh.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'msh.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'msh.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'msh.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mshh.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mshb': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mshb.03c': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mshb.04c': {
            offset: 0x080000,
            size: 0x80000,
          },
          'msh.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'msh.06b': {
            offset: 0x180000,
            size: 0x80000,
          },
          'msh.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
          'msh.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'msh.09a': {
            offset: 0x300000,
            size: 0x80000,
          },
          'msh.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'msh.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'msh.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'msh.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'msh.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'msh.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'msh.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'msh.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'msh.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'msh.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'msh.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'msh.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'msh.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mshb.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mshbr1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mshb.03b': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mshb.04b': {
            offset: 0x080000,
            size: 0x80000,
          },
          'msh.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'msh.06b': {
            offset: 0x180000,
            size: 0x80000,
          },
          'msh.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
          'msh.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'msh.09a': {
            offset: 0x300000,
            size: 0x80000,
          },
          'msh.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'msh.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'msh.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'msh.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'msh.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'msh.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'msh.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'msh.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'msh.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'msh.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'msh.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'msh.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'msh.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mshb.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mshvsf': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mvse.03f': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mvse.04f': {
            offset: 0x080000,
            size: 0x80000,
          },
          'mvs.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'mvs.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'mvs.07b': {
            offset: 0x200000,
            size: 0x80000,
          },
          'mvs.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'mvs.09b': {
            offset: 0x300000,
            size: 0x80000,
          },
          'mvs.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'mvs.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'mvs.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'mvs.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'mvs.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'mvs.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'mvs.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'mvs.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'mvs.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'mvs.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'mvs.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'mvs.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'mvs.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mshvsf.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mshvsfu': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mvsu.03g': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mvsu.04g': {
            offset: 0x080000,
            size: 0x80000,
          },
          'mvs.05d': {
            offset: 0x100000,
            size: 0x80000,
          },
          'mvs.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'mvs.07b': {
            offset: 0x200000,
            size: 0x80000,
          },
          'mvs.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'mvs.09b': {
            offset: 0x300000,
            size: 0x80000,
          },
          'mvs.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'mvs.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'mvs.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'mvs.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'mvs.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'mvs.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'mvs.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'mvs.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'mvs.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'mvs.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'mvs.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'mvs.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'mvs.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mshvsfu.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mshvsfu1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mvsu.03d': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mvsu.04d': {
            offset: 0x080000,
            size: 0x80000,
          },
          'mvs.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'mvs.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'mvs.07b': {
            offset: 0x200000,
            size: 0x80000,
          },
          'mvs.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'mvs.09b': {
            offset: 0x300000,
            size: 0x80000,
          },
          'mvs.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'mvs.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'mvs.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'mvs.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'mvs.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'mvs.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'mvs.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'mvs.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'mvs.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'mvs.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'mvs.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'mvs.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'mvs.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mshvsfu.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mshvsfj': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mvsj.03i': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mvsj.04i': {
            offset: 0x080000,
            size: 0x80000,
          },
          'mvs.05h': {
            offset: 0x100000,
            size: 0x80000,
          },
          'mvs.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'mvs.07b': {
            offset: 0x200000,
            size: 0x80000,
          },
          'mvs.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'mvs.09b': {
            offset: 0x300000,
            size: 0x80000,
          },
          'mvs.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'mvs.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'mvs.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'mvs.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'mvs.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'mvs.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'mvs.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'mvs.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'mvs.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'mvs.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'mvs.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'mvs.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'mvs.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mshvsfj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mshvsfj1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mvsj.03h': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mvsj.04h': {
            offset: 0x080000,
            size: 0x80000,
          },
          'mvs.05g': {
            offset: 0x100000,
            size: 0x80000,
          },
          'mvs.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'mvs.07b': {
            offset: 0x200000,
            size: 0x80000,
          },
          'mvs.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'mvs.09b': {
            offset: 0x300000,
            size: 0x80000,
          },
          'mvs.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'mvs.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'mvs.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'mvs.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'mvs.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'mvs.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'mvs.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'mvs.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'mvs.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'mvs.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'mvs.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'mvs.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'mvs.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mshvsfj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mshvsfj2': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mvsj.03g': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mvsj.04g': {
            offset: 0x080000,
            size: 0x80000,
          },
          'mvs.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'mvs.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'mvs.07b': {
            offset: 0x200000,
            size: 0x80000,
          },
          'mvs.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'mvs.09b': {
            offset: 0x300000,
            size: 0x80000,
          },
          'mvs.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'mvs.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'mvs.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'mvs.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'mvs.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'mvs.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'mvs.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'mvs.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'mvs.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'mvs.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'mvs.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'mvs.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'mvs.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mshvsfj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mshvsfh': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mvsh.03f': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mvsh.04f': {
            offset: 0x080000,
            size: 0x80000,
          },
          'mvs.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'mvs.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'mvs.07b': {
            offset: 0x200000,
            size: 0x80000,
          },
          'mvs.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'mvs.09b': {
            offset: 0x300000,
            size: 0x80000,
          },
          'mvs.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'mvs.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'mvs.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'mvs.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'mvs.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'mvs.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'mvs.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'mvs.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'mvs.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'mvs.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'mvs.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'mvs.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'mvs.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mshvsfh.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mshvsfa': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mvsa.03f': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mvsa.04f': {
            offset: 0x080000,
            size: 0x80000,
          },
          'mvs.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'mvs.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'mvs.07b': {
            offset: 0x200000,
            size: 0x80000,
          },
          'mvs.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'mvs.09b': {
            offset: 0x300000,
            size: 0x80000,
          },
          'mvs.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'mvs.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'mvs.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'mvs.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'mvs.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'mvs.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'mvs.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'mvs.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'mvs.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'mvs.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'mvs.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'mvs.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'mvs.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mshvsfa.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mshvsfa1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mvsa.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mvsa.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'mvs.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'mvs.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'mvs.07b': {
            offset: 0x200000,
            size: 0x80000,
          },
          'mvs.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'mvs.09b': {
            offset: 0x300000,
            size: 0x80000,
          },
          'mvs.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'mvs.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'mvs.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'mvs.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'mvs.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'mvs.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'mvs.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'mvs.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'mvs.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'mvs.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'mvs.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'mvs.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'mvs.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mshvsfa.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mshvsfb': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mvsb.03g': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mvsb.04g': {
            offset: 0x080000,
            size: 0x80000,
          },
          'mvs.05d': {
            offset: 0x100000,
            size: 0x80000,
          },
          'mvs.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'mvs.07b': {
            offset: 0x200000,
            size: 0x80000,
          },
          'mvs.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'mvs.09b': {
            offset: 0x300000,
            size: 0x80000,
          },
          'mvs.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'mvs.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'mvs.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'mvs.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'mvs.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'mvs.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'mvs.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'mvs.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'mvs.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'mvs.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'mvs.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'mvs.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'mvs.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mshvsfb.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mshvsfb1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mvsb.03f': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mvsb.04f': {
            offset: 0x080000,
            size: 0x80000,
          },
          'mvs.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'mvs.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'mvs.07b': {
            offset: 0x200000,
            size: 0x80000,
          },
          'mvs.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'mvs.09b': {
            offset: 0x300000,
            size: 0x80000,
          },
          'mvs.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'mvs.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'mvs.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'mvs.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'mvs.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'mvs.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'mvs.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'mvs.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'mvs.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'mvs.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'mvs.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'mvs.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'mvs.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mshvsfb.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
/*
Marvel Vs. Capcom: Clash of Super Heroes (Euro 980123):
The originally dumped ROM4 contains garbage instructions that cause the game to crash during the ending staff roll.
The ROM has been repaired so that the code matches the other sets after decryption:

    offset      dumped  repaired    decrypted
    0x40/2      001a    189a        EB11 -> 4EF9
    0x60/2      800b    c00b        0843 -> 227C
*/

  'mvsc': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mvce.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
//  ROM_LOAD16_WORD_SWAP( "mvce.04a", 0x080000, 0x80000, BAD_DUMP CRC(cac02153) SHA1(ee9f9da6fda53f21ba7b74367612c90281269690) )
          'mvce.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'mvc.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'mvc.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'mvc.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'mvc.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'mvc.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'mvc.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'mvc.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'mvc.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'mvc.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'mvc.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'mvc.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'mvc.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'mvc.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'mvc.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'mvc.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'mvc.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'mvc.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'mvc.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mvsc.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mvscr1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mvce.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mvce.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'mvc.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'mvc.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'mvc.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'mvc.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'mvc.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'mvc.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'mvc.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'mvc.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'mvc.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'mvc.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'mvc.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'mvc.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'mvc.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'mvc.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'mvc.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'mvc.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'mvc.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'mvc.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mvsc.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mvscu': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mvcu.03d': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mvcu.04d': {
            offset: 0x080000,
            size: 0x80000,
          },
          'mvc.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'mvc.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'mvc.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'mvc.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'mvc.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'mvc.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'mvc.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'mvc.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'mvc.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'mvc.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'mvc.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'mvc.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'mvc.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'mvc.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'mvc.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'mvc.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'mvc.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'mvc.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mvscu.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mvscur1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mvcu.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mvcu.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'mvcu.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'mvcu.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'mvcu.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'mvc.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'mvc.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'mvcu.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'mvc.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'mvc.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'mvc.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'mvc.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'mvc.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'mvc.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'mvc.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'mvc.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'mvc.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'mvc.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'mvc.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'mvc.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mvscu.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mvscj': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mvcj.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mvcj.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'mvc.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'mvc.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'mvc.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'mvc.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'mvc.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'mvc.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'mvc.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'mvc.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'mvc.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'mvc.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'mvc.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'mvc.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'mvc.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'mvc.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'mvc.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'mvc.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'mvc.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'mvc.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mvscj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mvscjr1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mvcj.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mvcj.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'mvc.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'mvc.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'mvc.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'mvc.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'mvc.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'mvc.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'mvc.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'mvc.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'mvc.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'mvc.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'mvc.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'mvc.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'mvc.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'mvc.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'mvc.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'mvc.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'mvc.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'mvc.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mvscj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
/*

   This is the Single PCB release of Marvel Vs. Capcom, it comes in a black case and has the Program ROM stored on
   SIMMs similar to CPS3.  All ROM data (including the code) is *identical* to the regular Japan set (mvscj) just
   in different sized ROMs.

   The original PCB is said to show the volume / sound test in a slightly different way, but this must be down to
   some software configuration or an unemulated hardware register, not the code.

   Another board with an alternative SIMM card configuration has been dumped. The data stored on SIMMs is the same
   but it uses a different card with a different ROM type. Here are the differences:

   Ver. 1

   SIMMs: mvc_ja.simm1, mvc_ja.simm3
   Card Type: HB29A216SB10CP 9649 3 (front side), M72A-0 (back side)
   SIMM Type: HN98F1600T10

   Ver. 2

   SIMMs: mvc_ja.simm4, mvc_ja.simm6
   Card Type: FF03216 MB85713-90 9619 M26 (front side), MC72-89 (B) IBI,M4V0 (back side)
   SIMM Type: 29F016 (reverse pin type)

*/

  'mvscjsing': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mvc_ja.simm1': {
            offset: 0x000000,
            size: 0x200000,
          },
          'mvc_ja.simm3': {
            offset: 0x000001,
            size: 0x200000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'mvc64-13m.13': {
            offset: 0x0000000,
            size: 0x800000,
          },
          'mvc64-15m.15': {
            offset: 0x0000002,
            size: 0x800000,
          },
          'mvc64-17m.17': {
            offset: 0x0000004,
            size: 0x800000,
          },
          'mvc64-19m.19': {
            offset: 0x0000006,
            size: 0x800000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'mvc.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'mvc.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'mvc64-11m.11': {
            offset: 0x000000,
            size: 0x800000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mvscj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mvsca': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mvca.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mvca.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'mvc.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'mvc.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'mvc.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'mvc.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'mvc.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'mvc.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'mvc.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'mvc.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'mvc.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'mvc.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'mvc.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'mvc.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'mvc.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'mvc.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'mvc.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'mvc.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'mvc.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'mvc.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mvsca.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mvscar1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mvca.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mvca.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'mvc.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'mvc.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'mvc.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'mvc.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'mvc.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'mvc.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'mvc.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'mvc.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'mvc.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'mvc.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'mvc.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'mvc.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'mvc.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'mvc.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'mvc.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'mvc.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'mvc.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'mvc.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mvsca.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mvsch': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mvch.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mvch.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'mvc.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'mvc.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'mvc.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'mvc.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'mvc.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'mvc.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'mvc.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'mvc.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'mvc.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'mvc.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'mvc.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'mvc.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'mvc.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'mvc.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'mvc.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'mvc.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'mvc.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'mvc.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mvsch.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mvscb': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mvcb.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mvcb.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'mvc.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'mvc.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'mvc.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'mvc.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'mvc.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'mvc.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'mvc.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'mvc.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'mvc.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'mvc.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'mvc.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'mvc.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'mvc.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'mvc.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'mvc.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'mvc.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'mvc.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'mvc.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mvscb.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mpang': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mpne.03c': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mpne.04c': {
            offset: 0x080000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'mpn-simm.01c': {
            offset: 0x0000000,
            size: 0x200000,
          },
          'mpn-simm.01d': {
            offset: 0x0000001,
            size: 0x200000,
          },
          'mpn-simm.01a': {
            offset: 0x0000002,
            size: 0x200000,
          },
          'mpn-simm.01b': {
            offset: 0x0000003,
            size: 0x200000,
          },
          'mpn-simm.03c': {
            offset: 0x0000004,
            size: 0x200000,
          },
          'mpn-simm.03d': {
            offset: 0x0000005,
            size: 0x200000,
          },
          'mpn-simm.03a': {
            offset: 0x0000006,
            size: 0x200000,
          },
          'mpn-simm.03b': {
            offset: 0x0000007,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'mpn.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'mpn-simm.05a': {
            offset: 0x000000,
            size: 0x200000,
          },
          'mpn-simm.05b': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mpang.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mpangr1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mpne.03b': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mpne.04b': {
            offset: 0x080000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'mpn-simm.01c': {
            offset: 0x0000000,
            size: 0x200000,
          },
          'mpn-simm.01d': {
            offset: 0x0000001,
            size: 0x200000,
          },
          'mpn-simm.01a': {
            offset: 0x0000002,
            size: 0x200000,
          },
          'mpn-simm.01b': {
            offset: 0x0000003,
            size: 0x200000,
          },
          'mpn-simm.03c': {
            offset: 0x0000004,
            size: 0x200000,
          },
          'mpn-simm.03d': {
            offset: 0x0000005,
            size: 0x200000,
          },
          'mpn-simm.03a': {
            offset: 0x0000006,
            size: 0x200000,
          },
          'mpn-simm.03b': {
            offset: 0x0000007,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'mpn.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'mpn-simm.05a': {
            offset: 0x000000,
            size: 0x200000,
          },
          'mpn-simm.05b': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mpang.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mpangu': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mpnu.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mpnu.04': {
            offset: 0x080000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'mpn.13m': {
            offset: 0x800000,
            size: 0x200000,
          },
          'mpn.15m': {
            offset: 0x800002,
            size: 0x200000,
          },
          'mpn.17m': {
            offset: 0x800004,
            size: 0x200000,
          },
          'mpn.19m': {
            offset: 0x800006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'mpn.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'mpn.q1': {
            offset: 0x000000,
            size: 0x100000,
          },
          'mpn.q2': {
            offset: 0x100000,
            size: 0x100000,
          },
          'mpn.q3': {
            offset: 0x200000,
            size: 0x100000,
          },
          'mpn.q4': {
            offset: 0x300000,
            size: 0x100000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mpang.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mpangj': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mpnj.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mpnj.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'mpn-simm.01c': {
            offset: 0x0000000,
            size: 0x200000,
          },
          'mpn-simm.01d': {
            offset: 0x0000001,
            size: 0x200000,
          },
          'mpn-simm.01a': {
            offset: 0x0000002,
            size: 0x200000,
          },
          'mpn-simm.01b': {
            offset: 0x0000003,
            size: 0x200000,
          },
          'mpn-simm.03c': {
            offset: 0x0000004,
            size: 0x200000,
          },
          'mpn-simm.03d': {
            offset: 0x0000005,
            size: 0x200000,
          },
          'mpn-simm.03a': {
            offset: 0x0000006,
            size: 0x200000,
          },
          'mpn-simm.03b': {
            offset: 0x0000007,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'mpn.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'mpn-simm.05a': {
            offset: 0x000000,
            size: 0x200000,
          },
          'mpn-simm.05b': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mpang.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mpanga': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'mpn_03a.6a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'mpn_04a.7a': {
            offset: 0x080000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'mpn-simm.01c': {
            offset: 0x0000000,
            size: 0x200000,
          },
          'mpn-simm.01d': {
            offset: 0x0000001,
            size: 0x200000,
          },
          'mpn-simm.01a': {
            offset: 0x0000002,
            size: 0x200000,
          },
          'mpn-simm.01b': {
            offset: 0x0000003,
            size: 0x200000,
          },
          'mpn-simm.03c': {
            offset: 0x0000004,
            size: 0x200000,
          },
          'mpn-simm.03d': {
            offset: 0x0000005,
            size: 0x200000,
          },
          'mpn-simm.03a': {
            offset: 0x0000006,
            size: 0x200000,
          },
          'mpn-simm.03b': {
            offset: 0x0000007,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'mpn.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'mpn-simm.05a': {
            offset: 0x000000,
            size: 0x200000,
          },
          'mpn-simm.05b': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mpang.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'nwarr': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'vphe.03f': {
            offset: 0x000000,
            size: 0x80000,
          },
          'vphe.04c': {
            offset: 0x080000,
            size: 0x80000,
          },
          'vphe.05d': {
            offset: 0x100000,
            size: 0x80000,
          },
          'vphe.06c': {
            offset: 0x180000,
            size: 0x80000,
          },
          'vphe.07b': {
            offset: 0x200000,
            size: 0x80000,
          },
          'vphe.08b': {
            offset: 0x280000,
            size: 0x80000,
          },
          'vphe.09b': {
            offset: 0x300000,
            size: 0x80000,
          },
          'vphe.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'vph.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'vph.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'vph.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'vph.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'vph.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'vph.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'vph.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'vph.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'vph.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'vph.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'vph.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'vph.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'nwarr.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'nwarru': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'vphu.03f': {
            offset: 0x000000,
            size: 0x80000,
          },
          'vphu.04c': {
            offset: 0x080000,
            size: 0x80000,
          },
          'vphu.05e': {
            offset: 0x100000,
            size: 0x80000,
          },
          'vphu.06c': {
            offset: 0x180000,
            size: 0x80000,
          },
          'vphu.07b': {
            offset: 0x200000,
            size: 0x80000,
          },
          'vphu.08b': {
            offset: 0x280000,
            size: 0x80000,
          },
          'vphu.09b': {
            offset: 0x300000,
            size: 0x80000,
          },
          'vphu.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'vph.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'vph.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'vph.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'vph.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'vph.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'vph.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'vph.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'vph.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'vph.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'vph.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'vph.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'vph.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'nwarru.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'nwarrh': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'vphh.03d': {
            offset: 0x000000,
            size: 0x80000,
          },
          'vphh.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'vphh.05c': {
            offset: 0x100000,
            size: 0x80000,
          },
          'vphh.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'vphh.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'vphh.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'vphh.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'vphh.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'vph.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'vph.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'vph.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'vph.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'vph.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'vph.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'vph.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'vph.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'vph.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'vph.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'vph.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'vph.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'nwarrh.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'nwarrb': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'vphb.03d': {
            offset: 0x000000,
            size: 0x80000,
          },
          'vphb.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'vphb.05c': {
            offset: 0x100000,
            size: 0x80000,
          },
          'vphb.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'vphb.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'vphb.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'vphb.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'vphb.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'vph.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'vph.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'vph.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'vph.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'vph.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'vph.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'vph.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'vph.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'vph.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'vph.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'vph.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'vph.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'nwarrb.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'nwarra': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'vpha.03b': {
            offset: 0x000000,
            size: 0x80000,
          },
          'vpha.04b': {
            offset: 0x080000,
            size: 0x80000,
          },
          'vpha.05b': {
            offset: 0x100000,
            size: 0x80000,
          },
          'vpha.06b': {
            offset: 0x180000,
            size: 0x80000,
          },
          'vpha.07b': {
            offset: 0x200000,
            size: 0x80000,
          },
          'vpha.08b': {
            offset: 0x280000,
            size: 0x80000,
          },
          'vpha.09b': {
            offset: 0x300000,
            size: 0x80000,
          },
          'vpha.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'vph.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'vph.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'vph.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'vph.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'vph.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'vph.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'vph.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'vph.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'vph.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'vph.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'vph.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'vph.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'nwarra.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'vhuntj': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'vphj.03f': {
            offset: 0x000000,
            size: 0x80000,
          },
          'vphj.04c': {
            offset: 0x080000,
            size: 0x80000,
          },
          'vphj.05d': {
            offset: 0x100000,
            size: 0x80000,
          },
          'vphj.06c': {
            offset: 0x180000,
            size: 0x80000,
          },
          'vphj.07b': {
            offset: 0x200000,
            size: 0x80000,
          },
          'vphj.08b': {
            offset: 0x280000,
            size: 0x80000,
          },
          'vphj.09b': {
            offset: 0x300000,
            size: 0x80000,
          },
          'vphj.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'vph.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'vph.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'vph.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'vph.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'vph.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'vph.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'vph.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'vph.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'vph.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'vph.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'vph.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'vph.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'vhuntj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'vhuntjr1s': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'vphjstop.03b': {
            offset: 0x000000,
            size: 0x80000,
          },
          'vphj.04c': {
            offset: 0x080000,
            size: 0x80000,
          },
          'vphj.05d': {
            offset: 0x100000,
            size: 0x80000,
          },
          'vphj.06c': {
            offset: 0x180000,
            size: 0x80000,
          },
          'vphj.07b': {
            offset: 0x200000,
            size: 0x80000,
          },
          'vphj.08b': {
            offset: 0x280000,
            size: 0x80000,
          },
          'vphj.09b': {
            offset: 0x300000,
            size: 0x80000,
          },
          'vphj.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'vph.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'vph.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'vph.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'vph.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'vph.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'vph.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'vph.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'vph.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'vph.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'vph.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'vph.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'vph.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'vhuntj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'vhuntjr1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'vphj.03c': {
            offset: 0x000000,
            size: 0x80000,
          },
          'vphj.04b': {
            offset: 0x080000,
            size: 0x80000,
          },
          'vphj.05b': {
            offset: 0x100000,
            size: 0x80000,
          },
          'vphj.06b': {
            offset: 0x180000,
            size: 0x80000,
          },
          'vphj.07b': {
            offset: 0x200000,
            size: 0x80000,
          },
          'vphj.08b': {
            offset: 0x280000,
            size: 0x80000,
          },
          'vphj.09b': {
            offset: 0x300000,
            size: 0x80000,
          },
          'vphj.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'vph.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'vph.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'vph.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'vph.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'vph.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'vph.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'vph.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'vph.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'vph.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'vph.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'vph.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'vph.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'vhuntj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'vhuntjr2': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'vphj.03b': {
            offset: 0x000000,
            size: 0x80000,
          },
          'vphj.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'vphj.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'vphj.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'vphj.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
          'vphj.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'vphj.09a': {
            offset: 0x300000,
            size: 0x80000,
          },
          'vphj.10a': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'vph.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'vph.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'vph.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'vph.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'vph.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'vph.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'vph.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'vph.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'vph.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'vph.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'vph.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'vph.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'vhuntj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'progear': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'pgau.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'pgau.04': {
            offset: 0x080000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'pga-simm.01c': {
            offset: 0x0000000,
            size: 0x200000,
          },
          'pga-simm.01d': {
            offset: 0x0000001,
            size: 0x200000,
          },
          'pga-simm.01a': {
            offset: 0x0000002,
            size: 0x200000,
          },
          'pga-simm.01b': {
            offset: 0x0000003,
            size: 0x200000,
          },
          'pga-simm.03c': {
            offset: 0x0000004,
            size: 0x200000,
          },
          'pga-simm.03d': {
            offset: 0x0000005,
            size: 0x200000,
          },
          'pga-simm.03a': {
            offset: 0x0000006,
            size: 0x200000,
          },
          'pga-simm.03b': {
            offset: 0x0000007,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'pga.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'pga-simm.05a': {
            offset: 0x000000,
            size: 0x200000,
          },
          'pga-simm.05b': {
            offset: 0x200000,
            size: 0x200000,
          },
          'pga-simm.06a': {
            offset: 0x400000,
            size: 0x200000,
          },
          'pga-simm.06b': {
            offset: 0x600000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'progear.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'progearj': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'pgaj.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'pgaj.04': {
            offset: 0x080000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'pga-simm.01c': {
            offset: 0x0000000,
            size: 0x200000,
          },
          'pga-simm.01d': {
            offset: 0x0000001,
            size: 0x200000,
          },
          'pga-simm.01a': {
            offset: 0x0000002,
            size: 0x200000,
          },
          'pga-simm.01b': {
            offset: 0x0000003,
            size: 0x200000,
          },
          'pga-simm.03c': {
            offset: 0x0000004,
            size: 0x200000,
          },
          'pga-simm.03d': {
            offset: 0x0000005,
            size: 0x200000,
          },
          'pga-simm.03a': {
            offset: 0x0000006,
            size: 0x200000,
          },
          'pga-simm.03b': {
            offset: 0x0000007,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'pga.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'pga-simm.05a': {
            offset: 0x000000,
            size: 0x200000,
          },
          'pga-simm.05b': {
            offset: 0x200000,
            size: 0x200000,
          },
          'pga-simm.06a': {
            offset: 0x400000,
            size: 0x200000,
          },
          'pga-simm.06b': {
            offset: 0x600000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'progearj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'progeara': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'pgaa.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'pgaa.04': {
            offset: 0x080000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'pga-simm.01c': {
            offset: 0x0000000,
            size: 0x200000,
          },
          'pga-simm.01d': {
            offset: 0x0000001,
            size: 0x200000,
          },
          'pga-simm.01a': {
            offset: 0x0000002,
            size: 0x200000,
          },
          'pga-simm.01b': {
            offset: 0x0000003,
            size: 0x200000,
          },
          'pga-simm.03c': {
            offset: 0x0000004,
            size: 0x200000,
          },
          'pga-simm.03d': {
            offset: 0x0000005,
            size: 0x200000,
          },
          'pga-simm.03a': {
            offset: 0x0000006,
            size: 0x200000,
          },
          'pga-simm.03b': {
            offset: 0x0000007,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'pga.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'pga-simm.05a': {
            offset: 0x000000,
            size: 0x200000,
          },
          'pga-simm.05b': {
            offset: 0x200000,
            size: 0x200000,
          },
          'pga-simm.06a': {
            offset: 0x400000,
            size: 0x200000,
          },
          'pga-simm.06b': {
            offset: 0x600000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'progeara.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'pzloop2': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'pl2e.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'pl2e.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'pl2e.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'pl2e.06': {
            offset: 0x180000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'pl2-simm.01c': {
            offset: 0x0000000,
            size: 0x200000,
          },
          'pl2-simm.01d': {
            offset: 0x0000001,
            size: 0x200000,
          },
          'pl2-simm.01a': {
            offset: 0x0000002,
            size: 0x200000,
          },
          'pl2-simm.01b': {
            offset: 0x0000003,
            size: 0x200000,
          },
          'pl2-simm.03c': {
            offset: 0x0000004,
            size: 0x200000,
          },
          'pl2-simm.03d': {
            offset: 0x0000005,
            size: 0x200000,
          },
          'pl2-simm.03a': {
            offset: 0x0000006,
            size: 0x200000,
          },
          'pl2-simm.03b': {
            offset: 0x0000007,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'pl2.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'pl2-simm.05a': {
            offset: 0x000000,
            size: 0x200000,
          },
          'pl2-simm.05b': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'pzloop2.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'pzloop2j': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'pl2j.03c': {
            offset: 0x000000,
            size: 0x80000,
          },
          'pl2j.04c': {
            offset: 0x080000,
            size: 0x80000,
          },
          'pl2j.05c': {
            offset: 0x100000,
            size: 0x80000,
          },
          'pl2j.06c': {
            offset: 0x180000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'pl2-simm.01c': {
            offset: 0x0000000,
            size: 0x200000,
          },
          'pl2-simm.01d': {
            offset: 0x0000001,
            size: 0x200000,
          },
          'pl2-simm.01a': {
            offset: 0x0000002,
            size: 0x200000,
          },
          'pl2-simm.01b': {
            offset: 0x0000003,
            size: 0x200000,
          },
          'pl2-simm.03c': {
            offset: 0x0000004,
            size: 0x200000,
          },
          'pl2-simm.03d': {
            offset: 0x0000005,
            size: 0x200000,
          },
          'pl2-simm.03a': {
            offset: 0x0000006,
            size: 0x200000,
          },
          'pl2-simm.03b': {
            offset: 0x0000007,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'pl2.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'pl2-simm.05a': {
            offset: 0x000000,
            size: 0x200000,
          },
          'pl2-simm.05b': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'pzloop2.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'pzloop2jr1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'pl2j.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'pl2j.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'pl2j.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'pl2j.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'pl2-simm.01c': {
            offset: 0x0000000,
            size: 0x200000,
          },
          'pl2-simm.01d': {
            offset: 0x0000001,
            size: 0x200000,
          },
          'pl2-simm.01a': {
            offset: 0x0000002,
            size: 0x200000,
          },
          'pl2-simm.01b': {
            offset: 0x0000003,
            size: 0x200000,
          },
          'pl2-simm.03c': {
            offset: 0x0000004,
            size: 0x200000,
          },
          'pl2-simm.03d': {
            offset: 0x0000005,
            size: 0x200000,
          },
          'pl2-simm.03a': {
            offset: 0x0000006,
            size: 0x200000,
          },
          'pl2-simm.03b': {
            offset: 0x0000007,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'pl2.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'pl2-simm.05a': {
            offset: 0x000000,
            size: 0x200000,
          },
          'pl2-simm.05b': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'pzloop2.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'qndream': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'tqzj.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'tqzj.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'tqzj.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'tqzj.06': {
            offset: 0x180000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'tqz.14m': {
            offset: 0x800000,
            size: 0x200000,
          },
          'tqz.16m': {
            offset: 0x800002,
            size: 0x200000,
          },
          'tqz.18m': {
            offset: 0x800004,
            size: 0x200000,
          },
          'tqz.20m': {
            offset: 0x800006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'tqz.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'tqz.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'tqz.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'qndream.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ringdest': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'smbe.03b': {
            offset: 0x000000,
            size: 0x80000,
          },
          'smbe.04b': {
            offset: 0x080000,
            size: 0x80000,
          },
          'smbe.05b': {
            offset: 0x100000,
            size: 0x80000,
          },
          'smbe.06b': {
            offset: 0x180000,
            size: 0x80000,
          },
          'smb.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'smb.08': {
            offset: 0x280000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1200000,
        files: {
          'smb.13m': {
            offset: 0x0000000,
            size: 0x200000,
          },
          'smb.15m': {
            offset: 0x0000002,
            size: 0x200000,
          },
          'smb.17m': {
            offset: 0x0000004,
            size: 0x200000,
          },
          'smb.19m': {
            offset: 0x0000006,
            size: 0x200000,
          },
          'smb.14m': {
            offset: 0x0800000,
            size: 0x200000,
          },
          'smb.16m': {
            offset: 0x0800002,
            size: 0x200000,
          },
          'smb.18m': {
            offset: 0x0800004,
            size: 0x200000,
          },
          'smb.20m': {
            offset: 0x0800006,
            size: 0x200000,
          },
          'smb.21m': {
            offset: 0x1000000,
            size: 0x080000,
          },
          'smb.23m': {
            offset: 0x1000002,
            size: 0x080000,
          },
          'smb.25m': {
            offset: 0x1000004,
            size: 0x080000,
          },
          'smb.27m': {
            offset: 0x1000006,
            size: 0x080000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'smb.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'smb.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'smb.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'smb.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ringdest.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'smbomb': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'smbj.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'smbj.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'smbj.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'smbj.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'smb.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'smb.08': {
            offset: 0x280000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1200000,
        files: {
          'smb.13m': {
            offset: 0x0000000,
            size: 0x200000,
          },
          'smb.15m': {
            offset: 0x0000002,
            size: 0x200000,
          },
          'smb.17m': {
            offset: 0x0000004,
            size: 0x200000,
          },
          'smb.19m': {
            offset: 0x0000006,
            size: 0x200000,
          },
          'smb.14m': {
            offset: 0x0800000,
            size: 0x200000,
          },
          'smb.16m': {
            offset: 0x0800002,
            size: 0x200000,
          },
          'smb.18m': {
            offset: 0x0800004,
            size: 0x200000,
          },
          'smb.20m': {
            offset: 0x0800006,
            size: 0x200000,
          },
          'smb.21m': {
            offset: 0x1000000,
            size: 0x080000,
          },
          'smb.23m': {
            offset: 0x1000002,
            size: 0x080000,
          },
          'smb.25m': {
            offset: 0x1000004,
            size: 0x080000,
          },
          'smb.27m': {
            offset: 0x1000006,
            size: 0x080000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'smb.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'smb.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'smb.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'smb.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'smbomb.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'smbombr1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'smbj.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'smbj.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'smbj.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'smbj.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'smb.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'smb.08': {
            offset: 0x280000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1200000,
        files: {
          'smb.13m': {
            offset: 0x0000000,
            size: 0x200000,
          },
          'smb.15m': {
            offset: 0x0000002,
            size: 0x200000,
          },
          'smb.17m': {
            offset: 0x0000004,
            size: 0x200000,
          },
          'smb.19m': {
            offset: 0x0000006,
            size: 0x200000,
          },
          'smb.14m': {
            offset: 0x0800000,
            size: 0x200000,
          },
          'smb.16m': {
            offset: 0x0800002,
            size: 0x200000,
          },
          'smb.18m': {
            offset: 0x0800004,
            size: 0x200000,
          },
          'smb.20m': {
            offset: 0x0800006,
            size: 0x200000,
          },
          'smb.21m': {
            offset: 0x1000000,
            size: 0x080000,
          },
          'smb.23m': {
            offset: 0x1000002,
            size: 0x080000,
          },
          'smb.25m': {
            offset: 0x1000004,
            size: 0x080000,
          },
          'smb.27m': {
            offset: 0x1000006,
            size: 0x080000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'smb.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'smb.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'smb.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'smb.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'smbomb.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ringdesta': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'smba.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'smba.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'smba.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'smba.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'smb.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'smb.08': {
            offset: 0x280000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1200000,
        files: {
          'smb.13m': {
            offset: 0x0000000,
            size: 0x200000,
          },
          'smb.15m': {
            offset: 0x0000002,
            size: 0x200000,
          },
          'smb.17m': {
            offset: 0x0000004,
            size: 0x200000,
          },
          'smb.19m': {
            offset: 0x0000006,
            size: 0x200000,
          },
          'smb.14m': {
            offset: 0x0800000,
            size: 0x200000,
          },
          'smb.16m': {
            offset: 0x0800002,
            size: 0x200000,
          },
          'smb.18m': {
            offset: 0x0800004,
            size: 0x200000,
          },
          'smb.20m': {
            offset: 0x0800006,
            size: 0x200000,
          },
          'smb.21m': {
            offset: 0x1000000,
            size: 0x080000,
          },
          'smb.23m': {
            offset: 0x1000002,
            size: 0x080000,
          },
          'smb.25m': {
            offset: 0x1000004,
            size: 0x080000,
          },
          'smb.27m': {
            offset: 0x1000006,
            size: 0x080000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'smb.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'smb.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'smb.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'smb.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ringdesta.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ringdesth': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'smbh.03b': {
            offset: 0x000000,
            size: 0x80000,
          },
          'smbh.04b': {
            offset: 0x080000,
            size: 0x80000,
          },
          'smbh.05b': {
            offset: 0x100000,
            size: 0x80000,
          },
          'smbh.06b': {
            offset: 0x180000,
            size: 0x80000,
          },
          'smbh.07b': {
            offset: 0x200000,
            size: 0x80000,
          },
          'smbh.08b': {
            offset: 0x280000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1200000,
        files: {
          'smb.13m': {
            offset: 0x0000000,
            size: 0x200000,
          },
          'smb.15m': {
            offset: 0x0000002,
            size: 0x200000,
          },
          'smb.17m': {
            offset: 0x0000004,
            size: 0x200000,
          },
          'smb.19m': {
            offset: 0x0000006,
            size: 0x200000,
          },
          'smb.14m': {
            offset: 0x0800000,
            size: 0x200000,
          },
          'smb.16m': {
            offset: 0x0800002,
            size: 0x200000,
          },
          'smb.18m': {
            offset: 0x0800004,
            size: 0x200000,
          },
          'smb.20m': {
            offset: 0x0800006,
            size: 0x200000,
          },
          'smb.21m': {
            offset: 0x1000000,
            size: 0x080000,
          },
          'smb.23m': {
            offset: 0x1000002,
            size: 0x080000,
          },
          'smb.25m': {
            offset: 0x1000004,
            size: 0x080000,
          },
          'smb.27m': {
            offset: 0x1000006,
            size: 0x080000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'smb.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'smb.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'smb.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'smb.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ringdesth.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
/*
About the Ring of Destruction: Slammasters II (Brazil 940902) below:

Only ROM smbb.03b is different then the above Hispanic (ringdesth) set, while ROMs 04 through 08 match.  ROM smbb.03b has 3 bytes changed:
   0x00C1 == 0A  (vs 05 for smbh.03b), this is the region byte.
   0x1D20 == 6D  (vs 6E for smbh.03b), this is a checksum byte.
   0x1D24 == 73  (vs 66 for smbh.03b), this is a checksum byte.

It also uses the ringdesth key for decryption.  For all intents and purposes, this set is a factory region hack which has been verified on multiple boards.
*/
  'ringdestb': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'smbb.03b': {
            offset: 0x000000,
            size: 0x80000,
          },
          'smbb.04b': {
            offset: 0x080000,
            size: 0x80000,
          },
          'smbb.05b': {
            offset: 0x100000,
            size: 0x80000,
          },
          'smbb.06b': {
            offset: 0x180000,
            size: 0x80000,
          },
          'smbb.07b': {
            offset: 0x200000,
            size: 0x80000,
          },
          'smbb.08b': {
            offset: 0x280000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1200000,
        files: {
          'smb.13m': {
            offset: 0x0000000,
            size: 0x200000,
          },
          'smb.15m': {
            offset: 0x0000002,
            size: 0x200000,
          },
          'smb.17m': {
            offset: 0x0000004,
            size: 0x200000,
          },
          'smb.19m': {
            offset: 0x0000006,
            size: 0x200000,
          },
          'smb.14m': {
            offset: 0x0800000,
            size: 0x200000,
          },
          'smb.16m': {
            offset: 0x0800002,
            size: 0x200000,
          },
          'smb.18m': {
            offset: 0x0800004,
            size: 0x200000,
          },
          'smb.20m': {
            offset: 0x0800006,
            size: 0x200000,
          },
          'smb.21m': {
            offset: 0x1000000,
            size: 0x080000,
          },
          'smb.23m': {
            offset: 0x1000002,
            size: 0x080000,
          },
          'smb.25m': {
            offset: 0x1000004,
            size: 0x080000,
          },
          'smb.27m': {
            offset: 0x1000006,
            size: 0x080000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'smb.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'smb.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'smb.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'smb.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ringdesth.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mmancp2u': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'rcmu.03b': {
            offset: 0x000000,
            size: 0x80000,
          },
          'rcmu.04b': {
            offset: 0x080000,
            size: 0x80000,
          },
          'rcm.05b': {
            offset: 0x100000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'rcm.73': {
            offset: 0x800000,
            size: 0x080000,
          },
          'rcm.63': {
            offset: 0x800002,
            size: 0x080000,
          },
          'rcm.83': {
            offset: 0x800004,
            size: 0x080000,
          },
          'rcm.93': {
            offset: 0x800006,
            size: 0x080000,
          },
          'rcm.74': {
            offset: 0xa00000,
            size: 0x080000,
          },
          'rcm.64': {
            offset: 0xa00002,
            size: 0x080000,
          },
          'rcm.84': {
            offset: 0xa00004,
            size: 0x080000,
          },
          'rcm.94': {
            offset: 0xa00006,
            size: 0x080000,
          },
          'rcm.75': {
            offset: 0xc00000,
            size: 0x080000,
          },
          'rcm.65': {
            offset: 0xc00002,
            size: 0x080000,
          },
          'rcm.85': {
            offset: 0xc00004,
            size: 0x080000,
          },
          'rcm.95': {
            offset: 0xc00006,
            size: 0x080000,
          },
          'rcm.76': {
            offset: 0xe00000,
            size: 0x080000,
          },
          'rcm.66': {
            offset: 0xe00002,
            size: 0x080000,
          },
          'rcm.86': {
            offset: 0xe00004,
            size: 0x080000,
          },
          'rcm.96': {
            offset: 0xe00006,
            size: 0x080000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'rcm.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'rcm.51': {
            offset: 0x000000,
            size: 0x80000,
          },
          'rcm.52': {
            offset: 0x080000,
            size: 0x80000,
          },
          'rcm.53': {
            offset: 0x100000,
            size: 0x80000,
          },
          'rcm.54': {
            offset: 0x180000,
            size: 0x80000,
          },
          'rcm.55': {
            offset: 0x200000,
            size: 0x80000,
          },
          'rcm.56': {
            offset: 0x280000,
            size: 0x80000,
          },
          'rcm.57': {
            offset: 0x300000,
            size: 0x80000,
          },
          'rcm.58': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mmancp2u.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mmancp2ur1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'rcmu.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'rcmu.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'rcmu.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'rcm.73': {
            offset: 0x800000,
            size: 0x080000,
          },
          'rcm.63': {
            offset: 0x800002,
            size: 0x080000,
          },
          'rcm.83': {
            offset: 0x800004,
            size: 0x080000,
          },
          'rcm.93': {
            offset: 0x800006,
            size: 0x080000,
          },
          'rcm.74': {
            offset: 0xa00000,
            size: 0x080000,
          },
          'rcm.64': {
            offset: 0xa00002,
            size: 0x080000,
          },
          'rcm.84': {
            offset: 0xa00004,
            size: 0x080000,
          },
          'rcm.94': {
            offset: 0xa00006,
            size: 0x080000,
          },
          'rcm.75': {
            offset: 0xc00000,
            size: 0x080000,
          },
          'rcm.65': {
            offset: 0xc00002,
            size: 0x080000,
          },
          'rcm.85': {
            offset: 0xc00004,
            size: 0x080000,
          },
          'rcm.95': {
            offset: 0xc00006,
            size: 0x080000,
          },
          'rcm.76': {
            offset: 0xe00000,
            size: 0x080000,
          },
          'rcm.66': {
            offset: 0xe00002,
            size: 0x080000,
          },
          'rcm.86': {
            offset: 0xe00004,
            size: 0x080000,
          },
          'rcm.96': {
            offset: 0xe00006,
            size: 0x080000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'rcm.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'rcm.51': {
            offset: 0x000000,
            size: 0x80000,
          },
          'rcm.52': {
            offset: 0x080000,
            size: 0x80000,
          },
          'rcm.53': {
            offset: 0x100000,
            size: 0x80000,
          },
          'rcm.54': {
            offset: 0x180000,
            size: 0x80000,
          },
          'rcm.55': {
            offset: 0x200000,
            size: 0x80000,
          },
          'rcm.56': {
            offset: 0x280000,
            size: 0x80000,
          },
          'rcm.57': {
            offset: 0x300000,
            size: 0x80000,
          },
          'rcm.58': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mmancp2u.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'mmancp2ur2': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'rcmu.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'rcmu.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'rcmu.05': {
            offset: 0x100000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'rcm.73': {
            offset: 0x800000,
            size: 0x080000,
          },
          'rcm.63': {
            offset: 0x800002,
            size: 0x080000,
          },
          'rcm.83': {
            offset: 0x800004,
            size: 0x080000,
          },
          'rcm.93': {
            offset: 0x800006,
            size: 0x080000,
          },
          'rcm.74': {
            offset: 0xa00000,
            size: 0x080000,
          },
          'rcm.64': {
            offset: 0xa00002,
            size: 0x080000,
          },
          'rcm.84': {
            offset: 0xa00004,
            size: 0x080000,
          },
          'rcm.94': {
            offset: 0xa00006,
            size: 0x080000,
          },
          'rcm.75': {
            offset: 0xc00000,
            size: 0x080000,
          },
          'rcm.65': {
            offset: 0xc00002,
            size: 0x080000,
          },
          'rcm.85': {
            offset: 0xc00004,
            size: 0x080000,
          },
          'rcm.95': {
            offset: 0xc00006,
            size: 0x080000,
          },
          'rcm.76': {
            offset: 0xe00000,
            size: 0x080000,
          },
          'rcm.66': {
            offset: 0xe00002,
            size: 0x080000,
          },
          'rcm.86': {
            offset: 0xe00004,
            size: 0x080000,
          },
          'rcm.96': {
            offset: 0xe00006,
            size: 0x080000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'rcm.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'rcm.51': {
            offset: 0x000000,
            size: 0x80000,
          },
          'rcm.52': {
            offset: 0x080000,
            size: 0x80000,
          },
          'rcm.53': {
            offset: 0x100000,
            size: 0x80000,
          },
          'rcm.54': {
            offset: 0x180000,
            size: 0x80000,
          },
          'rcm.55': {
            offset: 0x200000,
            size: 0x80000,
          },
          'rcm.56': {
            offset: 0x280000,
            size: 0x80000,
          },
          'rcm.57': {
            offset: 0x300000,
            size: 0x80000,
          },
          'rcm.58': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'mmancp2u.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'rmancp2j': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'rcmj.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'rcmj.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'rcm.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'rcm.73': {
            offset: 0x800000,
            size: 0x080000,
          },
          'rcm.63': {
            offset: 0x800002,
            size: 0x080000,
          },
          'rcm.83': {
            offset: 0x800004,
            size: 0x080000,
          },
          'rcm.93': {
            offset: 0x800006,
            size: 0x080000,
          },
          'rcm.74': {
            offset: 0xa00000,
            size: 0x080000,
          },
          'rcm.64': {
            offset: 0xa00002,
            size: 0x080000,
          },
          'rcm.84': {
            offset: 0xa00004,
            size: 0x080000,
          },
          'rcm.94': {
            offset: 0xa00006,
            size: 0x080000,
          },
          'rcm.75': {
            offset: 0xc00000,
            size: 0x080000,
          },
          'rcm.65': {
            offset: 0xc00002,
            size: 0x080000,
          },
          'rcm.85': {
            offset: 0xc00004,
            size: 0x080000,
          },
          'rcm.95': {
            offset: 0xc00006,
            size: 0x080000,
          },
          'rcm.76': {
            offset: 0xe00000,
            size: 0x080000,
          },
          'rcm.66': {
            offset: 0xe00002,
            size: 0x080000,
          },
          'rcm.86': {
            offset: 0xe00004,
            size: 0x080000,
          },
          'rcm.96': {
            offset: 0xe00006,
            size: 0x080000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'rcm.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'rcm.51': {
            offset: 0x000000,
            size: 0x80000,
          },
          'rcm.52': {
            offset: 0x080000,
            size: 0x80000,
          },
          'rcm.53': {
            offset: 0x100000,
            size: 0x80000,
          },
          'rcm.54': {
            offset: 0x180000,
            size: 0x80000,
          },
          'rcm.55': {
            offset: 0x200000,
            size: 0x80000,
          },
          'rcm.56': {
            offset: 0x280000,
            size: 0x80000,
          },
          'rcm.57': {
            offset: 0x300000,
            size: 0x80000,
          },
          'rcm.58': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'rmancp2j.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfa': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sfze.03d': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sfz.04b': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sfz.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sfz.06': {
            offset: 0x180000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'sfz.14m': {
            offset: 0x800000,
            size: 0x200000,
          },
          'sfz.16m': {
            offset: 0x800002,
            size: 0x200000,
          },
          'sfz.18m': {
            offset: 0x800004,
            size: 0x200000,
          },
          'sfz.20m': {
            offset: 0x800006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sfz.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sfz.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sfz.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sfz.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfa.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfar1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sfze.03c': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sfze.04b': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sfz.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sfz.06': {
            offset: 0x180000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'sfz.14m': {
            offset: 0x800000,
            size: 0x200000,
          },
          'sfz.16m': {
            offset: 0x800002,
            size: 0x200000,
          },
          'sfz.18m': {
            offset: 0x800004,
            size: 0x200000,
          },
          'sfz.20m': {
            offset: 0x800006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sfz.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sfz.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sfz.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sfz.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfa.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfar2': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sfze.03b': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sfz.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sfz.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sfz.06': {
            offset: 0x180000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'sfz.14m': {
            offset: 0x800000,
            size: 0x200000,
          },
          'sfz.16m': {
            offset: 0x800002,
            size: 0x200000,
          },
          'sfz.18m': {
            offset: 0x800004,
            size: 0x200000,
          },
          'sfz.20m': {
            offset: 0x800006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sfz.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sfz.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sfz.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sfz.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfa.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfar3': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sfze.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sfz.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sfz.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sfz.06': {
            offset: 0x180000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'sfz.14m': {
            offset: 0x800000,
            size: 0x200000,
          },
          'sfz.16m': {
            offset: 0x800002,
            size: 0x200000,
          },
          'sfz.18m': {
            offset: 0x800004,
            size: 0x200000,
          },
          'sfz.20m': {
            offset: 0x800006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sfz.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sfz.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sfz.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sfz.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfa.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfau': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sfzu.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sfz.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sfz.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sfz.06': {
            offset: 0x180000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'sfz.14m': {
            offset: 0x800000,
            size: 0x200000,
          },
          'sfz.16m': {
            offset: 0x800002,
            size: 0x200000,
          },
          'sfz.18m': {
            offset: 0x800004,
            size: 0x200000,
          },
          'sfz.20m': {
            offset: 0x800006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sfz.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sfz.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sfz.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sfz.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfau.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfza': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sfza.03b': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sfz.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sfz.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sfz.06': {
            offset: 0x180000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'sfz.14m': {
            offset: 0x800000,
            size: 0x200000,
          },
          'sfz.16m': {
            offset: 0x800002,
            size: 0x200000,
          },
          'sfz.18m': {
            offset: 0x800004,
            size: 0x200000,
          },
          'sfz.20m': {
            offset: 0x800006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sfz.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sfz.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sfz.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sfz.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfza.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfzar1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sfza.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sfz.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sfz.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sfz.06': {
            offset: 0x180000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'sfz.14m': {
            offset: 0x800000,
            size: 0x200000,
          },
          'sfz.16m': {
            offset: 0x800002,
            size: 0x200000,
          },
          'sfz.18m': {
            offset: 0x800004,
            size: 0x200000,
          },
          'sfz.20m': {
            offset: 0x800006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sfz.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sfz.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sfz.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sfz.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfza.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfzj': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sfzj.03c': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sfz.04b': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sfz.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sfz.06': {
            offset: 0x180000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'sfz.14m': {
            offset: 0x800000,
            size: 0x200000,
          },
          'sfz.16m': {
            offset: 0x800002,
            size: 0x200000,
          },
          'sfz.18m': {
            offset: 0x800004,
            size: 0x200000,
          },
          'sfz.20m': {
            offset: 0x800006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sfz.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sfz.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sfz.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sfz.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfzj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfzjr1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sfzj.03b': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sfz.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sfz.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sfz.06': {
            offset: 0x180000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'sfz.14m': {
            offset: 0x800000,
            size: 0x200000,
          },
          'sfz.16m': {
            offset: 0x800002,
            size: 0x200000,
          },
          'sfz.18m': {
            offset: 0x800004,
            size: 0x200000,
          },
          'sfz.20m': {
            offset: 0x800006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sfz.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sfz.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sfz.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sfz.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfzj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfzjr2': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sfzj.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sfz.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sfz.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sfz.06': {
            offset: 0x180000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'sfz.14m': {
            offset: 0x800000,
            size: 0x200000,
          },
          'sfz.16m': {
            offset: 0x800002,
            size: 0x200000,
          },
          'sfz.18m': {
            offset: 0x800004,
            size: 0x200000,
          },
          'sfz.20m': {
            offset: 0x800006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sfz.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sfz.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sfz.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sfz.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfzj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfzh': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sfzh.03d': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sfz.04c': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sfz.05c': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sfz.06': {
            offset: 0x180000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'sfz.14m': {
            offset: 0x800000,
            size: 0x200000,
          },
          'sfz.16m': {
            offset: 0x800002,
            size: 0x200000,
          },
          'sfz.18m': {
            offset: 0x800004,
            size: 0x200000,
          },
          'sfz.20m': {
            offset: 0x800006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sfz.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sfz.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sfz.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sfz.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfzh.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfzhr1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sfzh.03c': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sfz.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sfz.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sfz.06': {
            offset: 0x180000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'sfz.14m': {
            offset: 0x800000,
            size: 0x200000,
          },
          'sfz.16m': {
            offset: 0x800002,
            size: 0x200000,
          },
          'sfz.18m': {
            offset: 0x800004,
            size: 0x200000,
          },
          'sfz.20m': {
            offset: 0x800006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sfz.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sfz.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sfz.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sfz.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfzh.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfzb': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sfzb.03g': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sfzb.04e': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sfz.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sfz.06': {
            offset: 0x180000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'sfz.14m': {
            offset: 0x800000,
            size: 0x200000,
          },
          'sfz.16m': {
            offset: 0x800002,
            size: 0x200000,
          },
          'sfz.18m': {
            offset: 0x800004,
            size: 0x200000,
          },
          'sfz.20m': {
            offset: 0x800006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sfz.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sfz.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sfz.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sfz.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfzb.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfzbr1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sfzb.03e': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sfz.04b': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sfz.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sfz.06': {
            offset: 0x180000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'sfz.14m': {
            offset: 0x800000,
            size: 0x200000,
          },
          'sfz.16m': {
            offset: 0x800002,
            size: 0x200000,
          },
          'sfz.18m': {
            offset: 0x800004,
            size: 0x200000,
          },
          'sfz.20m': {
            offset: 0x800006,
            size: 0x200000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sfz.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sfz.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sfz.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sfz.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfzb.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfa2': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sz2e.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sz2e.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sz2.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sz2.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'sz2.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'sz2.08': {
            offset: 0x280000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'sz2.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'sz2.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'sz2.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'sz2.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'sz2.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'sz2.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'sz2.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'sz2.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sz2.01a': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sz2.02a': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sz2.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sz2.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfa2.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfa2u': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sz2u.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sz2u.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sz2u.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sz2u.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'sz2u.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'sz2u.08': {
            offset: 0x280000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'sz2.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'sz2.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'sz2.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'sz2.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'sz2.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'sz2.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'sz2.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'sz2.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sz2.01a': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sz2.02a': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sz2.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sz2.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfa2u.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfa2ur1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sz2u.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sz2u.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sz2u.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sz2u.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'sz2u.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'sz2u.08': {
            offset: 0x280000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'sz2.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'sz2.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'sz2.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'sz2.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'sz2.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'sz2.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'sz2.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'sz2.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sz2.01a': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sz2.02a': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sz2.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sz2.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfa2u.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfz2j': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sz2j.03b': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sz2j.04b': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sz2j.05b': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sz2j.06b': {
            offset: 0x180000,
            size: 0x80000,
          },
          'sz2j.07b': {
            offset: 0x200000,
            size: 0x80000,
          },
          'sz2j.08b': {
            offset: 0x280000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'sz2.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'sz2.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'sz2.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'sz2.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'sz2.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'sz2.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'sz2.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'sz2.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sz2.01a': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sz2.02a': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sz2.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sz2.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfz2j.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfz2jr1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sz2j.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sz2j.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sz2.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sz2.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'sz2j.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
          'sz2.08': {
            offset: 0x280000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'sz2.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'sz2.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'sz2.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'sz2.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'sz2.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'sz2.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'sz2.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'sz2.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sz2.01a': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sz2.02a': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sz2.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sz2.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfz2j.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfz2a': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sz2a.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sz2a.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sz2.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sz2.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'sz2a.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
          'sz2.08': {
            offset: 0x280000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'sz2.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'sz2.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'sz2.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'sz2.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'sz2.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'sz2.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'sz2.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'sz2.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sz2.01a': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sz2.02a': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sz2.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sz2.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfz2a.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfz2b': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sz2b.03b': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sz2b.04b': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sz2b.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sz2b.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'sz2b.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
          'sz2b.08': {
            offset: 0x280000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'sz2.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'sz2.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'sz2.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'sz2.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'sz2.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'sz2.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'sz2.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'sz2.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sz2.01a': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sz2.02a': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sz2.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sz2.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfz2b.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfz2br1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sz2b.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sz2b.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sz2.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sz2.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'sz2b.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'sz2b.08': {
            offset: 0x280000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'sz2.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'sz2.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'sz2.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'sz2.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'sz2.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'sz2.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'sz2.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'sz2.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sz2.01a': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sz2.02a': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sz2.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sz2.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfz2b.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfz2h': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sz2h.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sz2h.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sz2.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sz2.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'sz2h.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'sz2h.08': {
            offset: 0x280000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'sz2.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'sz2.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'sz2.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'sz2.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'sz2.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'sz2.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'sz2.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'sz2.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sz2.01a': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sz2.02a': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sz2.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sz2.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfz2h.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfz2n': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sz2n.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sz2n.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sz2.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sz2.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'sz2.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'sz2.08': {
            offset: 0x280000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'sz2.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'sz2.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'sz2.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'sz2.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'sz2.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'sz2.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'sz2.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'sz2.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sz2.01a': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sz2.02a': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sz2.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sz2.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfz2n.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfz2al': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'szaa.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'szaa.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'szaa.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'szaa.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'szaa.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'szaa.08': {
            offset: 0x280000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'sza.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'sza.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'sza.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'sza.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'sza.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'sza.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'sza.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'sza.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sza.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sza.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sza.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sza.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfz2al.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfz2alr1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'szaa.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'szaa.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'szaa.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'szaa.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'szaa.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
          'szaa.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'sz2.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'sz2.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'sz2.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'sz2.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'sz2.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'sz2.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'sz2.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'sz2.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sza.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sza.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sza.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sza.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfz2al.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfz2alj': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'szaj.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'szaj.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'szaj.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'szaj.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'szaj.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
          'szaj.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'sza.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'sza.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'sza.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'sza.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'sza.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'sza.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'sza.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'sza.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sza.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sza.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sza.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sza.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfz2alj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfz2alh': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'szah.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'szah.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'szah.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sza.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'sza.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'sza.08': {
            offset: 0x280000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'sza.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'sza.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'sza.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'sza.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'sza.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'sza.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'sza.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'sza.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sza.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sza.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sza.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sza.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfz2alh.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfz2alb': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'szab.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'szab.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'szab.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sza.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'sza.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'sza.08': {
            offset: 0x280000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'sza.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'sza.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'sza.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'sza.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'sza.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'sza.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'sza.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'sza.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sza.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sza.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sza.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sza.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfz2alb.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfa3': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sz3e.03c': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sz3e.04c': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sz3.05c': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sz3.06c': {
            offset: 0x180000,
            size: 0x80000,
          },
          'sz3.07c': {
            offset: 0x200000,
            size: 0x80000,
          },
          'sz3.08c': {
            offset: 0x280000,
            size: 0x80000,
          },
          'sz3.09c': {
            offset: 0x300000,
            size: 0x80000,
          },
          'sz3.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'sz3.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'sz3.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'sz3.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'sz3.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'sz3.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'sz3.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'sz3.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'sz3.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sz3.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sz3.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'sz3.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'sz3.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfa3.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfa3u': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sz3u.03c': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sz3u.04c': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sz3.05c': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sz3.06c': {
            offset: 0x180000,
            size: 0x80000,
          },
          'sz3.07c': {
            offset: 0x200000,
            size: 0x80000,
          },
          'sz3.08c': {
            offset: 0x280000,
            size: 0x80000,
          },
          'sz3.09c': {
            offset: 0x300000,
            size: 0x80000,
          },
          'sz3.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'sz3.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'sz3.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'sz3.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'sz3.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'sz3.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'sz3.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'sz3.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'sz3.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sz3.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sz3.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'sz3.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'sz3.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfa3u.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },

  'sfa3ur1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sz3u.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sz3u.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sz3.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sz3.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'sz3.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'sz3.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'sz3.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'sz3.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'sz3.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'sz3.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'sz3.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'sz3.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'sz3.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'sz3.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'sz3.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'sz3.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sz3.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sz3.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'sz3.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'sz3.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfa3u.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfa3us': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sz3-usam_03.6a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sz3-usam_04.7a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sz3-usam_05.8a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sz3-usam_06.9a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'sz3-usam_07.6d': {
            offset: 0x200000,
            size: 0x80000,
          },
          'sz3-usam_08.7d': {
            offset: 0x280000,
            size: 0x80000,
          },
          'sz3-usam_09.8d': {
            offset: 0x300000,
            size: 0x80000,
          },
          'sz3-usam_10.9d': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'sz3.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'sz3.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'sz3.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'sz3.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'sz3.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'sz3.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'sz3.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'sz3.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sz3-usam_01.1a': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sz3-usam_02.2a': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'sz3.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'sz3.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfa3u.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfz3j': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sz3j.03c': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sz3j.04c': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sz3.05c': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sz3.06c': {
            offset: 0x180000,
            size: 0x80000,
          },
          'sz3.07c': {
            offset: 0x200000,
            size: 0x80000,
          },
          'sz3.08c': {
            offset: 0x280000,
            size: 0x80000,
          },
          'sz3.09c': {
            offset: 0x300000,
            size: 0x80000,
          },
          'sz3.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'sz3.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'sz3.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'sz3.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'sz3.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'sz3.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'sz3.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'sz3.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'sz3.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sz3.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sz3.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'sz3.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'sz3.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfz3j.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfz3jr1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sz3j.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sz3j.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sz3.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sz3.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'sz3.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
          'sz3.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'sz3.09a': {
            offset: 0x300000,
            size: 0x80000,
          },
          'sz3.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'sz3.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'sz3.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'sz3.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'sz3.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'sz3.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'sz3.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'sz3.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'sz3.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sz3.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sz3.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'sz3.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'sz3.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfz3j.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfz3jr2': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sz3j.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sz3j.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sz3.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sz3.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'sz3.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'sz3.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'sz3.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'sz3.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'sz3.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'sz3.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'sz3.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'sz3.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'sz3.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'sz3.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'sz3.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'sz3.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sz3.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sz3.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'sz3.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'sz3.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfz3j.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfz3a': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sz3a.03d': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sz3a.04d': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sz3.05c': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sz3.06c': {
            offset: 0x180000,
            size: 0x80000,
          },
          'sz3.07c': {
            offset: 0x200000,
            size: 0x80000,
          },
          'sz3.08c': {
            offset: 0x280000,
            size: 0x80000,
          },
          'sz3.09c': {
            offset: 0x300000,
            size: 0x80000,
          },
          'sz3.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'sz3.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'sz3.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'sz3.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'sz3.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'sz3.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'sz3.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'sz3.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'sz3.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sz3.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sz3.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'sz3.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'sz3.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfz3a.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfz3ar1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sz3a.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sz3a.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sz3.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sz3.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'sz3.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'sz3.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'sz3.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'sz3.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'sz3.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'sz3.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'sz3.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'sz3.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'sz3.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'sz3.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'sz3.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'sz3.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sz3.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sz3.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'sz3.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'sz3.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfz3a.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfa3h': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sz3h.03c': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sz3h.04c': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sz3.05c': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sz3.06c': {
            offset: 0x180000,
            size: 0x80000,
          },
          'sz3.07c': {
            offset: 0x200000,
            size: 0x80000,
          },
          'sz3.08c': {
            offset: 0x280000,
            size: 0x80000,
          },
          'sz3.09c': {
            offset: 0x300000,
            size: 0x80000,
          },
          'sz3.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'sz3.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'sz3.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'sz3.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'sz3.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'sz3.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'sz3.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'sz3.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'sz3.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sz3.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sz3.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'sz3.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'sz3.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfa3h.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfa3hr1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sz3h.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sz3h.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sz3.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sz3.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'sz3.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'sz3.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'sz3.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'sz3.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'sz3.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'sz3.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'sz3.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'sz3.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'sz3.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'sz3.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'sz3.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'sz3.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sz3.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sz3.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'sz3.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'sz3.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfa3h.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sfa3b': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sz3b.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sz3b.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sz3.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sz3.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'sz3.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'sz3.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'sz3.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'sz3.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'sz3.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'sz3.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'sz3.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'sz3.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'sz3.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'sz3.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'sz3.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'sz3.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sz3.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sz3.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'sz3.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'sz3.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sfa3b.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sgemf': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'pcfu.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'pcf.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'pcf.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'pcf.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'pcf.07': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'pcf.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'pcf.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'pcf.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'pcf.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'pcf.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'pcf.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'pcf.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'pcf.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'pcf.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'pcf.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'pcf.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'pcf.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sgemf.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'pfghtj': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'pcfj.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'pcf.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'pcf.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'pcf.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'pcf.07': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'pcf.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'pcf.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'pcf.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'pcf.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'pcf.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'pcf.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'pcf.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'pcf.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'pcf.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'pcf.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'pcf.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'pcf.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'pfghtj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sgemfa': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'pcfa.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'pcf.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'pcf.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'pcf.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'pcf.07': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'pcf.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'pcf.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'pcf.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'pcf.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'pcf.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'pcf.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'pcf.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'pcf.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'pcf.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'pcf.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'pcf.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'pcf.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sgemfa.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'sgemfh': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'pcfh.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'pcf.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'pcf.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'pcf.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'pcf.07': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1400000,
        files: {
          'pcf.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'pcf.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'pcf.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'pcf.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'pcf.14m': {
            offset: 0x1000000,
            size: 0x100000,
          },
          'pcf.16m': {
            offset: 0x1000002,
            size: 0x100000,
          },
          'pcf.18m': {
            offset: 0x1000004,
            size: 0x100000,
          },
          'pcf.20m': {
            offset: 0x1000006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'pcf.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'pcf.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'pcf.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'pcf.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'sgemfh.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'spf2t': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'pzfe.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'pzf.04': {
            offset: 0x080000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xC00000,
        files: {
          'pzf.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'pzf.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'pzf.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'pzf.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'pzf.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'pzf.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'pzf.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'pzf.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'spf2t.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'spf2tu': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'pzfu.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'pzf.04': {
            offset: 0x080000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xC00000,
        files: {
          'pzf.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'pzf.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'pzf.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'pzf.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'pzf.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'pzf.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'pzf.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'pzf.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'spf2tu.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },

  'spf2xj': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'pzfj.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'pzf.04': {
            offset: 0x080000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xC00000,
        files: {
          'pzf.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'pzf.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'pzf.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'pzf.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'pzf.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'pzf.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'pzf.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'pzf.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'spf2xj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'spf2ta': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'pzfa.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'pzf.04': {
            offset: 0x080000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xC00000,
        files: {
          'pzf.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'pzf.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'pzf.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'pzf.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'pzf.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'pzf.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'pzf.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'pzf.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'spf2ta.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'spf2th': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'pzfh.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'pzf.04': {
            offset: 0x080000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xC00000,
        files: {
          'pzf.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'pzf.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'pzf.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'pzf.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'pzf.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'pzf.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'pzf.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'pzf.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'spf2th.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ssf2': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'ssfe-03b': {
            offset: 0x000000,
            size: 0x80000,
          },
          'ssfe.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'ssfe.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'ssfe-06b': {
            offset: 0x180000,
            size: 0x80000,
          },
          'ssfe.07': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'ssf.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'ssf.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'ssf.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'ssf.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'ssf.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'ssf.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'ssf.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'ssf.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'ssf-01a': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'ssf.q01': {
            offset: 0x000000,
            size: 0x080000,
          },
          'ssf.q02': {
            offset: 0x080000,
            size: 0x080000,
          },
          'ssf.q03': {
            offset: 0x100000,
            size: 0x080000,
          },
          'ssf.q04': {
            offset: 0x180000,
            size: 0x080000,
          },
          'ssf.q05': {
            offset: 0x200000,
            size: 0x080000,
          },
          'ssf.q06': {
            offset: 0x280000,
            size: 0x080000,
          },
          'ssf.q07': {
            offset: 0x300000,
            size: 0x080000,
          },
          'ssf.q08': {
            offset: 0x380000,
            size: 0x080000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ssf2.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ssf2r1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'ssfe.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'ssfe.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'ssfe.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'ssfe.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'ssfe.07': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'ssf.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'ssf.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'ssf.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'ssf.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'ssf.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'ssf.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'ssf.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'ssf.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'ssf.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'ssf.q01': {
            offset: 0x000000,
            size: 0x080000,
          },
          'ssf.q02': {
            offset: 0x080000,
            size: 0x080000,
          },
          'ssf.q03': {
            offset: 0x100000,
            size: 0x080000,
          },
          'ssf.q04': {
            offset: 0x180000,
            size: 0x080000,
          },
          'ssf.q05': {
            offset: 0x200000,
            size: 0x080000,
          },
          'ssf.q06': {
            offset: 0x280000,
            size: 0x080000,
          },
          'ssf.q07': {
            offset: 0x300000,
            size: 0x080000,
          },
          'ssf.q08': {
            offset: 0x380000,
            size: 0x080000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ssf2.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ssf2u': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'ssfu.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'ssfu.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'ssfu.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'ssfu.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'ssfu.07': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'ssf.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'ssf.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'ssf.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'ssf.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'ssf.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'ssf.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'ssf.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'ssf.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'ssf.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'ssf.q01': {
            offset: 0x000000,
            size: 0x080000,
          },
          'ssf.q02': {
            offset: 0x080000,
            size: 0x080000,
          },
          'ssf.q03': {
            offset: 0x100000,
            size: 0x080000,
          },
          'ssf.q04': {
            offset: 0x180000,
            size: 0x080000,
          },
          'ssf.q05': {
            offset: 0x200000,
            size: 0x080000,
          },
          'ssf.q06': {
            offset: 0x280000,
            size: 0x080000,
          },
          'ssf.q07': {
            offset: 0x300000,
            size: 0x080000,
          },
          'ssf.q08': {
            offset: 0x380000,
            size: 0x080000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ssf2u.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ssf2us2': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'ssfu.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'super stf 2 super ii rom-08 usa': {
            offset: 0x000000,
            size: 0x80000,
          },
          'ssfu.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'ssfu.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'ssfu.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'super stf 2 super ii rom-07 usa': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'ssf.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'ssf.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'ssf.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'ssf.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'ssf.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'ssf.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'ssf.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'ssf.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'ssf.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'ssf.q01': {
            offset: 0x000000,
            size: 0x080000,
          },
          'ssf.q02': {
            offset: 0x080000,
            size: 0x080000,
          },
          'ssf.q03': {
            offset: 0x100000,
            size: 0x080000,
          },
          'ssf.q04': {
            offset: 0x180000,
            size: 0x080000,
          },
          'ssf.q05': {
            offset: 0x200000,
            size: 0x080000,
          },
          'ssf.q06': {
            offset: 0x280000,
            size: 0x080000,
          },
          'ssf.q07': {
            offset: 0x300000,
            size: 0x080000,
          },
          'ssf.q08': {
            offset: 0x380000,
            size: 0x080000,
          },
        },
      },
      'plds': {
        size: 0x117,
        files: {
          'gal_1_super2.bin': {
            offset: 0x000,
            size: 0x117,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ssf2u.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ssf2a': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'ssfa.03b': {
            offset: 0x000000,
            size: 0x80000,
          },
          'ssfa.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'ssfa.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'ssfa.06b': {
            offset: 0x180000,
            size: 0x80000,
          },
          'ssfa.07': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'ssf.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'ssf.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'ssf.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'ssf.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'ssf.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'ssf.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'ssf.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'ssf.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'ssf.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'ssf.q01': {
            offset: 0x000000,
            size: 0x080000,
          },
          'ssf.q02': {
            offset: 0x080000,
            size: 0x080000,
          },
          'ssf.q03': {
            offset: 0x100000,
            size: 0x080000,
          },
          'ssf.q04': {
            offset: 0x180000,
            size: 0x080000,
          },
          'ssf.q05': {
            offset: 0x200000,
            size: 0x080000,
          },
          'ssf.q06': {
            offset: 0x280000,
            size: 0x080000,
          },
          'ssf.q07': {
            offset: 0x300000,
            size: 0x080000,
          },
          'ssf.q08': {
            offset: 0x380000,
            size: 0x080000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ssf2a.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ssf2ar1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'ssfa.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'ssfa.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'ssfa.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'ssfa.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'ssfa.07': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'ssf.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'ssf.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'ssf.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'ssf.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'ssf.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'ssf.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'ssf.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'ssf.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'ssf.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'ssf.q01': {
            offset: 0x000000,
            size: 0x080000,
          },
          'ssf.q02': {
            offset: 0x080000,
            size: 0x080000,
          },
          'ssf.q03': {
            offset: 0x100000,
            size: 0x080000,
          },
          'ssf.q04': {
            offset: 0x180000,
            size: 0x080000,
          },
          'ssf.q05': {
            offset: 0x200000,
            size: 0x080000,
          },
          'ssf.q06': {
            offset: 0x280000,
            size: 0x080000,
          },
          'ssf.q07': {
            offset: 0x300000,
            size: 0x080000,
          },
          'ssf.q08': {
            offset: 0x380000,
            size: 0x080000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ssf2a.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ssf2j': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'ssfj.03b': {
            offset: 0x000000,
            size: 0x80000,
          },
          'ssfj.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'ssfj.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'ssfj.06b': {
            offset: 0x180000,
            size: 0x80000,
          },
          'ssfj.07': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'ssf.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'ssf.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'ssf.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'ssf.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'ssf.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'ssf.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'ssf.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'ssf.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'ssf.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'ssf.q01': {
            offset: 0x000000,
            size: 0x080000,
          },
          'ssf.q02': {
            offset: 0x080000,
            size: 0x080000,
          },
          'ssf.q03': {
            offset: 0x100000,
            size: 0x080000,
          },
          'ssf.q04': {
            offset: 0x180000,
            size: 0x080000,
          },
          'ssf.q05': {
            offset: 0x200000,
            size: 0x080000,
          },
          'ssf.q06': {
            offset: 0x280000,
            size: 0x080000,
          },
          'ssf.q07': {
            offset: 0x300000,
            size: 0x080000,
          },
          'ssf.q08': {
            offset: 0x380000,
            size: 0x080000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ssf2j.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ssf2jr1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'ssfj.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'ssfj.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'ssfj.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'ssfj.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'ssfj.07': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'ssf.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'ssf.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'ssf.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'ssf.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'ssf.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'ssf.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'ssf.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'ssf.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'ssf.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'ssf.q01': {
            offset: 0x000000,
            size: 0x080000,
          },
          'ssf.q02': {
            offset: 0x080000,
            size: 0x080000,
          },
          'ssf.q03': {
            offset: 0x100000,
            size: 0x080000,
          },
          'ssf.q04': {
            offset: 0x180000,
            size: 0x080000,
          },
          'ssf.q05': {
            offset: 0x200000,
            size: 0x080000,
          },
          'ssf.q06': {
            offset: 0x280000,
            size: 0x080000,
          },
          'ssf.q07': {
            offset: 0x300000,
            size: 0x080000,
          },
          'ssf.q08': {
            offset: 0x380000,
            size: 0x080000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ssf2j.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ssf2jr2': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'ssfj.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'ssfj.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'ssfj.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'ssfj.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'ssfj.07': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'ssf.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'ssf.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'ssf.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'ssf.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'ssf.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'ssf.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'ssf.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'ssf.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'ssf.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'ssf.q01': {
            offset: 0x000000,
            size: 0x080000,
          },
          'ssf.q02': {
            offset: 0x080000,
            size: 0x080000,
          },
          'ssf.q03': {
            offset: 0x100000,
            size: 0x080000,
          },
          'ssf.q04': {
            offset: 0x180000,
            size: 0x080000,
          },
          'ssf.q05': {
            offset: 0x200000,
            size: 0x080000,
          },
          'ssf.q06': {
            offset: 0x280000,
            size: 0x080000,
          },
          'ssf.q07': {
            offset: 0x300000,
            size: 0x080000,
          },
          'ssf.q08': {
            offset: 0x380000,
            size: 0x080000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ssf2j.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ssf2h': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'ssfh.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'ssfh.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'ssfh.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'ssfh.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'ssfh.07': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'ssf.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'ssf.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'ssf.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'ssf.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'ssf.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'ssf.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'ssf.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'ssf.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'ssf.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'ssf.q01': {
            offset: 0x000000,
            size: 0x080000,
          },
          'ssf.q02': {
            offset: 0x080000,
            size: 0x080000,
          },
          'ssf.q03': {
            offset: 0x100000,
            size: 0x080000,
          },
          'ssf.q04': {
            offset: 0x180000,
            size: 0x080000,
          },
          'ssf.q05': {
            offset: 0x200000,
            size: 0x080000,
          },
          'ssf.q06': {
            offset: 0x280000,
            size: 0x080000,
          },
          'ssf.q07': {
            offset: 0x300000,
            size: 0x080000,
          },
          'ssf.q08': {
            offset: 0x380000,
            size: 0x080000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ssf2h.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ssf2tb': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'ssfe.03tc': {
            offset: 0x000000,
            size: 0x80000,
          },
          'ssfe.04tc': {
            offset: 0x080000,
            size: 0x80000,
          },
          'ssfe.05t': {
            offset: 0x100000,
            size: 0x80000,
          },
          'ssfe.06tb': {
            offset: 0x180000,
            size: 0x80000,
          },
          'ssfe.07t': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'ssf.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'ssf.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'ssf.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'ssf.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'ssf.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'ssf.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'ssf.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'ssf.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'ssf.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'ssf.q01': {
            offset: 0x000000,
            size: 0x080000,
          },
          'ssf.q02': {
            offset: 0x080000,
            size: 0x080000,
          },
          'ssf.q03': {
            offset: 0x100000,
            size: 0x080000,
          },
          'ssf.q04': {
            offset: 0x180000,
            size: 0x080000,
          },
          'ssf.q05': {
            offset: 0x200000,
            size: 0x080000,
          },
          'ssf.q06': {
            offset: 0x280000,
            size: 0x080000,
          },
          'ssf.q07': {
            offset: 0x300000,
            size: 0x080000,
          },
          'ssf.q08': {
            offset: 0x380000,
            size: 0x080000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ssf2tb.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ssf2tbr1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'ssfe.03t': {
            offset: 0x000000,
            size: 0x80000,
          },
          'ssfe.04t': {
            offset: 0x080000,
            size: 0x80000,
          },
          'ssfe.05t': {
            offset: 0x100000,
            size: 0x80000,
          },
          'ssfe.06t': {
            offset: 0x180000,
            size: 0x80000,
          },
          'ssfe.07t': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'ssf.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'ssf.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'ssf.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'ssf.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'ssf.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'ssf.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'ssf.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'ssf.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'ssf.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'ssf.q01': {
            offset: 0x000000,
            size: 0x080000,
          },
          'ssf.q02': {
            offset: 0x080000,
            size: 0x080000,
          },
          'ssf.q03': {
            offset: 0x100000,
            size: 0x080000,
          },
          'ssf.q04': {
            offset: 0x180000,
            size: 0x080000,
          },
          'ssf.q05': {
            offset: 0x200000,
            size: 0x080000,
          },
          'ssf.q06': {
            offset: 0x280000,
            size: 0x080000,
          },
          'ssf.q07': {
            offset: 0x300000,
            size: 0x080000,
          },
          'ssf.q08': {
            offset: 0x380000,
            size: 0x080000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ssf2tb.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ssf2tbu': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'ssfu.03t': {
            offset: 0x000000,
            size: 0x80000,
          },
          'ssfu.04t': {
            offset: 0x080000,
            size: 0x80000,
          },
          'ssfu.05t': {
            offset: 0x100000,
            size: 0x80000,
          },
          'ssfu.06t': {
            offset: 0x180000,
            size: 0x80000,
          },
          'ssfu.07t': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'ssf.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'ssf.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'ssf.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'ssf.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'ssf.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'ssf.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'ssf.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'ssf.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'ssf.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'ssf.q01': {
            offset: 0x000000,
            size: 0x080000,
          },
          'ssf.q02': {
            offset: 0x080000,
            size: 0x080000,
          },
          'ssf.q03': {
            offset: 0x100000,
            size: 0x080000,
          },
          'ssf.q04': {
            offset: 0x180000,
            size: 0x080000,
          },
          'ssf.q05': {
            offset: 0x200000,
            size: 0x080000,
          },
          'ssf.q06': {
            offset: 0x280000,
            size: 0x080000,
          },
          'ssf.q07': {
            offset: 0x300000,
            size: 0x080000,
          },
          'ssf.q08': {
            offset: 0x380000,
            size: 0x080000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ssf2tbu.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ssf2tbj': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'ssftj.03b': {
            offset: 0x000000,
            size: 0x80000,
          },
          'ssftj.04t': {
            offset: 0x080000,
            size: 0x80000,
          },
          'ssftj.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'ssfj.06tb': {
            offset: 0x180000,
            size: 0x80000,
          },
          'ssfj.07t': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'ssf.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'ssf.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'ssf.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'ssf.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'ssf.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'ssf.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'ssf.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'ssf.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'ssf.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'ssf.q01': {
            offset: 0x000000,
            size: 0x080000,
          },
          'ssf.q02': {
            offset: 0x080000,
            size: 0x080000,
          },
          'ssf.q03': {
            offset: 0x100000,
            size: 0x080000,
          },
          'ssf.q04': {
            offset: 0x180000,
            size: 0x080000,
          },
          'ssf.q05': {
            offset: 0x200000,
            size: 0x080000,
          },
          'ssf.q06': {
            offset: 0x280000,
            size: 0x080000,
          },
          'ssf.q07': {
            offset: 0x300000,
            size: 0x080000,
          },
          'ssf.q08': {
            offset: 0x380000,
            size: 0x080000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ssf2tbj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ssf2tbj1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'ssfj.03t': {
            offset: 0x000000,
            size: 0x80000,
          },
          'ssfj.04t': {
            offset: 0x080000,
            size: 0x80000,
          },
          'ssfj.05t': {
            offset: 0x100000,
            size: 0x80000,
          },
          'ssfj.06t': {
            offset: 0x180000,
            size: 0x80000,
          },
          'ssfj.07t': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'ssf.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'ssf.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'ssf.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'ssf.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'ssf.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'ssf.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'ssf.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'ssf.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'ssf.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'ssf.q01': {
            offset: 0x000000,
            size: 0x080000,
          },
          'ssf.q02': {
            offset: 0x080000,
            size: 0x080000,
          },
          'ssf.q03': {
            offset: 0x100000,
            size: 0x080000,
          },
          'ssf.q04': {
            offset: 0x180000,
            size: 0x080000,
          },
          'ssf.q05': {
            offset: 0x200000,
            size: 0x080000,
          },
          'ssf.q06': {
            offset: 0x280000,
            size: 0x080000,
          },
          'ssf.q07': {
            offset: 0x300000,
            size: 0x080000,
          },
          'ssf.q08': {
            offset: 0x380000,
            size: 0x080000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ssf2tbj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ssf2tba': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'ssfa.03tb': {
            offset: 0x000000,
            size: 0x80000,
          },
          'ssfa.04ta': {
            offset: 0x080000,
            size: 0x80000,
          },
          'ssfa.05t': {
            offset: 0x100000,
            size: 0x80000,
          },
          'ssfa.06tb': {
            offset: 0x180000,
            size: 0x80000,
          },
          'ssfa.07t': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'ssf.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'ssf.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'ssf.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'ssf.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'ssf.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'ssf.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'ssf.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'ssf.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'ssf-01a': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'ssf.q01': {
            offset: 0x000000,
            size: 0x080000,
          },
          'ssf.q02': {
            offset: 0x080000,
            size: 0x080000,
          },
          'ssf.q03': {
            offset: 0x100000,
            size: 0x080000,
          },
          'ssf.q04': {
            offset: 0x180000,
            size: 0x080000,
          },
          'ssf.q05': {
            offset: 0x200000,
            size: 0x080000,
          },
          'ssf.q06': {
            offset: 0x280000,
            size: 0x080000,
          },
          'ssf.q07': {
            offset: 0x300000,
            size: 0x080000,
          },
          'ssf.q08': {
            offset: 0x380000,
            size: 0x080000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ssf2tba.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ssf2tbh': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'ssfh.03tb': {
            offset: 0x000000,
            size: 0x80000,
          },
          'ssfh.04t': {
            offset: 0x080000,
            size: 0x80000,
          },
          'ssfh.05t': {
            offset: 0x100000,
            size: 0x80000,
          },
          'ssfh.06tb': {
            offset: 0x180000,
            size: 0x80000,
          },
          'ssfh.07t': {
            offset: 0x200000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0xc00000,
        files: {
          'ssf.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'ssf.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'ssf.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'ssf.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'ssf.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'ssf.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'ssf.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'ssf.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'ssf.01': {
            offset: 0x00000,
            size: 0x08000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'ssf.q01': {
            offset: 0x000000,
            size: 0x080000,
          },
          'ssf.q02': {
            offset: 0x080000,
            size: 0x080000,
          },
          'ssf.q03': {
            offset: 0x100000,
            size: 0x080000,
          },
          'ssf.q04': {
            offset: 0x180000,
            size: 0x080000,
          },
          'ssf.q05': {
            offset: 0x200000,
            size: 0x080000,
          },
          'ssf.q06': {
            offset: 0x280000,
            size: 0x080000,
          },
          'ssf.q07': {
            offset: 0x300000,
            size: 0x080000,
          },
          'ssf.q08': {
            offset: 0x380000,
            size: 0x080000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ssf2tbh.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ssf2t': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sfxe.03c': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sfxe.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sfxe.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sfxe.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'sfxe.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'sfxe.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'sfx.09': {
            offset: 0x300000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'sfx.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sfx.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'sfx.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'sfx.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'sfx.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'sfx.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'sfx.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'sfx.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
          'sfx.21m': {
            offset: 0xc00000,
            size: 0x100000,
          },
          'sfx.23m': {
            offset: 0xc00002,
            size: 0x100000,
          },
          'sfx.25m': {
            offset: 0xc00004,
            size: 0x100000,
          },
          'sfx.27m': {
            offset: 0xc00006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sfx.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sfx.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sfx.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sfx.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ssf2t.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ssf2tu': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sfxu.03e': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sfxu.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sfxu.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sfxu.06b': {
            offset: 0x180000,
            size: 0x80000,
          },
          'sfxu.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
          'sfxu.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'sfx.09': {
            offset: 0x300000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'sfx.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sfx.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'sfx.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'sfx.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'sfx.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'sfx.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'sfx.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'sfx.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
          'sfx.21m': {
            offset: 0xc00000,
            size: 0x100000,
          },
          'sfx.23m': {
            offset: 0xc00002,
            size: 0x100000,
          },
          'sfx.25m': {
            offset: 0xc00004,
            size: 0x100000,
          },
          'sfx.27m': {
            offset: 0xc00006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sfx.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sfx.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sfx.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sfx.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ssf2tu.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ssf2tur1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sfxu.03c': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sfxu.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sfxu.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sfxu.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'sfxu.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'sfxu.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'sfx.09': {
            offset: 0x300000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'sfx.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sfx.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'sfx.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'sfx.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'sfx.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'sfx.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'sfx.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'sfx.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
          'sfx.21m': {
            offset: 0xc00000,
            size: 0x100000,
          },
          'sfx.23m': {
            offset: 0xc00002,
            size: 0x100000,
          },
          'sfx.25m': {
            offset: 0xc00004,
            size: 0x100000,
          },
          'sfx.27m': {
            offset: 0xc00006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sfx.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sfx.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sfx.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sfx.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ssf2tu.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ssf2ta': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sfxa.03c': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sfxa.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sfxa.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sfxa.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'sfxa.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'sfxa.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'sfx.09': {
            offset: 0x300000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'sfx.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sfx.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'sfx.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'sfx.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'sfx.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'sfx.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'sfx.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'sfx.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
          'sfx.21m': {
            offset: 0xc00000,
            size: 0x100000,
          },
          'sfx.23m': {
            offset: 0xc00002,
            size: 0x100000,
          },
          'sfx.25m': {
            offset: 0xc00004,
            size: 0x100000,
          },
          'sfx.27m': {
            offset: 0xc00006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sfx.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sfx.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sfx.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sfx.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ssf2ta.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ssf2th': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sfxh.03c': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sfxh.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sfxh.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sfxh.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'sfxh.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'sfxh.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'sfxh.09': {
            offset: 0x300000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'sfx.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sfx.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'sfx.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'sfx.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'sfx.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'sfx.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'sfx.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'sfx.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
          'sfx.21m': {
            offset: 0xc00000,
            size: 0x100000,
          },
          'sfx.23m': {
            offset: 0xc00002,
            size: 0x100000,
          },
          'sfx.25m': {
            offset: 0xc00004,
            size: 0x100000,
          },
          'sfx.27m': {
            offset: 0xc00006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sfx.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sfx.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sfx.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sfx.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ssf2th.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'ssf2xj': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sfxj.03d': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sfxj.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sfxj.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sfxj.06b': {
            offset: 0x180000,
            size: 0x80000,
          },
          'sfxj.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
          'sfxj.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'sfx.09': {
            offset: 0x300000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'sfx.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sfx.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'sfx.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'sfx.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'sfx.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'sfx.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'sfx.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'sfx.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
          'sfx.21m': {
            offset: 0xc00000,
            size: 0x100000,
          },
          'sfx.23m': {
            offset: 0xc00002,
            size: 0x100000,
          },
          'sfx.25m': {
            offset: 0xc00004,
            size: 0x100000,
          },
          'sfx.27m': {
            offset: 0xc00006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sfx.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sfx.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sfx.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sfx.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ssf2xj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },

  'ssf2xjr1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sfxj.03c': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sfxj.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sfxj.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sfxj.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'sfxj.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'sfxj.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'sfx.09': {
            offset: 0x300000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {
          'sfx.13m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sfx.15m': {
            offset: 0x000002,
            size: 0x200000,
          },
          'sfx.17m': {
            offset: 0x000004,
            size: 0x200000,
          },
          'sfx.19m': {
            offset: 0x000006,
            size: 0x200000,
          },
          'sfx.14m': {
            offset: 0x800000,
            size: 0x100000,
          },
          'sfx.16m': {
            offset: 0x800002,
            size: 0x100000,
          },
          'sfx.18m': {
            offset: 0x800004,
            size: 0x100000,
          },
          'sfx.20m': {
            offset: 0x800006,
            size: 0x100000,
          },
          'sfx.21m': {
            offset: 0xc00000,
            size: 0x100000,
          },
          'sfx.23m': {
            offset: 0xc00002,
            size: 0x100000,
          },
          'sfx.25m': {
            offset: 0xc00004,
            size: 0x100000,
          },
          'sfx.27m': {
            offset: 0xc00006,
            size: 0x100000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sfx.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sfx.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'sfx.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'sfx.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ssf2xj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
// interesting version, yellow case (rental?), shows OP instead of AM on startup, uses a different (unique) key to the usual Japan set
  'ssf2xjr1r': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'sfxo.03c': {
            offset: 0x000000,
            size: 0x80000,
          },
          'sfxo.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'sfxo.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'sfxo.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'sfxo.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'sfxo.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'sfxo.09': {
            offset: 0x300000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x1000000,
        files: {  // identical content, different board layout
          'ssf.69': {
            offset: 0x000000,
            size: 0x080000,
          },
          'ssf.70': {
            offset: 0x200000,
            size: 0x080000,
          },
          'ssf.71': {
            offset: 0x400000,
            size: 0x080000,
          },
          'ssf.72': {
            offset: 0x600000,
            size: 0x080000,
          },
          'ssf.73': {
            offset: 0x800000,
            size: 0x080000,
          },
          'ssf.74': {
            offset: 0xa00000,
            size: 0x080000,
          },
          'sfx.75': {
            offset: 0xc00000,
            size: 0x080000,
          },
          'sfx.76': {
            offset: 0xe00000,
            size: 0x080000,
          },
          'ssf.59': {
            offset: 0x000002,
            size: 0x080000,
          },
          'ssf.60': {
            offset: 0x200002,
            size: 0x080000,
          },
          'ssf.61': {
            offset: 0x400002,
            size: 0x080000,
          },
          'ssf.62': {
            offset: 0x600002,
            size: 0x080000,
          },
          'ssf.63': {
            offset: 0x800002,
            size: 0x080000,
          },
          'ssf.64': {
            offset: 0xa00002,
            size: 0x080000,
          },
          'sfx.65': {
            offset: 0xc00002,
            size: 0x080000,
          },
          'sfx.66': {
            offset: 0xe00002,
            size: 0x080000,
          },
          'ssf.79': {
            offset: 0x000004,
            size: 0x080000,
          },
          'ssf.80': {
            offset: 0x200004,
            size: 0x080000,
          },
          'ssf.81': {
            offset: 0x400004,
            size: 0x080000,
          },
          'ssf.82': {
            offset: 0x600004,
            size: 0x080000,
          },
          'ssf.83': {
            offset: 0x800004,
            size: 0x080000,
          },
          'ssf.84': {
            offset: 0xa00004,
            size: 0x080000,
          },
          'sfx.85': {
            offset: 0xc00004,
            size: 0x080000,
          },
          'sfx.86': {
            offset: 0xe00004,
            size: 0x080000,
          },
          'ssf.89': {
            offset: 0x000006,
            size: 0x080000,
          },
          'ssf.90': {
            offset: 0x200006,
            size: 0x080000,
          },
          'ssf.91': {
            offset: 0x400006,
            size: 0x080000,
          },
          'ssf.92': {
            offset: 0x600006,
            size: 0x080000,
          },
          'ssf.93': {
            offset: 0x800006,
            size: 0x080000,
          },
          'ssf.94': {
            offset: 0xa00006,
            size: 0x080000,
          },
          'sfx.95': {
            offset: 0xc00006,
            size: 0x080000,
          },
          'sfx.96': {
            offset: 0xe00006,
            size: 0x080000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'sfx.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'sfx.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples // identical content, different board layout
          'ssf.51a': {
            offset: 0x000000,
            size: 0x080000,
          },
          'ssf.52a': {
            offset: 0x080000,
            size: 0x080000,
          },
          'ssf.53a': {
            offset: 0x100000,
            size: 0x080000,
          },
          'ssf.54a': {
            offset: 0x180000,
            size: 0x080000,
          },
          'ssf.55a': {
            offset: 0x200000,
            size: 0x080000,
          },
          'ssf.56a': {
            offset: 0x280000,
            size: 0x080000,
          },
          'ssf.57a': {
            offset: 0x300000,
            size: 0x080000,
          },
          'ssf.58a': {
            offset: 0x380000,
            size: 0x080000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'ssf2xjr1r.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'vhunt2': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'vh2j.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'vh2j.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'vh2j.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'vh2j.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'vh2j.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'vh2j.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'vh2j.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'vh2j.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'vh2.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'vh2.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'vh2.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'vh2.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'vh2.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'vh2.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'vh2.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'vh2.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'vh2.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'vh2.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'vh2.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'vh2.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'vhunt2.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'vhunt2r1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'vh2j.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'vh2j.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'vh2j.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'vh2j.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'vh2j.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'vh2j.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'vh2j.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'vh2j.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'vh2.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'vh2.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'vh2.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'vh2.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'vh2.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'vh2.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'vh2.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'vh2.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'vh2.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'vh2.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'vh2.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'vh2.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'vhunt2.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'vsav': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'vm3e.03d': {
            offset: 0x000000,
            size: 0x80000,
          },
          'vm3e.04d': {
            offset: 0x080000,
            size: 0x80000,
          },
          'vm3.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'vm3.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'vm3.07b': {
            offset: 0x200000,
            size: 0x80000,
          },
          'vm3.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'vm3.09b': {
            offset: 0x300000,
            size: 0x80000,
          },
          'vm3.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'vm3.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'vm3.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'vm3.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'vm3.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'vm3.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'vm3.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'vm3.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'vm3.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'vm3.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'vm3.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'vm3.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'vm3.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'vsav.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'vsavu': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'vm3u.03d': {
            offset: 0x000000,
            size: 0x80000,
          },
          'vm3u.04d': {
            offset: 0x080000,
            size: 0x80000,
          },
          'vm3.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'vm3.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'vm3.07b': {
            offset: 0x200000,
            size: 0x80000,
          },
          'vm3.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'vm3.09b': {
            offset: 0x300000,
            size: 0x80000,
          },
          'vm3.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'vm3.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'vm3.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'vm3.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'vm3.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'vm3.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'vm3.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'vm3.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'vm3.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'vm3.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'vm3.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'vm3.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'vm3.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'vsavu.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'vsavj': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'vm3j.03d': {
            offset: 0x000000,
            size: 0x80000,
          },
          'vm3j.04d': {
            offset: 0x080000,
            size: 0x80000,
          },
          'vm3j.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'vm3j.06b': {
            offset: 0x180000,
            size: 0x80000,
          },
          'vm3j.07b': {
            offset: 0x200000,
            size: 0x80000,
          },
          'vm3j.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'vm3j.09b': {
            offset: 0x300000,
            size: 0x80000,
          },
          'vm3j.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'vm3.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'vm3.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'vm3.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'vm3.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'vm3.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'vm3.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'vm3.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'vm3.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'vm3.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'vm3.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'vm3.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'vm3.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'vsavj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'vsava': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'vm3a.03d': {
            offset: 0x000000,
            size: 0x80000,
          },
          'vm3a.04d': {
            offset: 0x080000,
            size: 0x80000,
          },
          'vm3.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'vm3.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'vm3.07b': {
            offset: 0x200000,
            size: 0x80000,
          },
          'vm3.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'vm3.09b': {
            offset: 0x300000,
            size: 0x80000,
          },
          'vm3.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'vm3.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'vm3.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'vm3.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'vm3.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'vm3.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'vm3.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'vm3.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'vm3.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'vm3.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'vm3.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'vm3.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'vm3.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'vsava.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'vsavh': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'vm3h.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'vm3h.04d': {
            offset: 0x080000,
            size: 0x80000,
          },
          'vm3.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'vm3.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'vm3.07b': {
            offset: 0x200000,
            size: 0x80000,
          },
          'vm3.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'vm3.09b': {
            offset: 0x300000,
            size: 0x80000,
          },
          'vm3.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'vm3.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'vm3.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'vm3.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'vm3.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'vm3.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'vm3.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'vm3.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'vm3.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'vm3.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'vm3.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'vm3.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'vm3.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'vsavh.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'vsavb': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'vm3b.03d': {
            offset: 0x000000,
            size: 0x080000,
          },
          'vm3b.04d': {
            offset: 0x080000,
            size: 0x080000,
          },
          'vm3.05a': {
            offset: 0x100000,
            size: 0x080000,
          },
          'vm3.06a': {
            offset: 0x180000,
            size: 0x080000,
          },
          'vm3.07b': {
            offset: 0x200000,
            size: 0x080000,
          },
          'vm3.08a': {
            offset: 0x280000,
            size: 0x080000,
          },
          'vm3.09b': {
            offset: 0x300000,
            size: 0x080000,
          },
          'vm3.10b': {
            offset: 0x380000,
            size: 0x080000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'vm3.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'vm3.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'vm3.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'vm3.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'vm3.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'vm3.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'vm3.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'vm3.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'vm3.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'vm3.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'vm3.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'vm3.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'vsavb.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'vsav2': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'vs2j.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'vs2j.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'vs2j.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'vs2j.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'vs2j.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'vs2j.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'vs2j.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'vs2j.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'vs2.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'vs2.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'vs2.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'vs2.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'vs2.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'vs2.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'vs2.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'vs2.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'vs2.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'vs2.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x800000,
        files: { // QSound samples
          'vs2.11m': {
            offset: 0x000000,
            size: 0x400000,
          },
          'vs2.12m': {
            offset: 0x400000,
            size: 0x400000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'vsav2.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'xmcota': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'xmne.03f': {
            offset: 0x000000,
            size: 0x80000,
          },
          'xmne.04f': {
            offset: 0x080000,
            size: 0x80000,
          },
          'xmne.05b': {
            offset: 0x100000,
            size: 0x80000,
          },
          'xmn.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'xmn.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
          'xmn.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'xmn.09a': {
            offset: 0x300000,
            size: 0x80000,
          },
          'xmne.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'xmn.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'xmn.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'xmn.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'xmn.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'xmn.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'xmn.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'xmn.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'xmn.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'xmn.01a': {
            offset: 0x00000,
            size: 0x08000,
          },
          'xmn.02a': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'xmn.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'xmn.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'xmcota.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'xmcotar1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'xmne.03e': {
            offset: 0x000000,
            size: 0x80000,
          },
          'xmne.04e': {
            offset: 0x080000,
            size: 0x80000,
          },
          'xmn.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'xmn.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'xmn.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
          'xmn.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'xmn.09a': {
            offset: 0x300000,
            size: 0x80000,
          },
          'xmn.10a': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'xmn.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'xmn.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'xmn.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'xmn.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'xmn.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'xmn.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'xmn.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'xmn.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'xmn.01a': {
            offset: 0x00000,
            size: 0x08000,
          },
          'xmn.02a': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'xmn.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'xmn.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'xmcota.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'xmcotau': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'xmnu.03e': {
            offset: 0x000000,
            size: 0x80000,
          },
          'xmnu.04e': {
            offset: 0x080000,
            size: 0x80000,
          },
          'xmn.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'xmn.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'xmn.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
          'xmn.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'xmn.09a': {
            offset: 0x300000,
            size: 0x80000,
          },
          'xmn.10a': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'xmn.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'xmn.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'xmn.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'xmn.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'xmn.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'xmn.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'xmn.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'xmn.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'xmn.01a': {
            offset: 0x00000,
            size: 0x08000,
          },
          'xmn.02a': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'xmn.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'xmn.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'xmcotau.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'xmcotah': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'xmnh.03f': {
            offset: 0x000000,
            size: 0x80000,
          },
          'xmnh.04f': {
            offset: 0x080000,
            size: 0x80000,
          },
          'xmnh.05b': {
            offset: 0x100000,
            size: 0x80000,
          },
          'xmn.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'xmn.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
          'xmn.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'xmn.09a': {
            offset: 0x300000,
            size: 0x80000,
          },
          'xmnh.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'xmn.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'xmn.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'xmn.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'xmn.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'xmn.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'xmn.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'xmn.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'xmn.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'xmn.01a': {
            offset: 0x00000,
            size: 0x08000,
          },
          'xmn.02a': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'xmn.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'xmn.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'xmcotah.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'xmcotahr1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'xmnh.03d': {
            offset: 0x000000,
            size: 0x80000,
          },
          'xmnh.04d': {
            offset: 0x080000,
            size: 0x80000,
          },
          'xmn.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'xmn.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'xmn.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
          'xmn.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'xmn.09a': {
            offset: 0x300000,
            size: 0x80000,
          },
          'xmn.10a': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'xmn.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'xmn.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'xmn.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'xmn.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'xmn.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'xmn.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'xmn.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'xmn.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'xmn.01a': {
            offset: 0x00000,
            size: 0x08000,
          },
          'xmn.02a': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'xmn.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'xmn.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'xmcotah.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'xmcotaj': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'xmnj.03e': {
            offset: 0x000000,
            size: 0x80000,
          },
          'xmnj.04e': {
            offset: 0x080000,
            size: 0x80000,
          },
          'xmn.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'xmn.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'xmn.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
          'xmn.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'xmn.09a': {
            offset: 0x300000,
            size: 0x80000,
          },
          'xmn.10a': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'xmn.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'xmn.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'xmn.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'xmn.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'xmn.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'xmn.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'xmn.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'xmn.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'xmn.01a': {
            offset: 0x00000,
            size: 0x08000,
          },
          'xmn.02a': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'xmn.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'xmn.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'xmcotaj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'xmcotaj1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'xmnj.03d': {
            offset: 0x000000,
            size: 0x80000,
          },
          'xmnj.04d': {
            offset: 0x080000,
            size: 0x80000,
          },
          'xmn.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'xmn.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'xmn.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'xmn.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'xmn.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'xmn.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'xmn.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'xmn.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'xmn.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'xmn.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'xmn.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'xmn.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'xmn.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'xmn.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'xmn.01a': {
            offset: 0x00000,
            size: 0x08000,
          },
          'xmn.02a': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'xmn.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'xmn.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'xmcotaj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'xmcotaj2': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'xmnj.03b': {
            offset: 0x000000,
            size: 0x80000,
          },
          'xmnj.04b': {
            offset: 0x080000,
            size: 0x80000,
          },
          'xmn.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'xmn.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'xmn.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'xmn.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'xmn.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'xmn.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'xmn.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'xmn.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'xmn.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'xmn.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'xmn.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'xmn.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'xmn.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'xmn.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'xmn.01a': {
            offset: 0x00000,
            size: 0x08000,
          },
          'xmn.02a': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'xmn.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'xmn.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'xmcotaj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'xmcotaj3': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'xmnj.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'xmnj.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'xmn.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'xmn.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'xmn.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'xmn.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'xmn.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'xmn.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'xmn.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'xmn.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'xmn.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'xmn.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'xmn.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'xmn.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'xmn.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'xmn.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'xmn.01a': {
            offset: 0x00000,
            size: 0x08000,
          },
          'xmn.02a': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'xmn.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'xmn.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'xmcotaj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'xmcotajr': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'xmno.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'xmno.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'xmno.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'xmno.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'xmno.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'xmno.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'xmno.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'xmno.10a': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'xmn.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'xmn.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'xmn.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'xmn.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'xmn.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'xmn.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'xmn.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'xmn.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'xmn.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'xmn.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'xmn.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'xmn.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'xmcotaj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'xmcotaa': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'xmna.03e': {
            offset: 0x000000,
            size: 0x80000,
          },
          'xmna.04e': {
            offset: 0x080000,
            size: 0x80000,
          },
          'xmn.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'xmn.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'xmn.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
          'xmn.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'xmn.09a': {
            offset: 0x300000,
            size: 0x80000,
          },
          'xmn.10a': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'xmn.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'xmn.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'xmn.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'xmn.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'xmn.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'xmn.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'xmn.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'xmn.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'xmn.01a': {
            offset: 0x00000,
            size: 0x08000,
          },
          'xmn.02a': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'xmn.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'xmn.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'xmcotaa.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'xmcotaar1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'xmna.03b': {
            offset: 0x000000,
            size: 0x80000,
          },
          'xmna.04b': {
            offset: 0x080000,
            size: 0x80000,
          },
          'xmn.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'xmn.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'xmn.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'xmn.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'xmn.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'xmn.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'xmn.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'xmn.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'xmn.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'xmn.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'xmn.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'xmn.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'xmn.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'xmn.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'xmn.01a': {
            offset: 0x00000,
            size: 0x08000,
          },
          'xmn.02a': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'xmn.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'xmn.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'xmcotaa.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'xmcotaar2': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'xmna.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'xmna.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'xmn.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'xmn.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'xmn.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'xmn.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'xmn.09': {
            offset: 0x300000,
            size: 0x80000,
          },
          'xmn.10': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'xmn.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'xmn.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'xmn.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'xmn.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'xmn.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'xmn.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'xmn.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'xmn.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'xmn.01a': {
            offset: 0x00000,
            size: 0x08000,
          },
          'xmn.02a': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'xmn.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'xmn.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'xmcotaa.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'xmcotab': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'xmnb.03c': {
            offset: 0x000000,
            size: 0x80000,
          },
          'xmnb.04c': {
            offset: 0x080000,
            size: 0x80000,
          },
          'xmne.05b': {
            offset: 0x100000,
            size: 0x80000,
          },
          'xmn.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'xmn.07a': {
            offset: 0x200000,
            size: 0x80000,
          },
          'xmn.08a': {
            offset: 0x280000,
            size: 0x80000,
          },
          'xmn.09a': {
            offset: 0x300000,
            size: 0x80000,
          },
          'xmne.10b': {
            offset: 0x380000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'xmn.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'xmn.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'xmn.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'xmn.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'xmn.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'xmn.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'xmn.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'xmn.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'xmn.01a': {
            offset: 0x00000,
            size: 0x08000,
          },
          'xmn.02a': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'xmn.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'xmn.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'xmcotab.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'xmvsf': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'xvse.03f': {
            offset: 0x000000,
            size: 0x80000,
          },
          'xvse.04f': {
            offset: 0x080000,
            size: 0x80000,
          },
          'xvs.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'xvs.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'xvs.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'xvs.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'xvs.09': {
            offset: 0x300000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'xvs.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'xvs.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'xvs.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'xvs.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'xvs.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'xvs.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'xvs.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'xvs.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'xvs.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'xvs.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'xvs.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'xvs.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'xmvsf.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'xmvsfr1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'xvse.03d': {
            offset: 0x000000,
            size: 0x80000,
          },
          'xvse.04d': {
            offset: 0x080000,
            size: 0x80000,
          },
          'xvs.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'xvs.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'xvs.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'xvs.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'xvs.09': {
            offset: 0x300000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'xvs.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'xvs.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'xvs.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'xvs.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'xvs.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'xvs.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'xvs.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'xvs.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'xvs.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'xvs.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'xvs.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'xvs.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'xmvsf.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'xmvsfu': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'xvsu.03k': {
            offset: 0x000000,
            size: 0x80000,
          },
          'xvsu.04k': {
            offset: 0x080000,
            size: 0x80000,
          },
          'xvs.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'xvs.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'xvs.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'xvs.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'xvs.09': {
            offset: 0x300000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'xvs.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'xvs.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'xvs.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'xvs.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'xvs.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'xvs.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'xvs.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'xvs.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'xvs.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'xvs.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'xvs.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'xvs.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'xmvsfu.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'xmvsfur1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'xvsu.03i': {
            offset: 0x000000,
            size: 0x80000,
          },
          'xvsu.04i': {
            offset: 0x080000,
            size: 0x80000,
          },
          'xvs.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'xvs.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'xvs.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'xvs.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'xvs.09': {
            offset: 0x300000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'xvs.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'xvs.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'xvs.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'xvs.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'xvs.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'xvs.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'xvs.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'xvs.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'xvs.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'xvs.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'xvs.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'xvs.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'xmvsfu.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },

  'xmvsfur2': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'xvsu.03d': {
            offset: 0x000000,
            size: 0x80000,
          },
          'xvsu.04d': {
            offset: 0x080000,
            size: 0x80000,
          },
          'xvs.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'xvs.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'xvs.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'xvs.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'xvs.09': {
            offset: 0x300000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'xvs.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'xvs.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'xvs.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'xvs.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'xvs.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'xvs.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'xvs.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'xvs.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'xvs.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'xvs.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'xvs.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'xvs.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'xmvsfu.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },

  'xmvsfj': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'xvsj.03k': {
            offset: 0x000000,
            size: 0x80000,
          },
          'xvsj.04k': {
            offset: 0x080000,
            size: 0x80000,
          },
          'xvs.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'xvs.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'xvs.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'xvs.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'xvs.09': {
            offset: 0x300000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'xvs.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'xvs.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'xvs.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'xvs.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'xvs.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'xvs.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'xvs.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'xvs.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'xvs.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'xvs.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'xvs.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'xvs.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'xmvsfj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'xmvsfjr1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'xvsj.03i': {
            offset: 0x000000,
            size: 0x80000,
          },
          'xvsj.04i': {
            offset: 0x080000,
            size: 0x80000,
          },
          'xvs.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'xvs.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'xvs.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'xvs.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'xvs.09': {
            offset: 0x300000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'xvs.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'xvs.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'xvs.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'xvs.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'xvs.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'xvs.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'xvs.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'xvs.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'xvs.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'xvs.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'xvs.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'xvs.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'xmvsfj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'xmvsfjr2': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'xvsj.03d': {
            offset: 0x000000,
            size: 0x80000,
          },
          'xvsj.04d': {
            offset: 0x080000,
            size: 0x80000,
          },
          'xvs.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'xvs.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'xvs.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'xvs.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'xvs.09': {
            offset: 0x300000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'xvs.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'xvs.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'xvs.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'xvs.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'xvs.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'xvs.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'xvs.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'xvs.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'xvs.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'xvs.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'xvs.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'xvs.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'xmvsfj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'xmvsfjr3': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'xvsj.03c': {
            offset: 0x000000,
            size: 0x80000,
          },
          'xvsj.04c': {
            offset: 0x080000,
            size: 0x80000,
          },
          'xvs.05': {
            offset: 0x100000,
            size: 0x80000,
          },
          'xvs.06': {
            offset: 0x180000,
            size: 0x80000,
          },
          'xvs.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'xvs.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'xvs.09': {
            offset: 0x300000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'xvs.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'xvs.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'xvs.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'xvs.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'xvs.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'xvs.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'xvs.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'xvs.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'xvs.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'xvs.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'xvs.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'xvs.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'xmvsfj.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'xmvsfa': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'xvsa.03k': {
            offset: 0x000000,
            size: 0x80000,
          },
          'xvsa.04k': {
            offset: 0x080000,
            size: 0x80000,
          },
          'xvs.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'xvs.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'xvs.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'xvs.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'xvs.09': {
            offset: 0x300000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'xvs.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'xvs.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'xvs.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'xvs.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'xvs.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'xvs.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'xvs.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'xvs.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'xvs.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'xvs.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'xvs.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'xvs.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'xmvsfa.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'xmvsfar1': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'xvsa.03': {
            offset: 0x000000,
            size: 0x80000,
          },
          'xvsa.04': {
            offset: 0x080000,
            size: 0x80000,
          },
          'xvs.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'xvs.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'xvs.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'xvs.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'xvs.09': {
            offset: 0x300000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'xvs.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'xvs.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'xvs.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'xvs.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'xvs.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'xvs.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'xvs.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'xvs.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'xvs.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'xvs.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'xvs.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'xvs.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'xmvsfa.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'xmvsfar2': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'xvsa.03e': {
            offset: 0x000000,
            size: 0x80000,
          },
          'xvsa.04e': {
            offset: 0x080000,
            size: 0x80000,
          },
          'xvs.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'xvs.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'xvs.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'xvs.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'xvs.09': {
            offset: 0x300000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'xvs.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'xvs.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'xvs.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'xvs.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'xvs.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'xvs.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'xvs.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'xvs.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'xvs.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'xvs.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'xvs.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'xvs.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'xmvsfa.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'xmvsfar3': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'xvsa.03d': {
            offset: 0x000000,
            size: 0x80000,
          },
          'xvsa.04d': {
            offset: 0x080000,
            size: 0x80000,
          },
          'xvs.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'xvs.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'xvs.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'xvs.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'xvs.09': {
            offset: 0x300000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'xvs.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'xvs.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'xvs.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'xvs.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'xvs.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'xvs.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'xvs.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'xvs.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'xvs.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'xvsa.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'xvs.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'xvs.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'xmvsfa.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'xmvsfh': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'xvsh.03a': {
            offset: 0x000000,
            size: 0x80000,
          },
          'xvsh.04a': {
            offset: 0x080000,
            size: 0x80000,
          },
          'xvs.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'xvs.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'xvs.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'xvs.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'xvs.09': {
            offset: 0x300000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'xvs.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'xvs.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'xvs.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'xvs.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'xvs.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'xvs.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'xvs.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'xvs.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'xvs.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'xvs.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'xvs.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'xvs.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'xmvsfh.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  },
  'xmvsfb': {
    regions: {
      'maincpu': {
        size: 0x0400000,
        files: {
          'xvsb.03h': {
            offset: 0x000000,
            size: 0x80000,
          },
          'xvsb.04h': {
            offset: 0x080000,
            size: 0x80000,
          },
          'xvs.05a': {
            offset: 0x100000,
            size: 0x80000,
          },
          'xvs.06a': {
            offset: 0x180000,
            size: 0x80000,
          },
          'xvs.07': {
            offset: 0x200000,
            size: 0x80000,
          },
          'xvs.08': {
            offset: 0x280000,
            size: 0x80000,
          },
          'xvs.09': {
            offset: 0x300000,
            size: 0x80000,
          },
        },
      },
      'gfx': {
        size: 0x2000000,
        files: {
          'xvs.13m': {
            offset: 0x0000000,
            size: 0x400000,
          },
          'xvs.15m': {
            offset: 0x0000002,
            size: 0x400000,
          },
          'xvs.17m': {
            offset: 0x0000004,
            size: 0x400000,
          },
          'xvs.19m': {
            offset: 0x0000006,
            size: 0x400000,
          },
          'xvs.14m': {
            offset: 0x1000000,
            size: 0x400000,
          },
          'xvs.16m': {
            offset: 0x1000002,
            size: 0x400000,
          },
          'xvs.18m': {
            offset: 0x1000004,
            size: 0x400000,
          },
          'xvs.20m': {
            offset: 0x1000006,
            size: 0x400000,
          },
        },
      },
      'audiocpu': {
        size: 0x50000,
        files: {
          'xvs.01': {
            offset: 0x00000,
            size: 0x08000,
          },
          'xvs.02': {
            offset: 0x28000,
            size: 0x20000,
          },
        },
      },
      'qsound': {
        size: 0x400000,
        files: { // QSound samples
          'xvs.11m': {
            offset: 0x000000,
            size: 0x200000,
          },
          'xvs.12m': {
            offset: 0x200000,
            size: 0x200000,
          },
        },
      },
      'key': {
        size: 0x20,
        files: {
          'xmvsfb.key': {
            offset: 0x000000,
            size: 0x000014,
          },
        }
      }
    }
  }
};