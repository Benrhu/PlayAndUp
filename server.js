const port = 3000;
const path = require('path');
const express = require('express');
const rootRouter = require('./src/routes/index')

const app = express();

const staticPath = path.join(__dirname, '/client');
app.use(express.static(staticPath));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', rootRouter);

app.listen(3000, () => {
    console.log(`Running on https://localhost:${port}`);
});

module.exports = app;