(this["webpackJsonpmy-app-01"]=this["webpackJsonpmy-app-01"]||[]).push([[3],{293:function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));var a=s(3),r=(s(0),s(20)),i=s(11),n=s(1),o=function(e){return{isAuth:e.authReducer.isAuth}},c=function(e){return Object(r.b)(o)((function(t){return t.isAuth?Object(n.jsx)(e,Object(a.a)({},t)):Object(n.jsx)(i.a,{to:"/login"})}))}},296:function(e,t,s){e.exports={post:"post_post__15KVg",delete:"post_delete__4NoLz",head:"post_head__LDpoy",right:"post_right__2rAAv",avatar:"post_avatar__3m-Wn",name:"post_name__2qvA2",link:"post_link__1Ai1y",message:"post_message__3u9rH",postText:"post_postText__8dgsm",footer:"post_footer__3lim3",likes:"post_likes__axT9W",like:"post_like__3kSaN",like_active:"post_like_active__3XBun",number:"post_number__23Avk",number_active:"post_number_active__1I9Be",time:"post_time__3LcKI"}},297:function(e,t,s){e.exports={posts:"posts_posts__RT5fm",postsHeader:"posts_postsHeader__3FY3J",postsHeader__item:"posts_postsHeader__item__2YArM",postsWrapper:"posts_postsWrapper__bvuBf",notEnough:"posts_notEnough__15k0x",notEnoughWrap:"posts_notEnoughWrap__241cA",notEnoughText:"posts_notEnoughText__1O9PL",notEnoughPic:"posts_notEnoughPic__OAzg1"}},298:function(e,t,s){e.exports={profileInfo:"profileInfo_profileInfo__3fSaH",profileInner:"profileInfo_profileInner__YMXLJ",profileFooter:"profileInfo_profileFooter__3zR4c",profileFooter__postwrite:"profileInfo_profileFooter__postwrite__295hf",backButton:"profileInfo_backButton__2PAEr",profile__addPostAvatar:"profileInfo_profile__addPostAvatar__2TDyz",profile__addPostTextarea:"profileInfo_profile__addPostTextarea__3zD7B",profileDescr:"profileInfo_profileDescr__3XFhB",profileItem:"profileInfo_profileItem__1wfj_",aboutItem:"profileInfo_aboutItem__3yL9A",aboutDescr:"profileInfo_aboutDescr__3grvf",editButton:"profileInfo_editButton__10Yru",profileHeader:"profileInfo_profileHeader__18joT",profileHeader__name:"profileInfo_profileHeader__name__3PaNT",profileHeader__status:"profileInfo_profileHeader__status__3aCJz",avatar:"profileInfo_avatar__1gR6k",avatarWrap:"profileInfo_avatarWrap__2VpOr",avatarInput:"profileInfo_avatarInput__vWL74",avatarInner:"profileInfo_avatarInner__4Y3Ul",editInfoTitle:"profileInfo_editInfoTitle__29l_3",moreInfoBtn:"profileInfo_moreInfoBtn__Ts23Q",upStage:"profileInfo_upStage__2cQ8a",downStage:"profileInfo_downStage__CyT1k",downStage_active:"profileInfo_downStage_active__iXPK6",buttons:"profileInfo_buttons__3wYOl",pictureWrap:"profileInfo_pictureWrap__3zwLv",picturePreview__close:"profileInfo_picturePreview__close__1Q5uc"}},299:function(e,t,s){e.exports={status:"profileStatus_status__154YZ",editor:"profileStatus_editor__34PuO",statusSpan:"profileStatus_statusSpan__FS3wA"}},300:function(e,t,s){e.exports={uploadPhotoBtn:"uploadPhoto_uploadPhotoBtn__2NhI7"}},302:function(e,t,s){"use strict";s.r(t);var a=s(20),r=s(11),i=s(10),n=s(92),o=s(25),c=function(e){return e.profileReducer.posts},l=function(e){return e.profileReducer.newPostText},u=function(e){return e.profileReducer.profile},d=function(e){return e.profileReducer.status},p=function(e){return e.profileReducer.editMode},j=s(293),f=s(56),b=s(57),m=s(67),_=s(66),v=s(0),O=s.n(v),h=s(15),x=s(1),g=function(){var e,t=new Date,s=function(){var e=t;return/1/.test(parseInt((e+"").charAt(0)))||(e=parseInt((e+"").charAt(1))),""}();return e=(e+(t.getDate()<10)?"0"+t.getDate()+s:t.getDate()+s)+" "+["\u044f\u043d\u0432","\u0444\u0435\u0432","\u043c\u0430\u0440","\u0430\u043f\u0440","\u043c\u0430\u0439","\u0438\u044e\u043d","\u0438\u044e\u043b","\u0430\u0432\u0433","\u0441\u0435\u043d","\u043e\u043a\u0442","\u043d\u043e\u044f","\u0434\u0435\u043a"][t.getMonth()]+" "+t.getFullYear()+" "+t.getHours()+":"+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes()),Object(x.jsx)(x.Fragment,{children:e})},P=s(296),N=s.n(P),I=function(e){var t=e.message,s=e.likes,a=e.name,r=e.avatar,i=e.id,n=e.userId,o=e.deletePost,c=e.likePost,l=e.liked,u=e.disLikePost,d=e.picture;return Object(x.jsxs)("div",{id:i,className:N.a.post,children:[Object(x.jsxs)("div",{className:N.a.head,children:[Object(x.jsx)("div",{className:N.a.avatar,children:Object(x.jsx)("img",{src:null!=r?r:"https://html5css.ru/w3images/avatar2.png",alt:"myMiniAvatar"})}),Object(x.jsxs)("div",{className:N.a.right,children:[Object(x.jsx)(h.b,{className:N.a.name,to:"/profile/"+n,children:a}),Object(x.jsx)("div",{className:N.a.time,children:Object(x.jsx)(g,{})})]}),Object(x.jsx)("div",{className:N.a.delete,onClick:function(){return o(i)},children:"\u2716"})]}),Object(x.jsxs)("div",{className:N.a.message,children:[t?Object(x.jsx)("div",{className:N.a.postText,children:t}):"",Object(x.jsx)("img",{src:d,alt:d})]}),Object(x.jsx)("div",{className:N.a.footer,children:l?Object(x.jsxs)("div",{className:N.a.likes,children:[Object(x.jsx)("button",{className:N.a.like_active,onClick:function(){return u(i,s)}}),Object(x.jsx)("div",{className:N.a.number_active,children:s})]}):Object(x.jsxs)("div",{className:N.a.likes,children:[Object(x.jsx)("button",{className:N.a.like,onClick:function(){return c(i,s)}}),Object(x.jsx)("div",{className:N.a.number,children:s})]})})]})},w=s(297),k=s.n(w),A=O.a.memo((function(e){var t=e.posts,s=e.profile,a=e.deletePost,r=e.likePost,i=e.disLikePost,n=e.isOwner,o=s.fullName,c=s.photos,l=s.userId,u=t.map((function(e){return Object(x.jsx)(I,{id:e.id,message:e.message,name:o,avatar:c.small,likes:e.likes,userId:l,deletePost:a,likePost:r,liked:e.liked,disLikePost:i,picture:e.picture},e.id)})),d=u.length;return n?Object(x.jsxs)("div",{className:k.a.postsWrapper,children:[Object(x.jsx)("div",{className:k.a.postsHeader,children:Object(x.jsx)(D,{p:k.a,posts:t})}),Object(x.jsx)("div",{className:k.a.posts,children:d?u:Object(x.jsx)(S,{})})]}):Object(x.jsxs)("div",{className:k.a.postsWrapper,children:[Object(x.jsx)("div",{className:k.a.postsHeader,children:Object(x.jsx)(D,{p:k.a,posts:[]})}),Object(x.jsx)("div",{className:k.a.posts,children:Object(x.jsx)(S,{})})]})})),D=function(e){var t=e.p,s=e.posts.length,a=1===s?"\u0437\u0430\u043f\u0438\u0441\u044c":null,r=s>1&&s<5?"\u0437\u0430\u043f\u0438\u0441\u0438":"\u0437\u0430\u043f\u0438\u0441\u0435\u0439";return Object(x.jsxs)("div",{className:t.postsHeader__item,children:[s," ",a||r]})},S=function(){return Object(x.jsx)("div",{className:k.a.notEnough,children:Object(x.jsxs)("div",{className:k.a.notEnoughWrap,children:[Object(x.jsx)("div",{className:k.a.notEnoughPic,children:Object(x.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAABLCAMAAAAf8MQEAAAAe1BMVEXV3ujU3+kAAACqqqrU3+jR0ejV3ujU3un////Z4uv+/v79/f3V3+nz9vnm7PLh6O/2+Pry9fjv8vbc5e3o7fPW4Oni6e/e5u79/f78/P36+/zq7/TY4er3+Pr3+fvX4Or09vnt8fXz9vj9/v7b5OzW3+ni6O/i6fDW4OqeQWJJAAAACHRSTlO0twADvwv4rA1otFkAAAD1SURBVHhe7djHjoMwFIZR0mauG7Wkt+nv/4RjEguzIeDfUcTC34rNEVxL1wuiSALN5iatkRaWk3NdHvivBFq2/FsirSz/JNeqKfHAeclYyWFeSl0Jc9ZwpoE0dR49OfDxrzq6sDJyOE8++dnD7GF2bz79fQ88kUMlE1wZy5kSiuFcEZHCudBcPPPth4+Dx+xVSmmFn3ymQQbznJpykO/p3t6JF2lx0zGZKHbgiSCRaF3zlvN6NI8bxWO53pBtsx7JrwbkW+q2/RrD/zLqaceGOTtSb6fzEC929KCL9777XVY/XW4Cr8rIj8/vveE8cCDL37GfD/+jIrdEVJmtQgAAAABJRU5ErkJggg==",alt:"notEnoughPostPic"})}),Object(x.jsx)("div",{className:k.a.notEnoughText,children:"\u041d\u0430 \u0441\u0442\u0435\u043d\u0435 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442 \u043d\u0435 \u0435\u0434\u0438\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438"})]})})},T=A,E=s(7),y=s.n(E),F=s(12),C=s(99),M=s(298),B=s.n(M),H=s(299),W=s.n(H),R=function(e){var t=e.updateStatus,s=e.isOwner,a=Object(v.useState)(!1),r=Object(C.a)(a,2),i=r[0],n=r[1],o=Object(v.useState)(e.status),c=Object(C.a)(o,2),l=c[0],u=c[1];Object(v.useEffect)((function(){u(e.status)}),[e.status]);var d=function(e){n(e)},p=function(){d(!1),t(l)};return Object(x.jsx)("div",{className:W.a.status,children:i?Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:W.a.editor,children:[Object(x.jsx)("input",{autoFocus:!0,onBlur:p,value:l,onChange:function(e){u(e.currentTarget.value)}}),Object(x.jsx)("button",{onClick:function(){return p()},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]}),Object(x.jsx)("div",{onClick:function(){return d(!0)},children:Object(x.jsx)("span",{children:l||"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441"})})]}):Object(x.jsx)("div",{onClick:function(){return s?d(!0):null},className:W.a.statusSpan,children:Object(x.jsx)("span",{children:l||"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441"})})})},L=s(134),z=s(133),J=s(43),V=s(55),U=function(e){var t=e.contactTitle,s=e.contactValue,a=e.s;return Object(x.jsxs)("div",{className:a.profileItem,children:[Object(x.jsxs)("div",{className:a.aboutItem,children:[t,":"]}),s?Object(x.jsx)("a",{className:a.aboutDescr,href:s,rel:"noreferrer",target:"_blank",children:s}):Object(x.jsx)("div",{className:a.aboutDescr,children:"\u041f\u0443\u0441\u0442\u043e"})]})},q=function(e){var t=e.contactTitle,s=e.placeholder,a=e.name,r=e.s;return Object(x.jsxs)("div",{className:r.profileItem,children:[Object(x.jsx)("div",{className:r.aboutItem,children:t}),Object(x.jsx)(z.a,{component:J.a,placeholder:s||"\u0421\u0441\u044b\u043b\u043a\u0430",name:a,validate:[V.b]})]})},Y=function(e){var t=e.item,s=e.itemDescr,a=e.plug,r=e.s;return Object(x.jsxs)("div",{className:r.profileItem,children:[Object(x.jsx)("div",{className:r.aboutItem,children:s}),Object(x.jsx)("div",{className:r.aboutDescr,children:t||a})]})},G=function(e){var t=e.item,s=e.itemDescr,a=e.search,r=e.dontSearch,i=e.s;return Object(x.jsxs)("div",{className:i.profileItem,children:[Object(x.jsx)("div",{className:i.aboutItem,children:s}),Object(x.jsx)("div",{className:i.aboutDescr,children:t?a:r})]})},Q=function(e){var t=e.itemDescr,s=e.name,a=e.placeholder,r=e.type,i=e.s;return Object(x.jsxs)("div",{className:i.profileItem,children:[Object(x.jsx)("div",{className:i.aboutItem,children:t}),Object(x.jsx)("div",{className:i.aboutDescr,children:Object(x.jsx)(z.a,{type:r?"checkbox":"input",component:J.a,placeholder:a,name:s,validate:[V.b]})})]})},X=function(e){var t=e.s,s=e.handleSubmit,a=e.profile,r=e.turnOffEditMode,i=e.isOwner;return Object(x.jsxs)("form",{onSubmit:s,className:t.profileFooter,children:[Object(x.jsxs)("div",{className:t.profileDescr,children:[Object(x.jsx)("div",{className:t.editInfoTitle,children:"\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"}),i?Object(x.jsx)("div",{className:t.backButton,onClick:r,children:"\u041d\u0430\u0437\u0430\u0434"}):null]}),Object(x.jsx)(Q,{itemDescr:"\u041f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f:",name:"fullName",placeholder:"\u041f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f",s:t}),Object(x.jsx)(Q,{itemDescr:"\u041e\u0431\u043e \u043c\u043d\u0435:",name:"aboutMe",placeholder:"\u041e\u0431\u043e \u043c\u043d\u0435",s:t}),Object(x.jsx)("div",{className:t.profileDescr,children:Object(x.jsx)("div",{className:t.editInfoTitle,children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"})}),Object(x.jsx)(Q,{itemDescr:"\u0418\u0449\u0443 \u0420\u0430\u0431\u043e\u0442\u0443:",name:"lookingForAJob",placeholder:"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443",type:"checkbox",s:t}),Object(x.jsx)(Q,{itemDescr:"\u041c\u043e\u0438 \u043d\u0430\u0432\u044b\u043a\u0438:",name:"lookingForAJobDescription",placeholder:"\u041e\u043f\u0438\u0448\u0438\u0442\u0435 \u0440\u0430\u0431\u043e\u0442\u0443",s:t}),Object(x.jsx)("div",{className:t.profileDescr,children:Object(x.jsx)("div",{className:t.editInfoTitle,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"})}),Object.keys(a.contacts).map((function(e){return Object(x.jsx)(q,{contactTitle:e,placeholder:a.contacts[e],name:"contacts."+e,s:t},e)})),Object(x.jsx)("button",{type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})},K=X=Object(L.a)({form:"profileData"})(X),Z=function(e){var t=e.profile,s=e.isOwner,a=e.goToEditMode,r=e.s,i=Object(v.useState)(!1),n=Object(C.a)(i,2),o=n[0],c=n[1],l=function(e){c(e)},u=t.fullName,d=t.aboutMe,p=t.lookingForAJob,j=t.lookingForAJobDescription;return Object(x.jsxs)("div",{className:r.profileFooter,children:[Object(x.jsxs)("div",{className:r.upStage,children:[Object(x.jsxs)("div",{className:r.profileDescr,children:[Object(x.jsx)("div",{className:r.editInfoTitle,children:"\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"}),s?Object(x.jsx)("div",{className:r.editButton,onClick:a,children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}):null]}),Object(x.jsx)(Y,{itemDescr:"\u041f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f:",item:u,plug:"\u0418\u043c\u044f",s:r}),Object(x.jsx)(Y,{itemDescr:"\u041e\u0431\u043e \u043c\u043d\u0435:",item:d,plug:"\u0418\u043d\u0444\u044b \u043d\u0435\u0442 ;(",s:r})]}),o?Object(x.jsx)("div",{className:r.moreInfoBtn,onClick:function(){return l(!1)},children:"\u0421\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e"}):Object(x.jsx)("div",{className:r.moreInfoBtn,onClick:function(){return l(!0)},children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e"}),Object(x.jsxs)("div",{className:o?r.downStage_active:r.downStage,children:[Object(x.jsx)("div",{className:r.profileDescr,children:Object(x.jsx)("div",{className:r.editInfoTitle,children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"})}),Object(x.jsx)(G,{itemDescr:"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443:",item:p,search:"\u0418\u0449\u0443",dontSearch:"\u041d\u0435 \u0438\u0449\u0443",s:r}),Object(x.jsx)(Y,{itemDescr:"\u041c\u043e\u0438 \u043d\u0430\u0432\u044b\u043a\u0438:",item:j,plug:"\u041d\u0435\u0442 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f",s:r}),Object(x.jsx)("div",{className:r.profileDescr,children:Object(x.jsx)("div",{className:r.editInfoTitle,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"})}),Object.keys(t.contacts).map((function(e){return Object(x.jsx)(U,{contactTitle:e,contactValue:t.contacts[e],s:r},e)}))]})]})},$=function(e){var t=e.isOwner,s=e.onGetNewFile,a=e.profile,r=e.s;return Object(x.jsxs)("div",{className:r.avatarInner,children:[Object(x.jsx)("div",{className:r.avatar,children:Object(x.jsx)("img",{src:a.photos.large?a.photos.large:"https://html5css.ru/w3images/avatar2.png",alt:"myAvatar"})}),t&&Object(x.jsx)(ee,{onGetNewFile:s,s:r})]})},ee=function(e){var t=e.onGetNewFile,s=e.s;return Object(x.jsxs)("button",{className:s.avatarWrap,children:[Object(x.jsx)("input",{className:s.avatarInput,type:"file",onChange:t})," \u0412\u044b\u0431\u0430\u0442\u044c \u0444\u0430\u0439\u043b"]})},te=s(109),se=s(300),ae=s.n(se),re=function(e){var t=e.setPicturePreview;return Object(x.jsx)("div",{className:ae.a.uploadPhotoBtn,children:Object(x.jsx)("input",{type:"file",onChange:function(e){if(e.target.files.length){var s=e.target.files[0],a=new FileReader;a.onload=function(e){var s=e.target;return console.log(s.result),t(s.result),s},a.readAsDataURL(s)}}})})},ie=Object(V.a)(100),ne=function(e){var t=e.handleSubmit,s=e.avatar,a=e.isOwner,r=e.p,i=e.setPicturePreview,n=e.picturePreview,o=Object(te.a)(!1),c=o.ref,l=o.isComponentVisible,u=o.setIsComponentVisible,d=function(e){u(e)};return Object(x.jsxs)("form",{onSubmit:t,className:r.profileFooter__postwrite,children:[Object(x.jsx)("div",{className:r.profile__addPostAvatar,children:Object(x.jsx)("img",{src:null!=s?s:"https://html5css.ru/w3images/avatar2.png",alt:"myMiniAvatar"})}),a?Object(x.jsxs)("div",{className:r.profile__addPostTextarea,ref:c,children:[Object(x.jsx)(z.a,{name:"postInput",component:J.b,type:"text",placeholder:"\u0427\u0435\u043c \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f?",validate:[V.b,ie],onClick:function(){return d(!0)}}),n?Object(x.jsx)(ce,{p:r,picturePreview:n,setPicturePreview:i}):"",l||n?Object(x.jsx)(oe,{p:r,setPicturePreview:i}):null]}):Object(x.jsxs)("div",{className:r.profile__addPostTextarea,ref:c,children:[Object(x.jsx)(z.a,{name:"postInput",component:J.b,type:"text",placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0447\u0442\u043e \u043d\u0438\u0431\u0443\u0434\u044c...",validate:[V.b,ie],onClick:function(){return d(!0)}}),l?Object(x.jsx)("button",{type:"sumbit",disabled:!0,children:"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"}):null]})]})};ne=Object(L.a)({form:"post-form"})(ne);var oe=function(e){var t=e.p,s=e.setPicturePreview;return Object(x.jsxs)("div",{className:t.buttons,children:[Object(x.jsx)(re,{setPicturePreview:s}),Object(x.jsx)("button",{type:"sumbit",children:"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"})]})},ce=function(e){var t=e.p,s=e.picturePreview,a=e.setPicturePreview;return Object(x.jsxs)("div",{className:t.pictureWrap,children:[Object(x.jsx)("img",{src:s,alt:"uploadedPhoto"}),Object(x.jsx)("div",{className:t.picturePreview__close,onClick:function(){a(null)},children:"\u2716"})]})},le=ne,ue=function(e){var t=e.status,s=e.statusEditMode,a=e.toggleEditModeStatus,r=e.newStatusText,i=e.updateStatus,n=e.addPost,o=e.profile,c=e.isOwner,l=e.sendPhoto,u=e.updateProfileData,d=e.setPicturePreview,p=e.picturePreview,j=Object(v.useState)(!1),f=Object(C.a)(j,2),b=f[0],m=f[1],_=function(){var e=Object(F.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t);case 2:m(!1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:B.a.profileInfo,children:[Object(x.jsx)($,{isOwner:c,onGetNewFile:function(e){e.target.files.length&&l(e.target.files[0])},s:B.a,profile:o}),Object(x.jsxs)("div",{className:B.a.profileInner,children:[Object(x.jsxs)("div",{className:B.a.profileHeader,children:[Object(x.jsx)("div",{className:B.a.profileHeader__name,children:o.fullName}),Object(x.jsx)("div",{className:B.a.profileHeader__status,children:Object(x.jsx)(R,{status:t,editMode:s,toggleEditMode:a,newStatusText:r,updateStatus:i,isOwner:c})}),b?Object(x.jsx)(K,{turnOffEditMode:function(){return m(!1)},initialValues:o,s:B.a,onSubmit:_,profile:o,isOwner:c}):Object(x.jsx)(Z,{goToEditMode:function(){return m(!0)},isOwner:c,profile:o,s:B.a})]}),Object(x.jsx)(le,{setPicturePreview:d,picturePreview:p,onSubmit:function(e,t){(e.postInput||p)&&n(e.postInput,t)},avatar:o.photos.small,isOwner:c,p:B.a})]})]})},de=s(130),pe=function(e){Object(m.a)(s,e);var t=Object(_.a)(s);function s(){return Object(f.a)(this,s),t.apply(this,arguments)}return Object(b.a)(s,[{key:"refreshProfile",value:function(){var e=this.props,t=e.setProfile,s=e.setStatus,a=e.match.params.userId;a||(a=e.userId),t(a),s(a)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){var e=this.props,t=e.addPost,s=e.changePostText,a=e.newPostText,i=e.profile,n=e.posts,o=e.match,c=e.sendPhoto,l=e.updateProfileData,u=e.userId,d=e.deletePost,p=e.likePost,j=e.disLikePost,f=e.setPicturePreview,b=e.picturePreview,m=e.status,_=e.editMode,v=e.toggleEditMode,O=e.newStatusText,h=e.updateStatus,g=!o.params.userId;return i?+o.params.userId===u?Object(x.jsx)(r.a,{to:"/profile/"}):Object(x.jsxs)("div",{children:[Object(x.jsx)(ue,{updateProfileData:l,sendPhoto:c,isOwner:g,addPost:t,changePostText:s,newPostText:a,profile:i,status:m,statusEditMode:_,toggleEditModeStatus:v,newStatusText:O,updateStatus:h,setPicturePreview:f,picturePreview:b}),Object(x.jsx)(T,{posts:n,profile:i,deletePost:d,likePost:p,disLikePost:j,isOwner:g})]}):Object(x.jsx)(de.a,{})}}]),s}(v.Component);t.default=Object(i.d)(Object(a.b)((function(e){return{posts:c(e),newPostText:l(e),profile:u(e),status:d(e),picturePreview:e.profileReducer.picturePreview,editMode:p(e),isAuth:Object(o.b)(e),userId:Object(o.e)(e)}}),{addPost:n.b,changePostText:n.c,getProfile:n.f,toggleEditMode:n.n,newStatusText:n.h,setProfile:n.l,setStatus:n.m,updateStatus:n.p,sendPhoto:n.j,updateProfileData:n.o,deletePost:n.d,likePost:n.g,disLikePost:n.e,setPicturePreview:n.k}),r.g,j.a)(pe)}}]);
//# sourceMappingURL=3.87e627ce.chunk.js.map