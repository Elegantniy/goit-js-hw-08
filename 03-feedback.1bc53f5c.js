var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const t=document.querySelector(".feedback-form"),n={};var o={},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,g=Math.max,m=Math.min,v=function(){return s.Date.now()};function p(e,t,n){var o,r,i,a,f,u,c=0,l=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,f=setTimeout(j,t),l?p(e):a}function O(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function j(){var e=v();if(O(e))return h(e);f=setTimeout(j,function(e){var n=t-(e-u);return s?m(n,i-(e-c)):n}(e))}function h(e){return f=void 0,d&&o?p(e):(o=r=void 0,a)}function w(){var e=v(),n=O(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(j,t),p(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=y(t)||0,b(n)&&(l=!!n.leading,i=(s="maxWait"in n)?g(y(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},w.flush=function(){return void 0===f?a:h(v())},w}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||f.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}o=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})},t.addEventListener("input",o((function(e){if(localStorage.getItem("feedback-form-state")){const t=JSON.parse(localStorage.getItem("feedback-form-state"));t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))}else n[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(n))}),500)),t.addEventListener("submit",(function(e){e.preventDefault(),console.log(n),e.target.reset(),localStorage.removeItem("feedback-form-state")})),function(){let e=localStorage.getItem("feedback-form-state");console.log(e),e&&(e=JSON.parse(e),Object.entries(e).forEach((([e,n])=>{t.elements[e].value=n})))}();
//# sourceMappingURL=03-feedback.1bc53f5c.js.map
