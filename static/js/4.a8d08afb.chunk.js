(this["webpackJsonpmy-app-01"]=this["webpackJsonpmy-app-01"]||[]).push([[4],{292:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(95);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,s=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(c){a=!0,s=c}finally{try{r||null==i.return||i.return()}finally{if(a)throw s}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},293:function(e,t,n){e.exports={users:"userItem_users__10bSI",user:"userItem_user__21ntH",avatar:"userItem_avatar__2-LJJ",content:"userItem_content__2H43W",name:"userItem_name__337Gd",city:"userItem_city__LDGQx",first:"userItem_first__3z2Y2"}},297:function(e,t,n){e.exports={pagination:"paginator_pagination__CqhiY",item:"paginator_item__1i78J",active:"paginator_active__1JKrb",next:"paginator_next__3DkZs",prev:"paginator_prev__1DbI8"}},300:function(e,t,n){"use strict";n.r(t);var r=n(19),a=n(131),s=function(e){return e.usersReducer.users},o=function(e){return e.usersReducer.pageSize},i=function(e){return e.usersReducer.totalUserCount},c=function(e){return e.usersReducer.currentPage},u=function(e){return e.usersReducer.followingInProgress},l=function(e){return e.usersReducer.isLoading},d=n(50),f=n(51),g=n(61),p=n(60),j=n(0),m=n(21),b=n(293),h=n.n(b),v=n(1),_=function(e){var t=e.id,n=e.name,r=e.photos,a=e.status,s=e.followed,o=e.Follow,i=e.Unfollow,c=e.followingInProgress;return Object(v.jsxs)("div",{id:"user-".concat(t),className:h.a.user,children:[Object(v.jsxs)("div",{className:h.a.avatar,children:[Object(v.jsx)("img",{src:null!=r?r:"https://html5css.ru/w3images/avatar2.png",alt:"userAvatar"}),s?Object(v.jsx)("button",{disabled:c.some((function(e){return e===t})),onClick:function(){i(t)},children:"Unfollow"}):Object(v.jsx)("button",{disabled:c.some((function(e){return e===t})),onClick:function(){o(t)},children:"Follow"})]}),Object(v.jsxs)("div",{className:h.a.content,children:[Object(v.jsx)("div",{className:h.a.first,children:Object(v.jsx)(m.b,{className:h.a.name,to:"/profile/"+t,children:n})}),Object(v.jsx)("div",{children:Object(v.jsxs)("div",{children:[" ",a]})})]})]},t)},w=n(292),O=n(297),x=n.n(O),y=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,a=e.onPageChanged,s=e.portionSize,o=void 0===s?10:s,i=Math.ceil(t/n),c=[],u=1;u<=i;u++)c.push(u);var l=Math.ceil(i/o),d=Object(j.useState)(1),f=Object(w.a)(d,2),g=f[0],p=f[1],m=(g-1)*o+1,b=g*o;return Object(v.jsxs)("div",{className:x.a.pagination,children:[g>1&&Object(v.jsx)("div",{className:x.a.prev,onClick:function(){p(g-1)}}),c.filter((function(e){return e>=m&&e<=b})).map((function(e){return Object(v.jsx)("div",{className:r===e?x.a.active:x.a.item,onClick:function(){a(e)},children:e})})),l>g&&Object(v.jsx)("div",{className:x.a.next,onClick:function(){p(g+1)}})]})},P=function(e){var t=e.state,n=e.getPages,r=t.users,a=t.pageSize,s=t.totalUserCount,o=t.currentPage,i=t.followThunk,c=t.unFollowThunk,u=t.followingInProgress,l=r.map((function(e){return Object(v.jsx)(_,{id:e.id,name:e.name,uniqueUrlName:e.uniqueUrlName,photos:null!=e.photos.small?e.photos.small:e.photos.large,followed:e.followed,Follow:i,Unfollow:c,followingInProgress:u},e.id)}));return Object(v.jsxs)("div",{className:h.a.users,children:[Object(v.jsx)("div",{className:h.a.inner,children:l}),Object(v.jsx)(y,{pageSize:a,totalItemsCount:s,currentPage:o,onPageChanged:n})]})},I=n(65),N=function(e){Object(g.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).getNewPage=function(t){var n=e.props;(0,n.getPages)(t,n.pageSize)},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.getUsers)(e.currentPage,e.pageSize)}},{key:"render",value:function(){var e=this.props,t=e.isLoading,n=t?Object(v.jsx)(I.a,{}):null,r=t?null:Object(v.jsx)(P,{state:e,getPages:this.getNewPage});return Object(v.jsxs)("div",{children:[n,r]})}}]),n}(j.Component),k=Object(r.b)((function(e){return{users:s(e),pageSize:o(e),totalUserCount:i(e),currentPage:c(e),isLoading:l(e),followingInProgress:u(e)}}),{Follow:a.a,Unfollow:a.b,setUsers:a.h,updatePages:a.j,loadUsers:a.g,followProgress:a.c,getUsers:a.f,getPages:a.e,followThunk:a.d,unFollowThunk:a.i})(N);t.default=k}}]);
//# sourceMappingURL=4.a8d08afb.chunk.js.map