const printSingle = require("../src/printSingle.js");
const printDouble = require("../src/printDouble.js");


describe("Given bitmaps in json", () => {
  it("can print to console", async () => {
    const json = require("../data/apples.json");
    const image = await printSingle(json);
    expect(image).to.not.be.undefined;
  });
  it("can print to console", async () => {
    const json = require("../data/peppers.json");
    const image = await printDouble(json);
    expect(image).to.not.be.undefined;
  });
  it("can print to console", async () => {
    const json = require("../data/wheel.json");
    const image = await printSingle(json);
    expect(image).to.not.be.undefined;
  });
});
