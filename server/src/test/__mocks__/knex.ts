module.exports = () => () => {
  const fn = () => {
    return {
      select: jest.fn().mockReturnThis(),
      from: jest.fn().mockReturnThis(),
      where: jest.fn().mockReturnThis(),
      first: jest.fn().mockReturnThis(),
      insert: jest.fn().mockReturnThis(),
      raw: jest.fn().mockReturnThis(),
      then: jest.fn(function (done) {
        done(null);
      }),
    };
  };
  return fn;
};
