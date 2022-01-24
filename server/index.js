const express = require('express');
const app = express();
const knex = require("knex")(require("./knexfile").development);
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}`);
})