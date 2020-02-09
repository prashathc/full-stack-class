const express = require('express');
const password = 'cupsrgreat';

const cupRouter = require('./routes/cups/cupRoutes');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  if (req.headers.authorization !==  password) {
    res.status(403).send('<h1>Wrong password</h1>');
    return
  }
  res.setHeader('password', password);
  next();
});
app.use('/cups', cupRouter);
app.use(express.static('public'));

app.listen('8080', () => {
  console.log('listening on port 8080');
});
