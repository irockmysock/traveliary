!function(e){function t(t){for(var a,s,l=t[0],i=t[1],c=t[2],m=0,d=[];m<l.length;m++)s=l[m],r[s]&&d.push(r[s][0]),r[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(u&&u(t);d.length;)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,l=1;l<n.length;l++){var i=n[l];0!==r[i]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={0:0},o=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=i;o.push([325,1]),n()}({325:function(e,t,n){e.exports=n(684)},622:function(e,t,n){var a={"./af":194,"./af.js":194,"./ar":195,"./ar-dz":196,"./ar-dz.js":196,"./ar-kw":197,"./ar-kw.js":197,"./ar-ly":198,"./ar-ly.js":198,"./ar-ma":199,"./ar-ma.js":199,"./ar-sa":200,"./ar-sa.js":200,"./ar-tn":201,"./ar-tn.js":201,"./ar.js":195,"./az":202,"./az.js":202,"./be":203,"./be.js":203,"./bg":204,"./bg.js":204,"./bm":205,"./bm.js":205,"./bn":206,"./bn.js":206,"./bo":207,"./bo.js":207,"./br":208,"./br.js":208,"./bs":209,"./bs.js":209,"./ca":210,"./ca.js":210,"./cs":211,"./cs.js":211,"./cv":212,"./cv.js":212,"./cy":213,"./cy.js":213,"./da":214,"./da.js":214,"./de":215,"./de-at":216,"./de-at.js":216,"./de-ch":217,"./de-ch.js":217,"./de.js":215,"./dv":218,"./dv.js":218,"./el":219,"./el.js":219,"./en-SG":220,"./en-SG.js":220,"./en-au":221,"./en-au.js":221,"./en-ca":222,"./en-ca.js":222,"./en-gb":223,"./en-gb.js":223,"./en-ie":224,"./en-ie.js":224,"./en-il":225,"./en-il.js":225,"./en-nz":226,"./en-nz.js":226,"./eo":227,"./eo.js":227,"./es":228,"./es-do":229,"./es-do.js":229,"./es-us":230,"./es-us.js":230,"./es.js":228,"./et":231,"./et.js":231,"./eu":232,"./eu.js":232,"./fa":233,"./fa.js":233,"./fi":234,"./fi.js":234,"./fo":235,"./fo.js":235,"./fr":236,"./fr-ca":237,"./fr-ca.js":237,"./fr-ch":238,"./fr-ch.js":238,"./fr.js":236,"./fy":239,"./fy.js":239,"./ga":240,"./ga.js":240,"./gd":241,"./gd.js":241,"./gl":242,"./gl.js":242,"./gom-latn":243,"./gom-latn.js":243,"./gu":244,"./gu.js":244,"./he":245,"./he.js":245,"./hi":246,"./hi.js":246,"./hr":247,"./hr.js":247,"./hu":248,"./hu.js":248,"./hy-am":249,"./hy-am.js":249,"./id":250,"./id.js":250,"./is":251,"./is.js":251,"./it":252,"./it-ch":253,"./it-ch.js":253,"./it.js":252,"./ja":254,"./ja.js":254,"./jv":255,"./jv.js":255,"./ka":256,"./ka.js":256,"./kk":257,"./kk.js":257,"./km":258,"./km.js":258,"./kn":259,"./kn.js":259,"./ko":260,"./ko.js":260,"./ku":261,"./ku.js":261,"./ky":262,"./ky.js":262,"./lb":263,"./lb.js":263,"./lo":264,"./lo.js":264,"./lt":265,"./lt.js":265,"./lv":266,"./lv.js":266,"./me":267,"./me.js":267,"./mi":268,"./mi.js":268,"./mk":269,"./mk.js":269,"./ml":270,"./ml.js":270,"./mn":271,"./mn.js":271,"./mr":272,"./mr.js":272,"./ms":273,"./ms-my":274,"./ms-my.js":274,"./ms.js":273,"./mt":275,"./mt.js":275,"./my":276,"./my.js":276,"./nb":277,"./nb.js":277,"./ne":278,"./ne.js":278,"./nl":279,"./nl-be":280,"./nl-be.js":280,"./nl.js":279,"./nn":281,"./nn.js":281,"./pa-in":282,"./pa-in.js":282,"./pl":283,"./pl.js":283,"./pt":284,"./pt-br":285,"./pt-br.js":285,"./pt.js":284,"./ro":286,"./ro.js":286,"./ru":287,"./ru.js":287,"./sd":288,"./sd.js":288,"./se":289,"./se.js":289,"./si":290,"./si.js":290,"./sk":291,"./sk.js":291,"./sl":292,"./sl.js":292,"./sq":293,"./sq.js":293,"./sr":294,"./sr-cyrl":295,"./sr-cyrl.js":295,"./sr.js":294,"./ss":296,"./ss.js":296,"./sv":297,"./sv.js":297,"./sw":298,"./sw.js":298,"./ta":299,"./ta.js":299,"./te":300,"./te.js":300,"./tet":301,"./tet.js":301,"./tg":302,"./tg.js":302,"./th":303,"./th.js":303,"./tl-ph":304,"./tl-ph.js":304,"./tlh":305,"./tlh.js":305,"./tr":306,"./tr.js":306,"./tzl":307,"./tzl.js":307,"./tzm":308,"./tzm-latn":309,"./tzm-latn.js":309,"./tzm.js":308,"./ug-cn":310,"./ug-cn.js":310,"./uk":311,"./uk.js":311,"./ur":312,"./ur.js":312,"./uz":313,"./uz-latn":314,"./uz-latn.js":314,"./uz.js":313,"./vi":315,"./vi.js":315,"./x-pseudo":316,"./x-pseudo.js":316,"./yo":317,"./yo.js":317,"./zh-cn":318,"./zh-cn.js":318,"./zh-hk":319,"./zh-hk.js":319,"./zh-tw":320,"./zh-tw.js":320};function r(e){var t=o(e);return n(t)}function o(e){if(n.o(a,e))return a[e];var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}r.keys=function(){return Object.keys(a)},r.resolve=o,(e.exports=r).id=622},684:function(e,t,n){"use strict";n.r(t),n(326),n(528),n(689);var a=n(0),r=n.n(a),o=n(58),s=n.n(o),l=n(694),i=n.n(l);function c(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}function y(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?E(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&function(e,t){(Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(e,t)}var g=n(1),v=function(e){function t(e){var n;return m(this,t),(n=y(this,f(t).call(this,e))).state={error:null,isLoaded:!1,requested:!1,inEditMode:!1,inAddMode:!1,journals:[],journalId:null,journalName:null,coverImg:null,createdDate:g(),updatedDate:g(),userId:1},n.submitAdd=n.submitAdd.bind(E(n)),n.deleteJournal=n.deleteJournal.bind(E(n)),n.handleDelete=n.handleDelete.bind(E(n)),n.nameChangeHandler=n.nameChangeHandler.bind(E(n)),n.coverImgChangeHandler=n.coverImgChangeHandler.bind(E(n)),n.handleEdit=n.handleEdit.bind(E(n)),n.submitEdit=n.submitEdit.bind(E(n)),n.activateAddMode=n.activateAddMode.bind(E(n)),n.closeForm=n.closeForm.bind(E(n)),n.handleSelect=n.handleSelect.bind(E(n)),n}return h(t,r.a.Component),p(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://127.0.0.1:3000/journals").then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,journals:t.journals})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"handleSelect",value:function(){console.log("SELECTED A JORUANLLLL"),this.setState({journalName:event.target.name})}},{key:"activateAddMode",value:function(){console.log("ADD MODE"),this.setState({inAddMode:!0,inEditMode:!1})}},{key:"closeForm",value:function(){this.setState({inAddMode:!1}),this.setState({inEditMode:!1})}},{key:"nameChangeHandler",value:function(e){console.log("$$$$$$ "+e.target.value),this.setState({journalName:e.target.value})}},{key:"coverImgChangeHandler",value:function(e){console.log("******** "+e.target.value),this.setState({coverImg:e.target.value})}},{key:"handleDelete",value:function(e){console.log("DELETE HANDLING");var t=this.state.journals.filter(function(t){return t.id!==e});this.setState({journals:t,requested:!1}),console.log("DELETE HANDLED")}},{key:"deleteJournal",value:function(e){console.log("WORKKSS"+e.target.id),console.log(u(e.target.id));var t={journal_id:e.target.id},n=new XMLHttpRequest,a=this;n.addEventListener("load",function(){console.log("DONE");var e=JSON.parse(this.responseText);console.log(this.responseText),console.log(e),a.handleDelete(e),console.log("Journal Deleted")}),n.open("DELETE","/journals/delete"),n.setRequestHeader("Content-Type","application/json;charset=UTF-8"),n.send(JSON.stringify(t)),this.setState({requested:!0})}},{key:"deleteAllJournalEntries",value:function(e){var t={journal_id:e.target.id};console.log("DELETEING ALL ENTRIES IN JOURNAL "+e.target.id);var n=new XMLHttpRequest,a=this;n.addEventListener("load",function(){console.log("DONE");var e=JSON.parse(this.responseText);console.log(this.responseText),console.log(e),a.handleDelete(e.id),console.log("JOURNAL ENTRIES DELETETETETD")}),n.open("DELETE","/journalentries/delete"),n.setRequestHeader("Content-Type","application/json;charset=UTF-8"),n.send(JSON.stringify(t)),this.setState({requested:!0})}},{key:"handleEdit",value:function(e){this.setState({inEditMode:!0,inAddMode:!1,journalId:e.target.id,journalName:e.target.name,coverImg:e.target.value,requested:!1}),console.log("CLICKEDD")}},{key:"submitEdit",value:function(){console.log("EDITTT",this.state);var e={journal_name:this.state.journalName,cover_img:this.state.coverImg,user_id:this.state.userId,id:this.state.journalId,updated_date:this.state.updatedDate},t=new XMLHttpRequest;t.addEventListener("load",function(){console.log("DONE");var e=JSON.parse(this.responseText);console.log(this.responseText),console.log(e),alert("WOW DONE WITYH EDITTINGGN THING")}),t.open("PUT","/journals/edit"),t.setRequestHeader("Content-Type","application/json;charset=UTF-8"),t.send(JSON.stringify(e)),this.setState({requested:!0})}},{key:"handleAdd",value:function(e){console.log("HANDLING ADDDD"),console.log(e),this.setState({journals:[e].concat(c(this.state.journals)),requested:!1})}},{key:"submitAdd",value:function(){console.log("WIOW SUBMIT",this.state);var e={journal_name:this.state.journalName,cover_img:this.state.coverImg,user_id:this.state.userId,created_date:this.state.createdDate},t=new XMLHttpRequest,n=this;t.addEventListener("load",function(e){console.log("DONE");var t=JSON.parse(this.responseText);console.log(this.responseText),console.log(t),n.handleAdd(t),e.preventDefault(),console.log("New journal created!!!")}),t.open("POST","/journals/new"),t.setRequestHeader("Content-Type","application/json;charset=UTF-8"),t.send(JSON.stringify(e)),this.setState({requested:!0,inAddMode:!1})}},{key:"render",value:function(){var e=this,t=this.state,n=t.error,a=t.isLoaded,o=t.journals;return n?r.a.createElement("div",null,"Error: ",n.message):a?this.state.requested?r.a.createElement("div",null,"REQUEST IN PROCESS"):r.a.createElement("div",{className:i.a.journalContainer},r.a.createElement("div",{className:i.a.journalHeader+" text-center"},r.a.createElement("h5",null,"MY JOURNALS")),r.a.createElement("div",{className:i.a.journalCardContainer+" row d-flex flex-wrap justify-content-start overflow-auto"},r.a.createElement("div",{className:i.a.mycard},r.a.createElement("img",{className:i.a.mycardimg,src:"https://www.bestfunforall.com/better/imgs/Black%20&%20White%20Butterfly%20wallpaper%20%202.jpg"}),r.a.createElement("button",{className:i.a.cardAddIcon+" fas fa-plus-square",onClick:this.activateAddMode}),r.a.createElement("div",{className:i.a.myCardTitleContainer},r.a.createElement("p",{className:i.a.addNewCardText},"Add New Diary"))),o.map(function(t){return r.a.createElement("div",{key:t.id,className:i.a.mycard},r.a.createElement("img",{id:t.id,name:t.journal_name,onClick:function(t){e.props.listTripEntries(t),e.handleSelect(t),e.closeForm()},className:i.a.mycardimg,src:t.cover_img}),r.a.createElement("button",{className:i.a.cardDeleteIcon+" fas fa-times fa-xs",id:t.id,onClick:function(t){e.deleteJournal(t),e.deleteAllJournalEntries(t)}}),r.a.createElement("div",{className:i.a.myCardTitleContainer},r.a.createElement("p",{className:i.a.mycardtext},t.journal_name),r.a.createElement("button",{className:i.a.cardEditIcon+" fas fa-edit fa-xs",id:t.id,name:t.journal_name,value:t.cover_img,onClick:function(t){e.closeForm,e.handleEdit(t)}})))})),r.a.createElement(b,{inAddMode:this.state.inAddMode,inEditMode:this.state.inEditMode,closeForm:this.closeForm,journalName:this.state.journalName,coverImg:this.state.coverImg,nameChangeHandler:this.nameChangeHandler,coverImgChangeHandler:this.coverImgChangeHandler,submitAdd:this.submitAdd,submitEdit:this.submitEdit})):r.a.createElement("div",null,"Loading...")}}]),t}(),b=function(e){function t(){return m(this,t),y(this,f(t).apply(this,arguments))}return h(t,r.a.Component),p(t,[{key:"render",value:function(){var e=this;return!0!==this.props.inAddMode||this.props.inEditMode?!0!==this.props.inEditMode||this.props.inAddMode?r.a.createElement("div",{className:i.a.formContainer+" row"},r.a.createElement("div",{className:i.a.journalNameText+" col-12 text-center mt-1"},r.a.createElement("h5",null,this.props.journalName))):r.a.createElement("div",{className:i.a.formContainerActive+" row"},r.a.createElement("div",{className:"col-5 pl-0"},r.a.createElement("input",{type:"text",className:i.a.formControl,placeholder:"Diary Name",value:this.props.journalName,onChange:function(t){e.props.nameChangeHandler(t)}})),r.a.createElement("div",{className:"col-5 pl-0"},r.a.createElement("input",{type:"text",className:i.a.formControl,placeholder:"Cover Image URL",value:this.props.coverImg,onChange:function(t){e.props.coverImgChangeHandler(t)}})),r.a.createElement("div",{className:"col-1 p-0"},r.a.createElement("button",{className:i.a.submitAdd+" fas fa-save",onClick:this.props.submitEdit})),r.a.createElement("div",{className:"col-1 p-0"},r.a.createElement("button",{className:i.a.formCloseIcon+" fas fa-times fa-xs",onClick:this.props.closeForm}))):r.a.createElement("div",{className:i.a.formContainerActive+" row"},r.a.createElement("div",{className:"col-5 pl-0"},r.a.createElement("input",{type:"text",className:i.a.formControl,placeholder:"Diary Name",onChange:function(t){e.props.nameChangeHandler(t)}})),r.a.createElement("div",{className:"col-5 pl-0"},r.a.createElement("input",{type:"text",className:i.a.formControl,placeholder:"Cover Image URL",onChange:function(t){e.props.coverImgChangeHandler(t)}})),r.a.createElement("div",{className:"col-1 p-0"},r.a.createElement("button",{className:i.a.submitAdd+" fas fa-save",onClick:this.props.submitAdd})),r.a.createElement("div",{className:"col-1 p-0"},r.a.createElement("button",{className:i.a.formCloseIcon+" fas fa-times fa-xs",onClick:this.props.closeForm})))}}]),t}(),j=v,N=n(70),C=n.n(N),_=(n(321),n(38),n(696)),w=n.n(_),T=n(698),S=n.n(T);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var A=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,x(t).apply(this,arguments))}var n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,r.a.Component),n=t,(a=[{key:"render",value:function(){if(0===this.props.tripEntries.length){var e=this.props.entries.map(function(e,t){return r.a.createElement("div",{key:t,className:w.a.entryContentContainer+" list-group-item px-5"},r.a.createElement("div",{className:w.a.entryHeaderText},r.a.createElement(C.a,{className:w.a.entryDateText,format:"llll"},e.entry_date),r.a.createElement("h3",null,e.title),r.a.createElement("p",{className:w.a.entryLocationText+" m-0"},r.a.createElement("i",{class:"fas fa-map-marker-alt"})," ",e.entry_location)),r.a.createElement("p",{className:w.a.entryContentText},e.entry_content),r.a.createElement("img",{src:e.media,className:w.a.entryImg}))});return r.a.createElement("div",{className:w.a.mainContentContainer+" row overflow-auto"},e)}if(0===this.props.dayEntries.length){var t=this.props.tripEntries.map(function(e,t){return r.a.createElement("div",{key:t,className:w.a.entryContentContainer+" list-group-item px-5"},r.a.createElement("div",{className:w.a.entryHeaderText},r.a.createElement(C.a,{className:w.a.entryDateText,format:"llll"},e.entry_date),r.a.createElement("h3",null,e.title),r.a.createElement("p",{className:w.a.entryLocationText+" m-0"},r.a.createElement("i",{class:"fas fa-map-marker-alt"})," ",e.entry_location)),r.a.createElement("p",{className:w.a.entryContentText},e.entry_content),r.a.createElement("img",{src:e.media,className:w.a.entryImg}))});return r.a.createElement("div",{className:w.a.mainContentContainer+" row overflow-auto"},t)}var n=this.props.dayEntries.map(function(e,t){return r.a.createElement("div",{key:t,className:w.a.entryContentContainer+" list-group-item px-5"},r.a.createElement("div",{className:w.a.entryHeaderText},r.a.createElement(C.a,{className:w.a.entryDateText,format:"llll"},e.entry_date),r.a.createElement("h3",null,e.title),r.a.createElement("p",{className:w.a.entryLocationText+" m-0"},r.a.createElement("i",{class:"fas fa-map-marker-alt"})," ",e.entry_location)),r.a.createElement("p",{className:w.a.entryContentText},e.entry_content),r.a.createElement("img",{src:e.media,className:w.a.entryImg}))});return r.a.createElement("div",{className:w.a.mainContentContainer+" row overflow-auto"},n)}}])&&D(n.prototype,a),t}(),I=n(142),H=n.n(I),M=(n(700),n(144));function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n(702);var Y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,P(t).apply(this,arguments))}var n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(t,r.a.Component),n=t,(a=[{key:"render",value:function(){return r.a.createElement(M.Map,{google:this.props.google,zoom:8,initialCenter:{lat:47.444,lng:-122.176}})}}])&&L(n.prototype,a),t}(),q=Object(M.GoogleApiWrapper)({apiKey:"AIzaSyBRNmSwd6j3o6DyxeEU64bMpnMR39xOvKA"})(Y),z=n(704),F=n.n(z);function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function W(e,t){return(W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var K=function(e){function t(e){var n;return function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),(n=function(e,t){return!t||"object"!==U(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,B(t).call(this,e))).state={error:null,isLoaded:!1,requested:!1},n}var n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&W(e,t)}(t,r.a.Component),n=t,(a=[{key:"render",value:function(){var e,t=this;if(0===this.props.tripEntries.length&&0===this.props.currentJournal)return r.a.createElement("div",null,r.a.createElement("h5",null,"Select Diary"));if(0===this.props.tripEntries.length&&0!==this.props.currentJournal)return this.props.inAddNewEntryMode?r.a.createElement("div",{className:F.a.formContainer},r.a.createElement("div",{className:F.a.wrapper+" row m-0"},r.a.createElement(q,null)),r.a.createElement("div",{className:F.a.newFormHeader+"row m-2"},r.a.createElement("p",{className:"mb-0"},"New Entry"),r.a.createElement("button",{className:F.a.entrySaveIcon+" fas fa-save",onClick:this.props.submitEntry}," Save")),r.a.createElement("div",{className:"row m-2"},r.a.createElement("div",{className:"input-group mb-1"},r.a.createElement("input",{name:"entryTitle",placeholder:"Title",onChange:function(e){t.props.logChange(e)}}))),r.a.createElement("div",{className:"row m-2"},r.a.createElement("div",{className:"input-group mb-1"},r.a.createElement(H.a,{selected:this.props.entryDate,onChange:this.props.entryDateChangeHandler}))),r.a.createElement("div",{className:"row m-2"},r.a.createElement("div",{className:"input-group mb-1"},r.a.createElement("input",{name:"media",placeholder:"Photo URL",onChange:function(e){t.props.logChange(e)}}))),r.a.createElement("div",{className:"row m-2"},r.a.createElement("div",{className:"input-group mb-1"},r.a.createElement("textarea",{name:"entryContent",placeholder:"Entry Content",onChange:function(e){t.props.logChange(e)}}))),r.a.createElement("div",{className:"row m-2"},r.a.createElement("div",{className:"input-group mb-1"},r.a.createElement("input",{name:"entryLocation",placeholder:"Location",onChange:function(e){t.props.logChange(e)}})))):r.a.createElement("div",{className:F.a.listHeader+" row m-0"},r.a.createElement("button",{className:F.a.newEntryButton+" fas fa-plus",onClick:this.props.newEntryMode}," Add new entry"));e=this.props.tripEntries.reduce(function(e,t){var n=t.entry_date;return e[n]=e[n]||[],e},{}),console.log(e),console.log("catsssss",Object.keys(e));var n=Object.keys(e).map(function(e,n){var a=t.props.tripEntries.map(function(t,n){if(t.entry_date===e)return r.a.createElement("div",{className:F.a.listEntry+" row m-0"},r.a.createElement("div",{className:F.a.listImgContainer+" col-3 p-0"},r.a.createElement("img",{className:F.a.listImage,src:t.media})),r.a.createElement("div",{className:F.a.listContentContainer+" col-9 p-1"},r.a.createElement("div",{className:"row m-0"},r.a.createElement("p",{className:F.a.listEntryTitleText},t.title)),r.a.createElement("div",{className:F.a.listEntryTextContainer+" m-0 row"},r.a.createElement("p",{className:F.a.listText},t.entry_content))))});return r.a.createElement("div",{className:F.a.dateEntriesContainer,key:n},r.a.createElement("div",{className:F.a.entryDateHeader},r.a.createElement("p",{className:F.a.listDateText},r.a.createElement(C.a,{format:"DD MMM YY"},e)),r.a.createElement("button",{className:F.a.openIcon+" fas fa-book-open",id:e,onClick:t.props.showDateEntries})),a)});return this.props.inAddNewEntryMode?r.a.createElement("div",{className:F.a.formContainer},r.a.createElement("div",{className:F.a.wrapper+" row m-0"},r.a.createElement(q,null)),r.a.createElement("div",{className:F.a.newFormHeader+"row m-2"},r.a.createElement("p",{className:"mb-0"},"New Entry"),r.a.createElement("button",{className:F.a.entrySaveIcon+" fas fa-save",onClick:this.props.submitEntry}," Save")),r.a.createElement("div",{className:"row m-2"},r.a.createElement("div",{className:"input-group mb-1"},r.a.createElement("input",{name:"entryTitle",placeholder:"Title",onChange:function(e){t.props.logChange(e)}}))),r.a.createElement("div",{className:"row m-2"},r.a.createElement("div",{className:"input-group mb-1"},r.a.createElement(H.a,{selected:this.props.entryDate,onChange:this.props.entryDateChangeHandler}))),r.a.createElement("div",{className:"row m-2"},r.a.createElement("div",{className:"input-group mb-1"},r.a.createElement("input",{name:"media",placeholder:"Photo URL",onChange:function(e){t.props.logChange(e)}}))),r.a.createElement("div",{className:"row m-2"},r.a.createElement("div",{className:"input-group mb-1"},r.a.createElement("textarea",{name:"entryContent",placeholder:"Entry Content",onChange:function(e){t.props.logChange(e)}}))),r.a.createElement("div",{className:"row m-2"},r.a.createElement("div",{className:"input-group mb-1"},r.a.createElement("input",{name:"entryLocation",placeholder:"Location",onChange:function(e){t.props.logChange(e)}})))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:F.a.listHeader+" row m-0"},r.a.createElement("button",{className:F.a.newEntryButton+" fas fa-plus",onClick:this.props.newEntryMode}," Add new entry")),r.a.createElement("div",{className:F.a.listContainer+" overflow-auto"},n))}}])&&G(n.prototype,a),t}();function $(e){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function X(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Z(e,t){return(Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ee=n(1),te=function(e){function t(){var e,n;return function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),this,(e=!(n=V(t).call(this))||"object"!==$(n)&&"function"!=typeof n?Q(this):n).state={message:"hello",error:null,isLoaded:!1,requested:!1,currentJournal:0,entries:[],tripEntries:[],dayEntries:[],inAddNewEntryMode:!1,entryTitle:null,media:null,entryContent:null,entryLocation:null,entryDate:new Date,userId:1},e.clickHandler=e.clickHandler.bind(Q(e)),e.newEntryMode=e.newEntryMode.bind(Q(e)),e.addNewEntry=e.addNewEntry.bind(Q(e)),e.submitEntry=e.submitEntry.bind(Q(e)),e.showDateEntries=e.showDateEntries.bind(Q(e)),e.entryDateChangeHandler=e.entryDateChangeHandler.bind(Q(e)),e.logChange=e.logChange.bind(Q(e)),e}var n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(t,r.a.Component),n=t,(a=[{key:"componentDidMount",value:function(){var e=this;fetch("http://127.0.0.1:3000/entries").then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,entries:t.entries})},function(t){e.setState({isLoaded:!0,error:t}),console.log("ERRORRRRRRRR")})}},{key:"clickHandler",value:function(e){var t=this;console.log("CLICKINGGG");var n=parseInt(e.target.id);console.log($(n));var a=this.state.entries,r=[];a.map(function(e){e.journal_id==n?(r.push(e),t.setState({tripEntries:r,dayEntries:[],currentJournal:n,inAddNewEntryMode:!1})):(t.setState({tripEntries:r,currentJournal:n,inAddNewEntryMode:!1}),console.log("NO MATCHHHHH"))})}},{key:"showDateEntries",value:function(e){var t=this,n=e.target.id,a=ee(n).format("YYYY-MM-DD");console.log("FORMATEDDD DATE OF EVENT TARGET "+$(a)),console.log(a);var r=this.state.tripEntries;console.log("TRIP ENTRIESS IS"),console.log(r);var o=[];r.map(function(e){var n=ee(e.entry_date).format("YYYY-MM-DD");console.log("ENTRY DATEE ISSSSS"),console.log(n),n==a?(console.log(e),o.push(e),console.log("DAY ENTRIESSS ARRAY"),console.log(o),t.setState({dayEntries:o},function(){console.log(t.state.dayEntries)}),console.log("MATTTCCH!!!")):console.log("NO MATCHHHHH")})}},{key:"newEntryMode",value:function(){this.setState({inAddNewEntryMode:!0})}},{key:"addNewEntry",value:function(e){var t=this;console.log("ENTRYRYRYRYRRYRYRYRRYRYRRY"),console.log(e);var n=[e].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(this.state.entries)),a=this.state.currentJournal,r=[];this.setState({entries:n,requested:!1,inAddNewEntryMode:!1},function(){console.log("ENTRIES UPDATED")}),this.state.entries.map(function(e){console.log("MAPPPINNGGGG"),e.journal_id==a?(r.push(e),t.setState({tripEntries:r,currentJournal:a,inAddNewEntryMode:!1})):(t.setState({tripEntries:r,currentJournal:a,inAddNewEntryMode:!1}),console.log("NO MATCHHHHH"))})}},{key:"logChange",value:function(e){var t,n,a;console.log(e.target.value),this.setState((t={},n=e.target.name,a=e.target.value,n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t))}},{key:"entryDateChangeHandler",value:function(e){this.setState({entryDate:e}),console.log("DATTEEEEE "+e)}},{key:"submitEntry",value:function(){console.log("WIOW SUBMITENTRYYY",this.state);var e={title:this.state.entryTitle,media:this.state.media,entry_content:this.state.entryContent,entry_location:this.state.entryLocation,entry_date:this.state.entryDate,user_id:this.state.userId,journal_id:this.state.currentJournal},t=new XMLHttpRequest,n=this;t.addEventListener("load",function(){console.log("DONE");var e=JSON.parse(this.responseText);console.log(this.responseText),console.log(e),n.addNewEntry(e),console.log("WOW NEW ENTRY ADDED")}),t.open("POST","/entries/new"),t.setRequestHeader("Content-Type","application/json;charset=UTF-8"),t.send(JSON.stringify(e)),this.setState({requested:!0})}},{key:"render",value:function(){return r.a.createElement("div",{className:S.a.appContainer},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:S.a.mySidebar+" col-3 mt-0 p-0"},r.a.createElement("div",{className:S.a.sideBarHeader+" text-center"},r.a.createElement("h3",null,r.a.createElement("i",{class:"fas fa-globe-americas"})," TRAVELIARY")),r.a.createElement(j,{listTripEntries:this.clickHandler}),r.a.createElement(K,{currentJournal:this.state.currentJournal,tripEntries:this.state.tripEntries,newEntryMode:this.newEntryMode,addNewEntry:this.addNewEntry,inAddNewEntryMode:this.state.inAddNewEntryMode,logChange:this.logChange,entryDateChangeHandler:this.entryDateChangeHandler,submitEntry:this.submitEntry,showDateEntries:this.showDateEntries,entryDate:this.state.entryDate})),r.a.createElement("div",{className:S.a.mainContentContainer+" col-9"},r.a.createElement("div",{className:S.a.mainContentHeader+" row"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h3",{className:S.a.mainHeaderText},"My Diary Entries"))),r.a.createElement(A,{dayEntries:this.state.dayEntries,tripEntries:this.state.tripEntries,entries:this.state.entries}))))}}])&&X(n.prototype,a),t}();s.a.render(r.a.createElement(te,null),document.getElementById("app"))},694:function(e,t){e.exports={journalContainer:"style_journalContainer_31244",journalHeader:"style_journalHeader_29c2c",myContainer:"style_myContainer_f3a9e",journalCardContainer:"style_journalCardContainer_d4a9a",mycard:"style_mycard_e1ef1",mycardimg:"style_mycardimg_80524",myCardTitleContainer:"style_myCardTitleContainer_5bd22",mycardtext:"style_mycardtext_98ab5",addNewCardText:"style_addNewCardText_0b44c",cardEditIcon:"style_cardEditIcon_df96e",cardDeleteIcon:"style_cardDeleteIcon_e967e",cardAddIcon:"style_cardAddIcon_183fa",formContainerActive:"style_formContainerActive_1e344",formContainer:"style_formContainer_45694",formControl:"style_formControl_6577c",journalNameText:"style_journalNameText_13050",submitAdd:"style_submitAdd_17d90",formCloseIcon:"style_formCloseIcon_fc519"}},696:function(e,t){e.exports={mainContentContainer:"style_mainContentContainer_6dcf4",entryContentContainer:"style_entryContentContainer_94f51",entryImg:"style_entryImg_83de3",entryDateText:"style_entryDateText_40a55",entryContentText:"style_entryContentText_114da",entryHeaderText:"style_entryHeaderText_5f5e8",entryLocationText:"style_entryLocationText_43ebc"}},698:function(e,t){e.exports={appContainer:"style_appContainer_bb74a",mySidebar:"style_mySidebar_ca0f7",sideBarHeader:"style_sideBarHeader_c2c9e",mainContentContainer:"style_mainContentContainer_70266",mainContentHeader:"style_mainContentHeader_1c963",mainHeaderText:"style_mainHeaderText_205ea"}},702:function(e,t){e.exports={name:"style_name_05e3b"}},704:function(e,t){e.exports={listContainer:"style_listContainer_6d7a1",listHeader:"style_listHeader_aaf0b",newEntryButton:"style_newEntryButton_784c2",dateEntriesContainer:"style_dateEntriesContainer_df27d",entryDateHeader:"style_entryDateHeader_2bf4a",listDateText:"style_listDateText_79495",openIcon:"style_openIcon_5fbc5",listEntry:"style_listEntry_04298",listImgContainer:"style_listImgContainer_89a82",listImage:"style_listImage_36d01",listContentContainer:"style_listContentContainer_a235d",listEntryTitleText:"style_listEntryTitleText_36f39",listEntryTextContainer:"style_listEntryTextContainer_49466",dateEntryHeader:"style_dateEntryHeader_3cb5e",listText:"style_listText_ec6c9",formContainer:"style_formContainer_311a5",newFormHeader:"style_newFormHeader_05a08",entrySaveIcon:"style_entrySaveIcon_ef6d1",wrapper:"style_wrapper_35239"}}});