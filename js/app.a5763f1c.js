(function(t){function e(e){for(var n,o,s=e[0],c=e[1],u=e[2],l=0,p=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,o=1;o<r.length;o++){var s=r[o];0!==a[s]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},o={app:0},a={app:0},i=[];function s(t){return c.p+"js/"+({playLists:"playLists",profile:"profile",recent:"recent",topArtists:"topArtists",topTracks:"topTracks"}[t]||t)+"."+{playLists:"5a5ecb25",profile:"8422e7ef",recent:"fc42ffa5",topArtists:"23f7685d",topTracks:"1977d7fe"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={playLists:1,profile:1,recent:1,topArtists:1,topTracks:1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=new Promise((function(e,r){for(var n="css/"+({playLists:"playLists",profile:"profile",recent:"recent",topArtists:"topArtists",topTracks:"topTracks"}[t]||t)+"."+{playLists:"9bf5cdfd",profile:"de9959b3",recent:"863eadc5",topArtists:"9bf5cdfd",topTracks:"9b4b8385"}[t]+".css",a=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===a))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){u=p[s],l=u.getAttribute("data-href");if(l===n||l===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[t],f.parentNode.removeChild(f),r(i)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){o[t]=0})));var n=a[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var p=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",p.name="ChunkLoadError",p.type=n,p.request=o,r[1](p)}a[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var f=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"050e":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative max-w-full w-full bg-gray-900 flex flex-col md:flex-row",attrs:{id:"app"}},[r("router-view",{staticClass:"md:order-2 md:pl-24 min-h-screen"}),r("app-navigator",{staticClass:"block md:order-1 md:w-24"})],1)},a=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full md:fixed bottom-0 md:bottom-auto md:left-0 md:top-0 md:h-screen flex justify-center bg-black justify-around md:flex-col md:justify-between",attrs:{id:"navigation"}},[r("div",{staticClass:"hidden md:block text-white p-6"},[r("a",{attrs:{href:"/"}},[r("svg",{attrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 427.652 427.652","xml:space":"preserve"}},[r("path",{attrs:{d:"M213.826,0C95.733,0,0,95.733,0,213.826s95.733,213.826,213.826,213.826 s213.826-95.733,213.826-213.826S331.919,0,213.826,0z M306.886,310.32c-2.719,4.652-7.612,7.246-12.638,7.247 c-2.506,0-5.044-0.645-7.364-2c-38.425-22.456-82.815-26.065-113.295-25.138c-33.763,1.027-58.523,7.692-58.769,7.76 c-7.783,2.126-15.826-2.454-17.961-10.236c-2.134-7.781,2.43-15.819,10.209-17.962c1.116-0.307,27.76-7.544,64.811-8.766 c21.824-0.72,42.834,0.801,62.438,4.52c24.83,4.71,47.48,12.978,67.322,24.574C308.612,294.393,310.96,303.349,306.886,310.32z M334.07,253.861c-3.22,5.511-9.016,8.583-14.97,8.584c-2.968,0-5.975-0.763-8.723-2.369c-45.514-26.6-98.097-30.873-134.2-29.776 c-39.994,1.217-69.323,9.112-69.614,9.192c-9.217,2.515-18.746-2.906-21.275-12.124c-2.528-9.218,2.879-18.738,12.093-21.277 c1.322-0.364,32.882-8.937,76.77-10.384c25.853-0.852,50.739,0.949,73.96,5.354c29.412,5.58,56.241,15.373,79.744,29.108 C336.115,234.995,338.897,245.603,334.07,253.861z M350.781,202.526c-3.641,0-7.329-0.936-10.7-2.906 c-108.207-63.238-248.572-25.643-249.977-25.255c-11.313,3.117-23.008-3.527-26.124-14.839 c-3.117-11.312,3.527-23.008,14.839-26.124c1.621-0.447,40.333-10.962,94.166-12.737c31.713-1.044,62.237,1.164,90.72,6.567 c36.077,6.844,68.987,18.856,97.815,35.704c10.13,5.92,13.543,18.931,7.623,29.061C365.193,198.757,358.084,202.526,350.781,202.526 z"}})])])]),r("div",{staticClass:"nav-items flex md:flex-col"},[r("router-link",{staticClass:"nav-item hover:border-green-700",attrs:{to:"/profile"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.href,o=e.isActive,a=e.navigate;return[r("a",{class:[o&&"nav-item--selected"],attrs:{href:n},on:{click:a}},[r("svg",{attrs:{id:"user-icon",viewBox:"0 0 1024 1024"}},[r("path",{attrs:{d:"m730.06 679.64q-45.377 53.444-101.84 83.443t-120 29.999q-64.032 0-120.75-30.503t-102.6-84.451q-40.335 13.109-77.645 29.747t-53.948 26.722l-17.142 10.084q-29.747 19.159-51.175 57.729t-21.428 73.107 25.461 59.242 60.754 24.705h716.95q35.293 0 60.754-24.705t25.461-59.242-21.428-72.603-51.679-57.225q-6.554-4.033-18.907-10.84t-51.427-24.453-79.409-30.755zm-221.84 25.72q-34.285 0-67.561-14.873t-60.754-40.335-51.175-60.502-40.083-75.124-25.461-84.451-9.075-87.728q0-64.032 19.915-116.22t54.452-85.964 80.67-51.931 99.072-18.151 99.072 18.151 80.67 51.931 54.452 85.964 19.915 116.22q0 65.04-20.167 130.58t-53.948 116.72-81.426 83.443-98.568 32.268z"}})]),r("div",[t._v("Profile")])])]}}])}),r("router-link",{staticClass:"nav-item hover:border-green-700",attrs:{to:"/topArtists"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.href,o=e.isActive,a=e.navigate;return[r("a",{class:[o&&"nav-item--selected"],attrs:{href:n},on:{click:a}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 47.5 47.5","xml:space":"preserve"}},[r("title",[t._v("Microphone")]),r("g",[r("path",{attrs:{d:"M44.159,3.341C41.932,1.115,39.013,0,36.093,0c-2.919,0-5.838,1.114-8.064,3.341c-4.454,4.454-4.454,11.677,0,16.131     c2.227,2.227,5.146,3.341,8.064,3.341s5.839-1.114,8.066-3.341C48.613,15.019,48.613,7.796,44.159,3.341z"}}),r("path",{attrs:{d:"M22.161,14.999L0.646,39.161c-0.9,1.011-0.854,2.604,0.103,3.562l1.132,1.133L1.158,44.58     c-0.477,0.477-0.477,1.256,0,1.731l0.108,0.108c0.477,0.478,1.256,0.478,1.733,0l0.723-0.724l1.055,1.055     c0.957,0.957,2.552,1.003,3.563,0.104l24.155-21.509c-2.469-0.633-4.739-1.902-6.589-3.752     C24.019,19.706,22.779,17.416,22.161,14.999z M21.02,29.268l-5.145,5.146c-0.77,0.771-2.018,0.771-2.787,0     c-0.769-0.771-0.77-2.02,0-2.787l5.145-5.146c0.77-0.771,2.018-0.771,2.787,0C21.789,27.251,21.79,28.499,21.02,29.268z"}})])]),r("div",[t._v("Top Artists")])])]}}])}),r("router-link",{staticClass:"nav-item hover:border-green-700",attrs:{to:"/topTracks"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.href,o=e.isActive,a=e.navigate;return[r("a",{class:[o&&"nav-item--selected"],attrs:{href:n},on:{click:a}},[r("svg",{attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 489.164 489.164","xml:space":"preserve"}},[r("path",{attrs:{d:"M159.582,75.459v285.32c-14.274-10.374-32.573-16.616-52.5-16.616c-45.491,0-82.5,32.523-82.5,72.5s37.009,72.5,82.5,72.5 s82.5-32.523,82.5-72.5V168.942l245-60.615v184.416c-14.274-10.374-32.573-16.616-52.5-16.616c-45.491,0-82.5,32.523-82.5,72.5 s37.009,72.5,82.5,72.5s82.5-32.523,82.5-72.5V0L159.582,75.459z"}})]),r("div",[t._v("Top Tracks")])])]}}])}),r("router-link",{staticClass:"nav-item hover:border-green-700",attrs:{to:"/recent"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.href,o=e.isActive,a=e.navigate;return[r("a",{class:[o&&"nav-item--selected"],attrs:{href:n},on:{click:a}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",x:"0px",y:"0px",width:"30px",height:"29px",viewBox:"0 0 510 510"}},[r("title",[t._v("Time")]),r("g",[r("g",{attrs:{id:"history"}},[r("path",{attrs:{d:"M267.75,12.75c-89.25,0-168.3,48.45-209.1,122.4L0,76.5v165.75h165.75    l-71.4-71.4c33.15-63.75,96.9-107.1,173.4-107.1C372.3,63.75,459,150.45,459,255s-86.7,191.25-191.25,191.25    c-84.15,0-153-53.55-181.05-127.5H33.15c28.05,102,122.4,178.5,234.6,178.5C402.9,497.25,510,387.6,510,255    C510,122.4,400.35,12.75,267.75,12.75z M229.5,140.25V270.3l119.85,71.4l20.4-33.15l-102-61.2v-107.1H229.5z"}})])])]),r("div",[t._v("Recent")])])]}}])}),r("router-link",{staticClass:"nav-item hover:border-green-700",attrs:{to:"/playLists"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.href,o=e.isActive,a=e.navigate;return[r("a",{class:[o&&"nav-item--selected"],attrs:{href:n},on:{click:a}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 405.333 405.333","xml:space":"preserve"}},[r("g",[r("rect",{attrs:{x:"0",y:"53.333",width:"256",height:"42.667"}}),r("rect",{attrs:{x:"0",y:"138.667",width:"256",height:"42.667"}}),r("path",{attrs:{d:"M298.667,53.333v174.613c-6.72-2.453-13.76-3.947-21.333-3.947c-35.307,0-64,28.693-64,64c0,35.307,28.693,64,64,64     c35.307,0,64-28.693,64-64V96h64V53.333H298.667z"}}),r("rect",{attrs:{x:"0",y:"224",width:"170.667",height:"42.667"}})])]),r("div",[t._v("Play lists")])])]}}])})],1)])},s=[],c={data:function(){return{}}},u=c,l=(r("655c"),r("2877")),p=Object(l["a"])(u,i,s,!1,null,"10f60f56",null),f=p.exports,d={components:{AppNavigator:f}},m=d,h=Object(l["a"])(m,o,a,!1,null,"11368df6",null),v=h.exports,g=(r("d3b7"),r("8c4f")),y=r("78cc");n["a"].use(g["a"]);var w=[{path:"/profile",name:"Profile",component:function(){return r.e("profile").then(r.bind(null,"c66d"))}},{path:"/login",name:"Login",component:function(){return r.e("profile").then(r.bind(null,"a55b"))}},{path:"/playLists",name:"PlayLists",component:function(){return r.e("playLists").then(r.bind(null,"ba2b"))}},{path:"/recent",name:"Recent",component:function(){return r.e("recent").then(r.bind(null,"7413"))}},{path:"/topArtists",name:"topArtists",component:function(){return r.e("topArtists").then(r.bind(null,"914a"))}},{path:"/topTracks",name:"topTracks",component:function(){return r.e("topTracks").then(r.bind(null,"3d9f"))}},{path:"/playlists/:id",name:"playlist",component:function(){return r.e("topTracks").then(r.bind(null,"fddd"))}},{path:"/recommendations/:id",name:"recommendations",component:function(){return r.e("topTracks").then(r.bind(null,"990e"))}},{path:"/",redirect:"/profile"}],b=new g["a"]({routes:w,scrollBehavior:function(t,e,r){return r||{x:0,y:0}}});b.beforeEach((function(t,e,r){y["a"]?r():"/login"!==t.path?r("/login"):r()}));var k=b,_=r("2f62");n["a"].use(_["a"]);var x=new _["a"].Store({state:{},mutations:{},actions:{},modules:{}});r("845f");n["a"].config.productionTip=!1,new n["a"]({router:k,store:x,render:function(t){return t(v)}}).$mount("#app")},"5f87":function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"c",(function(){return b})),r.d(e,"b",(function(){return k}));r("96cf");var n=r("1da1"),o=r("bc3a"),a=r.n(o),i=(r("ac1f"),function(){var t,e={},r=/([^/?&;=]+)=?([^&;]*)/g,n=window.location.hash.substring(1);while(t=r.exec(n))e[t[1]]=decodeURIComponent(t[2]);return e}),s=i,c=function(){return"https://vue-tailwind-css-spotify-serve.herokuapp.com"},u=a.a.create({baseURL:c()}),l=36e5,p=l,f=function(){return window.localStorage.setItem("spotify_token_timestamp",Date.now())},d=function(t){f(),window.localStorage.setItem("spotify_access_token",t)},m=function(t){return window.localStorage.setItem("spotify_refresh_token",t)},h=function(){return window.localStorage.getItem("spotify_token_timestamp")},v=function(){return window.localStorage.getItem("spotify_access_token")},g=function(){return window.localStorage.getItem("spotify_refresh_token")},y=function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.get("/refresh_token?refresh_token=".concat(g()));case 3:e=t.sent,r=e.data,n=r.access_token,d(n),window.location.reload(),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=s(),e=t.access_token,r=t.error,n=t.refresh_token;r&&(console.error(r),y());var o=function(){return Date.now()-h()>p};o()&&y();var a=v(),i=g(),c=function(t){return!t||"undefined"===t};return c(i)&&m(n),c(a)?(d(e),e):a},b=w(),k=function(){window.localStorage.removeItem("spotify_token_timestamp"),window.localStorage.removeItem("spotify_access_token"),window.localStorage.removeItem("spotify_refresh_token"),window.location.reload()}},"655c":function(t,e,r){"use strict";var n=r("050e"),o=r.n(n);o.a},"78cc":function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"q",(function(){return c})),r.d(e,"i",(function(){return l})),r.d(e,"h",(function(){return p})),r.d(e,"m",(function(){return f})),r.d(e,"l",(function(){return d})),r.d(e,"k",(function(){return m})),r.d(e,"p",(function(){return h})),r.d(e,"o",(function(){return v})),r.d(e,"n",(function(){return g})),r.d(e,"d",(function(){return y})),r.d(e,"c",(function(){return w})),r.d(e,"b",(function(){return b})),r.d(e,"e",(function(){return k})),r.d(e,"g",(function(){return _})),r.d(e,"f",(function(){return C})),r.d(e,"j",(function(){return A})),r.d(e,"r",(function(){return T}));r("99af"),r("a15b"),r("d81d"),r("fb6a");var n=r("bc3a"),o=r.n(n),a=r("5f87"),i=a["c"],s={Authorization:"Bearer ".concat(i),"Content-Type":"application/json"},c=function(){return o.a.get("https://api.spotify.com/v1/me",{headers:s})},u=function(){return o.a.get("https://api.spotify.com/v1/me/following?type=artist",{headers:s})},l=function(){return o.a.get("https://api.spotify.com/v1/me/player/recently-played",{headers:s})},p=function(){return o.a.get("https://api.spotify.com/v1/me/playlists",{headers:s})},f=function(){return o.a.get("https://api.spotify.com/v1/me/top/artists?limit=50&time_range=short_term",{headers:s})},d=function(){return o.a.get("https://api.spotify.com/v1/me/top/artists?limit=50&time_range=medium_term",{headers:s})},m=function(){return o.a.get("https://api.spotify.com/v1/me/top/artists?limit=50&time_range=long_term",{headers:s})},h=function(){return o.a.get("https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=short_term",{headers:s})},v=function(){return o.a.get("https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=medium_term",{headers:s})},g=function(){return o.a.get("https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=long_term",{headers:s})},y=function(t,e){return o.a.get("https://api.spotify.com/v1/playlists/".concat(t,"/followers/contains?ids=").concat(e),{headers:s})},w=function(t,e){var r="https://api.spotify.com/v1/users/".concat(t,"/playlists"),n=JSON.stringify({name:e});return o()({method:"post",url:r,headers:s,data:n})},b=function(t,e){var r="https://api.spotify.com/v1/playlists/".concat(t,"/tracks?uris=").concat(e);return o()({method:"post",url:r,headers:s})},k=function(t){var e="https://api.spotify.com/v1/playlists/".concat(t,"/followers");return o()({method:"put",url:e,headers:s})},_=function(t){return o.a.get("https://api.spotify.com/v1/playlists/".concat(t),{headers:s})},x=function(t){return t.map((function(t){var e=t.track;return e.id})).join(",")},C=function(t){var e=x(t);return o.a.get("https://api.spotify.com/v1/audio-features?ids=".concat(e),{headers:s})},A=function(t){var e=t.sort((function(){return.5-Math.random()})),r=x(e.slice(0,5)),n="",a="";return o.a.get("https://api.spotify.com/v1/recommendations?seed_tracks=".concat(r,"&seed_artists=").concat(n,"&seed_genres=").concat(a),{headers:s})},T=function(){return o.a.all([c(),u(),p(),m(),g()]).then(o.a.spread((function(t,e,r,n,o){return{user:t.data,followedArtists:e.data,playlists:r.data,topArtists:n.data,topTracks:o.data}})))}},"845f":function(t,e,r){}});
//# sourceMappingURL=app.a5763f1c.js.map