(()=>{var Vh=0,bc=1,Wh=2;var sh=1,Xh=2,kn=3,Tn=0,kt=1,Zt=2;var Zn=0,$i=1,_c=2,xc=3,vc=4,qh=5,vi=100,jh=101,Yh=102,yc=103,Mc=104,Kh=200,Jh=201,$h=202,Zh=203,Ya=204,Ka=205,Qh=206,eu=207,tu=208,nu=209,iu=210,su=211,ru=212,au=213,ou=214,cu=0,lu=1,hu=2,wr=3,uu=4,du=5,fu=6,pu=7,rh=0,mu=1,gu=2,Qn=0,bu=1,_u=2,xu=3,Co=4,vu=5,yu=6,Sc="attached",Mu="detached",ah=300,es=301,ts=302,Ja=303,$a=304,ia=306,Ei=1e3,an=1001,Is=1002,Lt=1003,Tr=1004;var Ts=1005;var Kt=1006,Po=1007;var ti=1008;var ei=1009,Su=1010,Au=1011,Lo=1012,oh=1013,Jn=1014,Bn=1015,wi=1016,ch=1017,lh=1018,Mi=1020,Eu=1021,dn=1023,wu=1024,Tu=1025,Si=1026,ns=1027,Ru=1028,hh=1029,Cu=1030,uh=1031,dh=1033,ma=33776,ga=33777,ba=33778,_a=33779,Ac=35840,Ec=35841,wc=35842,Tc=35843,fh=36196,Rc=37492,Cc=37496,Pc=37808,Lc=37809,Ic=37810,Dc=37811,Nc=37812,Uc=37813,Oc=37814,Fc=37815,kc=37816,Bc=37817,zc=37818,Hc=37819,Gc=37820,Vc=37821,xa=36492,Wc=36494,Xc=36495,Pu=36283,qc=36284,jc=36285,Yc=36286;var is=2300,Ti=2301,va=2302,Kc=2400,Jc=2401,$c=2402,Lu=2500;var ph=0,sa=1,qs=2,mh=3e3,Ai=3001,Iu=3200,Du=3201,gh=0,Nu=1,fn="",vt="srgb",Dt="srgb-linear",Io="display-p3",ra="display-p3-linear",Rr="linear",Mt="srgb",Cr="rec709",Pr="p3";var Li=7680;var Zc=519,Uu=512,Ou=513,Fu=514,bh=515,ku=516,Bu=517,zu=518,Hu=519,Za=35044;var Qc="300 es",Qa=1035,zn=2e3,Lr=2001,ni=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],el=1234567,Rs=Math.PI/180,ss=180/Math.PI;function yn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[s&255]+Vt[s>>8&255]+Vt[s>>16&255]+Vt[s>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function Xt(s,e,t){return Math.max(e,Math.min(t,s))}function Do(s,e){return(s%e+e)%e}function Gu(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Vu(s,e,t){return s!==e?(t-s)/(e-s):0}function Cs(s,e,t){return(1-t)*s+t*e}function Wu(s,e,t,n){return Cs(s,e,1-Math.exp(-t*n))}function Xu(s,e=1){return e-Math.abs(Do(s,e*2)-e)}function qu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function ju(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Yu(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Ku(s,e){return s+Math.random()*(e-s)}function Ju(s){return s*(.5-Math.random())}function $u(s){s!==void 0&&(el=s);let e=el+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zu(s){return s*Rs}function Qu(s){return s*ss}function eo(s){return(s&s-1)===0&&s!==0}function ed(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ir(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function td(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),m=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*u,c*f,o*l);break;case"YZY":s.set(c*f,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*f,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*m,o*l);break;case"YXY":s.set(c*m,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*m,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function wn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function mt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var js={DEG2RAD:Rs,RAD2DEG:ss,generateUUID:yn,clamp:Xt,euclideanModulo:Do,mapLinear:Gu,inverseLerp:Vu,lerp:Cs,damp:Wu,pingpong:Xu,smoothstep:qu,smootherstep:ju,randInt:Yu,randFloat:Ku,randFloatSpread:Ju,seededRandom:$u,degToRad:Zu,radToDeg:Qu,isPowerOfTwo:eo,ceilPowerOfTwo:ed,floorPowerOfTwo:Ir,setQuaternionFromProperEuler:td,normalize:mt,denormalize:wn},Je=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ze=class s{constructor(e,t,n,i,r,a,o,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],m=n[5],g=n[8],b=i[0],p=i[3],d=i[6],M=i[1],_=i[4],A=i[7],P=i[2],T=i[5],R=i[8];return r[0]=a*b+o*M+c*P,r[3]=a*p+o*_+c*T,r[6]=a*d+o*A+c*R,r[1]=l*b+h*M+u*P,r[4]=l*p+h*_+u*T,r[7]=l*d+h*A+u*R,r[2]=f*b+m*M+g*P,r[5]=f*p+m*_+g*T,r[8]=f*d+m*A+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,f=o*c-h*r,m=l*r-a*c,g=t*u+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return e[0]=u*b,e[1]=(i*l-h*n)*b,e[2]=(o*n-i*a)*b,e[3]=f*b,e[4]=(h*t-i*c)*b,e[5]=(i*r-o*t)*b,e[6]=m*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ya.makeScale(e,t)),this}rotate(e){return this.premultiply(ya.makeRotation(-e)),this}translate(e,t){return this.premultiply(ya.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ya=new Ze;function _h(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ds(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function nd(){let s=Ds("canvas");return s.style.display="block",s}var tl={};function Ps(s){s in tl||(tl[s]=!0,console.warn(s))}var nl=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),il=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zs={[Dt]:{transfer:Rr,primaries:Cr,toReference:s=>s,fromReference:s=>s},[vt]:{transfer:Mt,primaries:Cr,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ra]:{transfer:Rr,primaries:Pr,toReference:s=>s.applyMatrix3(il),fromReference:s=>s.applyMatrix3(nl)},[Io]:{transfer:Mt,primaries:Pr,toReference:s=>s.convertSRGBToLinear().applyMatrix3(il),fromReference:s=>s.applyMatrix3(nl).convertLinearToSRGB()}},id=new Set([Dt,ra]),lt={enabled:!0,_workingColorSpace:Dt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!id.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=Zs[e].toReference,i=Zs[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Zs[s].primaries},getTransfer:function(s){return s===fn?Rr:Zs[s].transfer}};function Zi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ma(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ii,Dr=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ii===void 0&&(Ii=Ds("canvas")),Ii.width=e.width,Ii.height=e.height;let n=Ii.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Ds("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Zi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zi(t[n]/255)*255):t[n]=Zi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},sd=0,Nr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=yn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Sa(i[a].image)):r.push(Sa(i[a]))}else r=Sa(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Sa(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Dr.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var rd=0,Ht=class s extends ni{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=an,i=an,r=Kt,a=ti,o=dn,c=ei,l=s.DEFAULT_ANISOTROPY,h=fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=yn(),this.name="",this.source=new Nr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ps("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ai?vt:fn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ah)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ei:e.x=e.x-Math.floor(e.x);break;case an:e.x=e.x<0?0:1;break;case Is:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ei:e.y=e.y-Math.floor(e.y);break;case an:e.y=e.y<0?0:1;break;case Is:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ps("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===vt?Ai:mh}set encoding(e){Ps("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ai?vt:fn}};Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=ah;Ht.DEFAULT_ANISOTROPY=1;var ot=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],m=c[5],g=c[9],b=c[2],p=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-b)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+b)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,A=(m+1)/2,P=(d+1)/2,T=(h+f)/4,R=(u+b)/4,G=(g+p)/4;return _>A&&_>P?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=T/n,r=R/n):A>P?A<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(A),n=T/i,r=G/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=R/r,i=G/r),this.set(n,i,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(u-b)*(u-b)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-b)/M,this.z=(f-h)/M,this.w=Math.acos((l+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},to=class extends ni{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(Ps("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ai?vt:fn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ht(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Nr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qt=class extends to{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ur=class extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var no=class extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var en=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=r[a+0],m=r[a+1],g=r[a+2],b=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=b;return}if(u!==b||c!==f||l!==m||h!==g){let p=1-o,d=c*f+l*m+h*g+u*b,M=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){let P=Math.sqrt(_),T=Math.atan2(P,d*M);p=Math.sin(p*T)/P,o=Math.sin(o*T)/P}let A=o*M;if(c=c*p+f*A,l=l*p+m*A,h=h*p+g*A,u=u*p+b*A,p===1-o){let P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*m-l*f,e[t+1]=c*g+h*f+l*u-o*m,e[t+2]=l*g+h*m+o*f-c*u,e[t+3]=h*g-o*u-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),f=c(n/2),m=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*m*g,this._y=l*m*u-f*h*g,this._z=l*h*g+f*m*u,this._w=l*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+l*m*g,this._y=l*m*u-f*h*g,this._z=l*h*g-f*m*u,this._w=l*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-l*m*g,this._y=l*m*u+f*h*g,this._z=l*h*g+f*m*u,this._w=l*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-l*m*g,this._y=l*m*u+f*h*g,this._z=l*h*g-f*m*u,this._w=l*h*u+f*m*g;break;case"YZX":this._x=f*h*u+l*m*g,this._y=l*m*u+f*h*g,this._z=l*h*g-f*m*u,this._w=l*h*u-f*m*g;break;case"XZY":this._x=f*h*u-l*m*g,this._y=l*m*u-f*h*g,this._z=l*h*g+f*m*u,this._w=l*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-i)*m}else if(n>o&&n>u){let m=2*Math.sqrt(1+n-o-u);this._w=(h-c)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+l)/m}else if(o>u){let m=2*Math.sqrt(1+o-n-u);this._w=(r-l)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-n-o);this._w=(a-i)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Aa.copy(this).projectOnVector(e),this.sub(Aa)}reflect(e){return this.sub(Aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Aa=new U,sl=new en,tn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,bn):bn.fromBufferAttribute(r,a),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qs.copy(n.boundingBox)),Qs.applyMatrix4(e.matrixWorld),this.union(Qs)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vs),er.subVectors(this.max,vs),Di.subVectors(e.a,vs),Ni.subVectors(e.b,vs),Ui.subVectors(e.c,vs),Xn.subVectors(Ni,Di),qn.subVectors(Ui,Ni),mi.subVectors(Di,Ui);let t=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-mi.z,mi.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,mi.z,0,-mi.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-mi.y,mi.x,0];return!Ea(t,Di,Ni,Ui,er)||(t=[1,0,0,0,1,0,0,0,1],!Ea(t,Di,Ni,Ui,er))?!1:(tr.crossVectors(Xn,qn),t=[tr.x,tr.y,tr.z],Ea(t,Di,Ni,Ui,er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},In=[new U,new U,new U,new U,new U,new U,new U,new U],bn=new U,Qs=new tn,Di=new U,Ni=new U,Ui=new U,Xn=new U,qn=new U,mi=new U,vs=new U,er=new U,tr=new U,gi=new U;function Ea(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){gi.fromArray(s,r);let o=i.x*Math.abs(gi.x)+i.y*Math.abs(gi.y)+i.z*Math.abs(gi.z),c=e.dot(gi),l=t.dot(gi),h=n.dot(gi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var ad=new tn,ys=new U,wa=new U,on=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ad.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ys.subVectors(e,this.center);let t=ys.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ys,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ys.copy(e.center).add(wa)),this.expandByPoint(ys.copy(e.center).sub(wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Dn=new U,Ta=new U,nr=new U,jn=new U,Ra=new U,ir=new U,Ca=new U,rs=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.origin).addScaledVector(this.direction,t),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ta.copy(e).add(t).multiplyScalar(.5),nr.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(Ta);let r=e.distanceTo(t)*.5,a=-this.direction.dot(nr),o=jn.dot(this.direction),c=-jn.dot(nr),l=jn.lengthSq(),h=Math.abs(1-a*a),u,f,m,g;if(h>0)if(u=a*c-o,f=a*o-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let b=1/h;u*=b,f*=b,m=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ta).addScaledVector(nr,f),m}intersectSphere(e,t){Dn.subVectors(e.center,this.origin);let n=Dn.dot(this.direction),i=Dn.dot(Dn)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,n,i,r){Ra.subVectors(t,e),ir.subVectors(n,e),Ca.crossVectors(Ra,ir);let a=this.direction.dot(Ca),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;jn.subVectors(this.origin,e);let c=o*this.direction.dot(ir.crossVectors(jn,ir));if(c<0)return null;let l=o*this.direction.dot(Ra.cross(jn));if(l<0||c+l>a)return null;let h=-o*jn.dot(Ca);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ve=class s{constructor(e,t,n,i,r,a,o,c,l,h,u,f,m,g,b,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,u,f,m,g,b,p)}set(e,t,n,i,r,a,o,c,l,h,u,f,m,g,b,p){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=b,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Oi.setFromMatrixColumn(e,0).length(),r=1/Oi.setFromMatrixColumn(e,1).length(),a=1/Oi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,m=a*u,g=o*h,b=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+g*l,t[5]=f-b*l,t[9]=-o*c,t[2]=b-f*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*h,m=c*u,g=l*h,b=l*u;t[0]=f+b*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=b+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*h,m=c*u,g=l*h,b=l*u;t[0]=f-b*o,t[4]=-a*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=b-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*h,m=a*u,g=o*h,b=o*u;t[0]=c*h,t[4]=g*l-m,t[8]=f*l+b,t[1]=c*u,t[5]=b*l+f,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,m=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=b-f*u,t[8]=g*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*u+g,t[10]=f-b*u}else if(e.order==="XZY"){let f=a*c,m=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+b,t[5]=a*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*h,t[10]=b*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(od,e,cd)}lookAt(e,t,n){let i=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),Yn.crossVectors(n,sn),Yn.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),Yn.crossVectors(n,sn)),Yn.normalize(),sr.crossVectors(sn,Yn),i[0]=Yn.x,i[4]=sr.x,i[8]=sn.x,i[1]=Yn.y,i[5]=sr.y,i[9]=sn.y,i[2]=Yn.z,i[6]=sr.z,i[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],m=n[13],g=n[2],b=n[6],p=n[10],d=n[14],M=n[3],_=n[7],A=n[11],P=n[15],T=i[0],R=i[4],G=i[8],S=i[12],w=i[1],O=i[5],q=i[9],Q=i[13],I=i[2],W=i[6],$=i[10],ee=i[14],J=i[3],Z=i[7],x=i[11],C=i[15];return r[0]=a*T+o*w+c*I+l*J,r[4]=a*R+o*O+c*W+l*Z,r[8]=a*G+o*q+c*$+l*x,r[12]=a*S+o*Q+c*ee+l*C,r[1]=h*T+u*w+f*I+m*J,r[5]=h*R+u*O+f*W+m*Z,r[9]=h*G+u*q+f*$+m*x,r[13]=h*S+u*Q+f*ee+m*C,r[2]=g*T+b*w+p*I+d*J,r[6]=g*R+b*O+p*W+d*Z,r[10]=g*G+b*q+p*$+d*x,r[14]=g*S+b*Q+p*ee+d*C,r[3]=M*T+_*w+A*I+P*J,r[7]=M*R+_*O+A*W+P*Z,r[11]=M*G+_*q+A*$+P*x,r[15]=M*S+_*Q+A*ee+P*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],m=e[14],g=e[3],b=e[7],p=e[11],d=e[15];return g*(+r*c*u-i*l*u-r*o*f+n*l*f+i*o*m-n*c*m)+b*(+t*c*m-t*l*f+r*a*f-i*a*m+i*l*h-r*c*h)+p*(+t*l*u-t*o*m-r*a*u+n*a*m+r*o*h-n*l*h)+d*(-i*o*h-t*c*u+t*o*f+i*a*u-n*a*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],m=e[11],g=e[12],b=e[13],p=e[14],d=e[15],M=u*p*l-b*f*l+b*c*m-o*p*m-u*c*d+o*f*d,_=g*f*l-h*p*l-g*c*m+a*p*m+h*c*d-a*f*d,A=h*b*l-g*u*l+g*o*m-a*b*m-h*o*d+a*u*d,P=g*u*c-h*b*c-g*o*f+a*b*f+h*o*p-a*u*p,T=t*M+n*_+i*A+r*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return e[0]=M*R,e[1]=(b*f*r-u*p*r-b*i*m+n*p*m+u*i*d-n*f*d)*R,e[2]=(o*p*r-b*c*r+b*i*l-n*p*l-o*i*d+n*c*d)*R,e[3]=(u*c*r-o*f*r-u*i*l+n*f*l+o*i*m-n*c*m)*R,e[4]=_*R,e[5]=(h*p*r-g*f*r+g*i*m-t*p*m-h*i*d+t*f*d)*R,e[6]=(g*c*r-a*p*r-g*i*l+t*p*l+a*i*d-t*c*d)*R,e[7]=(a*f*r-h*c*r+h*i*l-t*f*l-a*i*m+t*c*m)*R,e[8]=A*R,e[9]=(g*u*r-h*b*r-g*n*m+t*b*m+h*n*d-t*u*d)*R,e[10]=(a*b*r-g*o*r+g*n*l-t*b*l-a*n*d+t*o*d)*R,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*m-t*o*m)*R,e[12]=P*R,e[13]=(h*b*i-g*u*i+g*n*f-t*b*f-h*n*p+t*u*p)*R,e[14]=(g*o*i-a*b*i-g*n*c+t*b*c+a*n*p-t*o*p)*R,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*f+t*o*f)*R,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,f=r*l,m=r*h,g=r*u,b=a*h,p=a*u,d=o*u,M=c*l,_=c*h,A=c*u,P=n.x,T=n.y,R=n.z;return i[0]=(1-(b+d))*P,i[1]=(m+A)*P,i[2]=(g-_)*P,i[3]=0,i[4]=(m-A)*T,i[5]=(1-(f+d))*T,i[6]=(p+M)*T,i[7]=0,i[8]=(g+_)*R,i[9]=(p-M)*R,i[10]=(1-(f+b))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Oi.set(i[0],i[1],i[2]).length(),a=Oi.set(i[4],i[5],i[6]).length(),o=Oi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],_n.copy(this);let l=1/r,h=1/a,u=1/o;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,t.setFromRotationMatrix(_n),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=zn){let c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),m,g;if(o===zn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Lr)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=zn){let c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(a-r),f=(t+e)*l,m=(n+i)*h,g,b;if(o===zn)g=(a+r)*u,b=-2*u;else if(o===Lr)g=r*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=b,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Oi=new U,_n=new Ve,od=new U(0,0,0),cd=new U(1,1,1),Yn=new U,sr=new U,sn=new U,rl=new Ve,al=new en,Or=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return al.setFromEuler(this),this.setFromQuaternion(al,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Or.DEFAULT_ORDER="XYZ";var Fr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ld=0,ol=new U,Fi=new en,Nn=new Ve,rr=new U,Ms=new U,hd=new U,ud=new en,cl=new U(1,0,0),ll=new U(0,1,0),hl=new U(0,0,1),dd={type:"added"},fd={type:"removed"},At=class s extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new U,t=new Or,n=new en,i=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Ze}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(cl,e)}rotateY(e){return this.rotateOnAxis(ll,e)}rotateZ(e){return this.rotateOnAxis(hl,e)}translateOnAxis(e,t){return ol.copy(e).applyQuaternion(this.quaternion),this.position.add(ol.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cl,e)}translateY(e){return this.translateOnAxis(ll,e)}translateZ(e){return this.translateOnAxis(hl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?rr.copy(e):rr.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Ms,rr,this.up):Nn.lookAt(rr,Ms,this.up),this.quaternion.setFromRotationMatrix(Nn),i&&(Nn.extractRotation(i.matrixWorld),Fi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(dd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fd)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,e,hd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,ud,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++){let o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};At.DEFAULT_UP=new U(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xn=new U,Un=new U,Pa=new U,On=new U,ki=new U,Bi=new U,ul=new U,La=new U,Ia=new U,Da=new U,ar=!1,Yi=class s{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),xn.subVectors(e,t),i.cross(xn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){xn.subVectors(i,t),Un.subVectors(n,t),Pa.subVectors(e,t);let a=xn.dot(xn),o=xn.dot(Un),c=xn.dot(Pa),l=Un.dot(Un),h=Un.dot(Pa),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,m=(l*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getUV(e,t,n,i,r,a,o,c){return ar===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ar=!0),this.getInterpolation(e,t,n,i,r,a,o,c)}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,On)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,On.x),c.addScaledVector(a,On.y),c.addScaledVector(o,On.z),c)}static isFrontFacing(e,t,n,i){return xn.subVectors(n,t),Un.subVectors(e,t),xn.cross(Un).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),xn.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return ar===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ar=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;ki.subVectors(i,n),Bi.subVectors(r,n),La.subVectors(e,n);let c=ki.dot(La),l=Bi.dot(La);if(c<=0&&l<=0)return t.copy(n);Ia.subVectors(e,i);let h=ki.dot(Ia),u=Bi.dot(Ia);if(h>=0&&u<=h)return t.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(ki,a);Da.subVectors(e,r);let m=ki.dot(Da),g=Bi.dot(Da);if(g>=0&&m<=g)return t.copy(r);let b=m*l-c*g;if(b<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Bi,o);let p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return ul.subVectors(r,i),o=(u-h)/(u-h+(m-g)),t.copy(i).addScaledVector(ul,o);let d=1/(p+b+f);return a=b*d,o=f*d,t.copy(n).addScaledVector(ki,a).addScaledVector(Bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},or={h:0,s:0,l:0};function Na(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=lt.workingColorSpace){if(e=Do(e,1),t=Xt(t,0,1),n=Xt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Na(a,r,e+1/3),this.g=Na(a,r,e),this.b=Na(a,r,e-1/3)}return lt.toWorkingColorSpace(this,i),this}setStyle(e,t=vt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){let n=xh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return lt.fromWorkingColorSpace(Wt.copy(this),e),Math.round(Xt(Wt.r*255,0,255))*65536+Math.round(Xt(Wt.g*255,0,255))*256+Math.round(Xt(Wt.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(Wt.copy(this),t);let n=Wt.r,i=Wt.g,r=Wt.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=vt){lt.fromWorkingColorSpace(Wt.copy(this),e);let t=Wt.r,n=Wt.g,i=Wt.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Kn),this.setHSL(Kn.h+e,Kn.s+t,Kn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Kn),e.getHSL(or);let n=Cs(Kn.h,or.h,t),i=Cs(Kn.s,or.s,t),r=Cs(Kn.l,or.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wt=new Re;Re.NAMES=xh;var pd=0,cn=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=$i,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ya,this.blendDst=Ka,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ya&&(n.blendSrc=this.blendSrc),this.blendDst!==Ka&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Bt=class extends cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Pt=new U,cr=new Je,It=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Za,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cr.fromBufferAttribute(this,t),cr.applyMatrix3(e),this.setXY(t,cr.x,cr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Za&&(e.usage=this.usage),e}};var kr=class extends It{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Br=class extends It{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Tt=class extends It{constructor(e,t,n){super(new Float32Array(e),t,n)}};var md=0,un=new Ve,Ua=new At,zi=new U,rn=new tn,Ss=new tn,Ft=new U,qt=class s extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_h(e)?Br:kr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return Ua.lookAt(e),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new on);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ss.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(rn.min,Ss.min),rn.expandByPoint(Ft),Ft.addVectors(rn.max,Ss.max),rn.expandByPoint(Ft)):(rn.expandByPoint(Ss.min),rn.expandByPoint(Ss.max))}rn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Ft.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ft));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ft.fromBufferAttribute(o,l),c&&(zi.fromBufferAttribute(e,l),Ft.add(zi)),i=Math.max(i,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let w=0;w<o;w++)l[w]=new U,h[w]=new U;let u=new U,f=new U,m=new U,g=new Je,b=new Je,p=new Je,d=new U,M=new U;function _(w,O,q){u.fromArray(i,w*3),f.fromArray(i,O*3),m.fromArray(i,q*3),g.fromArray(a,w*2),b.fromArray(a,O*2),p.fromArray(a,q*2),f.sub(u),m.sub(u),b.sub(g),p.sub(g);let Q=1/(b.x*p.y-p.x*b.y);isFinite(Q)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-b.y).multiplyScalar(Q),M.copy(m).multiplyScalar(b.x).addScaledVector(f,-p.x).multiplyScalar(Q),l[w].add(d),l[O].add(d),l[q].add(d),h[w].add(M),h[O].add(M),h[q].add(M))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let w=0,O=A.length;w<O;++w){let q=A[w],Q=q.start,I=q.count;for(let W=Q,$=Q+I;W<$;W+=3)_(n[W+0],n[W+1],n[W+2])}let P=new U,T=new U,R=new U,G=new U;function S(w){R.fromArray(r,w*3),G.copy(R);let O=l[w];P.copy(O),P.sub(R.multiplyScalar(R.dot(O))).normalize(),T.crossVectors(G,O);let Q=T.dot(h[w])<0?-1:1;c[w*4]=P.x,c[w*4+1]=P.y,c[w*4+2]=P.z,c[w*4+3]=Q}for(let w=0,O=A.length;w<O;++w){let q=A[w],Q=q.start,I=q.count;for(let W=Q,$=Q+I;W<$;W+=3)S(n[W+0]),S(n[W+1]),S(n[W+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let i=new U,r=new U,a=new U,o=new U,c=new U,l=new U,h=new U,u=new U;if(e)for(let f=0,m=e.count;f<m;f+=3){let g=e.getX(f+0),b=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h),m=0,g=0;for(let b=0,p=c.length;b<p;b++){o.isInterleavedBufferAttribute?m=c[b]*o.data.stride+o.offset:m=c[b]*h;for(let d=0;d<h;d++)f[g++]=l[m++]}return new It(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],m=e(f,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},dl=new Ve,bi=new rs,lr=new on,fl=new U,Hi=new U,Gi=new U,Vi=new U,Oa=new U,hr=new U,ur=new Je,dr=new Je,fr=new Je,pl=new U,ml=new U,gl=new U,pr=new U,mr=new U,gt=class extends At{constructor(e=new qt,t=new Bt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){hr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Oa.fromBufferAttribute(u,e),a?hr.addScaledVector(Oa,h):hr.addScaledVector(Oa.sub(t),h))}t.add(hr)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(r),bi.copy(e.ray).recast(e.near),!(lr.containsPoint(bi.origin)===!1&&(bi.intersectSphere(lr,fl)===null||bi.origin.distanceToSquared(fl)>(e.far-e.near)**2))&&(dl.copy(r).invert(),bi.copy(e.ray).applyMatrix4(dl),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,bi)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=f.length;g<b;g++){let p=f[g],d=a[p.materialIndex],M=Math.max(p.start,m.start),_=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let A=M,P=_;A<P;A+=3){let T=o.getX(A),R=o.getX(A+1),G=o.getX(A+2);i=gr(this,d,e,n,l,h,u,T,R,G),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,m.start),b=Math.min(o.count,m.start+m.count);for(let p=g,d=b;p<d;p+=3){let M=o.getX(p),_=o.getX(p+1),A=o.getX(p+2);i=gr(this,a,e,n,l,h,u,M,_,A),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=f.length;g<b;g++){let p=f[g],d=a[p.materialIndex],M=Math.max(p.start,m.start),_=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let A=M,P=_;A<P;A+=3){let T=A,R=A+1,G=A+2;i=gr(this,d,e,n,l,h,u,T,R,G),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,m.start),b=Math.min(c.count,m.start+m.count);for(let p=g,d=b;p<d;p+=3){let M=p,_=p+1,A=p+2;i=gr(this,a,e,n,l,h,u,M,_,A),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function gd(s,e,t,n,i,r,a,o){let c;if(e.side===kt?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Tn,o),c===null)return null;mr.copy(o),mr.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(mr);return l<t.near||l>t.far?null:{distance:l,point:mr.clone(),object:s}}function gr(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,Hi),s.getVertexPosition(c,Gi),s.getVertexPosition(l,Vi);let h=gd(s,e,t,n,Hi,Gi,Vi,pr);if(h){i&&(ur.fromBufferAttribute(i,o),dr.fromBufferAttribute(i,c),fr.fromBufferAttribute(i,l),h.uv=Yi.getInterpolation(pr,Hi,Gi,Vi,ur,dr,fr,new Je)),r&&(ur.fromBufferAttribute(r,o),dr.fromBufferAttribute(r,c),fr.fromBufferAttribute(r,l),h.uv1=Yi.getInterpolation(pr,Hi,Gi,Vi,ur,dr,fr,new Je),h.uv2=h.uv1),a&&(pl.fromBufferAttribute(a,o),ml.fromBufferAttribute(a,c),gl.fromBufferAttribute(a,l),h.normal=Yi.getInterpolation(pr,Hi,Gi,Vi,pl,ml,gl,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new U,materialIndex:0};Yi.getNormal(Hi,Gi,Vi,u.normal),h.face=u}return h}var Ri=class s extends qt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],f=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(u,2));function g(b,p,d,M,_,A,P,T,R,G,S){let w=A/R,O=P/G,q=A/2,Q=P/2,I=T/2,W=R+1,$=G+1,ee=0,J=0,Z=new U;for(let x=0;x<$;x++){let C=x*O-Q;for(let j=0;j<W;j++){let k=j*w-q;Z[b]=k*M,Z[p]=C*_,Z[d]=I,l.push(Z.x,Z.y,Z.z),Z[b]=0,Z[p]=0,Z[d]=T>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(j/R),u.push(1-x/G),ee+=1}}for(let x=0;x<G;x++)for(let C=0;C<R;C++){let j=f+C+W*x,k=f+C+W*(x+1),B=f+(C+1)+W*(x+1),le=f+(C+1)+W*x;c.push(j,k,le),c.push(k,B,le),J+=6}o.addGroup(m,J,S),m+=J,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function as(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Yt(s){let e={};for(let t=0;t<s.length;t++){let n=as(s[t]);for(let i in n)e[i]=n[i]}return e}function bd(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function vh(s){return s.getRenderTarget()===null?s.outputColorSpace:lt.workingColorSpace}var No={clone:as,merge:Yt},_d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,nn=class extends cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_d,this.fragmentShader=xd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=as(e.uniforms),this.uniformsGroups=bd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},zr=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},wt=class extends zr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(Rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Rs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Wi=-90,Xi=1,io=class extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new wt(Wi,Xi,e,t);i.layers=this.layers,this.add(i);let r=new wt(Wi,Xi,e,t);r.layers=this.layers,this.add(r);let a=new wt(Wi,Xi,e,t);a.layers=this.layers,this.add(a);let o=new wt(Wi,Xi,e,t);o.layers=this.layers,this.add(o);let c=new wt(Wi,Xi,e,t);c.layers=this.layers,this.add(c);let l=new wt(Wi,Xi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Hr=class extends Ht{constructor(e,t,n,i,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:es,super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},so=class extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Ps("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ai?vt:fn),this.texture=new Hr(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ri(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:Zn});r.uniforms.tEquirect.value=t;let a=new gt(i,r),o=t.minFilter;return t.minFilter===ti&&(t.minFilter=Kt),new io(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},Fa=new U,vd=new U,yd=new Ze,vn=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Fa.subVectors(n,t).cross(vd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Fa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||yd.getNormalMatrix(e),i=this.coplanarPoint(Fa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},_i=new on,br=new U,Ns=class{constructor(e=new vn,t=new vn,n=new vn,i=new vn,r=new vn,a=new vn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zn){let n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],m=i[8],g=i[9],b=i[10],p=i[11],d=i[12],M=i[13],_=i[14],A=i[15];if(n[0].setComponents(c-r,f-l,p-m,A-d).normalize(),n[1].setComponents(c+r,f+l,p+m,A+d).normalize(),n[2].setComponents(c+a,f+h,p+g,A+M).normalize(),n[3].setComponents(c-a,f-h,p-g,A-M).normalize(),n[4].setComponents(c-o,f-u,p-b,A-_).normalize(),t===zn)n[5].setComponents(c+o,f+u,p+b,A+_).normalize();else if(t===Lr)n[5].setComponents(o,u,b,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(br.x=i.normal.x>0?e.max.x:e.min.x,br.y=i.normal.y>0?e.max.y:e.min.y,br.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(br)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function yh(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Md(s,e){let t=e.isWebGL2,n=new WeakMap;function i(l,h){let u=l.array,f=l.usage,m=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,f),l.onUploadCallback();let b;if(u instanceof Float32Array)b=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)b=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)b=s.SHORT;else if(u instanceof Uint32Array)b=s.UNSIGNED_INT;else if(u instanceof Int32Array)b=s.INT;else if(u instanceof Int8Array)b=s.BYTE;else if(u instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:b,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,h,u){let f=h.array,m=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,l),m.count===-1&&g.length===0&&s.bufferSubData(u,0,f),g.length!==0){for(let b=0,p=g.length;b<p;b++){let d=g[b];t?s.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):s.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(t?s.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}var os=class s extends qt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,f=t/c,m=[],g=[],b=[],p=[];for(let d=0;d<h;d++){let M=d*f-a;for(let _=0;_<l;_++){let A=_*u-r;g.push(A,-M,0),b.push(0,0,1),p.push(_/o),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let M=0;M<o;M++){let _=M+l*d,A=M+l*(d+1),P=M+1+l*(d+1),T=M+1+l*d;m.push(_,A,T),m.push(A,P,T)}this.setIndex(m),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(b,3)),this.setAttribute("uv",new Tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Sd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ad=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ed=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Td=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Rd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ld=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Id=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Dd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ud=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Od=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,qd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$d=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qd="gl_FragColor = linearToOutputTexel( gl_FragColor );",ef=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,tf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,af=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,of=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,df=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ff=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_f=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Af=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ef=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Pf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Lf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,If=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Df=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Of=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ff=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Bf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,zf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Hf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$f=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Qf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,np=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ip=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ap=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,op=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,up=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_p=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ap=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Lp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ip=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Np=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Up=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Op=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$p=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,em=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:Sd,alphahash_pars_fragment:Ad,alphamap_fragment:Ed,alphamap_pars_fragment:wd,alphatest_fragment:Td,alphatest_pars_fragment:Rd,aomap_fragment:Cd,aomap_pars_fragment:Pd,batching_pars_vertex:Ld,batching_vertex:Id,begin_vertex:Dd,beginnormal_vertex:Nd,bsdfs:Ud,iridescence_fragment:Od,bumpmap_pars_fragment:Fd,clipping_planes_fragment:kd,clipping_planes_pars_fragment:Bd,clipping_planes_pars_vertex:zd,clipping_planes_vertex:Hd,color_fragment:Gd,color_pars_fragment:Vd,color_pars_vertex:Wd,color_vertex:Xd,common:qd,cube_uv_reflection_fragment:jd,defaultnormal_vertex:Yd,displacementmap_pars_vertex:Kd,displacementmap_vertex:Jd,emissivemap_fragment:$d,emissivemap_pars_fragment:Zd,colorspace_fragment:Qd,colorspace_pars_fragment:ef,envmap_fragment:tf,envmap_common_pars_fragment:nf,envmap_pars_fragment:sf,envmap_pars_vertex:rf,envmap_physical_pars_fragment:bf,envmap_vertex:af,fog_vertex:of,fog_pars_vertex:cf,fog_fragment:lf,fog_pars_fragment:hf,gradientmap_pars_fragment:uf,lightmap_fragment:df,lightmap_pars_fragment:ff,lights_lambert_fragment:pf,lights_lambert_pars_fragment:mf,lights_pars_begin:gf,lights_toon_fragment:_f,lights_toon_pars_fragment:xf,lights_phong_fragment:vf,lights_phong_pars_fragment:yf,lights_physical_fragment:Mf,lights_physical_pars_fragment:Sf,lights_fragment_begin:Af,lights_fragment_maps:Ef,lights_fragment_end:wf,logdepthbuf_fragment:Tf,logdepthbuf_pars_fragment:Rf,logdepthbuf_pars_vertex:Cf,logdepthbuf_vertex:Pf,map_fragment:Lf,map_pars_fragment:If,map_particle_fragment:Df,map_particle_pars_fragment:Nf,metalnessmap_fragment:Uf,metalnessmap_pars_fragment:Of,morphcolor_vertex:Ff,morphnormal_vertex:kf,morphtarget_pars_vertex:Bf,morphtarget_vertex:zf,normal_fragment_begin:Hf,normal_fragment_maps:Gf,normal_pars_fragment:Vf,normal_pars_vertex:Wf,normal_vertex:Xf,normalmap_pars_fragment:qf,clearcoat_normal_fragment_begin:jf,clearcoat_normal_fragment_maps:Yf,clearcoat_pars_fragment:Kf,iridescence_pars_fragment:Jf,opaque_fragment:$f,packing:Zf,premultiplied_alpha_fragment:Qf,project_vertex:ep,dithering_fragment:tp,dithering_pars_fragment:np,roughnessmap_fragment:ip,roughnessmap_pars_fragment:sp,shadowmap_pars_fragment:rp,shadowmap_pars_vertex:ap,shadowmap_vertex:op,shadowmask_pars_fragment:cp,skinbase_vertex:lp,skinning_pars_vertex:hp,skinning_vertex:up,skinnormal_vertex:dp,specularmap_fragment:fp,specularmap_pars_fragment:pp,tonemapping_fragment:mp,tonemapping_pars_fragment:gp,transmission_fragment:bp,transmission_pars_fragment:_p,uv_pars_fragment:xp,uv_pars_vertex:vp,uv_vertex:yp,worldpos_vertex:Mp,background_vert:Sp,background_frag:Ap,backgroundCube_vert:Ep,backgroundCube_frag:wp,cube_vert:Tp,cube_frag:Rp,depth_vert:Cp,depth_frag:Pp,distanceRGBA_vert:Lp,distanceRGBA_frag:Ip,equirect_vert:Dp,equirect_frag:Np,linedashed_vert:Up,linedashed_frag:Op,meshbasic_vert:Fp,meshbasic_frag:kp,meshlambert_vert:Bp,meshlambert_frag:zp,meshmatcap_vert:Hp,meshmatcap_frag:Gp,meshnormal_vert:Vp,meshnormal_frag:Wp,meshphong_vert:Xp,meshphong_frag:qp,meshphysical_vert:jp,meshphysical_frag:Yp,meshtoon_vert:Kp,meshtoon_frag:Jp,points_vert:$p,points_frag:Zp,shadow_vert:Qp,shadow_frag:em,sprite_vert:tm,sprite_frag:nm},de={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},En={basic:{uniforms:Yt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Yt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Yt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Yt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Yt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Yt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Yt([de.points,de.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Yt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Yt([de.common,de.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Yt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Yt([de.sprite,de.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Yt([de.common,de.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Yt([de.lights,de.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};En.physical={uniforms:Yt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var _r={r:0,b:0,g:0};function im(s,e,t,n,i,r,a){let o=new Re(0),c=r===!0?0:1,l,h,u=null,f=0,m=null;function g(p,d){let M=!1,_=d.isScene===!0?d.background:null;_&&_.isTexture&&(_=(d.backgroundBlurriness>0?t:e).get(_)),_===null?b(o,c):_&&_.isColor&&(b(_,1),M=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===ia)?(h===void 0&&(h=new gt(new Ri(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:as(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=lt.getTransfer(_.colorSpace)!==Mt,(u!==_||f!==_.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,m=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new gt(new os(2,2),new nn({name:"BackgroundMaterial",uniforms:as(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=lt.getTransfer(_.colorSpace)!==Mt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,m=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function b(p,d){p.getRGB(_r,vh(s)),n.buffers.color.setClear(_r.r,_r.g,_r.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),c=d,b(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,b(o,c)},render:g}}function sm(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=p(null),l=c,h=!1;function u(I,W,$,ee,J){let Z=!1;if(a){let x=b(ee,$,W);l!==x&&(l=x,m(l.object)),Z=d(I,ee,$,J),Z&&M(I,ee,$,J)}else{let x=W.wireframe===!0;(l.geometry!==ee.id||l.program!==$.id||l.wireframe!==x)&&(l.geometry=ee.id,l.program=$.id,l.wireframe=x,Z=!0)}J!==null&&t.update(J,s.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,G(I,W,$,ee),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(I){return n.isWebGL2?s.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?s.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function b(I,W,$){let ee=$.wireframe===!0,J=o[I.id];J===void 0&&(J={},o[I.id]=J);let Z=J[W.id];Z===void 0&&(Z={},J[W.id]=Z);let x=Z[ee];return x===void 0&&(x=p(f()),Z[ee]=x),x}function p(I){let W=[],$=[],ee=[];for(let J=0;J<i;J++)W[J]=0,$[J]=0,ee[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:$,attributeDivisors:ee,object:I,attributes:{},index:null}}function d(I,W,$,ee){let J=l.attributes,Z=W.attributes,x=0,C=$.getAttributes();for(let j in C)if(C[j].location>=0){let B=J[j],le=Z[j];if(le===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(le=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(le=I.instanceColor)),B===void 0||B.attribute!==le||le&&B.data!==le.data)return!0;x++}return l.attributesNum!==x||l.index!==ee}function M(I,W,$,ee){let J={},Z=W.attributes,x=0,C=$.getAttributes();for(let j in C)if(C[j].location>=0){let B=Z[j];B===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(B=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(B=I.instanceColor));let le={};le.attribute=B,B&&B.data&&(le.data=B.data),J[j]=le,x++}l.attributes=J,l.attributesNum=x,l.index=ee}function _(){let I=l.newAttributes;for(let W=0,$=I.length;W<$;W++)I[W]=0}function A(I){P(I,0)}function P(I,W){let $=l.newAttributes,ee=l.enabledAttributes,J=l.attributeDivisors;$[I]=1,ee[I]===0&&(s.enableVertexAttribArray(I),ee[I]=1),J[I]!==W&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,W),J[I]=W)}function T(){let I=l.newAttributes,W=l.enabledAttributes;for(let $=0,ee=W.length;$<ee;$++)W[$]!==I[$]&&(s.disableVertexAttribArray($),W[$]=0)}function R(I,W,$,ee,J,Z,x){x===!0?s.vertexAttribIPointer(I,W,$,J,Z):s.vertexAttribPointer(I,W,$,ee,J,Z)}function G(I,W,$,ee){if(n.isWebGL2===!1&&(I.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let J=ee.attributes,Z=$.getAttributes(),x=W.defaultAttributeValues;for(let C in Z){let j=Z[C];if(j.location>=0){let k=J[C];if(k===void 0&&(C==="instanceMatrix"&&I.instanceMatrix&&(k=I.instanceMatrix),C==="instanceColor"&&I.instanceColor&&(k=I.instanceColor)),k!==void 0){let B=k.normalized,le=k.itemSize,xe=t.get(k);if(xe===void 0)continue;let Me=xe.buffer,ne=xe.type,Ie=xe.bytesPerElement,Le=n.isWebGL2===!0&&(ne===s.INT||ne===s.UNSIGNED_INT||k.gpuType===oh);if(k.isInterleavedBufferAttribute){let Ge=k.data,V=Ge.stride,St=k.offset;if(Ge.isInstancedInterleavedBuffer){for(let pe=0;pe<j.locationSize;pe++)P(j.location+pe,Ge.meshPerAttribute);I.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Ge.meshPerAttribute*Ge.count)}else for(let pe=0;pe<j.locationSize;pe++)A(j.location+pe);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let pe=0;pe<j.locationSize;pe++)R(j.location+pe,le/j.locationSize,ne,B,V*Ie,(St+le/j.locationSize*pe)*Ie,Le)}else{if(k.isInstancedBufferAttribute){for(let Ge=0;Ge<j.locationSize;Ge++)P(j.location+Ge,k.meshPerAttribute);I.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Ge=0;Ge<j.locationSize;Ge++)A(j.location+Ge);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let Ge=0;Ge<j.locationSize;Ge++)R(j.location+Ge,le/j.locationSize,ne,B,le*Ie,le/j.locationSize*Ge*Ie,Le)}}else if(x!==void 0){let B=x[C];if(B!==void 0)switch(B.length){case 2:s.vertexAttrib2fv(j.location,B);break;case 3:s.vertexAttrib3fv(j.location,B);break;case 4:s.vertexAttrib4fv(j.location,B);break;default:s.vertexAttrib1fv(j.location,B)}}}}T()}function S(){q();for(let I in o){let W=o[I];for(let $ in W){let ee=W[$];for(let J in ee)g(ee[J].object),delete ee[J];delete W[$]}delete o[I]}}function w(I){if(o[I.id]===void 0)return;let W=o[I.id];for(let $ in W){let ee=W[$];for(let J in ee)g(ee[J].object),delete ee[J];delete W[$]}delete o[I.id]}function O(I){for(let W in o){let $=o[W];if($[I.id]===void 0)continue;let ee=$[I.id];for(let J in ee)g(ee[J].object),delete ee[J];delete $[I.id]}}function q(){Q(),h=!0,l!==c&&(l=c,m(l.object))}function Q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:q,resetDefaultState:Q,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:O,initAttributes:_,enableAttribute:A,disableUnusedAttributes:T}}function rm(s,e,t,n){let i=n.isWebGL2,r;function a(h){r=h}function o(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,f){if(f===0)return;let m,g;if(i)m=s,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,f),t.update(u,r,f)}function l(h,u,f){if(f===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let b=0;b<f;b++)g+=u[b];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function am(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&s.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),b=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),d=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,A=a||e.has("OES_texture_float"),P=_&&A,T=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:b,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:A,floatVertexTextures:P,maxSamples:T}}function om(s){let e=this,t=null,n=0,i=!1,r=!1,a=new vn,o=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let m=u.length!==0||f||n!==0||i;return i=f,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){let g=u.clippingPlanes,b=u.clipIntersection,p=u.clipShadows,d=s.get(u);if(!i||g===null||g.length===0||r&&!p)r?h(null):l();else{let M=r?0:n,_=M*4,A=d.clippingState||null;c.value=A,A=h(g,f,_,m);for(let P=0;P!==_;++P)A[P]=t[P];d.clippingState=A,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,m,g){let b=u!==null?u.length:0,p=null;if(b!==0){if(p=c.value,g!==!0||p===null){let d=m+b*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<d)&&(p=new Float32Array(d));for(let _=0,A=m;_!==b;++_,A+=4)a.copy(u[_]).applyMatrix4(M,o),a.normal.toArray(p,A),p[A+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,p}}function cm(s){let e=new WeakMap;function t(a,o){return o===Ja?a.mapping=es:o===$a&&(a.mapping=ts),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ja||o===$a)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new so(c.height/2);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Rn=class extends zr{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ki=4,bl=[.125,.215,.35,.446,.526,.582],yi=20,ka=new Rn,_l=new Re,Ba=null,za=0,Ha=0,xi=(1+Math.sqrt(5))/2,qi=1/xi,xl=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,xi,qi),new U(0,xi,-qi),new U(qi,0,xi),new U(-qi,0,xi),new U(xi,qi,0),new U(-xi,qi,0)],cs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ba,za,Ha),e.scissorTest=!1,xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:wi,format:dn,colorSpace:Dt,depthBuffer:!1},i=vl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vl(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lm(r)),this._blurMaterial=hm(r,e,t)}return i}_compileMaterial(e){let t=new gt(this._lodPlanes[0],e);this._renderer.compile(t,ka)}_sceneToCubeUV(e,t,n,i){let o=new wt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(_l),h.toneMapping=Qn,h.autoClear=!1;let m=new Bt({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),g=new gt(new Ri,m),b=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,b=!0):(m.color.copy(_l),b=!0);for(let d=0;d<6;d++){let M=d%3;M===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):M===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));let _=this._cubeSize;xr(i,M*_,d>2?_:0,_,_),h.setRenderTarget(i),b&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===es||e.mapping===ts;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yl());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new gt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;xr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,ka)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=xl[(i-1)%xl.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new gt(this._lodPlanes[i],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*yi-1),b=r/g,p=isFinite(r)?1+Math.floor(h*b):yi;p>yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${yi}`);let d=[],M=0;for(let R=0;R<yi;++R){let G=R/b,S=Math.exp(-G*G/2);d.push(S),R===0?M+=S:R<p&&(M+=2*S)}for(let R=0;R<d.length;R++)d[R]=d[R]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;let A=this._sizeLods[i],P=3*A*(i>_-Ki?i-_+Ki:0),T=4*(this._cubeSize-A);xr(t,P,T,3*A,2*A),c.setRenderTarget(t),c.render(u,ka)}};function lm(s){let e=[],t=[],n=[],i=s,r=s-Ki+1+bl.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let c=1/o;a>s-Ki?c=bl[a-s+Ki-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,b=3,p=2,d=1,M=new Float32Array(b*g*m),_=new Float32Array(p*g*m),A=new Float32Array(d*g*m);for(let T=0;T<m;T++){let R=T%3*2/3-1,G=T>2?0:-1,S=[R,G,0,R+2/3,G,0,R+2/3,G+1,0,R,G,0,R+2/3,G+1,0,R,G+1,0];M.set(S,b*g*T),_.set(f,p*g*T);let w=[T,T,T,T,T,T];A.set(w,d*g*T)}let P=new qt;P.setAttribute("position",new It(M,b)),P.setAttribute("uv",new It(_,p)),P.setAttribute("faceIndex",new It(A,d)),e.push(P),i>Ki&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function vl(s,e,t){let n=new Qt(s,e,t);return n.texture.mapping=ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function hm(s,e,t){let n=new Float32Array(yi),i=new U(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function yl(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Ml(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Uo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function um(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Ja||c===$a,h=c===es||c===ts;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new cs(s)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new cs(s));let f=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function dm(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function fm(s,e,t,n){let i={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let b=f.morphAttributes[g];for(let p=0,d=b.length;p<d;p++)e.remove(b[p])}f.removeEventListener("dispose",a),delete i[f.id];let m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)e.update(f[g],s.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let b=m[g];for(let p=0,d=b.length;p<d;p++)e.update(b[p],s.ARRAY_BUFFER)}}function l(u){let f=[],m=u.index,g=u.attributes.position,b=0;if(m!==null){let M=m.array;b=m.version;for(let _=0,A=M.length;_<A;_+=3){let P=M[_+0],T=M[_+1],R=M[_+2];f.push(P,T,T,R,R,P)}}else if(g!==void 0){let M=g.array;b=g.version;for(let _=0,A=M.length/3-1;_<A;_+=3){let P=_+0,T=_+1,R=_+2;f.push(P,T,T,R,R,P)}}else return;let p=new(_h(f)?Br:kr)(f,1);p.version=b;let d=r.get(u);d&&e.remove(d),r.set(u,p)}function h(u){let f=r.get(u);if(f){let m=u.index;m!==null&&f.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function pm(s,e,t,n){let i=n.isWebGL2,r;function a(m){r=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function h(m,g){s.drawElements(r,g,o,m*c),t.update(g,r,1)}function u(m,g,b){if(b===0)return;let p,d;if(i)p=s,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,g,o,m*c,b),t.update(g,r,b)}function f(m,g,b){if(b===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<b;d++)this.render(m[d]/c,g[d]);else{p.multiDrawElementsWEBGL(r,g,0,o,m,0,b);let d=0;for(let M=0;M<b;M++)d+=g[M];t.update(d,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function mm(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function gm(s,e){return s[0]-e[0]}function bm(s,e){return Math.abs(e[1])-Math.abs(s[1])}function _m(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,a=new ot,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,b=r.get(h);if(b===void 0||b.count!==g){let I=function(){q.dispose(),r.delete(h),h.removeEventListener("dispose",I)};b!==void 0&&b.texture.dispose();let M=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],G=0;M===!0&&(G=1),_===!0&&(G=2),A===!0&&(G=3);let S=h.attributes.position.count*G,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let O=new Float32Array(S*w*4*g),q=new Ur(O,S,w,g);q.type=Bn,q.needsUpdate=!0;let Q=G*4;for(let W=0;W<g;W++){let $=P[W],ee=T[W],J=R[W],Z=S*w*4*W;for(let x=0;x<$.count;x++){let C=x*Q;M===!0&&(a.fromBufferAttribute($,x),O[Z+C+0]=a.x,O[Z+C+1]=a.y,O[Z+C+2]=a.z,O[Z+C+3]=0),_===!0&&(a.fromBufferAttribute(ee,x),O[Z+C+4]=a.x,O[Z+C+5]=a.y,O[Z+C+6]=a.z,O[Z+C+7]=0),A===!0&&(a.fromBufferAttribute(J,x),O[Z+C+8]=a.x,O[Z+C+9]=a.y,O[Z+C+10]=a.z,O[Z+C+11]=J.itemSize===4?a.w:1)}}b={count:g,texture:q,size:new Je(S,w)},r.set(h,b),h.addEventListener("dispose",I)}let p=0;for(let M=0;M<f.length;M++)p+=f[M];let d=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",d),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",b.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",b.size)}else{let m=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==m){g=[];for(let _=0;_<m;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<m;_++){let A=g[_];A[0]=_,A[1]=f[_]}g.sort(bm);for(let _=0;_<8;_++)_<m&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(gm);let b=h.morphAttributes.position,p=h.morphAttributes.normal,d=0;for(let _=0;_<8;_++){let A=o[_],P=A[0],T=A[1];P!==Number.MAX_SAFE_INTEGER&&T?(b&&h.getAttribute("morphTarget"+_)!==b[P]&&h.setAttribute("morphTarget"+_,b[P]),p&&h.getAttribute("morphNormal"+_)!==p[P]&&h.setAttribute("morphNormal"+_,p[P]),i[_]=T,d+=T):(b&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),p&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),i[_]=0)}let M=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(s,"morphTargetBaseInfluence",M),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function xm(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var Gr=class extends Ht{constructor(e,t,n,i,r,a,o,c,l,h){if(h=h!==void 0?h:Si,h!==Si&&h!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Si&&(n=Jn),n===void 0&&h===ns&&(n=Mi),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Lt,this.minFilter=c!==void 0?c:Lt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Mh=new Ht,Sh=new Gr(1,1);Sh.compareFunction=bh;var Ah=new Ur,Eh=new no,wh=new Hr,Sl=[],Al=[],El=new Float32Array(16),wl=new Float32Array(9),Tl=new Float32Array(4);function ps(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Sl[i];if(r===void 0&&(r=new Float32Array(i),Sl[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Nt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ut(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function aa(s,e){let t=Al[e];t===void 0&&(t=new Int32Array(e),Al[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function vm(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function ym(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;s.uniform2fv(this.addr,e),Ut(t,e)}}function Mm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;s.uniform3fv(this.addr,e),Ut(t,e)}}function Sm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;s.uniform4fv(this.addr,e),Ut(t,e)}}function Am(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Tl.set(n),s.uniformMatrix2fv(this.addr,!1,Tl),Ut(t,n)}}function Em(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;wl.set(n),s.uniformMatrix3fv(this.addr,!1,wl),Ut(t,n)}}function wm(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;El.set(n),s.uniformMatrix4fv(this.addr,!1,El),Ut(t,n)}}function Tm(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Rm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;s.uniform2iv(this.addr,e),Ut(t,e)}}function Cm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;s.uniform3iv(this.addr,e),Ut(t,e)}}function Pm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;s.uniform4iv(this.addr,e),Ut(t,e)}}function Lm(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Im(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;s.uniform2uiv(this.addr,e),Ut(t,e)}}function Dm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;s.uniform3uiv(this.addr,e),Ut(t,e)}}function Nm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;s.uniform4uiv(this.addr,e),Ut(t,e)}}function Um(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?Sh:Mh;t.setTexture2D(e||r,i)}function Om(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Eh,i)}function Fm(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||wh,i)}function km(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ah,i)}function Bm(s){switch(s){case 5126:return vm;case 35664:return ym;case 35665:return Mm;case 35666:return Sm;case 35674:return Am;case 35675:return Em;case 35676:return wm;case 5124:case 35670:return Tm;case 35667:case 35671:return Rm;case 35668:case 35672:return Cm;case 35669:case 35673:return Pm;case 5125:return Lm;case 36294:return Im;case 36295:return Dm;case 36296:return Nm;case 35678:case 36198:case 36298:case 36306:case 35682:return Um;case 35679:case 36299:case 36307:return Om;case 35680:case 36300:case 36308:case 36293:return Fm;case 36289:case 36303:case 36311:case 36292:return km}}function zm(s,e){s.uniform1fv(this.addr,e)}function Hm(s,e){let t=ps(e,this.size,2);s.uniform2fv(this.addr,t)}function Gm(s,e){let t=ps(e,this.size,3);s.uniform3fv(this.addr,t)}function Vm(s,e){let t=ps(e,this.size,4);s.uniform4fv(this.addr,t)}function Wm(s,e){let t=ps(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Xm(s,e){let t=ps(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function qm(s,e){let t=ps(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function jm(s,e){s.uniform1iv(this.addr,e)}function Ym(s,e){s.uniform2iv(this.addr,e)}function Km(s,e){s.uniform3iv(this.addr,e)}function Jm(s,e){s.uniform4iv(this.addr,e)}function $m(s,e){s.uniform1uiv(this.addr,e)}function Zm(s,e){s.uniform2uiv(this.addr,e)}function Qm(s,e){s.uniform3uiv(this.addr,e)}function eg(s,e){s.uniform4uiv(this.addr,e)}function tg(s,e,t){let n=this.cache,i=e.length,r=aa(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Mh,r[a])}function ng(s,e,t){let n=this.cache,i=e.length,r=aa(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Eh,r[a])}function ig(s,e,t){let n=this.cache,i=e.length,r=aa(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||wh,r[a])}function sg(s,e,t){let n=this.cache,i=e.length,r=aa(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Ah,r[a])}function rg(s){switch(s){case 5126:return zm;case 35664:return Hm;case 35665:return Gm;case 35666:return Vm;case 35674:return Wm;case 35675:return Xm;case 35676:return qm;case 5124:case 35670:return jm;case 35667:case 35671:return Ym;case 35668:case 35672:return Km;case 35669:case 35673:return Jm;case 5125:return $m;case 36294:return Zm;case 36295:return Qm;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return tg;case 35679:case 36299:case 36307:return ng;case 35680:case 36300:case 36308:case 36293:return ig;case 36289:case 36303:case 36311:case 36292:return sg}}var ro=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Bm(t.type)}},ao=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rg(t.type)}},oo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Ga=/(\w+)(\])?(\[|\.)?/g;function Rl(s,e){s.seq.push(e),s.map[e.id]=e}function ag(s,e,t){let n=s.name,i=n.length;for(Ga.lastIndex=0;;){let r=Ga.exec(n),a=Ga.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Rl(t,l===void 0?new ro(o,s,e):new ao(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new oo(o),Rl(t,u)),t=u}}}var Qi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);ag(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Cl(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var og=37297,cg=0;function lg(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function hg(s){let e=lt.getPrimaries(lt.workingColorSpace),t=lt.getPrimaries(s),n;switch(e===t?n="":e===Pr&&t===Cr?n="LinearDisplayP3ToLinearSRGB":e===Cr&&t===Pr&&(n="LinearSRGBToLinearDisplayP3"),s){case Dt:case ra:return[n,"LinearTransferOETF"];case vt:case Io:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Pl(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+lg(s.getShaderSource(e),a)}else return i}function ug(s,e){let t=hg(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function dg(s,e){let t;switch(e){case bu:t="Linear";break;case _u:t="Reinhard";break;case xu:t="OptimizedCineon";break;case Co:t="ACESFilmic";break;case yu:t="AgX";break;case vu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function fg(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ji).join(`
`)}function pg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ji).join(`
`)}function mg(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gg(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ji(s){return s!==""}function Ll(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Il(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function co(s){return s.replace(bg,xg)}var _g=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function xg(s,e){let t=Ke[e];if(t===void 0){let n=_g.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return co(t)}var vg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dl(s){return s.replace(vg,yg)}function yg(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Nl(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Mg(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===sh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Xh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===kn&&(e="SHADOWMAP_TYPE_VSM"),e}function Sg(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case es:case ts:e="ENVMAP_TYPE_CUBE";break;case ia:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ag(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ts:e="ENVMAP_MODE_REFRACTION";break}return e}function Eg(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case rh:e="ENVMAP_BLENDING_MULTIPLY";break;case mu:e="ENVMAP_BLENDING_MIX";break;case gu:e="ENVMAP_BLENDING_ADD";break}return e}function wg(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Tg(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Mg(t),l=Sg(t),h=Ag(t),u=Eg(t),f=wg(t),m=t.isWebGL2?"":fg(t),g=pg(t),b=mg(r),p=i.createProgram(),d,M,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Ji).join(`
`),d.length>0&&(d+=`
`),M=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Ji).join(`
`),M.length>0&&(M+=`
`)):(d=[Nl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ji).join(`
`),M=[m,Nl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Qn?dg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,ug("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ji).join(`
`)),a=co(a),a=Ll(a,t),a=Il(a,t),o=co(o),o=Ll(o,t),o=Il(o,t),a=Dl(a),o=Dl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let A=_+d+a,P=_+M+o,T=Cl(i,i.VERTEX_SHADER,A),R=Cl(i,i.FRAGMENT_SHADER,P);i.attachShader(p,T),i.attachShader(p,R),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function G(q){if(s.debug.checkShaderErrors){let Q=i.getProgramInfoLog(p).trim(),I=i.getShaderInfoLog(T).trim(),W=i.getShaderInfoLog(R).trim(),$=!0,ee=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,T,R);else{let J=Pl(i,T,"vertex"),Z=Pl(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+J+`
`+Z)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(I===""||W==="")&&(ee=!1);ee&&(q.diagnostics={runnable:$,programLog:Q,vertexShader:{log:I,prefix:d},fragmentShader:{log:W,prefix:M}})}i.deleteShader(T),i.deleteShader(R),S=new Qi(i,p),w=gg(i,p)}let S;this.getUniforms=function(){return S===void 0&&G(this),S};let w;this.getAttributes=function(){return w===void 0&&G(this),w};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=i.getProgramParameter(p,og)),O},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cg++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=R,this}var Rg=0,lo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ho(e),t.set(e,n)),n}},ho=class{constructor(e){this.id=Rg++,this.code=e,this.usedTimes=0}};function Cg(s,e,t,n,i,r,a){let o=new Fr,c=new lo,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures,m=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(S){return S===0?"uv":`uv${S}`}function p(S,w,O,q,Q){let I=q.fog,W=Q.geometry,$=S.isMeshStandardMaterial?q.environment:null,ee=(S.isMeshStandardMaterial?t:e).get(S.envMap||$),J=ee&&ee.mapping===ia?ee.image.height:null,Z=g[S.type];S.precision!==null&&(m=i.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));let x=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,C=x!==void 0?x.length:0,j=0;W.morphAttributes.position!==void 0&&(j=1),W.morphAttributes.normal!==void 0&&(j=2),W.morphAttributes.color!==void 0&&(j=3);let k,B,le,xe;if(Z){let Ot=En[Z];k=Ot.vertexShader,B=Ot.fragmentShader}else k=S.vertexShader,B=S.fragmentShader,c.update(S),le=c.getVertexShaderID(S),xe=c.getFragmentShaderID(S);let Me=s.getRenderTarget(),ne=Q.isInstancedMesh===!0,Ie=Q.isBatchedMesh===!0,Le=!!S.map,Ge=!!S.matcap,V=!!ee,St=!!S.aoMap,pe=!!S.lightMap,Oe=!!S.bumpMap,he=!!S.normalMap,Qe=!!S.displacementMap,He=!!S.emissiveMap,E=!!S.metalnessMap,y=!!S.roughnessMap,Y=S.anisotropy>0,oe=S.clearcoat>0,ae=S.iridescence>0,ce=S.sheen>0,Ce=S.transmission>0,be=Y&&!!S.anisotropyMap,Se=oe&&!!S.clearcoatMap,Be=oe&&!!S.clearcoatNormalMap,Xe=oe&&!!S.clearcoatRoughnessMap,ie=ae&&!!S.iridescenceMap,et=ae&&!!S.iridescenceThicknessMap,je=ce&&!!S.sheenColorMap,ze=ce&&!!S.sheenRoughnessMap,De=!!S.specularMap,Ae=!!S.specularColorMap,We=!!S.specularIntensityMap,rt=Ce&&!!S.transmissionMap,bt=Ce&&!!S.thicknessMap,Ye=!!S.gradientMap,ue=!!S.alphaMap,D=S.alphaTest>0,fe=!!S.alphaHash,me=!!S.extensions,Fe=!!W.attributes.uv1,we=!!W.attributes.uv2,pt=!!W.attributes.uv3,ct=Qn;return S.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(ct=s.toneMapping),{isWebGL2:h,shaderID:Z,shaderType:S.type,shaderName:S.name,vertexShader:k,fragmentShader:B,defines:S.defines,customVertexShaderID:le,customFragmentShaderID:xe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Ie,instancing:ne,instancingColor:ne&&Q.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Me===null?s.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Dt,map:Le,matcap:Ge,envMap:V,envMapMode:V&&ee.mapping,envMapCubeUVHeight:J,aoMap:St,lightMap:pe,bumpMap:Oe,normalMap:he,displacementMap:f&&Qe,emissiveMap:He,normalMapObjectSpace:he&&S.normalMapType===Nu,normalMapTangentSpace:he&&S.normalMapType===gh,metalnessMap:E,roughnessMap:y,anisotropy:Y,anisotropyMap:be,clearcoat:oe,clearcoatMap:Se,clearcoatNormalMap:Be,clearcoatRoughnessMap:Xe,iridescence:ae,iridescenceMap:ie,iridescenceThicknessMap:et,sheen:ce,sheenColorMap:je,sheenRoughnessMap:ze,specularMap:De,specularColorMap:Ae,specularIntensityMap:We,transmission:Ce,transmissionMap:rt,thicknessMap:bt,gradientMap:Ye,opaque:S.transparent===!1&&S.blending===$i,alphaMap:ue,alphaTest:D,alphaHash:fe,combine:S.combine,mapUv:Le&&b(S.map.channel),aoMapUv:St&&b(S.aoMap.channel),lightMapUv:pe&&b(S.lightMap.channel),bumpMapUv:Oe&&b(S.bumpMap.channel),normalMapUv:he&&b(S.normalMap.channel),displacementMapUv:Qe&&b(S.displacementMap.channel),emissiveMapUv:He&&b(S.emissiveMap.channel),metalnessMapUv:E&&b(S.metalnessMap.channel),roughnessMapUv:y&&b(S.roughnessMap.channel),anisotropyMapUv:be&&b(S.anisotropyMap.channel),clearcoatMapUv:Se&&b(S.clearcoatMap.channel),clearcoatNormalMapUv:Be&&b(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&b(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&b(S.iridescenceMap.channel),iridescenceThicknessMapUv:et&&b(S.iridescenceThicknessMap.channel),sheenColorMapUv:je&&b(S.sheenColorMap.channel),sheenRoughnessMapUv:ze&&b(S.sheenRoughnessMap.channel),specularMapUv:De&&b(S.specularMap.channel),specularColorMapUv:Ae&&b(S.specularColorMap.channel),specularIntensityMapUv:We&&b(S.specularIntensityMap.channel),transmissionMapUv:rt&&b(S.transmissionMap.channel),thicknessMapUv:bt&&b(S.thicknessMap.channel),alphaMapUv:ue&&b(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(he||Y),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:Fe,vertexUv2s:we,vertexUv3s:pt,pointsUvs:Q.isPoints===!0&&!!W.attributes.uv&&(Le||ue),fog:!!I,useFog:S.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Q.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:C,morphTextureStride:j,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:ct,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Le&&S.map.isVideoTexture===!0&&lt.getTransfer(S.map.colorSpace)===Mt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Zt,flipSided:S.side===kt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:me&&S.extensions.derivatives===!0,extensionFragDepth:me&&S.extensions.fragDepth===!0,extensionDrawBuffers:me&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){let w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(let O in S.defines)w.push(O),w.push(S.defines[O]);return S.isRawShaderMaterial===!1&&(M(w,S),_(w,S),w.push(s.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function M(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function _(S,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),S.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function A(S){let w=g[S.type],O;if(w){let q=En[w];O=No.clone(q.uniforms)}else O=S.uniforms;return O}function P(S,w){let O;for(let q=0,Q=l.length;q<Q;q++){let I=l[q];if(I.cacheKey===w){O=I,++O.usedTimes;break}}return O===void 0&&(O=new Tg(s,w,S,r),l.push(O)),O}function T(S){if(--S.usedTimes===0){let w=l.indexOf(S);l[w]=l[l.length-1],l.pop(),S.destroy()}}function R(S){c.remove(S)}function G(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:A,acquireProgram:P,releaseProgram:T,releaseShaderCache:R,programs:l,dispose:G}}function Pg(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Lg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ul(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ol(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,f,m,g,b,p){let d=s[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:b,group:p},s[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=b,d.group=p),e++,d}function o(u,f,m,g,b,p){let d=a(u,f,m,g,b,p);m.transmission>0?n.push(d):m.transparent===!0?i.push(d):t.push(d)}function c(u,f,m,g,b,p){let d=a(u,f,m,g,b,p);m.transmission>0?n.unshift(d):m.transparent===!0?i.unshift(d):t.unshift(d)}function l(u,f){t.length>1&&t.sort(u||Lg),n.length>1&&n.sort(f||Ul),i.length>1&&i.sort(f||Ul)}function h(){for(let u=e,f=s.length;u<f;u++){let m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function Ig(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new Ol,s.set(n,[a])):i>=r.length?(a=new Ol,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Dg(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Re};break;case"SpotLight":t={position:new U,direction:new U,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new U,halfWidth:new U,halfHeight:new U};break}return s[e.id]=t,t}}}function Ng(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Ug=0;function Og(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Fg(s,e){let t=new Dg,n=Ng(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new U);let r=new U,a=new Ve,o=new Ve;function c(h,u){let f=0,m=0,g=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let b=0,p=0,d=0,M=0,_=0,A=0,P=0,T=0,R=0,G=0,S=0;h.sort(Og);let w=u===!0?Math.PI:1;for(let q=0,Q=h.length;q<Q;q++){let I=h[q],W=I.color,$=I.intensity,ee=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=W.r*$*w,m+=W.g*$*w,g+=W.b*$*w;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(I.sh.coefficients[Z],$);S++}else if(I.isDirectionalLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity*w),I.castShadow){let x=I.shadow,C=n.get(I);C.shadowBias=x.bias,C.shadowNormalBias=x.normalBias,C.shadowRadius=x.radius,C.shadowMapSize=x.mapSize,i.directionalShadow[b]=C,i.directionalShadowMap[b]=J,i.directionalShadowMatrix[b]=I.shadow.matrix,A++}i.directional[b]=Z,b++}else if(I.isSpotLight){let Z=t.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(W).multiplyScalar($*w),Z.distance=ee,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,i.spot[d]=Z;let x=I.shadow;if(I.map&&(i.spotLightMap[R]=I.map,R++,x.updateMatrices(I),I.castShadow&&G++),i.spotLightMatrix[d]=x.matrix,I.castShadow){let C=n.get(I);C.shadowBias=x.bias,C.shadowNormalBias=x.normalBias,C.shadowRadius=x.radius,C.shadowMapSize=x.mapSize,i.spotShadow[d]=C,i.spotShadowMap[d]=J,T++}d++}else if(I.isRectAreaLight){let Z=t.get(I);Z.color.copy(W).multiplyScalar($),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),i.rectArea[M]=Z,M++}else if(I.isPointLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity*w),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){let x=I.shadow,C=n.get(I);C.shadowBias=x.bias,C.shadowNormalBias=x.normalBias,C.shadowRadius=x.radius,C.shadowMapSize=x.mapSize,C.shadowCameraNear=x.camera.near,C.shadowCameraFar=x.camera.far,i.pointShadow[p]=C,i.pointShadowMap[p]=J,i.pointShadowMatrix[p]=I.shadow.matrix,P++}i.point[p]=Z,p++}else if(I.isHemisphereLight){let Z=t.get(I);Z.skyColor.copy(I.color).multiplyScalar($*w),Z.groundColor.copy(I.groundColor).multiplyScalar($*w),i.hemi[_]=Z,_++}}M>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;let O=i.hash;(O.directionalLength!==b||O.pointLength!==p||O.spotLength!==d||O.rectAreaLength!==M||O.hemiLength!==_||O.numDirectionalShadows!==A||O.numPointShadows!==P||O.numSpotShadows!==T||O.numSpotMaps!==R||O.numLightProbes!==S)&&(i.directional.length=b,i.spot.length=d,i.rectArea.length=M,i.point.length=p,i.hemi.length=_,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=T+R-G,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=G,i.numLightProbes=S,O.directionalLength=b,O.pointLength=p,O.spotLength=d,O.rectAreaLength=M,O.hemiLength=_,O.numDirectionalShadows=A,O.numPointShadows=P,O.numSpotShadows=T,O.numSpotMaps=R,O.numLightProbes=S,i.version=Ug++)}function l(h,u){let f=0,m=0,g=0,b=0,p=0,d=u.matrixWorldInverse;for(let M=0,_=h.length;M<_;M++){let A=h[M];if(A.isDirectionalLight){let P=i.directional[f];P.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),f++}else if(A.isSpotLight){let P=i.spot[g];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(d),P.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),g++}else if(A.isRectAreaLight){let P=i.rectArea[b];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(d),o.identity(),a.copy(A.matrixWorld),a.premultiply(d),o.extractRotation(a),P.halfWidth.set(A.width*.5,0,0),P.halfHeight.set(0,A.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),b++}else if(A.isPointLight){let P=i.point[m];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(d),m++}else if(A.isHemisphereLight){let P=i.hemi[p];P.direction.setFromMatrixPosition(A.matrixWorld),P.direction.transformDirection(d),p++}}}return{setup:c,setupView:l,state:i}}function Fl(s,e){let t=new Fg(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function kg(s,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),c;return o===void 0?(c=new Fl(s,e),t.set(r,[c])):a>=o.length?(c=new Fl(s,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}var uo=class extends cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fo=class extends cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Bg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Hg(s,e,t){let n=new Ns,i=new Je,r=new Je,a=new ot,o=new uo({depthPacking:Du}),c=new fo,l={},h=t.maxTextureSize,u={[Tn]:kt,[kt]:Tn,[Zt]:Zt},f=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:Bg,fragmentShader:zg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new qt;g.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new gt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sh;let d=this.type;this.render=function(T,R,G){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;let S=s.getRenderTarget(),w=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),q=s.state;q.setBlending(Zn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let Q=d!==kn&&this.type===kn,I=d===kn&&this.type!==kn;for(let W=0,$=T.length;W<$;W++){let ee=T[W],J=ee.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;i.copy(J.mapSize);let Z=J.getFrameExtents();if(i.multiply(Z),r.copy(J.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Z.x),i.x=r.x*Z.x,J.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Z.y),i.y=r.y*Z.y,J.mapSize.y=r.y)),J.map===null||Q===!0||I===!0){let C=this.type!==kn?{minFilter:Lt,magFilter:Lt}:{};J.map!==null&&J.map.dispose(),J.map=new Qt(i.x,i.y,C),J.map.texture.name=ee.name+".shadowMap",J.camera.updateProjectionMatrix()}s.setRenderTarget(J.map),s.clear();let x=J.getViewportCount();for(let C=0;C<x;C++){let j=J.getViewport(C);a.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),q.viewport(a),J.updateMatrices(ee,C),n=J.getFrustum(),A(R,G,J.camera,ee,this.type)}J.isPointLightShadow!==!0&&this.type===kn&&M(J,G),J.needsUpdate=!1}d=this.type,p.needsUpdate=!1,s.setRenderTarget(S,w,O)};function M(T,R){let G=e.update(b);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Qt(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(R,null,G,f,b,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(R,null,G,m,b,null)}function _(T,R,G,S){let w=null,O=G.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(O!==void 0)w=O;else if(w=G.isPointLight===!0?c:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let q=w.uuid,Q=R.uuid,I=l[q];I===void 0&&(I={},l[q]=I);let W=I[Q];W===void 0&&(W=w.clone(),I[Q]=W,R.addEventListener("dispose",P)),w=W}if(w.visible=R.visible,w.wireframe=R.wireframe,S===kn?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:u[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,G.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let q=s.properties.get(w);q.light=G}return w}function A(T,R,G,S,w){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===kn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld);let Q=e.update(T),I=T.material;if(Array.isArray(I)){let W=Q.groups;for(let $=0,ee=W.length;$<ee;$++){let J=W[$],Z=I[J.materialIndex];if(Z&&Z.visible){let x=_(T,Z,S,w);T.onBeforeShadow(s,T,R,G,Q,x,J),s.renderBufferDirect(G,null,Q,x,T,J),T.onAfterShadow(s,T,R,G,Q,x,J)}}}else if(I.visible){let W=_(T,I,S,w);T.onBeforeShadow(s,T,R,G,Q,W,null),s.renderBufferDirect(G,null,Q,W,T,null),T.onAfterShadow(s,T,R,G,Q,W,null)}}let q=T.children;for(let Q=0,I=q.length;Q<I;Q++)A(q[Q],R,G,S,w)}function P(T){T.target.removeEventListener("dispose",P);for(let G in l){let S=l[G],w=T.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}function Gg(s,e,t){let n=t.isWebGL2;function i(){let D=!1,fe=new ot,me=null,Fe=new ot(0,0,0,0);return{setMask:function(we){me!==we&&!D&&(s.colorMask(we,we,we,we),me=we)},setLocked:function(we){D=we},setClear:function(we,pt,ct,Rt,Ot){Ot===!0&&(we*=Rt,pt*=Rt,ct*=Rt),fe.set(we,pt,ct,Rt),Fe.equals(fe)===!1&&(s.clearColor(we,pt,ct,Rt),Fe.copy(fe))},reset:function(){D=!1,me=null,Fe.set(-1,0,0,0)}}}function r(){let D=!1,fe=null,me=null,Fe=null;return{setTest:function(we){we?Ie(s.DEPTH_TEST):Le(s.DEPTH_TEST)},setMask:function(we){fe!==we&&!D&&(s.depthMask(we),fe=we)},setFunc:function(we){if(me!==we){switch(we){case cu:s.depthFunc(s.NEVER);break;case lu:s.depthFunc(s.ALWAYS);break;case hu:s.depthFunc(s.LESS);break;case wr:s.depthFunc(s.LEQUAL);break;case uu:s.depthFunc(s.EQUAL);break;case du:s.depthFunc(s.GEQUAL);break;case fu:s.depthFunc(s.GREATER);break;case pu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=we}},setLocked:function(we){D=we},setClear:function(we){Fe!==we&&(s.clearDepth(we),Fe=we)},reset:function(){D=!1,fe=null,me=null,Fe=null}}}function a(){let D=!1,fe=null,me=null,Fe=null,we=null,pt=null,ct=null,Rt=null,Ot=null;return{setTest:function(L){D||(L?Ie(s.STENCIL_TEST):Le(s.STENCIL_TEST))},setMask:function(L){fe!==L&&!D&&(s.stencilMask(L),fe=L)},setFunc:function(L,X,K){(me!==L||Fe!==X||we!==K)&&(s.stencilFunc(L,X,K),me=L,Fe=X,we=K)},setOp:function(L,X,K){(pt!==L||ct!==X||Rt!==K)&&(s.stencilOp(L,X,K),pt=L,ct=X,Rt=K)},setLocked:function(L){D=L},setClear:function(L){Ot!==L&&(s.clearStencil(L),Ot=L)},reset:function(){D=!1,fe=null,me=null,Fe=null,we=null,pt=null,ct=null,Rt=null,Ot=null}}}let o=new i,c=new r,l=new a,h=new WeakMap,u=new WeakMap,f={},m={},g=new WeakMap,b=[],p=null,d=!1,M=null,_=null,A=null,P=null,T=null,R=null,G=null,S=new Re(0,0,0),w=0,O=!1,q=null,Q=null,I=null,W=null,$=null,ee=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,Z=0,x=s.getParameter(s.VERSION);x.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(x)[1]),J=Z>=1):x.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(x)[1]),J=Z>=2);let C=null,j={},k=s.getParameter(s.SCISSOR_BOX),B=s.getParameter(s.VIEWPORT),le=new ot().fromArray(k),xe=new ot().fromArray(B);function Me(D,fe,me,Fe){let we=new Uint8Array(4),pt=s.createTexture();s.bindTexture(D,pt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ct=0;ct<me;ct++)n&&(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)?s.texImage3D(fe,0,s.RGBA,1,1,Fe,0,s.RGBA,s.UNSIGNED_BYTE,we):s.texImage2D(fe+ct,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,we);return pt}let ne={};ne[s.TEXTURE_2D]=Me(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=Me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ne[s.TEXTURE_2D_ARRAY]=Me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=Me(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ie(s.DEPTH_TEST),c.setFunc(wr),He(!1),E(bc),Ie(s.CULL_FACE),he(Zn);function Ie(D){f[D]!==!0&&(s.enable(D),f[D]=!0)}function Le(D){f[D]!==!1&&(s.disable(D),f[D]=!1)}function Ge(D,fe){return m[D]!==fe?(s.bindFramebuffer(D,fe),m[D]=fe,n&&(D===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=fe),D===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=fe)),!0):!1}function V(D,fe){let me=b,Fe=!1;if(D)if(me=g.get(fe),me===void 0&&(me=[],g.set(fe,me)),D.isWebGLMultipleRenderTargets){let we=D.texture;if(me.length!==we.length||me[0]!==s.COLOR_ATTACHMENT0){for(let pt=0,ct=we.length;pt<ct;pt++)me[pt]=s.COLOR_ATTACHMENT0+pt;me.length=we.length,Fe=!0}}else me[0]!==s.COLOR_ATTACHMENT0&&(me[0]=s.COLOR_ATTACHMENT0,Fe=!0);else me[0]!==s.BACK&&(me[0]=s.BACK,Fe=!0);Fe&&(t.isWebGL2?s.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function St(D){return p!==D?(s.useProgram(D),p=D,!0):!1}let pe={[vi]:s.FUNC_ADD,[jh]:s.FUNC_SUBTRACT,[Yh]:s.FUNC_REVERSE_SUBTRACT};if(n)pe[yc]=s.MIN,pe[Mc]=s.MAX;else{let D=e.get("EXT_blend_minmax");D!==null&&(pe[yc]=D.MIN_EXT,pe[Mc]=D.MAX_EXT)}let Oe={[Kh]:s.ZERO,[Jh]:s.ONE,[$h]:s.SRC_COLOR,[Ya]:s.SRC_ALPHA,[iu]:s.SRC_ALPHA_SATURATE,[tu]:s.DST_COLOR,[Qh]:s.DST_ALPHA,[Zh]:s.ONE_MINUS_SRC_COLOR,[Ka]:s.ONE_MINUS_SRC_ALPHA,[nu]:s.ONE_MINUS_DST_COLOR,[eu]:s.ONE_MINUS_DST_ALPHA,[su]:s.CONSTANT_COLOR,[ru]:s.ONE_MINUS_CONSTANT_COLOR,[au]:s.CONSTANT_ALPHA,[ou]:s.ONE_MINUS_CONSTANT_ALPHA};function he(D,fe,me,Fe,we,pt,ct,Rt,Ot,L){if(D===Zn){d===!0&&(Le(s.BLEND),d=!1);return}if(d===!1&&(Ie(s.BLEND),d=!0),D!==qh){if(D!==M||L!==O){if((_!==vi||T!==vi)&&(s.blendEquation(s.FUNC_ADD),_=vi,T=vi),L)switch(D){case $i:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _c:s.blendFunc(s.ONE,s.ONE);break;case xc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case $i:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _c:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case xc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}A=null,P=null,R=null,G=null,S.set(0,0,0),w=0,M=D,O=L}return}we=we||fe,pt=pt||me,ct=ct||Fe,(fe!==_||we!==T)&&(s.blendEquationSeparate(pe[fe],pe[we]),_=fe,T=we),(me!==A||Fe!==P||pt!==R||ct!==G)&&(s.blendFuncSeparate(Oe[me],Oe[Fe],Oe[pt],Oe[ct]),A=me,P=Fe,R=pt,G=ct),(Rt.equals(S)===!1||Ot!==w)&&(s.blendColor(Rt.r,Rt.g,Rt.b,Ot),S.copy(Rt),w=Ot),M=D,O=!1}function Qe(D,fe){D.side===Zt?Le(s.CULL_FACE):Ie(s.CULL_FACE);let me=D.side===kt;fe&&(me=!me),He(me),D.blending===$i&&D.transparent===!1?he(Zn):he(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),o.setMask(D.colorWrite);let Fe=D.stencilWrite;l.setTest(Fe),Fe&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Y(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ie(s.SAMPLE_ALPHA_TO_COVERAGE):Le(s.SAMPLE_ALPHA_TO_COVERAGE)}function He(D){q!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),q=D)}function E(D){D!==Vh?(Ie(s.CULL_FACE),D!==Q&&(D===bc?s.cullFace(s.BACK):D===Wh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Le(s.CULL_FACE),Q=D}function y(D){D!==I&&(J&&s.lineWidth(D),I=D)}function Y(D,fe,me){D?(Ie(s.POLYGON_OFFSET_FILL),(W!==fe||$!==me)&&(s.polygonOffset(fe,me),W=fe,$=me)):Le(s.POLYGON_OFFSET_FILL)}function oe(D){D?Ie(s.SCISSOR_TEST):Le(s.SCISSOR_TEST)}function ae(D){D===void 0&&(D=s.TEXTURE0+ee-1),C!==D&&(s.activeTexture(D),C=D)}function ce(D,fe,me){me===void 0&&(C===null?me=s.TEXTURE0+ee-1:me=C);let Fe=j[me];Fe===void 0&&(Fe={type:void 0,texture:void 0},j[me]=Fe),(Fe.type!==D||Fe.texture!==fe)&&(C!==me&&(s.activeTexture(me),C=me),s.bindTexture(D,fe||ne[D]),Fe.type=D,Fe.texture=fe)}function Ce(){let D=j[C];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function be(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Be(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Xe(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function je(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ze(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function We(D){le.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),le.copy(D))}function rt(D){xe.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),xe.copy(D))}function bt(D,fe){let me=u.get(fe);me===void 0&&(me=new WeakMap,u.set(fe,me));let Fe=me.get(D);Fe===void 0&&(Fe=s.getUniformBlockIndex(fe,D.name),me.set(D,Fe))}function Ye(D,fe){let Fe=u.get(fe).get(D);h.get(fe)!==Fe&&(s.uniformBlockBinding(fe,Fe,D.__bindingPointIndex),h.set(fe,Fe))}function ue(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},C=null,j={},m={},g=new WeakMap,b=[],p=null,d=!1,M=null,_=null,A=null,P=null,T=null,R=null,G=null,S=new Re(0,0,0),w=0,O=!1,q=null,Q=null,I=null,W=null,$=null,le.set(0,0,s.canvas.width,s.canvas.height),xe.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Ie,disable:Le,bindFramebuffer:Ge,drawBuffers:V,useProgram:St,setBlending:he,setMaterial:Qe,setFlipSided:He,setCullFace:E,setLineWidth:y,setPolygonOffset:Y,setScissorTest:oe,activeTexture:ae,bindTexture:ce,unbindTexture:Ce,compressedTexImage2D:be,compressedTexImage3D:Se,texImage2D:De,texImage3D:Ae,updateUBOMapping:bt,uniformBlockBinding:Ye,texStorage2D:je,texStorage3D:ze,texSubImage2D:Be,texSubImage3D:Xe,compressedTexSubImage2D:ie,compressedTexSubImage3D:et,scissor:We,viewport:rt,reset:ue}}function Vg(s,e,t,n,i,r,a){let o=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,y){return m?new OffscreenCanvas(E,y):Ds("canvas")}function b(E,y,Y,oe){let ae=1;if((E.width>oe||E.height>oe)&&(ae=oe/Math.max(E.width,E.height)),ae<1||y===!0)if(typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&E instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&E instanceof ImageBitmap){let ce=y?Ir:Math.floor,Ce=ce(ae*E.width),be=ce(ae*E.height);u===void 0&&(u=g(Ce,be));let Se=Y?g(Ce,be):u;return Se.width=Ce,Se.height=be,Se.getContext("2d").drawImage(E,0,0,Ce,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Ce+"x"+be+")."),Se}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function p(E){return eo(E.width)&&eo(E.height)}function d(E){return o?!1:E.wrapS!==an||E.wrapT!==an||E.minFilter!==Lt&&E.minFilter!==Kt}function M(E,y){return E.generateMipmaps&&y&&E.minFilter!==Lt&&E.minFilter!==Kt}function _(E){s.generateMipmap(E)}function A(E,y,Y,oe,ae=!1){if(o===!1)return y;if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ce=y;if(y===s.RED&&(Y===s.FLOAT&&(ce=s.R32F),Y===s.HALF_FLOAT&&(ce=s.R16F),Y===s.UNSIGNED_BYTE&&(ce=s.R8)),y===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ce=s.R8UI),Y===s.UNSIGNED_SHORT&&(ce=s.R16UI),Y===s.UNSIGNED_INT&&(ce=s.R32UI),Y===s.BYTE&&(ce=s.R8I),Y===s.SHORT&&(ce=s.R16I),Y===s.INT&&(ce=s.R32I)),y===s.RG&&(Y===s.FLOAT&&(ce=s.RG32F),Y===s.HALF_FLOAT&&(ce=s.RG16F),Y===s.UNSIGNED_BYTE&&(ce=s.RG8)),y===s.RGBA){let Ce=ae?Rr:lt.getTransfer(oe);Y===s.FLOAT&&(ce=s.RGBA32F),Y===s.HALF_FLOAT&&(ce=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(ce=Ce===Mt?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function P(E,y,Y){return M(E,Y)===!0||E.isFramebufferTexture&&E.minFilter!==Lt&&E.minFilter!==Kt?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function T(E){return E===Lt||E===Tr||E===Ts?s.NEAREST:s.LINEAR}function R(E){let y=E.target;y.removeEventListener("dispose",R),S(y),y.isVideoTexture&&h.delete(y)}function G(E){let y=E.target;y.removeEventListener("dispose",G),O(y)}function S(E){let y=n.get(E);if(y.__webglInit===void 0)return;let Y=E.source,oe=f.get(Y);if(oe){let ae=oe[y.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&w(E),Object.keys(oe).length===0&&f.delete(Y)}n.remove(E)}function w(E){let y=n.get(E);s.deleteTexture(y.__webglTexture);let Y=E.source,oe=f.get(Y);delete oe[y.__cacheKey],a.memory.textures--}function O(E){let y=E.texture,Y=n.get(E),oe=n.get(y);if(oe.__webglTexture!==void 0&&(s.deleteTexture(oe.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(Y.__webglFramebuffer[ae]))for(let ce=0;ce<Y.__webglFramebuffer[ae].length;ce++)s.deleteFramebuffer(Y.__webglFramebuffer[ae][ce]);else s.deleteFramebuffer(Y.__webglFramebuffer[ae]);Y.__webglDepthbuffer&&s.deleteRenderbuffer(Y.__webglDepthbuffer[ae])}else{if(Array.isArray(Y.__webglFramebuffer))for(let ae=0;ae<Y.__webglFramebuffer.length;ae++)s.deleteFramebuffer(Y.__webglFramebuffer[ae]);else s.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&s.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let ae=0;ae<Y.__webglColorRenderbuffer.length;ae++)Y.__webglColorRenderbuffer[ae]&&s.deleteRenderbuffer(Y.__webglColorRenderbuffer[ae]);Y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ae=0,ce=y.length;ae<ce;ae++){let Ce=n.get(y[ae]);Ce.__webglTexture&&(s.deleteTexture(Ce.__webglTexture),a.memory.textures--),n.remove(y[ae])}n.remove(y),n.remove(E)}let q=0;function Q(){q=0}function I(){let E=q;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),q+=1,E}function W(E){let y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function $(E,y){let Y=n.get(E);if(E.isVideoTexture&&Qe(E),E.isRenderTargetTexture===!1&&E.version>0&&Y.__version!==E.version){let oe=E.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(Y,E,y);return}}t.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+y)}function ee(E,y){let Y=n.get(E);if(E.version>0&&Y.__version!==E.version){le(Y,E,y);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+y)}function J(E,y){let Y=n.get(E);if(E.version>0&&Y.__version!==E.version){le(Y,E,y);return}t.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+y)}function Z(E,y){let Y=n.get(E);if(E.version>0&&Y.__version!==E.version){xe(Y,E,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+y)}let x={[Ei]:s.REPEAT,[an]:s.CLAMP_TO_EDGE,[Is]:s.MIRRORED_REPEAT},C={[Lt]:s.NEAREST,[Tr]:s.NEAREST_MIPMAP_NEAREST,[Ts]:s.NEAREST_MIPMAP_LINEAR,[Kt]:s.LINEAR,[Po]:s.LINEAR_MIPMAP_NEAREST,[ti]:s.LINEAR_MIPMAP_LINEAR},j={[Uu]:s.NEVER,[Hu]:s.ALWAYS,[Ou]:s.LESS,[bh]:s.LEQUAL,[Fu]:s.EQUAL,[zu]:s.GEQUAL,[ku]:s.GREATER,[Bu]:s.NOTEQUAL};function k(E,y,Y){if(Y?(s.texParameteri(E,s.TEXTURE_WRAP_S,x[y.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,x[y.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,x[y.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,C[y.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,C[y.minFilter])):(s.texParameteri(E,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(E,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(y.wrapS!==an||y.wrapT!==an)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(E,s.TEXTURE_MAG_FILTER,T(y.magFilter)),s.texParameteri(E,s.TEXTURE_MIN_FILTER,T(y.minFilter)),y.minFilter!==Lt&&y.minFilter!==Kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,j[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let oe=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Lt||y.minFilter!==Ts&&y.minFilter!==ti||y.type===Bn&&e.has("OES_texture_float_linear")===!1||o===!1&&y.type===wi&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(s.texParameterf(E,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function B(E,y){let Y=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",R));let oe=y.source,ae=f.get(oe);ae===void 0&&(ae={},f.set(oe,ae));let ce=W(y);if(ce!==E.__cacheKey){ae[ce]===void 0&&(ae[ce]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ae[ce].usedTimes++;let Ce=ae[E.__cacheKey];Ce!==void 0&&(ae[E.__cacheKey].usedTimes--,Ce.usedTimes===0&&w(y)),E.__cacheKey=ce,E.__webglTexture=ae[ce].texture}return Y}function le(E,y,Y){let oe=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(oe=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(oe=s.TEXTURE_3D);let ae=B(E,y),ce=y.source;t.bindTexture(oe,E.__webglTexture,s.TEXTURE0+Y);let Ce=n.get(ce);if(ce.version!==Ce.__version||ae===!0){t.activeTexture(s.TEXTURE0+Y);let be=lt.getPrimaries(lt.workingColorSpace),Se=y.colorSpace===fn?null:lt.getPrimaries(y.colorSpace),Be=y.colorSpace===fn||be===Se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let Xe=d(y)&&p(y.image)===!1,ie=b(y.image,Xe,!1,i.maxTextureSize);ie=He(y,ie);let et=p(ie)||o,je=r.convert(y.format,y.colorSpace),ze=r.convert(y.type),De=A(y.internalFormat,je,ze,y.colorSpace,y.isVideoTexture);k(oe,y,et);let Ae,We=y.mipmaps,rt=o&&y.isVideoTexture!==!0&&De!==fh,bt=Ce.__version===void 0||ae===!0,Ye=P(y,ie,et);if(y.isDepthTexture)De=s.DEPTH_COMPONENT,o?y.type===Bn?De=s.DEPTH_COMPONENT32F:y.type===Jn?De=s.DEPTH_COMPONENT24:y.type===Mi?De=s.DEPTH24_STENCIL8:De=s.DEPTH_COMPONENT16:y.type===Bn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Si&&De===s.DEPTH_COMPONENT&&y.type!==Lo&&y.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Jn,ze=r.convert(y.type)),y.format===ns&&De===s.DEPTH_COMPONENT&&(De=s.DEPTH_STENCIL,y.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Mi,ze=r.convert(y.type))),bt&&(rt?t.texStorage2D(s.TEXTURE_2D,1,De,ie.width,ie.height):t.texImage2D(s.TEXTURE_2D,0,De,ie.width,ie.height,0,je,ze,null));else if(y.isDataTexture)if(We.length>0&&et){rt&&bt&&t.texStorage2D(s.TEXTURE_2D,Ye,De,We[0].width,We[0].height);for(let ue=0,D=We.length;ue<D;ue++)Ae=We[ue],rt?t.texSubImage2D(s.TEXTURE_2D,ue,0,0,Ae.width,Ae.height,je,ze,Ae.data):t.texImage2D(s.TEXTURE_2D,ue,De,Ae.width,Ae.height,0,je,ze,Ae.data);y.generateMipmaps=!1}else rt?(bt&&t.texStorage2D(s.TEXTURE_2D,Ye,De,ie.width,ie.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ie.width,ie.height,je,ze,ie.data)):t.texImage2D(s.TEXTURE_2D,0,De,ie.width,ie.height,0,je,ze,ie.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){rt&&bt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ye,De,We[0].width,We[0].height,ie.depth);for(let ue=0,D=We.length;ue<D;ue++)Ae=We[ue],y.format!==dn?je!==null?rt?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,Ae.width,Ae.height,ie.depth,je,Ae.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ue,De,Ae.width,Ae.height,ie.depth,0,Ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?t.texSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,Ae.width,Ae.height,ie.depth,je,ze,Ae.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ue,De,Ae.width,Ae.height,ie.depth,0,je,ze,Ae.data)}else{rt&&bt&&t.texStorage2D(s.TEXTURE_2D,Ye,De,We[0].width,We[0].height);for(let ue=0,D=We.length;ue<D;ue++)Ae=We[ue],y.format!==dn?je!==null?rt?t.compressedTexSubImage2D(s.TEXTURE_2D,ue,0,0,Ae.width,Ae.height,je,Ae.data):t.compressedTexImage2D(s.TEXTURE_2D,ue,De,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?t.texSubImage2D(s.TEXTURE_2D,ue,0,0,Ae.width,Ae.height,je,ze,Ae.data):t.texImage2D(s.TEXTURE_2D,ue,De,Ae.width,Ae.height,0,je,ze,Ae.data)}else if(y.isDataArrayTexture)rt?(bt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ye,De,ie.width,ie.height,ie.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,je,ze,ie.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,De,ie.width,ie.height,ie.depth,0,je,ze,ie.data);else if(y.isData3DTexture)rt?(bt&&t.texStorage3D(s.TEXTURE_3D,Ye,De,ie.width,ie.height,ie.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,je,ze,ie.data)):t.texImage3D(s.TEXTURE_3D,0,De,ie.width,ie.height,ie.depth,0,je,ze,ie.data);else if(y.isFramebufferTexture){if(bt)if(rt)t.texStorage2D(s.TEXTURE_2D,Ye,De,ie.width,ie.height);else{let ue=ie.width,D=ie.height;for(let fe=0;fe<Ye;fe++)t.texImage2D(s.TEXTURE_2D,fe,De,ue,D,0,je,ze,null),ue>>=1,D>>=1}}else if(We.length>0&&et){rt&&bt&&t.texStorage2D(s.TEXTURE_2D,Ye,De,We[0].width,We[0].height);for(let ue=0,D=We.length;ue<D;ue++)Ae=We[ue],rt?t.texSubImage2D(s.TEXTURE_2D,ue,0,0,je,ze,Ae):t.texImage2D(s.TEXTURE_2D,ue,De,je,ze,Ae);y.generateMipmaps=!1}else rt?(bt&&t.texStorage2D(s.TEXTURE_2D,Ye,De,ie.width,ie.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,je,ze,ie)):t.texImage2D(s.TEXTURE_2D,0,De,je,ze,ie);M(y,et)&&_(oe),Ce.__version=ce.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function xe(E,y,Y){if(y.image.length!==6)return;let oe=B(E,y),ae=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+Y);let ce=n.get(ae);if(ae.version!==ce.__version||oe===!0){t.activeTexture(s.TEXTURE0+Y);let Ce=lt.getPrimaries(lt.workingColorSpace),be=y.colorSpace===fn?null:lt.getPrimaries(y.colorSpace),Se=y.colorSpace===fn||Ce===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let Be=y.isCompressedTexture||y.image[0].isCompressedTexture,Xe=y.image[0]&&y.image[0].isDataTexture,ie=[];for(let ue=0;ue<6;ue++)!Be&&!Xe?ie[ue]=b(y.image[ue],!1,!0,i.maxCubemapSize):ie[ue]=Xe?y.image[ue].image:y.image[ue],ie[ue]=He(y,ie[ue]);let et=ie[0],je=p(et)||o,ze=r.convert(y.format,y.colorSpace),De=r.convert(y.type),Ae=A(y.internalFormat,ze,De,y.colorSpace),We=o&&y.isVideoTexture!==!0,rt=ce.__version===void 0||oe===!0,bt=P(y,et,je);k(s.TEXTURE_CUBE_MAP,y,je);let Ye;if(Be){We&&rt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,bt,Ae,et.width,et.height);for(let ue=0;ue<6;ue++){Ye=ie[ue].mipmaps;for(let D=0;D<Ye.length;D++){let fe=Ye[D];y.format!==dn?ze!==null?We?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D,0,0,fe.width,fe.height,ze,fe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D,Ae,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D,0,0,fe.width,fe.height,ze,De,fe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D,Ae,fe.width,fe.height,0,ze,De,fe.data)}}}else{Ye=y.mipmaps,We&&rt&&(Ye.length>0&&bt++,t.texStorage2D(s.TEXTURE_CUBE_MAP,bt,Ae,ie[0].width,ie[0].height));for(let ue=0;ue<6;ue++)if(Xe){We?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ie[ue].width,ie[ue].height,ze,De,ie[ue].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ae,ie[ue].width,ie[ue].height,0,ze,De,ie[ue].data);for(let D=0;D<Ye.length;D++){let me=Ye[D].image[ue].image;We?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D+1,0,0,me.width,me.height,ze,De,me.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D+1,Ae,me.width,me.height,0,ze,De,me.data)}}else{We?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ze,De,ie[ue]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ae,ze,De,ie[ue]);for(let D=0;D<Ye.length;D++){let fe=Ye[D];We?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D+1,0,0,ze,De,fe.image[ue]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D+1,Ae,ze,De,fe.image[ue])}}}M(y,je)&&_(s.TEXTURE_CUBE_MAP),ce.__version=ae.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Me(E,y,Y,oe,ae,ce){let Ce=r.convert(Y.format,Y.colorSpace),be=r.convert(Y.type),Se=A(Y.internalFormat,Ce,be,Y.colorSpace);if(!n.get(y).__hasExternalTextures){let Xe=Math.max(1,y.width>>ce),ie=Math.max(1,y.height>>ce);ae===s.TEXTURE_3D||ae===s.TEXTURE_2D_ARRAY?t.texImage3D(ae,ce,Se,Xe,ie,y.depth,0,Ce,be,null):t.texImage2D(ae,ce,Se,Xe,ie,0,Ce,be,null)}t.bindFramebuffer(s.FRAMEBUFFER,E),he(y)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,oe,ae,n.get(Y).__webglTexture,0,Oe(y)):(ae===s.TEXTURE_2D||ae>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,oe,ae,n.get(Y).__webglTexture,ce),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ne(E,y,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,E),y.depthBuffer&&!y.stencilBuffer){let oe=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(Y||he(y)){let ae=y.depthTexture;ae&&ae.isDepthTexture&&(ae.type===Bn?oe=s.DEPTH_COMPONENT32F:ae.type===Jn&&(oe=s.DEPTH_COMPONENT24));let ce=Oe(y);he(y)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce,oe,y.width,y.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,oe,y.width,y.height)}else s.renderbufferStorage(s.RENDERBUFFER,oe,y.width,y.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,E)}else if(y.depthBuffer&&y.stencilBuffer){let oe=Oe(y);Y&&he(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,s.DEPTH24_STENCIL8,y.width,y.height):he(y)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,s.DEPTH24_STENCIL8,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,E)}else{let oe=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ae=0;ae<oe.length;ae++){let ce=oe[ae],Ce=r.convert(ce.format,ce.colorSpace),be=r.convert(ce.type),Se=A(ce.internalFormat,Ce,be,ce.colorSpace),Be=Oe(y);Y&&he(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Be,Se,y.width,y.height):he(y)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Be,Se,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Se,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ie(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),$(y.depthTexture,0);let oe=n.get(y.depthTexture).__webglTexture,ae=Oe(y);if(y.depthTexture.format===Si)he(y)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,oe,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,oe,0);else if(y.depthTexture.format===ns)he(y)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,oe,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Le(E){let y=n.get(E),Y=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Ie(y.__webglFramebuffer,E)}else if(Y){y.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[oe]),y.__webglDepthbuffer[oe]=s.createRenderbuffer(),ne(y.__webglDepthbuffer[oe],E,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),ne(y.__webglDepthbuffer,E,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ge(E,y,Y){let oe=n.get(E);y!==void 0&&Me(oe.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&Le(E)}function V(E){let y=E.texture,Y=n.get(E),oe=n.get(y);E.addEventListener("dispose",G),E.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=s.createTexture()),oe.__version=y.version,a.memory.textures++);let ae=E.isWebGLCubeRenderTarget===!0,ce=E.isWebGLMultipleRenderTargets===!0,Ce=p(E)||o;if(ae){Y.__webglFramebuffer=[];for(let be=0;be<6;be++)if(o&&y.mipmaps&&y.mipmaps.length>0){Y.__webglFramebuffer[be]=[];for(let Se=0;Se<y.mipmaps.length;Se++)Y.__webglFramebuffer[be][Se]=s.createFramebuffer()}else Y.__webglFramebuffer[be]=s.createFramebuffer()}else{if(o&&y.mipmaps&&y.mipmaps.length>0){Y.__webglFramebuffer=[];for(let be=0;be<y.mipmaps.length;be++)Y.__webglFramebuffer[be]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(ce)if(i.drawBuffers){let be=E.texture;for(let Se=0,Be=be.length;Se<Be;Se++){let Xe=n.get(be[Se]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&he(E)===!1){let be=ce?y:[y];Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Se=0;Se<be.length;Se++){let Be=be[Se];Y.__webglColorRenderbuffer[Se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[Se]);let Xe=r.convert(Be.format,Be.colorSpace),ie=r.convert(Be.type),et=A(Be.internalFormat,Xe,ie,Be.colorSpace,E.isXRRenderTarget===!0),je=Oe(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,je,et,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,Y.__webglColorRenderbuffer[Se])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),ne(Y.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ae){t.bindTexture(s.TEXTURE_CUBE_MAP,oe.__webglTexture),k(s.TEXTURE_CUBE_MAP,y,Ce);for(let be=0;be<6;be++)if(o&&y.mipmaps&&y.mipmaps.length>0)for(let Se=0;Se<y.mipmaps.length;Se++)Me(Y.__webglFramebuffer[be][Se],E,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Se);else Me(Y.__webglFramebuffer[be],E,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);M(y,Ce)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){let be=E.texture;for(let Se=0,Be=be.length;Se<Be;Se++){let Xe=be[Se],ie=n.get(Xe);t.bindTexture(s.TEXTURE_2D,ie.__webglTexture),k(s.TEXTURE_2D,Xe,Ce),Me(Y.__webglFramebuffer,E,Xe,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,0),M(Xe,Ce)&&_(s.TEXTURE_2D)}t.unbindTexture()}else{let be=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?be=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(be,oe.__webglTexture),k(be,y,Ce),o&&y.mipmaps&&y.mipmaps.length>0)for(let Se=0;Se<y.mipmaps.length;Se++)Me(Y.__webglFramebuffer[Se],E,y,s.COLOR_ATTACHMENT0,be,Se);else Me(Y.__webglFramebuffer,E,y,s.COLOR_ATTACHMENT0,be,0);M(y,Ce)&&_(be),t.unbindTexture()}E.depthBuffer&&Le(E)}function St(E){let y=p(E)||o,Y=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let oe=0,ae=Y.length;oe<ae;oe++){let ce=Y[oe];if(M(ce,y)){let Ce=E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,be=n.get(ce).__webglTexture;t.bindTexture(Ce,be),_(Ce),t.unbindTexture()}}}function pe(E){if(o&&E.samples>0&&he(E)===!1){let y=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],Y=E.width,oe=E.height,ae=s.COLOR_BUFFER_BIT,ce=[],Ce=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=n.get(E),Se=E.isWebGLMultipleRenderTargets===!0;if(Se)for(let Be=0;Be<y.length;Be++)t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Be=0;Be<y.length;Be++){ce.push(s.COLOR_ATTACHMENT0+Be),E.depthBuffer&&ce.push(Ce);let Xe=be.__ignoreDepthValues!==void 0?be.__ignoreDepthValues:!1;if(Xe===!1&&(E.depthBuffer&&(ae|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&(ae|=s.STENCIL_BUFFER_BIT)),Se&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,be.__webglColorRenderbuffer[Be]),Xe===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ce]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ce])),Se){let ie=n.get(y[Be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ie,0)}s.blitFramebuffer(0,0,Y,oe,0,0,Y,oe,ae,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Se)for(let Be=0;Be<y.length;Be++){t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.RENDERBUFFER,be.__webglColorRenderbuffer[Be]);let Xe=n.get(y[Be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.TEXTURE_2D,Xe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}}function Oe(E){return Math.min(i.maxSamples,E.samples)}function he(E){let y=n.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Qe(E){let y=a.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function He(E,y){let Y=E.colorSpace,oe=E.format,ae=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Qa||Y!==Dt&&Y!==fn&&(lt.getTransfer(Y)===Mt?o===!1?e.has("EXT_sRGB")===!0&&oe===dn?(E.format=Qa,E.minFilter=Kt,E.generateMipmaps=!1):y=Dr.sRGBToLinear(y):(oe!==dn||ae!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),y}this.allocateTextureUnit=I,this.resetTextureUnits=Q,this.setTexture2D=$,this.setTexture2DArray=ee,this.setTexture3D=J,this.setTextureCube=Z,this.rebindTextures=Ge,this.setupRenderTarget=V,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=he}function Wg(s,e,t){let n=t.isWebGL2;function i(r,a=fn){let o,c=lt.getTransfer(a);if(r===ei)return s.UNSIGNED_BYTE;if(r===ch)return s.UNSIGNED_SHORT_4_4_4_4;if(r===lh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Su)return s.BYTE;if(r===Au)return s.SHORT;if(r===Lo)return s.UNSIGNED_SHORT;if(r===oh)return s.INT;if(r===Jn)return s.UNSIGNED_INT;if(r===Bn)return s.FLOAT;if(r===wi)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Eu)return s.ALPHA;if(r===dn)return s.RGBA;if(r===wu)return s.LUMINANCE;if(r===Tu)return s.LUMINANCE_ALPHA;if(r===Si)return s.DEPTH_COMPONENT;if(r===ns)return s.DEPTH_STENCIL;if(r===Qa)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Ru)return s.RED;if(r===hh)return s.RED_INTEGER;if(r===Cu)return s.RG;if(r===uh)return s.RG_INTEGER;if(r===dh)return s.RGBA_INTEGER;if(r===ma||r===ga||r===ba||r===_a)if(c===Mt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ma)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ba)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===_a)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ma)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ga)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ba)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===_a)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ac||r===Ec||r===wc||r===Tc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Ac)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ec)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Tc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===fh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Rc||r===Cc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Rc)return c===Mt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Cc)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Pc||r===Lc||r===Ic||r===Dc||r===Nc||r===Uc||r===Oc||r===Fc||r===kc||r===Bc||r===zc||r===Hc||r===Gc||r===Vc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Pc)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Lc)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ic)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Dc)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Nc)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Uc)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Oc)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Fc)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===kc)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bc)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===zc)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Hc)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Gc)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Vc)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xa||r===Wc||r===Xc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===xa)return c===Mt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Pu||r===qc||r===jc||r===Yc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===xa)return o.COMPRESSED_RED_RGTC1_EXT;if(r===qc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===jc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Yc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Mi?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var po=class extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},pn=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xg={type:"move"},Ls=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let p=t.getJointPose(b,n),d=this._getHandJoint(l,b);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xg)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},mo=class extends ni{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,m=null,g=null,b=t.getContextAttributes(),p=null,d=null,M=[],_=[],A=new Je,P=null,T=new wt;T.layers.enable(1),T.viewport=new ot;let R=new wt;R.layers.enable(2),R.viewport=new ot;let G=[T,R],S=new po;S.layers.enable(1),S.layers.enable(2);let w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let B=M[k];return B===void 0&&(B=new Ls,M[k]=B),B.getTargetRaySpace()},this.getControllerGrip=function(k){let B=M[k];return B===void 0&&(B=new Ls,M[k]=B),B.getGripSpace()},this.getHand=function(k){let B=M[k];return B===void 0&&(B=new Ls,M[k]=B),B.getHandSpace()};function q(k){let B=_.indexOf(k.inputSource);if(B===-1)return;let le=M[B];le!==void 0&&(le.update(k.inputSource,k.frame,l||a),le.dispatchEvent({type:k.type,data:k.inputSource}))}function Q(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",Q),i.removeEventListener("inputsourceschange",I);for(let k=0;k<M.length;k++){let B=_[k];B!==null&&(_[k]=null,M[k].disconnect(B))}w=null,O=null,e.setRenderTarget(p),m=null,f=null,u=null,i=null,d=null,j.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",Q),i.addEventListener("inputsourceschange",I),b.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(A),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let B={antialias:i.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,B),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new Qt(m.framebufferWidth,m.framebufferHeight,{format:dn,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let B=null,le=null,xe=null;b.depth&&(xe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,B=b.stencil?ns:Si,le=b.stencil?Mi:Jn);let Me={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(Me),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new Qt(f.textureWidth,f.textureHeight,{format:dn,type:ei,depthTexture:new Gr(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0});let ne=e.properties.get(d);ne.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),j.setContext(i),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function I(k){for(let B=0;B<k.removed.length;B++){let le=k.removed[B],xe=_.indexOf(le);xe>=0&&(_[xe]=null,M[xe].disconnect(le))}for(let B=0;B<k.added.length;B++){let le=k.added[B],xe=_.indexOf(le);if(xe===-1){for(let ne=0;ne<M.length;ne++)if(ne>=_.length){_.push(le),xe=ne;break}else if(_[ne]===null){_[ne]=le,xe=ne;break}if(xe===-1)break}let Me=M[xe];Me&&Me.connect(le)}}let W=new U,$=new U;function ee(k,B,le){W.setFromMatrixPosition(B.matrixWorld),$.setFromMatrixPosition(le.matrixWorld);let xe=W.distanceTo($),Me=B.projectionMatrix.elements,ne=le.projectionMatrix.elements,Ie=Me[14]/(Me[10]-1),Le=Me[14]/(Me[10]+1),Ge=(Me[9]+1)/Me[5],V=(Me[9]-1)/Me[5],St=(Me[8]-1)/Me[0],pe=(ne[8]+1)/ne[0],Oe=Ie*St,he=Ie*pe,Qe=xe/(-St+pe),He=Qe*-St;B.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(He),k.translateZ(Qe),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();let E=Ie+Qe,y=Le+Qe,Y=Oe-He,oe=he+(xe-He),ae=Ge*Le/y*E,ce=V*Le/y*E;k.projectionMatrix.makePerspective(Y,oe,ae,ce,E,y),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function J(k,B){B===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(B.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;S.near=R.near=T.near=k.near,S.far=R.far=T.far=k.far,(w!==S.near||O!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,O=S.far);let B=k.parent,le=S.cameras;J(S,B);for(let xe=0;xe<le.length;xe++)J(le[xe],B);le.length===2?ee(S,T,R):S.projectionMatrix.copy(T.projectionMatrix),Z(k,S,B)};function Z(k,B,le){le===null?k.matrix.copy(B.matrixWorld):(k.matrix.copy(le.matrixWorld),k.matrix.invert(),k.matrix.multiply(B.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(B.projectionMatrix),k.projectionMatrixInverse.copy(B.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=ss*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(k){c=k,f!==null&&(f.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)};let x=null;function C(k,B){if(h=B.getViewerPose(l||a),g=B,h!==null){let le=h.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let xe=!1;le.length!==S.cameras.length&&(S.cameras.length=0,xe=!0);for(let Me=0;Me<le.length;Me++){let ne=le[Me],Ie=null;if(m!==null)Ie=m.getViewport(ne);else{let Ge=u.getViewSubImage(f,ne);Ie=Ge.viewport,Me===0&&(e.setRenderTargetTextures(d,Ge.colorTexture,f.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(d))}let Le=G[Me];Le===void 0&&(Le=new wt,Le.layers.enable(Me),Le.viewport=new ot,G[Me]=Le),Le.matrix.fromArray(ne.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(ne.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Me===0&&(S.matrix.copy(Le.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),xe===!0&&S.cameras.push(Le)}}for(let le=0;le<M.length;le++){let xe=_[le],Me=M[le];xe!==null&&Me!==void 0&&Me.update(xe,B,l||a)}x&&x(k,B),B.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:B}),g=null}let j=new yh;j.setAnimationLoop(C),this.setAnimationLoop=function(k){x=k},this.dispose=function(){}}};function qg(s,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,vh(s)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,M,_,A){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,A)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),b(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?c(p,d,M,_):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===kt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===kt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let M=e.get(d).envMap;if(M&&(p.envMap.value=M,p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;let _=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*_,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,M,_){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*M,p.scale.value=_*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,M){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===kt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function b(p,d){let M=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function jg(s,e,t,n){let i={},r={},a=[],o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,_){let A=_.program;n.uniformBlockBinding(M,A)}function l(M,_){let A=i[M.id];A===void 0&&(g(M),A=h(M),i[M.id]=A,M.addEventListener("dispose",p));let P=_.program;n.updateUBOMapping(M,P);let T=e.render.frame;r[M.id]!==T&&(f(M),r[M.id]=T)}function h(M){let _=u();M.__bindingPointIndex=_;let A=s.createBuffer(),P=M.__size,T=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,P,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,A),A}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let _=i[M.id],A=M.uniforms,P=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let T=0,R=A.length;T<R;T++){let G=Array.isArray(A[T])?A[T]:[A[T]];for(let S=0,w=G.length;S<w;S++){let O=G[S];if(m(O,T,S,P)===!0){let q=O.__offset,Q=Array.isArray(O.value)?O.value:[O.value],I=0;for(let W=0;W<Q.length;W++){let $=Q[W],ee=b($);typeof $=="number"||typeof $=="boolean"?(O.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,q+I,O.__data)):$.isMatrix3?(O.__data[0]=$.elements[0],O.__data[1]=$.elements[1],O.__data[2]=$.elements[2],O.__data[3]=0,O.__data[4]=$.elements[3],O.__data[5]=$.elements[4],O.__data[6]=$.elements[5],O.__data[7]=0,O.__data[8]=$.elements[6],O.__data[9]=$.elements[7],O.__data[10]=$.elements[8],O.__data[11]=0):($.toArray(O.__data,I),I+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,q,O.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(M,_,A,P){let T=M.value,R=_+"_"+A;if(P[R]===void 0)return typeof T=="number"||typeof T=="boolean"?P[R]=T:P[R]=T.clone(),!0;{let G=P[R];if(typeof T=="number"||typeof T=="boolean"){if(G!==T)return P[R]=T,!0}else if(G.equals(T)===!1)return G.copy(T),!0}return!1}function g(M){let _=M.uniforms,A=0,P=16;for(let R=0,G=_.length;R<G;R++){let S=Array.isArray(_[R])?_[R]:[_[R]];for(let w=0,O=S.length;w<O;w++){let q=S[w],Q=Array.isArray(q.value)?q.value:[q.value];for(let I=0,W=Q.length;I<W;I++){let $=Q[I],ee=b($),J=A%P;J!==0&&P-J<ee.boundary&&(A+=P-J),q.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=A,A+=ee.storage}}}let T=A%P;return T>0&&(A+=P-T),M.__size=A,M.__cache={},this}function b(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function p(M){let _=M.target;_.removeEventListener("dispose",p);let A=a.indexOf(_.__bindingPointIndex);a.splice(A,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function d(){for(let M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:c,update:l,dispose:d}}var Us=class{constructor(e={}){let{canvas:t=nd(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;let m=new Uint32Array(4),g=new Int32Array(4),b=null,p=null,d=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vt,this._useLegacyLights=!1,this.toneMapping=Qn,this.toneMappingExposure=1;let _=this,A=!1,P=0,T=0,R=null,G=-1,S=null,w=new ot,O=new ot,q=null,Q=new Re(0),I=0,W=t.width,$=t.height,ee=1,J=null,Z=null,x=new ot(0,0,W,$),C=new ot(0,0,W,$),j=!1,k=new Ns,B=!1,le=!1,xe=null,Me=new Ve,ne=new Je,Ie=new U,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ge(){return R===null?ee:1}let V=n;function St(v,N){for(let z=0;z<v.length;z++){let F=v[z],H=t.getContext(F,N);if(H!==null)return H}return null}try{let v={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",fe,!1),V===null){let N=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&N.shift(),V=St(N,v),V===null)throw St(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let pe,Oe,he,Qe,He,E,y,Y,oe,ae,ce,Ce,be,Se,Be,Xe,ie,et,je,ze,De,Ae,We,rt;function bt(){pe=new dm(V),Oe=new am(V,pe,e),pe.init(Oe),Ae=new Wg(V,pe,Oe),he=new Gg(V,pe,Oe),Qe=new mm(V),He=new Pg,E=new Vg(V,pe,he,He,Oe,Ae,Qe),y=new cm(_),Y=new um(_),oe=new Md(V,Oe),We=new sm(V,pe,oe,Oe),ae=new fm(V,oe,Qe,We),ce=new xm(V,ae,oe,Qe),je=new _m(V,Oe,E),Xe=new om(He),Ce=new Cg(_,y,Y,pe,Oe,We,Xe),be=new qg(_,He),Se=new Ig,Be=new kg(pe,Oe),et=new im(_,y,Y,he,ce,f,c),ie=new Hg(_,ce,Oe),rt=new jg(V,Qe,Oe,he),ze=new rm(V,pe,Qe,Oe),De=new pm(V,pe,Qe,Oe),Qe.programs=Ce.programs,_.capabilities=Oe,_.extensions=pe,_.properties=He,_.renderLists=Se,_.shadowMap=ie,_.state=he,_.info=Qe}bt();let Ye=new mo(_,V);this.xr=Ye,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let v=pe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=pe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(v){v!==void 0&&(ee=v,this.setSize(W,$,!1))},this.getSize=function(v){return v.set(W,$)},this.setSize=function(v,N,z=!0){if(Ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=v,$=N,t.width=Math.floor(v*ee),t.height=Math.floor(N*ee),z===!0&&(t.style.width=v+"px",t.style.height=N+"px"),this.setViewport(0,0,v,N)},this.getDrawingBufferSize=function(v){return v.set(W*ee,$*ee).floor()},this.setDrawingBufferSize=function(v,N,z){W=v,$=N,ee=z,t.width=Math.floor(v*z),t.height=Math.floor(N*z),this.setViewport(0,0,v,N)},this.getCurrentViewport=function(v){return v.copy(w)},this.getViewport=function(v){return v.copy(x)},this.setViewport=function(v,N,z,F){v.isVector4?x.set(v.x,v.y,v.z,v.w):x.set(v,N,z,F),he.viewport(w.copy(x).multiplyScalar(ee).floor())},this.getScissor=function(v){return v.copy(C)},this.setScissor=function(v,N,z,F){v.isVector4?C.set(v.x,v.y,v.z,v.w):C.set(v,N,z,F),he.scissor(O.copy(C).multiplyScalar(ee).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(v){he.setScissorTest(j=v)},this.setOpaqueSort=function(v){J=v},this.setTransparentSort=function(v){Z=v},this.getClearColor=function(v){return v.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(v=!0,N=!0,z=!0){let F=0;if(v){let H=!1;if(R!==null){let te=R.texture.format;H=te===dh||te===uh||te===hh}if(H){let te=R.texture.type,_e=te===ei||te===Jn||te===Lo||te===Mi||te===ch||te===lh,ve=et.getClearColor(),Te=et.getClearAlpha(),Ne=ve.r,Pe=ve.g,Ue=ve.b;_e?(m[0]=Ne,m[1]=Pe,m[2]=Ue,m[3]=Te,V.clearBufferuiv(V.COLOR,0,m)):(g[0]=Ne,g[1]=Pe,g[2]=Ue,g[3]=Te,V.clearBufferiv(V.COLOR,0,g))}else F|=V.COLOR_BUFFER_BIT}N&&(F|=V.DEPTH_BUFFER_BIT),z&&(F|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),Se.dispose(),Be.dispose(),He.dispose(),y.dispose(),Y.dispose(),ce.dispose(),We.dispose(),rt.dispose(),Ce.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",Ot),Ye.removeEventListener("sessionend",L),xe&&(xe.dispose(),xe=null),X.stop()};function ue(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let v=Qe.autoReset,N=ie.enabled,z=ie.autoUpdate,F=ie.needsUpdate,H=ie.type;bt(),Qe.autoReset=v,ie.enabled=N,ie.autoUpdate=z,ie.needsUpdate=F,ie.type=H}function fe(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function me(v){let N=v.target;N.removeEventListener("dispose",me),Fe(N)}function Fe(v){we(v),He.remove(v)}function we(v){let N=He.get(v).programs;N!==void 0&&(N.forEach(function(z){Ce.releaseProgram(z)}),v.isShaderMaterial&&Ce.releaseShaderCache(v))}this.renderBufferDirect=function(v,N,z,F,H,te){N===null&&(N=Le);let _e=H.isMesh&&H.matrixWorld.determinant()<0,ve=it(v,N,z,F,H);he.setMaterial(F,_e);let Te=z.index,Ne=1;if(F.wireframe===!0){if(Te=ae.getWireframeAttribute(z),Te===void 0)return;Ne=2}let Pe=z.drawRange,Ue=z.attributes.position,st=Pe.start*Ne,Ct=(Pe.start+Pe.count)*Ne;te!==null&&(st=Math.max(st,te.start*Ne),Ct=Math.min(Ct,(te.start+te.count)*Ne)),Te!==null?(st=Math.max(st,0),Ct=Math.min(Ct,Te.count)):Ue!=null&&(st=Math.max(st,0),Ct=Math.min(Ct,Ue.count));let dt=Ct-st;if(dt<0||dt===1/0)return;We.setup(H,F,ve,z,Te);let $t,ft=ze;if(Te!==null&&($t=oe.get(Te),ft=De,ft.setIndex($t)),H.isMesh)F.wireframe===!0?(he.setLineWidth(F.wireframeLinewidth*Ge()),ft.setMode(V.LINES)):ft.setMode(V.TRIANGLES);else if(H.isLine){let qe=F.linewidth;qe===void 0&&(qe=1),he.setLineWidth(qe*Ge()),H.isLineSegments?ft.setMode(V.LINES):H.isLineLoop?ft.setMode(V.LINE_LOOP):ft.setMode(V.LINE_STRIP)}else H.isPoints?ft.setMode(V.POINTS):H.isSprite&&ft.setMode(V.TRIANGLES);if(H.isBatchedMesh)ft.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)ft.renderInstances(st,dt,H.count);else if(z.isInstancedBufferGeometry){let qe=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,di=Math.min(z.instanceCount,qe);ft.renderInstances(st,dt,di)}else ft.render(st,dt)};function pt(v,N,z){v.transparent===!0&&v.side===Zt&&v.forceSinglePass===!1?(v.side=kt,v.needsUpdate=!0,at(v,N,z),v.side=Tn,v.needsUpdate=!0,at(v,N,z),v.side=Zt):at(v,N,z)}this.compile=function(v,N,z=null){z===null&&(z=v),p=Be.get(z),p.init(),M.push(p),z.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),v!==z&&v.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights(_._useLegacyLights);let F=new Set;return v.traverse(function(H){let te=H.material;if(te)if(Array.isArray(te))for(let _e=0;_e<te.length;_e++){let ve=te[_e];pt(ve,z,H),F.add(ve)}else pt(te,z,H),F.add(te)}),M.pop(),p=null,F},this.compileAsync=function(v,N,z=null){let F=this.compile(v,N,z);return new Promise(H=>{function te(){if(F.forEach(function(_e){He.get(_e).currentProgram.isReady()&&F.delete(_e)}),F.size===0){H(v);return}setTimeout(te,10)}pe.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let ct=null;function Rt(v){ct&&ct(v)}function Ot(){X.stop()}function L(){X.start()}let X=new yh;X.setAnimationLoop(Rt),typeof self!="undefined"&&X.setContext(self),this.setAnimationLoop=function(v){ct=v,Ye.setAnimationLoop(v),v===null?X.stop():X.start()},Ye.addEventListener("sessionstart",Ot),Ye.addEventListener("sessionend",L),this.render=function(v,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(N),N=Ye.getCamera()),v.isScene===!0&&v.onBeforeRender(_,v,N,R),p=Be.get(v,M.length),p.init(),M.push(p),Me.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),k.setFromProjectionMatrix(Me),le=this.localClippingEnabled,B=Xe.init(this.clippingPlanes,le),b=Se.get(v,d.length),b.init(),d.push(b),K(v,N,0,_.sortObjects),b.finish(),_.sortObjects===!0&&b.sort(J,Z),this.info.render.frame++,B===!0&&Xe.beginShadows();let z=p.state.shadowsArray;if(ie.render(z,v,N),B===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),et.render(b,v),p.setupLights(_._useLegacyLights),N.isArrayCamera){let F=N.cameras;for(let H=0,te=F.length;H<te;H++){let _e=F[H];re(b,v,_e,_e.viewport)}}else re(b,v,N);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),v.isScene===!0&&v.onAfterRender(_,v,N),We.resetDefaultState(),G=-1,S=null,M.pop(),M.length>0?p=M[M.length-1]:p=null,d.pop(),d.length>0?b=d[d.length-1]:b=null};function K(v,N,z,F){if(v.visible===!1)return;if(v.layers.test(N.layers)){if(v.isGroup)z=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(N);else if(v.isLight)p.pushLight(v),v.castShadow&&p.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||k.intersectsSprite(v)){F&&Ie.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Me);let _e=ce.update(v),ve=v.material;ve.visible&&b.push(v,_e,ve,z,Ie.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||k.intersectsObject(v))){let _e=ce.update(v),ve=v.material;if(F&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ie.copy(v.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ie.copy(_e.boundingSphere.center)),Ie.applyMatrix4(v.matrixWorld).applyMatrix4(Me)),Array.isArray(ve)){let Te=_e.groups;for(let Ne=0,Pe=Te.length;Ne<Pe;Ne++){let Ue=Te[Ne],st=ve[Ue.materialIndex];st&&st.visible&&b.push(v,_e,st,z,Ie.z,Ue)}}else ve.visible&&b.push(v,_e,ve,z,Ie.z,null)}}let te=v.children;for(let _e=0,ve=te.length;_e<ve;_e++)K(te[_e],N,z,F)}function re(v,N,z,F){let H=v.opaque,te=v.transmissive,_e=v.transparent;p.setupLightsView(z),B===!0&&Xe.setGlobalState(_.clippingPlanes,z),te.length>0&&ge(H,te,N,z),F&&he.viewport(w.copy(F)),H.length>0&&ye(H,N,z),te.length>0&&ye(te,N,z),_e.length>0&&ye(_e,N,z),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function ge(v,N,z,F){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;let te=Oe.isWebGL2;xe===null&&(xe=new Qt(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")?wi:ei,minFilter:ti,samples:te?4:0})),_.getDrawingBufferSize(ne),te?xe.setSize(ne.x,ne.y):xe.setSize(Ir(ne.x),Ir(ne.y));let _e=_.getRenderTarget();_.setRenderTarget(xe),_.getClearColor(Q),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear();let ve=_.toneMapping;_.toneMapping=Qn,ye(v,z,F),E.updateMultisampleRenderTarget(xe),E.updateRenderTargetMipmap(xe);let Te=!1;for(let Ne=0,Pe=N.length;Ne<Pe;Ne++){let Ue=N[Ne],st=Ue.object,Ct=Ue.geometry,dt=Ue.material,$t=Ue.group;if(dt.side===Zt&&st.layers.test(F.layers)){let ft=dt.side;dt.side=kt,dt.needsUpdate=!0,ke(st,z,F,Ct,dt,$t),dt.side=ft,dt.needsUpdate=!0,Te=!0}}Te===!0&&(E.updateMultisampleRenderTarget(xe),E.updateRenderTargetMipmap(xe)),_.setRenderTarget(_e),_.setClearColor(Q,I),_.toneMapping=ve}function ye(v,N,z){let F=N.isScene===!0?N.overrideMaterial:null;for(let H=0,te=v.length;H<te;H++){let _e=v[H],ve=_e.object,Te=_e.geometry,Ne=F===null?_e.material:F,Pe=_e.group;ve.layers.test(z.layers)&&ke(ve,N,z,Te,Ne,Pe)}}function ke(v,N,z,F,H,te){v.onBeforeRender(_,N,z,F,H,te),v.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),H.onBeforeRender(_,N,z,F,v,te),H.transparent===!0&&H.side===Zt&&H.forceSinglePass===!1?(H.side=kt,H.needsUpdate=!0,_.renderBufferDirect(z,N,F,H,v,te),H.side=Tn,H.needsUpdate=!0,_.renderBufferDirect(z,N,F,H,v,te),H.side=Zt):_.renderBufferDirect(z,N,F,H,v,te),v.onAfterRender(_,N,z,F,H,te)}function at(v,N,z){N.isScene!==!0&&(N=Le);let F=He.get(v),H=p.state.lights,te=p.state.shadowsArray,_e=H.state.version,ve=Ce.getParameters(v,H.state,te,N,z),Te=Ce.getProgramCacheKey(ve),Ne=F.programs;F.environment=v.isMeshStandardMaterial?N.environment:null,F.fog=N.fog,F.envMap=(v.isMeshStandardMaterial?Y:y).get(v.envMap||F.environment),Ne===void 0&&(v.addEventListener("dispose",me),Ne=new Map,F.programs=Ne);let Pe=Ne.get(Te);if(Pe!==void 0){if(F.currentProgram===Pe&&F.lightsStateVersion===_e)return tt(v,ve),Pe}else ve.uniforms=Ce.getUniforms(v),v.onBuild(z,ve,_),v.onBeforeCompile(ve,_),Pe=Ce.acquireProgram(ve,Te),Ne.set(Te,Pe),F.uniforms=ve.uniforms;let Ue=F.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ue.clippingPlanes=Xe.uniform),tt(v,ve),F.needsLights=_t(v),F.lightsStateVersion=_e,F.needsLights&&(Ue.ambientLightColor.value=H.state.ambient,Ue.lightProbe.value=H.state.probe,Ue.directionalLights.value=H.state.directional,Ue.directionalLightShadows.value=H.state.directionalShadow,Ue.spotLights.value=H.state.spot,Ue.spotLightShadows.value=H.state.spotShadow,Ue.rectAreaLights.value=H.state.rectArea,Ue.ltc_1.value=H.state.rectAreaLTC1,Ue.ltc_2.value=H.state.rectAreaLTC2,Ue.pointLights.value=H.state.point,Ue.pointLightShadows.value=H.state.pointShadow,Ue.hemisphereLights.value=H.state.hemi,Ue.directionalShadowMap.value=H.state.directionalShadowMap,Ue.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ue.spotShadowMap.value=H.state.spotShadowMap,Ue.spotLightMatrix.value=H.state.spotLightMatrix,Ue.spotLightMap.value=H.state.spotLightMap,Ue.pointShadowMap.value=H.state.pointShadowMap,Ue.pointShadowMatrix.value=H.state.pointShadowMatrix),F.currentProgram=Pe,F.uniformsList=null,Pe}function $e(v){if(v.uniformsList===null){let N=v.currentProgram.getUniforms();v.uniformsList=Qi.seqWithValue(N.seq,v.uniforms)}return v.uniformsList}function tt(v,N){let z=He.get(v);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function it(v,N,z,F,H){N.isScene!==!0&&(N=Le),E.resetTextureUnits();let te=N.fog,_e=F.isMeshStandardMaterial?N.environment:null,ve=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Dt,Te=(F.isMeshStandardMaterial?Y:y).get(F.envMap||_e),Ne=F.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Pe=!!z.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Ue=!!z.morphAttributes.position,st=!!z.morphAttributes.normal,Ct=!!z.morphAttributes.color,dt=Qn;F.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(dt=_.toneMapping);let $t=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ft=$t!==void 0?$t.length:0,qe=He.get(F),di=p.state.lights;if(B===!0&&(le===!0||v!==S)){let hn=v===S&&F.id===G;Xe.setState(F,v,hn)}let Et=!1;F.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==di.state.version||qe.outputColorSpace!==ve||H.isBatchedMesh&&qe.batching===!1||!H.isBatchedMesh&&qe.batching===!0||H.isInstancedMesh&&qe.instancing===!1||!H.isInstancedMesh&&qe.instancing===!0||H.isSkinnedMesh&&qe.skinning===!1||!H.isSkinnedMesh&&qe.skinning===!0||H.isInstancedMesh&&qe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&qe.instancingColor===!1&&H.instanceColor!==null||qe.envMap!==Te||F.fog===!0&&qe.fog!==te||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Xe.numPlanes||qe.numIntersection!==Xe.numIntersection)||qe.vertexAlphas!==Ne||qe.vertexTangents!==Pe||qe.morphTargets!==Ue||qe.morphNormals!==st||qe.morphColors!==Ct||qe.toneMapping!==dt||Oe.isWebGL2===!0&&qe.morphTargetsCount!==ft)&&(Et=!0):(Et=!0,qe.__version=F.version);let fi=qe.currentProgram;Et===!0&&(fi=at(F,N,H));let mc=!1,xs=!1,da=!1,Gt=fi.getUniforms(),pi=qe.uniforms;if(he.useProgram(fi.program)&&(mc=!0,xs=!0,da=!0),F.id!==G&&(G=F.id,xs=!0),mc||S!==v){Gt.setValue(V,"projectionMatrix",v.projectionMatrix),Gt.setValue(V,"viewMatrix",v.matrixWorldInverse);let hn=Gt.map.cameraPosition;hn!==void 0&&hn.setValue(V,Ie.setFromMatrixPosition(v.matrixWorld)),Oe.logarithmicDepthBuffer&&Gt.setValue(V,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Gt.setValue(V,"isOrthographic",v.isOrthographicCamera===!0),S!==v&&(S=v,xs=!0,da=!0)}if(H.isSkinnedMesh){Gt.setOptional(V,H,"bindMatrix"),Gt.setOptional(V,H,"bindMatrixInverse");let hn=H.skeleton;hn&&(Oe.floatVertexTextures?(hn.boneTexture===null&&hn.computeBoneTexture(),Gt.setValue(V,"boneTexture",hn.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Gt.setOptional(V,H,"batchingTexture"),Gt.setValue(V,"batchingTexture",H._matricesTexture,E));let fa=z.morphAttributes;if((fa.position!==void 0||fa.normal!==void 0||fa.color!==void 0&&Oe.isWebGL2===!0)&&je.update(H,z,fi),(xs||qe.receiveShadow!==H.receiveShadow)&&(qe.receiveShadow=H.receiveShadow,Gt.setValue(V,"receiveShadow",H.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(pi.envMap.value=Te,pi.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),xs&&(Gt.setValue(V,"toneMappingExposure",_.toneMappingExposure),qe.needsLights&&ut(pi,da),te&&F.fog===!0&&be.refreshFogUniforms(pi,te),be.refreshMaterialUniforms(pi,F,ee,$,xe),Qi.upload(V,$e(qe),pi,E)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Qi.upload(V,$e(qe),pi,E),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Gt.setValue(V,"center",H.center),Gt.setValue(V,"modelViewMatrix",H.modelViewMatrix),Gt.setValue(V,"normalMatrix",H.normalMatrix),Gt.setValue(V,"modelMatrix",H.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){let hn=F.uniformsGroups;for(let pa=0,Gh=hn.length;pa<Gh;pa++)if(Oe.isWebGL2){let gc=hn[pa];rt.update(gc,fi),rt.bind(gc,fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fi}function ut(v,N){v.ambientLightColor.needsUpdate=N,v.lightProbe.needsUpdate=N,v.directionalLights.needsUpdate=N,v.directionalLightShadows.needsUpdate=N,v.pointLights.needsUpdate=N,v.pointLightShadows.needsUpdate=N,v.spotLights.needsUpdate=N,v.spotLightShadows.needsUpdate=N,v.rectAreaLights.needsUpdate=N,v.hemisphereLights.needsUpdate=N}function _t(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(v,N,z){He.get(v.texture).__webglTexture=N,He.get(v.depthTexture).__webglTexture=z;let F=He.get(v);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=z===void 0,F.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(v,N){let z=He.get(v);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(v,N=0,z=0){R=v,P=N,T=z;let F=!0,H=null,te=!1,_e=!1;if(v){let Te=He.get(v);Te.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(V.FRAMEBUFFER,null),F=!1):Te.__webglFramebuffer===void 0?E.setupRenderTarget(v):Te.__hasExternalTextures&&E.rebindTextures(v,He.get(v.texture).__webglTexture,He.get(v.depthTexture).__webglTexture);let Ne=v.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(_e=!0);let Pe=He.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Pe[N])?H=Pe[N][z]:H=Pe[N],te=!0):Oe.isWebGL2&&v.samples>0&&E.useMultisampledRTT(v)===!1?H=He.get(v).__webglMultisampledFramebuffer:Array.isArray(Pe)?H=Pe[z]:H=Pe,w.copy(v.viewport),O.copy(v.scissor),q=v.scissorTest}else w.copy(x).multiplyScalar(ee).floor(),O.copy(C).multiplyScalar(ee).floor(),q=j;if(he.bindFramebuffer(V.FRAMEBUFFER,H)&&Oe.drawBuffers&&F&&he.drawBuffers(v,H),he.viewport(w),he.scissor(O),he.setScissorTest(q),te){let Te=He.get(v.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+N,Te.__webglTexture,z)}else if(_e){let Te=He.get(v.texture),Ne=N||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Te.__webglTexture,z||0,Ne)}G=-1},this.readRenderTargetPixels=function(v,N,z,F,H,te,_e){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=He.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_e!==void 0&&(ve=ve[_e]),ve){he.bindFramebuffer(V.FRAMEBUFFER,ve);try{let Te=v.texture,Ne=Te.format,Pe=Te.type;if(Ne!==dn&&Ae.convert(Ne)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ue=Pe===wi&&(pe.has("EXT_color_buffer_half_float")||Oe.isWebGL2&&pe.has("EXT_color_buffer_float"));if(Pe!==ei&&Ae.convert(Pe)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===Bn&&(Oe.isWebGL2||pe.has("OES_texture_float")||pe.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=v.width-F&&z>=0&&z<=v.height-H&&V.readPixels(N,z,F,H,Ae.convert(Ne),Ae.convert(Pe),te)}finally{let Te=R!==null?He.get(R).__webglFramebuffer:null;he.bindFramebuffer(V.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(v,N,z=0){let F=Math.pow(2,-z),H=Math.floor(N.image.width*F),te=Math.floor(N.image.height*F);E.setTexture2D(N,0),V.copyTexSubImage2D(V.TEXTURE_2D,z,0,0,v.x,v.y,H,te),he.unbindTexture()},this.copyTextureToTexture=function(v,N,z,F=0){let H=N.image.width,te=N.image.height,_e=Ae.convert(z.format),ve=Ae.convert(z.type);E.setTexture2D(z,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,z.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,z.unpackAlignment),N.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,F,v.x,v.y,H,te,_e,ve,N.image.data):N.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,F,v.x,v.y,N.mipmaps[0].width,N.mipmaps[0].height,_e,N.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,F,v.x,v.y,_e,ve,N.image),F===0&&z.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),he.unbindTexture()},this.copyTextureToTexture3D=function(v,N,z,F,H=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let te=v.max.x-v.min.x+1,_e=v.max.y-v.min.y+1,ve=v.max.z-v.min.z+1,Te=Ae.convert(F.format),Ne=Ae.convert(F.type),Pe;if(F.isData3DTexture)E.setTexture3D(F,0),Pe=V.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)E.setTexture2DArray(F,0),Pe=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,F.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,F.unpackAlignment);let Ue=V.getParameter(V.UNPACK_ROW_LENGTH),st=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Ct=V.getParameter(V.UNPACK_SKIP_PIXELS),dt=V.getParameter(V.UNPACK_SKIP_ROWS),$t=V.getParameter(V.UNPACK_SKIP_IMAGES),ft=z.isCompressedTexture?z.mipmaps[H]:z.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,ft.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ft.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,v.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,v.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,v.min.z),z.isDataTexture||z.isData3DTexture?V.texSubImage3D(Pe,H,N.x,N.y,N.z,te,_e,ve,Te,Ne,ft.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Pe,H,N.x,N.y,N.z,te,_e,ve,Te,ft.data)):V.texSubImage3D(Pe,H,N.x,N.y,N.z,te,_e,ve,Te,Ne,ft),V.pixelStorei(V.UNPACK_ROW_LENGTH,Ue),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,st),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ct),V.pixelStorei(V.UNPACK_SKIP_ROWS,dt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,$t),H===0&&F.generateMipmaps&&V.generateMipmap(Pe),he.unbindTexture()},this.initTexture=function(v){v.isCubeTexture?E.setTextureCube(v,0):v.isData3DTexture?E.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?E.setTexture2DArray(v,0):E.setTexture2D(v,0),he.unbindTexture()},this.resetState=function(){P=0,T=0,R=null,he.reset(),We.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Io?"display-p3":"srgb",t.unpackColorSpace=lt.workingColorSpace===ra?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===vt?Ai:mh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ai?vt:Dt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},go=class extends Us{};go.prototype.isWebGL1Renderer=!0;var ls=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Os=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Za,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},jt=new U,Fs=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var kl=new U,Bl=new ot,zl=new ot,Yg=new U,Hl=new Ve,vr=new U,Va=new on,Gl=new Ve,Wa=new rs,Vr=class extends gt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Sc,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new tn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,vr),this.boundingBox.expandByPoint(vr)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new on),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,vr),this.boundingSphere.expandByPoint(vr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Va.copy(this.boundingSphere),Va.applyMatrix4(i),e.ray.intersectsSphere(Va)!==!1&&(Gl.copy(i).invert(),Wa.copy(e.ray).applyMatrix4(Gl),!(this.boundingBox!==null&&Wa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Wa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ot,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Sc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Mu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Bl.fromBufferAttribute(i.attributes.skinIndex,e),zl.fromBufferAttribute(i.attributes.skinWeight,e),kl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=zl.getComponent(r);if(a!==0){let o=Bl.getComponent(r);Hl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Yg.copy(kl).applyMatrix4(Hl),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},ks=class extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}},Bs=class extends Ht{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Lt,h=Lt,u,f){super(null,a,o,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Vl=new Ve,Kg=new Ve,Wr=class s{constructor(e=[],t=[]){this.uuid=yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Kg;Vl.multiplyMatrices(o,t[r]),Vl.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Bs(t,e,e,dn,Bn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new ks),this.bones.push(a),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Ci=class extends It{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ji=new Ve,Wl=new Ve,yr=[],Xl=new tn,Jg=new Ve,As=new gt,Es=new on,Xr=class extends gt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ci(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Jg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new tn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ji),Xl.copy(e.boundingBox).applyMatrix4(ji),this.boundingBox.union(Xl)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new on),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ji),Es.copy(e.boundingSphere).applyMatrix4(ji),this.boundingSphere.union(Es)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(As.geometry=this.geometry,As.material=this.material,As.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Es.copy(this.boundingSphere),Es.applyMatrix4(n),e.ray.intersectsSphere(Es)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ji),Wl.multiplyMatrices(n,ji),As.matrixWorld=Wl,As.raycast(e,yr);for(let a=0,o=yr.length;a<o;a++){let c=yr[a];c.instanceId=r,c.object=this,t.push(c)}yr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ci(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var zs=class extends cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ql=new U,jl=new U,Yl=new Ve,Xa=new rs,Mr=new on,hs=class extends At{constructor(e=new qt,t=new zs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ql.fromBufferAttribute(t,i-1),jl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ql.distanceTo(jl);e.setAttribute("lineDistance",new Tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(i),Mr.radius+=r,e.ray.intersectsSphere(Mr)===!1)return;Yl.copy(i).invert(),Xa.copy(e.ray).applyMatrix4(Yl);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new U,h=new U,u=new U,f=new U,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){let d=Math.max(0,a.start),M=Math.min(g.count,a.start+a.count);for(let _=d,A=M-1;_<A;_+=m){let P=g.getX(_),T=g.getX(_+1);if(l.fromBufferAttribute(p,P),h.fromBufferAttribute(p,T),Xa.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let G=e.ray.origin.distanceTo(f);G<e.near||G>e.far||t.push({distance:G,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let d=Math.max(0,a.start),M=Math.min(p.count,a.start+a.count);for(let _=d,A=M-1;_<A;_+=m){if(l.fromBufferAttribute(p,_),h.fromBufferAttribute(p,_+1),Xa.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let T=e.ray.origin.distanceTo(f);T<e.near||T>e.far||t.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Kl=new U,Jl=new U,qr=class extends hs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Kl.fromBufferAttribute(t,i),Jl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Kl.distanceTo(Jl);e.setAttribute("lineDistance",new Tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},jr=class extends hs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Hs=class extends cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$l=new Ve,bo=new rs,Sr=new on,Ar=new U,Yr=class extends At{constructor(e=new qt,t=new Hs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(i),Sr.radius+=r,e.ray.intersectsSphere(Sr)===!1)return;$l.copy(i).invert(),bo.copy(e.ray).applyMatrix4($l);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let g=f,b=m;g<b;g++){let p=l.getX(g);Ar.fromBufferAttribute(u,p),Zl(Ar,p,c,i,e,t,this)}}else{let f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let g=f,b=m;g<b;g++)Ar.fromBufferAttribute(u,g),Zl(Ar,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Zl(s,e,t,n,i,r,a){let o=bo.distanceSqToPoint(s);if(o<t){let c=new U;bo.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}var Gs=class extends Ht{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var us=class s extends qt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new U,h=new Je;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let m=n+u/t*i;l.x=e*Math.cos(m),l.y=e*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Tt(a,3)),this.setAttribute("normal",new Tt(o,3)),this.setAttribute("uv",new Tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Vs=class s extends qt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],m=[],g=0,b=[],p=n/2,d=0;M(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Tt(u,3)),this.setAttribute("normal",new Tt(f,3)),this.setAttribute("uv",new Tt(m,2));function M(){let A=new U,P=new U,T=0,R=(t-e)/n;for(let G=0;G<=r;G++){let S=[],w=G/r,O=w*(t-e)+e;for(let q=0;q<=i;q++){let Q=q/i,I=Q*c+o,W=Math.sin(I),$=Math.cos(I);P.x=O*W,P.y=-w*n+p,P.z=O*$,u.push(P.x,P.y,P.z),A.set(W,R,$).normalize(),f.push(A.x,A.y,A.z),m.push(Q,1-w),S.push(g++)}b.push(S)}for(let G=0;G<i;G++)for(let S=0;S<r;S++){let w=b[S][G],O=b[S+1][G],q=b[S+1][G+1],Q=b[S][G+1];h.push(w,O,Q),h.push(O,q,Q),T+=6}l.addGroup(d,T,0),d+=T}function _(A){let P=g,T=new Je,R=new U,G=0,S=A===!0?e:t,w=A===!0?1:-1;for(let q=1;q<=i;q++)u.push(0,p*w,0),f.push(0,w,0),m.push(.5,.5),g++;let O=g;for(let q=0;q<=i;q++){let I=q/i*c+o,W=Math.cos(I),$=Math.sin(I);R.x=S*$,R.y=p*w,R.z=S*W,u.push(R.x,R.y,R.z),f.push(0,w,0),T.x=W*.5+.5,T.y=$*.5*w+.5,m.push(T.x,T.y),g++}for(let q=0;q<i;q++){let Q=P+q,I=O+q;A===!0?h.push(I,I+1,Q):h.push(I+1,I,Q),G+=3}l.addGroup(d,G,A===!0?1:2),d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ii=class extends cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gh,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},zt=class extends ii{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Er(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function $g(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Zg(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ql(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function Th(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var si=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},_o=class extends si{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kc,endingEnd:Kc}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Jc:r=e,o=2*t-n;break;case $c:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Jc:a=e,c=2*n-t;break;case $c:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),b=g*g,p=b*g,d=-f*p+2*f*b-f*g,M=(1+f)*p+(-1.5-2*f)*b+(-.5+f)*g+1,_=(-1-m)*p+(1.5+m)*b+.5*g,A=m*p-m*b;for(let P=0;P!==o;++P)r[P]=d*a[h+P]+M*a[l+P]+_*a[c+P]+A*a[u+P];return r}},xo=class extends si{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*h;return r}},vo=class extends si{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},mn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Er(t,this.TimeBufferType),this.values=Er(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Er(e.times,Array),values:Er(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _o(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case is:t=this.InterpolantFactoryMethodDiscrete;break;case Ti:t=this.InterpolantFactoryMethodLinear;break;case va:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return is;case this.InterpolantFactoryMethodLinear:return Ti;case this.InterpolantFactoryMethodSmooth:return va}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&$g(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===va,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let u=o*n,f=u-n,m=u+n;for(let g=0;g!==n;++g){let b=t[u+g];if(b!==t[f+g]||b!==t[m+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let m=0;m!==n;++m)t[f+m]=t[u+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=Ti;var ri=class extends mn{};ri.prototype.ValueTypeName="bool";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=is;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Kr=class extends mn{};Kr.prototype.ValueTypeName="color";var Hn=class extends mn{};Hn.prototype.ValueTypeName="number";var yo=class extends si{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)en.slerpFlat(r,0,a,l-o,a,l,c);return r}},Cn=class extends mn{InterpolantFactoryMethodLinear(e){return new yo(this.times,this.values,this.getValueSize(),e)}};Cn.prototype.ValueTypeName="quaternion";Cn.prototype.DefaultInterpolation=Ti;Cn.prototype.InterpolantFactoryMethodSmooth=void 0;var ai=class extends mn{};ai.prototype.ValueTypeName="string";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=is;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Gn=class extends mn{};Gn.prototype.ValueTypeName="vector";var Jr=class{constructor(e,t=-1,n,i=Lu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=yn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(eb(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(mn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=Zg(c);c=Ql(c,1,h),l=Ql(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Hn(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,m,g,b){if(m.length!==0){let p=[],d=[];Th(m,p,d,g),p.length!==0&&b.push(new u(f,p,d))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let m={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let b=0;b<f[g].morphTargets.length;b++)m[f[g].morphTargets[b]]=-1;for(let b in m){let p=[],d=[];for(let M=0;M!==f[g].morphTargets.length;++M){let _=f[g];p.push(_.time),d.push(_.morphTarget===b?1:0)}i.push(new Hn(".morphTargetInfluence["+b+"]",p,d))}c=m.length*a}else{let m=".bones["+t[u].name+"]";n(Gn,m+".position",f,"pos",i),n(Cn,m+".quaternion",f,"rot",i),n(Gn,m+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Qg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Hn;case"vector":case"vector2":case"vector3":case"vector4":return Gn;case"color":return Kr;case"quaternion":return Cn;case"bool":case"boolean":return ri;case"string":return ai}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function eb(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Qg(s.type);if(s.times===void 0){let t=[],n=[];Th(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var $n={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Mo=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},tb=new Mo,Vn=class{constructor(e){this.manager=e!==void 0?e:tb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Vn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fn={},So=class extends Error{constructor(e,t){super(e),this.response=t}},Ws=class extends Vn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=$n.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Fn[e]!==void 0){Fn[e].push({onLoad:t,onProgress:n,onError:i});return}Fn[e]=[],Fn[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;let h=Fn[e],u=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=f?parseInt(f):0,g=m!==0,b=0,p=new ReadableStream({start(d){M();function M(){u.read().then(({done:_,value:A})=>{if(_)d.close();else{b+=A.byteLength;let P=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:m});for(let T=0,R=h.length;T<R;T++){let G=h[T];G.onProgress&&G.onProgress(P)}d.enqueue(A),M()}})}}});return new Response(p)}else throw new So(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(f);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{$n.add(e,l);let h=Fn[e];delete Fn[e];for(let u=0,f=h.length;u<f;u++){let m=h[u];m.onLoad&&m.onLoad(l)}}).catch(l=>{let h=Fn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Fn[e];for(let u=0,f=h.length;u<f;u++){let m=h[u];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Ao=class extends Vn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=$n.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Ds("img");function c(){h(),$n.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var $r=class extends Vn{constructor(e){super(e)}load(e,t,n,i){let r=new Ht,a=new Ao(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},ds=class extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Zr=class extends ds{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},qa=new Ve,eh=new U,th=new U,Xs=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ns,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;eh.setFromMatrixPosition(e.matrixWorld),t.position.copy(eh),th.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(th),t.updateMatrixWorld(),qa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Eo=class extends Xs{constructor(){super(new wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=ss*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Qr=class extends ds{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Eo}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},nh=new Ve,ws=new U,ja=new U,wo=class extends Xs{constructor(){super(new wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ws.setFromMatrixPosition(e.matrixWorld),n.position.copy(ws),ja.copy(n.position),ja.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ja),n.updateMatrixWorld(),i.makeTranslation(-ws.x,-ws.y,-ws.z),nh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nh)}},ea=class extends ds{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new wo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},To=class extends Xs{constructor(){super(new Rn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fs=class extends ds{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new To}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var oi=class{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ta=class extends Vn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=$n.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return $n.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),$n.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});$n.add(e,c),r.manager.itemStart(e)}};var na=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ih(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=ih();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function ih(){return(typeof performance=="undefined"?Date:performance).now()}var Oo="\\[\\]\\.:\\/",nb=new RegExp("["+Oo+"]","g"),Fo="[^"+Oo+"]",ib="[^"+Oo.replace("\\.","")+"]",sb=/((?:WC+[\/:])*)/.source.replace("WC",Fo),rb=/(WCOD+)?/.source.replace("WCOD",ib),ab=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fo),ob=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fo),cb=new RegExp("^"+sb+rb+ab+ob+"$"),lb=["material","materials","bones","map"],Ro=class{constructor(e,t,n){let i=n||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},xt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(nb,"")}static parseTrackName(e){let t=cb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);lb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=Ro;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wb=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");function ko(s,e){if(e===ph)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===qs||e===sa){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===qs)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var oa=class extends Vn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Xo(t)}),this.register(function(t){return new ec(t)}),this.register(function(t){return new tc(t)}),this.register(function(t){return new nc(t)}),this.register(function(t){return new jo(t)}),this.register(function(t){return new Yo(t)}),this.register(function(t){return new Ko(t)}),this.register(function(t){return new Jo(t)}),this.register(function(t){return new Wo(t)}),this.register(function(t){return new $o(t)}),this.register(function(t){return new qo(t)}),this.register(function(t){return new Qo(t)}),this.register(function(t){return new Zo(t)}),this.register(function(t){return new Go(t)}),this.register(function(t){return new ic(t)}),this.register(function(t){return new sc(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=oi.extractUrlBase(e);a=oi.resolveURL(l,this.path)}else a=oi.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Ws(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Ih){try{a[nt.KHR_BINARY_GLTF]=new rc(e)}catch(u){i&&i(u);return}r=JSON.parse(a[nt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new dc(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case nt.KHR_MATERIALS_UNLIT:a[u]=new Vo;break;case nt.KHR_DRACO_MESH_COMPRESSION:a[u]=new ac(r,this.dracoLoader);break;case nt.KHR_TEXTURE_TRANSFORM:a[u]=new oc;break;case nt.KHR_MESH_QUANTIZATION:a[u]=new cc;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function ub(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var nt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Go=class{constructor(e){this.parser=e,this.name=nt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Re(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Dt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new fs(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ea(h),l.distance=u;break;case"spot":l=new Qr(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,li(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Vo=class{constructor(){this.name=nt.KHR_MATERIALS_UNLIT}getMaterialType(){return Bt}extendParams(e,t,n){let i=[];e.color=new Re(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Dt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,vt))}return Promise.all(i)}},Wo=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Xo=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Je(o,o)}return Promise.all(r)}},qo=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},jo=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Dt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,vt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Yo=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Ko=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(o[0],o[1],o[2],Dt),Promise.all(r)}},Jo=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},$o=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(o[0],o[1],o[2],Dt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,vt)),Promise.all(r)}},Zo=class{constructor(e){this.parser=e,this.name=nt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Qo=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},ec=class{constructor(e){this.parser=e,this.name=nt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},tc=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},nc=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ic=class{constructor(e){this.name=nt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(m){return m.buffer}):a.ready.then(function(){let m=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(m),h,u,f,i.mode,i.filter),m})})}else return null}},sc=class{constructor(e){this.name=nt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==gn.TRIANGLES&&l.mode!==gn.TRIANGLE_STRIP&&l.mode!==gn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,m=[];for(let g of u){let b=new Ve,p=new U,d=new en,M=new U(1,1,1),_=new Xr(g.geometry,g.material,f);for(let A=0;A<f;A++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,A),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,A),c.SCALE&&M.fromBufferAttribute(c.SCALE,A),_.setMatrixAt(A,b.compose(p,d,M));for(let A in c)if(A==="_COLOR_0"){let P=c[A];_.instanceColor=new Ci(P.array,P.itemSize,P.normalized)}else A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"&&g.geometry.setAttribute(A,c[A]);At.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),m.push(_)}return h.isGroup?(h.clear(),h.add(...m),h):m[0]}))}},Ih="glTF",Ys=12,Rh={JSON:1313821514,BIN:5130562},rc=class{constructor(e){this.name=nt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ys),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ih)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ys,r=new DataView(e,Ys),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Rh.JSON){let l=new Uint8Array(e,Ys+a,o);this.content=n.decode(l)}else if(c===Rh.BIN){let l=Ys+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ac=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=nt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=hc[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=hc[h]||h.toLowerCase();if(a[h]!==void 0){let f=n.accessors[e.attributes[h]],m=ms[f.componentType];l[u]=m.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(m){for(let g in m.attributes){let b=m.attributes[g],p=c[g];p!==void 0&&(b.normalized=p)}u(m)},o,l,Dt,f)})})}},oc=class{constructor(){this.name=nt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},cc=class{constructor(){this.name=nt.KHR_MESH_QUANTIZATION}},ca=class extends si{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,f=u*u,m=f*u,g=e*l,b=g-l,p=-2*m+3*f,d=m-f,M=1-p,_=d-f+u;for(let A=0;A!==o;A++){let P=a[b+A+o],T=a[b+A+c]*h,R=a[g+A+o],G=a[g+A]*h;r[A]=M*P+_*T+p*R+d*G}return r}},db=new en,lc=class extends ca{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return db.fromArray(r).normalize().toArray(r),r}},gn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ms={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ch={9728:Lt,9729:Kt,9984:Tr,9985:Po,9986:Ts,9987:ti},Ph={33071:an,33648:Is,10497:Ei},Bo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},hc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ci={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},fb={CUBICSPLINE:void 0,LINEAR:Ti,STEP:is},zo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function pb(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ii({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Tn})),s.DefaultMaterial}function Pi(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function li(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function mb(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function gb(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function bb(s){let e,t=s.extensions&&s.extensions[nt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ho(t.attributes):e=s.indices+":"+Ho(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Ho(s.targets[n]);return e}function Ho(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function uc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function _b(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var xb=new Ve,dc=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ub,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator!="undefined"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap=="undefined"||n||i&&r<98?this.textureLoader=new $r(this.options.manager):this.textureLoader=new ta(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ws(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Pi(r,o,i),li(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[nt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(oi.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Bo[i.type],o=ms[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new It(l,a,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Bo[i.type],l=ms[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,b,p;if(m&&m!==u){let d=Math.floor(f/m),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+d+":"+i.count,_=t.cache.get(M);_||(b=new l(o,d*m,i.count*m/h),_=new Os(b,m/h),t.cache.add(M,_)),p=new Fs(_,c,f%m/h,g)}else o===null?b=new l(i.count*c):b=new l(o,f,i.count*c),p=new It(b,c,g);if(i.sparse!==void 0){let d=Bo.SCALAR,M=ms[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,A=i.sparse.values.byteOffset||0,P=new M(a[1],_,i.sparse.count*d),T=new l(a[2],A,i.sparse.count*c);o!==null&&(p=new It(p.array.slice(),p.itemSize,p.normalized));for(let R=0,G=P.length;R<G;R++){let S=P[R];if(p.setX(S,T[R*c]),c>=2&&p.setY(S,T[R*c+1]),c>=3&&p.setZ(S,T[R*c+2]),c>=4&&p.setW(S,T[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return h.magFilter=Ch[f.magFilter]||Kt,h.minFilter=Ch[f.minFilter]||ti,h.wrapS=Ph[f.wrapS]||Ei,h.wrapT=Ph[f.wrapT]||Ei,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,m){let g=f;t.isImageBitmapLoader===!0&&(g=function(b){let p=new Ht(b);p.needsUpdate=!0,f(p)}),t.load(oi.resolveURL(u,r.path),g,void 0,m)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),u.userData.mimeType=a.mimeType||_b(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[nt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[nt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[nt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Hs,cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new zs,cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ii}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[nt.KHR_MATERIALS_UNLIT]){let u=i[nt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Re(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Dt),o.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,vt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Zt);let h=r.alphaMode||zo.OPAQUE;if(h===zo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===zo.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Bt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Je(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Bt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Bt){let u=r.emissiveFactor;o.emissive=new Re().setRGB(u[0],u[1],u[2],Dt)}return r.emissiveTexture!==void 0&&a!==Bt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,vt)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),li(u,r),t.associations.set(u,{materials:e}),r.extensions&&Pi(i,u,r),u})}createUniqueName(e){let t=xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[nt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Lh(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=bb(l),u=i[h];if(u)a.push(u.promise);else{let f;l.extensions&&l.extensions[nt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Lh(new qt,l,t),i[h]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?pb(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let m=0,g=h.length;m<g;m++){let b=h[m],p=a[m],d,M=l[m];if(p.mode===gn.TRIANGLES||p.mode===gn.TRIANGLE_STRIP||p.mode===gn.TRIANGLE_FAN||p.mode===void 0)d=r.isSkinnedMesh===!0?new Vr(b,M):new gt(b,M),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),p.mode===gn.TRIANGLE_STRIP?d.geometry=ko(d.geometry,sa):p.mode===gn.TRIANGLE_FAN&&(d.geometry=ko(d.geometry,qs));else if(p.mode===gn.LINES)d=new qr(b,M);else if(p.mode===gn.LINE_STRIP)d=new hs(b,M);else if(p.mode===gn.LINE_LOOP)d=new jr(b,M);else if(p.mode===gn.POINTS)d=new Yr(b,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(d.geometry.morphAttributes).length>0&&gb(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),li(d,r),p.extensions&&Pi(i,d,p),t.assignFinalMaterial(d),u.push(d)}for(let m=0,g=u.length;m<g;m++)t.associations.set(u[m],{meshes:e,primitives:m});if(u.length===1)return r.extensions&&Pi(i,u[0],r),u[0];let f=new pn;r.extensions&&Pi(i,f,r),t.associations.set(f,{meshes:e});for(let m=0,g=u.length;m<g;m++)f.add(u[m]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new wt(js.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Rn(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),li(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let f=new Ve;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Wr(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let m=i.channels[u],g=i.samplers[m.sampler],b=m.target,p=b.node,d=i.parameters!==void 0?i.parameters[g.input]:g.input,M=i.parameters!==void 0?i.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",M)),l.push(g),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],m=u[1],g=u[2],b=u[3],p=u[4],d=[];for(let M=0,_=f.length;M<_;M++){let A=f[M],P=m[M],T=g[M],R=b[M],G=p[M];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();let S=n._createAnimationTracks(A,P,T,R,G);if(S)for(let w=0;w<S.length;w++)d.push(S[w])}return new Jr(r,void 0,d)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(m){m.isSkinnedMesh&&m.bind(f,xb)});for(let m=0,g=u.length;m<g;m++)h.add(u[m]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new ks:l.length>1?h=new pn:l.length===1?h=l[0]:h=new At,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),li(h,r),r.extensions&&Pi(n,h,r),r.matrix!==void 0){let u=new Ve;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new pn;n.name&&(r.name=i.createUniqueName(n.name)),li(r,n),n.extensions&&Pi(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,m]of i.associations)(f instanceof cn||f instanceof Ht)&&u.set(f,m);return h.traverse(f=>{let m=i.associations.get(f);m!=null&&u.set(f,m)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,c=[];ci[r.path]===ci.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(o);let l;switch(ci[r.path]){case ci.weights:l=Hn;break;case ci.rotation:l=Cn;break;case ci.position:case ci.scale:l=Gn;break;default:switch(n.itemSize){case 1:l=Hn;break;case 2:case 3:default:l=Gn;break}break}let h=i.interpolation!==void 0?fb[i.interpolation]:Ti,u=this._getArrayFromAccessor(n);for(let f=0,m=c.length;f<m;f++){let g=new l(c[f]+"."+ci[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=uc(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Cn?lc:ca;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function vb(s,e,t){let n=e.attributes,i=new tn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new U(c[0],c[1],c[2]),new U(l[0],l[1],l[2])),o.normalized){let h=uc(ms[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new U,c=new U;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],m=f.min,g=f.max;if(m!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),f.normalized){let b=uc(ms[f.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new on;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Lh(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(let a in n){let o=hc[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return lt.workingColorSpace!==Dt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),li(s,e),vb(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?mb(s,e.targets,t):s})}var Dh=(function(){"use strict";var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:s,r,a=WebAssembly.instantiate(o(i),{}).then(function(d){r=d.instance,r.exports.__wasm_call_ctors()});function o(d){for(var M=new Uint8Array(d.length),_=0;_<d.length;++_){var A=d.charCodeAt(_);M[_]=A>96?A-97:A>64?A-39:A+4}for(var P=0,_=0;_<d.length;++_)M[P++]=M[_]<60?n[M[_]]:(M[_]-60)*64+M[++_];return M.buffer.slice(0,P)}function c(d,M,_,A,P,T){var R=r.exports.sbrk,G=_+3&-4,S=R(G*A),w=R(P.length),O=new Uint8Array(r.exports.memory.buffer);O.set(P,w);var q=d(S,_,A,w,P.length);if(q==0&&T&&T(S,G,A),M.set(O.subarray(S,S+_*A)),R(S-R(0)),q!=0)throw new Error("Malformed buffer data: "+q)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function m(d){var M={object:new Worker(d),pending:0,requests:{}};return M.object.onmessage=function(_){var A=_.data;M.pending-=A.count,M.requests[A.id][A.action](A.value),delete M.requests[A.id]},M}function g(d){for(var M="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+p.toString(),_=new Blob([M],{type:"text/javascript"}),A=URL.createObjectURL(_),P=0;P<d;++P)u[P]=m(A);URL.revokeObjectURL(A)}function b(d,M,_,A,P){for(var T=u[0],R=1;R<u.length;++R)u[R].pending<T.pending&&(T=u[R]);return new Promise(function(G,S){var w=new Uint8Array(_),O=f++;T.pending+=d,T.requests[O]={resolve:G,reject:S},T.object.postMessage({id:O,count:d,size:M,source:w,mode:A,filter:P},[w.buffer])})}function p(d){a.then(function(){var M=d.data;try{var _=new Uint8Array(M.count*M.size);c(r.exports[M.mode],_,M.count,M.size,M.source,r.exports[M.filter]),self.postMessage({id:M.id,count:M.count,action:"resolve",value:_},[_.buffer])}catch(A){self.postMessage({id:M.id,count:M.count,action:"reject",value:A})}})}return{ready:a,supported:!0,useWorkers:function(d){g(d)},decodeVertexBuffer:function(d,M,_,A,P){c(r.exports.meshopt_decodeVertexBuffer,d,M,_,A,r.exports[l[P]])},decodeIndexBuffer:function(d,M,_,A){c(r.exports.meshopt_decodeIndexBuffer,d,M,_,A)},decodeIndexSequence:function(d,M,_,A){c(r.exports.meshopt_decodeIndexSequence,d,M,_,A)},decodeGltfBuffer:function(d,M,_,A,P,T){c(r.exports[h[P]],d,M,_,A,r.exports[l[T]])},decodeGltfBufferAsync:function(d,M,_,A,P){return u.length>0?b(d,M,_,h[A],l[P]):a.then(function(){var T=new Uint8Array(d*M);return c(r.exports[h[A]],T,d,M,_,r.exports[l[P]]),T})}}})();var yb=new Rn(-1,1,1,-1,0,1),fc=class extends qt{constructor(){super(),this.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Tt([0,2,0,0,2,0],2))}},Mb=new fc,la=class{constructor(e){this._mesh=new gt(Mb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,yb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ks=class s extends gt{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new wt;let n=this,i=t.color!==void 0?new Re(t.color):new Re(8355711),r=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,c=t.shader||s.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,h=new vn,u=new U,f=new U,m=new U,g=new Ve,b=new U(0,0,-1),p=new ot,d=new U,M=new U,_=new ot,A=new Ve,P=this.camera,T=new Qt(r,a,{samples:l,type:wi}),R=new nn({name:c.name!==void 0?c.name:"unspecified",uniforms:No.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});R.uniforms.tDiffuse.value=T.texture,R.uniforms.color.value=i,R.uniforms.textureMatrix.value=A,this.material=R,this.onBeforeRender=function(G,S,w){if(f.setFromMatrixPosition(n.matrixWorld),m.setFromMatrixPosition(w.matrixWorld),g.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(g),d.subVectors(f,m),d.dot(u)>0)return;d.reflect(u).negate(),d.add(f),g.extractRotation(w.matrixWorld),b.set(0,0,-1),b.applyMatrix4(g),b.add(m),M.subVectors(f,b),M.reflect(u).negate(),M.add(f),P.position.copy(d),P.up.set(0,1,0),P.up.applyMatrix4(g),P.up.reflect(u),P.lookAt(M),P.far=w.far,P.updateMatrixWorld(),P.projectionMatrix.copy(w.projectionMatrix),A.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),A.multiply(P.projectionMatrix),A.multiply(P.matrixWorldInverse),A.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,f),h.applyMatrix4(P.matrixWorldInverse),p.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let O=P.projectionMatrix;_.x=(Math.sign(p.x)+O.elements[8])/O.elements[0],_.y=(Math.sign(p.y)+O.elements[9])/O.elements[5],_.z=-1,_.w=(1+O.elements[10])/O.elements[14],p.multiplyScalar(2/p.dot(_)),O.elements[2]=p.x,O.elements[6]=p.y,O.elements[10]=p.z+1-o,O.elements[14]=p.w,n.visible=!1;let q=G.getRenderTarget(),Q=G.xr.enabled,I=G.shadowMap.autoUpdate;G.xr.enabled=!1,G.shadowMap.autoUpdate=!1,G.setRenderTarget(T),G.state.buffers.depth.setMask(!0),G.autoClear===!1&&G.clear(),G.render(S,P),G.xr.enabled=Q,G.shadowMap.autoUpdate=I,G.setRenderTarget(q);let W=w.viewport;W!==void 0&&G.state.viewport(W),n.visible=!0},this.getRenderTarget=function(){return T},this.dispose=function(){T.dispose(),n.material.dispose()}}};Ks.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var se=(s,e=document)=>e.querySelector(s),Jt=(s,e=document)=>[...e.querySelectorAll(s)],Mn=document.documentElement,Bh=Mn.lang==="nb"?"no":"en",Ee=(s,e)=>Bh==="no"?e:s,ui=matchMedia("(prefers-reduced-motion: reduce)").matches,gs=window.WRAPPI||{},ua=s=>Math.round(s).toLocaleString(Bh==="no"?"nb-NO":"en-GB"),Sb=s=>"NOK "+ua(s),Nh=s=>`https://wa.me/${gs.wa||"4746361675"}?text=${encodeURIComponent(s)}`,Uh=window.wrToast||(()=>{}),ht={sedan:{type:"sedan",file:"/car-sedan.glb",en:"Tesla Model 3",no:"Tesla Model 3",size:"sedan",ok:!0,credit:{t:"Tesla 2018 Model 3",by:"Ameer Studio",lic:"CC BY 4.0",url:"https://sketchfab.com/3d-models/tesla-2018-model-3-5ef9b845aaf44203b6d04e2c677e444f"}},s90:{type:"sedan",file:"/car-s90.glb",en:"Volvo S90",no:"Volvo S90",size:"sedan",ok:!0,credit:{t:"Volvo S90 Recharge (Free)",by:"lazercar",lic:"CC BY 4.0",url:"https://sketchfab.com/3d-models/volvo-s90-recharge-free-9462b07c10244fd4a28d86846dc9e3a9"}},eclass:{type:"sedan",file:"/car-eclass.glb",en:"Mercedes E-Class",no:"Mercedes E-klasse",size:"sedan",ok:!0,credit:{t:"Mercedes E Class W212",by:"Peter_D",lic:"CC BY 4.0",url:"https://sketchfab.com/3d-models/mercedes-e-class-w212-119c5e10733142b197aa53b86f6aeb04"}},m3:{type:"sedan",file:"/car-m3.glb",en:"BMW M3 Touring",no:"BMW M3 Touring",size:"sedan",ok:!1,credit:{t:"BMW m3 Competition Tourning [g81]",by:"Black Snow",lic:"CC BY 4.0",url:"https://sketchfab.com/models/e2a4d608b2034e639c7eb6a2ef8dbfa1"}},sports:{type:"sports",file:"/car-sports.glb",en:"Porsche 911",no:"Porsche 911",size:"sedan",ok:!0,credit:{t:"(FREE) Porsche 911 Carrera 4S",by:"Karol Miklas",lic:"CC BY-SA 4.0",url:"https://sketchfab.com/3d-models/free-porsche-911-carrera-4s-d01b254483794de3819786d93e0e1ebf"}},gt3:{type:"sports",file:"/car-gt3.glb",en:"Porsche 911 GT3 RS",no:"Porsche 911 GT3 RS",size:"sedan",ok:!1,credit:{t:"Porsche GT3 RS",by:"Black Snow",lic:"CC BY 4.0",url:"https://sketchfab.com/models/e738eae819c34d19a31dd066c45e0f3d"}},r8:{type:"sports",file:"/car-r8.glb",en:"Audi R8",no:"Audi R8",size:"sedan",ok:!0,credit:{t:"Audi R8",by:"wallon",lic:"CC BY 4.0",url:"https://sketchfab.com/3d-models/audi-r8-e17e438f076f4427a58d93aa779edaed"}},suv:{type:"suv",file:"/car-suv.glb",en:"Tesla Model Y",no:"Tesla Model Y",size:"suv",ok:!0,credit:{t:"2021 Tesla Model Y",by:"tonielpro520",lic:"CC BY 4.0",url:"https://sketchfab.com/3d-models/2021-tesla-model-y-59e2ead369984b1a85c800ff6cf6789d"}},rrs:{type:"suv",file:"/car-rrs.glb",en:"Range Rover Sport",no:"Range Rover Sport",size:"suv",ok:!0,credit:{t:"2023 Land Rover Range Rover Sport",by:"tonielpro520",lic:"CC BY 4.0",url:"https://sketchfab.com/3d-models/2023-land-rover-range-rover-sport-7d8bd24688b54c31a05d7b1a1f850145"}}},ha={sedan:{en:"Sedan & estate",no:"Sedan og stasjonsvogn",s:["Sedan","Sedan"]},sports:{en:"Sports car",no:"Sportsbil",s:["Sports car","Sportsbil"]},suv:{en:"SUV",no:"SUV",s:["SUV","SUV"]}};document.querySelectorAll("[data-carcount]").forEach(s=>s.textContent=Object.values(ht).filter(e=>e.ok).length);var bs={gloss:[.3,.06,1,.03,0],metallic:[.34,.62,1,.03,.36],pearl:[.3,.32,1,.03,.18],satin:[.62,.1,.12,.7,0],satinMetal:[.56,.45,.14,.68,.2],matte:[.86,.04,0,1,0],matteMetal:[.7,.45,0,1,.18],chrome:[.05,1,1,.02,0],diamond:[.28,.6,1,.03,.75],brushed:[.38,.85,0,1,.12]},Js={gloss:{en:"Gloss",no:"Blank"},metallic:{en:"Metallic",no:"Metallic"},satin:{en:"Satin",no:"Satin"},matte:{en:"Matte",no:"Matt"},chrome:{en:"Chrome",no:"Krom"}},ln={solid:{id:0,en:"Solid",no:"Ensfarget",pv:"linear-gradient(160deg,#5b5e64,#2b2d31)",acc:0},stripes:{id:1,en:"Twin stripes",no:"Doble striper",pv:"linear-gradient(90deg,#d9dadc 0 30%,#d6343c 30% 44%,#d9dadc 44% 56%,#d6343c 56% 70%,#d9dadc 70%)",acc:1},bands:{id:2,en:"Side bands",no:"Sidestriper",pv:"linear-gradient(180deg,#e9e9e6 0 48%,#4092ce 48% 58%,#173e5f 58% 64%,#d6343c 64% 74%,#e9e9e6 74%)",acc:2},contrast:{id:3,en:"Contrast roof & hood",no:"Kontrast tak og panser",pv:"linear-gradient(180deg,#111214 0 34%,#e3e3e0 34%)",acc:1},split:{id:4,en:"Wrappi split",no:"Wrappi-split",pv:"linear-gradient(110deg,#d6343c 0 46%,#f6f6f4 46% 54%,#4092ce 54%)",acc:2},carbon:{id:5,en:"Carbon",no:"Karbon",pv:"repeating-linear-gradient(45deg,#1b1c1f 0 4px,#2c2e33 4px 8px),#1b1c1f",acc:0},camo:{id:6,en:"Pixel camo",no:"Pikselkamo",pv:"conic-gradient(from 90deg at 30% 40%,#4a5a3a 0 25%,#2b2f2a 0 50%,#7d8a62 0 75%,#2b2f2a 0) 0 0/18px 18px",acc:2},distressed:{id:7,en:"Distressed",no:"Slitt",pv:"radial-gradient(circle at 30% 40%,#5d6066 0 18%,transparent 19%),radial-gradient(circle at 70% 65%,#3f4246 0 14%,transparent 15%),#d8d8d4",acc:1},fade:{id:8,en:"Colour fade",no:"Fargeovergang",pv:"linear-gradient(90deg,#d6343c,#4092ce)",acc:1}},hi=[{k:"taycan",th:"/th-taycan.webp",car:"Porsche Taycan",en:"Teal chrome",no:"Turkis krom",b:{c:"#0fa89c",f:"chrome"}},{k:"urus",th:"/th-urus.webp",car:"Lamborghini Urus",en:"Midnight purple",no:"Midnattslilla",b:{c:"#1d1330",f:"satin",fl:"#4c3290"}},{k:"lime",th:"/th-lime.webp",car:"Tesla Model Y",en:"Lime, gold flip",no:"Lime, gullskimmer",b:{c:"#6cc824",f:"metallic",fl:"#d8c21a"}},{k:"rose",th:"/th-rose.webp",car:"Nissan Leaf",en:"Rose gold satin",no:"Rosegull satin",b:{c:"#c4846a",f:"satinMetal"}},{k:"grey",th:"/th-grey.webp",car:"Tesla Model Y",en:"Satin titanium",no:"Satin titan",b:{c:"#86898e",f:"satinMetal"}},{k:"red",th:"/th-red.webp",car:"Tesla",en:"Satin red",no:"Satin r\xF8d",b:{c:"#a3101a",f:"satin"}},{k:"martini",th:"/th-martini.webp",car:"VW Touareg",en:"Side bands",no:"Sidestriper",b:{c:"#e9e9e6",f:"gloss",s:"bands",a1:"#2f9ad8",a2:"#d6262f"}},{k:"gladiator",th:"/th-gladiator.webp",car:"Jeep Gladiator",en:"White, black roof & hood",no:"Hvit, svart tak og panser",b:{c:"#e4e4e1",f:"satin",s:"contrast",a1:"#121315"}},{k:"bmw",th:"/th-bmw.webp",car:"BMW 3 Series",en:"Twin stripes",no:"Doble striper",b:{c:"#ececea",f:"gloss",s:"stripes",a1:"#111214",a2:"#111214"}}],Ln={silver:{en:"Silver",no:"S\xF8lv",v:["#c7cad0",.95,.26]},gloss:{en:"Gloss black",no:"Blank svart",v:["#0b0c0e",.55,.12]},satin:{en:"Satin black",no:"Satin svart",v:["#1b1c1f",.35,.55]},bronze:{en:"Bronze",no:"Bronse",v:["#8a6a3e",.9,.3]}},pc={red:{en:"Red",no:"R\xF8d",c:"#c41f28"},yellow:{en:"Yellow",no:"Gul",c:"#e6b400"},blue:{en:"Blue",no:"Bl\xE5",c:"#2f6fd6"},black:{en:"Black",no:"Svart",c:"#151618"}},_s={none:{en:"Factory",no:"Fabrikk",v:["#14171c",.7]},t35:{en:"35 %",no:"35 %",v:["#0d0f12",.78]},t20:{en:"20 %",no:"20 %",v:["#08090b",.9]},t5:{en:"5 %",no:"5 %",v:["#040405",.97]}},Pn={front:{en:"Front PPF",no:"Front PPF",s:"ppfFront",c:[["Whole bonnet","Hele panseret"],["Front bumper","Frontfanger"],["Both front wings","Begge forskjermene"],["Both A-pillars","Begge A-stolpene"],["Both side mirrors","Begge sidespeilene"],["Headlights","Frontlyktene"]]},full:{en:"Full car",no:"Hel bil",s:"ppfFull",c:[["Every painted panel","Alle lakkerte paneler"],["Self-healing film all round","Selvhelende film hele veien rundt"],["Up to 10-year warranty","Opptil 10 \xE5rs garanti"],["Also as Color PPF","Ogs\xE5 som farget PPF"]]}},Wn=/^#[0-9a-f]{6}$/i,An=(s,e)=>typeof e=="string"&&Object.prototype.hasOwnProperty.call(s,e),Sn=window.FILMS||{brands:[],finishes:{}},$s=s=>{if(!s)return null;let[e,t]=s.split(":"),n=Sn.brands.find(r=>r.k===e);if(!n)return null;let i=n.list.find(r=>(r[5]||r[0])===t);return i?{brand:n,code:i[0],name:i[1],fin:i[2],c:i[3],fl:i[4]||null}:null},Oh=s=>{let e=Sn.finishes[s.fin]||{};return{c:s.c,f:e.pbr||"gloss",fl:s.fl,s:e.skin||"solid"}},Ab="M58 262C50 245 48 228 56 214C64 200 92 188 140 182L330 168C360 165 380 160 405 150C450 120 500 92 560 84C640 76 720 82 770 100C830 122 880 140 920 150C945 156 955 168 955 190L952 238C950 256 940 266 920 268L850 268A60 60 0 0 0 730 268L270 268A60 60 0 0 0 150 268L80 268C68 268 60 266 58 262Z",Eb="M440 150C478 122 518 101 566 94C636 87 704 90 750 104C782 114 808 128 828 141C800 146 760 148 700 149Z",Fh="M122 195C300 179 520 171 700 167C800 165 880 163 932 161L933 166C880 168 800 170 700 172C520 176 300 184 123 200ZM562 90C640 82 720 86 768 102L762 108C716 94 640 91 566 98Z";function kh(s,e){let t="";for(let n=0;n<5;n++)t+=`<path d="M-5 -35L5 -35L3.5 -10L-3.5 -10Z" fill="#c4c7cc" transform="rotate(${n*72})"/>`;return`<g transform="translate(${e} 268)"><circle r="54" fill="#09090a"/><circle r="49" fill="none" stroke="#1e1f22" stroke-width="3"/><circle r="38" fill="url(#${s}-rim)"/><path class="brake" d="M-31 -12A34 34 0 0 1 -12 -31L-8 -23A25 25 0 0 0 -23 -8Z"/><g class="rimrot">${t}<circle r="38" fill="none" stroke="#5c6066" stroke-width="2"/></g><circle r="9" fill="#232428" stroke="#8b8d92" stroke-width="1.5"/></g>`}function zh(s,e){return`<svg class="car" id="car-${s}" viewBox="0 40 1000 410" data-finish="gloss" ${e?`role="img" aria-label="${e}"`:'aria-hidden="true"'}><defs>
  <clipPath id="${s}-b"><path d="${Ab}"/></clipPath><clipPath id="${s}-w"><rect id="${s}-wipe" x="0" y="0" width="0" height="460"/></clipPath>
  <linearGradient id="${s}-sh" x1="0" y1="80" x2="0" y2="272" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" stop-opacity=".42"/><stop offset=".32" stop-color="#fff" stop-opacity=".06"/><stop offset=".52" stop-color="#000" stop-opacity="0"/><stop offset=".8" stop-color="#000" stop-opacity=".38"/><stop offset="1" stop-color="#000" stop-opacity=".75"/></linearGradient>
  <linearGradient id="${s}-cr" x1="0" y1="80" x2="0" y2="272" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset=".2" stop-color="#a2a7ae"/><stop offset=".36" stop-color="#1c1e22"/><stop offset=".5" stop-color="#eef0f2"/><stop offset=".64" stop-color="#555a61"/><stop offset=".8" stop-color="#d4d7db"/><stop offset="1" stop-color="#2a2d31"/></linearGradient>
  <linearGradient id="${s}-gl" x1="0" y1="88" x2="0" y2="152" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4a5262"/><stop offset=".45" stop-color="#14171c"/><stop offset="1" stop-color="#050607"/></linearGradient>
  <radialGradient id="${s}-rim"><stop offset="0" stop-color="#3c3f45"/><stop offset="1" stop-color="#121315"/></radialGradient>
  <filter id="${s}-blur" x="-10%" y="-80%" width="120%" height="260%"><feGaussianBlur stdDeviation="7"/></filter><filter id="${s}-glow" x="-50%" y="-200%" width="200%" height="500%"><feGaussianBlur stdDeviation="4"/></filter></defs>
  <ellipse cx="500" cy="323" rx="462" ry="14" fill="#000" opacity=".8"/>
  <g clip-path="url(#${s}-b)"><rect class="paint-old" x="0" y="40" width="1000" height="300" fill="#2a2c30"/><rect class="paint-new" x="0" y="40" width="1000" height="300" fill="#2a2c30" clip-path="url(#${s}-w)"/>
  <rect class="chrome" x="0" y="40" width="1000" height="300" fill="url(#${s}-cr)" style="mix-blend-mode:hard-light" opacity="0"/><rect class="shade" x="0" y="40" width="1000" height="300" fill="url(#${s}-sh)"/>
  <path class="spec-soft" d="${Fh}" fill="#fff" filter="url(#${s}-blur)" opacity=".25"/><path class="spec" d="${Fh}" fill="#fff" opacity=".9"/></g>
  <path d="${Eb}" fill="url(#${s}-gl)"/><path d="M62 206C96 196 140 190 184 188C166 198 120 208 70 214Z" fill="#eef4ff"/>
  <path class="tail" d="M898 154C926 160 946 170 953 184L951 194C934 180 914 170 890 163Z"/>${kh(s,210)}${kh(s,790)}
  <g class="sq" opacity="0"><rect x="-2" y="60" width="4" height="135" fill="var(--color-red)"/><rect x="-2" y="195" width="4" height="135" fill="var(--color-blue)"/></g></svg>`}function Hh(s,e,t){let n=se("#car-"+s);if(!n)return;let i=se("#"+s+"-wipe"),r=se(".sq",n),a=se(".paint-new",n),o=se(".paint-old",n);if(n.dataset.finish=/chrome/.test(t)?"chrome":/matte/.test(t)?"matte":/satin|brushed/.test(t)?"satin":"gloss",cancelAnimationFrame(n._raf),a.setAttribute("fill",e),ui){o.setAttribute("fill",e);return}let c=performance.now();r.setAttribute("opacity",1);let l=h=>{let u=Math.max(0,Math.min(1,(h-c)/1150)),f=u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2,m=30+f*940;i.setAttribute("width",m),r.setAttribute("transform",`translate(${m} 0)`),u<1?n._raf=requestAnimationFrame(l):(o.setAttribute("fill",e),i.setAttribute("width",0),r.setAttribute("opacity",0))};i.setAttribute("width",0),n._raf=requestAnimationFrame(l)}var yt=(()=>{if(!Mn.classList.contains("can3d"))return Mn.classList.add("no3d"),null;let s;try{s=new Us({antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1})}catch{return Mn.classList.remove("can3d"),Mn.classList.add("no3d"),null}let e=()=>innerWidth<760;s.setPixelRatio(Math.min(devicePixelRatio,e()?1.75:2)),s.setClearColor(0,0),s.toneMapping=Co,s.toneMappingExposure=1;let t=s.domElement;t.setAttribute("aria-hidden","true");let n=new ls,i=new wt(30,1,.1,200),r=()=>document.documentElement.dataset.theme==="light"?"light":"dark",a={};function o(L){let X=L==="light",K=new ls;K.add(new gt(new Ri(40,16,40),new Bt({color:new Re(X?"#c9cacd":"#1d1e22"),side:kt})));let re=($e,tt,it,ut,_t,v)=>{let N=new gt(new os($e,tt),new Bt({color:new Re(_t).multiplyScalar(v),side:Zt}));N.position.set(...it),N.rotation.set(...ut),K.add(N)};for(let $e=-2;$e<=2;$e++)re(.6,18,[$e*2.4,7.4,0],[Math.PI/2,0,0],"#ffffff",6);re(14,10,[0,7.8,0],[Math.PI/2,0,0],"#ffffff",X?.9:.45),re(40,40,[0,-.02,0],[-Math.PI/2,0,0],X?"#d9d9d6":"#3b3c41",1),re(26,8,[-16,4.2,0],[0,Math.PI/2,0],"#ffffff",X?1.6:1.25),re(26,8,[16,4.2,0],[0,-Math.PI/2,0],"#ffffff",X?1.6:1.25),re(20,6,[0,3.4,16],[0,Math.PI,0],"#ffffff",X?1.2:.85),re(20,6,[0,3.4,-16],[0,0,0],"#ffffff",X?1.2:.85);let ge=new gt(new Vs(15.5,15.5,.8,64,1,!0),new Bt({color:new Re("#ffffff").multiplyScalar(1.15),side:kt}));ge.position.y=1.7,K.add(ge);let ye=new gt(new Vs(15.5,15.5,1.6,64,1,!0),new Bt({color:new Re("#ffffff").multiplyScalar(X?.7:.38),side:kt}));ye.position.y=.5,K.add(ye);let ke=new cs(s),at=ke.fromScene(K,.02).texture;return ke.dispose(),at}let c=()=>{let L=r();a[L]=a[L]||o(L),n.environment=a[L]};c();let l=new Zr(16777215,2895153,.36);n.add(l);let h=new fs(16777215,.34);n.add(h),n.add(h.target);let u=new pn;n.add(u);let f=null;if(!e()){let L={name:"SoftFloorReflection",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},uStrength:{value:.15},uRadius:{value:4.2}},vertexShader:`uniform mat4 textureMatrix; varying vec4 vUv; varying vec2 vPos;
#include <common>
#include <logdepthbuf_pars_vertex>
void main(){ vUv = textureMatrix * vec4(position, 1.0); vPos = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
#include <logdepthbuf_vertex>
}`,fragmentShader:`uniform vec3 color; uniform sampler2D tDiffuse; uniform float uStrength; uniform float uRadius; varying vec4 vUv; varying vec2 vPos;
#include <logdepthbuf_pars_fragment>
void main(){
#include <logdepthbuf_fragment>
 vec4 base = texture2DProj(tDiffuse, vUv);
 float r = length(vPos) / uRadius; float fade = 1.0 - smoothstep(0.2, 1.0, r);
 gl_FragColor = vec4(base.rgb * color, base.a * uStrength * fade);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`};f=new Ks(new us(5,72),{shader:L,textureWidth:1024,textureHeight:640,color:12172482,clipBias:.003}),f.material.transparent=!0,f.material.depthWrite=!1,f.rotation.x=-Math.PI/2,f.position.y=-.002,f.renderOrder=0,n.add(f)}let m=(()=>{let K=222.60869565217394,re=()=>{let v=document.createElement("canvas");v.width=v.height=2048;let N=new Gs(v);return N.colorSpace=vt,N.anisotropy=Math.min(8,s.capabilities.getMaxAnisotropy()),{cv:v,t:N}},ge=re(),ye=re(),ke=new gt(new us(4.6,120),new Bt({map:ge.t,transparent:!0,depthWrite:!1,toneMapped:!1}));ke.rotation.x=-Math.PI/2,ke.position.y=-.006,ke.renderOrder=-2,n.add(ke);let at=new gt(new us(4.6,120),new Bt({map:ye.t,transparent:!0,depthWrite:!1,toneMapped:!1}));at.rotation.x=-Math.PI/2,at.position.y=-.003,at.renderOrder=-1;let $e=" WRAPPI \xB7 WRAPPING ART DESIGN \xB7 DRIVE DIFFERENT \xB7 STR\xD8MSVEIEN 324 \xB7 OSLO \xB7";async function tt(v){let N=v==="light",z=ge.cv.getContext("2d");z.clearRect(0,0,2048,2048);let F=2048/2,H=z.createRadialGradient(F,F,0,F,F,F);N?(H.addColorStop(0,"rgba(255,255,255,1)"),H.addColorStop(.42,"rgba(250,250,248,.9)"),H.addColorStop(.62,"rgba(238,237,233,.5)"),H.addColorStop(.72,"rgba(236,235,230,.14)"),H.addColorStop(.775,"rgba(236,235,230,0)")):(H.addColorStop(0,"rgba(46,48,54,.95)"),H.addColorStop(.45,"rgba(32,33,38,.75)"),H.addColorStop(.64,"rgba(22,23,27,.4)"),H.addColorStop(.72,"rgba(18,19,22,.13)"),H.addColorStop(.775,"rgba(14,15,17,0)")),z.fillStyle=H,z.beginPath(),z.arc(F,F,F,0,Math.PI*2),z.fill(),ge.t.needsUpdate=!0;try{await document.fonts.load("500 40px Jost")}catch{}let te=ye.cv.getContext("2d");te.clearRect(0,0,2048,2048);let _e=3.05*K,ve=3.42*K,Te=(_e+ve)/2,Ne=N?"rgba(14,15,17,":"rgba(246,246,244,";te.lineWidth=2.2,te.strokeStyle=Ne+".22)",[_e,ve].forEach(st=>{te.beginPath(),te.arc(F,F,st,0,Math.PI*2),te.stroke()}),te.lineWidth=5,te.strokeStyle="rgba(214,52,60,.85)",te.beginPath(),te.arc(F,F,ve+10,Math.PI*.58,Math.PI*.92),te.stroke(),te.strokeStyle="rgba(64,146,206,.85)",te.beginPath(),te.arc(F,F,ve+10,Math.PI*1.08,Math.PI*1.42),te.stroke(),te.fillStyle=Ne+(N?".62)":".58)"),te.font=`500 ${Math.round(.15*K)}px Jost, "Century Gothic", sans-serif`,te.textAlign="center",te.textBaseline="middle";let Pe=($e+$e).split(""),Ue=Math.PI*2/Pe.length;Pe.forEach((st,Ct)=>{let dt=Ct*Ue;te.save(),te.translate(F+Math.cos(dt)*Te,F+Math.sin(dt)*Te),te.rotate(dt+Math.PI/2),te.fillText(st,0,0),te.restore()}),ye.t.needsUpdate=!0}tt(r());let it=[],ut=1;function _t(v){ut=Math.min(1.02,Math.max(.78,v/2*1.34/3.44)),at.scale.set(ut,ut,1),ke.scale.set(ut,ut,1),it.length=0;let N=3.62*ut;for(let z=0;z<72;z++){let F=z/72*Math.PI*2;it.push([Math.cos(F)*N,0,Math.sin(F)*N])}}return _t(4.6),{disc:ke,band:at,draw:tt,fit:_t,pts:it}})();u.add(m.band);let g=new Bs(new Uint8Array([0,0,0,0]),1,1);g.needsUpdate=!0;let b=()=>({value:new Re}),p=(...L)=>({value:new ot(...L)}),d={uOld:b(),uNew:b(),uOA1:b(),uNA1:b(),uOA2:b(),uNA2:b(),uOFl:b(),uNFl:b(),uFOld:p(...bs.gloss.slice(0,4)),uFNew:p(...bs.gloss.slice(0,4)),uXOld:p(0,0,0,0),uXNew:p(0,0,0,0),uP:{value:9},uA:{value:0},uDir:{value:-1},uMidY:{value:.7},uLen:{value:2.3},uTop:{value:1.3},uPpf:{value:1},uPpfA:{value:0},uCer:{value:0},uTime:{value:0},uInv:{value:new Ve},uDec:{value:g},uDecR:p(-.2,.62,.43,.215)},M=new zt({color:16777215,metalness:.1,roughness:.3,clearcoat:1,clearcoatRoughness:.03,envMapIntensity:1.35});M.onBeforeCompile=L=>{Object.assign(L.uniforms,d),L.vertexShader=L.vertexShader.replace("#include <common>",`#include <common>
uniform mat4 uInv; varying vec3 vLocal; varying vec3 vLN;`).replace("#include <project_vertex>",`#include <project_vertex>
vLocal = (uInv * modelMatrix * vec4(transformed, 1.0)).xyz;
vLN = normalize(mat3(uInv) * mat3(modelMatrix) * objectNormal);`),L.fragmentShader=L.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uOld; uniform vec3 uNew; uniform vec3 uOA1; uniform vec3 uNA1; uniform vec3 uOA2; uniform vec3 uNA2; uniform vec3 uOFl; uniform vec3 uNFl;
uniform vec4 uFOld; uniform vec4 uFNew; uniform vec4 uXOld; uniform vec4 uXNew;
uniform float uP; uniform float uA; uniform float uDir; uniform float uMidY; uniform float uLen; uniform float uTop;
uniform float uPpf; uniform float uPpfA; uniform float uCer; uniform float uTime;
uniform sampler2D uDec; uniform vec4 uDecR;
varying vec3 vLocal; varying vec3 vLN;
float hash(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float hash3(vec3 p3){ p3 = fract(p3 * 0.1031); p3 += dot(p3, p3.zyx + 31.32); return fract((p3.x + p3.y) * p3.z); }
float noise3(vec3 p){ vec3 i = floor(p); vec3 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(hash3(i), hash3(i + vec3(1.0, 0.0, 0.0)), f.x), mix(hash3(i + vec3(0.0, 1.0, 0.0)), hash3(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),
             mix(mix(hash3(i + vec3(0.0, 0.0, 1.0)), hash3(i + vec3(1.0, 0.0, 1.0)), f.x), mix(hash3(i + vec3(0.0, 1.0, 1.0)), hash3(i + vec3(1.0, 1.0, 1.0)), f.x), f.y), f.z); }
float fbm(vec3 p){ float v = 0.0; float a = 0.5; for (int i = 0; i < 4; i++) { v += a * noise3(p); p *= 2.03; a *= 0.5; } return v; }
float band(float x, float a, float b){ return step(a, x) * step(x, b); }
vec2 planar(vec3 p, vec3 n){ return abs(n.y) > 0.55 ? p.xz : (abs(n.x) > abs(n.z) ? p.zy : p.xy); }
/* every car is measured against a 4.5 m long, 1.24 m tall reference, so skins and PPF zones land in the same places */
float noseDist(vec3 p){ return (uLen - p.z * uDir) * (4.5 / (2.0 * uLen)); }
float normY(vec3 p){ return p.y * (1.24 / uTop); }
vec4 skinCol(vec3 base, vec3 a1, vec3 a2, float s, vec3 p, vec3 n){
  float dn = noseDist(p); float ax = abs(p.x); float yy = normY(p);
  if (s < 0.5) return vec4(base, 1.0);
  if (s < 1.5) { float top = step(-0.35, n.y); float st = band(ax, 0.07, 0.25) * top; float pin = band(ax, 0.29, 0.315) * top;
    vec3 c = mix(base, a1, st); c = mix(c, a2, pin); return vec4(c, 1.0 - max(st, pin)); }
  if (s < 2.5) { float side = smoothstep(0.25, 0.5, abs(n.x)); float y = yy - 0.035 * dn;
    float hood = step(0.45, n.y) * step(dn, 1.75);
    float m1 = max(band(y, 0.42, 0.50) * side, band(ax, 0.10, 0.20) * hood);
    float m2 = max(band(y, 0.50, 0.535) * side, band(ax, 0.20, 0.235) * hood);
    float m3 = max(band(y, 0.535, 0.60) * side, band(ax, 0.235, 0.33) * hood);
    vec3 c = mix(base, a1, m1); c = mix(c, a1 * 0.28, m2); c = mix(c, a2, m3); return vec4(c, 1.0 - max(m1, max(m2, m3))); }
  if (s < 3.5) { float m = max(step(1.24 - 0.33, yy), step(0.55, n.y) * step(dn, 1.45) * step(ax, 0.78)); return vec4(mix(base, a1, m), 1.0 - m); }
  if (s < 4.5) { float t = dn / 4.5 + (yy - 0.6) * 0.22; float r = step(t, 0.47); float b = step(0.53, t);
    vec3 c = mix(base, a1, r); c = mix(c, a2, b); return vec4(c, 1.0 - max(r, b)); }
  if (s < 5.5) { vec2 q = planar(p, n) * 46.0; vec2 cl = floor(q); vec2 f = fract(q); float w = mod(cl.x + cl.y, 2.0) > 0.5 ? f.x : f.y;
    float sh = 0.55 + 0.45 * sin(w * 3.14159); return vec4(base * (0.45 + 0.75 * sh) + vec3(0.012), 0.0); }
  if (s < 6.5) { vec2 q = planar(p, n); float h = hash(floor(q * 5.0)); float h2 = hash(floor(q * 11.0) + 7.0);
    vec3 c = h < 0.36 ? base : (h < 0.7 ? a1 : a2); c = mix(c, base * 0.25, step(0.86, h2)); return vec4(c, step(h, 0.36)); }
  if (s < 7.5) { float nn = fbm(p * 2.6); float fine = fbm(p * 11.0); float pt = smoothstep(0.52, 0.62, nn + fine * 0.25); float sp = step(0.74, fine) * 0.6;
    return vec4(mix(base, a1, clamp(pt * 0.85 + sp * 0.5, 0.0, 1.0)), 1.0 - pt); }
  float t = smoothstep(0.2, 0.85, dn / 4.5 + (hash(floor(p.xz * 140.0)) - 0.5) * 0.04);
  return vec4(mix(base, a1, t), 1.0 - t);
}
vec4 decal(vec3 p, vec3 n){
  if (abs(n.x) < 0.45) return vec4(0.0);
  float u = (p.x > 0.0 ? (uDecR.x - p.z) : (p.z - uDecR.x)) / (2.0 * uDecR.z) + 0.5;
  float v = (p.y - uDecR.y) / (2.0 * uDecR.w) + 0.5;
  if (u < 0.0 || u > 1.0 || v < 0.0 || v > 1.0) return vec4(0.0);
  return texture2D(uDec, vec2(u, v));
}
float ppfZone(vec3 p){
  if (uPpf > 3.5) return 1.0;
  float dn = noseDist(p); float ax = abs(p.x); float yy = normY(p);
  float z = step(dn, 1.55);
  z = max(z, step(dn, 2.5) * step(1.4, dn) * step(0.86, yy) * step(0.45, ax));
  z = max(z, step(dn, 2.1) * step(1.5, dn) * step(0.95, ax) * step(0.7, yy));
  return z;
}`).replace("#include <color_fragment>",`#include <color_fragment>
float wT = step(0.0, (vLocal.z - uP) * uDir);
vec3 nL = normalize(vLN);
float facing = clamp(abs(dot(normalize(vNormal), normalize(vViewPosition))), 0.0, 1.0);
float shiftK = smoothstep(0.12, 0.85, facing);
vec4 skO = skinCol(uOld, uOA1, uOA2, uXOld.z, vLocal, nL);
vec4 skN = skinCol(uNew, uNA1, uNA2, uXNew.z, vLocal, nL);
skO.rgb = mix(skO.rgb, mix(uOFl, skO.rgb, shiftK * 0.78), uXOld.x * skO.a);
skN.rgb = mix(skN.rgb, mix(uNFl, skN.rgb, shiftK * 0.78), uXNew.x * skN.a);
vec4 dc = decal(vLocal, nL);
skO.rgb = mix(skO.rgb, dc.rgb, dc.a * uXOld.w);
skN.rgb = mix(skN.rgb, dc.rgb, dc.a * uXNew.w);
diffuseColor.rgb = mix(skO.rgb, skN.rgb, wT);
float flakeK = mix(uXOld.y, uXNew.y, wT);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(uFOld.x, uFNew.x, wT);`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
metalnessFactor = mix(uFOld.y, uFNew.y, wT);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
if (flakeK > 0.001) { vec3 fq = vLocal * 260.0; float fpx = length(fwidth(fq)); float fa = 1.0 - smoothstep(0.18, 0.45, fpx);
  if (fa > 0.001) { vec3 fc = floor(fq); vec3 rn = vec3(hash3(fc), hash3(fc + 13.1), hash3(fc + 27.7)) - 0.5; normal = normalize(normal + rn * flakeK * 0.22 * fa); } }`).replace("#include <lights_physical_fragment>",`#include <lights_physical_fragment>
#ifdef USE_CLEARCOAT
material.clearcoat = mix(uFOld.z, uFNew.z, wT);
material.clearcoatRoughness = clamp(mix(uFOld.w, uFNew.w, wT), 0.0525, 1.0);
#endif`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
float ln = smoothstep(0.06, 0.0, abs(vLocal.z - uP)) * uA;
float dp = (vLocal.z - uP) * uDir;
float tr = step(0.0, dp) * exp(-dp * 5.0) * uA;
vec3 lc = vLocal.y > uMidY ? vec3(0.84, 0.2, 0.24) : vec3(0.25, 0.57, 0.81);
totalEmissiveRadiance += lc * ln * 7.0 + vec3(pow(ln, 3.0) * 2.2) + vec3(0.22) * tr;
if (uPpfA > 0.001) {
  float zp = ppfZone(vLocal) * uPpfA;
  float hatch = smoothstep(0.40, 0.48, abs(fract((vLocal.x * 0.5 + vLocal.y + vLocal.z) * 7.0) - 0.5));
  float dnn = noseDist(vLocal);
  float sw = exp(-pow(dnn - mod(uTime * 1.8, 7.5) + 1.0, 2.0) * 5.0);
  totalEmissiveRadiance += zp * (vec3(0.45, 0.68, 0.95) * 0.09 + vec3(0.10) * hatch + vec3(0.6, 0.82, 1.0) * 0.4 * sw);
}
if (uCer > 0.001) {
  vec2 q = abs(nL.y) > 0.55 ? vLocal.xz : (abs(nL.x) > abs(nL.z) ? vLocal.zy : vLocal.xy);
  vec2 g = q * 24.0; vec2 c = floor(g); vec2 f = fract(g);
  float h = hash(c); float h2 = hash(c + 17.3);
  vec2 o = vec2(h, h2) * 0.5 + 0.25; float r = 0.1 + 0.16 * h2;
  float on = step(0.52, h) * smoothstep(-0.3, 0.3, nL.y + 0.25);
  float rim = smoothstep(r, r * 0.8, length(f - o)) - smoothstep(r * 0.8, r * 0.55, length(f - o));
  float hl = smoothstep(r * 0.42, 0.0, length(f - o + vec2(r * 0.32, -r * 0.32)));
  totalEmissiveRadiance += uCer * on * (vec3(0.05) * rim + vec3(0.55) * hl);
}`)};let _=new zt({color:"#c7cad0",metalness:.95,roughness:.26,clearcoat:.6,envMapIntensity:1.25}),A=new zt({color:"#c41f28",metalness:.2,roughness:.35,clearcoat:1,clearcoatRoughness:.1}),P=new zt({color:"#14171c",metalness:.1,roughness:.07,transparent:!0,opacity:.7,envMapIntensity:1.15,clearcoat:1,clearcoatRoughness:.06,depthWrite:!1}),T=new ii({color:"#e8e8e8",metalness:1,roughness:.06,envMapIntensity:1.2});function R(L){let X=(Ln[L.rim]||Ln.silver).v;_.color.set(X[0]),_.metalness=X[1],_.roughness=X[2],A.color.set(L.cal||"#c41f28");let K=(_s[L.tint]||_s.none).v;P.color.set(K[0]),P.opacity=K[1],L.chrome?(T.color.set("#0c0d0f"),T.metalness=.55,T.roughness=.22):(T.color.set("#e8e8e8"),T.metalness=1,T.roughness=.06)}let G=(()=>{let X=new Qt(512,512),K=new nn({side:Zt,uniforms:{uH:{value:.6}},vertexShader:"varying float vY; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vY = w.y; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:"uniform float uH; varying float vY; void main(){ float a = clamp(1.0 - vY / uH, 0.0, 1.0); gl_FragColor = vec4(0.0, 0.0, 0.0, a * a); }"}),re=new nn({uniforms:{tDiffuse:{value:null},uDir:{value:new Je}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uDir; varying vec2 vUv;
void main(){ vec4 s = vec4(0.0); float w[5]; w[0]=0.227027; w[1]=0.1945946; w[2]=0.1216216; w[3]=0.054054; w[4]=0.016216;
 s += texture2D(tDiffuse, vUv) * w[0];
 for (int i = 1; i < 5; i++) { s += texture2D(tDiffuse, vUv + uDir * float(i)) * w[i]; s += texture2D(tDiffuse, vUv - uDir * float(i)) * w[i]; }
 gl_FragColor = s; }`}),ge=new la(re),ye=new Bt({map:X.texture,transparent:!0,depthWrite:!1,toneMapped:!1,color:0});ye.onBeforeCompile=tt=>{tt.fragmentShader=tt.fragmentShader.replace("#include <map_fragment>","vec4 sm = texture2D(map, vMapUv); diffuseColor = vec4(0.0, 0.0, 0.0, sm.a * opacity);")};let ke=new gt(new os(1,1),ye);ke.rotation.x=-Math.PI/2,ke.position.y=.004,ke.renderOrder=1;function at(tt,it){let ut=new Qt(512,512),_t=it.max.x-it.min.x+1.4,v=it.max.z-it.min.z+1.4,N=it.max.y-it.min.y,z=new Rn(-_t/2,_t/2,v/2,-v/2,0,N);z.position.set(0,-.001,0),z.up.set(0,0,1),z.lookAt(0,1,0),z.updateMatrixWorld(),K.uniforms.uH.value=N*.42;let F=new ls;F.add(tt),F.overrideMaterial=K;let H=s.getRenderTarget(),te=s.getClearAlpha(),_e=s.autoClear;s.setRenderTarget(ut),s.setClearColor(0,0),s.clear(),s.render(F,z);for(let[ve,Te]of[[3,0],[2,1]])re.uniforms.tDiffuse.value=ut.texture,re.uniforms.uDir.value.set(ve/512,0),s.setRenderTarget(X),s.clear(),ge.render(s),re.uniforms.tDiffuse.value=X.texture,re.uniforms.uDir.value.set(0,ve/512),s.setRenderTarget(ut),s.clear(),ge.render(s);return s.setRenderTarget(H),s.setClearColor(0,te),s.autoClear=_e,F.remove(tt),F.overrideMaterial=null,{tex:ut.texture,scale:new U(_t,v,1)}}function $e(tt){ye.map=tt.sh,ye.opacity=.92,ye.needsUpdate=!0,ke.scale.copy(tt.shScale)}return{bake:at,plane:ke,show:$e}})();if(f){let L=f.onBeforeRender.bind(f);f.onBeforeRender=(X,K,re)=>{let ge=G.plane.visible;G.plane.visible=!1,L(X,K,re),G.plane.visible=ge}}let S={hero:{d:[-.74,.2,-.64],spin:!0,fill:.95,ring:!0},threeq:{d:[-.7,.26,-.68],spin:!0,fill:.94,ring:!0},front:{d:[0,.16,-1],fill:.8},side:{d:[1,.12,0],fill:.94,ring:!0},rear:{d:[0,.2,1],fill:.8},top:{d:[.36,.93,.38],spin:!0,fill:.92,ring:!0}},w=L=>({c:L,f:"gloss",fl:null,s:"solid",a1:"#d6343c",a2:"#4092ce",dec:!1}),O={},q={h:se("#hero3d"),s:se("#bay3d")};Object.entries(q).forEach(([L,X])=>{X&&(O[L]={el:X,view:L==="h"?"hero":"threeq",rot:L==="h"?-.35:0,spin:L==="h"&&!ui,scroll:0,st:{mode:"wrap",b:w("#2a2c30"),ppf:1,cer:0,rim:"silver",cal:"#c41f28",tint:"none",chrome:!1}})});let Q=null,I=null,W=null,$=null,ee=null,J=null,Z=null,x=0,C=0,j=null,k=null,B=new U(0,.6,0),le={},xe=[];for(let L=-1;L<=1;L++)for(let X=-1;X<=1;X++)for(let K=-1;K<=1;K++)(L||X||K)&&xe.push([L,X,K]);function Me(L){let X=[];L.updateMatrixWorld(!0);let K=0;L.traverse(ye=>{ye.isMesh&&ye.geometry.attributes.position&&(K+=ye.geometry.attributes.position.count)});let re=Math.max(1,Math.floor(K/4e3)),ge=new U;return L.traverse(ye=>{if(!ye.isMesh||!ye.geometry.attributes.position)return;let ke=ye.geometry.attributes.position,at=xe.map(()=>[-1/0,null]);for(let $e=0;$e<ke.count;$e++){ge.fromBufferAttribute(ke,$e).applyMatrix4(ye.matrixWorld);for(let tt=0;tt<xe.length;tt++){let it=xe[tt],ut=ge.x*it[0]+ge.y*it[1]+ge.z*it[2];ut>at[tt][0]&&(at[tt][0]=ut,at[tt][1]=[ge.x,ge.y,ge.z])}$e%re===0&&X.push([ge.x,ge.y,ge.z])}at.forEach($e=>{$e[1]&&X.push($e[1])})}),X}let ne=null,Ie=Array.from({length:24},(L,X)=>X*Math.PI/12),Le=[],Ge=[],V=[];function St(L,X){let{r:K,up:re,f:ge,kx:ye,ky:ke}=L,at=L.ring?[ne,m.pts]:[ne],$e=0,tt=.5,it=-1/0;for(let z of X){let F=Math.cos(z),H=Math.sin(z);for(let te of at)for(let _e of te){let ve=_e[0]*F+_e[2]*H-B.x,Te=_e[1]-B.y,Ne=-_e[0]*H+_e[2]*F-B.z,Pe=ve*K.x+Te*K.y+Ne*K.z,Ue=ve*re.x+Te*re.y+Ne*re.z,st=ve*ge.x+Te*ge.y+Ne*ge.z;Le[$e]=Pe,Ge[$e]=Ue,V[$e]=st,$e++;let Ct=Math.max(Math.abs(Pe)/ye,Math.abs(Ue)/ke)-st;Ct>tt&&(tt=Ct),-st>it&&(it=-st)}}let ut=z=>{let F=1/0,H=-1/0,te=1/0,_e=-1/0;for(let ve=0;ve<$e;ve++){let Te=z+V[ve],Ne=Le[ve]/Te,Pe=Ge[ve]/Te;Ne<F&&(F=Ne),Ne>H&&(H=Ne),Pe<te&&(te=Pe),Pe>_e&&(_e=Pe)}return[F,H,te,_e]},_t=Math.max(it+.05,.5),v=tt;for(let z=0;z<26&&v-_t>.002;z++){let F=(_t+v)/2,H=ut(F);(H[1]-H[0])/2<=ye&&(H[3]-H[2])/2<=ke?v=F:_t=F}let N=ut(v);return{D:v,ox:(N[0]+N[1])/2,oy:(N[2]+N[3])/2}}let pe={W:1,Ht:1,bx:0,by:0,ox:0,oy:0};function Oe(L,X){pe.ox=L,pe.oy=X;let K=Math.tan(js.degToRad(i.fov/2)),re=K*i.aspect;i.setViewOffset(pe.W,pe.Ht,pe.bx+L/re*pe.W/2,pe.by-X/K*pe.Ht/2,pe.W,pe.Ht),i.updateProjectionMatrix()}function he(L,X){let K=O[L];if(!K||!$||!ne)return;let re=K.el,ge=re.clientWidth,ye=re.clientHeight,ke=S[K.view];if(!ge||!ye)return;s.setSize(ge,ye,!1),i.aspect=ge/ye,i.fov=e()?34:30;let at=ge/2,$e=ye/2,tt=ge,it=ye,ut=L==="h"&&se(".hero__stage");if(ut){let dt=ut.getBoundingClientRect(),$t=re.getBoundingClientRect(),ft=0,qe=0;try{let di=new DOMMatrixReadOnly(getComputedStyle(ut).transform);ft=di.m41,qe=di.m42}catch{}tt=dt.width,it=dt.height,at=dt.left-ft-$t.left+tt/2,$e=dt.top-qe-$t.top+it/2}pe.W=ge,pe.Ht=ye,pe.bx=-(at-ge/2),pe.by=-($e-ye/2),Oe(pe.ox,pe.oy);let _t=$.max.y-$.min.y;B.set(0,_t*(K.view==="top"?.3:.42),0);let v=new U(...ke.d).normalize(),N=v.clone().negate(),z=new U().crossVectors(N,new U(0,1,0)).normalize(),F=new U().crossVectors(z,N),H=Math.tan(js.degToRad(i.fov/2)),te=H*i.aspect,_e=L==="h"&&e()?1:ke.fill*(ge/ye<1.2?.985:1),ve=_e*tt/ge*te,Te=_e*it/ye*H,Ne={dir:v,r:z,up:F,f:N,kx:ve,ky:Te,spin:!!ke.spin,ring:!!ke.ring},Pe=ke.spin?0:Math.round(K.rot/(Math.PI*2))*Math.PI*2,Ue=St(Ne,ke.spin?Ie:[K.scroll+(X?K.rot:Pe)]),st=Ue.D;K.fr=Ne,K.D=st,K.fa=null,K.ot=[Ue.ox,Ue.oy];let Ct=v.clone().multiplyScalar(st).add(B);if(X)i.position.copy(Ct),J=null,i.lookAt(B),Oe(Ue.ox,Ue.oy);else{let dt=i.position.clone().sub(B),$t=Math.max(.5,dt.length()),ft=dt.normalize();J={d0:ft,q:new en().setFromUnitVectors(ft,v),D0:$t,D1:st,t0:performance.now(),ms:1200,r0:K.rot,r1:ke.spin?K.rot:Pe,o0:[pe.ox,pe.oy],o1:[Ue.ox,Ue.oy]}}}function Qe(L,X){let K=L.fr;if(!K||K.spin||!ne)return;let re=L.rot+L.scroll;if(L.fa===null||Math.abs(re-L.fa)>.003){L.fa=re;let ye=St(K,[re]);L.Dt=ye.D,L.ot=[ye.ox,ye.oy]}let ge=Math.min(1,X*7);L.D+=((L.Dt||L.D)-L.D)*ge,L.ot&&Oe(pe.ox+(L.ot[0]-pe.ox)*ge,pe.oy+(L.ot[1]-pe.oy)*ge),i.position.copy(K.dir).multiplyScalar(L.D).add(B),i.lookAt(B)}function He(L,X){let K=bs[X.f]||bs.gloss;d[L?"uNew":"uOld"].value.set(X.c),d[L?"uNA1":"uOA1"].value.set(X.a1||"#d6343c"),d[L?"uNA2":"uOA2"].value.set(X.a2||"#4092ce"),d[L?"uNFl":"uOFl"].value.set(X.fl||X.c),d[L?"uFNew":"uFOld"].value.set(K[0],K[1],K[2],K[3]),d[L?"uXNew":"uXOld"].value.set(X.fl?1:0,K[4],(ln[X.s]||ln.solid).id,X.dec?1:0)}function E(){["Old","OA1","OA2","OFl"].forEach((L,X)=>d["u"+L].value.copy(d["u"+["New","NA1","NA2","NFl"][X]].value)),d.uFOld.value.copy(d.uFNew.value),d.uXOld.value.copy(d.uXNew.value)}function y(L){let X=O[L].st;He(!0,X.b),E(),d.uPpf.value=X.ppf,d.uPpfA.value=X.mode==="ppf"?1:0,d.uCer.value=X.cer,d.uP.value=-d.uDir.value*9,d.uA.value=0,ee=null,R(X)}function Y(L,X){if(O[L]&&(O[L].st.b=X,!(L!==Q||!I))){if(E(),He(!0,X),ui){E();return}ee={t0:performance.now(),dur:1600}}}function oe(L,X){O[L]&&(Object.assign(O[L].st,X),L===Q&&R(O[L].st))}let ae=new oa().setMeshoptDecoder(Dh);function ce(L){let X=L.scene;return X.traverse(K=>{if(!K.isMesh)return;let re=K.material&&K.material.name||"";if(K.frustumCulled=!1,re==="paint")K.material=M;else if(re==="rim"){let ge=_.clone();ge.map=K.material.map||null,K.material=ge,K.userData.rim=!0}else re==="caliper"?K.material=A:re==="glass"?K.material=P:re==="chrome"?K.material=T:re==="tyre"?(K.material.envMapIntensity=.4,K.material.roughness=Math.max(.75,K.material.roughness)):re==="light_rear"?(K.material=K.material.clone(),K.material.emissive=new Re("#ff1a1a"),K.material.emissiveIntensity=1.2):re==="clearlens"?K.material=new zt({color:"#ffffff",metalness:0,roughness:.04,transparent:!0,opacity:.16,envMapIntensity:1.6,clearcoat:1,depthWrite:!1}):re==="light_front"||re==="lens"?(K.material=K.material.clone(),K.material.emissive=new Re("#dfe9ff"),K.material.emissiveIntensity=.35):K.material&&(K.material.envMapIntensity=Math.max(K.material.envMapIntensity||1,1));K.material&&K.material.transparent&&(K.renderOrder=2)}),X}let Ce=()=>{let L=[];return I&&I.traverse(X=>{X.userData.rim&&L.push(X.material)}),L},be=R;function Se(L){be(L);let X=(Ln[L.rim]||Ln.silver).v;Ce().forEach(K=>{K.color.set(X[0]),K.metalness=X[1],K.roughness=X[2]})}let Be=null;function Xe(L){if(!L)return null;let X=L.querySelector(".cload");return X||(X=document.createElement("div"),X.className="cload",X.setAttribute("aria-hidden","true"),X.innerHTML='<svg class="cload__ring" viewBox="0 0 64 64"><circle class="bg" cx="32" cy="32" r="28"/><circle class="fg" cx="32" cy="32" r="28" stroke-dasharray="175.93" stroke-dashoffset="175.93"/></svg><span class="cload__t"></span><span class="cload__bar"><i></i><i></i></span>',L.appendChild(X)),X}function ie(L,X,K){let re=Xe(L);re&&(re.querySelector(".fg").setAttribute("stroke-dashoffset",(175.93*(1-Math.max(.04,Math.min(1,K)))).toFixed(1)),re.querySelector(".cload__t").textContent=X+(K>0&&K<1?" \xB7 "+Math.round(K*100)+" %":""))}let et={},je={};function ze(L,X,K=!0){let re=et[L];return re&&re.buf?Promise.resolve(re.buf):(re||(re=et[L]={fns:new Set,keep:K},re.p=new Promise((ge,ye)=>{let ke=new XMLHttpRequest;ke.open("GET",ht[L].file),ke.responseType="arraybuffer",ke.onprogress=at=>{let $e=at.lengthComputable?at.loaded/at.total:Math.min(.9,at.loaded/3e6);re.fns.forEach(tt=>tt($e))},ke.onload=()=>ke.status>=200&&ke.status<300||ke.status===0&&ke.response?ge(ke.response):ye(ke.status),ke.onerror=ye,ke.send()}).then(ge=>(je[L]=!0,re.keep?re.buf=ge:delete et[L],ge),ge=>{throw delete et[L],ge})),K&&(re.keep=!0),X&&re.fns.add(X),re.p)}function De(L,X){let K=ht[L];if(!K||!K.ok)return;if(W===L&&I){X&&X();return}W=L,Mn.classList.add("car-loading");let re=Q?O[Q].el:null,ge=!!I&&!!re,ye=!I&&O.s?O.s.el:null,ke=Ee(K.en,K.no),at=it=>{if(W!==L)return;let ut=()=>{if(W!==L)return;I&&(u.remove(I),u.remove(G.plane)),I=it.g,$=it.box,ne=it.pts,u.add(I),u.add(G.plane),G.show(it);let _t=$,v=_t.max.z-_t.min.z,N=_t.max.y-_t.min.y;if(m.fit(v),d.uLen.value=v/2,d.uMidY.value=N*.5,d.uTop.value=N,d.uDecR.value.set(-v*.03,N*.44,v*.095,v*.0475),window.wrDecalScale&&window.wrDecalScale(),Mn.classList.remove("car-loading"),Mn.classList.add("is-3d"),Q&&(y(Q),Se(O[Q].st),he(Q,!0),ge&&!ui)){let z=O[Q];we={t0:performance.now(),ms:1100,from:z.rot-.55,to:z.rot},z.rot-=.55}re&&(re.classList.add("is-arriving"),re.classList.remove("is-swapping"),setTimeout(()=>re.classList.remove("is-arriving"),900)),ye&&ye.classList.remove("is-loading"),X&&X(),Ye()};ge&&!re.classList.contains("is-swapping")&&!ui?(re.classList.add("is-swapping"),setTimeout(ut,260)):ut()};if(le[L])return at(le[L]);if(k===L)return;k=L;let $e=ge?re:ye;ge?re.classList.add("is-swapping"):ye&&ye.classList.add("is-loading"),$e&&ie($e,ke,0),ze(L,it=>{$e&&ie($e,ke,it)}).then(it=>{$e&&ie($e,ke,1),ae.parse(it,"",ut=>{k=null;let _t=ce(ut),v=new tn().setFromObject(_t),N=G.bake(_t,v);le[L]={g:_t,box:v,sh:N.tex,shScale:N.scale,pts:Me(_t)},delete et[L],at(le[L])},tt)}).catch(tt);function tt(){k=null,Mn.classList.remove("car-loading"),re&&re.classList.remove("is-swapping"),ye&&ye.classList.remove("is-loading"),I||(Mn.classList.remove("can3d"),Mn.classList.add("no3d"),dispatchEvent(new Event("wr-no3d")))}}let Ae=navigator.connection,We=!(Ae&&(Ae.saveData||/(^|-)2g|3g/.test(Ae.effectiveType||"")));function rt(L){!ht[L]||!ht[L].ok||le[L]||et[L]||ze(L).catch(()=>{})}let bt=null;function Ye(){if(bt||!We||!se("#carPicks"))return;bt=Object.keys(ht).filter(K=>ht[K].ok&&!le[K]);let L=()=>{let K=bt.shift();if(K){if(le[K]||et[K]||je[K])return L();ze(K,null,!1).then(()=>setTimeout(X,400),()=>{})}},X=()=>(window.requestIdleCallback||(K=>setTimeout(K,600)))(L,{timeout:4e3});setTimeout(X,3500)}document.addEventListener("pointerover",L=>{let X=L.target.closest&&L.target.closest("[data-car]");X&&rt(X.dataset.car)},{passive:!0}),document.addEventListener("touchstart",L=>{let X=L.target.closest&&L.target.closest("[data-car]");X&&rt(X.dataset.car)},{passive:!0}),document.addEventListener("focusin",L=>{let X=L.target.closest&&L.target.closest("[data-car]");X&&rt(X.dataset.car)});function ue(L){if(Q!==L){if(Q=L,!L||!I){s.setAnimationLoop(null);return}O[L].el.appendChild(t),y(L),Se(O[L].st),he(L,!0),s.setAnimationLoop(pt)}}t.addEventListener("pointerdown",L=>{Z={x:L.clientX,v:0},t.setPointerCapture(L.pointerId),J=null,Jt("[data-v3]").forEach(K=>K.setAttribute("aria-pressed","false"));let X=se(".bay__hint");X&&(X.style.opacity=0)}),t.addEventListener("pointermove",L=>{if(!Z||!Q)return;let X=L.clientX-Z.x;Z.x=L.clientX,Z.v=X*.009,O[Q].rot+=Z.v});let D=()=>{Z&&(C=Z.v,Z=null,x=performance.now())};t.addEventListener("pointerup",D),t.addEventListener("pointercancel",D);let fe=new na,me=new U(0,2.5,0),Fe=new en,we=null;function pt(L){let X=Math.min(fe.getDelta(),.05),K=O[Q];if(d.uTime.value+=X,Z||(Math.abs(C)>4e-4?(K.rot+=C,C*=.94):K.spin&&!J&&L-x>1800&&(K.rot+=X*(Math.PI*2/28))),J){let ge=Math.min(1,(L-J.t0)/J.ms),ye=1-Math.pow(1-ge,4);Fe.identity().slerp(J.q,ye),i.position.copy(J.d0).applyQuaternion(Fe).multiplyScalar(J.D0+(J.D1-J.D0)*ye).add(B),i.lookAt(B),K.rot=J.r0+(J.r1-J.r0)*ye,J.o1&&Oe(J.o0[0]+(J.o1[0]-J.o0[0])*ye,J.o0[1]+(J.o1[1]-J.o0[1])*ye),ge>=1&&(J=null)}else Qe(K,X);if(we){let ge=Math.min(1,(L-we.t0)/we.ms),ye=1-Math.pow(1-ge,3);K.rot=we.from+(we.to-we.from)*ye,ge>=1&&(we=null)}if(u.rotation.y=K.rot+K.scroll,ee){let ge=Math.min(1,(L-ee.t0)/ee.dur),ye=ge<.5?4*ge*ge*ge:1-Math.pow(-2*ge+2,3)/2;d.uP.value=d.uLen.value*d.uDir.value-d.uDir.value*ye*d.uLen.value*2.1,d.uA.value=Math.min(1,Math.sin(Math.PI*ge)*3),ge>=1&&(E(),d.uP.value=-d.uDir.value*9,d.uA.value=0,ee=null)}let re=K.st;d.uPpf.value=re.ppf,d.uPpfA.value+=((re.mode==="ppf"?1:0)-d.uPpfA.value)*Math.min(1,X*6),d.uCer.value+=(re.cer-d.uCer.value)*Math.min(1,X*4),h.position.copy(i.position).add(me),h.target.position.copy(B),u.updateMatrixWorld(),d.uInv.value.copy(u.matrixWorld).invert(),s.render(n,i)}addEventListener("wr-theme",()=>{c(),m.draw(r()),l.intensity=r()==="light"?.5:.36,f&&(f.material.uniforms.uStrength.value=r()==="light"?.1:.15)}),r()==="light"&&(l.intensity=.5,f&&(f.material.uniforms.uStrength.value=.1));let ct={};function Rt(){let L=new IntersectionObserver(X=>{X.forEach(re=>{let ge=Object.keys(O).find(ye=>O[ye].el===re.target);ct[ge]=re.isIntersecting?re.intersectionRatio:0});let K=Object.keys(O).filter(re=>ct[re]>0).sort((re,ge)=>ct[ge]-ct[re])[0]||null;ue(K)},{threshold:[0,.05,.2,.4,.6,.8,1]});if(Object.values(O).forEach(X=>L.observe(X.el)),window.ResizeObserver){let X=0,K=new ResizeObserver(()=>{cancelAnimationFrame(X),X=requestAnimationFrame(()=>{Q&&he(Q,!J)})});Object.values(O).forEach(re=>K.observe(re.el))}}let Ot;return addEventListener("resize",()=>{clearTimeout(Ot),Ot=setTimeout(()=>{s.setPixelRatio(Math.min(devicePixelRatio,e()?1.6:2)),Q&&he(Q,!0)},120)}),document.addEventListener("visibilitychange",()=>{fe.getDelta()}),{M:O,wrap:Y,setState:(L,X)=>{O[L]&&(Object.assign(O[L].st,X),L===Q&&Se(O[L].st))},setMode:(L,X,K,re)=>{O[L]&&Object.assign(O[L].st,{mode:X,ppf:K,cer:re})},view:(L,X)=>{O[L]&&(O[L].view=X,L===Q&&he(L,!1))},spin:(L,X)=>{O[L]&&(O[L].spin=X)},heroScroll:L=>{O.h&&(O.h.scroll=L*Math.PI*.9)},setCar:De,get car(){return W},start:L=>{De(L,()=>{Q||Rt()})},decal(L,X){j||(j=new Gs(L),j.colorSpace=vt,j.anisotropy=s.capabilities.getMaxAnisotropy(),d.uDec.value=j),j.needsUpdate=!0;let K=$?$.max.z-$.min.z:4.5,re=K*.135*(X||.7);d.uDecR.value.z=re,d.uDecR.value.w=re/2},snapshot(){return!I||Q!=="s"?null:(ee&&(E(),ee=null,d.uA.value=0,d.uP.value=-d.uDir.value*9),s.render(n,i),t.toDataURL("image/png"))}}})();window.CAR3D=yt;(()=>{let s=se(".hero");if(!s||!se("#hero3d"))return;let e=se("#heroCar");e&&!se(".hero__poster")&&(e.innerHTML=zh("h"));let t=["grey","red","rose"].map(h=>hi.find(u=>u.k===h)).filter(Boolean),n=-1,i=null,r=!0,a=()=>{n=(n+1)%t.length;let h=t[n];Hh("h",h.b.c,h.b.f),yt&&yt.wrap("h",{c:h.b.c,f:h.b.f,fl:h.b.fl||null,s:h.b.s||"solid",a1:h.b.a1||"#d6343c",a2:h.b.a2||"#4092ce",dec:!1});let u=se("#heroThumb"),f=se("#heroLbl");u&&(u.src=h.th),f&&(f.textContent=`${Ee(h.en,h.no)} \xB7 ${Ee("from a","fra en")} ${h.car}`)},o=null;try{let h=window.wrStore&&wrStore.load("build");h&&An(ht,h.car)&&ht[h.car].ok&&typeof h.c=="string"&&Wn.test(h.c)&&An(bs,h.f)&&(h.fl===null||typeof h.fl=="string"&&Wn.test(h.fl))&&An(ln,h.s)&&h.mode!=="ppf"&&(o=h)}catch{}if(o){let h=document.createElement("a");h.className="resume",h.href=window.WR&&WR.routes&&WR.routes.studio||"/design";let u=document.createElement("i");u.style.setProperty("--sw",o.c);let f=document.createElement("span");f.textContent=Ee("Continue your build","Fortsett bygget ditt")+" \xB7 "+Ee(ht[o.car].en,ht[o.car].no),h.append(u,f);let m=se(".hero__now");m&&m.appendChild(h)}let c=!!o,l=()=>{c=!1,yt&&yt.wrap("h",{c:o.c,f:o.f,fl:o.fl||null,s:o.s||"solid",a1:typeof o.a1=="string"&&Wn.test(o.a1)?o.a1:"#d6343c",a2:typeof o.a2=="string"&&Wn.test(o.a2)?o.a2:"#4092ce",dec:!1});let h=se("#heroLbl");h&&(h.textContent=Ee("Your last build \xB7 ","Ditt siste bygg \xB7 ")+Ee(ht[o.car].en,ht[o.car].no))};if(window.wrHeroStart=()=>{if(i||(c?l():a(),ui))return;let h=o?2:0;i=setInterval(()=>{!r||document.hidden||h-- >0||a()},4200)},new IntersectionObserver(h=>h.forEach(u=>r=u.isIntersecting)).observe(s),yt){let h=()=>setTimeout(()=>yt.start(o?o.car:"sports"),120);document.readyState==="complete"?h():addEventListener("load",h)}window.wrHeroReady&&window.wrHeroStart()})();(()=>{let s=se(".bay");if(!s)return;let e=se("#studioCar"),t=()=>{e&&!e.firstChild&&(e.innerHTML=zh("s",Ee("Preview of the car with the chosen wrap","Forh\xE5ndsvisning av bilen med valgt folie")))};yt||t(),addEventListener("wr-no3d",()=>{t(),q(!0)});let n={car:"sedan",mode:"wrap",preset:"grey",film:null,c:"#86898e",f:"satinMetal",fl:null,s:"solid",a1:"#d6343c",a2:"#4092ce",dt:"",dc:"#f6f6f4",ds:70,rim:"silver",cal:"red",tint:"none",chrome:!1,ppf:"front",cer:!1,nm:"",nmc:""},i=null,r="3m",a="all",o="",c={car:x=>An(ht,x)&&ht[x].ok,mode:x=>["wrap","skin","detail","ppf"].includes(x),preset:x=>x===null||hi.some(C=>C.k===x),film:x=>x===null||typeof x=="string"&&x.length<40&&!!$s(x),c:x=>typeof x=="string"&&Wn.test(x),f:x=>An(bs,x),fl:x=>x===null||typeof x=="string"&&Wn.test(x),s:x=>An(ln,x),a1:x=>typeof x=="string"&&Wn.test(x),a2:x=>typeof x=="string"&&Wn.test(x),dt:x=>typeof x=="string"&&x.length<=22,dc:x=>typeof x=="string"&&Wn.test(x),ds:x=>typeof x=="number"&&x>=40&&x<=100,rim:x=>An(Ln,x),cal:x=>An(pc,x),tint:x=>An(_s,x),chrome:x=>typeof x=="boolean",ppf:x=>An(Pn,x),cer:x=>typeof x=="boolean",nm:x=>typeof x=="string"&&x.length<=80&&/^[^<>|]*\|[^<>|]*$|^$/.test(x),nmc:x=>typeof x=="string"&&(x===""||Wn.test(x))},l=Object.keys(c),h=!1;(()=>{let x=new URLSearchParams(location.search);if(An(ht,x.get("car"))&&ht[x.get("car")].ok&&(n.car=x.get("car")),x.get("preset")&&hi.some(j=>j.k===x.get("preset"))){let j=hi.find(k=>k.k===x.get("preset"));Object.assign(n,{preset:j.k,c:j.b.c,f:j.b.f,fl:j.b.fl||null,s:j.b.s||"solid",a1:j.b.a1||n.a1,a2:j.b.a2||n.a2}),h=!0}if(x.get("film")&&$s(x.get("film"))){let j=$s(x.get("film"));Object.assign(n,Oh(j),{film:x.get("film"),preset:null}),r=j.brand.k,h=!0}["wrap","skin","detail","ppf"].includes(x.get("mode"))&&(n.mode=x.get("mode"),h=!0),x.get("ceramic")==="1"&&(n.cer=!0,h=!0);let C=location.hash.match(/^#build=([\w-]+)/);if(C)try{let j=JSON.parse(decodeURIComponent(escape(atob(C[1].replace(/-/g,"+").replace(/_/g,"/")))));l.forEach(k=>{j&&k in j&&c[k](j[k])&&(n[k]=j[k])}),n.film&&(r=n.film.split(":")[0]),h=!0}catch{}})();let u=window.wrStore,f=!1;if(!h&&!new URLSearchParams(location.search).get("car")&&u){let x=u.load("build");x&&(l.forEach(C=>{C in x&&c[C](x[C])&&(n[C]=x[C])}),n.film&&(r=n.film.split(":")[0]),f=!0)}let m=null,g=()=>{!u||!u.ok()||(clearTimeout(m),m=setTimeout(()=>{let x={};l.forEach(C=>x[C]=n[C]),u.save("build",x)},500))};addEventListener("wr-consent",x=>{x.detail&&g()});let b=x=>({c:x.c,f:x.f,fl:x.fl,s:x.s,a1:x.a1,a2:x.a2,dec:!!(x.dt||i)}),p=()=>$s(n.film),d=()=>{let x=p();if(x)return`${x.brand.short} ${x.code} ${x.name}`;let C=hi.find(j=>j.k===n.preset);return C?Ee(C.en,C.no):n.nm&&n.nmc.toLowerCase()===n.c.toLowerCase()?Ee(...n.nm.split("|")):n.c.toUpperCase()},M=()=>{let x=p();if(x)return Ee(Sn.finishes[x.fin].en,Sn.finishes[x.fin].no);let C=Object.keys(Js).find(j=>j===n.f)||(n.f==="satinMetal"?"satin":n.f==="matteMetal"?"matte":"metallic");return Ee(Js[C].en,Js[C].no)};function _(){let x=n.cer?Ee(" + ceramic coating"," + keramisk coating"):"",C=Ee(ht[n.car].en,ht[n.car].no);if(n.mode==="ppf")return`PPF ${Ee(Pn[n.ppf].en,Pn[n.ppf].no).toLowerCase()}${x} \xB7 ${C}`;let j=n.s!=="solid"&&!(p()&&Sn.finishes[p().fin].skin)?` \xB7 ${Ee(ln[n.s].en,ln[n.s].no).toLowerCase()}`:"",k=n.fl&&!p()?Ee(" with colour shift"," med fargeskift"):"",B=[n.chrome?"chrome delete":"",n.rim!=="silver"?Ee(Ln[n.rim].en,Ln[n.rim].no).toLowerCase()+Ee(" wheels"," felger"):"",n.tint!=="none"?Ee("tint ","vindusfilm ")+_s[n.tint].en:""].filter(Boolean);return`${p()||n.preset?d():M()+" "+d()}${k}${j}${n.dt?` \xB7 \u201C${n.dt}\u201D`:""}${B.length?" \xB7 "+B.join(", "):""}${x} \xB7 ${C}`}function A(){let x={};["car","mode","preset","film","c","f","fl","s","a1","a2","dt","dc","ds","rim","cal","tint","chrome","ppf","cer","nm","nmc"].forEach(j=>x[j]=n[j]);let C=btoa(unescape(encodeURIComponent(JSON.stringify(x)))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");return location.origin+location.pathname+"#build="+C}window.wrBuild=A;let P=document.createElement("canvas");P.width=1024,P.height=512;async function T(){let x=P.getContext("2d");if(x.clearRect(0,0,1024,512),i){let C=Math.min(1e3/i.width,500/i.height),j=i.width*C,k=i.height*C;x.drawImage(i,(1024-j)/2,(512-k)/2,j,k)}else if(n.dt){try{await document.fonts.load("800 120px Jost")}catch{}let C=200;x.font=`800 ${C}px Jost, "Century Gothic", sans-serif`,"fontStretch"in x&&(x.fontStretch="expanded");let j=()=>x.measureText(n.dt.toUpperCase()).width;for(;j()>990&&C>40;)C-=6,x.font=`800 ${C}px Jost, "Century Gothic", sans-serif`;x.fillStyle=n.dc,x.textAlign="center",x.textBaseline="middle",x.fillText(n.dt.toUpperCase(),512,262)}yt&&yt.decal(P,n.ds/100)}window.wrDecalScale=()=>{(n.dt||i)&&T()};let R=(x,C,j,k,B)=>`<button class="sw" style="--sw:${x}${C?`;--fl:${C}`:""}" ${k} aria-pressed="${B}" aria-label="${j}" title="${j}"${C?" data-flip":""}></button>`;function G(){let x=Sn.brands.find(B=>B.k===r)||Sn.brands[0];se("#filmBrands").innerHTML=Sn.brands.map(B=>`<button class="fb" data-fb="${B.k}" aria-pressed="${B.k===x.k}"><b>${B.name}</b><small>${B.range}</small></button>`).join("");let C=[...new Set(x.list.map(B=>B[2]))];se("#filmFin").innerHTML=`<button class="pick" data-ff="all" aria-pressed="${a==="all"}">${Ee("All","Alle")} <small>${x.list.length}</small></button>`+Object.entries(Sn.finishes).filter(([B])=>C.includes(B)).map(([B,le])=>`<button class="pick" data-ff="${B}" aria-pressed="${a===B}">${Ee(le.en,le.no)}</button>`).join("");let j=o.trim().toLowerCase(),k=x.list.filter(B=>(a==="all"||B[2]===a)&&(!j||(B[0]+" "+B[1]).toLowerCase().includes(j)));se("#filmGrid").innerHTML=x.list.length?k.length?k.map(B=>R(B[3],B[4],`${B[1]} \xB7 ${B[0]}`,`data-film="${x.k}:${B[5]||B[0]}"`,n.film===`${x.k}:${B[5]||B[0]}`)).join(""):`<p class="film-empty">${Ee("No colours match.","Ingen farger passer.")}</p>`:`<p class="film-empty">${Ee("The Hexis range is on its way to the site. Ask us for the Hexis colour card on","Hexis-utvalget kommer snart p\xE5 nettsiden. Sp\xF8r oss om Hexis-fargekartet p\xE5")} <a href="${Nh(Ee("Hi Wrappi! Could I see the Hexis colour card?","Hei Wrappi! Kan jeg f\xE5 se Hexis-fargekartet?"))}" target="_blank" rel="noopener">WhatsApp</a>.</p>`,se("#filmCount").textContent=x.list.length?`${k.length} / ${x.list.length}`:""}function S(){se("#carPicks").innerHTML=Object.keys(ha).map(x=>{let C=Object.entries(ht).filter(([,j])=>j.ok&&j.type===x);return C.length?`<div class="carpicks__grp"><span class="mono">${Ee(ha[x].en,ha[x].no)}</span><div class="carpicks__row">${C.map(([j,k])=>`<button class="carpick" type="button" data-car="${j}" aria-pressed="${j===n.car}">${Ee(k.en,k.no)}</button>`).join("")}</div></div>`:""}).join(""),se("#presets").innerHTML=hi.map(x=>`<button class="preset" data-p="${x.k}" aria-pressed="${x.k===n.preset}" style="--sw:${x.b.c}"><img src="${x.th}" alt="" loading="lazy" width="120" height="90"><i></i><span>${Ee(x.en,x.no)}<small>${x.car}</small></span></button>`).join(""),se("#finishPicks").innerHTML=Object.entries(Js).map(([x,C])=>`<button class="pick" data-f="${x}" aria-pressed="false">${Ee(C.en,C.no)}</button>`).join(""),se("#skins").innerHTML=Object.entries(ln).map(([x,C])=>`<button class="skin" data-s="${x}" aria-pressed="false"><em style="--pv:${C.pv}"></em>${Ee(C.en,C.no)}</button>`).join(""),se("#rimPicks").innerHTML=Object.entries(Ln).map(([x,C])=>`<button class="pick" data-rim="${x}" aria-pressed="false">${Ee(C.en,C.no)}</button>`).join(""),se("#calPicks").innerHTML=Object.entries(pc).map(([x,C])=>`<button class="pick" data-cal="${x}" aria-pressed="false"><span style="display:inline-block;width:10px;height:10px;margin-right:8px;background:${C.c}"></span>${Ee(C.en,C.no)}</button>`).join(""),se("#tintPicks").innerHTML=Object.entries(_s).map(([x,C])=>`<button class="pick" data-tint="${x}" aria-pressed="false">${Ee(C.en,C.no)}</button>`).join(""),se("#ppfPicks").innerHTML=Object.entries(Pn).map(([x,C])=>`<button class="pick" data-pp="${x}" aria-pressed="false">${Ee(C.en,C.no)}<small></small></button>`).join(""),sy(),G(),q(!1)}let w=(x,C)=>typeof x.p=="string"&&x.p.startsWith("size:")?gs.sizes[C][x.p.slice(5)]:x.p;function sy(){let r0=r;if(n.film&&$s(n.film))r=n.film.split(":")[0];else{let B=O()[0]==="colorPpf"?Sn.brands.find(k=>k.ppf):Sn.brands.find(k=>k.k===r&&!k.ppf)||Sn.brands.find(k=>!k.ppf);B&&(r=B.k)}return r!==r0&&(a="all",!0)}function O(){if(n.mode==="ppf")return[Pn[n.ppf].s].concat(n.cer?["ceramic"]:[]);let x=[n.f==="chrome"||n.s!=="solid"||n.dt||i||n.film&&!($s(n.film)||{brand:{}}).brand.ppf?"wrap":"colorPpf"];return n.chrome&&x.push("details"),n.tint!=="none"&&x.push("tint"),n.cer&&x.push("ceramic"),x}function q(x){["wrap","skin","detail","ppf"].forEach(ne=>se("#pane-"+ne).hidden=n.mode!==ne),Jt("[data-m]").forEach(ne=>ne.setAttribute("aria-pressed",ne.dataset.m===n.mode)),Jt("[data-car]").forEach(ne=>ne.setAttribute("aria-pressed",ne.dataset.car===n.car)),Jt("[data-p]").forEach(ne=>ne.setAttribute("aria-pressed",ne.dataset.p===n.preset)),Jt("[data-f]").forEach(ne=>ne.setAttribute("aria-pressed",!n.film&&!n.preset&&ne.dataset.f===n.f)),Jt("[data-film]").forEach(ne=>ne.setAttribute("aria-pressed",ne.dataset.film===n.film)),Jt("[data-s]").forEach(ne=>ne.setAttribute("aria-pressed",ne.dataset.s===n.s)),Jt("[data-rim]").forEach(ne=>ne.setAttribute("aria-pressed",ne.dataset.rim===n.rim)),Jt("[data-cal]").forEach(ne=>ne.setAttribute("aria-pressed",ne.dataset.cal===n.cal)),Jt("[data-tint]").forEach(ne=>ne.setAttribute("aria-pressed",ne.dataset.tint===n.tint)),Jt("[data-pp]").forEach(ne=>ne.setAttribute("aria-pressed",ne.dataset.pp===n.ppf));Jt("[data-pp] small").forEach(ne=>{let P=gs.services&&gs.services[Pn[ne.parentNode.dataset.pp].s],Z=gs.sizes&&gs.sizes[ht[n.car].size];ne.textContent=P?(P.to?Sb(P.p)+"\u2013"+ua(P.to):Z?Sb(w(P,ht[n.car].size))+" \xB7 "+Ee(Z.en,Z.no).split(" /")[0]:""):""});let C=se("#flipOff");C&&C.setAttribute("aria-pressed",!n.fl);let j=se("#flipSw");j&&j.style.setProperty("--sw",n.fl||"#2a6bff"),se("#customSw").style.setProperty("--sw",n.c),se("#customPick").value=n.c,se("#a1Sw").style.setProperty("--sw",n.a1),se("#a2Sw").style.setProperty("--sw",n.a2),se("#dcSw").style.setProperty("--sw",n.dc),se("#a1Pick").value=n.a1,se("#a2Pick").value=n.a2,se("#dcPick").value=n.dc,se("#decalSize").value=n.ds,se("#decalTxt").value!==n.dt&&(se("#decalTxt").value=n.dt),se("#ctrlAcc").hidden=!ln[n.s].acc,se("#a2Pick").closest(".acc").hidden=ln[n.s].acc<2,se("#ppfList").innerHTML=Pn[n.ppf].c.map(ne=>`<li>${Ee(ne[0],ne[1])}</li>`).join("");let k=p();se("#filmName").innerHTML=k?`<b>${k.brand.short} \xB7 ${k.code}</b> ${k.name}`:n.preset?`${Ee("From our bay","Fra verkstedet")} \xB7 <b>${d()}</b>`:`${n.nm&&n.nmc.toLowerCase()===n.c.toLowerCase()?Ee("Color PPF","Farget PPF"):Ee("Custom","Egen farge")} \xB7 <b>${M()} ${d()}</b>`,se("#skinName").textContent=Ee(ln[n.s].en,ln[n.s].no),se("#chromeSw").setAttribute("aria-checked",n.chrome),se("#ceramicSw").setAttribute("aria-checked",n.cer),se("#car-s")&&x&&Hh("s",n.mode==="ppf"?"#17181b":n.c,n.mode==="ppf"?"gloss":n.f);let le=_();se("#bayName").textContent=n.mode==="ppf"?`PPF \xB7 ${Ee(Pn[n.ppf].en,Pn[n.ppf].no)}`:k?`${k.brand.short} ${k.code}`:hi.some(ne=>ne.k===n.preset)?d():`${M()} \xB7 ${d()}`,se("#bayCar").textContent=`${Ee(...ha[ht[n.car].type].s)} \xB7 ${Ee(ht[n.car].en,ht[n.car].no)}`;let xe=ht[n.car].credit,Me=se("#bayCredit");if(Me&&xe){Me.textContent="";let ne=document.createElement("a");ne.href=xe.url,ne.target="_blank",ne.rel="noopener",ne.textContent=`\u201C${xe.t}\u201D`,Me.append(Ee("3D model ","3D-modell "),ne,` ${Ee("by","av")} ${xe.by} \xB7 ${xe.lic}`)}if(se("#buildTxt").textContent=le.charAt(0).toUpperCase()+le.slice(1),gs.sizes){let ne=O(),Ie=ht[n.car].size,Le=gs.sizes[Ie],Ge=ne.map(V=>gs.services[V]).filter(V=>w(V,Ie)!=null);se("#buildEst").textContent=Ge.length?`${gs.services[ne[0]]?Ee(gs.services[ne[0]].en,gs.services[ne[0]].no)+" \xB7 ":""}${Ee("Price list","prisliste")} (${Ee(Le.en,Le.no).toLowerCase()}): ${Ge.some(V=>V.from)?Ee("from","fra")+" ":""}${Sb(Ge.reduce((V,St)=>V+w(St,Ie),0))}${!Ge.some(V=>V.from)&&Ge.some(V=>V.to)?"\u2013"+ua(Ge.reduce((V,St)=>V+(St.to||w(St,Ie)),0)):""}${Ge.length<ne.length?Ee(" + on request"," + p\xE5 foresp\xF8rsel"):""}`:Ee("Price on request \u2014 we price wraps after seeing the car","Pris p\xE5 foresp\xF8rsel \u2014 folie prises etter at vi har sett bilen")}if(se("#buildWa").href=Nh(Ee(`Hi Wrappi! I built this on your website: ${le}.
See it: ${A()}
My car: 
Could I get a price?`,`Hei Wrappi! Jeg laget dette p\xE5 nettsiden deres: ${le}.
Se det her: ${A()}
Min bil: 
Kan jeg f\xE5 en pris?`)),g(),yt){yt.setState("s",{mode:n.mode==="ppf"?"ppf":"wrap",ppf:n.ppf==="front"?1:4,cer:n.cer?1:0,rim:n.rim,cal:pc[n.cal].c,tint:n.tint,chrome:n.chrome});let ne=JSON.stringify(n.mode==="ppf"?{p:1}:b(n));(x||ne!==q._k)&&(q._k=ne,yt.wrap("s",n.mode==="ppf"?{c:"#141518",f:"gloss",s:"solid",dec:!1}:b(n)))}}function Q(x){let C=n.mode;n.mode=x,x==="wrap"&&C!=="wrap"&&(sy(),G()),q(C!==x&&(x==="ppf"||C==="ppf"))}Jt("[data-m]").forEach(x=>x.addEventListener("click",()=>Q(x.dataset.m))),se("#carPicks").addEventListener("click",x=>{let C=x.target.closest("[data-car]");!C||C.disabled||(n.car=C.dataset.car,q(!1),yt&&yt.setCar(n.car,()=>q(!0)))}),se("#presets").addEventListener("click",x=>{let C=x.target.closest("[data-p]");if(!C)return;let j=hi.find(k=>k.k===C.dataset.p);Object.assign(n,{preset:j.k,film:null,c:j.b.c,f:j.b.f,fl:j.b.fl||null,s:j.b.s||"solid",a1:j.b.a1||n.a1,a2:j.b.a2||n.a2}),n.mode==="ppf"&&(n.mode="wrap"),sy(),G(),q(!0)}),se("#filmBrands").addEventListener("click",x=>{let C=x.target.closest("[data-fb]");C&&(r=C.dataset.fb,a="all",G())}),se("#filmFin").addEventListener("click",x=>{let C=x.target.closest("[data-ff]");C&&(a=C.dataset.ff,G())});let I;se("#filmSearch").addEventListener("input",x=>{clearTimeout(I),I=setTimeout(()=>{o=x.target.value,G()},120)}),se("#filmGrid").addEventListener("click",x=>{let C=x.target.closest("[data-film]");if(!C)return;let j=$s(C.dataset.film);Object.assign(n,Oh(j),{film:C.dataset.film,preset:null}),n.mode==="ppf"&&(n.mode="wrap"),q(!0)}),se("#finishPicks").addEventListener("click",x=>{let C=x.target.closest("[data-f]");C&&(n.f=C.dataset.f,n.preset=null,n.film=null,n.s==="carbon"&&(n.s="solid"),sy()&&G(),q(!0))}),se("#customPick").addEventListener("input",x=>{n.c=x.target.value,n.preset=null,n.film=null,n.f in Js||(n.f="gloss"),sy()&&G(),q(!0)}),se("#ctrlFlip").addEventListener("click",x=>{x.target.closest("#flipOff")&&(n.fl=null,n.preset=null,n.film=null,q(!0))}),se("#flipPick").addEventListener("input",x=>{n.fl=x.target.value,n.preset=null,n.film=null,q(!0)}),se("#skins").addEventListener("click",x=>{let C=x.target.closest("[data-s]");C&&(n.s=C.dataset.s,n.preset=null,n.film&&Sn.finishes[p().fin].skin&&(n.film=null),n.s==="carbon"&&!["#101113","#1b1c1f","#17181b"].includes(n.c)&&(n.c="#17181b"),q(!0))}),[["#a1Pick","a1"],["#a2Pick","a2"]].forEach(([x,C])=>se(x).addEventListener("input",j=>{n[C]=j.target.value,n.preset=null,q(!0)})),se("#dcPick").addEventListener("input",x=>{n.dc=x.target.value,q(!1),T()});let W;se("#decalTxt").addEventListener("input",x=>{n.dt=x.target.value.slice(0,22),i=null,clearTimeout(W),W=setTimeout(()=>{q(!0),T()},250)}),se("#decalSize").addEventListener("input",x=>{n.ds=+x.target.value,T()}),se("#decalFile").addEventListener("change",x=>{let C=x.target.files[0];if(!C||C.size>8e6||!/^image\/(png|jpeg|webp|gif|svg\+xml)$/.test(C.type))return;let j=URL.createObjectURL(C),k=new Image;k.onload=()=>{URL.revokeObjectURL(j),i=k,n.dt="",q(!0),T()},k.onerror=()=>URL.revokeObjectURL(j),k.src=j}),se("#decalClear").addEventListener("click",()=>{i=null,n.dt="",se("#decalFile").value="",q(!0),T()}),se("#rimPicks").addEventListener("click",x=>{let C=x.target.closest("[data-rim]");C&&(n.rim=C.dataset.rim,q(!1))}),se("#calPicks").addEventListener("click",x=>{let C=x.target.closest("[data-cal]");C&&(n.cal=C.dataset.cal,q(!1))}),se("#tintPicks").addEventListener("click",x=>{let C=x.target.closest("[data-tint]");C&&(n.tint=C.dataset.tint,q(!1))}),se("#chromeSw").addEventListener("click",()=>{n.chrome=!n.chrome,q(!1)}),se("#ppfPicks").addEventListener("click",x=>{let C=x.target.closest("[data-pp]");C&&(n.ppf=C.dataset.pp,q(!1))}),se("#ceramicSw").addEventListener("click",()=>{n.cer=!n.cer,q(!1)}),Jt("[data-v3]").forEach(x=>x.addEventListener("click",()=>{Jt("[data-v3]").forEach(C=>C.setAttribute("aria-pressed",C===x)),yt&&(yt.spin("s",!1),yt.view("s",x.dataset.v3)),se("#bay3dSpin").setAttribute("aria-pressed","false")})),se("#bay3dSpin").addEventListener("click",x=>{let C=x.currentTarget.getAttribute("aria-pressed")!=="true";x.currentTarget.setAttribute("aria-pressed",C),C&&Jt("[data-v3]").forEach(j=>j.setAttribute("aria-pressed",j.dataset.v3==="threeq")),yt&&(yt.spin("s",C),C&&yt.view("s","threeq"))}),se("#shareBtn").addEventListener("click",async()=>{let x=A();try{await navigator.clipboard.writeText(x),Uh(Ee("Link copied \u2014 it opens this exact build","Lenke kopiert \u2014 den \xE5pner akkurat dette bygget"))}catch{prompt(Ee("Copy this link","Kopier denne lenken"),x)}}),se("#snapBtn").addEventListener("click",$);async function $(){let x=yt?yt.snapshot():null,C=1080,j=1350,k=document.createElement("canvas");k.width=C,k.height=j;let B=k.getContext("2d");try{await Promise.all([document.fonts.load("800 60px Jost"),document.fonts.load("500 20px Jost"),document.fonts.load('italic 500 40px "Cormorant Garamond"')])}catch{}let le=B.createLinearGradient(0,0,0,j);le.addColorStop(0,"#17181b"),le.addColorStop(.55,"#0f1012"),le.addColorStop(1,"#0b0c0e"),B.fillStyle=le,B.fillRect(0,0,C,j);let xe=B.createRadialGradient(C/2,900,40,C/2,900,620);xe.addColorStop(0,"rgba(255,255,255,.12)"),xe.addColorStop(1,"rgba(255,255,255,0)"),B.fillStyle=xe,B.fillRect(0,300,C,900),B.fillStyle="rgba(246,246,244,.75)",[260,420,580,740].forEach(he=>B.fillRect(he-60,70,120,4));let Me=await new Promise(he=>{let Qe=new Image;Qe.onload=()=>he(Qe),Qe.onerror=()=>he(null),Qe.src="/logo.png"});if(Me){let Qe=Me.height*300/Me.width;B.drawImage(Me,80,130,300,Qe)}if(B.fillStyle="#d6343c",B.fillRect(80,210,220,4),B.fillStyle="#4092ce",B.fillRect(340,210,220,4),x){let he=await new Promise(y=>{let Y=new Image;Y.onload=()=>y(Y),Y.src=x}),Qe=Math.min(C/he.width,640/he.height),He=he.width*Qe,E=he.height*Qe;B.drawImage(he,(C-He)/2,270+(640-E)/2,He,E)}let ne=he=>{"fontStretch"in B&&(B.fontStretch=he)};B.fillStyle="#f6f6f4",ne("expanded"),B.font='800 64px Jost, "Century Gothic", sans-serif';let Ie=p(),Le=(n.mode==="ppf"?"PPF \xB7 "+Ee(Pn[n.ppf].en,Pn[n.ppf].no):Ie?Ie.name:d()).toUpperCase(),Ge=64;for(;B.measureText(Le).width>C-160&&Ge>30;)Ge-=4,B.font=`800 ${Ge}px Jost, "Century Gothic", sans-serif`;B.fillText(Le,80,1e3),ne("normal"),B.font='500 21px Jost, "Century Gothic", sans-serif',B.fillStyle="#c9cacd";let V=[`${Ee(ht[n.car].en,ht[n.car].no).toUpperCase()}`];n.mode!=="ppf"&&(V.push(Ie?`${Ie.brand.name.toUpperCase()} ${Ie.brand.range.toUpperCase()} \xB7 ${Ie.code}`:`FINISH  ${M().toUpperCase()}${n.fl?Ee(" \xB7 COLOUR SHIFT"," \xB7 FARGESKIFT"):""}`),n.s!=="solid"&&!(Ie&&Sn.finishes[Ie.fin].skin)&&V.push(`SKIN  ${Ee(ln[n.s].en,ln[n.s].no).toUpperCase()}`)),V.push(`${Ee("WHEELS","FELGER")}  ${Ee(Ln[n.rim].en,Ln[n.rim].no).toUpperCase()}${n.tint!=="none"?" \xB7 TINT "+_s[n.tint].en:""}${n.chrome?" \xB7 CHROME DELETE":""}${n.cer?Ee(" \xB7 CERAMIC"," \xB7 KERAMISK"):""}`),V.forEach((he,Qe)=>B.fillText(he,80,1050+Qe*34)),B.fillStyle="rgba(246,246,244,.14)",B.fillRect(80,1196,C-160,1),B.fillStyle="#f6f6f4",B.font='500 20px Jost, "Century Gothic", sans-serif',B.fillText("WRAPPI \xB7 WRAPPING ART DESIGN \xB7 DRIVE DIFFERENT",80,1238),B.fillStyle="#8b8d92",B.fillText("STR\xD8MSVEIEN 324, OSLO \xB7 +47 463 61 675 \xB7 @WRAPPI__",80,1274);let St=k.toDataURL("image/png");se("#posterImg").src=St,se("#posterDl").href=St;let pe=se("#posterShare");try{let he=new File([await(await fetch(St)).blob()],"/wrappi-build.png",{type:"image/png"});navigator.canShare&&navigator.canShare({files:[he]})&&(pe.hidden=!1,pe.onclick=()=>navigator.share({files:[he],text:A()}).catch(()=>{}))}catch{}let Oe=se("#poster");Oe._from=document.activeElement,Oe.hidden=!1,se("#posterX").focus(),window.lenis&&lenis.stop()}let ee=()=>{let x=se("#poster");x.hidden||(x.hidden=!0,window.lenis&&lenis.start(),x._from&&x._from.focus())};se("#posterX").addEventListener("click",ee),se("#poster").addEventListener("click",x=>{x.target.id==="poster"&&ee()}),addEventListener("keydown",x=>{x.key==="Escape"&&ee()}),S(),(h||f)&&n.dt&&T(),f&&setTimeout(()=>Uh(Ee(`Welcome back \u2014 your last build: ${Ee(ht[n.car].en,ht[n.car].no)}`,`Velkommen tilbake \u2014 ditt siste bygg: ${Ee(ht[n.car].en,ht[n.car].no)}`)),900);let J=se("#bay3dSpin");if(ui&&J&&J.setAttribute("aria-pressed","false"),yt){yt.spin("s",!ui);let x=()=>setTimeout(()=>yt.start(n.car),120);document.readyState==="complete"?x():addEventListener("load",x)}let Z=!1;new IntersectionObserver((x,C)=>x.forEach(j=>{j.isIntersecting&&!Z&&(Z=!0,q(!0),C.disconnect())}),{threshold:.2}).observe(s)})();})();
