const {printBitmapSingle, printBitmapDouble} = require("../src/printBitmap.js");


describe("Given bitmaps in json", () => {
  it("can print to console", async () => {
    const json = require("../data/apples.json");
    const image = await printBitmapDouble(json);
    expect(image).to.not.be.undefined;
  });
  it("can print to console", async () => {
    const json = require("../data/peppers.json");
    const image = await printBitmapDouble(json);
    expect(image).to.not.be.undefined;
  });
  it("can print to console", async () => {
    const json = require("../data/wheel.json");
    const image = await printBitmapSingle(json);
    expect(image).to.not.be.undefined;
  });
});
