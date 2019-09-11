const Reset = "\x1b[0m";
const Bright = "\x1b[1m";
const Dim = "\x1b[2m";
const Underscore = "\x1b[4m";
const Blink = "\x1b[5m";
const Reverse = "\x1b[7m";
const Hidden = "\x1b[8m";

const FgBlack = "\u001b[38;5;0m";
const FgRed = "\u001b[38;5;1m";
const FgGreen = "\u001b[38;5;2m";
const FgYellow = "\u001b[38;5;3m";
const FgBlue = "\u001b[38;5;4m";
const FgMagenta = "\u001b[38;5;5m";
const FgCyan = "\u001b[38;5;6m";
const FgGray = "\u001b[38;5;7m";

const FgDarkGray = "\u001b[38;5;8m";
const FgBrightRed = "\u001b[38;5;9m";
const FgBrightGreen = "\u001b[38;5;10m";
const FgBrightYellow = "\u001b[38;5;11m";
const FgBrightBlue = "\u001b[38;5;12m";
const FgBrightMagenta = "\u001b[38;5;13m";
const FgBrightCyan = "\u001b[38;5;14m";
const FgWhite = "\x1b[97m";

const BgBlack = "\u001b[48;5;0m";
const BgRed = "\u001b[48;5;1m";
const BgGreen = "\u001b[48;5;2m";
const BgYellow = "\u001b[48;5;3m";
const BgBlue = "\u001b[48;5;4m";
const BgMagenta = "\u001b[48;5;5m";
const BgCyan = "\u001b[48;5;6m";
const BgGray = "\u001b[48;5;7m";

const BgDarkGray = "\u001b[48;5;8m";
const BgBrightRed = "\u001b[48;5;9m";
const BgBrightGreen = "\u001b[48;5;10m";
const BgBrightYellow = "\u001b[48;5;11m";
const BgBrightBlue = "\u001b[48;5;12m";
const BgBrightMagenta = "\u001b[48;5;13m";
const BgBrightCyan = "\u001b[48;5;14m";
const BgWhite = "\x1b[107m";

const PALETTE = [
  `${BgBlack}`,
  `${BgBrightRed}`,
  `${BgBrightGreen}`,
  `${BgBrightBlue}`,
  `${BgBrightYellow}`,
  `${BgBrightMagenta}`,
  `${BgBrightCyan}`,
  `${BgWhite}`,
  `${BgDarkGray}`,
  `${BgRed}`,
  `${BgGreen}`,
  `${BgBlue}`,
  `${BgYellow}`,
  `${BgMagenta}`,
  `${BgCyan}`,
  `${BgGray}`
];

const PALETTE_FG = [
  `${FgBlack}`,
  `${FgBrightRed}`,
  `${FgBrightGreen}`,
  `${FgBrightBlue}`,
  `${FgBrightYellow}`,
  `${FgBrightMagenta}`,
  `${FgBrightCyan}`,
  `${FgWhite}`,
  `${FgDarkGray}`,
  `${FgRed}`,
  `${FgGreen}`,
  `${FgBlue}`,
  `${FgYellow}`,
  `${FgMagenta}`,
  `${FgCyan}`,
  `${FgGray}`
];

const SQUARE = " ";
const HALF = "▀";

const print = (row) => {
  let x = 0, text = "";
  for (x = 0; x < row.length; x++) {
    text += `${PALETTE[row[x]]}${SQUARE}`;
  }
  text += Reset;
  console.log(text);
  return text;
};

const printDouble = (row1, row2) => {
  let x = 0, text = "";
  for (x = 0; x < row1.length; x++) {
    if (row1 && row2) {
      text += `${PALETTE[row2[x]]}\x1b[2m${PALETTE_FG[row1[x]]}${HALF}`;
    } else {
      // nothing
    }

  }
  text += Reset;
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
