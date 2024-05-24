const express = require('express');
const bodyParser = require('body-parser');
const cors = require('./middlewares/cors');
const path = require('path');
const apiRouter = require('./routes/api');
const cookieParser = require("cookie-parser");
const connectToDataBase = require('./database/connect');
const pagesRouter = require('./routes/pages');
const app = express();

const PORT = 3000;
connectToDataBase();
app.use(
    cors,
    cookieParser(),
    bodyParser.json(),
    pagesRouter,
    apiRouter,
    express.static(path.join(__dirname, 'public'))
);

app.listen(PORT, () => {
    console.log(`Сервер запущен http://localhost:${PORT}`)
});

process.once("SIGUSR2", () => server.close(err => process.kill(process.pid, "SIGUSR2")));