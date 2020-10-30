const cors = require('cors')
const express = require('express')

const routes = require('./routes')

const bodyParser = require('body-parser')
const compression = require('compression')
const PORT = 80;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(compression())
app.use('/', routes);


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

