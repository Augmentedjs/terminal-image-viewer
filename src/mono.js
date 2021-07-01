const { PALETTE, RESET } = require("./colors.js");
const { formatBinary } = require("next-core-utilities");

const printDoubleMono = (y1, y2) => {
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
      const i1b = formatBinary(i1, 8).split("");
      //console.log(i1b);
      const i2 = parseInt(`${row2[x]}${row2[x + 1]}`, 16);
      const i2b = formatBinary(i2, 8).split("");
      let xx = 0;
      for (xx; xx < i1b.length; xx++) {

        /* chars:
         *  U+2580 	▀ 	Upper half block 
         *  U+2584 	▄ 	Lower half block 
         *  U+2588 	█ 	Full block 
         *  U+0020 	  	Space 
         */
        text += PALETTE[0];
        if (i1b[xx] === "1" && i2b[xx] === "1") {
          text += "█";
        } else if (i1b[xx] === "1" && i2b[xx] === "0") {
          text += "▀";
        } else if (i1b[xx] === "0" && i2b[xx] === "1") {
          text += "▄";
        } else {
          text += " ";
        }
        text += RESET;
        // text += `${(i2b[xx] === "0") ? PALETTE[0]: PALETTE[7]}${(i1b[xx] === "0") ? PALETTE_FG[0]: PALETTE_FG[7]}${HALF}${RESET}`;
      }
    }
  }
  console.log(text);
  return text;
};

module.exports = { printDoubleMono };