var express = require('express')
var http = require('http');
var app = express();
const route = require('@o-rango/o-express-middleware')
let port = process.env.PORT || "3050";
const head = ``;
const tpl = `
<style>
body {
margin : 0;
font-family : 'Arial'
}
header {
	z-index :99999999;
  position:absolute;
  top:0;
  left:0;
  padding:0 100px;
  background:#262626;
  width:100%;
  box-sizing:border-box;
}
header .menu {
  color:white;
  height:50px;
  line-height:50px;
  font-size:24px;
  font-weight:bold;
  float:left;
}
header nav {
  float:right;
}
header nav ul {
  margin:0;
  padding:0;
  display:flex;
}
header nav ul li {
  list-style-type:none;
}
header nav ul li a {
  color:White;
  text-decoration:none;
  line-height:50px;
  padding: 0 20px;
  display:block;
}

header nav ul li a:hover {
  background-color:#d42721;
}
</style>
<header>
<div class="menu">Micro Front</div>
<nav>
	<ul>
		<li><a class="o-link" href="/home">HOME</a></li>
		<li><a class="o-link" href="/main">MAIN</a></li>
		<li><a href="/home/123131">404</a></li>
	</ul>
</nav>
</header>
`

const configGlobal = {
errorUrl : 'https://stenciljs.com/asfadada/',
// At Moment only one template is available
templates : { name : 'home', zone:'<!--content-->', content : `<body>${head}<html>${tpl} <!--content--> </html></body>`}
}


const config =  [
	{
		url : '/home' ,
		handler : (ua , props)=>{
			return {
				ssr: ua ? 'https://stenc.a' : 'https://stenciljs.com/docs-content/reference/forms.html',
				fallback : {
					tag : '<o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block><o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block><o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block><o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block><o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block><o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block><o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block><o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block><o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block><o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block><o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block><o-content-placeholder-block line-height="50" margin="6" animation="true" lines="8"></o-content-placeholder-block>',
					script : 'https://unpkg.com/@o-rango/o-content-placeholder@0.1.5/dist/o-content-placeholder.js'
				}
		    }
		}
	},
	{
		url : '/main' ,
		handler : (ua , props)=>{
			return {
				ssr: ua ? 'https://stenc.com' : 'https://stenciljs.com/docs-content/introduction/getting-started.html',
				fallback : {
					tag : '<o-demo-bar name="Demo o-content-placeholder"></o-demo-bar>',
					script : 'https://unpkg.com/@o-rango/orango-demo-tools/dist/orango-demo-tools.js'
				}
		    }
		},
		
	},
	{
		url : '/form' ,
		handler : (ua , props)=>{
			return {
				ssr: ua ? 'https://stenc.com' : 'https://stenciljs.com/docs-content/introduction/getting-started.html',
				fallback : {
					tag : '<o-demo-bar name="Demo o-content-placeholder"></o-demo-bar>',
					script : 'https://unpkg.com/@o-rango/orango-demo-tools/dist/orango-demo-tools.js'
				}
		    }
		},
		
	},
	{
		url : '/alias' ,
		handler : (ua , props)=>{
			return {
				ssr: ua ? 'https://stenc.com' : 'https://stenciljs.com/docs-content/introduction/getting-started.html',
				fallback : {
					tag : '<o-demo-bar name="Demo o-content-placeholder"></o-demo-bar>',
					script : 'https://unpkg.com/@o-rango/orango-demo-tools/dist/orango-demo-tools.js'
				}
		    }
		},
		
	}
];
// Set app configuration First;
route.routerConfig(config);

route.globalConfig(configGlobal);

app.use(route.routerHandler);
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});