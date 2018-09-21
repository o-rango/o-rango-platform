var express = require('express')
var http = require('http');
var app = express();
const route = require('@o-rango/o-express-middleware')
let port = process.env.PORT || "3050";
const  modulesLoader = require('./config-apps');


// Set app configuration First;
route.routerConfig(modulesLoader.config);
route.globalConfig(modulesLoader.configGlobal);



app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.use(route.routerHandler);
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});