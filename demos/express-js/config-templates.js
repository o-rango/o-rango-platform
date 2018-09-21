const tplBody = `
<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

html, 
body {  
  height: 100%;
  width: 100%;
  font-family: 'Roboto';
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
		<li><a class="o-link" href="/alert">ALERT</a></li>
		<li><a class="o-link" href="/home/123131">404</a></li>
	</ul>
</nav>
</body>
</header>

</body>
<script type="text/javascript" src="/scripts/@o-rango/o-router-client/dist/index.js"></script>
`


module.exports = tplBody;