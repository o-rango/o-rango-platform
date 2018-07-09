var express = require('express')
var http = require('http');
var app = express();
const route = require('@o-rango/o-express-middleware')
let port = process.env.PORT || "3050";


const config =  [
	{
		url : '/main' ,
		handler : (ua , props)=>{
			return {
				ssr: ua ? 'http://127.0.0.1:99/com2/' : 'http://127.0.0.1:99/com2/',
				fallback : {
					tag : '<o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block>',
					script : 'https://unpkg.com/@o-rango/o-content-placeholder@0.1.1/dist/o-content-placeholder.js'
				}
		    }
		}
	},
	{
		url : '/home' ,
		handler : (ua , props)=>{
			return {
				ssr: ua ? 'http://127.0.0.1:9999/com1/' : 'http://127.0.0.1:9999/com1/',
				fallback : {
					tag : '<my-component></my-component>',
					script : 'https://unpkg.com/@o-rango/o-content-placeholder@0.1.1/dist/o-content-placeholder.js'
				}
		    }
		}
	}
];
// Set app configuration First;
route.routerConfig(config);

app.use(route.routerHandler);
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});