(this.webpackJsonpbooks_googleapi=this.webpackJsonpbooks_googleapi||[]).push([[0],{16:function(e,t,o){e.exports={books__title:"books_books__title__z9VgX",books__content:"books_books__content__4d2OU",books__btn:"books_books__btn__2guzp"}},21:function(e,t,o){e.exports={select:"select_select__MMYmn",select__title:"select_select__title__cQbo6",select__item:"select_select__item__2scHP"}},22:function(e,t,o){e.exports={input:"input_input__aR-Dq",input__search:"input_input__search__WS9HL",input__btn:"input_input__btn__1djQ8"}},23:function(e,t,o){e.exports={notFound:"notFoundPage_notFound__ycuJp",notFound__error:"notFoundPage_notFound__error__2YM_J",colchanger:"notFoundPage_colchanger__1iqoY",notFound__text:"notFoundPage_notFound__text__10pXy"}},31:function(e,t,o){e.exports={searchForm:"searchForm_searchForm__lboGr",searchForm__selects:"searchForm_searchForm__selects__2dnwQ"}},32:function(e,t,o){e.exports={searchSection:"searchSection_searchSection__-Bwcz",searchSection__title:"searchSection_searchSection__title__tipmW"}},54:function(e,t,o){},7:function(e,t,o){e.exports={bookdescr:"bookDescrPage_bookdescr__4WYFn",bookdescr__btn:"bookDescrPage_bookdescr__btn__3oeUR",bookdescr__wrapper:"bookDescrPage_bookdescr__wrapper__3sbdN",bookdescr__cover:"bookDescrPage_bookdescr__cover__2y97B",bookdescr__text:"bookDescrPage_bookdescr__text__3ISSs",bookdescr__text_list:"bookDescrPage_bookdescr__text_list__22YH5",bookdescr__text_category:"bookDescrPage_bookdescr__text_category__3Yzie",bookdescr__text_title:"bookDescrPage_bookdescr__text_title__2KtL5",bookdescr__text_author:"bookDescrPage_bookdescr__text_author__1IuTB",bookdescr__text_info:"bookDescrPage_bookdescr__text_info__3pVta"}},77:function(e,t,o){"use strict";o.r(t);var c={};o.r(c),o.d(c,"fetchBooks",(function(){return h})),o.d(c,"loadMoreBooks",(function(){return k}));var n,a=o(19),s=o.n(a),_=o(12),r=(o(54),o(9)),i=o(3),l=o(15),b=o.n(l),d=o(27),u=o(28),O=o.n(u);!function(e){e.FETCH_BOOKS="FETCH_BOOKS",e.FETCH_BOOKS_SUCCESS="FETCH_BOOKS_SUCCESS",e.FETCH_BOOKS_FAIL="FETCH_BOOKS_FAIL",e.LOAD_MORE="LOAD_MORE",e.LOAD_MORE_SUCCESS="LOAD_MORE_SUCCESS",e.LOAD_MORE_FAIL="LOAD_MORE_FAIL"}(n||(n={}));var j=Object({NODE_ENV:"production",PUBLIC_URL:"www.mitya-me.github.io/google_books_api",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyC3LalOpXX188PDdu-aJwxv5d1tJhArBRA"}).API_URL,p=Object({NODE_ENV:"production",PUBLIC_URL:"www.mitya-me.github.io/google_books_api",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyC3LalOpXX188PDdu-aJwxv5d1tJhArBRA"}).API_KEY,h=function(e,t,o){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return function(){var a=Object(d.a)(b.a.mark((function a(s){var _;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,s({type:n.FETCH_BOOKS}),a.next=4,O.a.get("".concat(j,"q=").concat(e,"+subject=").concat(t,"&orderBy=").concat(o,"&startIndex=").concat(c,"&maxResults=30&key=").concat(p));case 4:_=a.sent,s({type:n.FETCH_BOOKS_SUCCESS,payload:_.data}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),s({type:n.FETCH_BOOKS_FAIL,payload:"Sorry, books fetching failed..."});case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},k=function(e,t,o){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:60;return function(){var a=Object(d.a)(b.a.mark((function a(s){var _;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,s({type:n.FETCH_BOOKS}),a.next=4,O.a.get("".concat(j,"q=").concat(e,"+subject=").concat(t,"&orderBy=").concat(o,"&startIndex=").concat(c,"&maxResults=30&key=").concat(p));case 4:_=a.sent,s({type:n.LOAD_MORE_SUCCESS,payload:_.data}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),s({type:n.LOAD_MORE_FAIL,payload:"Sorry, it is impossible to download more books..."});case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},m=Object(i.a)({},c),x=function(){var e=Object(_.b)();return Object(r.b)(m,e)},v=_.c,g=o(11),S=o(8),f=o.n(S),E=o(1),y=function(e){var t=e.id,o=e.thumbnail,c=e.category,n=e.title,a=e.author;return Object(E.jsx)("div",{className:f.a.book,children:Object(E.jsxs)(g.b,{to:"/bookId=".concat(t),children:[Object(E.jsx)("div",{className:f.a.book__cover,children:Object(E.jsx)("img",{src:o,alt:""})}),Object(E.jsxs)("ul",{className:f.a.book__description,children:[Object(E.jsx)("li",{className:"".concat(f.a.book__description_item," ").concat(f.a.book__description_ctgry),children:c?c.join(" "):"category not specified"}),Object(E.jsxs)("li",{className:"".concat(f.a.book__description_item," ").concat(f.a.book__description_title),children:[" ",n," "]}),Object(E.jsxs)("li",{className:f.a.book__description_item,children:[" ",a?a.join(", "):"author not specified"," "]})]})]})})},C=o(16),F=o.n(C),N=function(){var e=v((function(e){return e.books})).books,t=x().loadMoreBooks;return Object(E.jsxs)("section",{className:F.a.books,children:[e.totalItems?Object(E.jsxs)("h2",{className:F.a.books__title,children:["Results ",Object(E.jsx)("span",{children:e.totalItems})]}):null,Object(E.jsx)("div",{className:F.a.books__content,children:e.items.length?e.items.map((function(e){return Object(E.jsx)(y,{id:e.id,thumbnail:void 0===e.volumeInfo.imageLinks?"http://shop.btpubservices.com/content/images/cover_not_available_360.jpg?height=200":e.volumeInfo.imageLinks.thumbnail,category:e.volumeInfo.categories,title:e.volumeInfo.title,author:e.volumeInfo.authors})})):Object(E.jsx)("h1",{style:{fontSize:"25px",padding:"20px"},children:"Enter the book you need in the search field"})}),Object(E.jsx)("div",{className:F.a.books__btn,children:Object(E.jsx)("button",{onClick:function(){return t("python","All","newest")},children:"Load more"})})]})},I=o(24),A=o(0),T=["All","Art","Biography","Computers","History","Medical","Poetry"],D=["relevance","newest"],P=o(31),L=o.n(P),w=o(21),R=o.n(w),B=function(e){var t=e.selectTitle,o=e.options,c=e.setValue,n=e.value;return Object(E.jsxs)("div",{className:R.a.select,children:[Object(E.jsxs)("span",{className:R.a.select__title,children:[" ",t," "]}),Object(E.jsx)("select",{className:R.a.select__item,value:n,onChange:function(e){return c(e.target.value)},children:o.map((function(e){return Object(E.jsxs)("option",{value:e,children:[" ",e," "]})}))})]})},K=o(22),H=o.n(K),M=function(e){var t=e.handleKey,o=e.searchValue,c=e.setSearchValue;return Object(E.jsxs)("div",{className:H.a.input,children:[Object(E.jsx)("input",{value:o,onChange:function(e){return c(e.target.value)},onKeyDown:t,type:"text",className:H.a.input__search,placeholder:"Find your book"}),Object(E.jsx)("button",{className:H.a.input__btn})]})},U=function(){var e=x().fetchBooks,t=Object(A.useState)(""),o=Object(I.a)(t,2),c=o[0],n=o[1],a=Object(A.useState)("all"),s=Object(I.a)(a,2),_=s[0],r=s[1],i=Object(A.useState)("relevance"),l=Object(I.a)(i,2),b=l[0],d=l[1];return Object(E.jsxs)("div",{className:L.a.searchForm,children:[Object(E.jsx)(M,{handleKey:function(t){"Enter"===t.key&&e(c,_,b)},searchValue:c,setSearchValue:n}),Object(E.jsxs)("div",{className:L.a.searchForm__selects,children:[Object(E.jsx)(B,{value:_,setValue:r,selectTitle:"Categories",options:T}),Object(E.jsx)(B,{value:b,setValue:d,selectTitle:"Sorting by",options:D})]})]})},V=o(32),W=o.n(V),X=function(){return Object(E.jsxs)("section",{className:W.a.searchSection,children:[Object(E.jsx)("h1",{className:W.a.searchSection__title,children:" Search for books "}),Object(E.jsx)(U,{})]})},Y=function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(X,{}),Object(E.jsx)(N,{})]})},J=o(7),z=o.n(J),q=o(2),Q=function(){var e=Object(q.g)(),t=v((function(e){return e.books.books.items})),o=Object(q.f)();return Object(E.jsx)(E.Fragment,{children:t.filter((function(t){return t.id===e.id})).map((function(e){return Object(E.jsxs)("section",{className:z.a.bookdescr,children:[Object(E.jsx)("button",{className:z.a.bookdescr__btn,onClick:function(){return o.push("/")}}),Object(E.jsxs)("div",{className:z.a.bookdescr__wrapper,children:[Object(E.jsx)("div",{className:z.a.bookdescr__cover,children:Object(E.jsx)("img",{src:void 0===e.volumeInfo.imageLinks?"http://shop.btpubservices.com/content/images/cover_not_available_360.jpg?height=200":e.volumeInfo.imageLinks.thumbnail,alt:"book cover"})}),Object(E.jsxs)("div",{className:z.a.bookdescr__text,children:[Object(E.jsxs)("ul",{className:z.a.bookdescr__text_list,children:[Object(E.jsx)("li",{className:z.a.bookdescr__text_category,children:e.volumeInfo.categories}),Object(E.jsx)("li",{className:z.a.bookdescr__text_title,children:e.volumeInfo.title}),Object(E.jsx)("li",{className:z.a.bookdescr__text_author,children:e.volumeInfo.authors.join(", ")})]}),Object(E.jsx)("div",{className:z.a.bookdescr__text_info,children:e.volumeInfo.description})]})]})]})}))})},G=o(23),Z=o.n(G),$=function(){return Object(E.jsxs)("div",{className:Z.a.notFound,children:[Object(E.jsx)("span",{className:Z.a.notFound__error,children:" 404 "}),Object(E.jsx)("span",{className:Z.a.notFound__text,children:"Page not found"})]})},ee=function(){return Object(E.jsx)("div",{className:"app",children:Object(E.jsxs)(q.c,{children:[Object(E.jsx)(q.a,{exact:!0,path:"/",component:Y}),Object(E.jsx)(q.a,{exact:!0,path:"/bookId=:id",component:Q}),Object(E.jsx)(q.a,{exact:!0,path:"*",component:$})]})})},te=o(45),oe=o(33),ce={books:{items:[],totalItems:""},loading:!0,error:null},ne=Object(r.c)({books:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.FETCH_BOOKS:return Object(i.a)(Object(i.a)({},e),{},{loading:!0});case n.FETCH_BOOKS_SUCCESS:return Object(i.a)(Object(i.a)({},e),{},{books:t.payload,loading:!1});case n.FETCH_BOOKS_FAIL:return Object(i.a)(Object(i.a)({},e),{},{error:t.payload,loading:!1});case n.LOAD_MORE:return Object(i.a)(Object(i.a)({},e),{},{loading:!0});case n.LOAD_MORE_SUCCESS:var o={items:[].concat(Object(oe.a)(e.books.items),Object(oe.a)(t.payload.items)),totalItems:t.payload.totalItems};return Object(i.a)(Object(i.a)({},e),{},{books:o,loading:!1});case n.LOAD_MORE_FAIL:return Object(i.a)(Object(i.a)({},e),{},{error:t.payload,loading:!1});default:return e}}}),ae=window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.d,se=Object(r.e)(ne,ae(Object(r.a)(te.a)));s.a.render(Object(E.jsx)(g.a,{basename:"www.mitya-me.github.io/google_books_api",children:Object(E.jsx)(_.a,{store:se,children:Object(E.jsx)(ee,{})})}),document.getElementById("root"))},8:function(e,t,o){e.exports={book:"bookCard_book__PlDdB",book__cover:"bookCard_book__cover__1TIHf",book__description:"bookCard_book__description__1iN0_",book__description_item:"bookCard_book__description_item__1cmNq",book__description_ctgry:"bookCard_book__description_ctgry__1k7g3",book__description_title:"bookCard_book__description_title__1T36X"}}},[[77,1,2]]]);
//# sourceMappingURL=main.510e332a.chunk.js.map