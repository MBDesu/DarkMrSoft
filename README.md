# DarkMrSoft

DarkMrSoft is a web app utility for patching CPS2 ROMs with the patches found in a MiSTer `.mra` file. The immediate goal of this project is to service Darksoft/MAME users who would like to use these ROMhacks on those platforms, with a longer term goal of eventually being an in-browser toolchain for CPS2 ROMhacking in general.

Much of the ROM manipulation that this web app does is available as a separate [npm package](https://www.npmjs.com/package/cps2-utils), [cps2-utils](https://github.com/MBDesu/cps2-utils.git)!

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Darksoft CPS2 Multi File Format

I'm not sure where else to document this, so I am documenting it here. The Darksoft CPS2 Multi file format is as follows (assume each `flash` file is padded with `0xff` to 4 MB unless otherwise stated):

| MAME ROM Region   | MAME Files          | Darksoft Files          | Notes                                                                                                                      |
| ----------------: | ------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------|
| `audiocpu`        | `rom.01`, `rom.02`  | `flash.01`              | These files are simply concatenated and then padded with `0xff` to 4 MB. Sometimes there's only 1 of them, such as `19xx`. |
| `maincpu`         | `rom.03` - `rom.10` | `flash.02`              | Some ROMs do not have 8 `maincpu` files. They are concatenated and padded with `0xff` to 4 MB if needed.                   |
| `qsound`          | `rom.11`, `rom.12`  | `flash.03`, `flash.04`* | If `qsound` files do not exceed 4 MB, then `flash.04` is not necessary.                                                    |
| `gfx`             | `rom.13`, `rom.14`  | `flash.05`, `flash.06`* | If the MAME files do not exceed 4 MB after padding each to 2 MB with `0xff`, then `flash.06` is not necessary.             |
| `gfx`             | `rom.15`, `rom.16`  | `flash.07`, `flash.08`* | If the MAME files do not exceed 4 MB after padding each to 2 MB with `0xff`, then `flash.08` is not necessary.             |
| `gfx`             | `rom.17`, `rom.18`  | `flash.09`, `flash.10`* | If the MAME files do not exceed 4 MB after padding each to 2 MB with `0xff`, then `flash.10` is not necessary.             |
| `gfx`             | `rom.19`, `rom.20`  | `flash.11`, `flash.12`* | If the MAME files do not exceed 4 MB after padding each to 2 MB with `0xff`, then `flash.12` is not necessary.             |

The `gfx` files are read in pairs and operations are performed on them pairwise. If a single `gfx` file is 8 MB in size, it is split into two and the next file is processed. At least I'm pretty sure that's how it works and that's how I implemented it, so fingers crossed.
