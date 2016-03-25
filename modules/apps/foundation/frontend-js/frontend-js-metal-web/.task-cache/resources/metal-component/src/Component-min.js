define("frontend-js-metal-web@1.0.5/metal-component/src/Component-min", ["exports","metal/src/metal","metal-dom/src/all/dom","metal-attribute/src/Attribute","./ComponentCollector","./ComponentRegistry","./ComponentRenderer","metal-events/src/events"], function(e,t,n,r,o,i,s,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var u=l(r),h=l(o),m=l(i),f=l(s),E=function(e){function r(n){c(this,r);var o=d(this,e.call(this,n));return (o.components={}, o.decorating_=!1, o.delegateEventHandler_=null, o.elementEventProxy_=null, o.eventsAttrHandler_=new a.EventHandler, o.inDocument=!1, o.initialConfig_=n||{}, o.wasRendered=!1, o.DEFAULT_ELEMENT_PARENT=document.body, t.core.mergeSuperClassesProperty(o.constructor,"ELEMENT_CLASSES",o.mergeElementClasses_), t.core.mergeSuperClassesProperty(o.constructor,"ELEMENT_TAG_NAME",t.array.firstDefinedValue), t.core.mergeSuperClassesProperty(o.constructor,"RENDERER",t.array.firstDefinedValue), o.renderer_=new o.constructor.RENDERER_MERGED(o), o.delegateEventHandler_=new a.EventHandler, o.created_(), o)}return (p(r,e), r.prototype.addListenersFromObj_=function(e){for(var t=Object.keys(e||{}),n=0;n<t.length;n++){var r=this.extractListenerInfo_(e[t[n]]);if(r.fn){var o;o=r.selector?this.delegate(t[n],r.selector,r.fn):this.on(t[n],r.fn),this.eventsAttrHandler_.add(o)}}}, r.prototype.addSingleListener_=function(t,r,o,i){!this.elementEventProxy_&&n.dom.supportsEvent(this.constructor.ELEMENT_TAG_NAME_MERGED,t)&&(this.elementEventProxy_=new n.DomEventEmitterProxy(this.element,this)),e.prototype.addSingleListener_.call(this,t,r,o,i)}, r.prototype.attach=function(e,t){return (this.inDocument||(this.renderElement_(e,t),this.inDocument=!0,this.emit("attached"),this.attached()), this)}, r.prototype.attached=function(){}, r.prototype.created_=function(){this.on("eventsChanged",this.onEventsChanged_),this.addListenersFromObj_(this.events),this.on("attrsChanged",this.handleAttributesChanges_),r.componentsCollector.addComponent(this)}, r.prototype.addSubComponent=function(e,t){var n=(t||{}).id,o=r.componentsCollector.createComponent(e,t);return (this.components[n||o.id]=o, o)}, r.prototype.decorate=function(){return (this.decorating_=!0, this.render(), this.decorating_=!1, this)}, r.prototype.delegate=function(e,t,r){var o=n.dom.delegate(this.element,e,t,r);return (this.delegateEventHandler_.add(o), o)}, r.prototype.detach=function(){return (this.inDocument&&(this.element.parentNode&&this.element.parentNode.removeChild(this.element),this.inDocument=!1,this.detached()), this.emit("detached"), this)}, r.prototype.detached=function(){}, r.prototype.disposeInternal=function(){this.detach(),this.elementEventProxy_&&(this.elementEventProxy_.dispose(),this.elementEventProxy_=null),this.delegateEventHandler_.removeAllListeners(),this.delegateEventHandler_=null,this.disposeSubComponents(Object.keys(this.components)),this.components=null,this.renderer_.dispose(),this.renderer_=null,e.prototype.disposeInternal.call(this)}, r.prototype.disposeSubComponents=function(e){for(var t=0;t<e.length;t++){var n=this.components[e[t]];n.isDisposed()||(r.componentsCollector.removeComponent(n),n.dispose(),delete this.components[e[t]])}}, r.prototype.extractListenerInfo_=function(e){var n={fn:e};return (t.core.isObject(e)&&!t.core.isFunction(e)&&(n.selector=e.selector,n.fn=e.fn), t.core.isString(n.fn)&&(n.fn=this.getListenerFn(n.fn)), n)}, r.prototype.getInitialConfig=function(){return this.initialConfig_}, r.prototype.getListenerFn=function(e){var n,r=e.split(":");return (2===r.length&&(e=r[1],n=h["default"].components[r[0]]), n=n||this, t.core.isFunction(n[e])?n[e].bind(n):void 0)}, r.prototype.findElementById=function(e){return document.getElementById(e)||this.element&&this.element.querySelector("#"+e)}, r.prototype.fireAttrChange_=function(e,n){var r=this["sync"+e.charAt(0).toUpperCase()+e.slice(1)];t.core.isFunction(r)&&(n||(n={newVal:this[e],prevVal:void 0}),r.call(this,n.newVal,n.prevVal))}, r.prototype.getComponentsWithPrefix=function(e){var t=this,n=Object.keys(this.components).filter(function(t){return 0===t.indexOf(e)}),r={};return (n.forEach(function(e){return r[e]=t.components[e]}), r)}, r.prototype.getName=function(){return this.constructor.NAME||t.core.getFunctionName(this.constructor)}, r.prototype.getRenderer=function(){return this.renderer_}, r.prototype.handleAttributesChanges_=function(e){this.syncAttrsFromChanges_(e.changes),this.emit("attrsSynced",e)}, r.prototype.makeId_=function(){return"metal_c_"+t.core.getUid(this)}, r.prototype.mergeElementClasses_=function(e){var t={};return e.filter(function(e){return!e||t[e]?!1:(t[e]=!0,!0)}).join(" ")}, r.prototype.onEventsChanged_=function(e){this.eventsAttrHandler_.removeAllListeners(),this.addListenersFromObj_(e.newVal)}, r.prototype.registerMetalComponent=function(e,t){m["default"].register(e,t)}, r.prototype.render=function(e,t){if(this.wasRendered)throw new Error(r.Error.ALREADY_RENDERED);return (this.emit("render",{decorating:this.decorating_}), this.syncAttrs_(), e!==!1&&this.attach(e,t), this.wasRendered=!0, this)}, r.prototype.renderAsSubComponent=function(){this.syncAttrs_(),this.attach(),this.wasRendered=!0}, r.prototype.renderElement_=function(e,t){var r=this.element;if(r.id=this.id,t||!r.parentNode){var o=n.dom.toElement(e)||this.DEFAULT_ELEMENT_PARENT;o.insertBefore(r,n.dom.toElement(t))}}, r.prototype.setterElementFn_=function(e){var t=n.dom.toElement(e);return (t||(t=this.valueElementFn_()), t)}, r.prototype.syncAttrs_=function(){for(var e=this.getAttrNames(),t=0;t<e.length;t++)this.fireAttrChange_(e[t])}, r.prototype.syncAttrsFromChanges_=function(e){for(var t in e)this.fireAttrChange_(t,e[t])}, r.prototype.syncElementClasses=function(e,t){var r=this.constructor.ELEMENT_CLASSES_MERGED;e&&(r=r+" "+e),t&&n.dom.removeClasses(this.element,t),n.dom.addClasses(this.element,r)}, r.prototype.syncVisible=function(e){this.element.style.display=e?"":"none"}, r.prototype.validatorElementClassesFn_=function(e){return t.core.isString(e)}, r.prototype.validatorElementFn_=function(e){return t.core.isElement(e)||t.core.isString(e)}, r.prototype.validatorEventsFn_=function(e){return!t.core.isDefAndNotNull(e)||t.core.isObject(e)}, r.prototype.validatorIdFn_=function(e){return t.core.isString(e)}, r.prototype.valueElementFn_=function(){return (this.id||(this.id=this.makeId_()), this.renderer_.buildElement())}, r.prototype.valueIdFn_=function(){return this.hasBeenSet("element")&&this.element.id?this.element.id:this.makeId_()}, r)}(u["default"]);E.prototype.registerMetalComponent&&E.prototype.registerMetalComponent(E,"Component"),E.componentsCollector=new h["default"],E.ATTRS={element:{setter:"setterElementFn_",validator:"validatorElementFn_",valueFn:"valueElementFn_",writeOnce:!0},elementClasses:{validator:"validatorElementClassesFn_"},events:{validator:"validatorEventsFn_",value:null},id:{validator:"validatorIdFn_",valueFn:"valueIdFn_",writeOnce:!0},visible:{validator:t.core.isBoolean,value:!0}},E.ELEMENT_CLASSES="component",E.ELEMENT_TAG_NAME="div",E.RENDERER=f["default"],E.Error={ALREADY_RENDERED:"Component already rendered"},E.INVALID_ATTRS=["components"],e["default"]=E});