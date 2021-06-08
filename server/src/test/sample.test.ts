import Account from "../models/Account";
import AccountDAL from "../models/dal/AccountDAL";
jest.mock("../db", () => {
  const fn = () => {
    return {
      select: jest.fn().mockReturnThis(),
      from: jest.fn().mockReturnThis(),
      where: jest.fn().mockReturnThis(),
      first: jest.fn().mockReturnThis(),
      join: jest.fn().mockReturnThis(),
      insert: jest.fn().mockReturnThis(),
      raw: jest.fn().mockReturnThis(),
      then: jest.fn(function (done) {
        done([]);
      }),
    };
  };
  return fn;
});

jest.mock("../models/dal/AccountDAL", () => {
  const fn = {
    list: jest.fn().mockReturnValue([{ a: 1 }]),
  };
  return fn;
});

describe("Operaciones", () => {
  // it("should test that true === true", async () => {
  //   const listas = await Account.list();
  //   expect(listas).toEqual([]);
  // });

  it("should test that true === true", async () => {
    console.log(AccountDAL);
    const listas = await Account.list();
    expect(listas).toEqual([{ a: 1 }]);
  });
});
