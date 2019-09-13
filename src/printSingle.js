const { PALETTE, PALETTE_FG, RESET, SQUARE, HALF } = require("./colors.js");

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

const printBitmapSingle = (bitmap) => {
  if (bitmap) {
    let y = 0;
    for (y = 0; y < bitmap.height; y++) {
      print(bitmap.bitmap[y]);
    }
  }
  return true;
};

module.exports = printBitmapSingle;
