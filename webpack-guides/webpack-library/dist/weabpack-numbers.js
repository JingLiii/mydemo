!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("lodash")):"function"==typeof define&&define.amd?define(["lodash"],r):"object"==typeof exports?exports.webpackNumbers=r(require("lodash")):e.webpackNumbers=r(e._)}(this,function(e){return function(e){function r(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,r),t.l=!0,t.exports}var o={};return r.m=e,r.c=o,r.d=function(e,o,n){r.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(o,"a",o),o},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=0)}([function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.numToWord=function(e){return t.a.reduce(c.a,(r,o)=>o.num===e?o.word:r,"")},r.wordToNum=function(e){return t.a.reduce(c.a,(r,o)=>o.word===e&&e.toLowerCase()?o.num:r,-1)};var n=o(1),t=o.n(n),u=o(2),c=o.n(u)},function(r,o){r.exports=e},function(e,r){e.exports=[{num:1,word:"One"},{num:2,word:"Two"},{num:3,word:"Three"},{num:4,word:"Four"},{num:5,word:"Five"},{num:0,word:"Zero"}]}])});
//# sourceMappingURL=weabpack-numbers.js.map