const { ESCAPE_256_STRING_BG, ESCAPE_256_STRING_FG, PALETTE, PALETTE_FG, RESET, SQUARE, HALF } = require("./colors.js");

const printDouble = (y1, y2) => {
  if (!y1) {
    return;
  }
  const row1 = y1.slice();
  let row2;
  if (!y2) {
    row2 = new Array(row1.length).fill("0");
  } else {
    row2 = y2.slice();
  }
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

const printDouble256 = (y1, y2) => {
  if (!y1) {
    return;
  }
  const row1 = y1.slice();
  let row2;
  if (!y2) {
    row2 = new Array(row1.length).fill("0");
  } else {
    row2 = y2.slice();
  }
  let x = 0, text = "";
  for (x = 0; x < row1.length; x = x + 2) {
    if (row1 && row2) {
      const i1 = parseInt(`${row1[x]}${row1[x + 1]}`, 16);
      const i2 = parseInt(`${row2[x]}${row2[x + 1]}`, 16);
      text += `${ESCAPE_256_STRING_BG + i2 + "m"}${ESCAPE_256_STRING_FG + i1 + "m"}${HALF}${RESET}`;
    }
  }
  console.log(text);
  return text;
};

const printBitmapDouble = (bitmap) => {
  if (bitmap) {
    let y = 0;
    for (y = 0; y < bitmap.height; y = y + 2) {
      if (bitmap.palette.length === 256) {
        printDouble256(bitmap.bitmap[y], bitmap.bitmap[y + 1]);
      } else {
        printDouble(bitmap.bitmap[y], bitmap.bitmap[y + 1]);
      }
    }
  }
  return true;
};

module.exports = printBitmapDouble;
