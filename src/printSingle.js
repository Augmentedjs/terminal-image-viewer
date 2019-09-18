const { ESCAPE_256_STRING_BG, ESCAPE_256_STRING_FG, PALETTE, PALETTE_FG, RESET, SQUARE, HALF } = require("./colors.js");
const { formatBinary } = require("next-core-utilities");

const printMono = (row) => {
  if (!row) {
    return;
  }
  let x = 0, text = "";
  for (x = 0; x < row.length; x = x + 2) {

    const i1 = parseInt(`${row[x]}${row[x + 1]}`, 16);
    const i1b = formatBinary(i1, 8).split("");
    let xx = 0;
    for (xx; xx < i1b.length; xx++) {
      text += `${(i1b[xx] === "0") ? PALETTE[0]: PALETTE[7]}${SQUARE}${RESET}`;
    }
  }
  console.log(text);
  return text;
};

const print = (row) => {
  if (!row) {
    return;
  }
  let x = 0, text = "";
  for (x = 0; x < row.length; x++) {
    const i = parseInt(row[x], 16);
    text += `${PALETTE[i]}${SQUARE}${RESET}`;
  }
  console.log(text);
  return text;
};

const print256 = (row) => {
  if (!row) {
    return;
  }
  let x = 0, text = "";
  for (x = 0; x < row.length; x = x + 2) {
    const i = parseInt(`${row[x]}${row[x + 1]}`, 16);
    text += `${ESCAPE_256_STRING_BG + i + "m"}${SQUARE}${RESET}`;
  }
  console.log(text);
  return text;
};

const printBitmapSingle = (bitmap) => {
  if (bitmap) {
    let y = 0;
    for (y = 0; y < bitmap.height; y++) {
      if (bitmap.palette.length === 256) {
        print256(bitmap.bitmap[y]);
      } else if (bitmap.palette.length === 2) {
        printMono(bitmap.bitmap[y]);
      } else {
        print(bitmap.bitmap[y]);
      }
    }
  }
  return true;
};

module.exports = printBitmapSingle;
