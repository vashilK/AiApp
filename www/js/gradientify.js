"use strict";!function(){var t=[];function e(){return void 0===this||Object.getPrototypeOf(this)!==e.prototype?new e:this}function n(t,e){t.map(function(t){e.appendChild(t)})}function o(t,e,n){return t.map(function(t,o){var i=document.createElement("div");return Object.assign(i.style,{backgroundImage:t,opacity:0===o?1:0,transitionDuration:e/1e3+"s",zIndex:n===document.body?-999:2}),i.classList.add("gradientify-gradient"),i})}function i(t,e){setInterval(function(){for(var e=0;e<t.length;e++)"1"===t[e].style.opacity&&(t[e].style.opacity=0,t[++e%t.length].style.opacity=1)},e+200)}e.prototype.create=function(t,e,a){var r;n(r=o(e,a,t),t),i(r,a)},e.prototype.loadFromPreset=function(e,a,r){var s,c=void 0;t.map(function(t){t.hash===a&&(r=t.interval,c=t.gradients)}),n(s=o(c,r,e),e),i(s,r)},e.prototype.getPresets=function(e,n){var o=new XMLHttpRequest;o.overrideMimeType("application/json"),o.open("GET",e,!0),o.onreadystatechange=function(){4===o.readyState&&200===o.status&&(t=JSON.parse(o.responseText),n())},o.send(null)},window.Gradientify=e}();