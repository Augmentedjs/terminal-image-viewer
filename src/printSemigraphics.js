const { ESCAPE_256_STRING_BG, ESCAPE_256_STRING_FG, RESET } = require("./colors.js");

const rgbToAnsi256 = (r, g, b) => {
  // we use the extended greyscale palette here, with the exception of
  // black and white. normal palette only has 4 greyscale shades.
  if (r === g && g === b) {
    if (r < 8) {
      return 16;
    }

    if (r > 248) {
      return 231;
    }

    return Math.round(((r - 8) / 247) * 24) + 232;
  }

  const ansi = 16
    + (36 * Math.round(r / 255 * 5))
    + (6 * Math.round(g / 255 * 5))
    + Math.round(b / 255 * 5);

  return ansi;
};

const printSemigraphics = (json) => {
  let char = 0, c = 0, line = "";
  for (char = 0; char < json.bitmap.length; char++) {
    const character = json.bitmap[char];
    const i1 = rgbToAnsi256(character.palette[0].r, character.palette[0].g, character.palette[0].b);
    let i2;
    if (character.palette[1]) {
      i2 = rgbToAnsi256(character.palette[1].r, character.palette[1].g, character.palette[1].b);
    } else {
      i2 = rgbToAnsi256(0, 0, 0);
    }

    line += `${ESCAPE_256_STRING_BG + i1 + "m"}${ESCAPE_256_STRING_FG + i2 + "m"}${character.character}${RESET}`;
    c++;
    if (c === json.width) {
      console.log(line);
      c = 0;
      line = "";
    }
  }

  return true;
};

module.exports = printSemigraphics;
