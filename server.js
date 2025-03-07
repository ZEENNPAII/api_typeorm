require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const errorHandler = require('./_middleware/error-handler');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('./users', require('./users.controller'));

app.use(errorHandler);

const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 88) : 4000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
