const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

//conect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'));

//HTTP logger
app.use(morgan('combined'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
