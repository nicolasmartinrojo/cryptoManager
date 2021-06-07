var express = require("express");
var model = require("../models/User");
var genericApi = require("./genericApi");
var router = express.Router();

const api = genericApi(model);

const list = (req, res) => api.list(res);

const single = (req, res) => api.single(res, { id: req.params.id });

const create = (req, res) => {
  const user = ({ name } = req.body);
  api.create(res, user);
};

const update = (req, res) => {
  const params = ({ id } = req.params);
  const user = ({ name } = req.body);
  api.update(res, params, user);
};

const remove = (req, res) => api.remove(res, { id: req.params.id });

router.get("/", list);
router.get("/:id", single);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

export default router;
