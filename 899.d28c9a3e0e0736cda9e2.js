"use strict";(self.webpackChunkportfolio_2020=self.webpackChunkportfolio_2020||[]).push([[899],{899:function(e,t,i){i.r(t),i.d(t,{default:function(){return d}});var r=i(602);function s(e,t,i){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:r+"")in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class a extends r.Component{constructor(){super(),s(this,"state",{hover:!1}),this.handleMouseEnter=this.handleMouseEnter.bind(this),this.handleMouseLeave=this.handleMouseLeave.bind(this)}handleMouseEnter(){this.setState({hover:!0})}handleMouseLeave(){this.setState({hover:!1})}render(){const e="grid"===this.props.sort?this.props.name.slice(0,2):this.props.name;return r.createElement("li",{onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,style:{backgroundColor:this.state.hover?this.props.color:"transparent"}},r.createElement("div",{className:"id"},this.props.i),r.createElement("div",{className:"ref"},e),r.createElement("div",{className:"name"},r.createElement("div",{className:"left"},this.props.name),r.createElement("div",{className:"right"},this.props.w)))}}var l=a;class n extends r.Component{render(){return r.createElement("li",{className:"space",style:{border:0}})}}var o=n;function c(e,t,i){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:r+"")in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class m extends r.Component{constructor(){super(),c(this,"state",{sort:"grid",loading:!1}),this.timing=750,this.handleClickSortGrid=this.handleClickSortGrid.bind(this),this.handleClickSortList=this.handleClickSortList.bind(this),this.handleLoading=this.handleLoading.bind(this)}handleClickSortGrid(){if("grid"===this.state.sort)return;this.setState({loading:!0});let e=this;setTimeout((function(){e.setState({sort:"grid"}),e.handleLoading()}),this.timing)}handleClickSortList(){if("list"===this.state.sort)return;this.setState({loading:!0});let e=this;setTimeout((function(){e.setState({sort:"list"}),e.handleLoading()}),this.timing)}handleLoading(){let e=this;setTimeout((function(){e.setState({loading:!1})}),this.timing)}render(){const e=[{el:"skill",name:"Sass",color:"#a53364"},{el:"Space",value:3},{el:"skill",name:"Svg",color:"#87a533"},{el:"skill",name:"Html5",color:"#afafaf"},{el:"skill",name:"Javascript ES6",color:"#807d00"},{el:"Space",value:1},{el:"skill",name:"Php",color:"#4F5B93"},{el:"skill",name:"Webpack",color:"#004280"},{el:"skill",name:"React",color:"#3997b1"},{el:"skill",name:"Unreal Engine",color:"#111"},{el:"skill",name:"Adobe",color:"#c00606"},{el:"skill",name:"Prestashop",color:"#7c1b4c"},{el:"skill",name:"Cypress.io",color:"#04c38e"},{el:"skill",name:"Shopify",color:"#07ad23"},{el:"skill",name:"Git / Gitflow",color:"#222"},{el:"skill",name:"Canvas",color:"#b3af00"}];let t=[],i=1;for(let[s,a]of e.entries())"skill"===a.el&&(t.push(r.createElement(l,{key:s,i:i,name:a.name,sort:this.state.sort,color:a.color,w:String(2*i+Math.random()).slice(0,5)})),i++),"Space"===a.el&&"grid"===this.state.sort&&t.push(r.createElement(o,{key:s,value:a.value}));return r.createElement("div",{className:this.state.loading?"loading":""},r.createElement("div",{className:"sort"},r.createElement("div",{className:("grid"==this.state.sort?"active":"")+" grid",onClick:this.handleClickSortGrid},r.createElement("div",{className:"carret"}),r.createElement("div",{className:"carret"}),r.createElement("div",{className:"carret"}),r.createElement("div",{className:"carret"})),r.createElement("div",{className:("list"==this.state.sort?"active":"")+" list",onClick:this.handleClickSortList},r.createElement("div",{className:"tiret"}),r.createElement("div",{className:"tiret"}),r.createElement("div",{className:"tiret"}))),r.createElement("ul",{className:this.state.sort},t))}}var d=m}}]);