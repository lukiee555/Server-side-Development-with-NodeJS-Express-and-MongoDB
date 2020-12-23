const express = require('express');
const http = require('http');
const hostname = 'localhost';
const port = 3000;
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.json());

const dishRouter = require('./routes/dishRouter');
app.use('/dishes', dishRouter);

var promoRouter = require('./routes/promoRouter');
app.use('/promotions', promoRouter.router);

var leaderRouter = require('./routes/leaderRouter');
app.use('/leadership', leaderRouter.router);


const server = http.createServer(app);
app.use(express.static(__dirname + '/public'));
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


