(this["webpackJsonpmy-app-01"]=this["webpackJsonpmy-app-01"]||[]).push([[3],{290:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));var a=s(95);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var s=[],a=!0,r=!1,o=void 0;try{for(var n,i=e[Symbol.iterator]();!(a=(n=i.next()).done)&&(s.push(n.value),!t||s.length!==t);a=!0);}catch(c){r=!0,o=c}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return s}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},291:function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));var a=s(3),r=(s(0),s(19)),o=s(11),n=s(1),i=function(e){return{isAuth:e.authReducer.isAuth}},c=function(e){return Object(r.b)(i)((function(t){return t.isAuth?Object(n.jsx)(e,Object(a.a)({},t)):Object(n.jsx)(o.a,{to:"/login"})}))}},294:function(e,t,s){e.exports={post:"post_post__15KVg",head:"post_head__LDpoy",right:"post_right__2rAAv",avatar:"post_avatar__3m-Wn",name:"post_name__2qvA2",link:"post_link__1Ai1y",message:"post_message__3u9rH",footer:"post_footer__3lim3",likes:"post_likes__axT9W",like:"post_like__3kSaN"}},295:function(e,t,s){e.exports={posts:"posts_posts__RT5fm"}},296:function(e,t,s){e.exports={profileInfo:"profileInfo_profileInfo__3fSaH",avatar:"profileInfo_avatar__1gR6k",profileInner:"profileInfo_profileInner__YMXLJ",profileFooter:"profileInfo_profileFooter__3zR4c",profileFooter__postwrite:"profileInfo_profileFooter__postwrite__295hf",profileDescr:"profileInfo_profileDescr__3XFhB",profileItem:"profileInfo_profileItem__1wfj_",aboutItem:"profileInfo_aboutItem__3yL9A",aboutDescr:"profileInfo_aboutDescr__3grvf",editButton:"profileInfo_editButton__10Yru",profileHeader__name:"profileInfo_profileHeader__name__3PaNT",profileHeader__status:"profileInfo_profileHeader__status__3aCJz"}},298:function(e,t,s){"use strict";s.r(t);var a=s(19),r=s(11),o=s(10),n=s(127),i=s(25),c=function(e){return e.profileReducer.posts},l=function(e){return e.profileReducer.newPostText},u=function(e){return e.profileReducer.profile},d=function(e){return e.profileReducer.status},f=function(e){return e.profileReducer.editMode},j=s(291),p=s(52),m=s(53),b=s(63),h=s(62),O=s(0),x=s.n(O),v=s(294),_=s.n(v),g=s(1),N=function(e){var t=e.message,s=e.likes,a=e.name,r=e.avatar,o=e.id;return Object(g.jsxs)("div",{id:o,className:_.a.post,children:[Object(g.jsxs)("div",{className:_.a.head,children:[Object(g.jsx)("div",{className:_.a.avatar,children:Object(g.jsx)("img",{src:null!=r?r:"https://html5css.ru/w3images/avatar2.png",alt:"myMiniAvatar"})}),Object(g.jsxs)("div",{className:_.a.right,children:[Object(g.jsx)("a",{className:_.a.name,href:"#",children:a}),Object(g.jsx)("a",{className:_.a.time,href:"#",children:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u0432 13:37"})]})]}),Object(g.jsx)("div",{className:_.a.message,children:t}),Object(g.jsx)("div",{className:_.a.footer,children:Object(g.jsxs)("div",{className:_.a.likes,children:[Object(g.jsx)("button",{className:_.a.like}),Object(g.jsx)("div",{children:s})]})})]})},I=s(295),y=s.n(I),D=x.a.memo((function(e){var t=e.posts,s=e.profile,a=s.fullName,r=s.photos,o=t.map((function(e){return Object(g.jsx)(N,{id:e.id,message:e.message,name:a,avatar:r.small,likes:e.likes},e.id)}));return Object(g.jsx)("div",{className:y.a.posts,children:o})})),k=s(7),S=s.n(k),w=s(12),P=s(290),T=s(128),M=s(129),A=s(296),F=s.n(A),E=function(e){var t=e.updateStatus,s=Object(O.useState)(!1),a=Object(P.a)(s,2),r=a[0],o=a[1],n=Object(O.useState)(e.status),i=Object(P.a)(n,2),c=i[0],l=i[1];Object(O.useEffect)((function(){l(e.status)}),[e.status]);var u=function(e){o(e)};return Object(g.jsx)("div",{className:"status",children:r?Object(g.jsx)("div",{children:Object(g.jsx)("input",{autoFocus:!0,onBlur:function(){u(!1),t(c)},value:c,onChange:function(e){l(e.currentTarget.value)}})}):Object(g.jsx)("div",{onClick:function(){return u(!0)},children:Object(g.jsx)("span",{children:c||"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441"})})})},H=s(51),R=s(41),J=function(e){var t=e.contactTitle,s=e.contactValue,a=e.s;return Object(g.jsxs)("div",{className:a.profileItem,children:[Object(g.jsx)("div",{className:a.aboutItem,children:t}),Object(g.jsx)("a",{className:a.aboutDescr,href:s,target:"_blank",children:null==s?"\u041f\u0443\u0441\u0442\u043e":s})]})},C=function(e){var t=e.contactTitle,s=e.placeholder,a=e.name,r=e.s;return Object(g.jsxs)("div",{className:r.profileItem,children:[Object(g.jsx)("div",{className:r.aboutItem,children:t}),Object(g.jsx)(T.a,{component:R.a,placeholder:s||"\u0421\u0441\u044b\u043b\u043a\u0430",name:a,validate:[H.b]})]})},B=function(e){var t=e.item,s=e.itemDescr,a=(e.plug,e.s);return Object(g.jsxs)("div",{className:a.profileItem,children:[Object(g.jsx)("div",{className:a.aboutItem,children:s}),Object(g.jsx)("div",{className:a.aboutDescr,children:t})]})},V=function(e){var t=e.item,s=e.itemDescr,a=e.search,r=e.dontSearch,o=e.s;return Object(g.jsxs)("div",{className:o.profileItem,children:[Object(g.jsx)("div",{className:o.aboutItem,children:s}),Object(g.jsx)("div",{className:o.aboutDescr,children:t?a:r})]})},L=function(e){var t=e.itemDescr,s=e.name,a=e.placeholder,r=e.type,o=e.s;return Object(g.jsxs)("div",{className:o.profileItem,children:[Object(g.jsx)("div",{className:o.aboutItem,children:t}),Object(g.jsx)("div",{className:o.aboutDescr,children:Object(g.jsx)(T.a,{type:r?"checkbox":"input",component:R.a,placeholder:a,name:s,validate:[H.b]})})]})},z=function(e){var t=e.s,s=e.handleSubmit,a=e.profile;return Object(g.jsxs)("form",{onSubmit:s,className:t.profileFooter,children:[Object(g.jsx)("div",{className:t.profileDescr,children:Object(g.jsx)("div",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"})}),Object(g.jsx)(L,{itemDescr:"\u041f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f:",name:"fullName",placeholder:"\u041f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f",s:t}),Object(g.jsx)(L,{itemDescr:"\u041e\u0431\u043e \u043c\u043d\u0435:",name:"aboutMe",placeholder:"\u041e\u0431\u043e \u043c\u043d\u0435",s:t}),Object(g.jsx)(L,{itemDescr:"\u0418\u0449\u0443 \u0420\u0430\u0431\u043e\u0442\u0443:",name:"lookingForAJob",placeholder:"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443",type:"checkbox",s:t}),Object(g.jsx)(L,{itemDescr:"\u041c\u043e\u0438 \u043d\u0430\u0432\u044b\u043a\u0438:",name:"lookingForAJobDescription",placeholder:"\u041e\u043f\u0438\u0448\u0438\u0442\u0435 \u0440\u0430\u0431\u043e\u0442\u0443",s:t}),Object(g.jsx)("div",{className:t.profileDescr,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),Object.keys(a.contacts).map((function(e){return Object(g.jsx)(C,{contactTitle:e,placeholder:a.contacts[e],name:"contacts."+e,s:t},e)})),Object(g.jsx)("button",{type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})},W=z=Object(M.a)({form:"profileData"})(z),X=function(e){var t=e.profile,s=e.isOwner,a=e.goToEditMode,r=e.s,o=t.fullName,n=t.aboutMe,i=t.lookingForAJob,c=t.lookingForAJobDescription;return Object(g.jsxs)("div",{className:r.profileFooter,children:[Object(g.jsxs)("div",{className:r.profileDescr,children:[Object(g.jsx)("div",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"}),s?Object(g.jsx)("div",{className:r.editButton,onClick:a,children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}):null]}),Object(g.jsx)(B,{itemDescr:"\u041f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f:",item:o,plug:"\u0418\u043c\u044f",s:r}),Object(g.jsx)(B,{itemDescr:"\u041e\u0431\u043e \u043c\u043d\u0435:",item:n,plug:"\u0418\u043d\u0444\u044b \u043d\u0435\u0442 ;(",s:r}),Object(g.jsx)(V,{itemDescr:"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443:",item:i,search:"\u0418\u0449\u0443",dontSearch:"\u041d\u0435 \u0438\u0449\u0443",s:r}),Object(g.jsx)(B,{itemDescr:"\u041c\u043e\u0438 \u043d\u0430\u0432\u044b\u043a\u0438:",item:c,plug:"\u041d\u0435\u0442 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f",s:r}),Object(g.jsx)("div",{className:r.profileDescr,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),Object.keys(t.contacts).map((function(e){return Object(g.jsx)(J,{contactTitle:e,contactValue:t.contacts[e],s:r},e)}))]})},Y=Object(H.a)(100),q=function(e){var t=e.handleSubmit;return Object(g.jsxs)("form",{onSubmit:t,className:F.a.profileFooter__postwrite,children:[Object(g.jsx)(T.a,{name:"postInput",component:R.b,type:"text",placeholder:"\u0427\u0435\u043c \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f?",validate:[H.b,Y]}),Object(g.jsx)("button",{type:"sumbit",children:"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"})]})};q=Object(M.a)({form:"post-form"})(q);var K=function(e){var t=e.status,s=e.statusEditMode,a=e.toggleEditModeStatus,r=e.newStatusText,o=e.updateStatus,n=e.addPost,i=e.profile,c=e.isOwner,l=e.sendPhoto,u=e.updateProfileData,d=(e.userId,Object(O.useState)(!1)),f=Object(P.a)(d,2),j=f[0],p=f[1],m=function(){var e=Object(w.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t);case 2:p(!1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:F.a.profileInfo,children:[Object(g.jsxs)("div",{className:F.a.avatar,children:[Object(g.jsx)("img",{src:i.photos.large?i.photos.large:"https://html5css.ru/w3images/avatar2.png",alt:"myAvatar"}),c&&Object(g.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&l(e.target.files[0])}})]}),Object(g.jsxs)("div",{className:F.a.profileInner,children:[Object(g.jsxs)("div",{className:"profileHeader",children:[Object(g.jsx)("div",{className:F.a.profileHeader__name,children:i.fullName}),Object(g.jsx)("div",{className:F.a.profileHeader__status,children:Object(g.jsx)(E,{status:t,editMode:s,toggleEditMode:a,newStatusText:r,updateStatus:o})}),j?Object(g.jsx)(W,{initialValues:i,s:F.a,onSubmit:m,profile:i}):Object(g.jsx)(X,{goToEditMode:function(){return p(!0)},isOwner:c,profile:i,s:F.a})]}),Object(g.jsx)(q,{onSubmit:function(e){n(e.postInput)}})]})]})},U=s(125),G=function(e){Object(b.a)(s,e);var t=Object(h.a)(s);function s(){return Object(p.a)(this,s),t.apply(this,arguments)}return Object(m.a)(s,[{key:"refreshProfile",value:function(){var e=this.props,t=e.setProfile,s=e.setStatus,a=e.match.params.userId;a||(a=e.userId),t(a),s(a)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){var e=this.props,t=e.addPost,s=e.changePostText,a=e.newPostText,r=e.profile,o=e.posts,n=e.match,i=e.sendPhoto,c=e.updateProfileData,l=e.status,u=e.editMode,d=e.toggleEditMode,f=e.newStatusText,j=e.updateStatus;return r?Object(g.jsxs)("div",{children:[Object(g.jsx)(K,{updateProfileData:c,sendPhoto:i,isOwner:!n.params.userId,addPost:t,changePostText:s,newPostText:a,profile:r,status:l,statusEditMode:u,toggleEditModeStatus:d,newStatusText:f,updateStatus:j}),Object(g.jsx)(D,{posts:o,profile:r})]}):Object(g.jsx)(U.a,{})}}]),s}(O.Component);t.default=Object(o.d)(Object(a.b)((function(e){return{posts:c(e),newPostText:l(e),profile:u(e),status:d(e),editMode:f(e),isAuth:Object(i.b)(e),userId:Object(i.e)(e)}}),{addPost:n.a,changePostText:n.b,getProfile:n.c,toggleEditMode:n.i,newStatusText:n.d,setProfile:n.g,setStatus:n.h,updateStatus:n.k,sendPhoto:n.f,updateProfileData:n.j}),r.f,j.a)(G)}}]);
//# sourceMappingURL=3.c9754c8e.chunk.js.map