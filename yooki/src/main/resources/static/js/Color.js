!function(e,t){"use strict";function n(e){var t=e.length,n=oe.type(e);return!oe.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)))}function r(e){var t=be[e]={};return oe.each(e.match(se)||[],function(e,n){t[n]=!0}),t}function i(e,n,r,i){if(oe.acceptData(e)){var o,a,s=oe.expando,u="string"==typeof n,l=e.nodeType,c=l?oe.cache:e,f=l?e[s]:e[s]&&s;if(f&&c[f]&&(i||c[f].data)||!u||r!==t)return f||(l?e[s]=f=Q.pop()||oe.guid++:f=s),c[f]||(c[f]={},l||(c[f].toJSON=oe.noop)),"object"!=typeof n&&"function"!=typeof n||(i?c[f]=oe.extend(c[f],n):c[f].data=oe.extend(c[f].data,n)),o=c[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[oe.camelCase(n)]=r),u?null==(a=o[n])&&(a=o[oe.camelCase(n)]):a=o,a}}function o(e,t,n){if(oe.acceptData(e)){var r,i,o,a=e.nodeType,u=a?oe.cache:e,l=a?e[oe.expando]:oe.expando;if(u[l]){if(t&&(r=n?u[l]:u[l].data)){for((i=0,o=(t=oe.isArray(t)?t.concat(oe.map(t,oe.camelCase)):t in r?[t]:(t=oe.camelCase(t))in r?[t]:t.split(" ")).length);i<o;i++)delete r[t[i]];if(!(n?s:oe.isEmptyObject)(r))return}(n||(delete u[l].data,s(u[l])))&&(a?oe.cleanData([e],!0):oe.support.deleteExpando||u!=u.window?delete u[l]:u[l]=null)}}}function a(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(we,"-$1").toLowerCase();if("string"==typeof(r=e.getAttribute(i))){try{r="true"===r||"false"!==r&&("null"===r?null:+r+""===r?+r:xe.test(r)?oe.parseJSON(r):r)}catch(o){}oe.data(e,n,r)}else r=t}return r}function s(e){var t;for(t in e)if(("data"!==t||!oe.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function u(){return!0}function l(){return!1}function c(e,t){do{e=e[t]}while(e&&1!==e.nodeType);return e}function f(e,t,n){if(t=t||0,oe.isFunction(t))return oe.grep(e,function(e,r){return!!t.call(e,r,e)===n});if(t.nodeType)return oe.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=oe.grep(e,function(e){return 1===e.nodeType});if(Pe.test(t))return oe.filter(t,r,!n);t=oe.filter(t,r)}return oe.grep(e,function(e){return oe.inArray(e,t)>=0===n})}function p(e){var t=$e.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}function d(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function h(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function g(e){var t=et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function m(e,t){for(var n,r=0;null!=(n=e[r]);r++)oe._data(n,"globalEval",!t||oe._data(t[r],"globalEval"))}function y(e,t){if(1===t.nodeType&&oe.hasData(e)){var n,r,i,o=oe._data(e),a=oe._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;r<i;r++)oe.event.add(t,n,s[n][r])}a.data&&(a.data=oe.extend({},a.data))}}function v(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!oe.support.noCloneEvent&&t[oe.expando]){r=oe._data(t);for(i in r.events)oe.removeEvent(t,i,r.handle);t.removeAttribute(oe.expando)}"script"===n&&t.text!==e.text?(h(t).text=e.text,g(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),oe.support.html5Clone&&e.innerHTML&&!oe.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Qe.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}}function b(e,n){var r,i,o=0,a="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(n||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(n||"*"):t;if(!a)for(a=[],r=e.childNodes||e;null!=(i=r[o]);o++)!n||oe.nodeName(i,n)?a.push(i):oe.merge(a,b(i,n));return n===t||n&&oe.nodeName(e,n)?oe.merge([e],a):a}function x(e){Qe.test(e.type)&&(e.defaultChecked=e.checked)}function w(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=bt.length;i--;)if((t=bt[i]+n)in e)return t;return r}function T(e,t){return e=t||e,"none"===oe.css(e,"display")||!oe.contains(e.ownerDocument,e)}function N(e,t){for(var n,r=[],i=0,o=e.length;i<o;i++)(n=e[i]).style&&(r[i]=oe._data(n,"olddisplay"),t?(r[i]||"none"!==n.style.display||(n.style.display=""),""===n.style.display&&T(n)&&(r[i]=oe._data(n,"olddisplay",S(n.nodeName)))):r[i]||T(n)||oe._data(n,"olddisplay",oe.css(n,"display")));for(i=0;i<o;i++)(n=e[i]).style&&(t&&"none"!==n.style.display&&""!==n.style.display||(n.style.display=t?r[i]||"":"none"));return e}function C(e,t,n){var r=pt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function k(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;o<4;o+=2)"margin"===n&&(a+=oe.css(e,n+vt[o],!0,i)),r?("content"===n&&(a-=oe.css(e,"padding"+vt[o],!0,i)),"margin"!==n&&(a-=oe.css(e,"border"+vt[o]+"Width",!0,i))):(a+=oe.css(e,"padding"+vt[o],!0,i),"padding"!==n&&(a+=oe.css(e,"border"+vt[o]+"Width",!0,i)));return a}function E(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=ot(e),a=oe.support.boxSizing&&"border-box"===oe.css(e,"boxSizing",!1,o);if(i<=0||null==i){if(((i=it(e,t,o))<0||null==i)&&(i=e.style[t]),dt.test(i))return i;r=a&&(oe.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+k(e,t,n||(a?"border":"content"),r,o)+"px"}function S(e){var t=U,n=gt[e];return n||("none"!==(n=A(e,t))&&n||((t=((at=(at||oe("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement))[0].contentWindow||at[0].contentDocument).document).write("<!doctype html><html><body>"),t.close(),n=A(e,t),at.detach()),gt[e]=n),n}function A(e,t){var n=oe(t.createElement(e)).appendTo(t.body),r=oe.css(n[0],"display");return n.remove(),r}function j(e,t,n,r){var i;if(oe.isArray(t))oe.each(t,function(t,i){n||wt.test(e)?r(e,i):j(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==oe.type(t))r(e,t);else for(i in t)j(e+"["+i+"]",t[i],n,r)}function D(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(se)||[];if(oe.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function L(e,t,n,r){function i(s){var u;return o[s]=!0,oe.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||a||o[l]?a?!(u=l):void 0:(t.dataTypes.unshift(l),i(l),!1)}),u}var o={},a=e===Bt;return i(t.dataTypes[0])||!o["*"]&&i("*")}function H(e,n){var r,i,o=oe.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((o[r]?e:i||(i={}))[r]=n[r]);return i&&oe.extend(!0,e,i),e}function M(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(o in c)o in r&&(n[c[o]]=r[o]);for(;"*"===l[0];)l.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("Content-Type"));if(i)for(o in u)if(u[o]&&u[o].test(i)){l.unshift(o);break}if(l[0]in r)a=l[0];else{for(o in r){if(!l[0]||e.converters[o+" "+l[0]]){a=o;break}s||(s=o)}a=a||s}if(a)return a!==l[0]&&l.unshift(a),r[a]}function q(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=u[++s];)if("*"!==i){if("*"!==l&&l!==i){if(!(n=a[l+" "+i]||a["* "+i]))for(r in a)if((o=r.split(" "))[1]===i&&(n=a[l+" "+o[0]]||a["* "+o[0]])){!0===n?n=a[r]:!0!==a[r]&&(i=o[0],u.splice(s--,0,i));break}if(!0!==n)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(c){return{state:"parsererror",error:n?c:"No conversion from "+l+" to "+i}}}l=i}return{state:"success",data:t}}function _(){try{return new e.XMLHttpRequest}catch(t){}}function F(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function O(){return setTimeout(function(){Ut=t}),Ut=oe.now()}function B(e,t){oe.each(t,function(t,n){for(var r=(Kt[t]||[]).concat(Kt["*"]),i=0,o=r.length;i<o;i++)if(r[i].call(e,t,n))return})}function P(e,t,n){var r,i,o=0,a=Qt.length,s=oe.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=Ut||O(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:oe.extend({},t),opts:oe.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Ut||O(),duration:n.duration,tweens:[],createTween:function(t,n){var r=oe.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(R(c,l.opts.specialEasing);o<a;o++)if(r=Qt[o].call(l,e,c,l.opts))return r;return B(l,c),oe.isFunction(l.opts.start)&&l.opts.start.call(e,l),oe.fx.timer(oe.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function R(e,t){var n,r,i,o,a;for(n in e)if(r=oe.camelCase(n),i=t[r],o=e[n],oe.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=oe.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function W(e,t,n,r,i){return new W.prototype.init(e,t,n,r,i)}function $(e,t){var n,r={height:e},i=0;for(t=t?1:0;i<4;i+=2-t)r["margin"+(n=vt[i])]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function I(e){return oe.isWindow(e)?e:9===e.nodeType&&(e.defaultView||e.parentWindow)}var z,X,U=e.document,V=e.location,Y=e.jQuery,J=e.$,G={},Q=[],K=Q.concat,Z=Q.push,ee=Q.slice,te=Q.indexOf,ne=G.toString,re=G.hasOwnProperty,ie="1.9.0".trim,oe=function(e,t){return new oe.fn.init(e,t,z)},ae=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,se=/\S+/g,ue=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,le=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,ce=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,fe=/^[\],:{}\s]*$/,pe=/(?:^|:|,)(?:\s*\[)+/g,de=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,he=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,ge=/^-ms-/,me=/-([\da-z])/gi,ye=function(e,t){return t.toUpperCase()},ve=function(){U.addEventListener?(U.removeEventListener("DOMContentLoaded",ve,!1),oe.ready()):"complete"===U.readyState&&(U.detachEvent("onreadystatechange",ve),oe.ready())};oe.fn=oe.prototype={jquery:"1.9.0",constructor:oe,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(!(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:le.exec(e))||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof oe?n[0]:n,oe.merge(this,oe.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:U,!0)),ce.test(i[1])&&oe.isPlainObject(n))for(i in n)oe.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if((o=U.getElementById(i[2]))&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=U,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):oe.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),oe.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return ee.call(this)},get:function(e){return null==e?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e){var t=oe.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return oe.each(this,e,t)},ready:function(e){return oe.ready.promise().done(e),this},slice:function(){return this.pushStack(ee.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},map:function(e){return this.pushStack(oe.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:Z,sort:[].sort,splice:[].splice},oe.fn.init.prototype=oe.fn,oe.extend=oe.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||oe.isFunction(s)||(s={}),l===u&&(s=this,--u);u<l;u++)if(null!=(e=arguments[u]))for(n in e)r=s[n],s!==(i=e[n])&&(c&&i&&(oe.isPlainObject(i)||(o=oe.isArray(i)))?(o?(o=!1,a=r&&oe.isArray(r)?r:[]):a=r&&oe.isPlainObject(r)?r:{},s[n]=oe.extend(c,a,i)):i!==t&&(s[n]=i));return s},oe.extend({noConflict:function(t){return e.$===oe&&(e.$=J),t&&e.jQuery===oe&&(e.jQuery=Y),oe},isReady:!1,readyWait:1,holdReady:function(e){e?oe.readyWait++:oe.ready(!0)},ready:function(e){if(!0===e?!--oe.readyWait:!oe.isReady){if(!U.body)return setTimeout(oe.ready);oe.isReady=!0,!0!==e&&--oe.readyWait>0||(X.resolveWith(U,[oe]),oe.fn.trigger&&oe(U).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===oe.type(e)},isArray:Array.isArray||function(e){return"array"===oe.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?String(e):"object"==typeof e||"function"==typeof e?G[ne.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==oe.type(e)||e.nodeType||oe.isWindow(e))return!1;try{if(e.constructor&&!re.call(e,"constructor")&&!re.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}var n;for(n in e);return n===t||re.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||U;var r=ce.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=oe.buildFragment([e],t,i),i&&oe(i).remove(),oe.merge([],r.childNodes))},parseJSON:function(t){return e.JSON&&e.JSON.parse?e.JSON.parse(t):null===t?t:"string"==typeof t&&(t=oe.trim(t))&&fe.test(t.replace(de,"@").replace(he,"]").replace(pe,""))?new Function("return "+t)():void oe.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):((r=new ActiveXObject("Microsoft.XMLDOM")).async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||oe.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&oe.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(ge,"ms-").replace(me,ye)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,r){var i=0,o=e.length,a=n(e);if(r){if(a)for(;i<o&&!1!==t.apply(e[i],r);i++);else for(i in e)if(!1===t.apply(e[i],r))break}else if(a)for(;i<o&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(!1===t.call(e[i],i,e[i]))break;return e},trim:ie&&!ie.call("\ufeff ")?function(e){return null==e?"":ie.call(e)}:function(e){return null==e?"":(e+"").replace(ue,"")},makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?oe.merge(r,"string"==typeof e?[e]:e):Z.call(r,e)),r},inArray:function(e,t,n){var r;if(t){if(te)return te.call(t,e,n);for(r=t.length,n=n?n<0?Math.max(0,r+n):n:0;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;o<r;o++)e[i++]=n[o];else for(;n[o]!==t;)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r=[],i=0,o=e.length;for(n=!!n;i<o;i++)n!==!!t(e[i],i)&&r.push(e[i]);return r},map:function(e,t,r){var i,o=0,a=e.length,s=[];if(n(e))for(;o<a;o++)null!=(i=t(e[o],o,r))&&(s[s.length]=i);else for(o in e)null!=(i=t(e[o],o,r))&&(s[s.length]=i);return K.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(r=e[n],n=e,e=r),oe.isFunction(e)?(i=ee.call(arguments,2),o=function(){return e.apply(n||this,i.concat(ee.call(arguments)))},o.guid=e.guid=e.guid||oe.guid++,o):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===oe.type(r)){o=!0;for(u in r)oe.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,oe.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(oe(e),n)})),n))for(;u<l;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),oe.ready.promise=function(t){if(!X)if(X=oe.Deferred(),"complete"===U.readyState)setTimeout(oe.ready);else if(U.addEventListener)U.addEventListener("DOMContentLoaded",ve,!1),e.addEventListener("load",oe.ready,!1);else{U.attachEvent("onreadystatechange",ve),e.attachEvent("onload",oe.ready);var n=!1;try{n=null==e.frameElement&&U.documentElement}catch(r){}n&&n.doScroll&&function i(){if(!oe.isReady){try{n.doScroll("left")}catch(r){return setTimeout(i,50)}oe.ready()}}()}return X.promise(t)},oe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){G["[object "+t+"]"]=t.toLowerCase()}),z=oe(U);var be={};oe.Callbacks=function(e){var n,i,o,a,s,u,l=[],c=!(e="string"==typeof e?be[e]||r(e):oe.extend({},e)).once&&[],f=function(t){for(n=e.memory&&t,i=!0,u=a||0,a=0,s=l.length,o=!0;l&&u<s;u++)if(!1===l[u].apply(t[0],t[1])&&e.stopOnFalse){n=!1;break}o=!1,l&&(c?c.length&&f(c.shift()):n?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;!function r(t){oe.each(t,function(t,n){var i=oe.type(n);"function"===i?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==i&&r(n)})}(arguments),o?s=l.length:n&&(a=t,f(n))}return this},remove:function(){return l&&oe.each(arguments,function(e,t){for(var n;(n=oe.inArray(t,l,n))>-1;)l.splice(n,1),o&&(n<=s&&s--,n<=u&&u--)}),this},has:function(e){return oe.inArray(e,l)>-1},empty:function(){return l=[],this},disable:function(){return l=c=n=t,this},disabled:function(){return!l},lock:function(){return c=t,n||p.disable(),this},locked:function(){return!c},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!l||i&&!c||(o?c.push(t):f(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},oe.extend({Deferred:function(e){var t=[["resolve","done",oe.Callbacks("once memory"),"resolved"],["reject","fail",oe.Callbacks("once memory"),"rejected"],["notify","progress",oe.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return oe.Deferred(function(n){oe.each(t,function(t,o){var a=o[0],s=oe.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&oe.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?oe.extend(e,r):r}},i={};return r.pipe=r.then,oe.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=ee.call(arguments),a=o.length,s=1!==a||e&&oe.isFunction(e.promise)?a:0,u=1===s?e:oe.Deferred(),l=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?ee.call(arguments):i,r===t?u.notifyWith(n,r):--s||u.resolveWith(n,r)}};if(a>1)for(t=new Array(a),n=new Array(a),r=new Array(a);i<a;i++)o[i]&&oe.isFunction(o[i].promise)?o[i].promise().done(l(i,r,o)).fail(u.reject).progress(l(i,n,t)):--s;return s||u.resolveWith(r,o),u.promise()}}),oe.support=function(){var t,n,r,i,o,a,s,u,l,c,f=U.createElement("div");if(f.setAttribute("className","t"),f.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=f.getElementsByTagName("*"),r=f.getElementsByTagName("a")[0],!n||!r||!n.length)return{};o=(i=U.createElement("select")).appendChild(U.createElement("option")),a=f.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==f.className,leadingWhitespace:3===f.firstChild.nodeType,tbody:!f.getElementsByTagName("tbody").length,htmlSerialize:!!f.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:o.selected,enctype:!!U.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==U.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===U.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,i.disabled=!0,t.optDisabled=!o.disabled;try{delete f.test}catch(p){t.deleteExpando=!1}(a=U.createElement("input")).setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),(s=U.createDocumentFragment()).appendChild(a),t.appendChecked=a.checked,t.checkClone=s.cloneNode(!0).cloneNode(!0).lastChild.checked,f.attachEvent&&(f.attachEvent("onclick",function(){t.noCloneEvent=!1}),f.cloneNode(!0).click());for(c in{submit:!0,change:!0,focusin:!0})f.setAttribute(u="on"+c,"t"),t[c+"Bubbles"]=u in e||!1===f.attributes[u].expando;return f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===f.style.backgroundClip,oe(function(){var n,r,i,o="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",a=U.getElementsByTagName("body")[0];a&&((n=U.createElement("div")).style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(f),f.innerHTML="<table><tr><td></td><td>t</td></tr></table>",(i=f.getElementsByTagName("td"))[0].style.cssText="padding:0;margin:0;border:0;display:none",l=0===i[0].offsetHeight,i[0].style.display="",i[1].style.display="none",t.reliableHiddenOffsets=l&&0===i[0].offsetHeight,f.innerHTML="",f.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===f.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==a.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(f,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(f,null)||{width:"4px"}).width,(r=f.appendChild(U.createElement("div"))).style.cssText=f.style.cssText=o,r.style.marginRight=r.style.width="0",f.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),"undefined"!=typeof f.style.zoom&&(f.innerHTML="",f.style.cssText=o+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===f.offsetWidth,f.style.display="block",f.innerHTML="<div></div>",f.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==f.offsetWidth,a.style.zoom=1),a.removeChild(n),n=f=i=r=null)}),n=i=s=o=r=a=null,t}();var xe=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,we=/([A-Z])/g;oe.extend({cache:{},expando:"jQuery"+("1.9.0"+Math.random()).replace(/\D/g,""),noData:{"embed":!0,"object":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000","applet":!0},hasData:function(e){return!!(e=e.nodeType?oe.cache[e[oe.expando]]:e[oe.expando])&&!s(e)},data:function(e,t,n){return i(e,t,n,!1)},removeData:function(e,t){return o(e,t,!1)},_data:function(e,t,n){return i(e,t,n,!0)},_removeData:function(e,t){return o(e,t,!0)},acceptData:function(e){var t=e.nodeName&&oe.noData[e.nodeName.toLowerCase()];return!t||!0!==t&&e.getAttribute("classid")===t}}),oe.fn.extend({data:function(e,n){var r,i,o=this[0],s=0,u=null;if(e===t){if(this.length&&(u=oe.data(o),1===o.nodeType&&!oe._data(o,"parsedAttrs"))){for(r=o.attributes;s<r.length;s++)(i=r[s].name).indexOf("data-")||(i=oe.camelCase(i.substring(5)),a(o,i,u[i]));oe._data(o,"parsedAttrs",!0)}return u}return"object"==typeof e?this.each(function(){oe.data(this,e)}):oe.access(this,function(n){if(n===t)return o?a(o,e,oe.data(o,e)):null;this.each(function(){oe.data(this,e,n)})},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){oe.removeData(this,e)})}}),oe.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=oe._data(e,t),n&&(!r||oe.isArray(n)?r=oe._data(e,t,oe.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=oe.queue(e,t),r=n.length,i=n.shift(),o=oe._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){oe.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return oe._data(e,n)||oe._data(e,n,{empty:oe.Callbacks("once memory").add(function(){oe._removeData(e,t+"queue"),oe._removeData(e,n)})})}}),oe.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),arguments.length<r?oe.queue(this[0],e):n===t?this:this.each(function(){var t=oe.queue(this,e,n);oe._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&oe.dequeue(this,e)})},dequeue:function(e){return this.each(function(){oe.dequeue(this,e)})},delay:function(e,t){return e=oe.fx?oe.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=oe.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};for("string"!=typeof e&&(n=e,e=t),e=e||"fx";s--;)(r=oe._data(a[s],e+"queueHooks"))&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var Te,Ne,Ce=/[\t\r\n]/g,ke=/\r/g,Ee=/^(?:input|select|textarea|button|object)$/i,Se=/^(?:a|area)$/i,Ae=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,je=/^(?:checked|selected)$/i,De=oe.support.getSetAttribute,Le=oe.support.input;oe.fn.extend({attr:function(e,t){return oe.access(this,oe.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){oe.removeAttr(this,e)})},prop:function(e,t){return oe.access(this,oe.prop,e,t,arguments.length>1)},removeProp:function(e){return e=oe.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(oe.isFunction(e))return this.each(function(t){oe(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(se)||[];a<s;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Ce," "):" ")){for(o=0;i=t[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");n.className=oe.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(oe.isFunction(e))return this.each(function(t){oe(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(se)||[];a<s;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Ce," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");n.className=e?oe.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return oe.isFunction(e)?this.each(function(n){oe(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n)for(var i,o=0,a=oe(this),s=t,u=e.match(se)||[];i=u[o++];)a[(s=r?s:!a.hasClass(i))?"addClass":"removeClass"](i);else"undefined"!==n&&"boolean"!==n||(this.className&&oe._data(this,"__className__",this.className),this.className=this.className||!1===e?"":oe._data(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;n<r;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(Ce," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=oe.isFunction(e),this.each(function(r){var o,a=oe(this);1===this.nodeType&&(null==(o=i?e.call(this,r,a.val()):e)?o="":"number"==typeof o?o+="":oe.isArray(o)&&(o=oe.map(o,function(e){return null==e?"":e+""})),(n=oe.valHooks[this.type]||oe.valHooks[this.nodeName.toLowerCase()])&&"set"in n&&n.set(this,o,"value")!==t||(this.value=o))});if(o)return(n=oe.valHooks[o.type]||oe.valHooks[o.nodeName.toLowerCase()])&&"get"in n&&(r=n.get(o,"value"))!==t?r:"string"==typeof(r=o.value)?r.replace(ke,""):null==r?"":r}}}),oe.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||i<0,a=o?null:[],s=o?i+1:r.length,u=i<0?s:o?i:0;u<s;u++)if(((n=r[u]).selected||u===i)&&(oe.support.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!oe.nodeName(n.parentNode,"optgroup"))){if(t=oe(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=oe.makeArray(t);return oe(e).find("option").each(function(){this.selected=oe.inArray(oe(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return"undefined"==typeof e.getAttribute?oe.prop(e,n,r):((a=1!==s||!oe.isXMLDoc(e))&&(n=n.toLowerCase(),o=oe.attrHooks[n]||(Ae.test(n)?Ne:Te)),r===t?o&&a&&"get"in o&&null!==(i=o.get(e,n))?i:("undefined"!=typeof e.getAttribute&&(i=e.getAttribute(n)),null==i?t:i):null!==r?o&&a&&"set"in o&&(i=o.set(e,r,n))!==t?i:(e.setAttribute(n,r+""),r):void oe.removeAttr(e,n))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(se);if(o&&1===e.nodeType)for(;n=o[i++];)r=oe.propFix[n]||n,Ae.test(n)?!De&&je.test(n)?e[oe.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:oe.attr(e,n,""),e.removeAttribute(De?n:r)},attrHooks:{type:{set:function(e,t){if(!oe.support.radioValue&&"radio"===t&&oe.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return(1!==a||!oe.isXMLDoc(e))&&(n=oe.propFix[n]||n,o=oe.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):Ee.test(e.nodeName)||Se.test(e.nodeName)&&e.href?0:t}}}}),Ne={get:function(e,n){var r=oe.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?Le&&De?null!=i:je.test(n)?e[oe.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&!1!==o.value?n.toLowerCase():t},set:function(e,t,n){return!1===t?oe.removeAttr(e,n):Le&&De||!je.test(n)?e.setAttribute(!De&&oe.propFix[n]||n,n):e[oe.camelCase("default-"+n)]=e[n]=!0,n}},Le&&De||(oe.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return oe.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,t,n){if(!oe.nodeName(e,"input"))return Te&&Te.set(e,t,n);e.defaultValue=t}}),De||(Te=oe.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},oe.attrHooks.contenteditable={get:Te.get,set:function(e,t,n){Te.set(e,""!==t&&t,n)}},oe.each(["width","height"],function(e,t){oe.attrHooks[t]=oe.extend(oe.attrHooks[t],{set:function(e,n){if(""===n)return e.setAttribute(t,"auto"),n}})})),oe.support.hrefNormalized||(oe.each(["href","src","width","height"],function(e,n){oe.attrHooks[n]=oe.extend(oe.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),oe.each(["href","src"],function(e,t){oe.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),oe.support.style||(oe.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),oe.support.optSelected||(oe.propHooks.selected=oe.extend(oe.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),oe.support.enctype||(oe.propFix.enctype="encoding"),oe.support.checkOn||oe.each(["radio","checkbox"],function(){oe.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),oe.each(["radio","checkbox"],function(){oe.valHooks[this]=oe.extend(oe.valHooks[this],{set:function(e,t){if(oe.isArray(t))return e.checked=oe.inArray(oe(e).val(),t)>=0}})});var He=/^(?:input|select|textarea)$/i,Me=/^key/,qe=/^(?:mouse|contextmenu)|click/,_e=/^(?:focusinfocus|focusoutblur)$/,Fe=/^([^.]*)(?:\.(.+)|)$/;oe.event={global:{},add:function(e,n,r,i,o){var a,s,u,l,c,f,p,d,h,g,m,y=3!==e.nodeType&&8!==e.nodeType&&oe._data(e);if(y){for(r.handler&&(r=(a=r).handler,o=a.selector),r.guid||(r.guid=oe.guid++),(l=y.events)||(l=y.events={}),(s=y.handle)||((s=y.handle=function(e){return void 0===oe||e&&oe.event.triggered===e.type?t:oe.event.dispatch.apply(s.elem,arguments)}).elem=e),c=(n=(n||"").match(se)||[""]).length;c--;)h=m=(u=Fe.exec(n[c])||[])[1],g=(u[2]||"").split(".").sort(),p=oe.event.special[h]||{},h=(o?p.delegateType:p.bindType)||h,p=oe.event.special[h]||{},f=oe.extend({type:h,origType:m,data:i,handler:r,guid:r.guid,selector:o,needsContext:o&&oe.expr.match.needsContext.test(o),namespace:g.join(".")},a),(d=l[h])||((d=l[h]=[]).delegateCount=0,p.setup&&!1!==p.setup.call(e,i,g,s)||(e.addEventListener?e.addEventListener(h,s,!1):e.attachEvent&&e.attachEvent("on"+h,s))),p.add&&(p.add.call(e,f),f.handler.guid||(f.handler.guid=r.guid)),o?d.splice(d.delegateCount++,0,f):d.push(f),oe.event.global[h]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,m=oe.hasData(e)&&oe._data(e);if(m&&(u=m.events)){for(l=(t=(t||"").match(se)||[""]).length;l--;)if(s=Fe.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){for(f=oe.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,m.handle)||oe.removeEvent(e,d,m.handle),delete u[d])}else for(d in u)oe.event.remove(e,d+t[l],n,r,!0);oe.isEmptyObject(u)&&(delete m.handle,oe._removeData(e,"events"))}},trigger:function(n,r,i,o){var a,s,u,l,c,f,p,d=[i||U],h=n.type||n,g=n.namespace?n.namespace.split("."):[];if(s=u=i=i||U,3!==i.nodeType&&8!==i.nodeType&&!_e.test(h+oe.event.triggered)&&(h.indexOf(".")>=0&&(h=(g=h.split(".")).shift(),g.sort()),c=h.indexOf(":")<0&&"on"+h,n=n[oe.expando]?n:new oe.Event(h,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=g.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:oe.makeArray(r,[n]),p=oe.event.special[h]||{},o||!p.trigger||!1!==p.trigger.apply(i,r))){if(!o&&!p.noBubble&&!oe.isWindow(i)){for(l=p.delegateType||h,_e.test(l+h)||(s=s.parentNode);s;s=s.parentNode)d.push(s),u=s;u===(i.ownerDocument||U)&&d.push(u.defaultView||u.parentWindow||e)}for(a=0;(s=d[a++])&&!n.isPropagationStopped();)n.type=a>1?l:p.bindType||h,(f=(oe._data(s,"events")||{})[n.type]&&oe._data(s,"handle"))&&f.apply(s,r),(f=c&&s[c])&&oe.acceptData(s)&&f.apply&&!1===f.apply(s,r)&&n.preventDefault();if(n.type=h,!o&&!n.isDefaultPrevented()&&(!p._default||!1===p._default.apply(i.ownerDocument,r))&&("click"!==h||!oe.nodeName(i,"a"))&&oe.acceptData(i)&&c&&i[h]&&!oe.isWindow(i)){(u=i[c])&&(i[c]=null),oe.event.triggered=h;try{i[h]()}catch(m){}oe.event.triggered=t,u&&(i[c]=u)}return n.result}},dispatch:function(e){e=oe.event.fix(e);var n,r,i,o,a,s=[],u=ee.call(arguments),l=(oe._data(this,"events")||{})[e.type]||[],c=oe.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,e)){for(s=oe.event.handlers.call(this,e,l),n=0;(o=s[n++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,r=0;(a=o.handlers[r++])&&!e.isImmediatePropagationStopped();)e.namespace_re&&!e.namespace_re.test(a.namespace)||(e.handleObj=a,e.data=a.data,(i=((oe.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))!==t&&!1===(e.result=i)&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(!0!==l.disabled||"click"!==e.type){for(i=[],r=0;r<u;r++)i[o=(a=n[r]).selector+" "]===t&&(i[o]=a.needsContext?oe(o,this).index(l)>=0:oe.find(o,this,null,[l]).length),i[o]&&i.push(a);i.length&&s.push({elem:l,handlers:i})}return u<n.length&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[oe.expando])return e;var t,n,r=e,i=oe.event.fixHooks[e.type]||{},o=i.props?this.props.concat(i.props):this.props;for(e=new oe.Event(r),t=o.length;t--;)e[n=o[t]]=r[n];return e.target||(e.target=r.srcElement||U),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,i.filter?i.filter(e,r):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,a=n.button,s=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=(r=e.target.ownerDocument||U).documentElement,o=r.body,e.pageX=n.clientX+(i&&i.scrollLeft||o&&o.scrollLeft||0)-(i&&i.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(i&&i.scrollTop||o&&o.scrollTop||0)-(i&&i.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&s&&(e.relatedTarget=s===e.target?n.toElement:s),e.which||a===t||(e.which=1&a?1:2&a?3:4&a?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){if(oe.nodeName(this,"input")&&"checkbox"===this.type&&this.click)return this.click(),!1}},focus:{trigger:function(){if(this!==U.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){if(this===U.activeElement&&this.blur)return this.blur(),!1},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=oe.extend(new oe.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?oe.event.trigger(i,null,t):oe.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},oe.removeEvent=U.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&("undefined"==typeof e[r]&&(e[r]=null),e.detachEvent(r,n))},oe.Event=function(e,t){if(!(this instanceof oe.Event))return new oe.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||!1===e.returnValue||e.getPreventDefault&&e.getPreventDefault()?u:l):this.type=e,t&&oe.extend(this,t),this.timeStamp=e&&e.timeStamp||oe.now(),this[oe.expando]=!0},oe.Event.prototype={isDefaultPrevented:l,isPropagationStopped:l,isImmediatePropagationStopped:l,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=u,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=u,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u,this.stopPropagation()}},oe.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){oe.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||oe.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),oe.support.submitBubbles||(oe.event.special.submit={setup:function(){if(oe.nodeName(this,"form"))return!1;oe.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=oe.nodeName(n,"input")||oe.nodeName(n,"button")?n.form:t;r&&!oe._data(r,"submitBubbles")&&(oe.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),oe._data(r,"submitBubbles",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&oe.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(oe.nodeName(this,"form"))return!1;oe.event.remove(this,"._submit")}}),oe.support.changeBubbles||(oe.event.special.change={setup:function(){if(He.test(this.nodeName))return"checkbox"!==this.type&&"radio"!==this.type||(oe.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),oe.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),oe.event.simulate("change",this,e,!0)})),!1;oe.event.add(this,"beforeactivate._change",function(e){var t=e.target;He.test(t.nodeName)&&!oe._data(t,"changeBubbles")&&(oe.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||oe.event.simulate("change",this.parentNode,e,!0)}),oe._data(t,"changeBubbles",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type)return e.handleObj.handler.apply(this,arguments)},teardown:function(){return oe.event.remove(this,"._change"),!He.test(this.nodeName)}}),oe.support.focusinBubbles||oe.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){oe.event.simulate(t,e.target,oe.event.fix(e),!0)};oe.event.special[t]={setup:function(){0==n++&&U.addEventListener(e,r,!0)},teardown:function(){0==--n&&U.removeEventListener(e,r,!0)}}}),oe.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(s in e)this.on(s,n,r,e[s],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),!1===i)i=l;else if(!i)return this;return 1===o&&(a=i,(i=function(e){return oe().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=oe.guid++)),this.each(function(){oe.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,oe(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return!1!==n&&"function"!=typeof n||(r=n,n=t),!1===r&&(r=l),this.each(function(){oe.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){oe.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return oe.event.trigger(e,t,n,!0)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){oe.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Me.test(t)&&(oe.event.fixHooks[t]=oe.event.keyHooks),qe.test(t)&&(oe.event.fixHooks[t]=oe.event.mouseHooks)}),function(e,t){function n(e){return le.test(e+"")}function r(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>T.cacheLength&&delete e[t.shift()],e[n]=r}}function i(e){return e[O]=!0,e}function o(e){var t=j.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function a(e,t,n,r){var i,o,a,s,u,f,p,d,h,g;if((t?t.ownerDocument||t:B)!==j&&A(t),t=t||j,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!L&&!r){if(i=ce.exec(e))if(a=i[1]){if(9===s){if(!(o=t.getElementById(a))||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&_(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return V.apply(n,Y.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&P.getByClassName&&t.getElementsByClassName)return V.apply(n,Y.call(t.getElementsByClassName(a),0)),n}if(P.qsa&&!H.test(e)){if(p=!0,d=O,h=t,g=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(f=l(e),(p=t.getAttribute("id"))?d=p.replace(de,"\\$&"):t.setAttribute("id",d),d="[id='"+d+"'] ",u=f.length;u--;)f[u]=d+c(f[u]);h=ue.test(e)&&t.parentNode||t,g=f.join(",")}if(g)try{return V.apply(n,Y.call(h.querySelectorAll(g),0)),n}catch(m){}finally{p||t.removeAttribute("id")}}}return v(e.replace(te,"$1"),t,n,r)}function s(e,t){for(var n=e&&t&&e.nextSibling;n;n=n.nextSibling)if(n===t)return-1;return e?1:-1}function u(e){return i(function(t){return t=+t,i(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function l(e,t){var n,r,i,o,s,u,l,c=I[e+" "];if(c)return t?0:c.slice(0);for(s=e,u=[],l=T.preFilter;s;){n&&!(r=ne.exec(s))||(r&&(s=s.slice(r[0].length)||s),u.push(i=[])),n=!1,(r=re.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(te," ")}),s=s.slice(n.length));for(o in T.filter)!(r=se[o].exec(s))||l[o]&&!(r=l[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?a.error(e):I(e,u).slice(0)}function c(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function f(e,t,n){var r=t.dir,i=n&&"parentNode"===t.dir,o=W++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,u,l,c=R+" "+o;if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i)if(l=t[O]||(t[O]={}),(u=l[r])&&u[0]===c){if(!0===(s=u[1])||s===w)return!0===s}else if(u=l[r]=[c],u[1]=e(t,n,a)||w,!0===u[1])return!0}}function p(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function d(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function h(e,t,n,r,o,a){return r&&!r[O]&&(r=h(r)),o&&!o[O]&&(o=h(o,a)),i(function(i,a,s,u){var l,c,f,p=[],h=[],g=a.length,m=i||y(t||"*",s.nodeType?[s]:s,[]),v=!e||!i&&t?m:d(m,p,e,s,u),b=n?o||(i?e:g||r)?[]:a:v;if(n&&n(v,b,s,u),r)for(l=d(b,h),r(l,[],s,u),c=l.length;c--;)(f=l[c])&&(b[h[c]]=!(v[h[c]]=f));if(i){if(o||e){if(o){for(l=[],c=b.length;c--;)(f=b[c])&&l.push(v[c]=f);o(null,b=[],l,u)}for(c=b.length;c--;)(f=b[c])&&(l=o?J.call(i,f):p[c])>-1&&(i[l]=!(a[l]=f))}}else b=d(b===a?b.splice(g,b.length):b),o?o(null,a,b,u):V.apply(a,b)})}function g(e){for(var t,n,r,i=e.length,o=T.relative[e[0].type],a=o||T.relative[" "],s=o?1:0,u=f(function(e){return e===t},a,!0),l=f(function(e){return J.call(t,e)>-1},a,!0),d=[function(e,n,r){return!o&&(r||n!==S)||((t=n).nodeType?u(e,n,r):l(e,n,r))}];s<i;s++)if(n=T.relative[e[s].type])d=[f(p(d),n)];else{if((n=T.filter[e[s].type].apply(null,e[s].matches))[O]){for(r=++s;r<i&&!T.relative[e[r].type];r++);return h(s>1&&p(d),s>1&&c(e.slice(0,s-1)).replace(te,"$1"),n,s<r&&g(e.slice(s,r)),r<i&&g(e=e.slice(r)),r<i&&c(e))}d.push(n)}return p(d)}function m(e,t){var n=0,r=t.length>0,o=e.length>0,s=function(i,s,u,l,c){var f,p,h,g=[],m=0,y="0",v=i&&[],b=null!=c,x=S,N=i||o&&T.find.TAG("*",c&&s.parentNode||s),C=R+=null==x?1:Math.E;for(b&&(S=s!==j&&s,w=n);null!=(f=N[y]);y++){if(o&&f){for(p=0;h=e[p];p++)if(h(f,s,u)){l.push(f);break}b&&(R=C,w=++n)}r&&((f=!h&&f)&&m--,i&&v.push(f))}if(m+=y,r&&y!==m){for(p=0;h=t[p];p++)h(v,g,s,u);if(i){if(m>0)for(;y--;)v[y]||g[y]||(g[y]=U.call(l));g=d(g)}V.apply(l,g),b&&!i&&g.length>0&&m+t.length>1&&a.uniqueSort(l)}return b&&(R=C,S=x),v};return r?i(s):s}function y(e,t,n){for(var r=0,i=t.length;r<i;r++)a(e,t[r],n);return n}function v(e,t,n,r){var i,o,a,s,u,f=l(e);if(!r&&1===f.length){if((o=f[0]=f[0].slice(0)).length>2&&"ID"===(a=o[0]).type&&9===t.nodeType&&!L&&T.relative[o[1].type]){if(!(t=T.find.ID(a.matches[0].replace(ge,me),t)[0]))return n;e=e.slice(o.shift().value.length)}for(i=se.needsContext.test(e)?-1:o.length-1;i>=0&&(a=o[i],!T.relative[s=a.type]);i--)if((u=T.find[s])&&(r=u(a.matches[0].replace(ge,me),ue.test(o[0].type)&&t.parentNode||t))){if(o.splice(i,1),!(e=r.length&&c(o)))return V.apply(n,Y.call(r,0)),n;break}}return k(e,f)(r,t,L,n,ue.test(e)),n}function b(){}var x,w,T,N,C,k,E,S,A,j,D,L,H,M,q,_,F,O="sizzle"+-new Date,B=e.document,P={},R=0,W=0,$=r(),I=r(),z=r(),X=[],U=X.pop,V=X.push,Y=X.slice,J=X.indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(this[t]===e)return t;return-1},G="[\\x20\\t\\r\\n\\f]",Q="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",K=Q.replace("w","w#"),Z="\\["+G+"*("+Q+")"+G+"*(?:([*^$|!~]?=)"+G+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+K+")|)|)"+G+"*\\]",ee=":("+Q+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+Z.replace(3,8)+")*)|.*)\\)|)",te=new RegExp("^"+G+"+|((?:^|[^\\\\])(?:\\\\.)*)"+G+"+$","g"),ne=new RegExp("^"+G+"*,"+G+"*"),re=new RegExp("^"+G+"*([\\x20\\t\\r\\n\\f>+~])"+G+"*"),ie=new RegExp(ee),ae=new RegExp("^"+K+"$"),se={"ID":new RegExp("^#("+Q+")"),"CLASS":new RegExp("^\\.("+Q+")"),"NAME":new RegExp("^\\[name=['\"]?("+Q+")['\"]?\\]"),"TAG":new RegExp("^("+Q.replace("w","w*")+")"),"ATTR":new RegExp("^"+Z),"PSEUDO":new RegExp("^"+ee),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+G+"*(even|odd|(([+-]|)(\\d*)n|)"+G+"*(?:([+-]|)"+G+"*(\\d+)|))"+G+"*\\)|)","i"),"needsContext":new RegExp("^"+G+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+G+"*((?:-\\d)?\\d*)"+G+"*\\)|)(?=[^-]|$)","i")},ue=/[\x20\t\r\n\f]*[+~]/,le=/\{\s*\[native code\]\s*\}/,ce=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,fe=/^(?:input|select|textarea|button)$/i,pe=/^h\d$/i,de=/'|\\/g,he=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,ge=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,me=function(e,t){var n="0x"+t-65536;return n!==n?t:n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320)};try{Y.call(D.childNodes,0)[0].nodeType}catch(ye){Y=function(e){for(var t,n=[];t=this[e];e++)n.push(t);return n}}C=a.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},A=a.setDocument=function(e){var t=e?e.ownerDocument||e:B;return t!==j&&9===t.nodeType&&t.documentElement?(j=t,D=t.documentElement,L=C(t),P.tagNameNoComments=o(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),P.attributes=o(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),P.getByClassName=o(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!(!e.getElementsByClassName||!e.getElementsByClassName("e").length)&&(e.lastChild.className="e",2===e.getElementsByClassName("e").length)}),P.getByName=o(function(e){e.id=O+0,e.innerHTML="<a name='"+O+"'></a><div name='"+O+"'></div>",D.insertBefore(e,D.firstChild);var n=t.getElementsByName&&t.getElementsByName(O).length===2+t.getElementsByName(O+0).length;return P.getIdNotName=!t.getElementById(O),D.removeChild(e),n}),T.attrHandle=o(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&"undefined"!=typeof e.firstChild.getAttribute&&"#"===e.firstChild.getAttribute("href")})?{}:{"href":function(e){return e.getAttribute("href",2)},"type":function(e){return e.getAttribute("type")}},P.getIdNotName?(T.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&!L){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},T.filter.ID=function(e){var t=e.replace(ge,me);return function(e){return e.getAttribute("id")===t}}):(T.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&!L){var n=t.getElementById(e);return n?n.id===e||"undefined"!=typeof n.getAttributeNode&&n.getAttributeNode("id").value===e?[n]:void 0:[]}},T.filter.ID=function(e){var t=e.replace(ge,me);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),T.find.TAG=P.tagNameNoComments?function(e,t){if("undefined"!=typeof t.getElementsByTagName)return t.getElementsByTagName(e)}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i];i++)1===n.nodeType&&r.push(n);return r}return o},T.find.NAME=P.getByName&&function(e,t){if("undefined"!=typeof t.getElementsByName)return t.getElementsByName(name)},T.find.CLASS=P.getByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&!L)return t.getElementsByClassName(e)},M=[],H=[":focus"],(P.qsa=n(t.querySelectorAll))&&(o(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||H.push("\\["+G+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||H.push(":checked")}),o(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&H.push("[*^$]="+G+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||H.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),H.push(",.*:")})),(P.matchesSelector=n(q=D.matchesSelector||D.mozMatchesSelector||D.webkitMatchesSelector||D.oMatchesSelector||D.msMatchesSelector))&&o(function(e){P.disconnectedMatch=q.call(e,"div"),q.call(e,"[s!='']:x"),M.push("!=",ee)}),H=new RegExp(H.join("|")),M=new RegExp(M.join("|")),_=n(D.contains)||D.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},F=D.compareDocumentPosition?function(e,n){var r;return e===n?(E=!0,0):(r=n.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(n))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===t||_(B,e)?-1:n===t||_(B,n)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,a=n.parentNode,u=[e],l=[n];if(e===n)return E=!0,0;if(e.sourceIndex&&n.sourceIndex)return(~n.sourceIndex||1<<31)-(_(B,e)&&~e.sourceIndex||1<<31);if(!o||!a)return e===t?-1:n===t?1:o?-1:a?1:0;if(o===a)return s(e,n);for(r=e;r=r.parentNode;)u.unshift(r);for(r=n;r=r.parentNode;)l.unshift(r);for(;u[i]===l[i];)i++;return i?s(u[i],l[i]):u[i]===B?-1:l[i]===B?1:0},E=!1,[0,0].sort(F),P.detectDuplicates=E,j):j},a.matches=function(e,t){return a(e,null,null,t)},a.matchesSelector=function(e,t){if((e.ownerDocument||e)!==j&&A(e),t=t.replace(he,"='$1']"),P.matchesSelector&&!L&&(!M||!M.test(t))&&!H.test(t))try{var n=q.call(e,t);if(n||P.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(ye){}return a(t,j,null,[e]).length>0},a.contains=function(e,t){return(e.ownerDocument||e)!==j&&A(e),_(e,t)},a.attr=function(e,t){var n;return(e.ownerDocument||e)!==j&&A(e),L||(t=t.toLowerCase()),(n=T.attrHandle[t])?n(e):L||P.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&!0===e[t]?t:n&&n.specified?n.value:null},a.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a.uniqueSort=function(e){var t,n=[],r=1,i=0;if(E=!P.detectDuplicates,e.sort(F),E){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));for(;i--;)e.splice(n[i],1)}return e},N=a.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=N(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=N(t);return n},T=a.selectors={cacheLength:50,createPseudo:i,match:se,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function(e){return e[1]=e[1].replace(ge,me),e[3]=(e[4]||e[5]||"").replace(ge,me),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},"CHILD":function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||a.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&a.error(e[0]),e},"PSEUDO":function(e){var t,n=!e[5]&&e[2];return se.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&ie.test(n)&&(t=l(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{"TAG":function(e){return"*"===e?function(){return!0}:(e=e.replace(ge,me).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},"CLASS":function(e){var t=$[e+" "];return t||(t=new RegExp("(^|"+G+")"+e+"("+G+"|$)"))&&$(e,function(e){return t.test(e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},"ATTR":function(e,t,n){return function(r){var i=a.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.substr(i.length-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t&&(i===n||i.substr(0,n.length+1)===n+"-"))}},"CHILD":function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){for(;g;){for(f=t;f=f[g];)if(s?f.nodeName.toLowerCase()===y:1===f.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){for(d=(l=(c=m[O]||(m[O]={}))[e]||[])[0]===R&&l[1],p=l[0]===R&&l[2],f=d&&m.childNodes[d];f=++d&&f&&f[g]||(p=d=0)||h.pop();)if(1===f.nodeType&&++p&&f===t){c[e]=[R,d,p];break}}else if(v&&(l=(t[O]||(t[O]={}))[e])&&l[0]===R)p=l[1];else for(;(f=++d&&f&&f[g]||(p=d=0)||h.pop())&&((s?f.nodeName.toLowerCase()!==y:1!==f.nodeType)||!++p||(v&&((f[O]||(f[O]={}))[e]=[R,p]),f!==t)););return(p-=i)===r||p%r==0&&p/r>=0}}},"PSEUDO":function(e,t){var n,r=T.pseudos[e]||T.setFilters[e.toLowerCase()]||a.error("unsupported pseudo: "+e);return r[O]?r(t):r.length>1?(n=[e,e,"",t],T.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,n){for(var i,o=r(e,t),a=o.length;a--;)e[i=J.call(e,o[a])]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{"not":i(function(e){var t=[],n=[],r=k(e.replace(te,"$1"));return r[O]?i(function(e,t,n,i){for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),"has":i(function(e){return function(t){return a(e,t).length>0}}),"contains":i(function(e){return function(t){return(t.textContent||t.innerText||N(t)).indexOf(e)>-1}}),"lang":i(function(e){return ae.test(e||"")||a.error("unsupported lang: "+e),e=e.replace(ge,me).toLowerCase(),function(t){var n;do{if(n=L?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),"target":function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},"root":function(e){return e===D},"focus":function(e){return e===j.activeElement&&(!j.hasFocus||j.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},"enabled":function(e){return!1===e.disabled},"disabled":function(e){return!0===e.disabled},"checked":function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},"selected":function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},"empty":function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},"parent":function(e){return!T.pseudos.empty(e)},"header":function(e){return pe.test(e.nodeName)},"input":function(e){return fe.test(e.nodeName)},"button":function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},"text":function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},"first":u(function(){return[0]}),"last":u(function(e,t){return[t-1]}),"eq":u(function(e,t,n){return[n<0?n+t:n]}),"even":u(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),"odd":u(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),"lt":u(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),"gt":u(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}};for(x in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})T.pseudos[x]=function(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}(x);for(x in{submit:!0,reset:!0})T.pseudos[x]=function(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}(x);k=a.compile=function(e,t){var n,r=[],i=[],o=z[e+" "];if(!o){for(t||(t=l(e)),n=t.length;n--;)(o=g(t[n]))[O]?r.push(o):i.push(o);o=z(e,m(i,r))}return o},T.pseudos.nth=T.pseudos.eq,T.filters=b.prototype=T.pseudos,T.setFilters=new b,A(),a.attr=oe.attr,oe.find=a,oe.expr=a.selectors,oe.expr[":"]=oe.expr.pseudos,oe.unique=a.uniqueSort,oe.text=a.getText,oe.isXMLDoc=a.isXML,oe.contains=a.contains}(e);var Oe=/Until$/,Be=/^(?:parents|prev(?:Until|All))/,Pe=/^.[^:#\[\.,]*$/,Re=oe.expr.match.needsContext,We={children:!0,contents:!0,next:!0,prev:!0};oe.fn.extend({find:function(e){var t,n,r;if("string"!=typeof e)return r=this,this.pushStack(oe(e).filter(function(){for(t=0;t<r.length;t++)if(oe.contains(r[t],this))return!0}));for(n=[],t=0;t<this.length;t++)oe.find(e,this[t],n);return n=this.pushStack(oe.unique(n)),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=oe(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(oe.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(f(this,e,!1))},filter:function(e){return this.pushStack(f(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?Re.test(e)?oe(e,this.context).index(this[0])>=0:oe.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=Re.test(e)||"string"!=typeof e?oe(e,t||this.context):0;r<i;r++)for(n=this[r];n&&n.ownerDocument&&n!==t&&11!==n.nodeType;){if(a?a.index(n)>-1:oe.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}return this.pushStack(o.length>1?oe.unique(o):o)},index:function(e){return e?"string"==typeof e?oe.inArray(this[0],oe(e)):oe.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?oe(e,t):oe.makeArray(e&&e.nodeType?[e]:e),r=oe.merge(this.get(),n);return this.pushStack(oe.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),oe.fn.andSelf=oe.fn.addBack,oe.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return oe.dir(e,"parentNode")},parentsUntil:function(e,t,n){return oe.dir(e,"parentNode",n)},next:function(e){return c(e,"nextSibling")},prev:function(e){return c(e,"previousSibling")},nextAll:function(e){return oe.dir(e,"nextSibling")},prevAll:function(e){return oe.dir(e,"previousSibling")},nextUntil:function(e,t,n){return oe.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return oe.dir(e,"previousSibling",n)},siblings:function(e){return oe.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return oe.sibling(e.firstChild)},contents:function(e){return oe.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:oe.merge([],e.childNodes)}},function(e,t){oe.fn[e]=function(n,r){var i=oe.map(this,t,n);return Oe.test(e)||(r=n),r&&"string"==typeof r&&(i=oe.filter(r,i)),i=this.length>1&&!We[e]?oe.unique(i):i,this.length>1&&Be.test(e)&&(i=i.reverse()),this.pushStack(i)}}),oe.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?oe.find.matchesSelector(t[0],e)?[t[0]]:[]:oe.find.matches(e,t)},dir:function(e,n,r){for(var i=[],o=e[n];o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!oe(o).is(r));)1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});var $e="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Ie=/ jQuery\d+="(?:null|\d+)"/g,ze=new RegExp("<(?:"+$e+")[\\s/>]","i"),Xe=/^\s+/,Ue=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Ve=/<([\w:]+)/,Ye=/<tbody/i,Je=/<|&#?\w+;/,Ge=/<(?:script|style|link)/i,Qe=/^(?:checkbox|radio)$/i,Ke=/checked\s*(?:[^=]|=\s*.checked.)/i,Ze=/^$|\/(?:java|ecma)script/i,et=/^true\/(.*)/,tt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:oe.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},rt=p(U).appendChild(U.createElement("div"));nt.optgroup=nt.option,nt.tbody=nt.tfoot=nt.colgroup=nt.caption=nt.thead,nt.th=nt.td,oe.fn.extend({text:function(e){return oe.access(this,function(e){return e===t?oe.text(this):this.empty().append((this[0]&&this[0].ownerDocument||U).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(oe.isFunction(e))return this.each(function(t){oe(this).wrapAll(e.call(this,t))});if(this[0]){var t=oe(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return oe.isFunction(e)?this.each(function(t){oe(this).wrapInner(e.call(this,t))}):this.each(function(){var t=oe(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=oe.isFunction(e);return this.each(function(n){oe(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){oe.nodeName(this,"body")||oe(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=0;null!=(n=this[r]);r++)(!e||oe.filter(e,[n]).length>0)&&(t||1!==n.nodeType||oe.cleanData(b(n)),n.parentNode&&(t&&oe.contains(n.ownerDocument,n)&&m(b(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&oe.cleanData(b(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&oe.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return oe.clone(this,e,t)})},html:function(e){return oe.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(Ie,""):t;if("string"==typeof e&&!Ge.test(e)&&(oe.support.htmlSerialize||!ze.test(e))&&(oe.support.leadingWhitespace||!Xe.test(e))&&!nt[(Ve.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(Ue,"<$1></$2>");try{for(;r<i;r++)1===(n=this[r]||{}).nodeType&&(oe.cleanData(b(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return oe.isFunction(e)||"string"==typeof e||(e=oe(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;(n&&1===this.nodeType||11===this.nodeType)&&(oe(this).remove(),t?t.parentNode.insertBefore(e,t):n.appendChild(e))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=K.apply([],e);var i,o,a,s,u,l,c=0,f=this.length,p=this,m=f-1,y=e[0],v=oe.isFunction(y);if(v||!(f<=1||"string"!=typeof y||oe.support.checkClone)&&Ke.test(y))return this.each(function(i){var o=p.eq(i);v&&(e[0]=y.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(f&&(i=oe.buildFragment(e,this[0].ownerDocument,!1,this),o=i.firstChild,1===i.childNodes.length&&(i=o),o)){for(n=n&&oe.nodeName(o,"tr"),s=(a=oe.map(b(i,"script"),h)).length;c<f;c++)u=i,c!==m&&(u=oe.clone(u,!0,!0),s&&oe.merge(a,b(u,"script"))),r.call(n&&oe.nodeName(this[c],"table")?d(this[c],"tbody"):this[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,oe.map(a,g),c=0;c<s;c++)u=a[c],Ze.test(u.type||"")&&!oe._data(u,"globalEval")&&oe.contains(l,u)&&(u.src?oe.ajax({url:u.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):oe.globalEval((u.text||u.textContent||u.innerHTML||"").replace(tt,"")));i=o=null}return this}}),oe.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){oe.fn[e]=function(e){for(var n,r=0,i=[],o=oe(e),a=o.length-1;r<=a;r++)n=r===a?this:this.clone(!0),oe(o[r])[t](n),Z.apply(i,n.get());return this.pushStack(i)}}),oe.extend({clone:function(e,t,n){var r,i,o,a,s,u=oe.contains(e.ownerDocument,e);if(oe.support.html5Clone||oe.isXMLDoc(e)||!ze.test("<"+e.nodeName+">")?s=e.cloneNode(!0):(rt.innerHTML=e.outerHTML,rt.removeChild(s=rt.firstChild)),!(oe.support.noCloneEvent&&oe.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||oe.isXMLDoc(e)))for(r=b(s),i=b(e),a=0;null!=(o=i[a]);++a)r[a]&&v(o,r[a]);if(t)if(n)for(i=i||b(e),r=r||b(s),a=0;null!=(o=i[a]);a++)y(o,r[a]);else y(e,s);return(r=b(s,"script")).length>0&&m(r,!u&&b(e,"script")),r=i=o=null,s},buildFragment:function(e,t,n,r){for(var i,o,a,s,u,l,c,f=e.length,d=p(t),h=[],g=0;g<f;g++)if((o=e[g])||0===o)if("object"===oe.type(o))oe.merge(h,o.nodeType?[o]:o);else if(Je.test(o)){for(s=s||d.appendChild(t.createElement("div")),a=(Ve.exec(o)||["",""])[1].toLowerCase(),u=nt[a]||nt._default,s.innerHTML=u[1]+o.replace(Ue,"<$1></$2>")+u[2],c=u[0];c--;)s=s.lastChild;if(!oe.support.leadingWhitespace&&Xe.test(o)&&h.push(t.createTextNode(Xe.exec(o)[0])),!oe.support.tbody)for(c=(o="table"!==a||Ye.test(o)?"<table>"!==u[1]||Ye.test(o)?0:s:s.firstChild)&&o.childNodes.length;c--;)oe.nodeName(l=o.childNodes[c],"tbody")&&!l.childNodes.length&&o.removeChild(l);for(oe.merge(h,s.childNodes),s.textContent="";s.firstChild;)s.removeChild(s.firstChild);s=d.lastChild}else h.push(t.createTextNode(o));for(s&&d.removeChild(s),oe.support.appendChecked||oe.grep(b(h,"input"),x),g=0;o=h[g++];)if((!r||-1===oe.inArray(o,r))&&(i=oe.contains(o.ownerDocument,o),s=b(d.appendChild(o),"script"),i&&m(s),n))for(c=0;o=s[c++];)Ze.test(o.type||"")&&n.push(o);return s=null,d},cleanData:function(e,t){for(var n,r,i,o,a=0,s=oe.expando,u=oe.cache,l=oe.support.deleteExpando,c=oe.event.special;null!=(i=e[a]);a++)if((t||oe.acceptData(i))&&(r=i[s],n=r&&u[r])){if(n.events)for(o in n.events)c[o]?oe.event.remove(i,o):oe.removeEvent(i,o,n.handle);u[r]&&(delete u[r],l?delete i[s]:"undefined"!=typeof i.removeAttribute?i.removeAttribute(s):i[s]=null,Q.push(r))}}});var it,ot,at,st=/alpha\([^)]*\)/i,ut=/opacity\s*=\s*([^)]*)/,lt=/^(top|right|bottom|left)$/,ct=/^(none|table(?!-c[ea]).+)/,ft=/^margin/,pt=new RegExp("^("+ae+")(.*)$","i"),dt=new RegExp("^("+ae+")(?!px)[a-z%]+$","i"),ht=new RegExp("^([+-])=("+ae+")","i"),gt={BODY:"block"},mt={position:"absolute",visibility:"hidden",display:"block"},yt={letterSpacing:0,fontWeight:400},vt=["Top","Right","Bottom","Left"],bt=["Webkit","O","Moz","ms"];oe.fn.extend({css:function(e,n){return oe.access(this,function(e,n,r){var i,o,a={},s=0;if(oe.isArray(n)){for(i=ot(e),o=n.length;s<o;s++)a[n[s]]=oe.css(e,n[s],!1,i);return a}return r!==t?oe.style(e,n,r):oe.css(e,n)},e,n,arguments.length>1)},show:function(){return N(this,!0)},hide:function(){return N(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:T(this))?oe(this).show():oe(this).hide()})}}),oe.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=it(e,"opacity");return""===n?"1":n}}}},cssNumber:{"columnCount":!0,"fillOpacity":!0,"fontWeight":!0,"lineHeight":!0,"opacity":!0,"orphans":!0,"widows":!0,"zIndex":!0,"zoom":!0},cssProps:{"float":oe.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=oe.camelCase(n),l=e.style;if(n=oe.cssProps[u]||(oe.cssProps[u]=w(l,u)),s=oe.cssHooks[n]||oe.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(!("string"==(a=typeof r)&&(o=ht.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(oe.css(e,n)),a="number"),null==r||"number"===a&&isNaN(r)||("number"!==a||oe.cssNumber[u]||(r+="px"),oe.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=oe.camelCase(n);return n=oe.cssProps[u]||(oe.cssProps[u]=w(e.style,u)),(s=oe.cssHooks[n]||oe.cssHooks[u])&&"get"in s&&(o=s.get(e,!0,r)),o===t&&(o=it(e,n,i)),"normal"===o&&n in yt&&(o=yt[n]),r?(a=parseFloat(o),!0===r||oe.isNumeric(a)?a||0:o):o},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(ot=function(t){return e.getComputedStyle(t,null)},it=function(e,n,r){var i,o,a,s=r||ot(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||oe.contains(e.ownerDocument,e)||(u=oe.style(e,n)),dt.test(u)&&ft.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):U.documentElement.currentStyle&&(ot=function(e){return e.currentStyle},it=function(e,n,r){var i,o,a,s=r||ot(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),dt.test(u)&&!lt.test(n)&&(i=l.left,(a=(o=e.runtimeStyle)&&o.left)&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u}),oe.each(["height","width"],function(e,t){oe.cssHooks[t]={get:function(e,n,r){if(n)return 0===e.offsetWidth&&ct.test(oe.css(e,"display"))?oe.swap(e,mt,function(){return E(e,t,r)}):E(e,t,r)},set:function(e,n,r){var i=r&&ot(e);return C(0,n,r?k(e,t,r,oe.support.boxSizing&&"border-box"===oe.css(e,"boxSizing",!1,i),i):0)}}}),oe.support.opacity||(oe.cssHooks.opacity={get:function(e,t){return ut.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=oe.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===oe.trim(o.replace(st,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=st.test(o)?o.replace(st,i):o+" "+i)}}),oe(function(){oe.support.reliableMarginRight||(oe.cssHooks.marginRight={get:function(e,t){if(t)return oe.swap(e,{"display":"inline-block"},it,[e,"marginRight"])}}),!oe.support.pixelPosition&&oe.fn.position&&oe.each(["top","left"],function(e,t){oe.cssHooks[t]={get:function(e,n){if(n)return n=it(e,t),dt.test(n)?oe(e).position()[t]+"px":n}}})}),oe.expr&&oe.expr.filters&&(oe.expr.filters.hidden=function(e){return 0===e.offsetWidth&&0===e.offsetHeight||!oe.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||oe.css(e,"display"))},oe.expr.filters.visible=function(e){return!oe.expr.filters.hidden(e)}),oe.each({margin:"",padding:"",border:"Width"},function(e,t){oe.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+vt[r]+t]=o[r]||o[r-2]||o[0];return i}},ft.test(e)||(oe.cssHooks[e+t].set=C)});var xt=/%20/g,wt=/\[\]$/,Tt=/\r?\n/g,Nt=/^(?:submit|button|image|reset)$/i,Ct=/^(?:input|select|textarea|keygen)/i;oe.fn.extend({serialize:function(){return oe.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=oe.prop(this,"elements");return e?oe.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!oe(this).is(":disabled")&&Ct.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!Qe.test(e))}).map(function(e,t){var n=oe(this).val();return null==n?null:oe.isArray(n)?oe.map(n,function(e){return{name:t.name,value:e.replace(Tt,"\r\n")}}):{name:t.name,value:n.replace(Tt,"\r\n")}}).get()}}),oe.param=function(e,n){var r,i=[],o=function(e,t){t=oe.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=oe.ajaxSettings&&oe.ajaxSettings.traditional),oe.isArray(e)||e.jquery&&!oe.isPlainObject(e))oe.each(e,function(){o(this.name,this.value)});else for(r in e)j(r,e[r],n,o);return i.join("&").replace(xt,"+")};var kt,Et,St=oe.now(),At=/\?/,jt=/#.*$/,Dt=/([?&])_=[^&]*/,Lt=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ht=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,qt=/^\/\//,_t=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Ft=oe.fn.load,Ot={},Bt={},Pt="*/".concat("*");try{Et=V.href}catch(Zt){(Et=U.createElement("a")).href="",Et=Et.href}kt=_t.exec(Et.toLowerCase())||[],oe.fn.load=function(e,n,r){if("string"!=typeof e&&Ft)return Ft.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),oe.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(o="POST"),s.length>0&&oe.ajax({url:e,type:o,dataType:"html",data:n}).done(function(e){a=arguments,s.html(i?oe("<div>").append(oe.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,a||[e.responseText,t,e])}),this},oe.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){oe.fn[t]=function(e){return this.on(t,e)}}),oe.each(["get","post"],function(e,n){oe[n]=function(e,r,i,o){return oe.isFunction(r)&&(o=o||i,i=r,r=t),oe.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),oe.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et,type:"GET",isLocal:Ht.test(kt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Pt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":oe.parseJSON,"text xml":oe.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?H(H(e,oe.ajaxSettings),t):H(oe.ajaxSettings,e)},ajaxPrefilter:D(Ot),ajaxTransport:D(Bt),ajax:function(e,n){function r(e,n,r,s){var l,f,v,b,w,N=n;2!==x&&(x=2,u&&clearTimeout(u),i=t,a=s||"",T.readyState=e>0?4:0,r&&(b=M(p,T,r)),e>=200&&e<300||304===e?(p.ifModified&&((w=T.getResponseHeader("Last-Modified"))&&(oe.lastModified[o]=w),(w=T.getResponseHeader("etag"))&&(oe.etag[o]=w)),304===e?(l=!0,N="notmodified"):(N=(l=q(p,b)).state,f=l.data,l=!(v=l.error))):(v=N,!e&&N||(N="error",e<0&&(e=0))),T.status=e,T.statusText=(n||N)+"",l?g.resolveWith(d,[f,N,T]):g.rejectWith(d,[T,N,v]),T.statusCode(y),y=t,c&&h.trigger(l?"ajaxSuccess":"ajaxError",[T,p,l?f:v]),m.fireWith(d,[T,N]),c&&(h.trigger("ajaxComplete",[T,p]),--oe.active||oe.event.trigger("ajaxStop")))}"object"==typeof e&&(n=e,e=t),n=n||{};var i,o,a,s,u,l,c,f,p=oe.ajaxSetup({},n),d=p.context||p,h=p.context&&(d.nodeType||d.jquery)?oe(d):oe.event,g=oe.Deferred(),m=oe.Callbacks("once memory"),y=p.statusCode||{},v={},b={},x=0,w="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!s)for(s={};t=Lt.exec(a);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=b[n]=b[n]||e,v[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(x<2)for(t in e)y[t]=[y[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||w;return i&&i.abort(t),r(0,t),this}};if(g.promise(T).complete=m.add,T.success=T.done,T.error=T.fail,p.url=((e||p.url||Et)+"").replace(jt,"").replace(qt,kt[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=oe.trim(p.dataType||"*").toLowerCase().match(se)||[""],null==p.crossDomain&&(l=_t.exec(p.url.toLowerCase()),p.crossDomain=!(!l||l[1]===kt[1]&&l[2]===kt[2]&&(l[3]||("http:"===l[1]?80:443))==(kt[3]||("http:"===kt[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=oe.param(p.data,p.traditional)),L(Ot,p,n,T),2===x)return T;(c=p.global)&&0==oe.active++&&oe.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Mt.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(At.test(o)?"&":"?")+p.data,delete p.data),!1===p.cache&&(p.url=Dt.test(o)?o.replace(Dt,"$1_="+St++):o+(At.test(o)?"&":"?")+"_="+St++)),p.ifModified&&(oe.lastModified[o]&&T.setRequestHeader("If-Modified-Since",oe.lastModified[o]),oe.etag[o]&&T.setRequestHeader("If-None-Match",oe.etag[o])),(p.data&&p.hasContent&&!1!==p.contentType||n.contentType)&&T.setRequestHeader("Content-Type",p.contentType),T.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Pt+"; q=0.01":""):p.accepts["*"]);for(f in p.headers)T.setRequestHeader(f,p.headers[f]);if(p.beforeSend&&(!1===p.beforeSend.call(d,T,p)||2===x))return T.abort();w="abort";for(f in{success:1,error:1,complete:1})T[f](p[f]);if(i=L(Bt,p,n,T)){T.readyState=1,c&&h.trigger("ajaxSend",[T,p]),p.async&&p.timeout>0&&(u=setTimeout(function(){T.abort("timeout")},p.timeout));try{x=1,i.send(v,r)}catch(Zt){if(!(x<2))throw Zt;r(-1,Zt)}}else r(-1,"No Transport");return T},getScript:function(e,n){return oe.get(e,t,n,"script")},getJSON:function(e,t,n){return oe.get(e,t,n,"json")}}),oe.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return oe.globalEval(e),e}}}),oe.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),oe.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=U.head||oe("head")[0]||U.documentElement;return{send:function(t,i){(n=U.createElement("script")).async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Rt=[],Wt=/(=)\?(?=&|$)|\?\?/;oe.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Rt.pop()||oe.expando+"_"+St++;return this[e]=!0,e}}),oe.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=!1!==n.jsonp&&(Wt.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Wt.test(n.data)&&"data");if(u||"jsonp"===n.dataTypes[0])return o=n.jsonpCallback=oe.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Wt,"$1"+o):!1!==n.jsonp&&(n.url+=(At.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||oe.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Rt.push(o)),s&&oe.isFunction(a)&&a(s[0]),s=a=t}),"script"});var $t,It,zt=0,Xt=e.ActiveXObject&&function(){var e;for(e in $t)$t[e](t,!0)};oe.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&_()||F()}:_,It=oe.ajaxSettings.xhr(),oe.support.cors=!!It&&"withCredentials"in It,(It=oe.support.ajax=!!It)&&oe.ajaxTransport(function(n){if(!n.crossDomain||oe.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,f,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=oe.noop,Xt&&delete $t[a]),i)4!==u.readyState&&u.abort();else{f={},s=u.status,p=u.responseXML,c=u.getAllResponseHeaders(),p&&p.documentElement&&(f.xml=p),"string"==typeof u.responseText&&(f.text=u.responseText);try{l=u.statusText}catch(Zt){l=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=f.text?200:404}}catch(d){i||o(-1,d)}f&&o(s,l,f,c)},n.async?4===u.readyState?setTimeout(r):(a=++zt,Xt&&($t||($t={},oe(e).unload(Xt)),$t[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Ut,Vt,Yt=/^(?:toggle|show|hide)$/,Jt=new RegExp("^(?:([+-])=|)("+ae+")([a-z%]*)$","i"),Gt=/queueHooks$/,Qt=[function(e,t,n){var r,i,o,a,s,u,l,c,f,p=this,d=e.style,h={},g=[],m=e.nodeType&&T(e);n.queue||(null==(c=oe._queueHooks(e,"fx")).unqueued&&(c.unqueued=0,f=c.empty.fire,c.empty.fire=function(){c.unqueued||f()}),c.unqueued++,p.always(function(){p.always(function(){c.unqueued--,oe.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===oe.css(e,"display")&&"none"===oe.css(e,"float")&&(oe.support.inlineBlockNeedsLayout&&"inline"!==S(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",oe.support.shrinkWrapBlocks||p.done(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(r in t)if(o=t[r],Yt.exec(o)){if(delete t[r],u=u||"toggle"===o,o===(m?"hide":"show"))continue;g.push(r)}if(a=g.length){"hidden"in(s=oe._data(e,"fxshow")||oe._data(e,"fxshow",{}))&&(m=s.hidden),u&&(s.hidden=!m),m?oe(e).show():p.done(function(){oe(e).hide()}),p.done(function(){var t;oe._removeData(e,"fxshow");for(t in h)oe.style(e,t,h[t])});for(r=0;r<a;r++)i=g[r],l=p.createTween(i,m?s[i]:0),h[i]=s[i]||oe.style(e,i),i in s||(s[i]=l.start,m&&(l.end=l.start,l.start="width"===i||"height"===i?1:0))}}],Kt={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Jt.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],"px"!==(r=o[3]||(oe.cssNumber[e]?"":"px"))&&s){s=oe.css(i.elem,e,!0)||n||1;do{s/=u=u||".5",oe.style(i.elem,e,s+r)}while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};oe.Animation=oe.extend(P,{tweener:function(e,t){oe.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;r<i;r++)n=e[r],Kt[n]=Kt[n]||[],Kt[n].unshift(t)},prefilter:function(e,t){t?Qt.unshift(e):Qt.push(e)}}),oe.Tween=W,W.prototype={constructor:W,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(oe.cssNumber[n]?"":"px")},cur:function(){var e=W.propHooks[this.prop];return e&&e.get?e.get(this):W.propHooks._default.get(this)},run:function(e){var t,n=W.propHooks[this.prop];return this.options.duration?this.pos=t=oe.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):W.propHooks._default.set(this),this}},W.prototype.init.prototype=W.prototype,W.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=oe.css(e.elem,e.prop,"auto"))&&"auto"!==t?t:0:e.elem[e.prop]},set:function(e){oe.fx.step[e.prop]?oe.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[oe.cssProps[e.prop]]||oe.cssHooks[e.prop])?oe.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},W.propHooks.scrollTop=W.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},oe.each(["toggle","show","hide"],function(e,t){var n=oe.fn[t];oe.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate($(t,!0),e,r,i)}}),oe.fn.extend({fadeTo:function(e,t,n,r){return this.filter(T).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=oe.isEmptyObject(e),o=oe.speed(t,n,r),a=function(){var t=P(this,oe.extend({},e),o);a.finish=function(){t.stop(!0)},(i||oe._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=oe.timers,a=oe._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Gt.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));!t&&r||oe.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=oe._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=oe.timers,a=r?r.length:0;for(n.finish=!0,oe.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),oe.each({slideDown:$("show"),slideUp:$("hide"),slideToggle:$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){oe.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),oe.speed=function(e,t,n){var r=e&&"object"==typeof e?oe.extend({},e):{complete:n||!n&&t||oe.isFunction(e)&&e,duration:e,easing:n&&t||t&&!oe.isFunction(t)&&t};return r.duration=oe.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in oe.fx.speeds?oe.fx.speeds[r.duration]:oe.fx.speeds._default,null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){oe.isFunction(r.old)&&r.old.call(this),r.queue&&oe.dequeue(this,r.queue)},r},oe.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},oe.timers=[],oe.fx=W.prototype.init,oe.fx.tick=function(){var e,n=oe.timers,r=0;for(Ut=oe.now();r<n.length;r++)(e=n[r])()||n[r]!==e||n.splice(r--,1);n.length||oe.fx.stop(),Ut=t},oe.fx.timer=function(e){e()&&oe.timers.push(e)&&oe.fx.start()},oe.fx.interval=13,oe.fx.start=function(){Vt||(Vt=setInterval(oe.fx.tick,oe.fx.interval))},oe.fx.stop=function(){clearInterval(Vt),Vt=null},oe.fx.speeds={slow:600,fast:200,_default:400},oe.fx.step={},oe.expr&&oe.expr.filters&&(oe.expr.filters.animated=function(e){return oe.grep(oe.timers,function(t){return e===t.elem}).length}),oe.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){oe.offset.setOffset(this,e,t)});var n,r,i={top:0,left:0},o=this[0],a=o&&o.ownerDocument;if(a)return n=a.documentElement,oe.contains(n,o)?("undefined"!=typeof o.getBoundingClientRect&&(i=o.getBoundingClientRect()),r=I(a),{top:i.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:i.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):i},oe.offset={setOffset:function(e,t,n){var r=oe.css(e,"position");"static"===r&&(e.style.position="relative");var i,o,a=oe(e),s=a.offset(),u=oe.css(e,"top"),l=oe.css(e,"left"),c={},f={};("absolute"===r||"fixed"===r)&&oe.inArray("auto",[u,l])>-1?(i=(f=a.position()).top,o=f.left):(i=parseFloat(u)||0,o=parseFloat(l)||0),oe.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(c.top=t.top-s.top+i),null!=t.left&&(c.left=t.left-s.left+o),"using"in t?t.using.call(e,c):a.css(c)}},oe.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===oe.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),oe.nodeName(e[0],"html")||(n=e.offset()),n.top+=oe.css(e[0],"borderTopWidth",!0),n.left+=oe.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-oe.css(r,"marginTop",!0),left:t.left-n.left-oe.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||U.documentElement;e&&!oe.nodeName(e,"html")&&"static"===oe.css(e,"position");)e=e.offsetParent;return e||U.documentElement})}}),oe.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);oe.fn[e]=function(i){return oe.access(this,function(e,i,o){var a=I(e);if(o===t)return a?n in a?a[n]:a.document.documentElement[i]:e[i];a?a.scrollTo(r?oe(a).scrollLeft():o,r?o:oe(a).scrollTop()):e[i]=o},e,i,arguments.length,null)}}),oe.each({Height:"height",Width:"width"},function(e,n){oe.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){oe.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(!0===i||!0===o?"margin":"border");return oe.access(this,function(n,r,i){var o;return oe.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?oe.css(n,r,s):oe.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=oe,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return oe})}(window);/**
 * @Follow.js
 * @author zhangxinxu
 * @version
 * @Created: 15-06-25
 * @edited:  17-06-19
 */

(function (global, factory) {
    if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(factory);
    } else {
        global.Follow = factory();
    }
}(this, function (require) {
    if (typeof require == 'function') {
        require('common/ui/Enhance');
    }

    /**
     * 绝对定位元素的定位效果
     * 针对所有浏览器
     * 自动含边界判断
     * 可用在DropDown, Tips等组件上
     * 支持链式调用和模块化调用
     * @example
     * $().follow(trigger, options);
     * new Follow(trigger, target, options);

     * 文档见：http://www.zhangxinxu.com/wordpress/?p=1328 position()方法
    **/

    $.fn.follow = function(trigger, options) {
        var defaults  = {
            offsets: {
                x: 0,
                y: 0
            },
            // trigger-target
            position: '4-1',
            // 边缘位置自动调整
            edgeAdjust: true
        };

        var params = $.extend({}, defaults, options || {});

        return $(this).each(function() {
            var target = $(this);

            if (trigger.length == 0) {
                return;
            }
            var pos, triL, triT, tarL, tarT;
            var triH = 0;
            var triW = 0;
            var tarH = target.data('height');
            var tarW = target.data('width');
            //缓存目标对象高度，宽度，提高鼠标跟随时显示性能，元素隐藏时缓存清除
            if (!tarH) {
                tarH = target.outerHeight();
            }
            if (!tarW) {
                tarW = target.outerWidth();
            }

            var st = $(window).scrollTop();
            var sl = $(window).scrollLeft();

            var offX = parseInt(params.offsets.x, 10) || 0;
            var offY = parseInt(params.offsets.y, 10) || 0;

            var winWidth = $(window).width();
            var winHeight = $(window).height();

            var position = params.position;
            if (typeof position != 'string' && position.length == 2) {
                var left = position[0] + offX;
                var top = position[1] + offY;
                if (params.edgeAdjust == true) {
                    if (left + tarW > winWidth + sl - 5) {
                        left = winWidth + sl - 5 - tarW;
                    }
                    if (top + tarH > winHeight + st - 5) {
                        top = winHeight + st - 5 - tarH;
                    }
                }
                //浮动框显示
                target.css({
                    position: 'absolute',
                    left: left,
                    top: top
                }).attr('data-align', '3-1');

                // z-index自动最高
                if (target.zIndex) {
                    target.zIndex();
                }
                return;
            }

            pos = trigger.offset();
            triH = trigger.outerHeight();
            triW = trigger.outerWidth();
            triL = pos.left;
            triT = pos.top;

            // 合法的位置关系数据
            var arrLegalPos = ['4-1', '1-4', '5-7', '2-3', '2-1', '6-8', '3-4', '4-3', '8-6', '1-2', '7-5', '3-2'];
            // 设定的对齐关系
            var align = params.position;
            // 是否对齐匹配的标志量
            var alignMatch = false;
            // 确定定位的方向
            var strDirect;

            // 遍历，以确定设定的对齐是否有匹配
            $.each(arrLegalPos, function(i, n) {
                if (n === align) {
                    alignMatch = true;

                    return false;
                }
            });

            // 如果没有匹配的对齐方式，使用默认的对齐方式
            if (!alignMatch) {
                align = defaults.position;
            }

            // 确定定位方位，是上下左右的哪个
            var funDirect = function(a) {
                var dir = 'bottom';
                //确定方向
                switch (a) {
                    case '1-4': case '5-7': case '2-3': {
                        dir = 'top';
                        break;
                    }
                    case '2-1': case '6-8': case '3-4': {
                        dir = 'right';
                        break;
                    }
                    case '1-2': case '8-6': case '4-3': {
                        dir = 'left';
                        break;
                    }
                    case '4-1': case '7-5': case '3-2': {
                        dir = 'bottom';
                        break;
                    }
                }

                return dir;
            };

            // 居中判断
            var funCenterJudge = function(a) {
                if (a === '5-7' || a === '6-8' || a === '8-6' || a === '7-5') {
                    return true;
                }

                return false;
            };

            // 是否超出边界的判断
            var funJudge = function(dir) {
                var totalHeight = 0;
                var totalWidth = 0;

                // 4个方位分别判断
                if (dir === 'right') {
                    totalWidth = triL + triW + tarW + offX;
                    if (totalWidth > $(window).width()) {
                        return false;
                    }
                } else if (dir === 'bottom') {
                    totalHeight = triT + triH + tarH + offY;
                    if (totalHeight > st + $(window).height()) {
                        return false;
                    }
                } else if (dir === 'top') {
                    totalHeight = tarH + offY;
                    if (totalHeight > triT - st) {
                        return false;
                    }
                } else if (dir === 'left') {
                    totalWidth = tarW + offX;
                    if (totalWidth > triL) {
                        return false;
                    }
                }

                return true;
            };

            //此时的方向
            strDirect = funDirect(align);

            //边缘过界判断
            if (params.edgeAdjust) {
                //根据位置是否溢出显示界面重新判定定位
                if (funJudge(strDirect)) {
                    //该方向不溢出
                    (function() {
                        if (funCenterJudge(align)) {
                            return;
                        }
                        var obj = {
                            top: {
                                right: '2-3',
                                left: '1-4'
                            },
                            right: {
                                top: '2-1',
                                bottom: '3-4'
                            },
                            bottom: {
                                right: '3-2',
                                left: '4-1'
                            },
                            left: {
                                top: '1-2',
                                bottom: '4-3'
                            }
                        };
                        var o = obj[strDirect];
                        var name;
                        if (o) {
                            for (name in o) {
                                if (!funJudge(name)) {
                                    align = o[name];
                                }
                            }
                        }
                    })();
                } else {
                    //该方向溢出
                    (function() {
                        if (funCenterJudge(align)) {
                            var center = {
                                '5-7': '7-5',
                                '7-5': '5-7',
                                '6-8': '8-6',
                                '8-6': '6-8'
                            };
                            align = center[align];
                        } else {
                            var obj = {
                                top: {
                                    left: '3-2',
                                    right: '4-1'
                                },
                                right: {
                                    bottom: '1-2',
                                    top: '4-3'
                                },
                                bottom: {
                                    left: '2-3',
                                    right: '1-4'
                                },
                                left: {
                                    bottom: '2-1',
                                    top: '3-4'
                                }
                            };
                            var o = obj[strDirect];
                            var arr = [];
                            for (var name in o) {
                                arr.push(name);
                            }
                            if (funJudge(arr[0]) || !funJudge(arr[1])) {
                                align = o[arr[0]];
                            } else {
                                align = o[arr[1]];
                            }
                        }
                    })();
                }
            }

            // 是否变换了方向
            var strNewDirect = funDirect(align);
            var strFirst = align.split('-')[0];

            //确定left, top值
            switch (strNewDirect) {
                case 'top': {
                    tarT = triT - tarH;
                    if (strFirst == '1') {
                        tarL = triL;
                    } else if (strFirst === '5') {
                        tarL = triL - (tarW - triW) / 2;
                    } else {
                        tarL = triL - (tarW - triW);
                    }
                    break;
                }
                case 'right': {
                    tarL = triL + triW ;
                    if (strFirst == '2') {
                        tarT = triT;
                    } else if (strFirst === '6') {
                        tarT = triT - (tarH - triH) / 2;
                    } else {
                        tarT = triT - (tarH - triH);
                    }
                    break;
                }
                case 'bottom': {
                    tarT = triT + triH;
                    if (strFirst == '4') {
                        tarL = triL;
                    } else if (strFirst === '7') {
                        tarL = triL - (tarW - triW) / 2;
                    } else {
                        tarL = triL - (tarW - triW);
                    }
                    break;
                }
                case 'left': {
                    tarL = triL - tarW;
                    if (strFirst == '2') {
                        tarT = triT;
                    } else if (strFirst === '6') {
                        tarT = triT - (tarW - triW) / 2;
                    } else {
                        tarT = triT - (tarH - triH);
                    }
                    break;
                }
            }

            if (params.edgeAdjust && funCenterJudge(align)) {
                // 是居中定位
                // 变更的不是方向，而是offset大小
                // 偏移处理
                if (align == '7-5' || align == '5-7') {
                    // 左右是否超出
                    if (tarL - sl < 0.5 * winWidth) {
                        // 左半边，判断左边缘
                        if (tarL - sl < 0) {
                            tarL = sl;
                        }
                    } else if (tarL - sl + tarW > winWidth) {
                        tarL = winWidth + sl - tarW;
                    }
                    // 下面两个else if 判断上下是否超出
                } else if (tarT - st < 0.5 * winHeight) {
                    // 左半边，判断左边缘
                    if (tarT - st < 0) {
                        tarT = st;
                    }
                } else if (tarT - st + tarH > winHeight) {
                    tarT = winHeight + st - tarH;
                }
            }

            if (strNewDirect == 'top' || strNewDirect == 'left') {
                tarL = tarL - offX;
                tarT = tarT - offY;
            } else {
                tarL = tarL + offX;
                tarT = tarT + offY;
            }

            //浮动框显示
            target.css({
                position: 'absolute',
                left: Math.round(tarL),
                top: Math.round(tarT)
            }).attr('data-align', align);

            // z-index自动最高
            if (target.zIndex) {
                target.zIndex();
            }
        });
    };

    var Follow = function(trigger, target, options) {
        target.follow(trigger, options);
    };

    // Follow.prototype.hide = function() {
    //  target.remove();
    // };

    return Follow;
}));
!function(t,i){"function"==typeof define&&(define.amd||define.cmd)?define(i):t.Tips=i()}(this,function(require){if("function"==typeof require)require("common/ui/Follow");else if(!$().follow)return window.console&&window.console.error("need Follow.js"),{};var t="ui-tips";$.fn.tips=function(t){return $(this).each(function(){$(this).data("tips")||$(this).data("tips",new i($(this),t))})};var i=function(i,e){var n={attribute:"title",eventType:"hover",content:"",align:"center",delay:100,onShow:$.noop,onHide:$.noop};if("string"==typeof i&&(i=$(i)),!i||!i.length)return this;if(i.length>1)return i.tips(e),i.eq(0).data("tips");var s,a,o=$.extend({},n,e||{}),r=i;if(0==r.is("a,button,input")&&r.attr({tabindex:"0",role:"tooltip"}),r.hasClass(t)){var l=r.attr("title")||r.attr("data-title");return l&&r.attr({"data-title":l,"aria-label":l}).removeAttr("title"),window.addEventListener||(s=$('<span class="ui-tips-before"></span>').html(l),a=$('<i class="ui-tips-after"></i>'),r.prepend(s),r.append(a),s.css("margin-left",-.5*s.outerWidth()),a.css("margin-left",-.5*a.outerWidth())),r.on("click",function(){window.isKeyEvent||this.blur()}),void(r.data("tips")||r.data("tips",this))}var h,d=this;return this._content=function(){var t=o.content;return t||(t=r.attr(o.attribute),"title"==o.attribute&&((t=t||r.data("title"))&&r.attr({"aria-label":t}).data("title",t),r.removeAttr("title"))),t},this.el={trigger:r,tips:void 0},this.callback={show:o.onShow,hide:o.onHide},this.align=o.align,"hover"==o.eventType?(r.hover(function(){var t=d._content();h=setTimeout(function(){d.show(t)},o.delay)},function(){clearTimeout(h),d.hide()}),r.on({"focus":function(){d.show(d._content())},"blur":function(){d.hide()}})):"click"==o.eventType?(r.click(function(){d.show(d._content())}),$(document).mouseup(function(t){var i=t.target,e=r.get(0);1==d.display&&e!=i&&0==e.contains(i)&&0==d.el.tips.get(0).contains(i)&&d.hide()})):this.show(d._content()),this};return i.prototype.show=function(t){if(!(t=t||this.content))return this;var i=this.el.trigger,e=this.el.tips;this.content=t;var n,s;if(e)e.show(),n=e.find("span").html(t),s=e.find("i");else{if(e=$("<div></div>").addClass("ui-tips-x"),n=$('<span class="ui-tips-before"></span>').html(t),s=$('<i class="ui-tips-after"></i>'),!i.attr("aria-label")){var a="t_"+(Math.random()+"").replace("0.","");n.attr("id",a),i.attr("aria-labelledby",a)}$(document.body).append(e.append(n).append(s))}var o=0,r="5-7";return"left"==this.align?o=-.5*n.width()+parseInt(n.css("padding-left"))||0:"right"==this.align?o=.5*n.width()-parseInt(n.css("padding-right"))||0:"rotate"==this.align?r="6-8":"number"==typeof this.align?o=this.align:(i.hasClass("reverse")||"reverse"==this.align)&&(r="7-5",this.align="reverse"),e.addClass("ui-tips-"+this.align),"rotate"!=this.align&&"reverse"!=this.align&&s.css({left:o}),e.follow(i,{offsets:{x:o,y:0},position:r,edgeAdjust:!1}),this.callback.show.call(i,e),this.el.tips=e,this.display=!0,this},i.prototype.hide=function(){return this.el.tips&&(this.el.tips.hide(),this.callback.hide.call(this.el.trigger,this.el.tips)),this.display=!1,this},i.prototype.init=function(i){return i=i||t,$("."+i).tips(),$(document).mouseover(function(t){var e=t&&t.target;if(e&&$(e).hasClass(i)&&!$(e).data("tips")){$(e).tips();var n=$(e).data("tips");n._content&&n.show(n._content())}}),this},i});!function(t,e){"function"==typeof define&&(define.amd||define.cmd)?define(e):t.Range=e()}(this,function(require){if("function"==typeof require)require("common/ui/Tips");else if(!$().tips)return window.console&&window.console.error("need Tips.js"),{};var t="ui-range";$.fn.range=function(t){return $(this).each(function(){$(this).data("range")||$(this).data("range",new e($(this),t))})};var e=function(e,i){var a=this,n={reverse:!1,tips:function(t){return t}},s=$.extend({},n,i||{}),r=e.attr("min")||0,u=e.attr("max")||100,o=e.attr("step")||1,l=$("<div></div>").attr("class",e.attr("class")).addClass(t),d=$("<div></div>").addClass("ui-range-track"),v=$("<a></a>").addClass("ui-range-thumb").attr({href:"javascript:","aria-valuenow":e.val(),"aria-valuemax":u,"aria-valuemin":r,role:"slider",draggable:"false"});e.before(l),0==l.width()&&l.width(e.width()),d.append(v),l.append(d),l.click(function(t){var i=t&&t.target;if(i&&i!=v.get(0)){var n=t.clientX-(v.offset().left-$(window).scrollLeft())-v.width()/2;a.value(1*e.val()+(u-r)*n/$(this).width())}}),v.on("keydown",function(t){var i=1*e.val();37!=t.keyCode&&39!=t.keyCode||(t.preventDefault(),37==t.keyCode?i=Math.max(r,i-o):39==t.keyCode&&(i=Math.min(u,i+1*o)),a.value(i))});var h={};return v.mousedown(function(t){h.x=t.clientX,h.value=1*e.val(),$.isFunction(s.tips)&&(a.tips?a.tips.show(s.tips.call(e,h.value)):(v.tips({eventType:"null",content:s.tips(h.value)}),a.tips=v.data("tips"))),$(this).addClass("active")}),s.reverse&&v.addClass("reverse"),$(document).mousemove(function(t){if("number"==typeof h.x){var i=t.clientX-h.x;a.value(h.value+(u-r)*i/l.width()),a.tips&&a.tips.show(s.tips.call(e,e.val())),t.preventDefault()}}),$(document).mouseup(function(){h.x=null,h.value=null,v.removeClass("active"),a.tips&&a.tips.hide()}),this.num={min:+r,max:+u,step:+o},this.el={input:e,container:l,track:d,thumb:v},this.obj={},this.value(),this};return e.prototype.value=function(t){var e=this.el.input,i=e.val(),a=this.num.max,n=this.num.min,s=this.num.step;return t||0===t||(i=t,t=$.trim(e.val())),t=t>a||a-t<s/2?a:""==t||t<n||t-n<s/2?n:n+Math.round((t-n)/s)*s,e.val(t),this.position(),t!=i&&e.trigger("change"),this},e.prototype.position=function(){var t=this.el.input.val(),e=this.num.max,i=this.num.min;return this.el.track.css("borderLeftWidth",this.el.container.width()*(t-i)/(e-i)),this.el.thumb.attr("aria-valuenow",t),this},e});/**
 * @Drop.js
 * @author zhangxinxu
 * @version
 * Created: 15-06-30
 */

(function (global, factory) {
    if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(factory);
    } else {
        global.Drop = factory();
    }
}(this, function (require) {
    // require
    if (typeof require == 'function') {
        require('common/ui/Follow');
    } else if (!$().follow) {
        if (window.console) {
            window.console.error('need Follow.js');
        }

        return {};
    }

    /*
    * 元素的下拉显示
     */

    /*
     * 支持jQuery API调用和模块化调用两种
     * @example
     * $('trigger').drop(target, options);
     * or
     * new Drop(trigger, target, options);
    */

    $.fn.drop = function(target, options) {
        return $(this).each(function() {
            var drop = $(this).data('drop');
            if (!drop) {
                $(this).data('drop', new Drop($(this), target, options));
            }
        });
    };

    /**
     * 实例方法
     * @param {Object} trigger 触发元素，$()包装器元素类型
     * @param {Object} target  显示的浮动定位元素，$()包装器元素类型
     * @param {Object} options 可选参数
     */
    var Drop = function(trigger, target, options) {
        var defaults = {
            // 触发元素显示的事件，
            // 'null'直接显示；'hover'是hover方法；'click'是点击显示,
            // 新增'contextmenu'表示右键显示
            eventType: 'null',
            // 实现点击或hover事件的委托实现
            selector: '',
            offsets: {
                x: 0,
                y: 0
            },
            edgeAdjust: true,
            position: '7-5',
            onShow: $.noop,
            onHide: $.noop
        };

        var params = $.extend({}, defaults, options || {});

        var id = target.attr('id');

        if (!id) {
            id = ('id_' + Math.random()).replace('0.', '');
            target.attr('id', id);
        }

        if (params.selector == '') {
            trigger.attr({
                'data-target': id,
                'aria-expanded': 'false'
            });
        }

        // 元素暴露给实例
        this.el = {
            trigger: trigger,
            target: target
        };

        // 偏移
        this.offsets = params.offsets;

        // 回调
        this.callback = {
            show: params.onShow,
            hide: params.onHide
        };

        // 位置
        this.position = params.position;
        // 边缘调整
        this.edgeAdjust = params.edgeAdjust;

        // 实例的显示状态
        this.display = false;

        var drop = this;

        switch (params.eventType) {
            case 'null': {
                this.show();
                break;
            }
            case 'hover': {
                // hover处理需要增加延时
                var timerHover;
                // 同时，从trigger移动到target也需要延时，因为两者可能有间隙，不能单纯移出就隐藏
                var timerHold;

                trigger.delegate(params.selector, 'mouseenter', function() {
                    if (params.selector) {
                        drop.el.trigger = $(this).attr({
                            'data-target': id,
                            'aria-expanded': 'false'
                        });
                    }

                    // 显示的定时器
                    timerHover = setTimeout(function() {
                        drop.show();
                    }, 150);
                    // 去除隐藏的定时器
                    clearTimeout(timerHold);
                });

                trigger.delegate(params.selector, 'mouseleave', function() {
                    // 清除显示的定时器
                    clearTimeout(timerHover);
                    // 隐藏的定时器
                    timerHold = setTimeout(function() {
                        drop.hide();
                    }, 200);
                });

                if (!target.data('dropHover')) {
                    target.hover(function() {
                        // 去除隐藏的定时器
                        clearTimeout(timerHold);
                    }, function() {
                        // 隐藏
                        timerHold = setTimeout(function() {
                            drop.hide();
                        }, 100);
                    });
                    target.data('dropHover', true);
                }

                // 键盘支持，原本使用focus事件，但并不利于键盘交互
                trigger.delegate(params.selector, 'click', function(event) {
                    // window.isKeyEvent表示是否键盘触发，来自Enhance.js
                    if (window.isKeyEvent) {
                        if (params.selector) {
                            drop.el.trigger = $(this).attr({
                                'data-target': id,
                                'aria-expanded': 'false'
                            });
                        }
                        // 点击即显示
                        if (drop.display == false) {
                            drop.show();
                        } else {
                            drop.hide();
                        }
                        event.preventDefault();
                    }
                });

                break;
            }
            case 'click': case 'contextmenu': {
                trigger.delegate(params.selector, params.eventType, function(event) {
                    event.preventDefault();
                    // aria支持
                    if (params.selector) {
                        drop.el.trigger = $(this).attr({
                            'data-target': id,
                            'aria-expanded': 'false'
                        });
                    }
                    // 重复右键点击一直显示，非显隐切换
                    if (params.eventType == 'contextmenu') {
                        drop.position = [event.pageX, event.pageY];
                        drop.show();

                        return;
                    }
                    // 点击即显示
                    if (drop.display == false) {
                        drop.show();
                    } else {
                        drop.hide();
                    }
                });
                break;
            }
        }

        // 点击页面空白区域隐藏
        $(document).click(function(event) {
            var clicked = event && event.target;

            if (!clicked || !drop || drop.display != true) return;

            var tri = drop.el.trigger.get(0);
            var tar = drop.el.target.get(0);
            if (tri && tar && clicked != tri && clicked != tar && tri.contains(clicked) == false && tar.contains(clicked) == false) {
                drop.hide();
            }
        });

        // 窗体尺寸改变生活的重定位
        $(window).resize(function() {
            drop.follow();
        });

        return drop;
    };

    /**
     * 下拉定位处理
     * @return {Object} 返回当前实例对象
     */
    Drop.prototype.follow = function() {
        var target = this.el.target;
        var trigger = this.el.trigger;

        // 下拉必须是显示状态才执行定位处理
        if (this.display == true && trigger.css('display') != 'none') {
            target.follow(trigger, {
                offsets: this.offsets,
                position: this.position,
                edgeAdjust: this.edgeAdjust
            });
        }

        return this;
    };

    /**
     * 下拉的显示处理
     * @return {Object} 返回当前实例对象
     */
    Drop.prototype.show = function() {
        // target需要在页面中
        var target = this.el.target;
        var trigger = this.el.trigger;
        // 如果target在内存中，append到页面上
        if (target && $.contains(document.body, target.get(0)) == false) {
            $('body').append(target);
        }
        // 改变显示标志量
        this.display = true;
        // 进行定位
        target.css({
            position: 'absolute',
            display: 'inline'
        }).addClass('ESC');

        // aria
        trigger.attr({
            'aria-expanded': 'true'
        });

        // 定位
        this.follow();

        // 显示回调处理
        if ($.isFunction(this.callback.show)) {
            this.callback.show.call(this, trigger, target);
        }

        return this;
    };

    /**
     * 下拉的隐藏处理
     * @return {Object} 返回当前实例对象
     */
    Drop.prototype.hide = function() {
        var target = this.el.target;
        var trigger = this.el.trigger;
        // 隐藏下拉面板
        target.hide().removeClass('ESC');
        // aria
        trigger.attr({
            'aria-expanded': 'false'
        });

        if (window.isKeyEvent) {
            trigger.focus();
        }

        // 更改显示标志量
        this.display = false;
        // 隐藏回调处理
        if ($.isFunction(this.callback.hide)) {
            this.callback.hide.call(this, trigger, target);
        }

        return this;
    };

    return Drop;
}));
!function(e,t){"function"==typeof define&&(define.amd||define.cmd)?define(t):e.Color=t()}(this,function(require){if("function"==typeof require)require("common/ui/Drop");else if(!$().drop)return window.console&&window.console.error("need Drop.js"),{};var e="background-color";$.hslToHex=function(e,t,o){var r,i,a;if(0==t)r=i=a=o;else{var s=function(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+6*(t-e)*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e},l=o<.5?o*(1+t):o+t-o*t,n=2*o-l;r=s(n,l,e+1/3),i=s(n,l,e),a=s(n,l,e-1/3)}var c=[Math.round(255*r),Math.round(255*i),Math.round(255*a)];return $.map(c,function(e){return 1==(e=e.toString(16)).length?"0"+e:e}).join("")},$.hexToHsl=function(e){var t,o,r=parseInt(e.slice(0,2),16)/255,i=parseInt(e.slice(2,4),16)/255,a=parseInt(e.slice(4,6),16)/255,s=Math.max(r,i,a),l=Math.min(r,i,a),n=(s+l)/2;if(s==l)t=o=0;else{var c=s-l;switch(o=n>.5?c/(2-s-l):c/(s+l),s){case r:t=(i-a)/c+(i<a?6:0);break;case i:t=(a-r)/c+2;break;case a:t=(r-i)/c+4}t/=6}return[t,o,n]},$.rgbToHex=function(e){if(!e)return"#000000";var t=[];if(/^#[0-9A-F]{6}$/i.test(e))return e;if(/^#[0-9A-F]{3}$/i.test(e))return(t=e.split(""))[0]+t[1]+t[1]+t[2]+t[2]+t[3]+t[3];var o=function(e){return("0"+parseInt(e,10).toString(16)).slice(-2)};return 4==(t=e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/i)).length?"#"+o(t[1])+o(t[2])+o(t[3]):"#000000"},$.fn.color=function(e){return $(this).each(function(){$(this).data("color")||$(this).data("color",new t($(this),e))})};var t=function(e,t){var o=this,r={offsets:{x:0,y:0},edgeAdjust:!1,position:"7-5",onShow:$.noop,onHide:$.noop},i=$.extend({},r,t||{});if(e){e.size||(e=$(e));var a=e[0],s=a.id;s||(s="C"+(Math.random()+"").split(".")[1],a.id=s),e.prop("readonly",!0).on("click",function(e){e.preventDefault()});var l=$('<label for="'+s+'"></label>').addClass("ui-color-track"),n=$("<span></span>").addClass("ui-color-thumb");e.before(l.append(n));var c=$("<div></div>").addClass("ui-color-container");return e.drop(c,{eventType:"click",offsets:i.offsets,edgeAdjust:i.edgeAdjust,position:i.position,onShow:function(){if(o.show(),0==i.edgeAdjust){var e=c[0].getBoundingClientRect();e.left<3?c.css("margin-left",-1*e.left+3):e.right-$(window).width()>3&&c.css("margin-left",$(window).width()-e.right-3)}},onHide:function(){o.hide(),c.css("margin-left","0")}}),e.on("focus",function(){window.isKeyEvent&&l.addClass("ui-outline")}).blur(function(){l.removeClass("ui-outline")}),o.drop=e.data("drop"),this.el={input:e,container:c,track:l,thumb:n},this.callback={show:i.onShow,hide:i.onHide},this.value(a.value),this}};return t.prototype.value=function(t){var o=this,r=o.el.input,i=o.el.thumb,a=r.val();return"string"!=typeof t?(a||(a="#000000",r.val(a),i.css(e,a)),a):(t=$.rgbToHex(t),r.val(t),i.css(e,t),o.match(),a&&t!=a&&r.trigger("change"),this)},t.prototype.create=function(){var t=this,o=t.el.container,r='<div class="ui-color-body">'+function(){var t='<div class="ui-color-basic colorBasicX" role="listbox">';return t=t+'<div class="ui-color-basic-l">'+$.map(["0","3","6","9","C","F","F00","018001","0501ff","FF0","0FF","800180"],function(t){return 1==(t=t.toUpperCase()).length?t=t+t+t+t+t+t:3==t.length&&(t=t.replace(/\w/g,function(e){return e+e})),'<a href="javascript:" class="ui-color-lump" data-color="'+t+'" aria-label="'+t+'" style="'+e+":#"+t+'" role="option"></a>'}).join("")+"</div>",(t=t+'<div class="ui-color-basic-r">'+function(){var t=["0","3","6","9","C","F"],o="";return $.each(t,function(r,i){o+='<div class="ui-color-lump-group">',$.each(t,function(r,a){$.each(t,function(t,r){var s=i+i+a+a+r+r;o=o+'<a href="javascript:" class="ui-color-lump" data-color="'+s+'" style="'+e+":#"+s+'" aria-label="'+s+'" role="option"></a>'})}),o+="</div>"}),o}()+"</div>")+"</div>"}()+function(){var e='<div class="ui-color-more colorMoreX">';return(e+='<div class="ui-color-more-l">                <a href="javascript:" class="ui-color-cover-white" aria-label="色域背景块" role="region"></a><div class="ui-color-circle colorCircle"></div>                <svg>                    <defs>                        <linearGradient x1="0" y1="0" x2="1" y2="0" id="colorGradient">                            <stop offset="0%" stop-color="#ff0000"></stop>                            <stop offset="16.66%" stop-color="#ffff00"></stop>                            <stop offset="33.33%" stop-color="#00ff00"></stop>                            <stop offset="50%" stop-color="#00ffff"></stop>                            <stop offset="66.66%" stop-color="#0000ff"></stop>                            <stop offset="83.33%" stop-color="#ff00ff"></stop>                            <stop offset="100%" stop-color="#ff0000"></stop>                        </linearGradient>                    </defs>                    <rect x="0" y="0" width="180" height="100" fill="url(#colorGradient)"></rect>                </svg></div><div class="ui-color-more-r">                    <div class="ui-color-more-fill colorFill">                        <a href="javascript:" class="ui-color-more-cover" aria-label="明度控制背景条" role="region"></a>                        <svg>                        <defs>                            <linearGradient x1="0" y1="0" x2="0" y2="1" id="colorGradient2">                                <stop offset="0%" stop-color="#ffffff"></stop>                                <stop offset="50%" stop-color="rgba(255,255,255,0)"></stop>                                <stop offset="50%" stop-color="rgba(0,0,0,0)"></stop>                                <stop offset="100%" stop-color="#000000"></stop>                            </linearGradient>                        </defs>                        <rect x="0" y="0" width="16" height="100" fill="url(#colorGradient2)"></rect>                    </svg>                    </div>                    <a href="javascript:" class="ui-color-more-arrow colorArrow" role="slider" aria-label="明度控制按钮：100%"></a>                </div>')+"</div>"}()+"</div>";return o.html('<a href="javascript:" class="ui-color-switch" role="button">更多</a><div class="ui-color-current">            <i class="ui-color-current-square colorCurrent"></i>            #<input class="ui-color-current-input">        </div>'+r+'<div class="ui-color-footer">            <a href="javascript:" class="ui-color-btn-cancel">取消</a><a href="javascript:" class="ui-color-btn-ensure">确定</a>        </div>'),$.extend(t.el,{field:o.find("input"),basic:o.find(".colorBasicX"),more:o.find(".colorMoreX"),circle:o.find(".colorCircle"),fill:o.find(".colorFill"),arrow:o.find(".colorArrow"),current:o.find(".colorCurrent")}),t.events(),t},t.prototype.events=function(){var t=this,o=t.el.container,r=t.el.circle,i=t.el.fill,a=t.el.arrow,s=t.el.field;o.on("click","a",function(o){var l=this,n=$(l),c="",p=l.className;if(/cancel/.test(p))t.hide();else if(/ensure/.test(p))(c=s.val())&&t.value("#"+c),t.hide();else if(/lump/.test(p))c=n.attr("data-color"),s.val(c),t.match();else if(/switch/.test(p))"更多"==l.innerHTML?(t.el.more.show(),t.el.basic.hide(),l.innerHTML="基本"):(t.el.more.hide(),t.el.basic.show(),l.innerHTML="更多"),t.match();else if(/cover/.test(p)){var f,d,u=l.getBoundingClientRect(),h=o.pageX-u.left,v=o.pageY-$(document).scrollTop()-u.top,g=l.clientWidth,m=l.clientHeight;if(r.length&&i.length&&a.length){if(1==/white/.test(p)){f=h/g,d=1-v/m,r.css({left:h,top:v});var y="hsl("+[360*f,100*d+"%","50%"].join()+")";r.css(e,y)}else a.css("top",v);s.val(t._getHSL().replace("#","")),t.match()}}});var l=t.el.field;if(l.on("input",function(){var e=this.value;/^[0-9A-F]{6}$/i.test(e)?t.match():/^[0-9A-F]{3}$/i.test(e)&&t.match($.rgbToHex("#"+e).replace("#",""))}).on("keyup",function(e){if(13==e.keyCode){var o=s.val(),r=o;o&&((o=$.rgbToHex("#"+o))!=r&&s.val(o),t.value("#"+o)),t.hide()}}),[].map){var n={};a.on("mousedown",function(e){n.pageY=e.pageY,n.top=1*a.css("top").replace("px",""),e.preventDefault()}),document.addEventListener("mousemove",function(e){if("number"==typeof n.top){var o=n.top+(e.pageY-n.pageY),r=a.parent().height();o<0?o=0:o>r&&(o=r),a.css("top",o),s.val(t._getHSL().replace("#","")),t.match(!1)}}),document.addEventListener("mouseup",function(){n.top=null}),i.parent().find("a").on("keydown",function(e){if(38==e.keyCode||40==e.keyCode){e.preventDefault();var o=1*a.css("top").replace("px",""),r=i.height();38==e.keyCode?--o<0&&(o=0):++o>r&&(o=r);var l=a.attr("aria-label");a.css("top",o).attr("aria-label",l.replace(/\d+/,Math.round(100*o/r))),s.val(t._getHSL().replace("#","")),t.match(!1)}}),r.parent().find("a").on("keydown",function(o){var i=$(this);if(o.keyCode>=37&&o.keyCode<=40){o.preventDefault();var a=1*r.css("top").replace("px",""),l=1*r.css("left").replace("px",""),n=i.height(),c=i.width();38==o.keyCode?--a<0&&(a=0):40==o.keyCode?++a>n&&(a=n):37==o.keyCode?--l<0&&(l=0):39==o.keyCode&&++l>c&&(l=c);var p=l/c,f=1-a/n;r.css({left:l,top:a});var d="hsl("+[360*p,100*f+"%","50%"].join()+")";r.css(e,d),s.val(t._getHSL().replace("#","")),t.match()}})}else l[0].attachEvent("onpropertychange",function(e){(e=e||window.event)&&"value"==e.propertyName&&l.trigger("input")});return t},t.prototype._getHSL=function(){var e=this,t=e.el.circle,o=e.el.arrow;if(t.length*o.length==0)return e;var r,i,a;return r=t[0].style.left?t.css("left").replace("px","")/t.parent().width():0,i=t[0].style.top?1-t.css("top").replace("px","")/t.parent().height():1,a=o[0].style.top?1-o.css("top").replace("px","")/o.parent().height():0,"#"+$.hslToHex(r,i,a)},t.prototype.match=function(t){var o=this;if(1!=o.display)return this;var r,i,a,s=o.el.container,l=o.el.current,n=o.el.field,c=!0;if(!1===t&&(c=t),""==(t=t||n.val())&&(t=$.rgbToHex(l.css(e)).replace("#",""),n.val(t)),t=t.replace("#",""),l.css(e,"#"+t),"none"==o.el.more.css("display"))s.find(".active").removeClass("active"),s.find('a[data-color="'+t.toUpperCase()+'"]').addClass("active");else{r=o.el.circle,i=o.el.fill,a=o.el.arrow;var p=$.hexToHsl(t),f=p[0],d=p[1],u=p[2],h="hsl("+[360*f,100*d+"%","50%"].join()+")";"000000"!=t&&(r.css(e,h),i.css(e,h)),1==c&&(0!=u&&r.css({left:r.parent().width()*f,top:r.parent().height()*(1-d)}),a.css("top",a.parent().height()*(1-u)))}return this},t.prototype.show=function(){var t=this,o=t.el.container;""==o.html()&&t.create(),0==t.drop.display&&t.drop.show(),t.display=t.drop.display;var r=t.el.current;return r.attr("style")||r.css(e,t.el.input.val()),t.match(),$.isFunction(this.callback.show)&&this.callback.show.call(this,this.el.track,o),this},t.prototype.hide=function(){var e=this;return 1==e.drop.display&&e.drop.hide(),e.display=e.drop.display,e.el.input.focus(),$.isFunction(this.callback.hide)&&this.callback.hide.call(this,this.el.trigger,this.el.container),this},t});