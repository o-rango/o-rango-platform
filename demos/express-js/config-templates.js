const tplBody = `
<template id="navbar_tpl" >
<style>
     nav-bar {
      display: flex;
      position: relative;
      flex-direction: column;
      justify-content: space-between;
      box-sizing: border-box;
      width: 100%;
      z-index:999999;
     }
  
    
    .navbar-fixed {
      position: fixed;
      top: var(--nav-height ,);
    }
    #navbar {
      width: 100%;
      color: var(--nav-color , white);
      background: var(--nav-background , #072146);
      font-weight: bold;
      letter-spacing: 0.025em;
    }
    
    #navbar ul {
      text-align: center;
      margin: 0;
    }
    
    #navbar ul li {
     display: inline-block;
     padding: 0 3em;
     line-height: 3em;
    }
    
    #navbar ul li:hover {
      background: #072146;
    }  
  
  .link {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-size: medium;
    cursor: pointer;
    font-family : Arial
    
  }
  </style>
  <nav id="navbar">
    <ul>
      <li><a class="link" href="/home">Home</a></li>
      <li><a class="link"  href="/error">Error</a></li>
      <li><a class="link"  href="/alert">alert</a></li>
      <li><a class="link"  href="/form">form</a></li>
    </ul>
  </nav>
</template>
 <head>
  <script>
  class NavBarCP extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({mode: 'open'});
      const template = document.querySelector('#navbar_tpl');
      const instance = template.content.cloneNode(true);
      console.log('Create navbar');
      this.shadowRoot.appendChild(instance);
    }
  }
  customElements.define('nav-bar', NavBarCP);
  </script>
</head>
<body>
  <style>
  html body {
    font-size: 1.5em;
    color: #222;
    background: #fff;
    height: 100%;
    top: 0;
    bottom: 0;
    margin: auto;
}
nav-bar {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  z-index:999999;
  -webkit-box-shadow: 1px 10px 38px -14px rgba(0,0,0,0.75);
  -moz-box-shadow: 1px 10px 38px -14px rgba(0,0,0,0.75);
  box-shadow: 1px 10px 38px -14px rgba(0,0,0,0.75);
 }

  </style>
  <nav-bar></nav-bar>
</body>
`


module.exports = tplBody;