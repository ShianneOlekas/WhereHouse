const express = require('express');
const app = express();
const cors = require('cors')
const warehousesRoutes = require('./routes/warehouses');
const inventoriesRoutes = require('./routes/inventories')
const PORT = process.env.PORT || 8080;

app.use(cors());

app.use("/warehouses", warehousesRoutes);
app.use('/inventory', inventoriesRoutes);

app.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}`);
})