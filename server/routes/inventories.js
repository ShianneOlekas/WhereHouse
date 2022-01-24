const express = require("express")
const router = express.Router()
const knex = require("knex")(require("../knexfile").development);

router.get("/", (req, res) => {
    knex
      .select("*")
      .from("inventories")
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.send("Error getting warehouses data"));
  });

module.exports = router