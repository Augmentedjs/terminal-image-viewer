const { PALETTE, PALETTE_FG, RESET, DIM } = require("./colors.js");
const SQUARE = " ";
const HALF = "▀";

const print = (row) => {
  let x = 0, text = "";
  for (x = 0; x < row.length; x++) {
    text += `${PALETTE[row[x]]}${SQUARE}`;
  }
  text += RESET;
  console.log(text);
  return text;
};

const printDouble = (row1, row2) => {
  let x = 0, text = "";
  for (x = 0; x < row1.length; x++) {
    if (row1 && row2) {
      text += `${PALETTE[row2[x]]}${PALETTE_FG[row1[x]]}${HALF}`;
    } else {
      // nothing
    }
  }
  text += RESET;
  console.log(text);
  return text;
};

const printBitmapSingle = (bitmap) => {
  if (bitmap) {
    let y = 0;
    for (y = 0; y < bitmap.height; y++) {
      print(bitmap.bitmap[y]);
    }
  }
  return true;
};

const printBitmapDouble = (bitmap) => {
  if (bitmap) {
    let y = 0;
    for (y = 0; y < bitmap.height; y = y + 2) {
      printDouble(bitmap.bitmap[y], bitmap.bitmap[y + 1]);
    }
  }
  return true;
};

module.exports = {
  "printBitmapSingle": printBitmapSingle,
  "printBitmapDouble": printBitmapDouble
};
