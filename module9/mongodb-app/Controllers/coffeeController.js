const coffeeService = require("../Services/coffeeService");

async function list(req, res, next) {
  try {
    const { page = 1, limit = 10 } = req.query;
    const all = await coffeeService.fetchAll();

    const p = Number(page);
    const l = Number(limit);
    const start = (p - 1) * l;
    const data = all.slice(start, start + l);

    res.json({ page: p, limit: l, total: all.length, data });
  } catch (err) {
    next(err);
  }
}

async function getById(req, res, next) {
  try {
    const drink = await coffeeService.fetchOne(req.params.id);
    if (!drink) return res.status(404).json({ error: "Not found" });
    res.json(drink);
  } catch (err) {
    next(err);
  }
}

module.exports = { list, getById };
