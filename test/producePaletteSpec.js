const palette = require("../colors.json");

describe("Given a json palette", () => {
  it("can filter and create a compatible version", async () => {
    const clean = [];

    await console.log("[");
    await palette.map( async (color) => {
      const c = {
        "r": color.rgb.r,
        "g": color.rgb.g,
        "b": color.rgb.b
      };
      await clean.push(c);
      await console.log(c, ",");
    });
    await console.log("]");
    expect(clean.length).to.equal(palette.length);
  });
});
