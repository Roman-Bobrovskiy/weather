(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{16:function(e){e.exports=JSON.parse('{"apiCall":"https://api.openweathermap.org/data/2.5/weather","query":"?q=","dailyCall":"https://api.openweathermap.org/data/2.5/onecall?","daily":"&exclude=daily","API_KEY":"&appid=3f015557a1dd0d45362802be4a9b6407","imgUrl":"https://openweathermap.org/img/wn/","noImage":"https://image.freepik.com/free-vector/man-sitting-on-big-question-mark-symbol_24381-1192.jpg"}')},22:function(e,t,a){e.exports={wrapHourlyWeather:"HourlyWeather_wrapHourlyWeather__1-5EW",wrapCards:"HourlyWeather_wrapCards__1P82Y",hourlyWeatherCard:"HourlyWeather_hourlyWeatherCard__1tgS7",cardList:"HourlyWeather_cardList__1-97F",boxTempCardItem:"HourlyWeather_boxTempCardItem__2KnJw",itemTemp:"HourlyWeather_itemTemp__T76DO"}},30:function(e,t,a){e.exports={wrapCurrentWeather:"CurrentWeather_wrapCurrentWeather__zI4-o",cityName:"CurrentWeather_cityName__bXxE2",currentTemp:"CurrentWeather_currentTemp__C3x2G",boxSun:"CurrentWeather_boxSun__21csR"}},35:function(e,t,a){e.exports={wrapHeader:"CityPage_wrapHeader__1Ju4i",wrapMain:"CityPage_wrapMain__rNVUI",separator:"CityPage_separator__3ewL5"}},42:function(e,t,a){e.exports={searchFrom:"SearchForm_searchFrom__M9HF2",searchInput:"SearchForm_searchInput__3k4rO",searchBtn:"SearchForm_searchBtn__1JDIF"}},48:function(e,t,a){e.exports={wrapFooter:"Footer_wrapFooter__PXSSP",footerText:"Footer_footerText__2uHpc"}},49:function(e,t,a){e.exports={wrapHeader:"Home_wrapHeader__2axDV",wrapMain:"Home_wrapMain__2U60U"}},60:function(e){e.exports=JSON.parse('{"wrongCityName":"City name is incorrect or no response from the server"}')},8:function(e,t,a){e.exports={wrapInfoBox:"InfoBox_wrapInfoBox__1x46a",infoContainer:"InfoBox_infoContainer__3DAOQ",infoItems:"InfoBox_infoItems__2cYFs",infoSvgImg:"InfoBox_infoSvgImg__1Ikom",infoImg:"InfoBox_infoImg__3oCzT"}},9:function(e,t,a){e.exports={cardContainer:"Card_cardContainer__10Xe4",navLink:"Card_navLink__cjOMd",lustUpdate:"Card_lustUpdate__2rbN2",cityCountry:"Card_cityCountry__1R0k7",temp:"Card_temp__1qQC0",card:"Card_card__1eE8R",feelsLike:"Card_feelsLike__1bMGN",wrapInfoData:"Card_wrapInfoData__3ZAf5",infoData:"Card_infoData__cfJpc",infoDataSun:"Card_infoDataSun__9IGLs",row:"Card_row__26fRN",wrapBtn:"Card_wrapBtn__24gXj",cardBtn:"Card_cardBtn__2XvB_"}},99:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(18),c=a.n(n),i=a(26),s=a(12),l=a(27),o=a(28),d=a(41),h=a(40),j=a(6),u={home:"/weather",citypage:"/city"},m=a(2),b=a(15),p={ADD_CITY:"city/add",REMOVE_CITY:"city/remove",UPD_WEATHER:"wheather/upd",CITY_PAGE_WEATHER:"wheather/cityPageWeather",ERROR:"error",LOADING:"loading"},x={getCityData:function(e){return{type:p.ADD_CITY,payload:e}},removeCityData:function(e){return{type:p.REMOVE_CITY,payload:e}},updWeather:function(e){return{type:p.UPD_WEATHER,payload:e}},cityPageWeather:function(e){return{type:p.CITY_PAGE_WEATHER,payload:e}},error:function(e){return{type:p.ERROR,payload:e}},loading:function(e){return{type:p.LOADING,payload:e}}},g=a(45),O=a.n(g),f=a(16),w={getData:function(e){return O.a.get(f.apiCall+f.query+e+f.API_KEY)},getCityPageData:function(e,t){return O.a.get(f.dailyCall+"lat="+t+"&lon="+e+f.daily+f.API_KEY)}},v=a(42),_=a.n(v),y=a(36),C=(a(58),a(60)),N=a(0);var I={hendleChangeError:x.error},z=Object(s.b)((function(e){return e.weather}),I)((function(e){var t=e.error,a=e.hendleChangeError;return Object(N.jsxs)(y.a,{size:"sm",show:t,onHide:function(){return a(!1)},"aria-labelledby":"example-modal-sizes-title-sm",children:[Object(N.jsx)(y.a.Header,{closeButton:!0,children:Object(N.jsx)(y.a.Title,{id:"example-modal-sizes-title-sm",children:"Error"})}),Object(N.jsx)(y.a.Body,{children:C.wrongCityName})]})}));var D={handleSubmit:x.getCityData,err:x.error,loading:x.loading},S=Object(s.b)((function(e){return{state:e}}),D)((function(e){var t=e.handleSubmit,a=e.err,n=e.loading,c=Object(r.useState)(""),i=Object(b.a)(c,2),s=i[0],l=i[1];return Object(r.useEffect)((function(){(JSON.parse(window.localStorage.getItem("city"))||[]).map((function(e){return w.getData(e).then((function(e){return t(Object(m.a)({},e.data))})).catch((function(e){return a(!0)})).finally((function(){return n(!1)}))}))}),[t,a,n]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(z,{}),Object(N.jsxs)("form",{className:_.a.searchFrom,onSubmit:function(e){n(!0),e.preventDefault(),w.getData(s).then((function(e){return t(Object(m.a)({},e.data))})).catch((function(e){return a(!0)})).finally((function(){return n(!1)})),l("")},children:[Object(N.jsx)("input",{className:_.a.searchInput,type:"text",value:s,onChange:function(e){l(e.target.value)},placeholder:"Search city"}),Object(N.jsx)("button",{className:_.a.searchBtn,type:"submit",children:"Search"})]})]})})),M=a(24),E={add:function(e){var t=JSON.parse(window.localStorage.getItem("city"))||[];t=[].concat(Object(M.a)(t.filter((function(t){return t!==e}))),[e]),window.localStorage.setItem("city",JSON.stringify(t))},remove:function(e){var t=JSON.parse(window.localStorage.getItem("city"))||[];t=Object(M.a)(t.filter((function(t){return e!==t}))),window.localStorage.setItem("city",JSON.stringify(t))},addCityId:function(e){var t=JSON.parse(window.localStorage.getItem("cityData"));t=e,window.localStorage.setItem("cityData",JSON.stringify(t))}},L=a(103),A=a(64),T=a(25),B=a(65),H={timeLastUpdate:function(e){var t=new Date(1e3*e),a=t.getFullYear(),r=t.getMonth(),n=t.getDate(),c=t.getHours(),i=t.getMinutes();return"".concat(a,".").concat(r<10?"0"+r:r,".").concat(n<10?"0"+n:n," at ").concat(c,":").concat(i<10?"0"+i:i)},timeWeekDay:function(e){var t=new Date(1e3*e),a=t.getDay(),r=t.getHours(),n=t.getMinutes();return"".concat(["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][a]," ").concat(r,":").concat(n<10?"0"+n:n)},time:function(e){var t=new Date(1e3*e),a=t.getHours(),r=t.getMinutes();return"".concat(a,":").concat(r<10?"0"+r:r)},lengthOfTheDay:function(e,t){var a=new Date(t)-new Date(e),r=new Date(1e3*a),n=r.getHours()-3,c=r.getMinutes();return"".concat(n,":").concat(c<10?"0"+c:c)}},W={direction:function(e){var t=String.fromCharCode(4278124720);return"".concat(e).concat(t)},speed:function(e){return Math.round(e)}},V=function(e){return Math.round(e-273.15)};function k(e){var t=e.deg,a=document.querySelector("#svgImg".concat(t));return console.log(a),a&&a.setAttribute("style","-webkit-transform: rotate(".concat(t,"deg);\n      transform: rotate(").concat(t,"deg);\n      ")),Object(N.jsx)("svg",{id:"svgImg".concat(t),width:"20px",height:"20px",viewBox:"0 0 16 16",children:Object(N.jsx)("path",{d:"M11.76 4.3L8.1 11.77 8 6.26l.45-.24 3.31-1.72M14 2L7.99 5.13 2 2.12 8.13 14 14 2z",fill:"#eb6e4b"})})}var R=a(9),F=a.n(R);var P={handleUpdate:x.updWeather,handleRemove:x.removeCityData,err:x.error,loading:x.loading},U=Object(s.b)((function(e){return{state:e}}),P)((function(e){var t=e.state,a=e.handleUpdate,n=e.handleRemove,c=e.err,s=Object(r.useState)(""),l=Object(b.a)(s,2),o=l[0],d=l[1],h=Object(r.useState)(!1),j=Object(b.a)(h,2),p=j[0],x=j[1];return 0!==t.weather.card.length&&Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(A.a,{className:F.a.cardContainer,children:Object(N.jsx)(B.a,{xs:1,sm:2,md:2,className:F.a.row,children:t.weather.card.map((function(e){return Object(N.jsx)(i.c,{className:F.a.navLink,to:{pathname:u.citypage,id:e.id,state:t},children:Object(N.jsx)(T.a,{className:F.a.card,children:t.weather.loading?Object(N.jsx)(L.a,{animation:"grow",variant:"info"}):Object(N.jsxs)(T.a.Body,{children:[Object(N.jsxs)(T.a.Title,{className:F.a.cityCountry,children:[Object(N.jsxs)("div",{className:F.a.wrapBtn,children:[Object(N.jsx)("button",{className:F.a.cardBtn,onClick:function(t){return function(e,t){x(!0),t.preventDefault(),d(e),w.getData(e).then((function(e){return a(Object(m.a)({},e.data))})).catch((function(e){return c(!0)})).finally((function(){return x(!1)}))}(e.name,t)},children:p&&e.name===o?Object(N.jsx)(L.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}):Object(N.jsxs)("svg",{width:"20",height:"20",fill:"currentColor",className:"bi bi-arrow-clockwise",viewBox:"0 0 16 16",children:[Object(N.jsx)("path",{d:"M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"}),Object(N.jsx)("path",{d:"M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"})]})}),Object(N.jsx)("button",{className:F.a.cardBtn,onClick:function(t){return function(e,t){t.preventDefault(),E.remove(e),n(e)}(e.name,t)},children:Object(N.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-x-circle",viewBox:"0 0 16 16",children:[Object(N.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(N.jsx)("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})]})})]}),Object(N.jsxs)(T.a.Text,{className:F.a.lustUpdate,children:["Last update ",H.timeLastUpdate(e.dt)]}),e.name,", ",e.sys.country]}),Object(N.jsxs)(T.a.Text,{className:F.a.temp,children:[Object(N.jsx)(T.a.Img,{variant:"center",src:f.imgUrl+e.weather[0].icon+".png",alt:e.weather[0].main}),V(e.main.temp),"\xb0C"]}),Object(N.jsxs)(T.a.Text,{className:F.a.feelsLike,children:["Feels like ",V(e.main.feels_like),"\xb0C ",e.weather[0].main]}),Object(N.jsxs)("ul",{className:F.a.wrapInfoData,children:[Object(N.jsxs)("li",{className:F.a.infoData,children:[W.speed(e.wind.speed)," m/s"," ",Object(N.jsx)(k,{deg:e.wind.deg}),W.direction(e.wind.deg)]}),Object(N.jsxs)("li",{className:F.a.infoData,children:["Umidity: ",e.main.humidity,"%"]}),Object(N.jsxs)("li",{className:F.a.infoData,children:["Pressure: ",e.main.pressure,"hPa"]}),Object(N.jsxs)("li",{className:F.a.infoData,children:["Visibility: ",e.visibility/1e3,"km"]}),Object(N.jsxs)("li",{className:F.a.infoDataSun,children:[Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 28.17 28.17",margin:"0",children:Object(N.jsx)("path",{d:"M14 20.01c-3.18 0-5.77-2.59-5.77-5.77S10.82 8.47 14 8.47s5.77 2.59 5.77 5.77-2.59 5.77-5.77 5.77zm0-10.47c-2.59 0-4.69 2.1-4.69 4.69s2.1 4.69 4.69 4.69 4.69-2.1 4.69-4.69S16.58 9.54 14 9.54zm7.46 12.93c-.19 0-.38-.07-.53-.22l-1.89-1.89c-.29-.29-.29-.77 0-1.05.14-.14.33-.22.53-.22s.39.08.53.22l1.89 1.89c.29.29.29.77 0 1.05-.14.15-.33.22-.53.22zm-14.95-.01c-.19 0-.38-.07-.53-.22-.29-.29-.29-.77 0-1.05l1.89-1.89c.3-.29.75-.29 1.05-.01.15.15.22.34.22.54s-.07.39-.22.53l-1.89 1.89c-.13.14-.32.21-.52.21zm18.07-7.42h-2.67c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.68c.4 0 .72.31.74.7v.04c-.03.45-.36.76-.75.76zm-18.5 0H3.41c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.68c.4 0 .72.31.74.7v.04c-.01.45-.34.76-.75.76zM8.4 9.39c-.19 0-.38-.07-.53-.22L5.98 7.28c-.29-.29-.29-.77 0-1.05.28-.28.77-.28 1.05 0l1.89 1.89c.29.29.29.77 0 1.05-.14.15-.33.22-.52.22zm11.19 0c-.19 0-.38-.07-.53-.22-.14-.14-.22-.33-.22-.53s.08-.39.22-.53l1.89-1.89c.3-.29.75-.29 1.05-.01.3.3.3.77.01 1.06l-1.89 1.89c-.15.16-.35.23-.53.23zM14 7.09h-.04c-.21-.01-.39-.1-.53-.25-.13-.15-.2-.34-.19-.54V3.67c0-.41.34-.75.75-.75s.75.34.75.75v2.66c.01.2-.07.39-.21.54-.15.13-.33.22-.53.22zm0 18.48h-.04c-.21-.01-.39-.1-.53-.25-.13-.15-.2-.34-.19-.54v-2.63c0-.41.34-.75.75-.75s.75.34.75.75v2.66c.01.2-.07.39-.21.54-.15.14-.33.22-.53.22z"})}),Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-up",viewBox:"0 0 16 16",children:Object(N.jsx)("path",{d:"M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"})}),H.time(e.sys.sunrise)," ",Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-up",viewBox:"0 0 16 16",transform:"rotate(180)",margin:"0",children:Object(N.jsx)("path",{d:"M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"})}),H.time(e.sys.sunset)]})]})]})},e.id)},e.id)}))})})})})),Y=a(48),J=a.n(Y);function G(){return Object(N.jsx)("footer",{children:Object(N.jsx)("div",{className:J.a.wrapFooter,children:Object(N.jsx)("p",{className:J.a.footerText,children:"Powered by React/Redux"})})})}var X=a(49),Z=a.n(X);function q(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("header",{children:Object(N.jsx)("div",{className:Z.a.wrapHeader,children:Object(N.jsx)(S,{})})}),Object(N.jsx)("main",{children:Object(N.jsx)("div",{className:Z.a.wrapMain,children:Object(N.jsx)(U,{})})}),Object(N.jsx)(G,{})]})}var K=a(104);function Q(e){var t,a,r=e.temp;return t={width:"100%"},a=r<10&&r>0?{position:"relative",height:"max-content",bottom:"".concat(r/1.7,"px"),left:"0",border:"1px solid rgba(0, 0, 0, 0.125)",display:"flex",background:r>0?"rgba(255, 0, 0, 0.0".concat(r):"rgba(0, 0, 255, 0.".concat(-r)}:{position:"relative",height:"max-content",bottom:"".concat(r/1.7,"px"),border:"1px solid rgba(0, 0, 0, 0.125)",display:"flex",background:r>0?"rgba(255, 0, 0, 0.".concat(r):"rgba(0, 0, 255, ".concat(-r/10)},Object(N.jsx)("div",{style:t,children:Object(N.jsxs)("span",{style:a,children:[" ",r," \xb0C "]})})}var $={hScroll:function(e){e.currentTarget.scrollLeft+=e.deltaY}},ee=a(22),te=a.n(ee);var ae={pageWeather:x.cityPageWeather,handleSubmit:x.getCityData,err:x.error,loading:x.loading},re=Object(s.b)((function(e){return e.weather}),ae)((function(e){var t=e.id,a=e.cityData,n=e.card,c=e.pageWeather,i=e.err,s=e.loading;return Object(r.useEffect)((function(){n.map((function(e){return t===e.id&&0===a.length&&w.getCityPageData(e.coord.lon,e.coord.lat).then(s(!0)).then((function(a){return c(Object(m.a)(Object(m.a)({},a.data),{},{name:e.name,id:t}))})).catch((function(e){return i(e.message)})).finally((function(){return s(!1)}))}))}),[c,t,n,a.length,i,s]),Object(r.useEffect)((function(){c([])}),[c]),Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("div",{className:te.a.wrapHourlyWeather,children:Object(N.jsx)("div",{onWheel:function(e){return $.hScroll(e)},id:"scroll_container",className:te.a.wrapCards,children:0!==a.length&&a.hourly.map((function(e){return Object(N.jsxs)("ul",{className:te.a.hourlyWeatherCard,children:[Object(N.jsx)("li",{className:te.a.cardList,children:H.timeWeekDay(e.dt)}),Object(N.jsx)("li",{className:te.a.cardList,children:Object(N.jsx)("img",{src:f.imgUrl+e.weather[0].icon+".png",alt:e.weather[0].main})}),Object(N.jsx)("li",{className:te.a.boxTempCardItem,children:Object(N.jsx)(Q,{temp:V(e.temp)})}),Object(N.jsxs)("li",{className:te.a.cardList,children:["Feels like ",V(e.feels_like)," \xb0C"]}),Object(N.jsxs)("li",{className:te.a.cardList,children:[Object(N.jsx)(k,{deg:e.wind_deg}),W.speed(e.wind_speed)," m/s"]}),Object(N.jsxs)("li",{className:te.a.cardList,children:["gusts to ",W.speed(e.wind_gust)," m/s"]})]},Object(K.a)())}))})})})})),ne=a(30),ce=a.n(ne);var ie=Object(s.b)((function(e){return e.weather}),null)((function(e){var t=e.cityData;return Object(N.jsx)(N.Fragment,{children:0!==t.length&&Object(N.jsxs)("div",{className:ce.a.wrapCurrentWeather,children:[Object(N.jsx)("p",{className:ce.a.cityName,children:t.name}),Object(N.jsxs)("p",{className:ce.a.currentTemp,children:[V(t.current.temp)," \xb0"]}),Object(N.jsxs)("div",{className:ce.a.boxSun,children:[Object(N.jsx)("p",{children:"Now"}),Object(N.jsxs)("p",{className:ce.a.infoDataSun,children:[Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 28.17 28.17",margin:"0",children:Object(N.jsx)("path",{d:"M14 20.01c-3.18 0-5.77-2.59-5.77-5.77S10.82 8.47 14 8.47s5.77 2.59 5.77 5.77-2.59 5.77-5.77 5.77zm0-10.47c-2.59 0-4.69 2.1-4.69 4.69s2.1 4.69 4.69 4.69 4.69-2.1 4.69-4.69S16.58 9.54 14 9.54zm7.46 12.93c-.19 0-.38-.07-.53-.22l-1.89-1.89c-.29-.29-.29-.77 0-1.05.14-.14.33-.22.53-.22s.39.08.53.22l1.89 1.89c.29.29.29.77 0 1.05-.14.15-.33.22-.53.22zm-14.95-.01c-.19 0-.38-.07-.53-.22-.29-.29-.29-.77 0-1.05l1.89-1.89c.3-.29.75-.29 1.05-.01.15.15.22.34.22.54s-.07.39-.22.53l-1.89 1.89c-.13.14-.32.21-.52.21zm18.07-7.42h-2.67c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.68c.4 0 .72.31.74.7v.04c-.03.45-.36.76-.75.76zm-18.5 0H3.41c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.68c.4 0 .72.31.74.7v.04c-.01.45-.34.76-.75.76zM8.4 9.39c-.19 0-.38-.07-.53-.22L5.98 7.28c-.29-.29-.29-.77 0-1.05.28-.28.77-.28 1.05 0l1.89 1.89c.29.29.29.77 0 1.05-.14.15-.33.22-.52.22zm11.19 0c-.19 0-.38-.07-.53-.22-.14-.14-.22-.33-.22-.53s.08-.39.22-.53l1.89-1.89c.3-.29.75-.29 1.05-.01.3.3.3.77.01 1.06l-1.89 1.89c-.15.16-.35.23-.53.23zM14 7.09h-.04c-.21-.01-.39-.1-.53-.25-.13-.15-.2-.34-.19-.54V3.67c0-.41.34-.75.75-.75s.75.34.75.75v2.66c.01.2-.07.39-.21.54-.15.13-.33.22-.53.22zm0 18.48h-.04c-.21-.01-.39-.1-.53-.25-.13-.15-.2-.34-.19-.54v-2.63c0-.41.34-.75.75-.75s.75.34.75.75v2.66c.01.2-.07.39-.21.54-.15.14-.33.22-.53.22z"})}),Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-up",viewBox:"0 0 16 16",children:Object(N.jsx)("path",{d:"M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"})}),H.time(t.current.sunrise)," ",Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-up",viewBox:"0 0 16 16",transform:"rotate(180)",margin:"0",children:Object(N.jsx)("path",{d:"M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"})}),H.time(t.current.sunset)]})]})]})})})),se=a(8),le=a.n(se);var oe=Object(s.b)((function(e){return e.weather}),null)((function(e){var t=e.cityData;return Object(N.jsx)(N.Fragment,{children:0!==t.length&&Object(N.jsxs)("div",{className:le.a.wrapInfoBox,children:[Object(N.jsxs)("ul",{className:le.a.infoContainer,children:[Object(N.jsxs)("li",{className:le.a.infoItems,children:[Object(N.jsx)("span",{className:le.a.infoSvgImg,children:Object(N.jsxs)("svg",{width:"26",height:"26",fill:"currentColor",viewBox:"0 0 16 16",children:[Object(N.jsx)("path",{d:"M16 7.5a2.5 2.5 0 0 1-1.456 2.272 3.513 3.513 0 0 0-.65-.824 1.5 1.5 0 0 0-.789-2.896.5.5 0 0 1-.627-.421 3 3 0 0 0-5.22-1.625 5.587 5.587 0 0 0-1.276.088 4.002 4.002 0 0 1 7.392.91A2.5 2.5 0 0 1 16 7.5z"}),Object(N.jsx)("path",{d:"M7 5a4.5 4.5 0 0 1 4.473 4h.027a2.5 2.5 0 0 1 0 5H3a3 3 0 0 1-.247-5.99A4.502 4.502 0 0 1 7 5zm3.5 4.5a3.5 3.5 0 0 0-6.89-.873.5.5 0 0 1-.51.375A2 2 0 1 0 3 13h8.5a1.5 1.5 0 1 0-.376-2.953.5.5 0 0 1-.624-.492V9.5z"})]})}),"Cloudiness: ",t.current.clouds," %"]}),Object(N.jsxs)("li",{className:le.a.infoItems,children:[Object(N.jsx)("span",{className:le.a.infoSvgImg,children:Object(N.jsxs)("svg",{width:"26",height:"26",fill:"currentColor",viewBox:"0 0 16 16",children:[Object(N.jsx)("path",{d:"M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415z"}),Object(N.jsx)("path",{d:"M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"})]})}),"Feels like: ",V(t.current.feels_like)," \xb0"]}),Object(N.jsxs)("li",{className:le.a.infoItems,children:[Object(N.jsx)("span",{className:le.a.infoSvgImg,children:Object(N.jsxs)("svg",{width:"26",height:"26",fill:"currentColor",viewBox:"0 0 16 16",children:[Object(N.jsx)("path",{d:"M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"}),Object(N.jsx)("path",{d:"M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"})]})}),"Dew point: ",V(t.current.dew_point)," \xb0"]}),Object(N.jsxs)("li",{className:le.a.infoItems,children:[Object(N.jsx)("span",{className:le.a.infoSvgImg,children:Object(N.jsx)("svg",{width:"26",height:"26",fill:"currentColor",viewBox:"0 0 16 16",children:Object(N.jsx)("path",{d:"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.904-2.854a.5.5 0 1 1 .707.708L6.707 9.95h2.768a.5.5 0 1 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.475a.5.5 0 1 1 1 0v2.768l4.096-4.097z"})})}),"Pressure: ",t.current.pressure," hPa"]})]}),Object(N.jsxs)("ul",{className:le.a.infoContainer,children:[Object(N.jsxs)("li",{className:le.a.infoItems,children:[Object(N.jsx)("span",{className:le.a.infoSvgImg,children:Object(N.jsxs)("svg",{width:"26",height:"26",fill:"currentColor",viewBox:"0 0 16 16",children:[Object(N.jsx)("path",{d:"M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"}),Object(N.jsx)("path",{d:"M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"}),Object(N.jsx)("path",{d:"M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"})]})}),"Length of the day:"," ",H.lengthOfTheDay(t.current.sunrise,t.current.sunset)]}),Object(N.jsxs)("li",{className:le.a.infoItems,children:[Object(N.jsx)("span",{className:le.a.infoSvgImg,children:Object(N.jsx)("svg",{width:"26",height:"26",fill:"currentColor",viewBox:"0 0 16 16",children:Object(N.jsx)("path",{d:"M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z"})})}),"Humidity: ",t.current.humidity," %"]}),Object(N.jsxs)("li",{className:le.a.infoItems,children:[Object(N.jsx)("span",{className:le.a.infoSvgImg,children:Object(N.jsxs)("svg",{width:"26",height:"26",fill:"currentColor",viewBox:"0 0 16 16",children:[Object(N.jsx)("path",{d:"M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"}),Object(N.jsx)("path",{d:"M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"})]})}),"UVI: ",t.current.uvi," "]}),Object(N.jsxs)("li",{className:le.a.infoItems,children:[Object(N.jsx)("span",{className:le.a.infoSvgImg,children:Object(N.jsxs)("svg",{width:"26",height:"26",fill:"currentColor",viewBox:"0 0 16 16",children:[Object(N.jsx)("path",{d:"M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"}),Object(N.jsx)("path",{d:"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"})]})}),"Visibility: ",t.current.visibility/1e3," km"," "]})]})]})})})),de=a(35),he=a.n(de);function je(e){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("header",{children:Object(N.jsx)("div",{className:he.a.wrapHeader,children:Object(N.jsx)("span",{children:"Weather forecast"})})}),Object(N.jsx)("main",{children:Object(N.jsxs)("div",{className:he.a.wrapMain,children:[Object(N.jsx)(ie,{}),Object(N.jsx)("div",{className:he.a.separator}),Object(N.jsx)(re,{id:e.location.id}),Object(N.jsx)("div",{className:he.a.separator}),Object(N.jsx)(oe,{})]})}),Object(N.jsx)(G,{})]})}var ue={container:{textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},status:{fontSize:46}};function me(){return Object(N.jsxs)("div",{style:ue.container,children:[Object(N.jsx)("h1",{style:ue.status,children:"404"}),Object(N.jsx)("img",{src:f.noImage,alt:"404 page",width:"200"}),Object(N.jsx)("p",{children:Object(N.jsx)(i.b,{to:{pathname:"".concat(u.home)},children:"HOME"})})]})}var be=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(N.jsxs)(j.c,{children:[Object(N.jsx)(j.a,{path:u.home,exact:!0,component:q}),Object(N.jsx)(j.a,{path:u.citypage,component:je}),Object(N.jsx)(j.a,{component:me})]})}}]),a}(r.Component),pe=a(34),xe={card:[],cityData:[],error:!1,loading:!1},ge=Object(pe.a)({card:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe.card,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case p.ADD_CITY:return E.add(r.name),[].concat(Object(M.a)(e.filter((function(e){return e.name!==r.name}))),[r]);case p.REMOVE_CITY:return Object(M.a)(e.filter((function(e){return e.name!==r})));case p.UPD_WEATHER:var n=e.map((function(e){return e.name===r.name?r:e}));return n;default:return e}},cityData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe.cityData,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;return a===p.CITY_PAGE_WEATHER?r:e},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe.error,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;return a===p.ERROR?r:e},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe.loading,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;return a===p.LOADING?r:e}}),Oe=Object(pe.a)({weather:ge}),fe=Object(pe.b)(Oe,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(Object(N.jsx)(s.a,{store:fe,children:Object(N.jsx)(i.a,{children:Object(N.jsx)(be,{})})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.3addcec3.chunk.js.map