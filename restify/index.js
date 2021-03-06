const restify = require('restify');
const mongoose = require('mongoose');
const config = require('./config');

const server = restify.createServer();
server.use(restify.plugins.bodyParser());

server.use(
    function crossOrigin(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        return next();
    }
);

server.listen(config.PORT, () => {
    mongoose.connect(
        config.MONGODB_URI,
        {useNewUrlParser: true}
    );
});

const db = mongoose.connection;

db.on('error', (err) => console.log(err));

db.once('open', () => {
    require('./routes/pokemon')(server);
    console.log('server started on port' + " " + config.PORT);
});