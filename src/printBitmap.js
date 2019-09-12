const { PALETTE, PALETTE_FG, RESET } = require("./colors.js");
const SQUARE = " ";
const HALF = "▀";

const print = (row) => {
  let x = 0, text = "";
  for (x = 0; x < row.length; x++) {
    text += `${PALETTE[row[x]]}${SQUARE}${RESET}`;
  }
  console.log(text);
  return text;
};

const printDouble = (y1, y2) => {
  const row1 = y1.slice();
  const row2 = y2.slice();
  let x = 0, text = "";
  for (x = 0; x < row1.length; x++) {
    if (row1 && row2) {
      const i1 = parseInt(row1[x], 16);
      const i2 = parseInt(row2[x], 16);
      text += `${PALETTE[i2]}${PALETTE_FG[i1]}${HALF}${RESET}`;
    }
  }
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
