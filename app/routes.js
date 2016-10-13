module.exports = function(app){
    app.get('/', function(req, res){
        var os = require("os");
        res.render('index', { hostname: os.hostname() } );
    });
}