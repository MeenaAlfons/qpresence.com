import{p as q,a as Je,o,w as rr}from"./chunk-QMGIS6GS-BaxWbgZH.js";import"./link-DHowa0g6.js";var P=function(){return P=Object.assign||function(t){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},P.apply(this,arguments)};function we(e,t,r){if(r||arguments.length===2)for(var n=0,i=t.length,s;n<i;n++)(s||!(n in t))&&(s||(s=Array.prototype.slice.call(t,0,n)),s[n]=t[n]);return e.concat(s||Array.prototype.slice.call(t))}var b="-ms-",ae="-moz-",l="-webkit-",kt="comm",ke="rule",Xe="decl",nr="@import",At="@keyframes",ir="@layer",It=Math.abs,et=String.fromCharCode,Qe=Object.assign;function sr(e,t){return R(e,0)^45?(((t<<2^R(e,0))<<2^R(e,1))<<2^R(e,2))<<2^R(e,3):0}function Rt(e){return e.trim()}function D(e,t){return(e=t.exec(e))?e[0]:e}function d(e,t,r){return e.replace(t,r)}function me(e,t,r){return e.indexOf(t,r)}function R(e,t){return e.charCodeAt(t)|0}function J(e,t,r){return e.slice(t,r)}function O(e){return e.length}function Pt(e){return e.length}function oe(e,t){return t.push(e),e}function or(e,t){return e.map(t).join("")}function ot(e,t){return e.filter(function(r){return!D(r,t)})}var Ae=1,X=1,Et=0,N=0,A=0,re="";function Ie(e,t,r,n,i,s,a,u){return{value:e,root:t,parent:r,type:n,props:i,children:s,line:Ae,column:X,length:a,return:"",siblings:u}}function G(e,t){return Qe(Ie("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function U(e){for(;e.root;)e=G(e.root,{children:[e]});oe(e,e.siblings)}function ar(){return A}function cr(){return A=N>0?R(re,--N):0,X--,A===10&&(X=1,Ae--),A}function T(){return A=N<Et?R(re,N++):0,X++,A===10&&(X=1,Ae++),A}function Y(){return R(re,N)}function ye(){return N}function Re(e,t){return J(re,e,t)}function qe(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ur(e){return Ae=X=1,Et=O(re=e),N=0,[]}function dr(e){return re="",e}function Oe(e){return Rt(Re(N-1,He(e===91?e+2:e===40?e+1:e)))}function pr(e){for(;(A=Y())&&A<33;)T();return qe(e)>2||qe(A)>3?"":" "}function hr(e,t){for(;--t&&T()&&!(A<48||A>102||A>57&&A<65||A>70&&A<97););return Re(e,ye()+(t<6&&Y()==32&&T()==32))}function He(e){for(;T();)switch(A){case e:return N;case 34:case 39:e!==34&&e!==39&&He(A);break;case 40:e===41&&He(e);break;case 92:T();break}return N}function fr(e,t){for(;T()&&e+A!==57;)if(e+A===84&&Y()===47)break;return"/*"+Re(t,N-1)+"*"+et(e===47?e:T())}function lr(e){for(;!qe(Y());)T();return Re(e,N)}function gr(e){return dr(xe("",null,null,null,[""],e=ur(e),0,[0],e))}function xe(e,t,r,n,i,s,a,u,c){for(var m=0,g=0,y=a,x=0,f=0,S=0,C=1,E=1,k=1,$=0,w="",j=i,I=s,v=n,h=w;E;)switch(S=$,$=T()){case 40:if(S!=108&&R(h,y-1)==58){me(h+=d(Oe($),"&","&\f"),"&\f",It(m?u[m-1]:0))!=-1&&(k=-1);break}case 34:case 39:case 91:h+=Oe($);break;case 9:case 10:case 13:case 32:h+=pr(S);break;case 92:h+=hr(ye()-1,7);continue;case 47:switch(Y()){case 42:case 47:oe(mr(fr(T(),ye()),t,r,c),c);break;default:h+="/"}break;case 123*C:u[m++]=O(h)*k;case 125*C:case 59:case 0:switch($){case 0:case 125:E=0;case 59+g:k==-1&&(h=d(h,/\f/g,"")),f>0&&O(h)-y&&oe(f>32?ct(h+";",n,r,y-1,c):ct(d(h," ","")+";",n,r,y-2,c),c);break;case 59:h+=";";default:if(oe(v=at(h,t,r,m,g,i,u,w,j=[],I=[],y,s),s),$===123)if(g===0)xe(h,t,v,v,j,s,y,u,I);else switch(x===99&&R(h,3)===110?100:x){case 100:case 108:case 109:case 115:xe(e,v,v,n&&oe(at(e,v,v,0,0,i,u,w,i,j=[],y,I),I),i,I,y,u,n?j:I);break;default:xe(h,v,v,v,[""],I,0,u,I)}}m=g=f=0,C=k=1,w=h="",y=a;break;case 58:y=1+O(h),f=S;default:if(C<1){if($==123)--C;else if($==125&&C++==0&&cr()==125)continue}switch(h+=et($),$*C){case 38:k=g>0?1:(h+="\f",-1);break;case 44:u[m++]=(O(h)-1)*k,k=1;break;case 64:Y()===45&&(h+=Oe(T())),x=Y(),g=y=O(w=h+=lr(ye())),$++;break;case 45:S===45&&O(h)==2&&(C=0)}}return s}function at(e,t,r,n,i,s,a,u,c,m,g,y){for(var x=i-1,f=i===0?s:[""],S=Pt(f),C=0,E=0,k=0;C<n;++C)for(var $=0,w=J(e,x+1,x=It(E=a[C])),j=e;$<S;++$)(j=Rt(E>0?f[$]+" "+w:d(w,/&\f/g,f[$])))&&(c[k++]=j);return Ie(e,t,r,i===0?ke:u,c,m,g,y)}function mr(e,t,r,n){return Ie(e,t,r,kt,et(ar()),J(e,2,-2),0,n)}function ct(e,t,r,n,i){return Ie(e,t,r,Xe,J(e,0,n),J(e,n+1,-1),n,i)}function _t(e,t,r){switch(sr(e,t)){case 5103:return l+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return l+e+e;case 4789:return ae+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return l+e+ae+e+b+e+e;case 5936:switch(R(e,t+11)){case 114:return l+e+b+d(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return l+e+b+d(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return l+e+b+d(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return l+e+b+e+e;case 6165:return l+e+b+"flex-"+e+e;case 5187:return l+e+d(e,/(\w+).+(:[^]+)/,l+"box-$1$2"+b+"flex-$1$2")+e;case 5443:return l+e+b+"flex-item-"+d(e,/flex-|-self/g,"")+(D(e,/flex-|baseline/)?"":b+"grid-row-"+d(e,/flex-|-self/g,""))+e;case 4675:return l+e+b+"flex-line-pack"+d(e,/align-content|flex-|-self/g,"")+e;case 5548:return l+e+b+d(e,"shrink","negative")+e;case 5292:return l+e+b+d(e,"basis","preferred-size")+e;case 6060:return l+"box-"+d(e,"-grow","")+l+e+b+d(e,"grow","positive")+e;case 4554:return l+d(e,/([^-])(transform)/g,"$1"+l+"$2")+e;case 6187:return d(d(d(e,/(zoom-|grab)/,l+"$1"),/(image-set)/,l+"$1"),e,"")+e;case 5495:case 3959:return d(e,/(image-set\([^]*)/,l+"$1$`$1");case 4968:return d(d(e,/(.+:)(flex-)?(.*)/,l+"box-pack:$3"+b+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+l+e+e;case 4200:if(!D(e,/flex-|baseline/))return b+"grid-column-align"+J(e,t)+e;break;case 2592:case 3360:return b+d(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,i){return t=i,D(n.props,/grid-\w+-end/)})?~me(e+(r=r[t].value),"span",0)?e:b+d(e,"-start","")+e+b+"grid-row-span:"+(~me(r,"span",0)?D(r,/\d+/):+D(r,/\d+/)-+D(e,/\d+/))+";":b+d(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return D(n.props,/grid-\w+-start/)})?e:b+d(d(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return d(e,/(.+)-inline(.+)/,l+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(O(e)-1-t>6)switch(R(e,t+1)){case 109:if(R(e,t+4)!==45)break;case 102:return d(e,/(.+:)(.+)-([^]+)/,"$1"+l+"$2-$3$1"+ae+(R(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~me(e,"stretch",0)?_t(d(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return d(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,i,s,a,u,c,m){return b+i+":"+s+m+(a?b+i+"-span:"+(u?c:+c-+s)+m:"")+e});case 4949:if(R(e,t+6)===121)return d(e,":",":"+l)+e;break;case 6444:switch(R(e,R(e,14)===45?18:11)){case 120:return d(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+l+(R(e,14)===45?"inline-":"")+"box$3$1"+l+"$2$3$1"+b+"$2box$3")+e;case 100:return d(e,":",":"+b)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return d(e,"scroll-","scroll-snap-")+e}return e}function Se(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function yr(e,t,r,n){switch(e.type){case ir:if(e.children.length)break;case nr:case Xe:return e.return=e.return||e.value;case kt:return"";case At:return e.return=e.value+"{"+Se(e.children,n)+"}";case ke:if(!O(e.value=e.props.join(",")))return""}return O(r=Se(e.children,n))?e.return=e.value+"{"+r+"}":""}function xr(e){var t=Pt(e);return function(r,n,i,s){for(var a="",u=0;u<t;u++)a+=e[u](r,n,i,s)||"";return a}}function vr(e){return function(t){t.root||(t=t.return)&&e(t)}}function br(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case Xe:e.return=_t(e.value,e.length,r);return;case At:return Se([G(e,{value:d(e.value,"@","@"+l)})],n);case ke:if(e.length)return or(r=e.props,function(i){switch(D(i,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":U(G(e,{props:[d(i,/:(read-\w+)/,":"+ae+"$1")]})),U(G(e,{props:[i]})),Qe(e,{props:ot(r,n)});break;case"::placeholder":U(G(e,{props:[d(i,/:(plac\w+)/,":"+l+"input-$1")]})),U(G(e,{props:[d(i,/:(plac\w+)/,":"+ae+"$1")]})),U(G(e,{props:[d(i,/:(plac\w+)/,b+"input-$1")]})),U(G(e,{props:[i]})),Qe(e,{props:ot(r,n)});break}return""})}}var wr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_={},ee=typeof process<"u"&&_!==void 0&&(_.REACT_APP_SC_ATTR||_.SC_ATTR)||"data-styled",Nt="active",Tt="data-styled-version",Pe="6.1.19",tt=`/*!sc*/
`,$e=typeof window<"u"&&typeof document<"u",Sr=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&_!==void 0&&_.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&_.REACT_APP_SC_DISABLE_SPEEDY!==""?_.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&_.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&_!==void 0&&_.SC_DISABLE_SPEEDY!==void 0&&_.SC_DISABLE_SPEEDY!==""&&_.SC_DISABLE_SPEEDY!=="false"&&_.SC_DISABLE_SPEEDY),Ee=Object.freeze([]),te=Object.freeze({});function $r(e,t,r){return r===void 0&&(r=te),e.theme!==r.theme&&e.theme||t||r.theme}var Ot=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),jr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Cr=/(^-|-$)/g;function ut(e){return e.replace(jr,"-").replace(Cr,"")}var kr=/(a)(d)/gi,le=52,dt=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ve(e){var t,r="";for(t=Math.abs(e);t>le;t=t/le|0)r=dt(t%le)+r;return(dt(t%le)+r).replace(kr,"$1-$2")}var ze,zt=5381,Z=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Dt=function(e){return Z(zt,e)};function Ar(e){return Ve(Dt(e)>>>0)}function Ir(e){return e.displayName||e.name||"Component"}function De(e){return typeof e=="string"&&!0}var Ft=typeof Symbol=="function"&&Symbol.for,Lt=Ft?Symbol.for("react.memo"):60115,Rr=Ft?Symbol.for("react.forward_ref"):60112,Pr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Er={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Gt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_r=((ze={})[Rr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ze[Lt]=Gt,ze);function pt(e){return("type"in(t=e)&&t.type.$$typeof)===Lt?Gt:"$$typeof"in e?_r[e.$$typeof]:Pr;var t}var Nr=Object.defineProperty,Tr=Object.getOwnPropertyNames,ht=Object.getOwnPropertySymbols,Or=Object.getOwnPropertyDescriptor,zr=Object.getPrototypeOf,ft=Object.prototype;function Bt(e,t,r){if(typeof t!="string"){if(ft){var n=zr(t);n&&n!==ft&&Bt(e,n,r)}var i=Tr(t);ht&&(i=i.concat(ht(t)));for(var s=pt(e),a=pt(t),u=0;u<i.length;++u){var c=i[u];if(!(c in Er||r&&r[c]||a&&c in a||s&&c in s)){var m=Or(t,c);try{Nr(e,c,m)}catch{}}}}return e}function H(e){return typeof e=="function"}function rt(e){return typeof e=="object"&&"styledComponentId"in e}function W(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function lt(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function ce(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ke(e,t,r){if(r===void 0&&(r=!1),!r&&!ce(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Ke(e[n],t[n]);else if(ce(t))for(var n in t)e[n]=Ke(e[n],t[n]);return e}function nt(e,t){Object.defineProperty(e,"toString",{value:t})}function V(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Dr=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,i=n.length,s=i;t>=s;)if((s<<=1)<0)throw V(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(n),this.length=s;for(var a=i;a<s;a++)this.groupSizes[a]=0}for(var u=this.indexOfGroup(t+1),c=(a=0,r.length);a<c;a++)this.tag.insertRule(u,r[a])&&(this.groupSizes[t]++,u++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),i=n+r;this.groupSizes[t]=0;for(var s=n;s<i;s++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],i=this.indexOfGroup(t),s=i+n,a=i;a<s;a++)r+="".concat(this.tag.getRule(a)).concat(tt);return r},e}(),ve=new Map,je=new Map,be=1,ge=function(e){if(ve.has(e))return ve.get(e);for(;je.has(be);)be++;var t=be++;return ve.set(e,t),je.set(t,e),t},Fr=function(e,t){be=t+1,ve.set(e,t),je.set(t,e)},Lr="style[".concat(ee,"][").concat(Tt,'="').concat(Pe,'"]'),Gr=new RegExp("^".concat(ee,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Br=function(e,t,r){for(var n,i=r.split(","),s=0,a=i.length;s<a;s++)(n=i[s])&&e.registerName(t,n)},Mr=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(tt),i=[],s=0,a=n.length;s<a;s++){var u=n[s].trim();if(u){var c=u.match(Gr);if(c){var m=0|parseInt(c[1],10),g=c[2];m!==0&&(Fr(g,m),Br(e,g,c[3]),e.getTag().insertRules(m,i)),i.length=0}else i.push(u)}}},gt=function(e){for(var t=document.querySelectorAll(Lr),r=0,n=t.length;r<n;r++){var i=t[r];i&&i.getAttribute(ee)!==Nt&&(Mr(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Wr(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Mt=function(e){var t=document.head,r=e||t,n=document.createElement("style"),i=function(u){var c=Array.from(u.querySelectorAll("style[".concat(ee,"]")));return c[c.length-1]}(r),s=i!==void 0?i.nextSibling:null;n.setAttribute(ee,Nt),n.setAttribute(Tt,Pe);var a=Wr();return a&&n.setAttribute("nonce",a),r.insertBefore(n,s),n},Yr=function(){function e(t){this.element=Mt(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,i=0,s=n.length;i<s;i++){var a=n[i];if(a.ownerNode===r)return a}throw V(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),Qr=function(){function e(t){this.element=Mt(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),qr=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),mt=$e,Hr={isServer:!$e,useCSSOMInjection:!Sr},Wt=function(){function e(t,r,n){t===void 0&&(t=te),r===void 0&&(r={});var i=this;this.options=P(P({},Hr),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&$e&&mt&&(mt=!1,gt(this)),nt(this,function(){return function(s){for(var a=s.getTag(),u=a.length,c="",m=function(y){var x=function(k){return je.get(k)}(y);if(x===void 0)return"continue";var f=s.names.get(x),S=a.getGroup(y);if(f===void 0||!f.size||S.length===0)return"continue";var C="".concat(ee,".g").concat(y,'[id="').concat(x,'"]'),E="";f!==void 0&&f.forEach(function(k){k.length>0&&(E+="".concat(k,","))}),c+="".concat(S).concat(C,'{content:"').concat(E,'"}').concat(tt)},g=0;g<u;g++)m(g);return c}(i)})}return e.registerId=function(t){return ge(t)},e.prototype.rehydrate=function(){!this.server&&$e&&gt(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(P(P({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,i=r.target;return r.isServer?new qr(i):n?new Yr(i):new Qr(i)}(this.options),new Dr(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(ge(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(ge(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ge(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Vr=/&/g,Kr=/^\s*\/\/.*$/gm;function Yt(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Yt(r.children,t)),r})}function Ur(e){var t,r,n,i=te,s=i.options,a=s===void 0?te:s,u=i.plugins,c=u===void 0?Ee:u,m=function(x,f,S){return S.startsWith(r)&&S.endsWith(r)&&S.replaceAll(r,"").length>0?".".concat(t):x},g=c.slice();g.push(function(x){x.type===ke&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(Vr,r).replace(n,m))}),a.prefix&&g.push(br),g.push(yr);var y=function(x,f,S,C){f===void 0&&(f=""),S===void 0&&(S=""),C===void 0&&(C="&"),t=C,r=f,n=new RegExp("\\".concat(r,"\\b"),"g");var E=x.replace(Kr,""),k=gr(S||f?"".concat(S," ").concat(f," { ").concat(E," }"):E);a.namespace&&(k=Yt(k,a.namespace));var $=[];return Se(k,xr(g.concat(vr(function(w){return $.push(w)})))),$};return y.hash=c.length?c.reduce(function(x,f){return f.name||V(15),Z(x,f.name)},zt).toString():"",y}var Zr=new Wt,Ue=Ur(),Qt=q.createContext({shouldForwardProp:void 0,styleSheet:Zr,stylis:Ue});Qt.Consumer;q.createContext(void 0);function yt(){return Je.useContext(Qt)}var Jr=function(){function e(t,r){var n=this;this.inject=function(i,s){s===void 0&&(s=Ue);var a=n.name+s.hash;i.hasNameForId(n.id,a)||i.insertRules(n.id,a,s(n.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,nt(this,function(){throw V(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ue),this.name+t.hash},e}(),Xr=function(e){return e>="A"&&e<="Z"};function xt(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;Xr(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var qt=function(e){return e==null||e===!1||e===""},Ht=function(e){var t,r,n=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!qt(s)&&(Array.isArray(s)&&s.isCss||H(s)?n.push("".concat(xt(i),":"),s,";"):ce(s)?n.push.apply(n,we(we(["".concat(i," {")],Ht(s),!1),["}"],!1)):n.push("".concat(xt(i),": ").concat((t=i,(r=s)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in wr||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Q(e,t,r,n){if(qt(e))return[];if(rt(e))return[".".concat(e.styledComponentId)];if(H(e)){if(!H(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return Q(i,t,r,n)}var s;return e instanceof Jr?r?(e.inject(r,n),[e.getName(n)]):[e]:ce(e)?Ht(e):Array.isArray(e)?Array.prototype.concat.apply(Ee,e.map(function(a){return Q(a,t,r,n)})):[e.toString()]}function en(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(H(r)&&!rt(r))return!1}return!0}var tn=Dt(Pe),rn=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&en(t),this.componentId=r,this.baseHash=Z(tn,r),this.baseStyle=n,Wt.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))i=W(i,this.staticRulesId);else{var s=lt(Q(this.rules,t,r,n)),a=Ve(Z(this.baseHash,s)>>>0);if(!r.hasNameForId(this.componentId,a)){var u=n(s,".".concat(a),void 0,this.componentId);r.insertRules(this.componentId,a,u)}i=W(i,a),this.staticRulesId=a}else{for(var c=Z(this.baseHash,n.hash),m="",g=0;g<this.rules.length;g++){var y=this.rules[g];if(typeof y=="string")m+=y;else if(y){var x=lt(Q(y,t,r,n));c=Z(c,x+g),m+=x}}if(m){var f=Ve(c>>>0);r.hasNameForId(this.componentId,f)||r.insertRules(this.componentId,f,n(m,".".concat(f),void 0,this.componentId)),i=W(i,f)}}return i},e}(),Ce=q.createContext(void 0);Ce.Consumer;function nn(e){var t=q.useContext(Ce),r=Je.useMemo(function(){return function(n,i){if(!n)throw V(14);if(H(n)){var s=n(i);return s}if(Array.isArray(n)||typeof n!="object")throw V(8);return i?P(P({},i),n):n}(e.theme,t)},[e.theme,t]);return e.children?q.createElement(Ce.Provider,{value:r},e.children):null}var Fe={};function sn(e,t,r){var n=rt(e),i=e,s=!De(e),a=t.attrs,u=a===void 0?Ee:a,c=t.componentId,m=c===void 0?function(j,I){var v=typeof j!="string"?"sc":ut(j);Fe[v]=(Fe[v]||0)+1;var h="".concat(v,"-").concat(Ar(Pe+v+Fe[v]));return I?"".concat(I,"-").concat(h):h}(t.displayName,t.parentComponentId):c,g=t.displayName,y=g===void 0?function(j){return De(j)?"styled.".concat(j):"Styled(".concat(Ir(j),")")}(e):g,x=t.displayName&&t.componentId?"".concat(ut(t.displayName),"-").concat(t.componentId):t.componentId||m,f=n&&i.attrs?i.attrs.concat(u).filter(Boolean):u,S=t.shouldForwardProp;if(n&&i.shouldForwardProp){var C=i.shouldForwardProp;if(t.shouldForwardProp){var E=t.shouldForwardProp;S=function(j,I){return C(j,I)&&E(j,I)}}else S=C}var k=new rn(r,x,n?i.componentStyle:void 0);function $(j,I){return function(v,h,K){var ue=v.attrs,Kt=v.componentStyle,Ut=v.defaultProps,Zt=v.foldedComponentIds,Jt=v.styledComponentId,Xt=v.target,er=q.useContext(Ce),tr=yt(),_e=v.shouldForwardProp||tr.shouldForwardProp,it=$r(h,er,Ut)||te,z=function(pe,ie,he){for(var se,B=P(P({},ie),{className:void 0,theme:he}),Te=0;Te<pe.length;Te+=1){var fe=H(se=pe[Te])?se(B):se;for(var L in fe)B[L]=L==="className"?W(B[L],fe[L]):L==="style"?P(P({},B[L]),fe[L]):fe[L]}return ie.className&&(B.className=W(B.className,ie.className)),B}(ue,h,it),de=z.as||Xt,ne={};for(var F in z)z[F]===void 0||F[0]==="$"||F==="as"||F==="theme"&&z.theme===it||(F==="forwardedAs"?ne.as=z.forwardedAs:_e&&!_e(F,de)||(ne[F]=z[F]));var st=function(pe,ie){var he=yt(),se=pe.generateAndInjectStyles(ie,he.styleSheet,he.stylis);return se}(Kt,z),Ne=W(Zt,Jt);return st&&(Ne+=" "+st),z.className&&(Ne+=" "+z.className),ne[De(de)&&!Ot.has(de)?"class":"className"]=Ne,K&&(ne.ref=K),Je.createElement(de,ne)}(w,j,I)}$.displayName=y;var w=q.forwardRef($);return w.attrs=f,w.componentStyle=k,w.displayName=y,w.shouldForwardProp=S,w.foldedComponentIds=n?W(i.foldedComponentIds,i.styledComponentId):"",w.styledComponentId=x,w.target=n?i.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(j){this._foldedDefaultProps=n?function(I){for(var v=[],h=1;h<arguments.length;h++)v[h-1]=arguments[h];for(var K=0,ue=v;K<ue.length;K++)Ke(I,ue[K],!0);return I}({},i.defaultProps,j):j}}),nt(w,function(){return".".concat(w.styledComponentId)}),s&&Bt(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function vt(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r}var bt=function(e){return Object.assign(e,{isCss:!0})};function on(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(H(e)||ce(e))return bt(Q(vt(Ee,we([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?Q(n):bt(Q(vt(n,t)))}function Ze(e,t,r){if(r===void 0&&(r=te),!t)throw V(1,t);var n=function(i){for(var s=[],a=1;a<arguments.length;a++)s[a-1]=arguments[a];return e(t,r,on.apply(void 0,we([i],s,!1)))};return n.attrs=function(i){return Ze(e,t,P(P({},r),{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},n.withConfig=function(i){return Ze(e,t,P(P({},r),i))},n}var Vt=function(e){return Ze(sn,e)},p=Vt;Ot.forEach(function(e){p[e]=Vt(e)});const Le="QPresence",an={colors:{primary:"#2563eb",primaryLight:"#3b82f6",text:"#1f2937",textLight:"#6b7280",border:"#e5e7eb",background:"#ffffff",backgroundAlt:"#f9fafb",card:"#ffffff",cardAlt:"#f3f4f6"},fonts:{main:"Inter, sans-serif",heading:"Inter, sans-serif"},radius:{sm:"8px",md:"12px",lg:"18px",xl:"24px"},shadow:"0 4px 12px rgba(0,0,0,0.1)",spacing:e=>`${e*8}px`},cn=p.div`
  font-family: ${e=>e.theme.fonts.main};
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};
  -webkit-font-smoothing: antialiased;
`,M=p.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`,un=p.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${e=>e.theme.spacing(3)} 0;
`,dn=p.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing(1.5)};
`,pn=p.div`
  width: 40px;
  height: 40px;
  border-radius: ${e=>e.theme.radius.md};
  background: linear-gradient(
    135deg,
    ${e=>e.theme.colors.primary},
    ${e=>e.theme.colors.primaryLight}
  );
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
`,hn=p.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: ${e=>e.theme.spacing(2)};
  }
`,fn=p.a`
  background: ${e=>e.theme.colors.primary};
  color: white;
  padding: 10px 18px;
  border-radius: ${e=>e.theme.radius.md};
  border: none;
  font-size: 14px;
  cursor: pointer;
`,ln=p.header`
  padding: ${e=>e.theme.spacing(10)} 0;
`,gn=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${e=>e.theme.spacing(6)};

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,mn=p.h1`
  font-family: ${e=>e.theme.fonts.heading};
  font-size: 56px;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: ${e=>e.theme.spacing(2.5)};
`,yn=p.p`
  font-size: 18px;
  color: ${e=>e.theme.colors.textLight};
  max-width: 500px;
  margin-bottom: ${e=>e.theme.spacing(4)};
`,wt=p.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing(2)};
  flex-wrap: wrap;
`,St=p.a`
  padding: 14px 28px;
  border-radius: ${e=>e.theme.radius.xl};
  background: ${e=>e.theme.colors.primary};
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  box-shadow: ${e=>e.theme.shadow};
`;p.a`
  padding: 14px 28px;
  border-radius: ${e=>e.theme.radius.xl};
  border: 1px solid ${e=>e.theme.colors.border};
  color: ${e=>e.theme.colors.text};
  cursor: pointer;
`;const xn=p.section`
  background: ${e=>e.theme.colors.backgroundAlt};
  padding: ${e=>e.theme.spacing(10)} 0;
`,vn=p.div`
  display: grid;
  gap: ${e=>e.theme.spacing(4)};

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Ge=p.div`
  background: ${e=>e.theme.colors.card};
  border: 1px solid ${e=>e.theme.colors.border};
  padding: ${e=>e.theme.spacing(4)};
  border-radius: ${e=>e.theme.radius.xl};
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing(2)};
`,Be=p.div`
  width: 56px;
  height: 56px;
  border-radius: ${e=>e.theme.radius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.theme.colors.cardAlt};
  font-size: 24px;
`,bn=p.section`
  padding: ${e=>e.theme.spacing(10)} 0;
  background: ${e=>e.theme.colors.background};
`,wn=p.div`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
`,Sn=p.h2`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: ${e=>e.theme.spacing(2)};
`,$n=p.p`
  font-size: 18px;
  color: ${e=>e.theme.colors.textLight};
  margin-bottom: ${e=>e.theme.spacing(4)};
`,jn=p.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  border-radius: ${e=>e.theme.radius.xl};
  overflow: hidden;
  box-shadow: ${e=>e.theme.shadow};
  background: ${e=>e.theme.colors.cardAlt};

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Me=p.h3`
  font-size: 20px;
  font-weight: 600;
`,We=p.p`
  color: ${e=>e.theme.colors.textLight};
  line-height: 1.5;
`,Cn=p.section`
  padding: ${e=>e.theme.spacing(10)} 0;
`,kn=p.div`
  display: grid;
  gap: ${e=>e.theme.spacing(8)};
`,$t=p.div`
  display: grid;
  gap: ${e=>e.theme.spacing(6)};
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,jt=p.h3`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: ${e=>e.theme.spacing(2)};
`,Ct=p.p`
  color: ${e=>e.theme.colors.textLight};
  max-width: 480px;
  margin-bottom: ${e=>e.theme.spacing(3)};
`,An=p.ul`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing(1.5)};
`,Ye=p.li`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${e=>e.theme.colors.text};
`,In=p.section`
  padding: ${e=>e.theme.spacing(10)} 0;
  text-align: center;
  border-top: 1px solid ${e=>e.theme.colors.border};
`,Rn=p.h2`
  font-size: 40px;
  font-weight: 800;
  margin-bottom: ${e=>e.theme.spacing(2)};
`,Pn=p.p`
  max-width: 600px;
  margin: 0 auto ${e=>e.theme.spacing(4)};
  color: ${e=>e.theme.colors.textLight};
`,En=p.footer`
  padding: ${e=>e.theme.spacing(6)} 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.textLight};
`,_n=p.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing(2)};

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`,Nn=p.div`
  display: flex;
  gap: ${e=>e.theme.spacing(2.5)};
`,Tn=({theme:e,qrGirlSrc:t="/images/illustration-1.png",laptopGirlSrc:r="/images/illustration-2.png",ideaGirlSrc:n="/images/illustration-3.png",videoSrc:i="/videos/demo.mp4",videoPoster:s})=>o.jsx(nn,{theme:e??an,children:o.jsxs(cn,{children:[o.jsx(M,{children:o.jsxs(un,{children:[o.jsxs(dn,{children:[o.jsx(pn,{children:"Q"}),o.jsx("div",{style:{fontWeight:600},children:Le})]}),o.jsx(hn,{children:o.jsx(fn,{href:"https://app.qpresence.com",children:"Sign in"})})]})}),o.jsx(ln,{children:o.jsx(M,{children:o.jsxs(gn,{children:[o.jsxs("div",{children:[o.jsx(mn,{children:"More attendees, less admin."}),o.jsx(yn,{children:"Collect attendance in seconds with smart QR check-ins — fast sign-ins, clean reports, and zero hassle."}),o.jsx(wt,{children:o.jsx(St,{href:"https://app.qpresence.com",children:"Get Started"})})]}),o.jsx("div",{children:o.jsx("img",{src:t,alt:"QR code check-in illustration",style:{width:"100%",maxWidth:420}})})]})})}),o.jsx(bn,{children:o.jsx(M,{children:o.jsxs(wn,{children:[o.jsx(Sn,{children:"See it in action"}),o.jsxs($n,{children:["Watch how ",Le," makes attendance tracking effortless"]}),o.jsx(jn,{children:o.jsxs("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,poster:s,preload:"metadata",children:[o.jsx("source",{src:i,type:"video/mp4"}),"Your browser does not support the video tag."]})})]})})}),o.jsx(xn,{children:o.jsx(M,{children:o.jsxs(vn,{children:[o.jsxs(Ge,{children:[o.jsx(Be,{children:"📱"}),o.jsx(Me,{children:"Instant QR Check-ins"}),o.jsx(We,{children:"Participants scan a QR code and are marked present instantly."})]}),o.jsxs(Ge,{children:[o.jsx(Be,{children:"⏱️"}),o.jsx(Me,{children:"Punctuality Insights"}),o.jsx(We,{children:"Analyze arrival patterns and encourage on-time attendance."})]}),o.jsxs(Ge,{children:[o.jsx(Be,{children:"📊"}),o.jsx(Me,{children:"Smart Reports"}),o.jsx(We,{children:"Download clean attendance records with visual insights."})]})]})})}),o.jsx(Cn,{children:o.jsx(M,{children:o.jsxs(kn,{children:[o.jsxs($t,{children:[o.jsxs("div",{children:[o.jsx(jt,{children:"Add a professional touch to your training"}),o.jsx(Ct,{children:"Smooth check-ins, serious engagement, and real insights — make attendance feel official."}),o.jsxs(An,{children:[o.jsx(Ye,{children:"✔ Smooth check-ins"}),o.jsx(Ye,{children:"✔ Serious engagement"}),o.jsx(Ye,{children:"✔ Real insights"})]})]}),o.jsx("div",{children:o.jsx("img",{src:r,alt:"Trainer with laptop illustration",width:300})})]}),o.jsxs($t,{children:[o.jsx("div",{children:o.jsx("img",{src:n,alt:"Idea and creativity illustration",width:300})}),o.jsxs("div",{children:[o.jsx(jt,{children:"Tomorrow's ticket to every event"}),o.jsx(Ct,{children:"Fast sign-ins, clean reports, zero hassle — make check-in the easiest part of your event."})]})]})]})})}),o.jsx(In,{children:o.jsxs(M,{children:[o.jsx(Rn,{children:"Ready to simplify your attendance?"}),o.jsx(Pn,{children:"Start using smart QR-powered attendance today — effortless, fast, and beautifully simple."}),o.jsx(wt,{style:{justifyContent:"center"},children:o.jsx(St,{href:"https://app.qpresence.com",children:"Create your first event"})})]})}),o.jsx(En,{children:o.jsx(M,{children:o.jsxs(_n,{children:[o.jsxs("div",{children:["© ",new Date().getFullYear()," ",Le," — All rights reserved."]}),o.jsx(Nn,{})]})})})]})});function Dn({}){return[{title:"QPresence"},{name:"description",content:"Effortless Attendance Tracking using QR Codes"}]}const Fn=rr(function(){return o.jsx(Tn,{})});export{Fn as default,Dn as meta};
