// routes/index

const path = require('path');
const express = require('express');

const app = express();
const rootRouter = express.Router();

mimeTypes = {
    "text": "text/plain",
    "html": "text/html",
    "css": "text/css",
    "js": "text/javascript",
}

rootRouter.get('/', (req, res) => {
    if (req.url.indexOf('/client/') == 0) {
        res.sendFile(path.join(__dirname, '/client/index.html'));
        res.setHeader('Content-Type', mimeTypes);
        res.write(html)
        res.statusCode = 200;
        res.end();
    }
})

/* rootRouter.get('/login', (req, res) => {
} */

// app.use('/login', loginRouter);

module.exports = app;