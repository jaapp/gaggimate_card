/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=i.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(s,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new r(i,t,s)},n=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:a,defineProperty:h,getOwnPropertyDescriptor:c,getOwnPropertyNames:l,getOwnPropertySymbols:d,getPrototypeOf:p}=Object,u=globalThis,g=u.trustedTypes,f=g?g.emptyScript:"",_=u.reactiveElementPolyfillSupport,m=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},y=(t,e)=>!a(t,e),v={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:y};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&h(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const o=i?.call(this);r?.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...l(t),...d(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const s=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((s,i)=>{if(e)s.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of i){const i=document.createElement("style"),r=t.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=e.cssText,s.appendChild(i)}})(s,this.constructor.elementStyles),s}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:$).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=i;const o=r.fromAttribute(e,t.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(t,e,s,i=!1,r){if(void 0!==t){const o=this.constructor;if(!1===i&&(r=this[t]),s??=o.getPropertyOptions(t),!((s.hasChanged??y)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==r||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[m("elementProperties")]=new Map,b[m("finalized")]=new Map,_?.({ReactiveElement:b}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,w=t=>t,x=A.trustedTypes,E=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+C,O=`<${P}>`,T=document,k=()=>T.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,N="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,z=/>/g,j=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,B=/"/g,I=/^(?:script|style|textarea|title)$/i,L=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),V=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),F=new WeakMap,q=T.createTreeWalker(T,129);function G(t,e){if(!M(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const Y=(t,e)=>{const s=t.length-1,i=[];let r,o=2===e?"<svg>":3===e?"<math>":"",n=H;for(let e=0;e<s;e++){const s=t[e];let a,h,c=-1,l=0;for(;l<s.length&&(n.lastIndex=l,h=n.exec(s),null!==h);)l=n.lastIndex,n===H?"!--"===h[1]?n=R:void 0!==h[1]?n=z:void 0!==h[2]?(I.test(h[2])&&(r=RegExp("</"+h[2],"g")),n=j):void 0!==h[3]&&(n=j):n===j?">"===h[0]?(n=r??H,c=-1):void 0===h[1]?c=-2:(c=n.lastIndex-h[2].length,a=h[1],n=void 0===h[3]?j:'"'===h[3]?B:D):n===B||n===D?n=j:n===R||n===z?n=H:(n=j,r=void 0);const d=n===j&&t[e+1].startsWith("/>")?" ":"";o+=n===H?s+O:c>=0?(i.push(a),s.slice(0,c)+S+s.slice(c)+C+d):s+C+(-2===c?e:d)}return[G(t,o+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class J{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[h,c]=Y(t,e);if(this.el=J.createElement(h,s),q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=q.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(S)){const e=c[o++],s=i.getAttribute(t).split(C),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:s,ctor:"."===n[1]?tt:"?"===n[1]?et:"@"===n[1]?st:X}),i.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(I.test(i.tagName)){const t=i.textContent.split(C),e=t.length-1;if(e>0){i.textContent=x?x.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],k()),q.nextNode(),a.push({type:2,index:++r});i.append(t[e],k())}}}else if(8===i.nodeType)if(i.data===P)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(C,t+1));)a.push({type:7,index:r}),t+=C.length-1}r++}}static createElement(t,e){const s=T.createElement("template");return s.innerHTML=t,s}}function K(t,e,s=t,i){if(e===V)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const o=U(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=K(t,r._$AS(t,e.values),r,i)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??T).importNode(e,!0);q.currentNode=i;let r=q.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new Q(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new it(r,this,t)),this._$AV.push(e),a=s[++n]}o!==a?.index&&(r=q.nextNode(),o++)}return q.currentNode=T,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),U(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=J.createElement(G(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Z(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new J(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new Q(this.O(k()),this.O(k()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=w(t).nextSibling;w(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=W}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(void 0===r)t=K(this,t,e,0),o=!U(t)||t!==this._$AH&&t!==V,o&&(this._$AH=t);else{const i=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=K(this,i[s+n],e,n),a===V&&(a=this._$AH[n]),o||=!U(a)||a!==this._$AH[n],a===W?t=W:t!==W&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!i&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class et extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class st extends X{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??W)===V)return;const s=this._$AH,i=t===W&&s!==W||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==W&&(s===W||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const rt=A.litHtmlPolyfillSupport;rt?.(J,Q),(A.litHtmlVersions??=[]).push("3.3.2");const ot=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class nt extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new Q(e.insertBefore(k(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}nt._$litElement$=!0,nt.finalized=!0,ot.litElementHydrateSupport?.({LitElement:nt});const at=ot.litElementPolyfillSupport;at?.({LitElement:nt}),(ot.litElementVersions??=[]).push("4.2.2");customElements.define("gaggimate-card-editor",class extends nt{static get properties(){return{hass:{type:Object},config:{type:Object}}}setConfig(t){this.config=t}_valueChanged(t){if(!this.config||!this.hass)return;const e=t.target,s=void 0!==e.checked?e.checked:e.value;if(this[`_${e.configValue}`]===s)return;const i={...this.config,[e.configValue]:s},r=new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0});this.dispatchEvent(r)}render(){return this.hass&&this.config?(Object.keys(this.hass.states).filter(t=>t.startsWith("sensor.")&&t.includes("_mode")),L`
      <div class="card-config">
        <ha-entity-picker
          .hass=${this.hass}
          .value=${this.config.entity}
          .configValue=${"entity"}
          .includeDomains=${["sensor"]}
          @value-changed=${this._valueChanged}
          allow-custom-entity
          label="Entity (Mode Sensor)"
        ></ha-entity-picker>

        <paper-input
          label="Name (Optional)"
          .value=${this.config.name||""}
          .configValue=${"name"}
          @value-changed=${this._valueChanged}
        ></paper-input>

        <ha-formfield label="Show Profile">
          <ha-switch
            .checked=${!1!==this.config.show_profile}
            .configValue=${"show_profile"}
            @change=${this._valueChanged}
          ></ha-switch>
        </ha-formfield>

        <ha-formfield label="Show Progress Bar">
          <ha-switch
            .checked=${!1!==this.config.show_progress}
            .configValue=${"show_progress"}
            @change=${this._valueChanged}
          ></ha-switch>
        </ha-formfield>
      </div>
    `):L``}static get styles(){return o`
      .card-config {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      ha-formfield {
        display: flex;
        align-items: center;
        padding: 8px 0;
      }
    `}});const ht={0:{name:"Standby",icon:"mdi:power-standby"},1:{name:"Brew",icon:"mdi:coffee"},2:{name:"Steam",icon:"mdi:cloud"},3:{name:"Water",icon:"mdi:water"}};customElements.define("gaggimate-card",class extends nt{static get properties(){return{hass:{type:Object},config:{type:Object},_currentTemp:{type:Number},_targetTemp:{type:Number},_pressure:{type:Number},_mode:{type:Number},_profile:{type:String},_weight:{type:Number},_brewing:{type:Boolean}}}static getStubConfig(){return{entity:"sensor.gaggimate_mode",show_profile:!0,show_progress:!0}}static getConfigElement(){return document.createElement("gaggimate-card-editor")}setConfig(t){if(!t.entity)throw new Error("You need to define an entity");this.config={show_profile:!0,show_progress:!0,...t}}getCardSize(){return 4}shouldUpdate(t){return!!this.config}updated(t){t.has("hass")&&this._updateFromHass()}_updateFromHass(){if(!this.hass||!this.config)return;const t=this._getDeviceId();if(!t)return;this._currentTemp=this._getEntityState(`sensor.${t}_current_temperature`),this._targetTemp=this._getEntityState(`sensor.${t}_target_temperature`),this._pressure=this._getEntityState(`sensor.${t}_current_pressure`),this._weight=this._getEntityState(`sensor.${t}_current_weight`);const e=this.hass.states[`sensor.${t}_mode`];if(e){const t=e.attributes?.mode_id;this._mode=void 0!==t?t:0}const s=this.hass.states[`sensor.${t}_selected_profile`];s&&(this._profile=s.state),this._brewing=!1}_getDeviceId(){if(!this.config.entity)return null;const t=this.config.entity.split(".");if(t.length<2)return null;const e=t[1],s=e.lastIndexOf("_");return e.substring(0,s)}_getEntityState(t){if(!this.hass||!this.hass.states)return null;const e=this.hass.states[t];return e?parseFloat(e.state):null}_handleModeChange(t){const e=this._getDeviceId();if(!e)return;const s=`select.${e}_mode`,i=ht[t]?.name;i&&this.hass.callService("select","select_option",{entity_id:s,option:i})}_handleBrewToggle(){console.log("Brew toggle clicked")}_formatTemp(t){return null!==t?t.toFixed(1):"--"}_formatPressure(t){return null!==t?t.toFixed(1):"--"}render(){return this.config&&this.hass?L`
      <ha-card>
        <div class="card-content">
          ${this.config.name?L`<h1 class="card-header">${this.config.name}</h1>`:""}

          <!-- Status Row -->
          <div class="status-row">
            <div class="status-item">
              <ha-icon icon="mdi:thermometer"></ha-icon>
              <span class="value">${this._formatTemp(this._currentTemp)}</span>
              <span class="target">/ ${this._formatTemp(this._targetTemp)}°C</span>
            </div>

            <div class="status-item">
              <ha-icon icon="mdi:gauge"></ha-icon>
              <span class="value">${this._formatPressure(this._pressure)} bar</span>
            </div>

            ${null!==this._weight?L`
              <div class="status-item">
                <ha-icon icon="mdi:scale"></ha-icon>
                <span class="value">${this._weight?.toFixed(1)}g</span>
              </div>
            `:""}
          </div>

          <!-- Mode Selector -->
          <div class="mode-selector">
            ${Object.entries(ht).map(([t,e])=>L`
              <button
                class="mode-button ${this._mode===parseInt(t)?"active":""}"
                @click=${()=>this._handleModeChange(parseInt(t))}
              >
                ${e.name}
              </button>
            `)}
          </div>

          <!-- Profile Display -->
          ${this.config.show_profile&&this._profile?L`
            <div class="profile-section">
              <div class="profile-label">Current Profile</div>
              <div class="profile-name">${this._profile}</div>
            </div>
          `:""}

          <!-- Brew Controls -->
          ${1===this._mode?L`
            <div class="brew-controls">
              <button class="brew-button ${this._brewing?"brewing":""}" @click=${this._handleBrewToggle}>
                <ha-icon icon="${this._brewing?"mdi:pause":"mdi:play"}"></ha-icon>
                <span>${this._brewing?"Stop":"Start"} Brew</span>
              </button>
            </div>
          `:""}

          <!-- Progress Bar (when brewing) -->
          ${this.config.show_progress&&this._brewing?L`
            <div class="progress-section">
              <div class="progress-info">
                <span class="phase">Infusion</span>
                <span class="time">0:45</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill" style="width: 60%"></div>
              </div>
            </div>
          `:""}
        </div>
      </ha-card>
    `:L``}static get styles(){return o`
      :host {
        display: block;
      }

      ha-card {
        padding: 16px;
      }

      .card-header {
        margin: 0 0 16px 0;
        font-size: 24px;
        font-weight: 500;
      }

      .status-row {
        display: flex;
        justify-content: space-around;
        margin-bottom: 16px;
        padding: 16px;
        background: var(--secondary-background-color);
        border-radius: 12px;
      }

      .status-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
      }

      .status-item ha-icon {
        --mdi-icon-size: 24px;
        color: var(--secondary-text-color);
      }

      .status-item .value {
        font-size: 20px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .status-item .target {
        font-size: 16px;
        font-weight: 500;
        color: var(--success-color, #4caf50);
      }

      .mode-selector {
        display: flex;
        gap: 8px;
        margin-bottom: 16px;
        background: var(--secondary-background-color);
        padding: 4px;
        border-radius: 24px;
      }

      .mode-button {
        flex: 1;
        padding: 12px 16px;
        border: none;
        border-radius: 20px;
        background: transparent;
        color: var(--secondary-text-color);
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
      }

      .mode-button:hover {
        background: var(--divider-color);
      }

      .mode-button.active {
        background: var(--primary-color);
        color: var(--text-primary-color);
      }

      .profile-section {
        text-align: center;
        margin-bottom: 16px;
      }

      .profile-label {
        font-size: 12px;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 4px;
      }

      .profile-name {
        font-size: 20px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .brew-controls {
        display: flex;
        justify-content: center;
        margin-bottom: 16px;
      }

      .brew-button {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 16px 32px;
        border: none;
        border-radius: 28px;
        background: var(--primary-color);
        color: var(--text-primary-color);
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      }

      .brew-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      }

      .brew-button:active {
        transform: translateY(0);
      }

      .brew-button.brewing {
        background: var(--error-color, #f44336);
      }

      .brew-button ha-icon {
        --mdi-icon-size: 24px;
      }

      .progress-section {
        margin-top: 16px;
      }

      .progress-info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        font-size: 14px;
      }

      .progress-info .phase {
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        font-size: 12px;
      }

      .progress-info .time {
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .progress-bar {
        height: 8px;
        background: var(--secondary-background-color);
        border-radius: 4px;
        overflow: hidden;
      }

      .progress-fill {
        height: 100%;
        background: var(--primary-color);
        transition: width 0.3s ease;
      }
    `}}),window.customCards=window.customCards||[],window.customCards.push({type:"gaggimate-card",name:"GaggiMate Card",description:"Custom card for controlling GaggiMate espresso machine",preview:!1,documentationURL:"https://github.com/jaapp/gaggimate_card"}),console.info("%c GAGGIMATE-CARD %c 1.0.0 ","color: white; background: #0066cc; font-weight: 700;","color: #0066cc; background: white; font-weight: 700;");
//# sourceMappingURL=gaggimate-card.js.map
