const {printBitmapSingle, printBitmapDouble} = require("./printBitmap.js");

if (process.argv && process.argv.length >= 3) {
  const fs = require("fs");
  const filename = process.argv[2];
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;
    const json = JSON.parse(data);
    if (!json || typeof json !== "object") {
      console.error("Problem with json file.");
      return;
    }
    if(json && json.shape && json.shape === "square") {
      printBitmapDouble(json);
    } else {
      printBitmapSingle(json);
    }
  });
} else {
  console.warn("Please pass a JSON file with bitmap data.");
}
