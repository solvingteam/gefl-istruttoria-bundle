(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALPSURBVHgBrVVNTxNBGH6mH5RGKDQpCGpsDJ9yQBIF4s1E0fAP4AYcOBgNnDx4JDFcPShHOZBw4NATiZwpkGCBBCHEFIIQrFhaaJAPaSk7vrPDLrv0aw88zWRnZmef951nnnnLYMCP8M93Pp/3Azh3gNEEp8aQH7Rm+9efv6nz1MunTx7N51y38zv6VVEUrsHYz4fva2E+t7CcCIZWnhn5bOYkFEbQx1qfvs9M2DDH1B/K7fwiMLe4+Eqbd/CamsdQlFticDAzUwr//QwiVlQEtLQAp6eAywXY7ab3d+9U4iBxKLref8nkR3o+VL8j8sy0smFqSraODqChIeeyaCy+UVVZUadmrs50dwNuN3B8DDQ3A/v7wCFlkkpJwngcODmh1bTcZtNlMUqYDXKl0wmSBohEgOVlYG8PKC0Fzs5kIA0i4Pa2lIoVspGW+doasLoqA3R1AbEYEA4DodCVGwWZx6MG1Q6zUAAHrdzBwkKZGChud4ktELBB+6ikREogDtTrBY6OgJUVoK0NVqRxsM1N3R47kd2pe9W3VStl3B+RrdBeSJNOS/0LBDD7nF1unxq7fOqYnQXa24GeHmBkRAYrAAcsgk1OAkNDqs95ayswPAx0doKJQxe7qK+na1Rujdy0XXGwTU1AMAgkk/LA/X7VppzcxcSOpqeBgQFr5Dqx0Hd0FBgcBGprdZ+bIOwrICxtOfNAAFhfB/r75bZzYX5eD+BJJCp4cXEfyfUld+bj40B1NeDzybqSDxMTUjIC3fMy2jZlg9zkqrbipvb2ymAG55gqYj6fX5/QD7KvL6eHrVz9rOTZ6nk2qIFFuRgbo1IYvf66inTvNZFfpJXdZOqcDMGMLMbI5jH17Z8+wybqkDmyn+rUG1Nq00tLFW7YnysMLliE51sIjW9fvydCo5026A/lBW4CJMEDKm5b3Onk1LbEGDcJIm8k4iB3ueq0uf+53EgZ/KK4NAAAAABJRU5ErkJggg=="},38:function(e,t,n){e.exports=n(65)},39:function(e,t,n){},47:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);n(39);var r=n(16),a=n(17),o=n(25),c=n(11),i=n(21),l=n(60),s=n(2),u=n(0),m=n.n(u),f=n(10),p=n.n(f),d=(n(47),n(49),n(7)),h=n(67),v=n(53),g=n(9);function E(){E=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function i(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(j){i=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),c=new A(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return k()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var i=w(c,n);if(i){if(i===u)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,c),o}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(j){return{type:"throw",arg:j}}}e.wrap=l;var u={};function m(){}function f(){}function p(){}var d={};i(d,a,function(){return this});var h=Object.getPrototypeOf,v=h&&h(h(x([])));v&&v!==t&&n.call(v,a)&&(d=v);var g=p.prototype=m.prototype=Object.create(d);function y(e){["next","throw","return"].forEach(function(t){i(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var r;this._invoke=function(a,o){function c(){return new t(function(r,c){!function r(a,o,c,i){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){r("next",e,c,i)},function(e){r("throw",e,c,i)}):t.resolve(m).then(function(e){u.value=e,c(u)},function(e){return r("throw",e,c,i)})}i(l.arg)}(a,o,r,c)})}return r=r?r.then(c,c):c()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=s(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function x(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return f.prototype=p,i(g,"constructor",p),i(p,"constructor",f),f.displayName=i(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,i(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(b.prototype),i(b.prototype,o,function(){return this}),e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var c=new b(l(t,n,r,a),o);return e.isGeneratorFunction(n)?c:c.next().then(function(e){return e.done?e.value:c.next()})},y(g),i(g,c,"Generator"),i(g,a,function(){return this}),i(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=x,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return c.type="throw",c.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;N(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:x(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}var y=function(){return{headers:new Headers({"Content-Type":"application/json"})}},b=function(){var e=Object(g.a)(E().mark(function e(t,n){var r,a,o=arguments;return E().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=!(o.length>2&&void 0!==o[2])||o[2],e.next=3,fetch(t,n);case 3:if(204!==(a=e.sent).status){e.next=6;break}return e.abrupt("return",{});case 6:if(!(a.status>=200&&a.status<300)){e.next=10;break}if(!r){e.next=9;break}return e.abrupt("return",a.json());case 9:return e.abrupt("return",{});case 10:return e.abrupt("return",Promise.reject(a.status));case 11:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),w=function(){return new URLSearchParams(window.location.search)};function O(){O=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function i(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(j){i=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),c=new A(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return k()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var i=b(c,n);if(i){if(i===u)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,c),o}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(j){return{type:"throw",arg:j}}}e.wrap=l;var u={};function m(){}function f(){}function p(){}var d={};i(d,a,function(){return this});var h=Object.getPrototypeOf,v=h&&h(h(x([])));v&&v!==t&&n.call(v,a)&&(d=v);var g=p.prototype=m.prototype=Object.create(d);function E(e){["next","throw","return"].forEach(function(t){i(e,t,function(e){return this._invoke(t,e)})})}function y(e,t){var r;this._invoke=function(a,o){function c(){return new t(function(r,c){!function r(a,o,c,i){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){r("next",e,c,i)},function(e){r("throw",e,c,i)}):t.resolve(m).then(function(e){u.value=e,c(u)},function(e){return r("throw",e,c,i)})}i(l.arg)}(a,o,r,c)})}return r=r?r.then(c,c):c()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=s(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function x(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return f.prototype=p,i(g,"constructor",p),i(p,"constructor",f),f.displayName=i(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,i(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(y.prototype),i(y.prototype,o,function(){return this}),e.AsyncIterator=y,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var c=new y(l(t,n,r,a),o);return e.isGeneratorFunction(n)?c:c.next().then(function(e){return e.done?e.value:c.next()})},E(g),i(g,c,"Generator"),i(g,a,function(){return this}),i(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=x,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return c.type="throw",c.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;N(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:x(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}var N=function(e){var t=Object(s.a)({},y(),{method:"GET"});return b(e,t)},A=function(e,t){var n=Object(s.a)({},y(),{method:"PUT",body:JSON.stringify(t)});return b(e,n)},x=function(){var e=Object(g.a)(O().mark(function e(t,n){var r,a;return O().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(t,"/api/documento/").concat(n),a=Object(s.a)({},y(),{method:"DELETE"}),e.abrupt("return",b(r,a));case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(g.a)(O().mark(function e(t,n){return O().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N("".concat(t,"/api/pratica/anagrafica?guid=").concat(n)));case 1:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),j=function(){var e=Object(g.a)(O().mark(function e(t,n){return O().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N("".concat(t,"/api/documento?guid=").concat(n)));case 1:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),L=function(){var e=Object(g.a)(O().mark(function e(t,n,r){return O().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",A("".concat(t,"/api/documento/stato"),n));case 1:case"end":return e.stop()}},e)}));return function(t,n,r){return e.apply(this,arguments)}}(),D=function(){var e=Object(g.a)(O().mark(function e(t,n){return O().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",A("".concat(t,"/api/pratica/approvadocumenti?id=").concat(n)));case 1:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),C=function(){var e=Object(g.a)(O().mark(function e(t,n,r){return O().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",A("".concat(t,"/api/documento/nota?id=").concat(n),r));case 1:case"end":return e.stop()}},e)}));return function(t,n,r){return e.apply(this,arguments)}}(),T=function(){var e=Object(g.a)(O().mark(function e(t,n){var r,a;return O().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(t,"/api/documento/").concat(n),a=Object(s.a)({},y(),{method:"GET",responseType:"blob"}),e.abrupt("return",P(r,a));case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),I=function(){var e=Object(g.a)(O().mark(function e(t,n){var r,a;return O().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(t,"/api/documento/download/all?guid=").concat(n),a=Object(s.a)({},y(),{method:"GET",responseType:"blob"}),e.abrupt("return",P(r,a));case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),P=function(){var e=Object(g.a)(O().mark(function e(t,n){var r,a,o;return O().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,n);case 2:if(200!==(r=e.sent).status){e.next=9;break}return console.log(r.headers.get("Content-Disposition")),a=r.headers.get("Content-Disposition"),o=a.split("filename=")[1],r.blob().then(function(e){var t=window.URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download=o,n.click()}),e.abrupt("return",null);case 9:return e.abrupt("return",Promise.reject(r.status));case 10:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),F=function(){var e=Object(g.a)(O().mark(function e(t,n){return O().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,r){var a=document.createElement("input");a.type="file",a.onchange=function(a){var o=new FormData;console.log(a.target.files[0]),void 0===a.target.files[0]&&r(),o.append("nome",a.target.files[0].name),o.append("file",a.target.files[0]);var c="".concat(t,"/api/documento/upload?id=").concat(n);b(c,{method:"POST",body:o}).then(function(t){console.log("ok"),e()}).catch(function(e){console.log(e),r()})},a.click()}));case 1:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),S={serviceUrl:null,pratica:{id:1111,nominativoRiferimento:"Mario rossi",statoPratica:"Istruttoria documentale",pec:"pec@pec.it",contattoTelefonico:"3486774532",prodotto:"test",periodicita:"Annuale",importoRichiesto:"23000",durata:"36 mesi",finalita:"test test",codiceFiscale:"DDGTHLI65N54J321T"},tipiDoc:["doc 1","doc 2","doc 3"]},R=(n(51),function(e){var t=e.button,n=e.isProspect,r=Object(u.useState)({}),a=Object(d.a)(r,2),o=a[0],c=a[1];var i=function(e){k(S.serviceUrl,e).then(function(e){console.log(e),c(e)}).catch(function(e){return console.log("err get pratica")})},l=w().get("guid");return Object(u.useEffect)(function(){console.log("g"+l),i(l)},[]),m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"white-rounded-shadowed"},m.a.createElement(h.a,{className:"mb-4"},m.a.createElement(v.a,{md:12},m.a.createElement("p",{className:"desc-text"},"ANAGRAFICA"))),m.a.createElement(h.a,{className:"mb-2"},m.a.createElement(v.a,{md:10},m.a.createElement("p",{className:"title"},o.ragioneSociale)),m.a.createElement(v.a,{md:2},!n&&m.a.createElement("button",{type:"submit",className:t?"custom-button":"custom-button-disabled",onClick:function(){D(S.serviceUrl,o.id).then(function(e){i(l)}).catch(function(e){return console.log("err approva")})}}," Approva Documenti "))),m.a.createElement(h.a,{className:"margin-custom-b"},m.a.createElement(v.a,{md:12},m.a.createElement("span",{className:"desc-text"},"ID")," ",m.a.createElement("span",{className:"highlighted-span"},o.id),m.a.createElement("span",{style:{marginLeft:"1rem",marginRight:"1rem",color:"#7F8297"}},"|"),m.a.createElement("span",{className:"desc-text"},"STATO PRATICA")," ",m.a.createElement("span",{className:"highlighted-span-light"},o.statoPratica))),m.a.createElement(h.a,{className:"mb-4"},m.a.createElement(v.a,{md:5},m.a.createElement("span",{className:"desc-text"},"Nominativo di riferimento")," ",m.a.createElement("span",{className:"highlighted-span-light"},o.nominativoRiferimento)),m.a.createElement(v.a,{md:4},m.a.createElement("span",{className:"desc-text"},"Contatto Telefonico")," ",m.a.createElement("span",{className:"highlighted-span-light"},o.contattoTelefonico)),m.a.createElement(v.a,{md:3},m.a.createElement("span",{className:"desc-text"},"Importo richiesto")," ",m.a.createElement("span",{className:"highlighted-span-light"},o.importoRichiesto?o.importoRichiesto.toFixed(2).replace(".",",").replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")+" \u20ac":""))),m.a.createElement(h.a,{className:"mb-4"},m.a.createElement(v.a,{md:5},m.a.createElement("span",{className:"desc-text"},"PEC")," ",m.a.createElement("span",{className:"highlighted-span-light"},o.pec)),m.a.createElement(v.a,{md:4},m.a.createElement("span",{className:"desc-text"},"Prodotto")," ",m.a.createElement("span",{className:"highlighted-span-light"},o.prodotto)),m.a.createElement(v.a,{md:3},m.a.createElement("span",{className:"desc-text"},"Durata")," ",m.a.createElement("span",{className:"highlighted-span-light"},o.durata))),m.a.createElement(h.a,{className:"mb-4"},m.a.createElement(v.a,{md:5},m.a.createElement("span",{className:"desc-text"},"Codice Fiscale/P.IVA")," ",m.a.createElement("span",{className:"highlighted-span-light"},o.codiceFiscale)),m.a.createElement(v.a,{md:4},m.a.createElement("span",{className:"desc-text"},"Periodicit\xe0")," ",m.a.createElement("span",{className:"highlighted-span-light"},o.periodicita)),m.a.createElement(v.a,{md:3},m.a.createElement("span",{className:"desc-text"},"Finalit\xe0")," ",m.a.createElement("span",{className:"highlighted-span-light"},o.finalita)))))}),U=n(24),G=n(69),B=n(70),_=n(71),V=n(68),M=n(13),z=n(14),H=n(28),Y=n.n(H),q=function(e){var t=e.tipoDocumento,n=e.classeDocumentoId,r=e.statoDocumento,a=e.listaDoc,o=e.notaFromDoc,c=e.isProspect,i=e.update,l=Object(u.useState)(r),s=Object(d.a)(l,2),f=s[0],g=s[1],E=Object(u.useState)(),y=Object(d.a)(E,2),b=y[0],w=y[1],O=Object(u.useState)(!1),N=Object(d.a)(O,2),A=N[0],k=N[1],j=Object(u.useState)(!1),D=Object(d.a)(j,2),I=D[0],P=D[1],R=Object(u.useState)(),U=Object(d.a)(R,2),H=U[0],q=U[1],Z=Object(u.useState)(!1),J=Object(d.a)(Z,2),Q=J[0],K=J[1],X=Object(u.useState)(!1),W=Object(d.a)(X,2),$=W[0],ee=W[1],te=Object(u.useState)({show:!1,id:void 0}),ne=Object(d.a)(te,2),re=ne[0],ae=ne[1],oe=Object(u.useState)({nota:null}),ce=Object(d.a)(oe,2),ie=ce[0],le=ce[1],se=function(e){var t=p.a.findDOMNode(void 0);t&&t.contains(e.target)||q(void 0)};Object(u.useEffect)(function(){return document.addEventListener("click",se,!0),function(){document.removeEventListener("click",se,!0)}},[]);var ue=function(e){x(S.serviceUrl,e).then(function(){return i()})},me=function(e,t){w(e),q(t)};return m.a.createElement(m.a.Fragment,null,m.a.createElement(G.a,{show:Q,onHide:function(){return K(!1)}},m.a.createElement(G.a.Header,{closeButton:!0},m.a.createElement(G.a.Title,null,"Non Accettare")),m.a.createElement(G.a.Body,null,m.a.createElement(B.a,null,m.a.createElement(B.a.Group,{className:"mb-3",controlId:"message"},m.a.createElement(B.a.Label,null,"Inserisci motivo del rifiuto da notificare al cliente specificando i documenti da ricaricare"),m.a.createElement(B.a.Control,{as:"textarea",rows:3,onChange:function(e){le(e.target.value)}})))),m.a.createElement(G.a.Footer,null,m.a.createElement(_.a,{variant:"primary",onClick:function(){C(S.serviceUrl,n,ie).then(function(){console.log("ok nota"),i()}).catch(function(e){return console.log(e)}),K(!1)}},"Invia"))),m.a.createElement(G.a,{show:$,onHide:function(){return ee(!1)}},m.a.createElement(G.a.Header,{closeButton:!0},m.a.createElement(G.a.Title,null,"Documentazione Rifiutata")),m.a.createElement(G.a.Body,null,m.a.createElement("p",null,o)),m.a.createElement(G.a.Footer,null,m.a.createElement(_.a,{variant:"primary",onClick:function(){ee(!1)}},"Ok"))),m.a.createElement(G.a,{show:re.show,onHide:function(){return ae({show:!1,id:void 0})}},m.a.createElement(G.a.Header,{closeButton:!0},m.a.createElement(G.a.Title,null,"Cancella")),m.a.createElement(G.a.Body,null,m.a.createElement("p",null,"Sei sicuro di voler eliminare il documento?")),m.a.createElement(G.a.Footer,null,m.a.createElement(_.a,{variant:"secondary",onClick:function(){return ae({show:!1,id:void 0})}},"No"),m.a.createElement(_.a,{variant:"primary",onClick:function(){ue(re.id),ae({show:!1,id:void 0})}},"Si"))),m.a.createElement(h.a,{className:"mt-2 p-2"},m.a.createElement(v.a,{md:5},m.a.createElement("p",{className:"margin-custom-l document-text"},t)),"Altro"!==t?m.a.createElement(m.a.Fragment,null,m.a.createElement(v.a,{md:3,className:"align-to-end "},a.map(function(e,t){return m.a.createElement("span",{key:e.id,className:"p-1 me-1  border border-3 position-relative "+(H===t?"rounded border-primary ":"border-white")},m.a.createElement("img",{src:Y.a,onClick:function(n){return me(e.id,t)}}),H===t&&c&&m.a.createElement(M.a,{style:{position:"absolute",top:"-75%",left:"25%",color:"#0275d8",cursor:"pointer"},icon:z.d,onClick:function(){return ae({show:!0,id:e.id})}}))})),a.length>0?m.a.createElement(v.a,{md:2,className:" d-flex justify-content-center "},c?m.a.createElement("p",{className:a.length>0?r:""},a.length>0?function(e){switch(e){case"IN_LAVORAZIONE":return"In lavorazione";case"APPROVATO":return"Approvato";case"RIFIUTATO":return"Rifiutato";default:return null}}(r):""):m.a.createElement("select",{className:"form-select-xs "+r+"-select","aria-label":"Default select example",defaultValue:r,onChange:function(e){"RIFIUTATO"===e.target.value&&K(!0),L(S.serviceUrl,{idClasseDocumento:n,stato:e.target.value}).then(function(){g(e.target.value),console.log(f),i()})}},m.a.createElement("option",{value:"APPROVATO"},"Approvato"),m.a.createElement("option",{value:"IN_LAVORAZIONE"},"In Lavorazione"),m.a.createElement("option",{value:"RIFIUTATO"},"Rifiutato"))):m.a.createElement(v.a,{md:2})):m.a.createElement(v.a,{md:5,className:"align-to-end"},a.map(function(e,t){return m.a.createElement("span",{key:e.id,className:"p-1 me-1  border border-3 position-relative "+(H===t?"rounded border-primary ":"border-white")},m.a.createElement("img",{src:Y.a,onClick:function(n){return me(e.id,t)}}),H===t&&c&&m.a.createElement(M.a,{style:{position:"absolute",top:"-75%",left:"25%",color:"#0275d8",cursor:"pointer"},icon:z.d,onClick:function(){return ue(e.id)}}))})),m.a.createElement(v.a,{md:2,className:"align-content-start"},c?m.a.createElement(m.a.Fragment,null,m.a.createElement("button",{className:"upload-buttons",onClick:function(){return k(!0),void F(S.serviceUrl,n).then(function(){k(!1),console.log("uploaded"),i()},function(){return k(!1)})}},A&&m.a.createElement(V.a,{animation:"border",variant:"secondary",size:"sm"}),m.a.createElement("span",{className:"highlighted-span document-text secondary-color"},"Carica",m.a.createElement(M.a,{icon:z.e,className:"primary-color mx-1"}))),o&&"APPROVATO"!==r&&m.a.createElement(M.a,{icon:z.c,className:"primary-color fa-lg mx-2 pointer-icon",onClick:function(e){return ee(!0)}})):m.a.createElement(m.a.Fragment,null,m.a.createElement("button",{className:"upload-buttons",onClick:function(){return e=b,P(!0),T(S.serviceUrl,e).then(function(){P(!1)},function(){return k(!1)});var e}},I&&m.a.createElement(V.a,{animation:"border",variant:"secondary",size:"sm"}),m.a.createElement("span",{className:"highlighted-span document-text secondary-color"},"Scarica",m.a.createElement(M.a,{icon:z.b,className:"primary-color mx-1"}))))),m.a.createElement("hr",null)))},Z=function(e){var t=e.isProspect,n=e.valid,r=Object(u.useState)([]),a=Object(d.a)(r,2),o=a[0],c=a[1];var i=function(){var e=w().get("guid");j(S.serviceUrl,e).then(function(e){var t;c(Object(U.a)(e)),t=e,console.log(t),t.filter(function(e){return"Altro"!==e.tipoDocumento}).every(function(e){if("APPROVATO"===e.statoDocumento)return!0})&&n()}).catch(function(e){return console.log(e)})};return Object(u.useEffect)(function(){i()},[]),m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"white-rounded-shadowed mt-4"},m.a.createElement(h.a,{className:"align-to-end"},m.a.createElement(v.a,{md:1},m.a.createElement("p",{className:"desc-text"},"DOCUMENTAZIONE")),m.a.createElement(v.a,{md:11},m.a.createElement("p",{className:"desc-text"},"*Campi Obbligatori"))),!t&&m.a.createElement(h.a,{className:"align-to-end"},m.a.createElement(v.a,{md:13},m.a.createElement("span",{className:"primary-color btn",onClick:function(){return function(){var e=w().get("guid");return I(S.serviceUrl,e)}()}},"Scarica tutto",m.a.createElement(M.a,{icon:z.b,className:" ms-1 primary-color"})))),m.a.createElement(h.a,{className:"align-to-start mt-4"},m.a.createElement(v.a,{md:5},m.a.createElement("p",{className:"desc-text margin-custom-l"},"CARICA DOCUMENTI")),m.a.createElement(v.a,{md:3},m.a.createElement("p",{className:"desc-text"},"FILE")),m.a.createElement(v.a,{md:2},m.a.createElement("p",{className:"desc-text"},"STATO")),m.a.createElement(v.a,{md:2})),o.filter(function(e){return"Altro"!==e.tipoDocumento}).map(function(e,n){return m.a.createElement(q,{key:n,tipoDocumento:e.tipoDocumento,classeDocumentoId:e.idClasseDocumento,statoDocumento:e.statoDocumento,listaDoc:e.listaDocumenti,notaFromDoc:e.nota,isProspect:t,update:i})})),m.a.createElement("div",{className:"white-rounded-shadowed mt-4"},m.a.createElement(h.a,{className:"align-to-start"},m.a.createElement(v.a,{md:12},m.a.createElement("p",{className:"desc-text"},"DOCUMENTAZIONE AGGIUNTIVA"))),m.a.createElement(h.a,{className:"align-to-start mt-4"},m.a.createElement(v.a,{md:10},m.a.createElement("p",{className:"desc-text margin-custom-l"},"CARICA DOCUMENTI")),m.a.createElement(v.a,{md:2})),o.filter(function(e){return"Altro"===e.tipoDocumento}).map(function(e,n){return m.a.createElement(q,{key:n,tipoDocumento:e.tipoDocumento,classeDocumentoId:e.idClasseDocumento,statoDocumento:e.statoDocumento,nota:e.nota,listaDoc:e.listaDocumenti,isProspect:t,update:i})})))},J=n(23),Q=function(){var e=Object(u.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(u.useState)({}),o=Object(d.a)(a,2),c=(o[0],o[1],Object(J.b)()),i=c.keycloak;c.initialized;console.log(i.token);return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"back-col"},m.a.createElement("button",{className:"custom-button m-3",onClick:function(e){return window.location.href="/entando-de-app/en/lista_richieste.page"}},m.a.createElement(M.a,{icon:z.a})," Torna alla lista"),m.a.createElement(R,{button:n,isProspect:void 0===i.token}),m.a.createElement(Z,{isProspect:void 0===i.token,valid:function(){r(!0)}})))};var K=function(){return m.a.createElement(Q,null)},X=n(57),W={serviceUrl:"service-url"},$=function(){return window&&window.entando&&window.entando.keycloak&&Object(s.a)({},window.entando.keycloak,{initialized:!0})||{initialized:!1}},ee=new X.a({realm:"entando",clientId:"entando-web",url:"http://34.78.126.51.nip.io/auth"});window.keycloak=ee;var te=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).keycloak=$(),n}return Object(i.a)(t,e),Object(a.a)(t,[{key:"connectedCallback",value:function(){!function(e){S.serviceUrl=e}(this.getAttribute("service-url")),this.mountPoint=document.createElement("div"),this.appendChild(this.mountPoint),this.keycloak=Object(s.a)({},$(),{initialized:!0}),console.log(window.keycloak),p.a.render(m.a.createElement(J.a,{authClient:ee},m.a.createElement(K,null)),this.mountPoint)}}],[{key:"observedAttributes",get:function(){return Object.values(W)}}]),t}(Object(l.a)(HTMLElement));customElements.define("pratica-widget",te)}},[[38,2,1]]]);
//# sourceMappingURL=main.92b37325.chunk.js.map