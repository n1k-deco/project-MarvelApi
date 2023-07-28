"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[728],{532:function(e,n,a){a.r(n),a.d(n,{default:function(){return y}});var r=a(439),s=a(791),c=a(394),t=a(613),i=a(482),l=a.p+"static/media/mjolnir.61f31e1809f12183a524.png",o=a(184),h=function(e){var n=e.char,a=n.name,r=n.description,s=n.thumbnail,c=n.homepage,t=n.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===s&&(i={objectFit:"contain"}),(0,o.jsxs)("div",{className:"randomchar__block",children:[(0,o.jsx)("img",{src:s,alt:"Random character",className:"randomchar__img",style:i}),(0,o.jsxs)("div",{className:"randomchar__info",children:[(0,o.jsx)("p",{className:"randomchar__name",children:a}),(0,o.jsx)("p",{className:"randomchar__descr",children:r}),(0,o.jsxs)("div",{className:"randomchar__btns",children:[(0,o.jsx)("a",{href:c,className:"button button__main",children:(0,o.jsx)("div",{className:"inner",children:"homepage"})}),(0,o.jsx)("a",{href:t,className:"button button__secondary",children:(0,o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},d=function(){var e=(0,s.useState)(null),n=(0,r.Z)(e,2),a=n[0],d=n[1],u=(0,i.Z)(),m=u.loading,_=u.error,j=u.clearError,x=u.getCharacter;(0,s.useEffect)((function(){f();var e=setInterval(f,6e4);return function(){clearInterval(e)}}),[]);var v=function(e){d(e)},f=function(){j();var e=Math.floor(400*Math.random()+1011e3);x(e).then(v)},b=_?(0,o.jsx)(t.Z,{}):null,N=m?(0,o.jsx)(c.Z,{}):null,p=m||_||!a?null:(0,o.jsx)(h,{char:a});return(0,o.jsxs)("div",{className:"randomchar",children:[b,N,p,(0,o.jsxs)("div",{className:"randomchar__static",children:[(0,o.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,o.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,o.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,o.jsx)("button",{onClick:f,className:"button button__main",children:(0,o.jsx)("div",{className:"inner",children:"try it"})}),(0,o.jsx)("img",{src:l,alt:"mjolnir",className:"randomchar__decoration"})]})]})},u=a(433),m=function(e){var n=(0,s.useState)([]),a=(0,r.Z)(n,2),l=a[0],h=a[1],d=(0,s.useState)(!1),m=(0,r.Z)(d,2),_=m[0],j=m[1],x=(0,s.useState)(210),v=(0,r.Z)(x,2),f=v[0],b=v[1],N=(0,s.useState)(!1),p=(0,r.Z)(N,2),g=p[0],k=p[1],Z=(0,i.Z)(),y=Z.loading,C=Z.error,S=Z.getAllCharacters;(0,s.useEffect)((function(){w(f,!0)}),[]);var w=function(e,n){j(!n),S(e).then(F)},F=function(e){var n=!1;e.lenght<9&&(n=!0),h((function(n){return[].concat((0,u.Z)(n),(0,u.Z)(e))})),j((function(e){return!1})),b((function(e){return e+9})),k((function(e){return n}))},E=(0,s.useRef)([]),I=function(e){E.current.forEach((function(e){return e.classList.remove("char__item_selected")})),E.current[e].classList.add("char__item_selected"),E.current[e].focus()};var D=function(n){var a=n.map((function(n,a){var r={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n.thumbnail&&(r={objectFit:"unset"}),(0,o.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return E.current[a]=e},onClick:function(){e.onCharSelected(n.id),I(a)},onKeyDown:function(r){" "!==r.key&&"Enter"!==r.key||(e.onCharSelected(n.id),I(a))},children:[(0,o.jsx)("img",{src:n.thumbnail,alt:n.name,style:r}),(0,o.jsx)("div",{className:"char__name",children:n.name})]},n.id)}));return(0,o.jsx)("ul",{className:"char__grid",children:a})}(l),R=C?(0,o.jsx)(t.Z,{}):null,A=y&&!_?(0,o.jsx)(c.Z,{}):null;return(0,o.jsxs)("div",{className:"char__list",children:[R,A,D,(0,o.jsx)("button",{className:"button button__main button__long",disabled:_,style:{display:g?"none":"block"},onClick:function(){return w(f)},children:(0,o.jsx)("div",{className:"inner",children:"load more"})})]})},_=a(87),j=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,o.jsxs)("div",{className:"skeleton",children:[(0,o.jsxs)("div",{className:"pulse skeleton__header",children:[(0,o.jsx)("div",{className:"pulse skeleton__circle"}),(0,o.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,o.jsx)("div",{className:"pulse skeleton__block"}),(0,o.jsx)("div",{className:"pulse skeleton__block"}),(0,o.jsx)("div",{className:"pulse skeleton__block"})]})]})},x=function(e){var n=e.char,a=n.name,r=n.description,s=n.thumbnail,c=n.homepage,t=n.wiki,i=n.comics,l={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===s&&(l={objectFit:"contain"}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"char__basics",children:[(0,o.jsx)("img",{src:s,alt:a,style:l}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"char__info-name",children:a}),(0,o.jsxs)("div",{className:"char__btns",children:[(0,o.jsx)("a",{href:c,className:"button button__main",children:(0,o.jsx)("div",{className:"inner",children:"homepage"})}),(0,o.jsx)("a",{href:t,className:"button button__secondary",children:(0,o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,o.jsx)("div",{className:"char__descr",children:r}),(0,o.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,o.jsxs)("ul",{className:"char__comics-list",children:[i.lenght>0?null:"There is no comics with this character",i.map((function(e,n){var a=e.resourceURI.replace(/\D/g,"").slice(1);if(!(n>9))return(0,o.jsx)("li",{className:"char__comics-item",children:(0,o.jsx)(_.rU,{to:"/comics/".concat(a),children:e.name})},n)}))]})]})},v=function(e){var n=(0,s.useState)(null),a=(0,r.Z)(n,2),l=a[0],h=a[1],d=(0,i.Z)(),u=d.loading,m=d.error,_=d.clearError,v=d.getCharacter;(0,s.useEffect)((function(){f()}),[e.charId]);var f=function(){var n=e.charId;n&&(_(),v(n).then(b))},b=function(e){h(e)},N=l||u||m?null:(0,o.jsx)(j,{}),p=m?(0,o.jsx)(t.Z,{}):null,g=u?(0,o.jsx)(c.Z,{}):null,k=u||m||!l?null:(0,o.jsx)(x,{char:l});return(0,o.jsxs)("div",{className:"char__info",children:[N,p,g,k]})},f=a(671),b=a(466),N=a(136),p=a(516),g=function(e){(0,N.Z)(a,e);var n=(0,p.Z)(a);function a(){var e;(0,f.Z)(this,a);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=n.call.apply(n,[this].concat(s))).state={error:!1},e}return(0,b.Z)(a,[{key:"componentDidCatch",value:function(e,n){console.log(e,n),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?(0,o.jsx)(t.Z,{}):this.props.children}}]),a}(s.Component),k=g,Z=a.p+"static/media/vision.067d4ae1936d64a577ce.png",y=function(){var e=(0,s.useState)(null),n=(0,r.Z)(e,2),a=n[0],c=n[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(k,{children:(0,o.jsx)(d,{})}),(0,o.jsxs)("div",{className:"char__content",children:[(0,o.jsx)(k,{children:(0,o.jsx)(m,{onCharSelected:function(e){c(e)}})}),(0,o.jsx)(k,{children:(0,o.jsx)(v,{charId:a})})]}),(0,o.jsx)("img",{className:"bg-decoration",src:Z,alt:"vision"})]})}}}]);
//# sourceMappingURL=728.2497c897.chunk.js.map