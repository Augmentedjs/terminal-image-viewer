const printBitmapSingle = require("./printSingle.js");
const printBitmapDouble = require("./printDouble.js");
const printSemigraphics = require("./printSemigraphics.js");

if (process.argv && process.argv.length >= 3) {
  const fs = require("fs");
  const filename = process.argv[2];

  try {
    if (fs.existsSync(filename)) {

      fs.readFile(filename, "utf8", (err, data) => {
        if (err) throw err;
        const json = JSON.parse(data);
        if (!json || typeof json !== "object") {
          console.error("Problem with json file.");
          return;
        }

        if (json) {
          if (json.type && json.type === "Semigraphics") {
            console.debug("details", json.width, json.height, json.bitmap.length);
            printSemigraphics(json);
          } else if (json.shape && json.shape === "square") {
            printBitmapDouble(json);
          } else {
            printBitmapSingle(json);
          }
        }
      });
    } else {
      console.error("Please pass a JSON file with bitmap data.");
    }
  } catch(err) {
    console.error(err)
  }
} else {
  console.error("Please pass a JSON file with bitmap data.");
}
