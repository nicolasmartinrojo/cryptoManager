const genericApi = (model) => {
  const list = (res, params = {}) =>
    model.list(params).then((data) => {
      res.json(data);
    });
  const single = (res, params = {}) =>
    model.single(params).then((data) => {
      res.json(data);
    });

  const create = (res, elem) => {
    model
      .create(elem)
      .then((data) => res.json(data))
      .catch((e) => res.json(e));
  };
  const update = (res, params, elem) => {
    model
      .update(params, elem)
      .then((data) => res.json(data))
      .catch((e) => res.json(e));
  };
  const remove = (res, params) => {
    model
      .remove(params)
      .then((data) => res.json(data))
      .catch((e) => res.json(e));
  };

  return { list, create, update, remove, single };
};

export default genericApi;
