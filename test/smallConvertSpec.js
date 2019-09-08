const printBitmap = require("../src/printBitmap.js");


describe("Given bitmaps in json", () => {
  it("can print to console", async () => {
    const json = require("../data/redsky.json");
    const image = await printBitmap(json);
    expect(image).to.not.be.undefined;
  });
  it("can print to console", async () => {
    const json = require("../data/peppers.json");
    const image = await printBitmap(json);
    expect(image).to.not.be.undefined;
  });
  it("can print to console", async () => {
    const json = require("../data/wheel.json");
    const image = await printBitmap(json);
    expect(image).to.not.be.undefined;
  });
});
