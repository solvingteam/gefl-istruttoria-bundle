(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALPSURBVHgBrVVNTxNBGH6mH5RGKDQpCGpsDJ9yQBIF4s1E0fAP4AYcOBgNnDx4JDFcPShHOZBw4NATiZwpkGCBBCHEFIIQrFhaaJAPaSk7vrPDLrv0aw88zWRnZmef951nnnnLYMCP8M93Pp/3Azh3gNEEp8aQH7Rm+9efv6nz1MunTx7N51y38zv6VVEUrsHYz4fva2E+t7CcCIZWnhn5bOYkFEbQx1qfvs9M2DDH1B/K7fwiMLe4+Eqbd/CamsdQlFticDAzUwr//QwiVlQEtLQAp6eAywXY7ab3d+9U4iBxKLref8nkR3o+VL8j8sy0smFqSraODqChIeeyaCy+UVVZUadmrs50dwNuN3B8DDQ3A/v7wCFlkkpJwngcODmh1bTcZtNlMUqYDXKl0wmSBohEgOVlYG8PKC0Fzs5kIA0i4Pa2lIoVspGW+doasLoqA3R1AbEYEA4DodCVGwWZx6MG1Q6zUAAHrdzBwkKZGChud4ktELBB+6ikREogDtTrBY6OgJUVoK0NVqRxsM1N3R47kd2pe9W3VStl3B+RrdBeSJNOS/0LBDD7nF1unxq7fOqYnQXa24GeHmBkRAYrAAcsgk1OAkNDqs95ayswPAx0doKJQxe7qK+na1Rujdy0XXGwTU1AMAgkk/LA/X7VppzcxcSOpqeBgQFr5Dqx0Hd0FBgcBGprdZ+bIOwrICxtOfNAAFhfB/r75bZzYX5eD+BJJCp4cXEfyfUld+bj40B1NeDzybqSDxMTUjIC3fMy2jZlg9zkqrbipvb2ymAG55gqYj6fX5/QD7KvL6eHrVz9rOTZ6nk2qIFFuRgbo1IYvf66inTvNZFfpJXdZOqcDMGMLMbI5jH17Z8+wybqkDmyn+rUG1Nq00tLFW7YnysMLliE51sIjW9fvydCo5026A/lBW4CJMEDKm5b3Onk1LbEGDcJIm8k4iB3ueq0uf+53EgZ/KK4NAAAAABJRU5ErkJggg=="},35:function(e,t,n){e.exports=n(55)},36:function(e,t,n){},45:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);n(36);var r=n(16),a=n(17),o=n(22),c=n(10),i=n(20),l=n(34),s=n(0),u=n.n(s),m=n(12),f=n.n(m),p=(n(45),n(47),n(7)),h=n(57),d=n(51),v=n(9),g=n(2);function y(){y=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function i(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(j){i=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),c=new O(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return L()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var i=w(c,n);if(i){if(i===u)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,c),o}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(j){return{type:"throw",arg:j}}}e.wrap=l;var u={};function m(){}function f(){}function p(){}var h={};i(h,a,function(){return this});var d=Object.getPrototypeOf,v=d&&d(d(x([])));v&&v!==t&&n.call(v,a)&&(h=v);var g=p.prototype=m.prototype=Object.create(h);function E(e){["next","throw","return"].forEach(function(t){i(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var r;this._invoke=function(a,o){function c(){return new t(function(r,c){!function r(a,o,c,i){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){r("next",e,c,i)},function(e){r("throw",e,c,i)}):t.resolve(m).then(function(e){u.value=e,c(u)},function(e){return r("throw",e,c,i)})}i(l.arg)}(a,o,r,c)})}return r=r?r.then(c,c):c()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=s(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function x(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=p,i(g,"constructor",p),i(p,"constructor",f),f.displayName=i(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,i(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(b.prototype),i(b.prototype,o,function(){return this}),e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var c=new b(l(t,n,r,a),o);return e.isGeneratorFunction(n)?c:c.next().then(function(e){return e.done?e.value:c.next()})},E(g),i(g,c,"Generator"),i(g,a,function(){return this}),i(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=x,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(A),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return c.type="throw",c.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;A(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:x(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}var E=function(){return{headers:new Headers({"Content-Type":"application/json"})}},b=function(){var e=Object(v.a)(y().mark(function e(t,n){var r,a,o=arguments;return y().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=!(o.length>2&&void 0!==o[2])||o[2],e.next=3,fetch(t,n);case 3:if(204!==(a=e.sent).status){e.next=6;break}return e.abrupt("return",{});case 6:if(!(a.status>=200&&a.status<300)){e.next=10;break}if(!r){e.next=9;break}return e.abrupt("return",a.json());case 9:return e.abrupt("return",{});case 10:return e.abrupt("return",Promise.reject(a.status));case 11:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),w=function(){return new URLSearchParams(window.location.search)};function N(){N=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function i(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(j){i=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),c=new O(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return L()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var i=b(c,n);if(i){if(i===u)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,c),o}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(j){return{type:"throw",arg:j}}}e.wrap=l;var u={};function m(){}function f(){}function p(){}var h={};i(h,a,function(){return this});var d=Object.getPrototypeOf,v=d&&d(d(x([])));v&&v!==t&&n.call(v,a)&&(h=v);var g=p.prototype=m.prototype=Object.create(h);function y(e){["next","throw","return"].forEach(function(t){i(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var r;this._invoke=function(a,o){function c(){return new t(function(r,c){!function r(a,o,c,i){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){r("next",e,c,i)},function(e){r("throw",e,c,i)}):t.resolve(m).then(function(e){u.value=e,c(u)},function(e){return r("throw",e,c,i)})}i(l.arg)}(a,o,r,c)})}return r=r?r.then(c,c):c()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=s(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function x(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=p,i(g,"constructor",p),i(p,"constructor",f),f.displayName=i(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,i(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(E.prototype),i(E.prototype,o,function(){return this}),e.AsyncIterator=E,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var c=new E(l(t,n,r,a),o);return e.isGeneratorFunction(n)?c:c.next().then(function(e){return e.done?e.value:c.next()})},y(g),i(g,c,"Generator"),i(g,a,function(){return this}),i(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=x,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(A),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return c.type="throw",c.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;A(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:x(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}var A=function(e){var t=Object(g.a)({},E(),{method:"GET"});return b(e,t)},O=function(e,t){var n=Object(g.a)({},E(),{method:"PUT",body:JSON.stringify(t)});return b(e,n)},x=function(){var e=Object(v.a)(N().mark(function e(t,n){var r,a;return N().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(t,"/api/documento/").concat(n),a=Object(g.a)({},E(),{method:"DELETE"}),e.abrupt("return",b(r,a));case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),L=function(){var e=Object(v.a)(N().mark(function e(t,n){return N().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",A("".concat(t,"/api/pratica/anagrafica?guid=").concat(n)));case 1:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),j=function(){var e=Object(v.a)(N().mark(function e(t,n){return N().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",A("".concat(t,"/api/documento?guid=").concat(n)));case 1:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(v.a)(N().mark(function e(t,n,r){return N().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",O("".concat(t,"/api/documento/stato"),n));case 1:case"end":return e.stop()}},e)}));return function(t,n,r){return e.apply(this,arguments)}}(),D=function(){var e=Object(v.a)(N().mark(function e(t,n,r){return N().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",O("".concat(t,"/api/documento/nota?id=").concat(n),r));case 1:case"end":return e.stop()}},e)}));return function(t,n,r){return e.apply(this,arguments)}}(),C=function(){var e=Object(v.a)(N().mark(function e(t,n){var r,a;return N().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(t,"/api/documento/").concat(n),a=Object(g.a)({},E(),{method:"GET",responseType:"blob"}),e.abrupt("return",I(r,a));case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),T=function(){var e=Object(v.a)(N().mark(function e(t,n){var r,a;return N().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(t,"/api/documento/download/all?guid=").concat(n),a=Object(g.a)({},E(),{method:"GET",responseType:"blob"}),e.abrupt("return",I(r,a));case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),I=function(){var e=Object(v.a)(N().mark(function e(t,n){var r,a;return N().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,n);case 2:if(200!==(r=e.sent).status){e.next=8;break}return console.log(r.headers.get("Content-Disposition")),a=r.headers.get("Content-Disposition").split("filename=")[1],r.blob().then(function(e){var t=window.URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download=a,n.click()}),e.abrupt("return",null);case 8:return e.abrupt("return",Promise.reject(r.status));case 9:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),F=function(){var e=Object(v.a)(N().mark(function e(t,n){return N().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,r){var a=document.createElement("input");a.type="file",a.onchange=function(a){var o=a.path[0].files[0],c=new FileReader;c.readAsDataURL(o),c.onload=function(){var a=c.result.substr(c.result.indexOf(",")+1),i=o.type.indexOf("/"),l={payload:a,mediaType:-1!==i?o.type.substring(i+1):o.type,nomeDocumento:o.name,classeDocumentoId:n},s="".concat(t,"/api/documento/upload");console.log(l);var u=Object(g.a)({},E(),{method:"POST",body:JSON.stringify(l)});b(s,u).then(function(t){console.log("ok"),e()}).catch(function(e){console.log(e),r()})}},a.click()}));case 1:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),P={serviceUrl:null,pratica:{id:1111,nominativoRiferimento:"Mario rossi",statoPratica:"Istruttoria documentale",pec:"pec@pec.it",contattoTelefonico:"3486774532",prodotto:"test",periodicita:"Annuale",importoRichiesto:"23000",durata:"36 mesi",finalita:"test test",codiceFiscale:"DDGTHLI65N54J321T"},tipiDoc:["doc 1","doc 2","doc 3"]},S=(n(49),function(e){var t=e.button,n=Object(s.useState)({}),r=Object(p.a)(n,2),a=r[0],o=r[1];return Object(s.useEffect)(function(){var e=w().get("guid");console.log("g"+e),function(e){L(P.serviceUrl,e).then(function(e){o(e)}).catch(function(e){return console.log("err get pratica")})}(e)},[]),u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"white-rounded-shadowed"},u.a.createElement(h.a,{className:"mb-4"},u.a.createElement(d.a,{md:12},u.a.createElement("p",{className:"desc-text"},"ANAGRAFICA"))),u.a.createElement(h.a,{className:"mb-2"},u.a.createElement(d.a,{md:10},u.a.createElement("p",{className:"title"},"Ragione Sociale")),u.a.createElement(d.a,{md:2},u.a.createElement("button",{type:"submit",className:t.button?"custom-button":"custom-button-disabled"}," Approva Documenti "))),u.a.createElement(h.a,{className:"margin-custom-b"},u.a.createElement(d.a,{md:12},u.a.createElement("span",{className:"desc-text"},"ID")," ",u.a.createElement("span",{className:"highlighted-span"},a.id),u.a.createElement("span",{style:{marginLeft:"1rem",marginRight:"1rem",color:"#7F8297"}},"|"),u.a.createElement("span",{className:"desc-text"},"STATO PRATICA")," ",u.a.createElement("span",{className:"highlighted-span-light"},a.statoPratica))),u.a.createElement(h.a,{className:"mb-4"},u.a.createElement(d.a,{md:5},u.a.createElement("span",{className:"desc-text"},"Nominativo di riferimento")," ",u.a.createElement("span",{className:"highlighted-span-light"},a.nominativoRiferimento)),u.a.createElement(d.a,{md:4},u.a.createElement("span",{className:"desc-text"},"Contatto Telefonico")," ",u.a.createElement("span",{className:"highlighted-span-light"},a.contattoTelefonico)),u.a.createElement(d.a,{md:3},u.a.createElement("span",{className:"desc-text"},"Importo richiesto")," ",u.a.createElement("span",{className:"highlighted-span-light"},a.importoRichiesto?a.importoRichiesto.toFixed(2).replace(".",",").replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")+" \u20ac":""))),u.a.createElement(h.a,{className:"mb-4"},u.a.createElement(d.a,{md:5},u.a.createElement("span",{className:"desc-text"},"PEC")," ",u.a.createElement("span",{className:"highlighted-span-light"},a.pec)),u.a.createElement(d.a,{md:4},u.a.createElement("span",{className:"desc-text"},"Prodotto")," ",u.a.createElement("span",{className:"highlighted-span-light"},a.prodotto)),u.a.createElement(d.a,{md:3},u.a.createElement("span",{className:"desc-text"},"Durata")," ",u.a.createElement("span",{className:"highlighted-span-light"},a.durata))),u.a.createElement(h.a,{className:"mb-4"},u.a.createElement(d.a,{md:5},u.a.createElement("span",{className:"desc-text"},"Codice Fiscale/P.IVA")," ",u.a.createElement("span",{className:"highlighted-span-light"},a.codiceFiscale)),u.a.createElement(d.a,{md:4},u.a.createElement("span",{className:"desc-text"},"Periodicit\xe0")," ",u.a.createElement("span",{className:"highlighted-span-light"},a.periodicita)),u.a.createElement(d.a,{md:3},u.a.createElement("span",{className:"desc-text"},"Finalit\xe0")," ",u.a.createElement("span",{className:"highlighted-span-light"},a.finalita)))))}),R=n(21),U=n(58),G=n(59),B=n(60),_=n(14),V=n(15),M=n(25),H=n.n(M),Y=function(e){var t=e.tipoDocumento,n=e.classeDocumentoId,r=e.statoDocumento,a=e.listaDoc,o=e.notaFromDoc,c=e.isProspect,i=e.update,l=Object(s.useState)(r),m=Object(p.a)(l,2),f=m[0],v=m[1],g=Object(s.useState)(),y=Object(p.a)(g,2),E=y[0],b=y[1],w=Object(s.useState)(),N=Object(p.a)(w,2),A=N[0],O=N[1],L=Object(s.useState)(!1),j=Object(p.a)(L,2),T=j[0],I=j[1],S=Object(s.useState)(!1),R=Object(p.a)(S,2),M=R[0],Y=R[1],q=Object(s.useState)({show:!1,id:void 0}),Z=Object(p.a)(q,2),J=Z[0],Q=Z[1],z=Object(s.useState)({nota:null}),K=Object(p.a)(z,2),X=K[0],W=K[1],$=function(e){x(P.serviceUrl,e).then(function(){return i()})},ee=function(e,t){b(e),O(t)};return u.a.createElement(u.a.Fragment,null,u.a.createElement(U.a,{show:T,onHide:function(){return I(!1)}},u.a.createElement(U.a.Header,{closeButton:!0},u.a.createElement(U.a.Title,null,"Non Accettare")),u.a.createElement(U.a.Body,null,u.a.createElement(G.a,null,u.a.createElement(G.a.Group,{className:"mb-3",controlId:"message"},u.a.createElement(G.a.Label,null,"Inserisci motivo del rifiuto da notificare al cliente specificando i documenti da ricaricare"),u.a.createElement(G.a.Control,{as:"textarea",rows:3,onChange:function(e){W(e.target.value)}})))),u.a.createElement(U.a.Footer,null,u.a.createElement(B.a,{variant:"primary",onClick:function(){D(P.serviceUrl,n,X).then(function(){console.log("ok nota"),i()}).catch(function(e){return console.log(e)}),I(!1)}},"Invia"))),u.a.createElement(U.a,{show:M,onHide:function(){return Y(!1)}},u.a.createElement(U.a.Header,{closeButton:!0},u.a.createElement(U.a.Title,null,"Documentazione Rifiutata")),u.a.createElement(U.a.Body,null,u.a.createElement("p",null,o)),u.a.createElement(U.a.Footer,null,u.a.createElement(B.a,{variant:"primary",onClick:function(){Y(!1)}},"Ok"))),u.a.createElement(U.a,{show:J.show,onHide:function(){return Q({show:!1,id:void 0})}},u.a.createElement(U.a.Header,{closeButton:!0},u.a.createElement(U.a.Title,null,"Cancella")),u.a.createElement(U.a.Body,null,u.a.createElement("p",null,"Sei sicuro di voler eliminare il documento?")),u.a.createElement(U.a.Footer,null,u.a.createElement(B.a,{variant:"secondary",onClick:function(){return Q({show:!1,id:void 0})}},"No"),u.a.createElement(B.a,{variant:"primary",onClick:function(){$(J.id),Q({show:!1,id:void 0})}},"Si"))),u.a.createElement(h.a,{className:"mt-2 p-2"},u.a.createElement(d.a,{md:5},u.a.createElement("p",{className:"margin-custom-l document-text"},t)),"Altro"!==t?u.a.createElement(u.a.Fragment,null,u.a.createElement(d.a,{md:3,className:"align-to-end "},a.map(function(e,t){return u.a.createElement("span",{key:e.id,className:"p-1 me-1  border border-3 position-relative "+(A===t?"rounded border-primary ":"border-white")},u.a.createElement("img",{src:H.a,onClick:function(n){return ee(e.id,t)}}),A===t&&c&&u.a.createElement(_.a,{style:{position:"absolute",top:"-75%",left:"25%",color:"#0275d8",cursor:"pointer"},icon:V.c,onClick:function(){return Q({show:!0,id:e.id})}}))})),a.length>0?u.a.createElement(d.a,{md:2,className:" d-flex justify-content-center "},c?u.a.createElement("p",{className:a.length>0?r:""},a.length>0?function(e){switch(e){case"IN_LAVORAZIONE":return"In lavorazione";case"APPROVATO":return"Approvato";case"RIFIUTATO":return"Rifiutato";default:return null}}(r):""):u.a.createElement("select",{className:"form-select-xs "+r+"-select","aria-label":"Default select example",defaultValue:r,onChange:function(e){"RIFIUTATO"===e.target.value&&I(!0),k(P.serviceUrl,{idClasseDocumento:n,stato:e.target.value}).then(function(){v(e.target.value),console.log(f),i()})}},u.a.createElement("option",{value:"APPROVATO"},"Approvato"),u.a.createElement("option",{value:"IN_LAVORAZIONE"},"In Lavorazione"),u.a.createElement("option",{value:"RIFIUTATO"},"Rifiutato"))):u.a.createElement(d.a,{md:2})):u.a.createElement(d.a,{md:5,className:"align-to-end"},a.map(function(e,t){return u.a.createElement("span",{key:e.id,className:"p-1 me-1  border border-3 position-relative "+(A===t?"rounded border-primary ":"border-white")},u.a.createElement("img",{src:H.a,onClick:function(n){return ee(e.id,t)}}),A===t&&c&&u.a.createElement(_.a,{style:{position:"absolute",top:"-75%",left:"25%",color:"#0275d8",cursor:"pointer"},icon:V.c,onClick:function(){return $(e.id)}}))})),u.a.createElement(d.a,{md:2,className:"align-content-start"},c?u.a.createElement(u.a.Fragment,null,u.a.createElement("button",{className:"upload-buttons",onClick:function(){F(P.serviceUrl,n).then(function(){return i()})}},u.a.createElement("span",{className:"highlighted-span document-text secondary-color"},"Carica",u.a.createElement(_.a,{icon:V.d,className:"primary-color mx-1"}))),o&&"APPROVATO"!==r&&u.a.createElement(_.a,{icon:V.b,className:"primary-color fa-lg mx-2 pointer-icon",onClick:function(e){return Y(!0)}})):u.a.createElement(u.a.Fragment,null,u.a.createElement("button",{className:"upload-buttons",onClick:function(){return e=E,C(P.serviceUrl,e);var e}},u.a.createElement("span",{className:"highlighted-span document-text secondary-color"},"Scarica",u.a.createElement(_.a,{icon:V.a,className:"primary-color mx-1"}))))),u.a.createElement("hr",null)))},q=function(e){var t=e.isProspect,n=e.valid,r=Object(s.useState)([]),a=Object(p.a)(r,2),o=a[0],c=a[1];var i=function(){var e=w().get("guid");j(P.serviceUrl,e).then(function(e){c(Object(R.a)(e)),e.every(function(e){if("APPROVATO"===e.statoDocumento)return!0})&&n()}).catch(function(e){return console.log(e)})};return Object(s.useEffect)(function(){i()},[]),u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"white-rounded-shadowed mt-4"},u.a.createElement(h.a,{className:"align-to-end"},u.a.createElement(d.a,{md:1},u.a.createElement("p",{className:"desc-text"},"DOCUMENTAZIONE")),u.a.createElement(d.a,{md:11},u.a.createElement("p",{className:"desc-text"},"*Campi Obbligatori"))),!t&&u.a.createElement(h.a,{className:"align-to-end"},u.a.createElement(d.a,{md:13},u.a.createElement("span",{className:"primary-color btn",onClick:function(){return function(){var e=w().get("guid");return T(P.serviceUrl,e)}()}},"Scarica tutto",u.a.createElement(_.a,{icon:V.a,className:" ms-1 primary-color"})))),u.a.createElement(h.a,{className:"align-to-start mt-4"},u.a.createElement(d.a,{md:5},u.a.createElement("p",{className:"desc-text margin-custom-l"},"CARICA DOCUMENTI")),u.a.createElement(d.a,{md:3},u.a.createElement("p",{className:"desc-text"},"FILE")),u.a.createElement(d.a,{md:2},u.a.createElement("p",{className:"desc-text"},"STATO")),u.a.createElement(d.a,{md:2})),o.filter(function(e){return"Altro"!==e.tipoDocumento}).map(function(e,n){return u.a.createElement(Y,{key:n,tipoDocumento:e.tipoDocumento,classeDocumentoId:e.idClasseDocumento,statoDocumento:e.statoDocumento,listaDoc:e.listaDocumenti,notaFromDoc:e.nota,isProspect:t,update:i})})),u.a.createElement("div",{className:"white-rounded-shadowed mt-4"},u.a.createElement(h.a,{className:"align-to-start"},u.a.createElement(d.a,{md:12},u.a.createElement("p",{className:"desc-text"},"DOCUMENTAZIONE AGGIUNTIVA"))),u.a.createElement(h.a,{className:"align-to-start mt-4"},u.a.createElement(d.a,{md:10},u.a.createElement("p",{className:"desc-text margin-custom-l"},"CARICA DOCUMENTI")),u.a.createElement(d.a,{md:2})),o.filter(function(e){return"Altro"===e.tipoDocumento}).map(function(e,n){return u.a.createElement(Y,{key:n,tipoDocumento:e.tipoDocumento,classeDocumentoId:e.idClasseDocumento,statoDocumento:e.statoDocumento,nota:e.nota,listaDoc:e.listaDocumenti,isProspect:t,update:i})})))},Z=function(){var e=Object(s.useState)(!1),t=Object(p.a)(e,2),n=t[0],r=t[1],a=!!window.keycloak;return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"back-col"},u.a.createElement(S,{button:n}),u.a.createElement(q,{isProspect:a,valid:function(){r(!0)}})))};var J=function(){return u.a.createElement(Z,null)},Q={serviceUrl:"service-url"},z=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(a.a)(t,[{key:"connectedCallback",value:function(){var e=this.getAttribute("service-url");!function(e){P.serviceUrl=e}(e),this.mountPoint=document.createElement("div"),this.appendChild(this.mountPoint),f.a.render(u.a.createElement(J,{serviceUrl:e}),this.mountPoint)}}],[{key:"observedAttributes",get:function(){return Object.values(Q)}}]),t}(Object(l.a)(HTMLElement));customElements.define("pratica-widget",z)}},[[35,2,1]]]);
//# sourceMappingURL=main.5489666a.chunk.js.map