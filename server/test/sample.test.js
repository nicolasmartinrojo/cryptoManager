const mockedKnex = require("./__mocks__/mockedKnex");

jest.mock("knex", mockedKnex);
describe("Sample Test", () => {
  it("should test that true === true", () => {
    expect(true).toBe(true);
  });
  it("should test fields from knex", () => {
    knex
      .table("table")
      .first("fielda", "fieldb")
      .then(function checkFirstArrResults(model) {
        expect(model.fielda).to.equal("A");
        expect(model.fieldb).to.equal("B");
        tracker.uninstall();
        done();
      });
  });
});
