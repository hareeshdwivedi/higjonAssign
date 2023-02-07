const express = require('express');
const cors = require('cors');
const port = 3000;

const app = express();
const bodyParser = require('body-parser');

require('./db');
require('./models/User');
app.use(
  cors({
    origin: '*',
    // origin: [
    //   'http://192.168.0.102:3000',
    //   'https://192.168.0.102:3000',
    //   'http://192.168.0.104:3000',
    //   'https://192.168.0.104:3000',
    //   'http://localhost',
    //   'http://localhost:3000',
    //   'http://localhost:8081',
    //   'https://10.0.2.2:3000',
    // ],
  }),
);

const authRoutes = require('./routes/authRoutes');
const requiredToken = require('./Middlewares/AuthTokenRequired');

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});
app.use(bodyParser.json());
app.use(authRoutes);

app.get('/', requiredToken, (req, res) => {
    console.log(req.user);
  res.send(req.user);
});

// app.post('/signup', (req, res) => {
//   console.log(req.body, 'req');
//   res.send('Hello User this is signup page');
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
