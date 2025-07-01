const axios = require("axios");
const COFFEE_API = "https://api.sampleapis.com/coffee/hot";

async function fetchAll() {
  const { data } = await axios.get(COFFEE_API);
  return data;
}

async function fetchOne(id) {
  const drinks = await fetchAll();
  return drinks.find((d) => String(d.id) === String(id));
}

module.exports = { fetchAll, fetchOne };
