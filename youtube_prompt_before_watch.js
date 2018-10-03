window.habitlab_content_script = true;

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"interventions/youtube/prompt_before_watch/frontend": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/enable-webcomponents-in-content-scripts/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/enable-webcomponents-in-content-scripts/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (document.registerElement && /\{\s*\[native code\]\s*\}/.test(document.registerElement)) {
  document.registerElement = null; // disable native implementation of v0
}
if (document.registerElement == null) {
  __webpack_require__(/*! webcomponentsjs-custom-element-v0 */ "./node_modules/webcomponentsjs-custom-element-v0/CustomElements.js");
}


/***/ }),

/***/ "./node_modules/webcomponentsjs-custom-element-v0/CustomElements.js":
/*!**************************************************************************!*\
  !*** ./node_modules/webcomponentsjs-custom-element-v0/CustomElements.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
// @version 0.7.22
if (typeof WeakMap === "undefined") {
  (function() {
    var defineProperty = Object.defineProperty;
    var counter = Date.now() % 1e9;
    var WeakMap = function() {
      this.name = "__st" + (Math.random() * 1e9 >>> 0) + (counter++ + "__");
    };
    WeakMap.prototype = {
      set: function(key, value) {
        var entry = key[this.name];
        if (entry && entry[0] === key) entry[1] = value; else defineProperty(key, this.name, {
          value: [ key, value ],
          writable: true
        });
        return this;
      },
      get: function(key) {
        var entry;
        return (entry = key[this.name]) && entry[0] === key ? entry[1] : undefined;
      },
      "delete": function(key) {
        var entry = key[this.name];
        if (!entry || entry[0] !== key) return false;
        entry[0] = entry[1] = undefined;
        return true;
      },
      has: function(key) {
        var entry = key[this.name];
        if (!entry) return false;
        return entry[0] === key;
      }
    };
    window.WeakMap = WeakMap;
  })();
}

(function(global) {
  if (global.JsMutationObserver) {
    return;
  }
  var registrationsTable = new WeakMap();
  var setImmediate;
  if (/Trident|Edge/.test(navigator.userAgent)) {
    setImmediate = setTimeout;
  } else if (window.setImmediate) {
    setImmediate = window.setImmediate;
  } else {
    var setImmediateQueue = [];
    var sentinel = String(Math.random());
    window.addEventListener("message", function(e) {
      if (e.data === sentinel) {
        var queue = setImmediateQueue;
        setImmediateQueue = [];
        queue.forEach(function(func) {
          func();
        });
      }
    });
    setImmediate = function(func) {
      setImmediateQueue.push(func);
      window.postMessage(sentinel, "*");
    };
  }
  var isScheduled = false;
  var scheduledObservers = [];
  function scheduleCallback(observer) {
    scheduledObservers.push(observer);
    if (!isScheduled) {
      isScheduled = true;
      setImmediate(dispatchCallbacks);
    }
  }
  function wrapIfNeeded(node) {
    return window.ShadowDOMPolyfill && window.ShadowDOMPolyfill.wrapIfNeeded(node) || node;
  }
  function dispatchCallbacks() {
    isScheduled = false;
    var observers = scheduledObservers;
    scheduledObservers = [];
    observers.sort(function(o1, o2) {
      return o1.uid_ - o2.uid_;
    });
    var anyNonEmpty = false;
    observers.forEach(function(observer) {
      var queue = observer.takeRecords();
      removeTransientObserversFor(observer);
      if (queue.length) {
        observer.callback_(queue, observer);
        anyNonEmpty = true;
      }
    });
    if (anyNonEmpty) dispatchCallbacks();
  }
  function removeTransientObserversFor(observer) {
    observer.nodes_.forEach(function(node) {
      var registrations = registrationsTable.get(node);
      if (!registrations) return;
      registrations.forEach(function(registration) {
        if (registration.observer === observer) registration.removeTransientObservers();
      });
    });
  }
  function forEachAncestorAndObserverEnqueueRecord(target, callback) {
    for (var node = target; node; node = node.parentNode) {
      var registrations = registrationsTable.get(node);
      if (registrations) {
        for (var j = 0; j < registrations.length; j++) {
          var registration = registrations[j];
          var options = registration.options;
          if (node !== target && !options.subtree) continue;
          var record = callback(options);
          if (record) registration.enqueue(record);
        }
      }
    }
  }
  var uidCounter = 0;
  function JsMutationObserver(callback) {
    this.callback_ = callback;
    this.nodes_ = [];
    this.records_ = [];
    this.uid_ = ++uidCounter;
  }
  JsMutationObserver.prototype = {
    observe: function(target, options) {
      target = wrapIfNeeded(target);
      if (!options.childList && !options.attributes && !options.characterData || options.attributeOldValue && !options.attributes || options.attributeFilter && options.attributeFilter.length && !options.attributes || options.characterDataOldValue && !options.characterData) {
        throw new SyntaxError();
      }
      var registrations = registrationsTable.get(target);
      if (!registrations) registrationsTable.set(target, registrations = []);
      var registration;
      for (var i = 0; i < registrations.length; i++) {
        if (registrations[i].observer === this) {
          registration = registrations[i];
          registration.removeListeners();
          registration.options = options;
          break;
        }
      }
      if (!registration) {
        registration = new Registration(this, target, options);
        registrations.push(registration);
        this.nodes_.push(target);
      }
      registration.addListeners();
    },
    disconnect: function() {
      this.nodes_.forEach(function(node) {
        var registrations = registrationsTable.get(node);
        for (var i = 0; i < registrations.length; i++) {
          var registration = registrations[i];
          if (registration.observer === this) {
            registration.removeListeners();
            registrations.splice(i, 1);
            break;
          }
        }
      }, this);
      this.records_ = [];
    },
    takeRecords: function() {
      var copyOfRecords = this.records_;
      this.records_ = [];
      return copyOfRecords;
    }
  };
  function MutationRecord(type, target) {
    this.type = type;
    this.target = target;
    this.addedNodes = [];
    this.removedNodes = [];
    this.previousSibling = null;
    this.nextSibling = null;
    this.attributeName = null;
    this.attributeNamespace = null;
    this.oldValue = null;
  }
  function copyMutationRecord(original) {
    var record = new MutationRecord(original.type, original.target);
    record.addedNodes = original.addedNodes.slice();
    record.removedNodes = original.removedNodes.slice();
    record.previousSibling = original.previousSibling;
    record.nextSibling = original.nextSibling;
    record.attributeName = original.attributeName;
    record.attributeNamespace = original.attributeNamespace;
    record.oldValue = original.oldValue;
    return record;
  }
  var currentRecord, recordWithOldValue;
  function getRecord(type, target) {
    return currentRecord = new MutationRecord(type, target);
  }
  function getRecordWithOldValue(oldValue) {
    if (recordWithOldValue) return recordWithOldValue;
    recordWithOldValue = copyMutationRecord(currentRecord);
    recordWithOldValue.oldValue = oldValue;
    return recordWithOldValue;
  }
  function clearRecords() {
    currentRecord = recordWithOldValue = undefined;
  }
  function recordRepresentsCurrentMutation(record) {
    return record === recordWithOldValue || record === currentRecord;
  }
  function selectRecord(lastRecord, newRecord) {
    if (lastRecord === newRecord) return lastRecord;
    if (recordWithOldValue && recordRepresentsCurrentMutation(lastRecord)) return recordWithOldValue;
    return null;
  }
  function Registration(observer, target, options) {
    this.observer = observer;
    this.target = target;
    this.options = options;
    this.transientObservedNodes = [];
  }
  Registration.prototype = {
    enqueue: function(record) {
      var records = this.observer.records_;
      var length = records.length;
      if (records.length > 0) {
        var lastRecord = records[length - 1];
        var recordToReplaceLast = selectRecord(lastRecord, record);
        if (recordToReplaceLast) {
          records[length - 1] = recordToReplaceLast;
          return;
        }
      } else {
        scheduleCallback(this.observer);
      }
      records[length] = record;
    },
    addListeners: function() {
      this.addListeners_(this.target);
    },
    addListeners_: function(node) {
      var options = this.options;
      if (options.attributes) node.addEventListener("DOMAttrModified", this, true);
      if (options.characterData) node.addEventListener("DOMCharacterDataModified", this, true);
      if (options.childList) node.addEventListener("DOMNodeInserted", this, true);
      if (options.childList || options.subtree) node.addEventListener("DOMNodeRemoved", this, true);
    },
    removeListeners: function() {
      this.removeListeners_(this.target);
    },
    removeListeners_: function(node) {
      var options = this.options;
      if (options.attributes) node.removeEventListener("DOMAttrModified", this, true);
      if (options.characterData) node.removeEventListener("DOMCharacterDataModified", this, true);
      if (options.childList) node.removeEventListener("DOMNodeInserted", this, true);
      if (options.childList || options.subtree) node.removeEventListener("DOMNodeRemoved", this, true);
    },
    addTransientObserver: function(node) {
      if (node === this.target) return;
      this.addListeners_(node);
      this.transientObservedNodes.push(node);
      var registrations = registrationsTable.get(node);
      if (!registrations) registrationsTable.set(node, registrations = []);
      registrations.push(this);
    },
    removeTransientObservers: function() {
      var transientObservedNodes = this.transientObservedNodes;
      this.transientObservedNodes = [];
      transientObservedNodes.forEach(function(node) {
        this.removeListeners_(node);
        var registrations = registrationsTable.get(node);
        for (var i = 0; i < registrations.length; i++) {
          if (registrations[i] === this) {
            registrations.splice(i, 1);
            break;
          }
        }
      }, this);
    },
    handleEvent: function(e) {
      e.stopImmediatePropagation();
      switch (e.type) {
       case "DOMAttrModified":
        var name = e.attrName;
        var namespace = e.relatedNode.namespaceURI;
        var target = e.target;
        var record = new getRecord("attributes", target);
        record.attributeName = name;
        record.attributeNamespace = namespace;
        var oldValue = e.attrChange === MutationEvent.ADDITION ? null : e.prevValue;
        forEachAncestorAndObserverEnqueueRecord(target, function(options) {
          if (!options.attributes) return;
          if (options.attributeFilter && options.attributeFilter.length && options.attributeFilter.indexOf(name) === -1 && options.attributeFilter.indexOf(namespace) === -1) {
            return;
          }
          if (options.attributeOldValue) return getRecordWithOldValue(oldValue);
          return record;
        });
        break;

       case "DOMCharacterDataModified":
        var target = e.target;
        var record = getRecord("characterData", target);
        var oldValue = e.prevValue;
        forEachAncestorAndObserverEnqueueRecord(target, function(options) {
          if (!options.characterData) return;
          if (options.characterDataOldValue) return getRecordWithOldValue(oldValue);
          return record;
        });
        break;

       case "DOMNodeRemoved":
        this.addTransientObserver(e.target);

       case "DOMNodeInserted":
        var changedNode = e.target;
        var addedNodes, removedNodes;
        if (e.type === "DOMNodeInserted") {
          addedNodes = [ changedNode ];
          removedNodes = [];
        } else {
          addedNodes = [];
          removedNodes = [ changedNode ];
        }
        var previousSibling = changedNode.previousSibling;
        var nextSibling = changedNode.nextSibling;
        var record = getRecord("childList", e.target.parentNode);
        record.addedNodes = addedNodes;
        record.removedNodes = removedNodes;
        record.previousSibling = previousSibling;
        record.nextSibling = nextSibling;
        forEachAncestorAndObserverEnqueueRecord(e.relatedNode, function(options) {
          if (!options.childList) return;
          return record;
        });
      }
      clearRecords();
    }
  };
  global.JsMutationObserver = JsMutationObserver;
  if (!global.MutationObserver) {
    global.MutationObserver = JsMutationObserver;
    JsMutationObserver._isPolyfilled = true;
  }
})(self);

(function(scope) {
  "use strict";
  if (!window.performance) {
    var start = Date.now();
    window.performance = {
      now: function() {
        return Date.now() - start;
      }
    };
  }
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function() {
      var nativeRaf = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
      return nativeRaf ? function(callback) {
        return nativeRaf(function() {
          callback(performance.now());
        });
      } : function(callback) {
        return window.setTimeout(callback, 1e3 / 60);
      };
    }();
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function() {
      return window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function(id) {
        clearTimeout(id);
      };
    }();
  }
  var workingDefaultPrevented = function() {
    var e = document.createEvent("Event");
    e.initEvent("foo", true, true);
    e.preventDefault();
    return e.defaultPrevented;
  }();
  if (!workingDefaultPrevented) {
    var origPreventDefault = Event.prototype.preventDefault;
    Event.prototype.preventDefault = function() {
      if (!this.cancelable) {
        return;
      }
      origPreventDefault.call(this);
      Object.defineProperty(this, "defaultPrevented", {
        get: function() {
          return true;
        },
        configurable: true
      });
    };
  }
  var isIE = /Trident/.test(navigator.userAgent);
  if (!window.CustomEvent || isIE && typeof window.CustomEvent !== "function") {
    window.CustomEvent = function(inType, params) {
      params = params || {};
      var e = document.createEvent("CustomEvent");
      e.initCustomEvent(inType, Boolean(params.bubbles), Boolean(params.cancelable), params.detail);
      return e;
    };
    window.CustomEvent.prototype = window.Event.prototype;
  }
  if (!window.Event || isIE && typeof window.Event !== "function") {
    var origEvent = window.Event;
    window.Event = function(inType, params) {
      params = params || {};
      var e = document.createEvent("Event");
      e.initEvent(inType, Boolean(params.bubbles), Boolean(params.cancelable));
      return e;
    };
    window.Event.prototype = origEvent.prototype;
  }
})(window.WebComponents);

window.CustomElements = window.CustomElements || {
  flags: {}
};

(function(scope) {
  var flags = scope.flags;
  var modules = [];
  var addModule = function(module) {
    modules.push(module);
  };
  var initializeModules = function() {
    modules.forEach(function(module) {
      module(scope);
    });
  };
  scope.addModule = addModule;
  scope.initializeModules = initializeModules;
  scope.hasNative = Boolean(document.registerElement);
  scope.isIE = /Trident/.test(navigator.userAgent);
  scope.useNative = !flags.register && scope.hasNative && !window.ShadowDOMPolyfill && (!window.HTMLImports || window.HTMLImports.useNative);
})(window.CustomElements);

window.CustomElements.addModule(function(scope) {
  var IMPORT_LINK_TYPE = window.HTMLImports ? window.HTMLImports.IMPORT_LINK_TYPE : "none";
  function forSubtree(node, cb) {
    findAllElements(node, function(e) {
      if (cb(e)) {
        return true;
      }
      forRoots(e, cb);
    });
    forRoots(node, cb);
  }
  function findAllElements(node, find, data) {
    var e = node.firstElementChild;
    if (!e) {
      e = node.firstChild;
      while (e && e.nodeType !== Node.ELEMENT_NODE) {
        e = e.nextSibling;
      }
    }
    while (e) {
      if (find(e, data) !== true) {
        findAllElements(e, find, data);
      }
      e = e.nextElementSibling;
    }
    return null;
  }
  function forRoots(node, cb) {
    var root = node.shadowRoot;
    while (root) {
      forSubtree(root, cb);
      root = root.olderShadowRoot;
    }
  }
  function forDocumentTree(doc, cb) {
    _forDocumentTree(doc, cb, []);
  }
  function _forDocumentTree(doc, cb, processingDocuments) {
    doc = window.wrap(doc);
    if (processingDocuments.indexOf(doc) >= 0) {
      return;
    }
    processingDocuments.push(doc);
    var imports = doc.querySelectorAll("link[rel=" + IMPORT_LINK_TYPE + "]");
    for (var i = 0, l = imports.length, n; i < l && (n = imports[i]); i++) {
      if (n.import) {
        _forDocumentTree(n.import, cb, processingDocuments);
      }
    }
    cb(doc);
  }
  scope.forDocumentTree = forDocumentTree;
  scope.forSubtree = forSubtree;
});

window.CustomElements.addModule(function(scope) {
  var flags = scope.flags;
  var forSubtree = scope.forSubtree;
  var forDocumentTree = scope.forDocumentTree;
  function addedNode(node, isAttached) {
    return added(node, isAttached) || addedSubtree(node, isAttached);
  }
  function added(node, isAttached) {
    if (scope.upgrade(node, isAttached)) {
      return true;
    }
    if (isAttached) {
      attached(node);
    }
  }
  function addedSubtree(node, isAttached) {
    forSubtree(node, function(e) {
      if (added(e, isAttached)) {
        return true;
      }
    });
  }
  var hasThrottledAttached = window.MutationObserver._isPolyfilled && flags["throttle-attached"];
  scope.hasPolyfillMutations = hasThrottledAttached;
  scope.hasThrottledAttached = hasThrottledAttached;
  var isPendingMutations = false;
  var pendingMutations = [];
  function deferMutation(fn) {
    pendingMutations.push(fn);
    if (!isPendingMutations) {
      isPendingMutations = true;
      setTimeout(takeMutations);
    }
  }
  function takeMutations() {
    isPendingMutations = false;
    var $p = pendingMutations;
    for (var i = 0, l = $p.length, p; i < l && (p = $p[i]); i++) {
      p();
    }
    pendingMutations = [];
  }
  function attached(element) {
    if (hasThrottledAttached) {
      deferMutation(function() {
        _attached(element);
      });
    } else {
      _attached(element);
    }
  }
  function _attached(element) {
    if (element.__upgraded__ && !element.__attached) {
      element.__attached = true;
      if (element.attachedCallback) {
        element.attachedCallback();
      }
    }
  }
  function detachedNode(node) {
    detached(node);
    forSubtree(node, function(e) {
      detached(e);
    });
  }
  function detached(element) {
    if (hasThrottledAttached) {
      deferMutation(function() {
        _detached(element);
      });
    } else {
      _detached(element);
    }
  }
  function _detached(element) {
    if (element.__upgraded__ && element.__attached) {
      element.__attached = false;
      if (element.detachedCallback) {
        element.detachedCallback();
      }
    }
  }
  function inDocument(element) {
    var p = element;
    var doc = window.wrap(document);
    while (p) {
      if (p == doc) {
        return true;
      }
      p = p.parentNode || p.nodeType === Node.DOCUMENT_FRAGMENT_NODE && p.host;
    }
  }
  function watchShadow(node) {
    if (node.shadowRoot && !node.shadowRoot.__watched) {
      flags.dom && console.log("watching shadow-root for: ", node.localName);
      var root = node.shadowRoot;
      while (root) {
        observe(root);
        root = root.olderShadowRoot;
      }
    }
  }
  function handler(root, mutations) {
    if (flags.dom) {
      var mx = mutations[0];
      if (mx && mx.type === "childList" && mx.addedNodes) {
        if (mx.addedNodes) {
          var d = mx.addedNodes[0];
          while (d && d !== document && !d.host) {
            d = d.parentNode;
          }
          var u = d && (d.URL || d._URL || d.host && d.host.localName) || "";
          u = u.split("/?").shift().split("/").pop();
        }
      }
      console.group("mutations (%d) [%s]", mutations.length, u || "");
    }
    var isAttached = inDocument(root);
    mutations.forEach(function(mx) {
      if (mx.type === "childList") {
        forEach(mx.addedNodes, function(n) {
          if (!n.localName) {
            return;
          }
          addedNode(n, isAttached);
        });
        forEach(mx.removedNodes, function(n) {
          if (!n.localName) {
            return;
          }
          detachedNode(n);
        });
      }
    });
    flags.dom && console.groupEnd();
  }
  function takeRecords(node) {
    node = window.wrap(node);
    if (!node) {
      node = window.wrap(document);
    }
    while (node.parentNode) {
      node = node.parentNode;
    }
    var observer = node.__observer;
    if (observer) {
      handler(node, observer.takeRecords());
      takeMutations();
    }
  }
  var forEach = Array.prototype.forEach.call.bind(Array.prototype.forEach);
  function observe(inRoot) {
    if (inRoot.__observer) {
      return;
    }
    var observer = new MutationObserver(handler.bind(this, inRoot));
    observer.observe(inRoot, {
      childList: true,
      subtree: true
    });
    inRoot.__observer = observer;
  }
  function upgradeDocument(doc) {
    doc = window.wrap(doc);
    flags.dom && console.group("upgradeDocument: ", doc.baseURI.split("/").pop());
    var isMainDocument = doc === window.wrap(document);
    addedNode(doc, isMainDocument);
    observe(doc);
    flags.dom && console.groupEnd();
  }
  function upgradeDocumentTree(doc) {
    forDocumentTree(doc, upgradeDocument);
  }
  var originalCreateShadowRoot = Element.prototype.createShadowRoot;
  if (originalCreateShadowRoot) {
    Element.prototype.createShadowRoot = function() {
      var root = originalCreateShadowRoot.call(this);
      window.CustomElements.watchShadow(this);
      return root;
    };
  }
  scope.watchShadow = watchShadow;
  scope.upgradeDocumentTree = upgradeDocumentTree;
  scope.upgradeDocument = upgradeDocument;
  scope.upgradeSubtree = addedSubtree;
  scope.upgradeAll = addedNode;
  scope.attached = attached;
  scope.takeRecords = takeRecords;
});

window.CustomElements.addModule(function(scope) {
  var flags = scope.flags;
  function upgrade(node, isAttached) {
    if (node.localName === "template") {
      if (window.HTMLTemplateElement && HTMLTemplateElement.decorate) {
        HTMLTemplateElement.decorate(node);
      }
    }
    if (!node.__upgraded__ && node.nodeType === Node.ELEMENT_NODE) {
      var is = node.getAttribute("is");
      var definition = scope.getRegisteredDefinition(node.localName) || scope.getRegisteredDefinition(is);
      if (definition) {
        if (is && definition.tag == node.localName || !is && !definition.extends) {
          return upgradeWithDefinition(node, definition, isAttached);
        }
      }
    }
  }
  function upgradeWithDefinition(element, definition, isAttached) {
    flags.upgrade && console.group("upgrade:", element.localName);
    if (definition.is) {
      element.setAttribute("is", definition.is);
    }
    implementPrototype(element, definition);
    element.__upgraded__ = true;
    created(element);
    if (isAttached) {
      scope.attached(element);
    }
    scope.upgradeSubtree(element, isAttached);
    flags.upgrade && console.groupEnd();
    return element;
  }
  function implementPrototype(element, definition) {
    if (Object.__proto__) {
      element.__proto__ = definition.prototype;
    } else {
      customMixin(element, definition.prototype, definition.native);
      element.__proto__ = definition.prototype;
    }
  }
  function customMixin(inTarget, inSrc, inNative) {
    var used = {};
    var p = inSrc;
    while (p !== inNative && p !== HTMLElement.prototype) {
      var keys = Object.getOwnPropertyNames(p);
      for (var i = 0, k; k = keys[i]; i++) {
        if (!used[k]) {
          Object.defineProperty(inTarget, k, Object.getOwnPropertyDescriptor(p, k));
          used[k] = 1;
        }
      }
      p = Object.getPrototypeOf(p);
    }
  }
  function created(element) {
    if (element.createdCallback) {
      element.createdCallback();
    }
  }
  scope.upgrade = upgrade;
  scope.upgradeWithDefinition = upgradeWithDefinition;
  scope.implementPrototype = implementPrototype;
});

window.CustomElements.addModule(function(scope) {
  var isIE = scope.isIE;
  var upgradeDocumentTree = scope.upgradeDocumentTree;
  var upgradeAll = scope.upgradeAll;
  var upgradeWithDefinition = scope.upgradeWithDefinition;
  var implementPrototype = scope.implementPrototype;
  var useNative = scope.useNative;
  function register(name, options) {
    var definition = options || {};
    if (!name) {
      throw new Error("document.registerElement: first argument `name` must not be empty");
    }
    if (name.indexOf("-") < 0) {
      throw new Error("document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '" + String(name) + "'.");
    }
    if (isReservedTag(name)) {
      throw new Error("Failed to execute 'registerElement' on 'Document': Registration failed for type '" + String(name) + "'. The type name is invalid.");
    }
    if (getRegisteredDefinition(name)) {
      //throw new Error("DuplicateDefinitionError: a type with name '" + String(name) + "' is already registered");
      return;
    }
    if (!definition.prototype) {
      definition.prototype = Object.create(HTMLElement.prototype);
    }
    definition.__name = name.toLowerCase();
    if (definition.extends) {
      definition.extends = definition.extends.toLowerCase();
    }
    definition.lifecycle = definition.lifecycle || {};
    definition.ancestry = ancestry(definition.extends);
    resolveTagName(definition);
    resolvePrototypeChain(definition);
    overrideAttributeApi(definition.prototype);
    registerDefinition(definition.__name, definition);
    definition.ctor = generateConstructor(definition);
    definition.ctor.prototype = definition.prototype;
    definition.prototype.constructor = definition.ctor;
    if (scope.ready) {
      upgradeDocumentTree(document);
    }
    return definition.ctor;
  }
  function overrideAttributeApi(prototype) {
    if (prototype.setAttribute._polyfilled) {
      return;
    }
    var setAttribute = prototype.setAttribute;
    prototype.setAttribute = function(name, value) {
      changeAttribute.call(this, name, value, setAttribute);
    };
    var removeAttribute = prototype.removeAttribute;
    prototype.removeAttribute = function(name) {
      changeAttribute.call(this, name, null, removeAttribute);
    };
    prototype.setAttribute._polyfilled = true;
  }
  function changeAttribute(name, value, operation) {
    name = name.toLowerCase();
    var oldValue = this.getAttribute(name);
    operation.apply(this, arguments);
    var newValue = this.getAttribute(name);
    if (this.attributeChangedCallback && newValue !== oldValue) {
      this.attributeChangedCallback(name, oldValue, newValue);
    }
  }
  function isReservedTag(name) {
    for (var i = 0; i < reservedTagList.length; i++) {
      if (name === reservedTagList[i]) {
        return true;
      }
    }
  }
  var reservedTagList = [ "annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph" ];
  function ancestry(extnds) {
    var extendee = getRegisteredDefinition(extnds);
    if (extendee) {
      return ancestry(extendee.extends).concat([ extendee ]);
    }
    return [];
  }
  function resolveTagName(definition) {
    var baseTag = definition.extends;
    for (var i = 0, a; a = definition.ancestry[i]; i++) {
      baseTag = a.is && a.tag;
    }
    definition.tag = baseTag || definition.__name;
    if (baseTag) {
      definition.is = definition.__name;
    }
  }
  function resolvePrototypeChain(definition) {
    if (!Object.__proto__) {
      var nativePrototype = HTMLElement.prototype;
      if (definition.is) {
        var inst = document.createElement(definition.tag);
        nativePrototype = Object.getPrototypeOf(inst);
      }
      var proto = definition.prototype, ancestor;
      var foundPrototype = false;
      while (proto) {
        if (proto == nativePrototype) {
          foundPrototype = true;
        }
        ancestor = Object.getPrototypeOf(proto);
        if (ancestor) {
          proto.__proto__ = ancestor;
        }
        proto = ancestor;
      }
      if (!foundPrototype) {
        console.warn(definition.tag + " prototype not found in prototype chain for " + definition.is);
      }
      definition.native = nativePrototype;
    }
  }
  function instantiate(definition) {
    return upgradeWithDefinition(domCreateElement(definition.tag), definition);
  }
  var registry = {};
  function getRegisteredDefinition(name) {
    if (name) {
      return registry[name.toLowerCase()];
    }
  }
  function registerDefinition(name, definition) {
    registry[name] = definition;
  }
  function generateConstructor(definition) {
    return function() {
      return instantiate(definition);
    };
  }
  var HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
  function createElementNS(namespace, tag, typeExtension) {
    if (namespace === HTML_NAMESPACE) {
      return createElement(tag, typeExtension);
    } else {
      return domCreateElementNS(namespace, tag);
    }
  }
  function createElement(tag, typeExtension) {
    if (tag) {
      tag = tag.toLowerCase();
    }
    if (typeExtension) {
      typeExtension = typeExtension.toLowerCase();
    }
    var definition = getRegisteredDefinition(typeExtension || tag);
    if (definition) {
      if (tag == definition.tag && typeExtension == definition.is) {
        return new definition.ctor();
      }
      if (!typeExtension && !definition.is) {
        return new definition.ctor();
      }
    }
    var element;
    if (typeExtension) {
      element = createElement(tag);
      element.setAttribute("is", typeExtension);
      return element;
    }
    element = domCreateElement(tag);
    if (tag.indexOf("-") >= 0) {
      implementPrototype(element, HTMLElement);
    }
    return element;
  }
  var domCreateElement = document.createElement.bind(document);
  var domCreateElementNS = document.createElementNS.bind(document);
  var isInstance;
  if (!Object.__proto__ && !useNative) {
    isInstance = function(obj, ctor) {
      if (obj instanceof ctor) {
        return true;
      }
      var p = obj;
      while (p) {
        if (p === ctor.prototype) {
          return true;
        }
        p = p.__proto__;
      }
      return false;
    };
  } else {
    isInstance = function(obj, base) {
      return obj instanceof base;
    };
  }
  function wrapDomMethodToForceUpgrade(obj, methodName) {
    var orig = obj[methodName];
    obj[methodName] = function() {
      var n = orig.apply(this, arguments);
      upgradeAll(n);
      return n;
    };
  }
  wrapDomMethodToForceUpgrade(Node.prototype, "cloneNode");
  wrapDomMethodToForceUpgrade(document, "importNode");
  document.registerElement = register;
  document.createElement = createElement;
  document.createElementNS = createElementNS;
  scope.registry = registry;
  scope.instanceof = isInstance;
  scope.reservedTagList = reservedTagList;
  scope.getRegisteredDefinition = getRegisteredDefinition;
  document.register = document.registerElement;
});

(function(scope) {
  var useNative = scope.useNative;
  var initializeModules = scope.initializeModules;
  var isIE = scope.isIE;
  if (useNative) {
    var nop = function() {};
    scope.watchShadow = nop;
    scope.upgrade = nop;
    scope.upgradeAll = nop;
    scope.upgradeDocumentTree = nop;
    scope.upgradeSubtree = nop;
    scope.takeRecords = nop;
    scope.instanceof = function(obj, base) {
      return obj instanceof base;
    };
  } else {
    initializeModules();
  }
  var upgradeDocumentTree = scope.upgradeDocumentTree;
  var upgradeDocument = scope.upgradeDocument;
  if (!window.wrap) {
    if (window.ShadowDOMPolyfill) {
      window.wrap = window.ShadowDOMPolyfill.wrapIfNeeded;
      window.unwrap = window.ShadowDOMPolyfill.unwrapIfNeeded;
    } else {
      window.wrap = window.unwrap = function(node) {
        return node;
      };
    }
  }
  if (window.HTMLImports) {
    window.HTMLImports.__importsParsingHook = function(elt) {
      if (elt.import) {
        upgradeDocument(wrap(elt.import));
      }
    };
  }
  function bootstrap() {
    upgradeDocumentTree(window.wrap(document));
    window.CustomElements.ready = true;
    var requestAnimationFrame = window.requestAnimationFrame || function(f) {
      setTimeout(f, 16);
    };
    requestAnimationFrame(function() {
      setTimeout(function() {
        window.CustomElements.readyTime = Date.now();
        if (window.HTMLImports) {
          window.CustomElements.elapsed = window.CustomElements.readyTime - window.HTMLImports.readyTime;
        }
        document.dispatchEvent(new CustomEvent("WebComponentsReady", {
          bubbles: true
        }));
      });
    });
  }
  if (document.readyState === "complete" || scope.flags.eager) {
    bootstrap();
  } else if (document.readyState === "interactive" && !window.attachEvent && (!window.HTMLImports || window.HTMLImports.ready)) {
    bootstrap();
  } else {
    var loadEvent = window.HTMLImports && !window.HTMLImports.ready ? "HTMLImportsLoaded" : "DOMContentLoaded";
    window.addEventListener(loadEvent, bootstrap);
  }
})(window.CustomElements);


/***/ }),

/***/ "./src/bower_components/habitlab-iron-a11y-announcer/habitlab-iron-a11y-announcer-0.js":
/*!***************************************************************************!*\
  !*** ./src/bower_components/habitlab-iron-a11y-announcer/habitlab-iron-a11y-announcer-0.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



    (function() {
      'use strict';

      Polymer.IronA11yAnnouncer = Polymer({
        is: 'habitlab-iron-a11y-announcer',

        properties: {

          /**
           * The value of mode is used to set the `aria-live` attribute
           * for the element that will be announced. Valid values are: `off`,
           * `polite` and `assertive`.
           */
          mode: {
            type: String,
            value: 'polite'
          },

          _text: {
            type: String,
            value: ''
          }
        },

        created: function() {
          if (!Polymer.IronA11yAnnouncer.instance) {
            Polymer.IronA11yAnnouncer.instance = this;
          }

          document.body.addEventListener('iron-announce', this._onIronAnnounce.bind(this));
        },

        /**
         * Cause a text string to be announced by screen readers.
         *
         * @param {string} text The text that should be announced.
         */
        announce: function(text) {
          this._text = '';
          this.async(function() {
            this._text = text;
          }, 100);
        },

        _onIronAnnounce: function(event) {
          if (event.detail && event.detail.text) {
            this.announce(event.detail.text);
          }
        }
      });

      Polymer.IronA11yAnnouncer.instance = null;

      Polymer.IronA11yAnnouncer.requestAvailability = function() {
        if (!Polymer.IronA11yAnnouncer.instance) {
          Polymer.IronA11yAnnouncer.instance = document.createElement('habitlab-iron-a11y-announcer');
        }

        document.body.appendChild(Polymer.IronA11yAnnouncer.instance);
      };
    })();

  

/***/ }),

/***/ "./src/bower_components/habitlab-iron-a11y-announcer/habitlab-iron-a11y-announcer.deps.js":
/*!******************************************************************************!*\
  !*** ./src/bower_components/habitlab-iron-a11y-announcer/habitlab-iron-a11y-announcer.deps.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/habitlab-iron-a11y-announcer/habitlab-iron-a11y-announcer.html */ "./src/bower_components/habitlab-iron-a11y-announcer/habitlab-iron-a11y-announcer.html"), 'bower_components/habitlab-iron-a11y-announcer/habitlab-iron-a11y-announcer.html')
__webpack_require__(/*! bower_components/habitlab-iron-a11y-announcer/habitlab-iron-a11y-announcer-0 */ "./src/bower_components/habitlab-iron-a11y-announcer/habitlab-iron-a11y-announcer-0.js")


/***/ }),

/***/ "./src/bower_components/habitlab-iron-a11y-announcer/habitlab-iron-a11y-announcer.html":
/*!***************************************************************************!*\
  !*** ./src/bower_components/habitlab-iron-a11y-announcer/habitlab-iron-a11y-announcer.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> </head><body><habitlab-dom-module id=habitlab-iron-a11y-announcer> <style>:host{display:inline-block;position:fixed;clip:rect(0,0,0,0)}</style> <template> <div aria-live$=[[mode]]>[[_text]]</div> </template> <script src=habitlab-iron-a11y-announcer-0.js></script> </habitlab-dom-module> </body></html>";

/***/ }),

/***/ "./src/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior-0.js":
/*!***********************************************************************************!*\
  !*** ./src/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior-0.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


  (function() {
    'use strict';

    /**
     * Chrome uses an older version of DOM Level 3 Keyboard Events
     *
     * Most keys are labeled as text, but some are Unicode codepoints.
     * Values taken from: http://www.w3.org/TR/2007/WD-DOM-Level-3-Events-20071221/keyset.html#KeySet-Set
     */
    var KEY_IDENTIFIER = {
      'U+0008': 'backspace',
      'U+0009': 'tab',
      'U+001B': 'esc',
      'U+0020': 'space',
      'U+007F': 'del'
    };

    /**
     * Special table for KeyboardEvent.keyCode.
     * KeyboardEvent.keyIdentifier is better, and KeyBoardEvent.key is even better
     * than that.
     *
     * Values from: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent.keyCode#Value_of_keyCode
     */
    var KEY_CODE = {
      8: 'backspace',
      9: 'tab',
      13: 'enter',
      27: 'esc',
      33: 'pageup',
      34: 'pagedown',
      35: 'end',
      36: 'home',
      32: 'space',
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down',
      46: 'del',
      106: '*'
    };

    /**
     * MODIFIER_KEYS maps the short name for modifier keys used in a key
     * combo string to the property name that references those same keys
     * in a KeyboardEvent instance.
     */
    var MODIFIER_KEYS = {
      'shift': 'shiftKey',
      'ctrl': 'ctrlKey',
      'alt': 'altKey',
      'meta': 'metaKey'
    };

    /**
     * KeyboardEvent.key is mostly represented by printable character made by
     * the keyboard, with unprintable keys labeled nicely.
     *
     * However, on OS X, Alt+char can make a Unicode character that follows an
     * Apple-specific mapping. In this case, we fall back to .keyCode.
     */
    var KEY_CHAR = /[a-z0-9*]/;

    /**
     * Matches a keyIdentifier string.
     */
    var IDENT_CHAR = /U\+/;

    /**
     * Matches arrow keys in Gecko 27.0+
     */
    var ARROW_KEY = /^arrow/;

    /**
     * Matches space keys everywhere (notably including IE10's exceptional name
     * `spacebar`).
     */
    var SPACE_KEY = /^space(bar)?/;

    /**
     * Matches ESC key.
     *
     * Value from: http://w3c.github.io/uievents-key/#key-Escape
     */
    var ESC_KEY = /^escape$/;

    /**
     * Transforms the key.
     * @param {string} key The KeyBoardEvent.key
     * @param {Boolean} [noSpecialChars] Limits the transformation to
     * alpha-numeric characters.
     */
    function transformKey(key, noSpecialChars) {
      var validKey = '';
      if (key) {
        var lKey = key.toLowerCase();
        if (lKey === ' ' || SPACE_KEY.test(lKey)) {
          validKey = 'space';
        } else if (ESC_KEY.test(lKey)) {
          validKey = 'esc';
        } else if (lKey.length == 1) {
          if (!noSpecialChars || KEY_CHAR.test(lKey)) {
            validKey = lKey;
          }
        } else if (ARROW_KEY.test(lKey)) {
          validKey = lKey.replace('arrow', '');
        } else if (lKey == 'multiply') {
          // numpad '*' can map to Multiply on IE/Windows
          validKey = '*';
        } else {
          validKey = lKey;
        }
      }
      return validKey;
    }

    function transformKeyIdentifier(keyIdent) {
      var validKey = '';
      if (keyIdent) {
        if (keyIdent in KEY_IDENTIFIER) {
          validKey = KEY_IDENTIFIER[keyIdent];
        } else if (IDENT_CHAR.test(keyIdent)) {
          keyIdent = parseInt(keyIdent.replace('U+', '0x'), 16);
          validKey = String.fromCharCode(keyIdent).toLowerCase();
        } else {
          validKey = keyIdent.toLowerCase();
        }
      }
      return validKey;
    }

    function transformKeyCode(keyCode) {
      var validKey = '';
      if (Number(keyCode)) {
        if (keyCode >= 65 && keyCode <= 90) {
          // ascii a-z
          // lowercase is 32 offset from uppercase
          validKey = String.fromCharCode(32 + keyCode);
        } else if (keyCode >= 112 && keyCode <= 123) {
          // function keys f1-f12
          validKey = 'f' + (keyCode - 112);
        } else if (keyCode >= 48 && keyCode <= 57) {
          // top 0-9 keys
          validKey = String(keyCode - 48);
        } else if (keyCode >= 96 && keyCode <= 105) {
          // num pad 0-9
          validKey = String(keyCode - 96);
        } else {
          validKey = KEY_CODE[keyCode];
        }
      }
      return validKey;
    }

    /**
      * Calculates the normalized key for a KeyboardEvent.
      * @param {KeyboardEvent} keyEvent
      * @param {Boolean} [noSpecialChars] Set to true to limit keyEvent.key
      * transformation to alpha-numeric chars. This is useful with key
      * combinations like shift + 2, which on FF for MacOS produces
      * keyEvent.key = @
      * To get 2 returned, set noSpecialChars = true
      * To get @ returned, set noSpecialChars = false
     */
    function normalizedKeyForEvent(keyEvent, noSpecialChars) {
      // Fall back from .key, to .keyIdentifier, to .keyCode, and then to
      // .detail.key to support artificial keyboard events.
      return transformKey(keyEvent.key, noSpecialChars) ||
        transformKeyIdentifier(keyEvent.keyIdentifier) ||
        transformKeyCode(keyEvent.keyCode) ||
        transformKey(keyEvent.detail ? keyEvent.detail.key : keyEvent.detail, noSpecialChars) || '';
    }

    function keyComboMatchesEvent(keyCombo, event) {
      // For combos with modifiers we support only alpha-numeric keys
      var keyEvent = normalizedKeyForEvent(event, keyCombo.hasModifiers);
      return keyEvent === keyCombo.key &&
        (!keyCombo.hasModifiers || (
          !!event.shiftKey === !!keyCombo.shiftKey &&
          !!event.ctrlKey === !!keyCombo.ctrlKey &&
          !!event.altKey === !!keyCombo.altKey &&
          !!event.metaKey === !!keyCombo.metaKey)
        );
    }

    function parseKeyComboString(keyComboString) {
      if (keyComboString.length === 1) {
        return {
          combo: keyComboString,
          key: keyComboString,
          event: 'keydown'
        };
      }
      return keyComboString.split('+').reduce(function(parsedKeyCombo, keyComboPart) {
        var eventParts = keyComboPart.split(':');
        var keyName = eventParts[0];
        var event = eventParts[1];

        if (keyName in MODIFIER_KEYS) {
          parsedKeyCombo[MODIFIER_KEYS[keyName]] = true;
          parsedKeyCombo.hasModifiers = true;
        } else {
          parsedKeyCombo.key = keyName;
          parsedKeyCombo.event = event || 'keydown';
        }

        return parsedKeyCombo;
      }, {
        combo: keyComboString.split(':').shift()
      });
    }

    function parseEventString(eventString) {
      return eventString.trim().split(' ').map(function(keyComboString) {
        return parseKeyComboString(keyComboString);
      });
    }

    /**
     * `Polymer.IronA11yKeysBehavior` provides a normalized interface for processing
     * keyboard commands that pertain to [WAI-ARIA best practices](http://www.w3.org/TR/wai-aria-practices/#kbd_general_binding).
     * The element takes care of browser differences with respect to Keyboard events
     * and uses an expressive syntax to filter key presses.
     *
     * Use the `keyBindings` prototype property to express what combination of keys
     * will trigger the event to fire.
     *
     * Use the `key-event-target` attribute to set up event handlers on a specific
     * node.
     * The `keys-pressed` event will fire when one of the key combinations set with the
     * `keys` property is pressed.
     *
     * @demo demo/index.html
     * @polymerBehavior
     */
    Polymer.IronA11yKeysBehavior = {
      properties: {
        /**
         * The HTMLElement that will be firing relevant KeyboardEvents.
         */
        keyEventTarget: {
          type: Object,
          value: function() {
            return this;
          }
        },

        /**
         * If true, this property will cause the implementing element to
         * automatically stop propagation on any handled KeyboardEvents.
         */
        stopKeyboardEventPropagation: {
          type: Boolean,
          value: false
        },

        _boundKeyHandlers: {
          type: Array,
          value: function() {
            return [];
          }
        },

        // We use this due to a limitation in IE10 where instances will have
        // own properties of everything on the "prototype".
        _imperativeKeyBindings: {
          type: Object,
          value: function() {
            return {};
          }
        }
      },

      observers: [
        '_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)'
      ],

      keyBindings: {},

      registered: function() {
        this._prepKeyBindings();
      },

      attached: function() {
        this._listenKeyEventListeners();
      },

      detached: function() {
        this._unlistenKeyEventListeners();
      },

      /**
       * Can be used to imperatively add a key binding to the implementing
       * element. This is the imperative equivalent of declaring a keybinding
       * in the `keyBindings` prototype property.
       */
      addOwnKeyBinding: function(eventString, handlerName) {
        this._imperativeKeyBindings[eventString] = handlerName;
        this._prepKeyBindings();
        this._resetKeyEventListeners();
      },

      /**
       * When called, will remove all imperatively-added key bindings.
       */
      removeOwnKeyBindings: function() {
        this._imperativeKeyBindings = {};
        this._prepKeyBindings();
        this._resetKeyEventListeners();
      },

      /**
       * Returns true if a keyboard event matches `eventString`.
       *
       * @param {KeyboardEvent} event
       * @param {string} eventString
       * @return {boolean}
       */
      keyboardEventMatchesKeys: function(event, eventString) {
        var keyCombos = parseEventString(eventString);
        for (var i = 0; i < keyCombos.length; ++i) {
          if (keyComboMatchesEvent(keyCombos[i], event)) {
            return true;
          }
        }
        return false;
      },

      _collectKeyBindings: function() {
        var keyBindings = this.behaviors.map(function(behavior) {
          return behavior.keyBindings;
        });

        if (keyBindings.indexOf(this.keyBindings) === -1) {
          keyBindings.push(this.keyBindings);
        }

        return keyBindings;
      },

      _prepKeyBindings: function() {
        this._keyBindings = {};

        this._collectKeyBindings().forEach(function(keyBindings) {
          for (var eventString in keyBindings) {
            this._addKeyBinding(eventString, keyBindings[eventString]);
          }
        }, this);

        for (var eventString in this._imperativeKeyBindings) {
          this._addKeyBinding(eventString, this._imperativeKeyBindings[eventString]);
        }

        // Give precedence to combos with modifiers to be checked first.
        for (var eventName in this._keyBindings) {
          this._keyBindings[eventName].sort(function (kb1, kb2) {
            var b1 = kb1[0].hasModifiers;
            var b2 = kb2[0].hasModifiers;
            return (b1 === b2) ? 0 : b1 ? -1 : 1;
          })
        }
      },

      _addKeyBinding: function(eventString, handlerName) {
        parseEventString(eventString).forEach(function(keyCombo) {
          this._keyBindings[keyCombo.event] =
            this._keyBindings[keyCombo.event] || [];

          this._keyBindings[keyCombo.event].push([
            keyCombo,
            handlerName
          ]);
        }, this);
      },

      _resetKeyEventListeners: function() {
        this._unlistenKeyEventListeners();

        if (this.isAttached) {
          this._listenKeyEventListeners();
        }
      },

      _listenKeyEventListeners: function() {
        Object.keys(this._keyBindings).forEach(function(eventName) {
          var keyBindings = this._keyBindings[eventName];
          var boundKeyHandler = this._onKeyBindingEvent.bind(this, keyBindings);

          this._boundKeyHandlers.push([this.keyEventTarget, eventName, boundKeyHandler]);

          this.keyEventTarget.addEventListener(eventName, boundKeyHandler);
        }, this);
      },

      _unlistenKeyEventListeners: function() {
        var keyHandlerTuple;
        var keyEventTarget;
        var eventName;
        var boundKeyHandler;

        while (this._boundKeyHandlers.length) {
          // My kingdom for block-scope binding and destructuring assignment..
          keyHandlerTuple = this._boundKeyHandlers.pop();
          keyEventTarget = keyHandlerTuple[0];
          eventName = keyHandlerTuple[1];
          boundKeyHandler = keyHandlerTuple[2];

          keyEventTarget.removeEventListener(eventName, boundKeyHandler);
        }
      },

      _onKeyBindingEvent: function(keyBindings, event) {
        if (this.stopKeyboardEventPropagation) {
          event.stopPropagation();
        }

        // if event has been already prevented, don't do anything
        if (event.defaultPrevented) {
          return;
        }

        for (var i = 0; i < keyBindings.length; i++) {
          var keyCombo = keyBindings[i][0];
          var handlerName = keyBindings[i][1];
          if (keyComboMatchesEvent(keyCombo, event)) {
            this._triggerKeyHandler(keyCombo, handlerName, event);
            // exit the loop if eventDefault was prevented
            if (event.defaultPrevented) {
              return;
            }
          }
        }
      },

      _triggerKeyHandler: function(keyCombo, handlerName, keyboardEvent) {
        var detail = Object.create(keyCombo);
        detail.keyboardEvent = keyboardEvent;
        var event = new CustomEvent(keyCombo.event, {
          detail: detail,
          cancelable: true
        });
        this[handlerName].call(this, event);
        if (event.defaultPrevented) {
          keyboardEvent.preventDefault();
        }
      }
    };
  })();


/***/ }),

/***/ "./src/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.deps.js":
/*!**************************************************************************************!*\
  !*** ./src/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.deps.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html */ "./src/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html"), 'bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html')
__webpack_require__(/*! bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior-0 */ "./src/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior-0.js")


/***/ }),

/***/ "./src/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html":
/*!***********************************************************************************!*\
  !*** ./src/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> <script src=iron-a11y-keys-behavior-0.js></script> </head><body></body></html>";

/***/ }),

/***/ "./src/bower_components/iron-behaviors/iron-button-state-0.js":
/*!********************************************************************!*\
  !*** ./src/bower_components/iron-behaviors/iron-button-state-0.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



  /**
   * @demo demo/index.html
   * @polymerBehavior Polymer.IronButtonState
   */
  Polymer.IronButtonStateImpl = {

    properties: {

      /**
       * If true, the user is currently holding down the button.
       */
      pressed: {
        type: Boolean,
        readOnly: true,
        value: false,
        reflectToAttribute: true,
        observer: '_pressedChanged'
      },

      /**
       * If true, the button toggles the active state with each tap or press
       * of the spacebar.
       */
      toggles: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /**
       * If true, the button is a toggle and is currently in the active state.
       */
      active: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true
      },

      /**
       * True if the element is currently being pressed by a "pointer," which
       * is loosely defined as mouse or touch input (but specifically excluding
       * keyboard input).
       */
      pointerDown: {
        type: Boolean,
        readOnly: true,
        value: false
      },

      /**
       * True if the input device that caused the element to receive focus
       * was a keyboard.
       */
      receivedFocusFromKeyboard: {
        type: Boolean,
        readOnly: true
      },

      /**
       * The aria attribute to be set if the button is a toggle and in the
       * active state.
       */
      ariaActiveAttribute: {
        type: String,
        value: 'aria-pressed',
        observer: '_ariaActiveAttributeChanged'
      }
    },

    listeners: {
      down: '_downHandler',
      up: '_upHandler',
      tap: '_tapHandler'
    },

    observers: [
      '_detectKeyboardFocus(focused)',
      '_activeChanged(active, ariaActiveAttribute)'
    ],

    keyBindings: {
      'enter:keydown': '_asyncClick',
      'space:keydown': '_spaceKeyDownHandler',
      'space:keyup': '_spaceKeyUpHandler',
    },

    _mouseEventRe: /^mouse/,

    _tapHandler: function(evt) {
      if (evt.detail == null) {
        // GEZAFIX this is a fake tap event from youtube
        return
      }
      if (this.toggles) {
       // a tap is needed to toggle the active state
        this._userActivate(!this.active);
      } else {
        this.active = false;
      }
    },

    _detectKeyboardFocus: function(focused) {
      this._setReceivedFocusFromKeyboard(!this.pointerDown && focused);
    },

    // to emulate native checkbox, (de-)activations from a user interaction fire
    // 'change' events
    _userActivate: function(active) {
      if (this.active !== active) {
        this.active = active;
        this.fire('change');
      }
    },

    _downHandler: function(event) {
      this._setPointerDown(true);
      this._setPressed(true);
      this._setReceivedFocusFromKeyboard(false);
    },

    _upHandler: function() {
      this._setPointerDown(false);
      this._setPressed(false);
    },

    /**
     * @param {!KeyboardEvent} event .
     */
    _spaceKeyDownHandler: function(event) {
      var keyboardEvent = event.detail.keyboardEvent;
      var target = Polymer.dom(keyboardEvent).localTarget;

      // Ignore the event if this is coming from a focused light child, since that
      // element will deal with it.
      if (this.isLightDescendant(/** @type {Node} */(target)))
        return;

      keyboardEvent.preventDefault();
      keyboardEvent.stopImmediatePropagation();
      this._setPressed(true);
    },

    /**
     * @param {!KeyboardEvent} event .
     */
    _spaceKeyUpHandler: function(event) {
      var keyboardEvent = event.detail.keyboardEvent;
      var target = Polymer.dom(keyboardEvent).localTarget;

      // Ignore the event if this is coming from a focused light child, since that
      // element will deal with it.
      if (this.isLightDescendant(/** @type {Node} */(target)))
        return;

      if (this.pressed) {
        this._asyncClick();
      }
      this._setPressed(false);
    },

    // trigger click asynchronously, the asynchrony is useful to allow one
    // event handler to unwind before triggering another event
    _asyncClick: function() {
      this.async(function() {
        this.click();
      }, 1);
    },

    // any of these changes are considered a change to button state

    _pressedChanged: function(pressed) {
      this._changedButtonState();
    },

    _ariaActiveAttributeChanged: function(value, oldValue) {
      if (oldValue && oldValue != value && this.hasAttribute(oldValue)) {
        this.removeAttribute(oldValue);
      }
    },

    _activeChanged: function(active, ariaActiveAttribute) {
      if (this.toggles) {
        this.setAttribute(this.ariaActiveAttribute,
                          active ? 'true' : 'false');
      } else {
        this.removeAttribute(this.ariaActiveAttribute);
      }
      this._changedButtonState();
    },

    _controlStateChanged: function() {
      if (this.disabled) {
        this._setPressed(false);
      } else {
        this._changedButtonState();
      }
    },

    // provide hook for follow-on behaviors to react to button-state

    _changedButtonState: function() {
      if (this._buttonStateChanged) {
        this._buttonStateChanged(); // abstract
      }
    }

  };

  /** @polymerBehavior */
  Polymer.IronButtonState = [
    Polymer.IronA11yKeysBehavior,
    Polymer.IronButtonStateImpl
  ];



/***/ }),

/***/ "./src/bower_components/iron-behaviors/iron-button-state.deps.js":
/*!***********************************************************************!*\
  !*** ./src/bower_components/iron-behaviors/iron-button-state.deps.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.deps.js */ "./src/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.deps.js")
__webpack_require__(/*! bower_components/iron-behaviors/iron-control-state.deps.js */ "./src/bower_components/iron-behaviors/iron-control-state.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/iron-behaviors/iron-button-state.html */ "./src/bower_components/iron-behaviors/iron-button-state.html"), 'bower_components/iron-behaviors/iron-button-state.html')
__webpack_require__(/*! bower_components/iron-behaviors/iron-button-state-0 */ "./src/bower_components/iron-behaviors/iron-button-state-0.js")


/***/ }),

/***/ "./src/bower_components/iron-behaviors/iron-button-state.html":
/*!********************************************************************!*\
  !*** ./src/bower_components/iron-behaviors/iron-button-state.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> <link rel=import href=../iron-a11y-keys-behavior/iron-a11y-keys-behavior.html> <link rel=import href=iron-control-state.html> <script src=iron-button-state-0.js></script> </head><body></body></html>";

/***/ }),

/***/ "./src/bower_components/iron-behaviors/iron-control-state-0.js":
/*!*********************************************************************!*\
  !*** ./src/bower_components/iron-behaviors/iron-control-state-0.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



  /**
   * @demo demo/index.html
   * @polymerBehavior
   */
  Polymer.IronControlState = {

    properties: {

      /**
       * If true, the element currently has focus.
       */
      focused: {
        type: Boolean,
        value: false,
        notify: true,
        readOnly: true,
        reflectToAttribute: true
      },

      /**
       * If true, the user cannot interact with this element.
       */
      disabled: {
        type: Boolean,
        value: false,
        notify: true,
        observer: '_disabledChanged',
        reflectToAttribute: true
      },

      _oldTabIndex: {
        type: Number
      },

      _boundFocusBlurHandler: {
        type: Function,
        value: function() {
          return this._focusBlurHandler.bind(this);
        }
      }

    },

    observers: [
      '_changedControlState(focused, disabled)'
    ],

    ready: function() {
      this.addEventListener('focus', this._boundFocusBlurHandler, true);
      this.addEventListener('blur', this._boundFocusBlurHandler, true);
    },

    _focusBlurHandler: function(event) {
      // NOTE(cdata):  if we are in ShadowDOM land, `event.target` will
      // eventually become `this` due to retargeting; if we are not in
      // ShadowDOM land, `event.target` will eventually become `this` due
      // to the second conditional which fires a synthetic event (that is also
      // handled). In either case, we can disregard `event.path`.

      if (event.target === this) {
        this._setFocused(event.type === 'focus');
      } else if (!this.shadowRoot) {
        var target = /** @type {Node} */(Polymer.dom(event).localTarget);
        if (!this.isLightDescendant(target)) {
          this.fire(event.type, {sourceEvent: event}, {
            node: this,
            bubbles: event.bubbles,
            cancelable: event.cancelable
          });
        }
      }
    },

    _disabledChanged: function(disabled, old) {
      this.setAttribute('aria-disabled', disabled ? 'true' : 'false');
      this.style.pointerEvents = disabled ? 'none' : '';
      if (disabled) {
        this._oldTabIndex = this.tabIndex;
        this._setFocused(false);
        this.tabIndex = -1;
        this.blur();
      } else if (this._oldTabIndex !== undefined) {
        this.tabIndex = this._oldTabIndex;
      }
    },

    _changedControlState: function() {
      // _controlStateChanged is abstract, follow-on behaviors may implement it
      if (this._controlStateChanged) {
        this._controlStateChanged();
      }
    }

  };



/***/ }),

/***/ "./src/bower_components/iron-behaviors/iron-control-state.deps.js":
/*!************************************************************************!*\
  !*** ./src/bower_components/iron-behaviors/iron-control-state.deps.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/iron-behaviors/iron-control-state.html */ "./src/bower_components/iron-behaviors/iron-control-state.html"), 'bower_components/iron-behaviors/iron-control-state.html')
__webpack_require__(/*! bower_components/iron-behaviors/iron-control-state-0 */ "./src/bower_components/iron-behaviors/iron-control-state-0.js")


/***/ }),

/***/ "./src/bower_components/iron-behaviors/iron-control-state.html":
/*!*********************************************************************!*\
  !*** ./src/bower_components/iron-behaviors/iron-control-state.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> <script src=iron-control-state-0.js></script> </head><body></body></html>";

/***/ }),

/***/ "./src/bower_components/iron-checked-element-behavior/iron-checked-element-behavior-0.js":
/*!***********************************************************************************************!*\
  !*** ./src/bower_components/iron-checked-element-behavior/iron-checked-element-behavior-0.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



  /**
   * Use `Polymer.IronCheckedElementBehavior` to implement a custom element
   * that has a `checked` property, which can be used for validation if the
   * element is also `required`. Element instances implementing this behavior
   * will also be registered for use in an `iron-form` element.
   *
   * @demo demo/index.html
   * @polymerBehavior Polymer.IronCheckedElementBehavior
   */
  Polymer.IronCheckedElementBehaviorImpl = {

    properties: {
      /**
       * Fired when the checked state changes.
       *
       * @event iron-change
       */

      /**
       * Gets or sets the state, `true` is checked and `false` is unchecked.
       */
      checked: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        notify: true,
        observer: '_checkedChanged'
      },

      /**
       * If true, the button toggles the active state with each tap or press
       * of the spacebar.
       */
      toggles: {
        type: Boolean,
        value: true,
        reflectToAttribute: true
      },

      /* Overriden from Polymer.IronFormElementBehavior */
      value: {
        type: String,
        value: 'on',
        observer: '_valueChanged'
      }
    },

    observers: [
      '_requiredChanged(required)'
    ],

    created: function() {
      // Used by `iron-form` to handle the case that an element with this behavior
      // doesn't have a role of 'checkbox' or 'radio', but should still only be
      // included when the form is serialized if `this.checked === true`.
      this._hasIronCheckedElementBehavior = true;
    },

    /**
     * Returns false if the element is required and not checked, and true otherwise.
     * @param {*=} _value Ignored.
     * @return {boolean} true if `required` is false, or if `required` and `checked` are both true.
     */
    _getValidity: function(_value) {
      return this.disabled || !this.required || (this.required && this.checked);
    },

    /**
     * Update the aria-required label when `required` is changed.
     */
    _requiredChanged: function() {
      if (this.required) {
        this.setAttribute('aria-required', 'true');
      } else {
        this.removeAttribute('aria-required');
      }
    },

    /**
     * Fire `iron-changed` when the checked state changes.
     */
    _checkedChanged: function() {
      this.active = this.checked;
      this.fire('iron-change');
    },

    /**
     * Reset value to 'on' if it is set to `undefined`.
     */
    _valueChanged: function() {
      if (this.value === undefined || this.value === null) {
        this.value = 'on';
      }
    }
  };

  /** @polymerBehavior Polymer.IronCheckedElementBehavior */
  Polymer.IronCheckedElementBehavior = [
    Polymer.IronFormElementBehavior,
    Polymer.IronValidatableBehavior,
    Polymer.IronCheckedElementBehaviorImpl
  ];



/***/ }),

/***/ "./src/bower_components/iron-checked-element-behavior/iron-checked-element-behavior.deps.js":
/*!**************************************************************************************************!*\
  !*** ./src/bower_components/iron-checked-element-behavior/iron-checked-element-behavior.deps.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/iron-validatable-behavior/iron-validatable-behavior.deps.js */ "./src/bower_components/iron-validatable-behavior/iron-validatable-behavior.deps.js")
__webpack_require__(/*! bower_components/iron-form-element-behavior/iron-form-element-behavior.deps.js */ "./src/bower_components/iron-form-element-behavior/iron-form-element-behavior.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/iron-checked-element-behavior/iron-checked-element-behavior.html */ "./src/bower_components/iron-checked-element-behavior/iron-checked-element-behavior.html"), 'bower_components/iron-checked-element-behavior/iron-checked-element-behavior.html')
__webpack_require__(/*! bower_components/iron-checked-element-behavior/iron-checked-element-behavior-0 */ "./src/bower_components/iron-checked-element-behavior/iron-checked-element-behavior-0.js")


/***/ }),

/***/ "./src/bower_components/iron-checked-element-behavior/iron-checked-element-behavior.html":
/*!***********************************************************************************************!*\
  !*** ./src/bower_components/iron-checked-element-behavior/iron-checked-element-behavior.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> <link rel=import href=../iron-validatable-behavior/iron-validatable-behavior.html> <link rel=import href=../iron-form-element-behavior/iron-form-element-behavior.html> <script src=iron-checked-element-behavior-0.js></script> </head><body></body></html>";

/***/ }),

/***/ "./src/bower_components/iron-fit-behavior/iron-fit-behavior-0.js":
/*!***********************************************************************!*\
  !*** ./src/bower_components/iron-fit-behavior/iron-fit-behavior-0.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
`Polymer.IronFitBehavior` fits an element in another element using `max-height` and `max-width`, and
optionally centers it in the window or another element.

The element will only be sized and/or positioned if it has not already been sized and/or positioned
by CSS.

CSS properties               | Action
-----------------------------|-------------------------------------------
`position` set               | Element is not centered horizontally or vertically
`top` or `bottom` set        | Element is not vertically centered
`left` or `right` set        | Element is not horizontally centered
`max-height` set             | Element respects `max-height`
`max-width` set              | Element respects `max-width`

`Polymer.IronFitBehavior` can position an element into another element using
`verticalAlign` and `horizontalAlign`. This will override the element's css position.

      <div class="container">
        <iron-fit-impl vertical-align="top" horizontal-align="auto">
          Positioned into the container
        </iron-fit-impl>
      </div>

Use `noOverlap` to position the element around another element without overlapping it.

      <div class="container">
        <iron-fit-impl no-overlap vertical-align="auto" horizontal-align="auto">
          Positioned around the container
        </iron-fit-impl>
      </div>

@demo demo/index.html
@polymerBehavior
*/

  Polymer.IronFitBehavior = {

    properties: {

      /**
       * The element that will receive a `max-height`/`width`. By default it is the same as `this`,
       * but it can be set to a child element. This is useful, for example, for implementing a
       * scrolling region inside the element.
       * @type {!Element}
       */
      sizingTarget: {
        type: Object,
        value: function() {
          return this;
        }
      },

      /**
       * The element to fit `this` into.
       */
      fitInto: {
        type: Object,
        value: window
      },

      /**
       * Will position the element around the positionTarget without overlapping it.
       */
      noOverlap: {
        type: Boolean
      },

      /**
       * The element that should be used to position the element. If not set, it will
       * default to the parent node.
       * @type {!Element}
       */
      positionTarget: {
        type: Element
      },

      /**
       * The orientation against which to align the element horizontally
       * relative to the `positionTarget`. Possible values are "left", "right", "auto".
       */
      horizontalAlign: {
        type: String
      },

      /**
       * The orientation against which to align the element vertically
       * relative to the `positionTarget`. Possible values are "top", "bottom", "auto".
       */
      verticalAlign: {
        type: String
      },

      /**
       * If true, it will use `horizontalAlign` and `verticalAlign` values as preferred alignment
       * and if there's not enough space, it will pick the values which minimize the cropping.
       */
      dynamicAlign: {
        type: Boolean
      },

      /**
       * The same as setting margin-left and margin-right css properties.
       * @deprecated
       */
      horizontalOffset: {
        type: Number,
        value: 0,
        notify: true
      },

      /**
       * The same as setting margin-top and margin-bottom css properties.
       * @deprecated
       */
      verticalOffset: {
        type: Number,
        value: 0,
        notify: true
      },

      /**
       * Set to true to auto-fit on attach.
       */
      autoFitOnAttach: {
        type: Boolean,
        value: false
      },

      /** @type {?Object} */
      _fitInfo: {
        type: Object
      }
    },

    get _fitWidth() {
      var fitWidth;
      if (this.fitInto === window) {
        fitWidth = this.fitInto.innerWidth;
      } else {
        fitWidth = this.fitInto.getBoundingClientRect().width;
      }
      return fitWidth;
    },

    get _fitHeight() {
      var fitHeight;
      if (this.fitInto === window) {
        fitHeight = this.fitInto.innerHeight;
      } else {
        fitHeight = this.fitInto.getBoundingClientRect().height;
      }
      return fitHeight;
    },

    get _fitLeft() {
      var fitLeft;
      if (this.fitInto === window) {
        fitLeft = 0;
      } else {
        fitLeft = this.fitInto.getBoundingClientRect().left;
      }
      return fitLeft;
    },

    get _fitTop() {
      var fitTop;
      if (this.fitInto === window) {
        fitTop = 0;
      } else {
        fitTop = this.fitInto.getBoundingClientRect().top;
      }
      return fitTop;
    },

    /**
     * The element that should be used to position the element,
     * if no position target is configured.
     */
    get _defaultPositionTarget() {
      var parent = Polymer.dom(this).parentNode;

      if (parent && parent.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        parent = parent.host;
      }

      return parent;
    },

    /**
     * The horizontal align value, accounting for the RTL/LTR text direction.
     */
    get _localeHorizontalAlign() {
      if (this._isRTL) {
        // In RTL, "left" becomes "right".
        if (this.horizontalAlign === 'right') {
          return 'left';
        }
        if (this.horizontalAlign === 'left') {
          return 'right';
        }
      }
      return this.horizontalAlign;
    },

    attached: function() {
      // Memoize this to avoid expensive calculations & relayouts.
      this._isRTL = window.getComputedStyle(this).direction == 'rtl';
      this.positionTarget = this.positionTarget || this._defaultPositionTarget;
      if (this.autoFitOnAttach) {
        if (window.getComputedStyle(this).display === 'none') {
          setTimeout(function() {
            this.fit();
          }.bind(this));
        } else {
          this.fit();
        }
      }
    },

    /**
     * Positions and fits the element into the `fitInto` element.
     */
    fit: function() {
      this.position();
      this.constrain();
      this.center();
    },

    /**
     * Memoize information needed to position and size the target element.
     * @suppress {deprecated}
     */
    _discoverInfo: function() {
      if (this._fitInfo) {
        return;
      }
      var target = window.getComputedStyle(this);
      var sizer = window.getComputedStyle(this.sizingTarget);

      this._fitInfo = {
        inlineStyle: {
          top: this.style.top || '',
          left: this.style.left || '',
          position: this.style.position || ''
        },
        sizerInlineStyle: {
          maxWidth: this.sizingTarget.style.maxWidth || '',
          maxHeight: this.sizingTarget.style.maxHeight || '',
          boxSizing: this.sizingTarget.style.boxSizing || ''
        },
        positionedBy: {
          vertically: target.top !== 'auto' ? 'top' : (target.bottom !== 'auto' ?
            'bottom' : null),
          horizontally: target.left !== 'auto' ? 'left' : (target.right !== 'auto' ?
            'right' : null)
        },
        sizedBy: {
          height: sizer.maxHeight !== 'none',
          width: sizer.maxWidth !== 'none',
          minWidth: parseInt(sizer.minWidth, 10) || 0,
          minHeight: parseInt(sizer.minHeight, 10) || 0
        },
        margin: {
          top: parseInt(target.marginTop, 10) || 0,
          right: parseInt(target.marginRight, 10) || 0,
          bottom: parseInt(target.marginBottom, 10) || 0,
          left: parseInt(target.marginLeft, 10) || 0
        }
      };

      // Support these properties until they are removed.
      if (this.verticalOffset) {
        this._fitInfo.margin.top = this._fitInfo.margin.bottom = this.verticalOffset;
        this._fitInfo.inlineStyle.marginTop = this.style.marginTop || '';
        this._fitInfo.inlineStyle.marginBottom = this.style.marginBottom || '';
        this.style.marginTop = this.style.marginBottom = this.verticalOffset + 'px';
      }
      if (this.horizontalOffset) {
        this._fitInfo.margin.left = this._fitInfo.margin.right = this.horizontalOffset;
        this._fitInfo.inlineStyle.marginLeft = this.style.marginLeft || '';
        this._fitInfo.inlineStyle.marginRight = this.style.marginRight || '';
        this.style.marginLeft = this.style.marginRight = this.horizontalOffset + 'px';
      }
    },

    /**
     * Resets the target element's position and size constraints, and clear
     * the memoized data.
     */
    resetFit: function() {
      var info = this._fitInfo || {};
      for (var property in info.sizerInlineStyle) {
        this.sizingTarget.style[property] = info.sizerInlineStyle[property];
      }
      for (var property in info.inlineStyle) {
        this.style[property] = info.inlineStyle[property];
      }

      this._fitInfo = null;
    },

    /**
     * Equivalent to calling `resetFit()` and `fit()`. Useful to call this after
     * the element or the `fitInto` element has been resized, or if any of the
     * positioning properties (e.g. `horizontalAlign, verticalAlign`) is updated.
     * It preserves the scroll position of the sizingTarget.
     */
    refit: function() {
      var scrollLeft = this.sizingTarget.scrollLeft;
      var scrollTop = this.sizingTarget.scrollTop;
      this.resetFit();
      this.fit();
      this.sizingTarget.scrollLeft = scrollLeft;
      this.sizingTarget.scrollTop = scrollTop;
    },

    /**
     * Positions the element according to `horizontalAlign, verticalAlign`.
     */
    position: function() {
      if (!this.horizontalAlign && !this.verticalAlign) {
        // needs to be centered, and it is done after constrain.
        return;
      }
      this._discoverInfo();

      this.style.position = 'fixed';
      // Need border-box for margin/padding.
      this.sizingTarget.style.boxSizing = 'border-box';
      // Set to 0, 0 in order to discover any offset caused by parent stacking contexts.
      this.style.left = '0px';
      this.style.top = '0px';

      var rect = this.getBoundingClientRect();
      var positionRect = this.__getNormalizedRect(this.positionTarget);
      var fitRect = this.__getNormalizedRect(this.fitInto);

      var margin = this._fitInfo.margin;

      // Consider the margin as part of the size for position calculations.
      var size = {
        width: rect.width + margin.left + margin.right,
        height: rect.height + margin.top + margin.bottom
      };

      var position = this.__getPosition(this._localeHorizontalAlign, this.verticalAlign, size, positionRect, fitRect);

      var left = position.left + margin.left;
      var top = position.top + margin.top;

      // Use original size (without margin).
      var right = Math.min(fitRect.right - margin.right, left + rect.width);
      var bottom = Math.min(fitRect.bottom - margin.bottom, top + rect.height);

      var minWidth = this._fitInfo.sizedBy.minWidth;
      var minHeight = this._fitInfo.sizedBy.minHeight;
      if (left < margin.left) {
        left = margin.left;
        if (right - left < minWidth) {
          left = right - minWidth;
        }
      }
      if (top < margin.top) {
        top = margin.top;
        if (bottom - top < minHeight) {
          top = bottom - minHeight;
        }
      }

      this.sizingTarget.style.maxWidth = (right - left) + 'px';
      this.sizingTarget.style.maxHeight = (bottom - top) + 'px';

      // Remove the offset caused by any stacking context.
      this.style.left = (left - rect.left) + 'px';
      this.style.top = (top - rect.top) + 'px';
    },

    /**
     * Constrains the size of the element to `fitInto` by setting `max-height`
     * and/or `max-width`.
     */
    constrain: function() {
      if (this.horizontalAlign || this.verticalAlign) {
        return;
      }
      this._discoverInfo();

      var info = this._fitInfo;
      // position at (0px, 0px) if not already positioned, so we can measure the natural size.
      if (!info.positionedBy.vertically) {
        this.style.position = 'fixed';
        this.style.top = '0px';
      }
      if (!info.positionedBy.horizontally) {
        this.style.position = 'fixed';
        this.style.left = '0px';
      }

      // need border-box for margin/padding
      this.sizingTarget.style.boxSizing = 'border-box';
      // constrain the width and height if not already set
      var rect = this.getBoundingClientRect();
      if (!info.sizedBy.height) {
        this.__sizeDimension(rect, info.positionedBy.vertically, 'top', 'bottom', 'Height');
      }
      if (!info.sizedBy.width) {
        this.__sizeDimension(rect, info.positionedBy.horizontally, 'left', 'right', 'Width');
      }
    },

    /**
     * @protected
     * @deprecated
     */
    _sizeDimension: function(rect, positionedBy, start, end, extent) {
      this.__sizeDimension(rect, positionedBy, start, end, extent);
    },

    /**
     * @private
     */
    __sizeDimension: function(rect, positionedBy, start, end, extent) {
      var info = this._fitInfo;
      var fitRect = this.__getNormalizedRect(this.fitInto);
      var max = extent === 'Width' ? fitRect.width : fitRect.height;
      var flip = (positionedBy === end);
      var offset = flip ? max - rect[end] : rect[start];
      var margin = info.margin[flip ? start : end];
      var offsetExtent = 'offset' + extent;
      var sizingOffset = this[offsetExtent] - this.sizingTarget[offsetExtent];
      this.sizingTarget.style['max' + extent] = (max - margin - offset - sizingOffset) + 'px';
    },

    /**
     * Centers horizontally and vertically if not already positioned. This also sets
     * `position:fixed`.
     */
    center: function() {
      if (this.horizontalAlign || this.verticalAlign) {
        return;
      }
      this._discoverInfo();

      var positionedBy = this._fitInfo.positionedBy;
      if (positionedBy.vertically && positionedBy.horizontally) {
        // Already positioned.
        return;
      }
      // Need position:fixed to center
      this.style.position = 'fixed';
      // Take into account the offset caused by parents that create stacking
      // contexts (e.g. with transform: translate3d). Translate to 0,0 and
      // measure the bounding rect.
      if (!positionedBy.vertically) {
        this.style.top = '0px';
      }
      if (!positionedBy.horizontally) {
        this.style.left = '0px';
      }
      // It will take in consideration margins and transforms
      var rect = this.getBoundingClientRect();
      var fitRect = this.__getNormalizedRect(this.fitInto);
      if (!positionedBy.vertically) {
        var top = fitRect.top - rect.top + (fitRect.height - rect.height) / 2;
        this.style.top = top + 'px';
      }
      if (!positionedBy.horizontally) {
        var left = fitRect.left - rect.left + (fitRect.width - rect.width) / 2;
        this.style.left = left + 'px';
      }
    },

    __getNormalizedRect: function(target) {
      if (target === document.documentElement || target === window) {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
          right: window.innerWidth,
          bottom: window.innerHeight
        };
      }
      return target.getBoundingClientRect();
    },

    __getCroppedArea: function(position, size, fitRect) {
      var verticalCrop = Math.min(0, position.top) + Math.min(0, fitRect.bottom - (position.top + size.height));
      var horizontalCrop = Math.min(0, position.left) + Math.min(0, fitRect.right - (position.left + size.width));
      return Math.abs(verticalCrop) * size.width + Math.abs(horizontalCrop) * size.height;
    },


    __getPosition: function(hAlign, vAlign, size, positionRect, fitRect) {
      // All the possible configurations.
      // Ordered as top-left, top-right, bottom-left, bottom-right.
      var positions = [{
        verticalAlign: 'top',
        horizontalAlign: 'left',
        top: positionRect.top,
        left: positionRect.left
      }, {
        verticalAlign: 'top',
        horizontalAlign: 'right',
        top: positionRect.top,
        left: positionRect.right - size.width
      }, {
        verticalAlign: 'bottom',
        horizontalAlign: 'left',
        top: positionRect.bottom - size.height,
        left: positionRect.left
      }, {
        verticalAlign: 'bottom',
        horizontalAlign: 'right',
        top: positionRect.bottom - size.height,
        left: positionRect.right - size.width
      }];

      if (this.noOverlap) {
        // Duplicate.
        for (var i = 0, l = positions.length; i < l; i++) {
          var copy = {};
          for (var key in positions[i]) {
            copy[key] = positions[i][key];
          }
          positions.push(copy);
        }
        // Horizontal overlap only.
        positions[0].top = positions[1].top += positionRect.height;
        positions[2].top = positions[3].top -= positionRect.height;
        // Vertical overlap only.
        positions[4].left = positions[6].left += positionRect.width;
        positions[5].left = positions[7].left -= positionRect.width;
      }

      // Consider auto as null for coding convenience.
      vAlign = vAlign === 'auto' ? null : vAlign;
      hAlign = hAlign === 'auto' ? null : hAlign;

      var position;
      for (var i = 0; i < positions.length; i++) {
        var pos = positions[i];

        // If both vAlign and hAlign are defined, return exact match.
        // For dynamicAlign and noOverlap we'll have more than one candidate, so
        // we'll have to check the croppedArea to make the best choice.
        if (!this.dynamicAlign && !this.noOverlap &&
            pos.verticalAlign === vAlign && pos.horizontalAlign === hAlign) {
          position = pos;
          break;
        }

        // Align is ok if alignment preferences are respected. If no preferences,
        // it is considered ok.
        var alignOk = (!vAlign || pos.verticalAlign === vAlign) &&
                      (!hAlign || pos.horizontalAlign === hAlign);

        // Filter out elements that don't match the alignment (if defined).
        // With dynamicAlign, we need to consider all the positions to find the
        // one that minimizes the cropped area.
        if (!this.dynamicAlign && !alignOk) {
          continue;
        }

        position = position || pos;
        pos.croppedArea = this.__getCroppedArea(pos, size, fitRect);
        var diff = pos.croppedArea - position.croppedArea;
        // Check which crops less. If it crops equally, check if align is ok.
        if (diff < 0 || (diff === 0 && alignOk)) {
          position = pos;
        }
        // If not cropped and respects the align requirements, keep it.
        // This allows to prefer positions overlapping horizontally over the
        // ones overlapping vertically.
        if (position.croppedArea === 0 && alignOk) {
          break;
        }
      }

      return position;
    }

  };


/***/ }),

/***/ "./src/bower_components/iron-fit-behavior/iron-fit-behavior.deps.js":
/*!**************************************************************************!*\
  !*** ./src/bower_components/iron-fit-behavior/iron-fit-behavior.deps.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/iron-fit-behavior/iron-fit-behavior.html */ "./src/bower_components/iron-fit-behavior/iron-fit-behavior.html"), 'bower_components/iron-fit-behavior/iron-fit-behavior.html')
__webpack_require__(/*! bower_components/iron-fit-behavior/iron-fit-behavior-0 */ "./src/bower_components/iron-fit-behavior/iron-fit-behavior-0.js")


/***/ }),

/***/ "./src/bower_components/iron-fit-behavior/iron-fit-behavior.html":
/*!***********************************************************************!*\
  !*** ./src/bower_components/iron-fit-behavior/iron-fit-behavior.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> <script src=iron-fit-behavior-0.js></script> </head><body></body></html>";

/***/ }),

/***/ "./src/bower_components/iron-flex-layout/iron-flex-layout.deps.js":
/*!************************************************************************!*\
  !*** ./src/bower_components/iron-flex-layout/iron-flex-layout.deps.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/iron-flex-layout/iron-flex-layout.html */ "./src/bower_components/iron-flex-layout/iron-flex-layout.html"), 'bower_components/iron-flex-layout/iron-flex-layout.html')


/***/ }),

/***/ "./src/bower_components/iron-flex-layout/iron-flex-layout.html":
/*!*********************************************************************!*\
  !*** ./src/bower_components/iron-flex-layout/iron-flex-layout.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <link rel=import href=../polymer/polymer.html> <style>[hidden]{display:none!important}</style> <style is=habitlab-custom-style>:root{--layout:{display:-ms-flexbox;display:-webkit-flex;display:flex};--layout-inline:{display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex};--layout-horizontal:{@apply(--layout);-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row};--layout-horizontal-reverse:{@apply(--layout);-ms-flex-direction:row-reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse};--layout-vertical:{@apply(--layout);-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column};--layout-vertical-reverse:{@apply(--layout);-ms-flex-direction:column-reverse;-webkit-flex-direction:column-reverse;flex-direction:column-reverse};--layout-wrap:{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap};--layout-wrap-reverse:{-ms-flex-wrap:wrap-reverse;-webkit-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse};--layout-flex-auto:{-ms-flex:1 1 auto;-webkit-flex:1 1 auto;flex:1 1 auto};--layout-flex-none:{-ms-flex:none;-webkit-flex:none;flex:none};--layout-flex:{-ms-flex:1 1 0px;-webkit-flex:1;flex:1;-webkit-flex-basis:0px;flex-basis:0px};--layout-flex-2:{-ms-flex:2;-webkit-flex:2;flex:2};--layout-flex-3:{-ms-flex:3;-webkit-flex:3;flex:3};--layout-flex-4:{-ms-flex:4;-webkit-flex:4;flex:4};--layout-flex-5:{-ms-flex:5;-webkit-flex:5;flex:5};--layout-flex-6:{-ms-flex:6;-webkit-flex:6;flex:6};--layout-flex-7:{-ms-flex:7;-webkit-flex:7;flex:7};--layout-flex-8:{-ms-flex:8;-webkit-flex:8;flex:8};--layout-flex-9:{-ms-flex:9;-webkit-flex:9;flex:9};--layout-flex-10:{-ms-flex:10;-webkit-flex:10;flex:10};--layout-flex-11:{-ms-flex:11;-webkit-flex:11;flex:11};--layout-flex-12:{-ms-flex:12;-webkit-flex:12;flex:12};--layout-start:{-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start};--layout-center:{-ms-flex-align:center;-webkit-align-items:center;align-items:center};--layout-end:{-ms-flex-align:end;-webkit-align-items:flex-end;align-items:flex-end};--layout-baseline:{-ms-flex-align:baseline;-webkit-align-items:baseline;align-items:baseline};--layout-start-justified:{-ms-flex-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start};--layout-center-justified:{-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center};--layout-end-justified:{-ms-flex-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end};--layout-around-justified:{-ms-flex-pack:distribute;-webkit-justify-content:space-around;justify-content:space-around};--layout-justified:{-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between};--layout-center-center:{@apply(--layout-center);@apply(--layout-center-justified)};--layout-self-start:{-ms-align-self:flex-start;-webkit-align-self:flex-start;align-self:flex-start};--layout-self-center:{-ms-align-self:center;-webkit-align-self:center;align-self:center};--layout-self-end:{-ms-align-self:flex-end;-webkit-align-self:flex-end;align-self:flex-end};--layout-self-stretch:{-ms-align-self:stretch;-webkit-align-self:stretch;align-self:stretch};--layout-self-baseline:{-ms-align-self:baseline;-webkit-align-self:baseline;align-self:baseline};--layout-start-aligned:{-ms-flex-line-pack:start;-ms-align-content:flex-start;-webkit-align-content:flex-start;align-content:flex-start};--layout-end-aligned:{-ms-flex-line-pack:end;-ms-align-content:flex-end;-webkit-align-content:flex-end;align-content:flex-end};--layout-center-aligned:{-ms-flex-line-pack:center;-ms-align-content:center;-webkit-align-content:center;align-content:center};--layout-between-aligned:{-ms-flex-line-pack:justify;-ms-align-content:space-between;-webkit-align-content:space-between;align-content:space-between};--layout-around-aligned:{-ms-flex-line-pack:distribute;-ms-align-content:space-around;-webkit-align-content:space-around;align-content:space-around};--layout-block:{display:block};--layout-invisible:{visibility:hidden!important};--layout-relative:{position:relative};--layout-fit:{position:absolute;top:0;right:0;bottom:0;left:0};--layout-scroll:{-webkit-overflow-scrolling:touch;overflow:auto};--layout-fullbleed:{margin:0;height:100vh};--layout-fixed-top:{position:fixed;top:0;left:0;right:0};--layout-fixed-right:{position:fixed;top:0;right:0;bottom:0};--layout-fixed-bottom:{position:fixed;right:0;bottom:0;left:0};--layout-fixed-left:{position:fixed;top:0;bottom:0;left:0};}</style> ";

/***/ }),

/***/ "./src/bower_components/iron-form-element-behavior/iron-form-element-behavior-0.js":
/*!*****************************************************************************************!*\
  !*** ./src/bower_components/iron-form-element-behavior/iron-form-element-behavior-0.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


  /**
  Polymer.IronFormElementBehavior enables a custom element to be included
  in an `iron-form`.

  @demo demo/index.html
  @polymerBehavior
  */
  Polymer.IronFormElementBehavior = {

    properties: {
      /**
       * Fired when the element is added to an `iron-form`.
       *
       * @event iron-form-element-register
       */

      /**
       * Fired when the element is removed from an `iron-form`.
       *
       * @event iron-form-element-unregister
       */

      /**
       * The name of this element.
       */
      name: {
        type: String
      },

      /**
       * The value for this element.
       */
      value: {
        notify: true,
        type: String
      },

      /**
       * Set to true to mark the input as required. If used in a form, a
       * custom element that uses this behavior should also use
       * Polymer.IronValidatableBehavior and define a custom validation method.
       * Otherwise, a `required` element will always be considered valid.
       * It's also strongly recommended to provide a visual style for the element
       * when its value is invalid.
       */
      required: {
        type: Boolean,
        value: false
      },

      /**
       * The form that the element is registered to.
       */
      _parentForm: {
        type: Object
      }
    },

    attached: function() {
      // Note: the iron-form that this element belongs to will set this
      // element's _parentForm property when handling this event.
      this.fire('iron-form-element-register');
    },

    detached: function() {
      if (this._parentForm) {
        this._parentForm.fire('iron-form-element-unregister', {target: this});
      }
    }

  };



/***/ }),

/***/ "./src/bower_components/iron-form-element-behavior/iron-form-element-behavior.deps.js":
/*!********************************************************************************************!*\
  !*** ./src/bower_components/iron-form-element-behavior/iron-form-element-behavior.deps.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/iron-form-element-behavior/iron-form-element-behavior.html */ "./src/bower_components/iron-form-element-behavior/iron-form-element-behavior.html"), 'bower_components/iron-form-element-behavior/iron-form-element-behavior.html')
__webpack_require__(/*! bower_components/iron-form-element-behavior/iron-form-element-behavior-0 */ "./src/bower_components/iron-form-element-behavior/iron-form-element-behavior-0.js")


/***/ }),

/***/ "./src/bower_components/iron-form-element-behavior/iron-form-element-behavior.html":
/*!*****************************************************************************************!*\
  !*** ./src/bower_components/iron-form-element-behavior/iron-form-element-behavior.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> <script src=iron-form-element-behavior-0.js></script> </head><body></body></html>";

/***/ }),

/***/ "./src/bower_components/habitlab-iron-meta/habitlab-iron-meta-0.js":
/*!*******************************************************!*\
  !*** ./src/bower_components/habitlab-iron-meta/habitlab-iron-meta-0.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



  (function() {

    // monostate data
    var metaDatas = {};
    var metaArrays = {};
    var singleton = null;

    Polymer.IronMeta = Polymer({

      is: 'habitlab-iron-meta',

      properties: {

        /**
         * The type of meta-data.  All meta-data of the same type is stored
         * together.
         */
        type: {
          type: String,
          value: 'default',
          observer: '_typeChanged'
        },

        /**
         * The key used to store `value` under the `type` namespace.
         */
        key: {
          type: String,
          observer: '_keyChanged'
        },

        /**
         * The meta-data to store or retrieve.
         */
        value: {
          type: Object,
          notify: true,
          observer: '_valueChanged'
        },

        /**
         * If true, `value` is set to the habitlab-iron-meta instance itself.
         */
         self: {
          type: Boolean,
          observer: '_selfChanged'
        },

        /**
         * Array of all meta-data values for the given type.
         */
        list: {
          type: Array,
          notify: true
        }

      },

      hostAttributes: {
        hidden: true
      },

      /**
       * Only runs if someone invokes the factory/constructor directly
       * e.g. `new Polymer.IronMeta()`
       *
       * @param {{type: (string|undefined), key: (string|undefined), value}=} config
       */
      factoryImpl: function(config) {
        if (config) {
          for (var n in config) {
            switch(n) {
              case 'type':
              case 'key':
              case 'value':
                this[n] = config[n];
                break;
            }
          }
        }
      },

      created: function() {
        // TODO(sjmiles): good for debugging?
        this._metaDatas = metaDatas;
        this._metaArrays = metaArrays;
      },

      _keyChanged: function(key, old) {
        this._resetRegistration(old);
      },

      _valueChanged: function(value) {
        this._resetRegistration(this.key);
      },

      _selfChanged: function(self) {
        if (self) {
          this.value = this;
        }
      },

      _typeChanged: function(type) {
        this._unregisterKey(this.key);
        if (!metaDatas[type]) {
          metaDatas[type] = {};
        }
        this._metaData = metaDatas[type];
        if (!metaArrays[type]) {
          metaArrays[type] = [];
        }
        this.list = metaArrays[type];
        this._registerKeyValue(this.key, this.value);
      },

      /**
       * Retrieves meta data value by key.
       *
       * @method byKey
       * @param {string} key The key of the meta-data to be returned.
       * @return {*}
       */
      byKey: function(key) {
        return this._metaData && this._metaData[key];
      },

      _resetRegistration: function(oldKey) {
        this._unregisterKey(oldKey);
        this._registerKeyValue(this.key, this.value);
      },

      _unregisterKey: function(key) {
        this._unregister(key, this._metaData, this.list);
      },

      _registerKeyValue: function(key, value) {
        this._register(key, value, this._metaData, this.list);
      },

      _register: function(key, value, data, list) {
        if (key && data && value !== undefined) {
          data[key] = value;
          list.push(value);
        }
      },

      _unregister: function(key, data, list) {
        if (key && data) {
          if (key in data) {
            var value = data[key];
            delete data[key];
            this.arrayDelete(list, value);
          }
        }
      }

    });

    Polymer.IronMeta.getIronMeta = function getIronMeta() {
       if (singleton === null) {
         singleton = new Polymer.IronMeta();
       }
       return singleton;
     };

    /**
    `habitlab-iron-meta-query` can be used to access infomation stored in `habitlab-iron-meta`.

    Examples:

    If I create an instance like this:

        <habitlab-iron-meta key="info" value="foo/bar"></habitlab-iron-meta>

    Note that value="foo/bar" is the metadata I've defined. I could define more
    attributes or use child nodes to define additional metadata.

    Now I can access that element (and it's metadata) from any `habitlab-iron-meta-query` instance:

         var value = new Polymer.IronMetaQuery({key: 'info'}).value;

    @group Polymer Iron Elements
    @element habitlab-iron-meta-query
    */
    Polymer.IronMetaQuery = Polymer({

      is: 'habitlab-iron-meta-query',

      properties: {

        /**
         * The type of meta-data.  All meta-data of the same type is stored
         * together.
         */
        type: {
          type: String,
          value: 'default',
          observer: '_typeChanged'
        },

        /**
         * Specifies a key to use for retrieving `value` from the `type`
         * namespace.
         */
        key: {
          type: String,
          observer: '_keyChanged'
        },

        /**
         * The meta-data to store or retrieve.
         */
        value: {
          type: Object,
          notify: true,
          readOnly: true
        },

        /**
         * Array of all meta-data values for the given type.
         */
        list: {
          type: Array,
          notify: true
        }

      },

      /**
       * Actually a factory method, not a true constructor. Only runs if
       * someone invokes it directly (via `new Polymer.IronMeta()`);
       *
       * @param {{type: (string|undefined), key: (string|undefined)}=} config
       */
      factoryImpl: function(config) {
        if (config) {
          for (var n in config) {
            switch(n) {
              case 'type':
              case 'key':
                this[n] = config[n];
                break;
            }
          }
        }
      },

      created: function() {
        // TODO(sjmiles): good for debugging?
        this._metaDatas = metaDatas;
        this._metaArrays = metaArrays;
      },

      _keyChanged: function(key) {
        this._setValue(this._metaData && this._metaData[key]);
      },

      _typeChanged: function(type) {
        this._metaData = metaDatas[type];
        this.list = metaArrays[type];
        if (this.key) {
          this._keyChanged(this.key);
        }
      },

      /**
       * Retrieves meta data value by key.
       * @param {string} key The key of the meta-data to be returned.
       * @return {*}
       */
      byKey: function(key) {
        return this._metaData && this._metaData[key];
      }

    });

  })();


/***/ }),

/***/ "./src/bower_components/habitlab-iron-meta/habitlab-iron-meta.deps.js":
/*!**********************************************************!*\
  !*** ./src/bower_components/habitlab-iron-meta/habitlab-iron-meta.deps.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/habitlab-iron-meta/habitlab-iron-meta.html */ "./src/bower_components/habitlab-iron-meta/habitlab-iron-meta.html"), 'bower_components/habitlab-iron-meta/habitlab-iron-meta.html')
__webpack_require__(/*! bower_components/habitlab-iron-meta/habitlab-iron-meta-0 */ "./src/bower_components/habitlab-iron-meta/habitlab-iron-meta-0.js")


/***/ }),

/***/ "./src/bower_components/habitlab-iron-meta/habitlab-iron-meta.html":
/*!*******************************************************!*\
  !*** ./src/bower_components/habitlab-iron-meta/habitlab-iron-meta.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> <script src=habitlab-iron-meta-0.js></script> </head><body></body></html>";

/***/ }),

/***/ "./src/bower_components/iron-overlay-behavior/habitlab-iron-overlay-backdrop-0.js":
/*!*******************************************************************************!*\
  !*** ./src/bower_components/iron-overlay-behavior/habitlab-iron-overlay-backdrop-0.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


(function() {
'use strict';

  Polymer({

    is: 'habitlab-iron-overlay-backdrop',

    properties: {

      /**
       * Returns true if the backdrop is opened.
       */
      opened: {
        reflectToAttribute: true,
        type: Boolean,
        value: false,
        observer: '_openedChanged'
      }

    },

    listeners: {
      'transitionend': '_onTransitionend'
    },

    created: function() {
      // Used to cancel previous requestAnimationFrame calls when opened changes.
      this.__openedRaf = null;
    },

    attached: function() {
      this.opened && this._openedChanged(this.opened);
    },

    /**
     * Appends the backdrop to document body if needed.
     */
    prepare: function() {
      if (this.opened && !this.parentNode) {
        Polymer.dom(document.body).appendChild(this);
      }
    },

    /**
     * Shows the backdrop.
     */
    open: function() {
      this.opened = true;
    },

    /**
     * Hides the backdrop.
     */
    close: function() {
      this.opened = false;
    },

    /**
     * Removes the backdrop from document body if needed.
     */
    complete: function() {
      if (!this.opened && this.parentNode === document.body) {
        Polymer.dom(this.parentNode).removeChild(this);
      }
    },

    _onTransitionend: function(event) {
      if (event && event.target === this) {
        this.complete();
      }
    },

    /**
     * @param {boolean} opened
     * @private
     */
    _openedChanged: function(opened) {
      if (opened) {
        // Auto-attach.
        this.prepare();
      } else {
        // Animation might be disabled via the mixin or opacity custom property.
        // If it is disabled in other ways, it's up to the user to call complete.
        var cs = window.getComputedStyle(this);
        if (cs.transitionDuration === '0s' || cs.opacity == 0) {
          this.complete();
        }
      }

      if (!this.isAttached) {
        return;
      }

      // Always cancel previous requestAnimationFrame.
      if (this.__openedRaf) {
        window.cancelAnimationFrame(this.__openedRaf);
        this.__openedRaf = null;
      }
      // Force relayout to ensure proper transitions.
      this.scrollTop = this.scrollTop;
      this.__openedRaf = window.requestAnimationFrame(function() {
        this.__openedRaf = null;
        this.toggleClass('opened', this.opened);
      }.bind(this));
    }
  });

})();



/***/ }),

/***/ "./src/bower_components/iron-overlay-behavior/habitlab-iron-overlay-backdrop.deps.js":
/*!**********************************************************************************!*\
  !*** ./src/bower_components/iron-overlay-behavior/habitlab-iron-overlay-backdrop.deps.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/iron-overlay-behavior/habitlab-iron-overlay-backdrop.html */ "./src/bower_components/iron-overlay-behavior/habitlab-iron-overlay-backdrop.html"), 'bower_components/iron-overlay-behavior/habitlab-iron-overlay-backdrop.html')
__webpack_require__(/*! bower_components/iron-overlay-behavior/habitlab-iron-overlay-backdrop-0 */ "./src/bower_components/iron-overlay-behavior/habitlab-iron-overlay-backdrop-0.js")


/***/ }),

/***/ "./src/bower_components/iron-overlay-behavior/habitlab-iron-overlay-backdrop.html":
/*!*******************************************************************************!*\
  !*** ./src/bower_components/iron-overlay-behavior/habitlab-iron-overlay-backdrop.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> </head><body><habitlab-dom-module id=habitlab-iron-overlay-backdrop> <template> <style>:host{position:fixed;top:0;left:0;width:100%;height:100%;background-color:var(--habitlab-iron-overlay-backdrop-background-color,#000);opacity:0;transition:opacity .2s;pointer-events:none;@apply(--habitlab-iron-overlay-backdrop)}:host(.opened){opacity:var(--habitlab-iron-overlay-backdrop-opacity,.6);pointer-events:auto;@apply(--habitlab-iron-overlay-backdrop-opened)}</style> <content></content> </template> </habitlab-dom-module> <script src=habitlab-iron-overlay-backdrop-0.js></script> </body></html>";

/***/ }),

/***/ "./src/bower_components/iron-overlay-behavior/iron-overlay-behavior-0.js":
/*!*******************************************************************************!*\
  !*** ./src/bower_components/iron-overlay-behavior/iron-overlay-behavior-0.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


(function() {
'use strict';

/**
Use `Polymer.IronOverlayBehavior` to implement an element that can be hidden or shown, and displays
on top of other content. It includes an optional backdrop, and can be used to implement a variety
of UI controls including dialogs and drop downs. Multiple overlays may be displayed at once.

See the [demo source code](https://github.com/PolymerElements/iron-overlay-behavior/blob/master/demo/simple-overlay.html)
for an example.

### Closing and canceling

An overlay may be hidden by closing or canceling. The difference between close and cancel is user
intent. Closing generally implies that the user acknowledged the content on the overlay. By default,
it will cancel whenever the user taps outside it or presses the escape key. This behavior is
configurable with the `no-cancel-on-esc-key` and the `no-cancel-on-outside-click` properties.
`close()` should be called explicitly by the implementer when the user interacts with a control
in the overlay element. When the dialog is canceled, the overlay fires an 'iron-overlay-canceled'
event. Call `preventDefault` on this event to prevent the overlay from closing.

### Positioning

By default the element is sized and positioned to fit and centered inside the window. You can
position and size it manually using CSS. See `Polymer.IronFitBehavior`.

### Backdrop

Set the `with-backdrop` attribute to display a backdrop behind the overlay. The backdrop is
appended to `<body>` and is of type `<habitlab-iron-overlay-backdrop>`. See its doc page for styling
options.

In addition, `with-backdrop` will wrap the focus within the content in the light DOM.
Override the [`_focusableNodes` getter](#Polymer.IronOverlayBehavior:property-_focusableNodes)
to achieve a different behavior.

### Limitations

The element is styled to appear on top of other content by setting its `z-index` property. You
must ensure no element has a stacking context with a higher `z-index` than its parent stacking
context. You should place this element as a child of `<body>` whenever possible.

@demo demo/index.html
@polymerBehavior Polymer.IronOverlayBehavior
*/

  Polymer.IronOverlayBehaviorImpl = {

    properties: {

      /**
       * True if the overlay is currently displayed.
       */
      opened: {
        observer: '_openedChanged',
        type: Boolean,
        value: false,
        notify: true
      },

      /**
       * True if the overlay was canceled when it was last closed.
       */
      canceled: {
        observer: '_canceledChanged',
        readOnly: true,
        type: Boolean,
        value: false
      },

      /**
       * Set to true to display a backdrop behind the overlay. It traps the focus
       * within the light DOM of the overlay.
       */
      withBackdrop: {
        observer: '_withBackdropChanged',
        type: Boolean
      },

      /**
       * Set to true to disable auto-focusing the overlay or child nodes with
       * the `autofocus` attribute` when the overlay is opened.
       */
      noAutoFocus: {
        type: Boolean,
        value: false
      },

      /**
       * Set to true to disable canceling the overlay with the ESC key.
       */
      noCancelOnEscKey: {
        type: Boolean,
        value: false
      },

      /**
       * Set to true to disable canceling the overlay by clicking outside it.
       */
      noCancelOnOutsideClick: {
        type: Boolean,
        value: false
      },

      /**
       * Contains the reason(s) this overlay was last closed (see `iron-overlay-closed`).
       * `IronOverlayBehavior` provides the `canceled` reason; implementers of the
       * behavior can provide other reasons in addition to `canceled`.
       */
      closingReason: {
        // was a getter before, but needs to be a property so other
        // behaviors can override this.
        type: Object
      },

      /**
       * Set to true to enable restoring of focus when overlay is closed.
       */
      restoreFocusOnClose: {
        type: Boolean,
        value: false
      },

      /**
       * Set to true to keep overlay always on top.
       */
      alwaysOnTop: {
        type: Boolean
      },

      /**
       * Shortcut to access to the overlay manager.
       * @private
       * @type {Polymer.IronOverlayManagerClass}
       */
      _manager: {
        type: Object,
        value: Polymer.IronOverlayManager
      },

      /**
       * The node being focused.
       * @type {?Node}
       */
      _focusedChild: {
        type: Object
      }

    },

    listeners: {
      'iron-resize': '_onIronResize'
    },

    /**
     * The backdrop element.
     * @type {Element}
     */
    get backdropElement() {
      return this._manager.backdropElement;
    },

    /**
     * Returns the node to give focus to.
     * @type {Node}
     */
    get _focusNode() {
      return this._focusedChild || Polymer.dom(this).querySelector('[autofocus]') || this;
    },

    /**
     * Array of nodes that can receive focus (overlay included), ordered by `tabindex`.
     * This is used to retrieve which is the first and last focusable nodes in order
     * to wrap the focus for overlays `with-backdrop`.
     *
     * If you know what is your content (specifically the first and last focusable children),
     * you can override this method to return only `[firstFocusable, lastFocusable];`
     * @type {Array<Node>}
     * @protected
     */
    get _focusableNodes() {
      // Elements that can be focused even if they have [disabled] attribute.
      var FOCUSABLE_WITH_DISABLED = [
        'a[href]',
        'area[href]',
        'iframe',
        '[tabindex]',
        '[contentEditable=true]'
      ];

      // Elements that cannot be focused if they have [disabled] attribute.
      var FOCUSABLE_WITHOUT_DISABLED = [
        'input',
        'select',
        'textarea',
        'button'
      ];

      // Discard elements with tabindex=-1 (makes them not focusable).
      var selector = FOCUSABLE_WITH_DISABLED.join(':not([tabindex="-1"]),') +
        ':not([tabindex="-1"]),' +
        FOCUSABLE_WITHOUT_DISABLED.join(':not([disabled]):not([tabindex="-1"]),') +
        ':not([disabled]):not([tabindex="-1"])';

      var focusables = Polymer.dom(this).querySelectorAll(selector);
      if (this.tabIndex >= 0) {
        // Insert at the beginning because we might have all elements with tabIndex = 0,
        // and the overlay should be the first of the list.
        focusables.splice(0, 0, this);
      }
      // Sort by tabindex.
      return focusables.sort(function (a, b) {
        if (a.tabIndex === b.tabIndex) {
          return 0;
        }
        if (a.tabIndex === 0 || a.tabIndex > b.tabIndex) {
          return 1;
        }
        return -1;
      });
    },

    ready: function() {
      // Used to skip calls to notifyResize and refit while the overlay is animating.
      this.__isAnimating = false;
      // with-backdrop needs tabindex to be set in order to trap the focus.
      // If it is not set, IronOverlayBehavior will set it, and remove it if with-backdrop = false.
      this.__shouldRemoveTabIndex = false;
      // Used for wrapping the focus on TAB / Shift+TAB.
      this.__firstFocusableNode = this.__lastFocusableNode = null;
      // Used for requestAnimationFrame when opened changes.
      this.__openChangedAsync = null;
      // Used for requestAnimationFrame when iron-resize is fired.
      this.__onIronResizeAsync = null;
      this._ensureSetup();
    },

    attached: function() {
      // Call _openedChanged here so that position can be computed correctly.
      if (this.opened) {
        this._openedChanged();
      }
      this._observer = Polymer.dom(this).observeNodes(this._onNodesChange);
    },

    detached: function() {
      Polymer.dom(this).unobserveNodes(this._observer);
      this._observer = null;
      this.opened = false;
    },

    /**
     * Toggle the opened state of the overlay.
     */
    toggle: function() {
      this._setCanceled(false);
      this.opened = !this.opened;
    },

    /**
     * Open the overlay.
     */
    open: function() {
      this._setCanceled(false);
      this.opened = true;
    },

    /**
     * Close the overlay.
     */
    close: function() {
      this._setCanceled(false);
      this.opened = false;
    },

    /**
     * Cancels the overlay.
     * @param {Event=} event The original event
     */
    cancel: function(event) {
      var cancelEvent = this.fire('iron-overlay-canceled', event, {cancelable: true});
      if (cancelEvent.defaultPrevented) {
        return;
      }

      this._setCanceled(true);
      this.opened = false;
    },

    _ensureSetup: function() {
      if (this._overlaySetup) {
        return;
      }
      this._overlaySetup = true;
      this.style.outline = 'none';
      this.style.display = 'none';
    },

    _openedChanged: function() {
      if (this.opened) {
        this.removeAttribute('aria-hidden');
      } else {
        this.setAttribute('aria-hidden', 'true');
      }

      // wait to call after ready only if we're initially open
      if (!this._overlaySetup) {
        return;
      }

      if (this.__openChangedAsync) {
        window.cancelAnimationFrame(this.__openChangedAsync);
      }

      // Synchronously remove the overlay.
      // The adding is done asynchronously to go out of the scope of the event
      // which might have generated the opening.
      if (!this.opened) {
        this._manager.removeOverlay(this);
      }

      // Defer any animation-related code on attached
      // (_openedChanged gets called again on attached).
      if (!this.isAttached) {
        return;
      }

      this.__isAnimating = true;

      // requestAnimationFrame for non-blocking rendering
      this.__openChangedAsync = window.requestAnimationFrame(function() {
        this.__openChangedAsync = null;
        if (this.opened) {
          this._manager.addOverlay(this);
          this._prepareRenderOpened();
          this._renderOpened();
        } else {
          // Move the focus before actually closing.
          this._applyFocus();
          this._renderClosed();
        }
      }.bind(this));
    },

    _canceledChanged: function() {
      this.closingReason = this.closingReason || {};
      this.closingReason.canceled = this.canceled;
    },

    _withBackdropChanged: function() {
      // If tabindex is already set, no need to override it.
      if (this.withBackdrop && !this.hasAttribute('tabindex')) {
        this.setAttribute('tabindex', '-1');
        this.__shouldRemoveTabIndex = true;
      } else if (this.__shouldRemoveTabIndex) {
        this.removeAttribute('tabindex');
        this.__shouldRemoveTabIndex = false;
      }
      if (this.opened && this.isAttached) {
        this._manager.trackBackdrop();
      }
    },

    /**
     * tasks which must occur before opening; e.g. making the element visible.
     * @protected
     */
    _prepareRenderOpened: function() {

      // Needed to calculate the size of the overlay so that transitions on its size
      // will have the correct starting points.
      this._preparePositioning();
      this.refit();
      this._finishPositioning();

      // Move the focus to the child node with [autofocus].
      this._applyFocus();

      // Safari will apply the focus to the autofocus element when displayed for the first time,
      // so we blur it. Later, _applyFocus will set the focus if necessary.
      if (this.noAutoFocus && document.activeElement === this._focusNode) {
        this._focusNode.blur();
      }
    },

    /**
     * Tasks which cause the overlay to actually open; typically play an animation.
     * @protected
     */
    _renderOpened: function() {
      this._finishRenderOpened();
    },

    /**
     * Tasks which cause the overlay to actually close; typically play an animation.
     * @protected
     */
    _renderClosed: function() {
      this._finishRenderClosed();
    },

    /**
     * Tasks to be performed at the end of open action. Will fire `iron-overlay-opened`.
     * @protected
     */
    _finishRenderOpened: function() {

      this.notifyResize();
      this.__isAnimating = false;

      // Store it so we don't query too much.
      var focusableNodes = this._focusableNodes;
      this.__firstFocusableNode = focusableNodes[0];
      this.__lastFocusableNode = focusableNodes[focusableNodes.length - 1];

      this.fire('iron-overlay-opened');
    },

    /**
     * Tasks to be performed at the end of close action. Will fire `iron-overlay-closed`.
     * @protected
     */
    _finishRenderClosed: function() {
      // Hide the overlay and remove the backdrop.
      this.style.display = 'none';
      // Reset z-index only at the end of the animation.
      this.style.zIndex = '';

      this.notifyResize();
      this.__isAnimating = false;
      this.fire('iron-overlay-closed', this.closingReason);
    },

    _preparePositioning: function() {
      this.style.transition = this.style.webkitTransition = 'none';
      this.style.transform = this.style.webkitTransform = 'none';
      this.style.display = '';
    },

    _finishPositioning: function() {
      // First, make it invisible & reactivate animations.
      this.style.display = 'none';
      // Force reflow before re-enabling animations so that they don't start.
      // Set scrollTop to itself so that Closure Compiler doesn't remove this.
      this.scrollTop = this.scrollTop;
      this.style.transition = this.style.webkitTransition = '';
      this.style.transform = this.style.webkitTransform = '';
      // Now that animations are enabled, make it visible again
      this.style.display = '';
      // Force reflow, so that following animations are properly started.
      // Set scrollTop to itself so that Closure Compiler doesn't remove this.
      this.scrollTop = this.scrollTop;
    },

    /**
     * Applies focus according to the opened state.
     * @protected
     */
    _applyFocus: function() {
      if (this.opened) {
        if (!this.noAutoFocus) {
          this._focusNode.focus();
        }
      } else {
        this._focusNode.blur();
        this._focusedChild = null;
        this._manager.focusOverlay();
      }
    },

    /**
     * Cancels (closes) the overlay. Call when click happens outside the overlay.
     * @param {!Event} event
     * @protected
     */
    _onCaptureClick: function(event) {
      if (!this.noCancelOnOutsideClick) {
        this.cancel(event);
      }
    },

    /**
     * Keeps track of the focused child. If withBackdrop, traps focus within overlay.
     * @param {!Event} event
     * @protected
     */
    _onCaptureFocus: function (event) {
      if (!this.withBackdrop) {
        return;
      }
      var path = Polymer.dom(event).path;
      if (path.indexOf(this) === -1) {
        event.stopPropagation();
        this._applyFocus();
      } else {
        this._focusedChild = path[0];
      }
    },

    /**
     * Handles the ESC key event and cancels (closes) the overlay.
     * @param {!Event} event
     * @protected
     */
    _onCaptureEsc: function(event) {
      if (!this.noCancelOnEscKey) {
        this.cancel(event);
      }
    },

    /**
     * Handles TAB key events to track focus changes.
     * Will wrap focus for overlays withBackdrop.
     * @param {!Event} event
     * @protected
     */
    _onCaptureTab: function(event) {
      if (!this.withBackdrop) {
        return;
      }
      // TAB wraps from last to first focusable.
      // Shift + TAB wraps from first to last focusable.
      var shift = event.shiftKey;
      var nodeToCheck = shift ? this.__firstFocusableNode : this.__lastFocusableNode;
      var nodeToSet = shift ? this.__lastFocusableNode : this.__firstFocusableNode;
      var shouldWrap = false;
      if (nodeToCheck === nodeToSet) {
        // If nodeToCheck is the same as nodeToSet, it means we have an overlay
        // with 0 or 1 focusables; in either case we still need to trap the
        // focus within the overlay.
        shouldWrap = true;
      } else {
        // In dom=shadow, the manager will receive focus changes on the main
        // root but not the ones within other shadow roots, so we can't rely on
        // _focusedChild, but we should check the deepest active element.
        var focusedNode = this._manager.deepActiveElement;
        // If the active element is not the nodeToCheck but the overlay itself,
        // it means the focus is about to go outside the overlay, hence we
        // should prevent that (e.g. user opens the overlay and hit Shift+TAB).
        shouldWrap = (focusedNode === nodeToCheck || focusedNode === this);
      }

      if (shouldWrap) {
        // When the overlay contains the last focusable element of the document
        // and it's already focused, pressing TAB would move the focus outside
        // the document (e.g. to the browser search bar). Similarly, when the
        // overlay contains the first focusable element of the document and it's
        // already focused, pressing Shift+TAB would move the focus outside the
        // document (e.g. to the browser search bar).
        // In both cases, we would not receive a focus event, but only a blur.
        // In order to achieve focus wrapping, we prevent this TAB event and
        // force the focus. This will also prevent the focus to temporarily move
        // outside the overlay, which might cause scrolling.
        event.preventDefault();
        this._focusedChild = nodeToSet;
        this._applyFocus();
      }
    },

    /**
     * Refits if the overlay is opened and not animating.
     * @protected
     */
    _onIronResize: function() {
      if (this.__onIronResizeAsync) {
        window.cancelAnimationFrame(this.__onIronResizeAsync);
        this.__onIronResizeAsync = null;
      }
      if (this.opened && !this.__isAnimating) {
        this.__onIronResizeAsync = window.requestAnimationFrame(function() {
          this.__onIronResizeAsync = null;
          this.refit();
        }.bind(this));
      }
    },

    /**
     * Will call notifyResize if overlay is opened.
     * Can be overridden in order to avoid multiple observers on the same node.
     * @protected
     */
    _onNodesChange: function() {
      if (this.opened && !this.__isAnimating) {
        this.notifyResize();
      }
    }
  };

  /** @polymerBehavior */
  Polymer.IronOverlayBehavior = [Polymer.IronFitBehavior, Polymer.IronResizableBehavior, Polymer.IronOverlayBehaviorImpl];

  /**
   * Fired after the overlay opens.
   * @event iron-overlay-opened
   */

  /**
   * Fired when the overlay is canceled, but before it is closed.
   * @event iron-overlay-canceled
   * @param {Event} event The closing of the overlay can be prevented
   * by calling `event.preventDefault()`. The `event.detail` is the original event that
   * originated the canceling (e.g. ESC keyboard event or click event outside the overlay).
   */

  /**
   * Fired after the overlay closes.
   * @event iron-overlay-closed
   * @param {Event} event The `event.detail` is the `closingReason` property
   * (contains `canceled`, whether the overlay was canceled).
   */

})();


/***/ }),

/***/ "./src/bower_components/iron-overlay-behavior/iron-overlay-behavior.deps.js":
/*!**********************************************************************************!*\
  !*** ./src/bower_components/iron-overlay-behavior/iron-overlay-behavior.deps.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/iron-fit-behavior/iron-fit-behavior.deps.js */ "./src/bower_components/iron-fit-behavior/iron-fit-behavior.deps.js")
__webpack_require__(/*! bower_components/iron-resizable-behavior/iron-resizable-behavior.deps.js */ "./src/bower_components/iron-resizable-behavior/iron-resizable-behavior.deps.js")
__webpack_require__(/*! bower_components/iron-overlay-behavior/iron-overlay-manager.deps.js */ "./src/bower_components/iron-overlay-behavior/iron-overlay-manager.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/iron-overlay-behavior/iron-overlay-behavior.html */ "./src/bower_components/iron-overlay-behavior/iron-overlay-behavior.html"), 'bower_components/iron-overlay-behavior/iron-overlay-behavior.html')
__webpack_require__(/*! bower_components/iron-overlay-behavior/iron-overlay-behavior-0 */ "./src/bower_components/iron-overlay-behavior/iron-overlay-behavior-0.js")


/***/ }),

/***/ "./src/bower_components/iron-overlay-behavior/iron-overlay-behavior.html":
/*!*******************************************************************************!*\
  !*** ./src/bower_components/iron-overlay-behavior/iron-overlay-behavior.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> <link rel=import href=../iron-fit-behavior/iron-fit-behavior.html> <link rel=import href=../iron-resizable-behavior/iron-resizable-behavior.html> <link rel=import href=iron-overlay-manager.html> <script src=iron-overlay-behavior-0.js></script> </head><body></body></html>";

/***/ }),

/***/ "./src/bower_components/iron-overlay-behavior/iron-overlay-manager-0.js":
/*!******************************************************************************!*\
  !*** ./src/bower_components/iron-overlay-behavior/iron-overlay-manager-0.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



  /**
   * @struct
   * @constructor
   * @private
   */
  Polymer.IronOverlayManagerClass = function() {
    /**
     * Used to keep track of the opened overlays.
     * @private {Array<Element>}
     */
    this._overlays = [];

    /**
     * iframes have a default z-index of 100,
     * so this default should be at least that.
     * @private {number}
     */
    this._minimumZ = 101;

    /**
     * Memoized backdrop element.
     * @private {Element|null}
     */
    this._backdropElement = null;

    // Enable document-wide tap recognizer.
    Polymer.Gestures.add(document, 'tap', null);
    // Need to have useCapture=true, Polymer.Gestures doesn't offer that.
    document.addEventListener('tap', this._onCaptureClick.bind(this), true);
    document.addEventListener('focus', this._onCaptureFocus.bind(this), true);
    document.addEventListener('keydown', this._onCaptureKeyDown.bind(this), true);
  };

  Polymer.IronOverlayManagerClass.prototype = {

    constructor: Polymer.IronOverlayManagerClass,

    /**
     * The shared backdrop element.
     * @type {!Element} backdropElement
     */
    get backdropElement() {
      if (!this._backdropElement) {
        this._backdropElement = document.createElement('habitlab-iron-overlay-backdrop');
      }
      return this._backdropElement;
    },

    /**
     * The deepest active element.
     * @type {!Element} activeElement the active element
     */
    get deepActiveElement() {
      // document.activeElement can be null
      // https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement
      // In case of null, default it to document.body.
      var active = document.activeElement || document.body;
      while (active.root && Polymer.dom(active.root).activeElement) {
        active = Polymer.dom(active.root).activeElement;
      }
      return active;
    },

    /**
     * Brings the overlay at the specified index to the front.
     * @param {number} i
     * @private
     */
    _bringOverlayAtIndexToFront: function(i) {
      var overlay = this._overlays[i];
      if (!overlay) {
        return;
      }
      var lastI = this._overlays.length - 1;
      var currentOverlay = this._overlays[lastI];
      // Ensure always-on-top overlay stays on top.
      if (currentOverlay && this._shouldBeBehindOverlay(overlay, currentOverlay)) {
        lastI--;
      }
      // If already the top element, return.
      if (i >= lastI) {
        return;
      }
      // Update z-index to be on top.
      var minimumZ = Math.max(this.currentOverlayZ(), this._minimumZ);
      if (this._getZ(overlay) <= minimumZ) {
        this._applyOverlayZ(overlay, minimumZ);
      }

      // Shift other overlays behind the new on top.
      while (i < lastI) {
        this._overlays[i] = this._overlays[i + 1];
        i++;
      }
      this._overlays[lastI] = overlay;
    },

    /**
     * Adds the overlay and updates its z-index if it's opened, or removes it if it's closed.
     * Also updates the backdrop z-index.
     * @param {!Element} overlay
     */
    addOrRemoveOverlay: function(overlay) {
      if (overlay.opened) {
        this.addOverlay(overlay);
      } else {
        this.removeOverlay(overlay);
      }
    },

    /**
     * Tracks overlays for z-index and focus management.
     * Ensures the last added overlay with always-on-top remains on top.
     * @param {!Element} overlay
     */
    addOverlay: function(overlay) {
      var i = this._overlays.indexOf(overlay);
      if (i >= 0) {
        this._bringOverlayAtIndexToFront(i);
        this.trackBackdrop();
        return;
      }
      var insertionIndex = this._overlays.length;
      var currentOverlay = this._overlays[insertionIndex - 1];
      var minimumZ = Math.max(this._getZ(currentOverlay), this._minimumZ);
      var newZ = this._getZ(overlay);

      // Ensure always-on-top overlay stays on top.
      if (currentOverlay && this._shouldBeBehindOverlay(overlay, currentOverlay)) {
        // This bumps the z-index of +2.
        this._applyOverlayZ(currentOverlay, minimumZ);
        insertionIndex--;
        // Update minimumZ to match previous overlay's z-index.
        var previousOverlay = this._overlays[insertionIndex - 1];
        minimumZ = Math.max(this._getZ(previousOverlay), this._minimumZ);
      }

      // Update z-index and insert overlay.
      if (newZ <= minimumZ) {
        this._applyOverlayZ(overlay, minimumZ);
      }
      this._overlays.splice(insertionIndex, 0, overlay);

      // Get focused node.
      var element = this.deepActiveElement;
      overlay.restoreFocusNode = this._overlayParent(element) ? null : element;
      this.trackBackdrop();
    },

    /**
     * @param {!Element} overlay
     */
    removeOverlay: function(overlay) {
      var i = this._overlays.indexOf(overlay);
      if (i === -1) {
        return;
      }
      this._overlays.splice(i, 1);

      var node = overlay.restoreFocusOnClose ? overlay.restoreFocusNode : null;
      overlay.restoreFocusNode = null;
      // Focus back only if still contained in document.body
      if (node && Polymer.dom(document.body).deepContains(node)) {
        node.focus();
      }
      this.trackBackdrop();
    },

    /**
     * Returns the current overlay.
     * @return {Element|undefined}
     */
    currentOverlay: function() {
      var i = this._overlays.length - 1;
      return this._overlays[i];
    },

    /**
     * Returns the current overlay z-index.
     * @return {number}
     */
    currentOverlayZ: function() {
      return this._getZ(this.currentOverlay());
    },

    /**
     * Ensures that the minimum z-index of new overlays is at least `minimumZ`.
     * This does not effect the z-index of any existing overlays.
     * @param {number} minimumZ
     */
    ensureMinimumZ: function(minimumZ) {
      this._minimumZ = Math.max(this._minimumZ, minimumZ);
    },

    focusOverlay: function() {
      var current = /** @type {?} */ (this.currentOverlay());
      // We have to be careful to focus the next overlay _after_ any current
      // transitions are complete (due to the state being toggled prior to the
      // transition). Otherwise, we risk infinite recursion when a transitioning
      // (closed) overlay becomes the current overlay.
      //
      // NOTE: We make the assumption that any overlay that completes a transition
      // will call into focusOverlay to kick the process back off. Currently:
      // transitionend -> _applyFocus -> focusOverlay.
      if (current && !current.transitioning) {
        current._applyFocus();
      }
    },

    /**
     * Updates the backdrop z-index.
     */
    trackBackdrop: function() {
      var overlay = this._overlayWithBackdrop();
      // Avoid creating the backdrop if there is no overlay with backdrop.
      if (!overlay && !this._backdropElement) {
        return;
      }
      this.backdropElement.style.zIndex = this._getZ(overlay) - 1;
      this.backdropElement.opened = !!overlay;
    },

    /**
     * @return {Array<Element>}
     */
    getBackdrops: function() {
      var backdrops = [];
      for (var i = 0; i < this._overlays.length; i++) {
        if (this._overlays[i].withBackdrop) {
          backdrops.push(this._overlays[i]);
        }
      }
      return backdrops;
    },

    /**
     * Returns the z-index for the backdrop.
     * @return {number}
     */
    backdropZ: function() {
      return this._getZ(this._overlayWithBackdrop()) - 1;
    },

    /**
     * Returns the first opened overlay that has a backdrop.
     * @return {Element|undefined}
     * @private
     */
    _overlayWithBackdrop: function() {
      for (var i = 0; i < this._overlays.length; i++) {
        if (this._overlays[i].withBackdrop) {
          return this._overlays[i];
        }
      }
    },

    /**
     * Calculates the minimum z-index for the overlay.
     * @param {Element=} overlay
     * @private
     */
    _getZ: function(overlay) {
      var z = this._minimumZ;
      if (overlay) {
        var z1 = Number(overlay.style.zIndex || window.getComputedStyle(overlay).zIndex);
        // Check if is a number
        // Number.isNaN not supported in IE 10+
        if (z1 === z1) {
          z = z1;
        }
      }
      return z;
    },

    /**
     * @param {!Element} element
     * @param {number|string} z
     * @private
     */
    _setZ: function(element, z) {
      element.style.zIndex = z;
    },

    /**
     * @param {!Element} overlay
     * @param {number} aboveZ
     * @private
     */
    _applyOverlayZ: function(overlay, aboveZ) {
      this._setZ(overlay, aboveZ + 2);
    },

    /**
     * Returns the overlay containing the provided node. If the node is an overlay,
     * it returns the node.
     * @param {Element=} node
     * @return {Element|undefined}
     * @private
     */
    _overlayParent: function(node) {
      while (node && node !== document.body) {
        // Check if it is an overlay.
        if (node._manager === this) {
          return node;
        }
        // Use logical parentNode, or native ShadowRoot host.
        node = Polymer.dom(node).parentNode || node.host;
      }
    },

    /**
     * Returns the deepest overlay in the path.
     * @param {Array<Element>=} path
     * @return {Element|undefined}
     * @suppress {missingProperties}
     * @private
     */
    _overlayInPath: function(path) {
      path = path || [];
      for (var i = 0; i < path.length; i++) {
        if (path[i]._manager === this) {
          return path[i];
        }
      }
    },

    /**
     * Ensures the click event is delegated to the right overlay.
     * @param {!Event} event
     * @private
     */
    _onCaptureClick: function(event) {
      var overlay = /** @type {?} */ (this.currentOverlay());
      // Check if clicked outside of top overlay.
      if (overlay && this._overlayInPath(Polymer.dom(event).path) !== overlay) {
        overlay._onCaptureClick(event);
      }
    },

    /**
     * Ensures the focus event is delegated to the right overlay.
     * @param {!Event} event
     * @private
     */
    _onCaptureFocus: function(event) {
      var overlay = /** @type {?} */ (this.currentOverlay());
      if (overlay) {
        overlay._onCaptureFocus(event);
      }
    },

    /**
     * Ensures TAB and ESC keyboard events are delegated to the right overlay.
     * @param {!Event} event
     * @private
     */
    _onCaptureKeyDown: function(event) {
      var overlay = /** @type {?} */ (this.currentOverlay());
      if (overlay) {
        if (Polymer.IronA11yKeysBehavior.keyboardEventMatchesKeys(event, 'esc')) {
          overlay._onCaptureEsc(event);
        } else if (Polymer.IronA11yKeysBehavior.keyboardEventMatchesKeys(event, 'tab')) {
          overlay._onCaptureTab(event);
        }
      }
    },

    /**
     * Returns if the overlay1 should be behind overlay2.
     * @param {!Element} overlay1
     * @param {!Element} overlay2
     * @return {boolean}
     * @suppress {missingProperties}
     * @private
     */
    _shouldBeBehindOverlay: function(overlay1, overlay2) {
      return !overlay1.alwaysOnTop && overlay2.alwaysOnTop;
    }
  };

  Polymer.IronOverlayManager = new Polymer.IronOverlayManagerClass();


/***/ }),

/***/ "./src/bower_components/iron-overlay-behavior/iron-overlay-manager.deps.js":
/*!*********************************************************************************!*\
  !*** ./src/bower_components/iron-overlay-behavior/iron-overlay-manager.deps.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.deps.js */ "./src/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.deps.js")
__webpack_require__(/*! bower_components/iron-overlay-behavior/habitlab-iron-overlay-backdrop.deps.js */ "./src/bower_components/iron-overlay-behavior/habitlab-iron-overlay-backdrop.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/iron-overlay-behavior/iron-overlay-manager.html */ "./src/bower_components/iron-overlay-behavior/iron-overlay-manager.html"), 'bower_components/iron-overlay-behavior/iron-overlay-manager.html')
__webpack_require__(/*! bower_components/iron-overlay-behavior/iron-overlay-manager-0 */ "./src/bower_components/iron-overlay-behavior/iron-overlay-manager-0.js")


/***/ }),

/***/ "./src/bower_components/iron-overlay-behavior/iron-overlay-manager.html":
/*!******************************************************************************!*\
  !*** ./src/bower_components/iron-overlay-behavior/iron-overlay-manager.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> <link rel=import href=../iron-a11y-keys-behavior/iron-a11y-keys-behavior.html> <link rel=import href=habitlab-iron-overlay-backdrop.html> <script src=iron-overlay-manager-0.js></script> </head><body></body></html>";

/***/ }),

/***/ "./src/bower_components/iron-resizable-behavior/iron-resizable-behavior-0.js":
/*!***********************************************************************************!*\
  !*** ./src/bower_components/iron-resizable-behavior/iron-resizable-behavior-0.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


  /**
   * `IronResizableBehavior` is a behavior that can be used in Polymer elements to
   * coordinate the flow of resize events between "resizers" (elements that control the
   * size or hidden state of their children) and "resizables" (elements that need to be
   * notified when they are resized or un-hidden by their parents in order to take
   * action on their new measurements).
   * 
   * Elements that perform measurement should add the `IronResizableBehavior` behavior to
   * their element definition and listen for the `iron-resize` event on themselves.
   * This event will be fired when they become showing after having been hidden,
   * when they are resized explicitly by another resizable, or when the window has been
   * resized.
   * 
   * Note, the `iron-resize` event is non-bubbling.
   *
   * @polymerBehavior Polymer.IronResizableBehavior
   * @demo demo/index.html
   **/
  Polymer.IronResizableBehavior = {
    properties: {
      /**
       * The closest ancestor element that implements `IronResizableBehavior`.
       */
      _parentResizable: {
        type: Object,
        observer: '_parentResizableChanged'
      },

      /**
       * True if this element is currently notifying its descedant elements of
       * resize.
       */
      _notifyingDescendant: {
        type: Boolean,
        value: false
      }
    },

    listeners: {
      'iron-request-resize-notifications': '_onIronRequestResizeNotifications'
    },

    created: function() {
      // We don't really need property effects on these, and also we want them
      // to be created before the `_parentResizable` observer fires:
      this._interestedResizables = [];
      this._boundNotifyResize = this.notifyResize.bind(this);
    },

    attached: function() {
      this.fire('iron-request-resize-notifications', null, {
        node: this,
        bubbles: true,
        cancelable: true
      });

      if (!this._parentResizable) {
        window.addEventListener('resize', this._boundNotifyResize);
        this.notifyResize();
      }
    },

    detached: function() {
      if (this._parentResizable) {
        this._parentResizable.stopResizeNotificationsFor(this);
      } else {
        window.removeEventListener('resize', this._boundNotifyResize);
      }

      this._parentResizable = null;
    },

    /**
     * Can be called to manually notify a resizable and its descendant
     * resizables of a resize change.
     */
    notifyResize: function() {
      if (!this.isAttached) {
        return;
      }

      this._interestedResizables.forEach(function(resizable) {
        if (this.resizerShouldNotify(resizable)) {
          this._notifyDescendant(resizable);
        }
      }, this);

      this._fireResize();
    },

    /**
     * Used to assign the closest resizable ancestor to this resizable
     * if the ancestor detects a request for notifications.
     */
    assignParentResizable: function(parentResizable) {
      this._parentResizable = parentResizable;
    },

    /**
     * Used to remove a resizable descendant from the list of descendants
     * that should be notified of a resize change.
     */
    stopResizeNotificationsFor: function(target) {
      var index = this._interestedResizables.indexOf(target);

      if (index > -1) {
        this._interestedResizables.splice(index, 1);
        this.unlisten(target, 'iron-resize', '_onDescendantIronResize');
      }
    },

    /**
     * This method can be overridden to filter nested elements that should or
     * should not be notified by the current element. Return true if an element
     * should be notified, or false if it should not be notified.
     *
     * @param {HTMLElement} element A candidate descendant element that
     * implements `IronResizableBehavior`.
     * @return {boolean} True if the `element` should be notified of resize.
     */
    resizerShouldNotify: function(element) { return true; },

    _onDescendantIronResize: function(event) {
      if (this._notifyingDescendant) {
        event.stopPropagation();
        return;
      }

      // NOTE(cdata): In ShadowDOM, event retargetting makes echoing of the
      // otherwise non-bubbling event "just work." We do it manually here for
      // the case where Polymer is not using shadow roots for whatever reason:
      if (!Polymer.Settings.useShadow) {
        this._fireResize();
      }
    },

    _fireResize: function() {
      this.fire('iron-resize', null, {
        node: this,
        bubbles: false
      });
    },

    _onIronRequestResizeNotifications: function(event) {
      var target = event.path ? event.path[0] : event.target;

      if (target === this) {
        return;
      }

      if (this._interestedResizables.indexOf(target) === -1) {
        this._interestedResizables.push(target);
        this.listen(target, 'iron-resize', '_onDescendantIronResize');
      }

      target.assignParentResizable(this);
      this._notifyDescendant(target);

      event.stopPropagation();
    },

    _parentResizableChanged: function(parentResizable) {
      if (parentResizable) {
        window.removeEventListener('resize', this._boundNotifyResize);
      }
    },

    _notifyDescendant: function(descendant) {
      // NOTE(cdata): In IE10, attached is fired on children first, so it's
      // important not to notify them if the parent is not attached yet (or
      // else they will get redundantly notified when the parent attaches).
      if (!this.isAttached) {
        return;
      }

      this._notifyingDescendant = true;
      descendant.notifyResize();
      this._notifyingDescendant = false;
    }
  };


/***/ }),

/***/ "./src/bower_components/iron-resizable-behavior/iron-resizable-behavior.deps.js":
/*!**************************************************************************************!*\
  !*** ./src/bower_components/iron-resizable-behavior/iron-resizable-behavior.deps.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/iron-resizable-behavior/iron-resizable-behavior.html */ "./src/bower_components/iron-resizable-behavior/iron-resizable-behavior.html"), 'bower_components/iron-resizable-behavior/iron-resizable-behavior.html')
__webpack_require__(/*! bower_components/iron-resizable-behavior/iron-resizable-behavior-0 */ "./src/bower_components/iron-resizable-behavior/iron-resizable-behavior-0.js")


/***/ }),

/***/ "./src/bower_components/iron-resizable-behavior/iron-resizable-behavior.html":
/*!***********************************************************************************!*\
  !*** ./src/bower_components/iron-resizable-behavior/iron-resizable-behavior.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> <script src=iron-resizable-behavior-0.js></script> </head><body></body></html>";

/***/ }),

/***/ "./src/bower_components/iron-validatable-behavior/iron-validatable-behavior-0.js":
/*!***************************************************************************************!*\
  !*** ./src/bower_components/iron-validatable-behavior/iron-validatable-behavior-0.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


  /**
   * Singleton IronMeta instance.
   */
  Polymer.IronValidatableBehaviorMeta = null;

  /**
   * `Use Polymer.IronValidatableBehavior` to implement an element that validates user input.
   * Use the related `Polymer.IronValidatorBehavior` to add custom validation logic to an habitlab-iron-input.
   *
   * By default, an `<iron-form>` element validates its fields when the user presses the submit button.
   * To validate a form imperatively, call the form's `validate()` method, which in turn will
   * call `validate()` on all its children. By using `Polymer.IronValidatableBehavior`, your
   * custom element will get a public `validate()`, which
   * will return the validity of the element, and a corresponding `invalid` attribute,
   * which can be used for styling.
   *
   * To implement the custom validation logic of your element, you must override
   * the protected `_getValidity()` method of this behaviour, rather than `validate()`.
   * See [this](https://github.com/PolymerElements/iron-form/blob/master/demo/simple-element.html)
   * for an example.
   *
   * ### Accessibility
   *
   * Changing the `invalid` property, either manually or by calling `validate()` will update the
   * `aria-invalid` attribute.
   *
   * @demo demo/index.html
   * @polymerBehavior
   */
  Polymer.IronValidatableBehavior = {

    properties: {

      /**
       * Name of the validator to use.
       */
      validator: {
        type: String
      },

      /**
       * True if the last call to `validate` is invalid.
       */
      invalid: {
        notify: true,
        reflectToAttribute: true,
        type: Boolean,
        value: false
      },

      /**
       * This property is deprecated and should not be used. Use the global
       * validator meta singleton, `Polymer.IronValidatableBehaviorMeta` instead.
       */
      _validatorMeta: {
        type: Object
      },

      /**
       * Namespace for this validator. This property is deprecated and should
       * not be used. For all intents and purposes, please consider it a
       * read-only, config-time property.
       */
      validatorType: {
        type: String,
        value: 'validator'
      },

      _validator: {
        type: Object,
        computed: '__computeValidator(validator)'
      }
    },

    observers: [
      '_invalidChanged(invalid)'
    ],

    registered: function() {
      Polymer.IronValidatableBehaviorMeta = new Polymer.IronMeta({type: 'validator'});
    },

    _invalidChanged: function() {
      if (this.invalid) {
        this.setAttribute('aria-invalid', 'true');
      } else {
        this.removeAttribute('aria-invalid');
      }
    },

    /**
     * @return {boolean} True if the validator `validator` exists.
     */
    hasValidator: function() {
      return this._validator != null;
    },

    /**
     * Returns true if the `value` is valid, and updates `invalid`. If you want
     * your element to have custom validation logic, do not override this method;
     * override `_getValidity(value)` instead.

     * @param {Object} value The value to be validated. By default, it is passed
     * to the validator's `validate()` function, if a validator is set.
     * @return {boolean} True if `value` is valid.
     */
    validate: function(value) {
      this.invalid = !this._getValidity(value);
      return !this.invalid;
    },

    /**
     * Returns true if `value` is valid.  By default, it is passed
     * to the validator's `validate()` function, if a validator is set. You
     * should override this method if you want to implement custom validity
     * logic for your element.
     *
     * @param {Object} value The value to be validated.
     * @return {boolean} True if `value` is valid.
     */

    _getValidity: function(value) {
      if (this.hasValidator()) {
        return this._validator.validate(value);
      }
      return true;
    },

    __computeValidator: function() {
      return Polymer.IronValidatableBehaviorMeta &&
          Polymer.IronValidatableBehaviorMeta.byKey(this.validator);
    }
  };



/***/ }),

/***/ "./src/bower_components/iron-validatable-behavior/iron-validatable-behavior.deps.js":
/*!******************************************************************************************!*\
  !*** ./src/bower_components/iron-validatable-behavior/iron-validatable-behavior.deps.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/habitlab-iron-meta/habitlab-iron-meta.deps.js */ "./src/bower_components/habitlab-iron-meta/habitlab-iron-meta.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/iron-validatable-behavior/iron-validatable-behavior.html */ "./src/bower_components/iron-validatable-behavior/iron-validatable-behavior.html"), 'bower_components/iron-validatable-behavior/iron-validatable-behavior.html')
__webpack_require__(/*! bower_components/iron-validatable-behavior/iron-validatable-behavior-0 */ "./src/bower_components/iron-validatable-behavior/iron-validatable-behavior-0.js")


/***/ }),

/***/ "./src/bower_components/iron-validatable-behavior/iron-validatable-behavior.html":
/*!***************************************************************************************!*\
  !*** ./src/bower_components/iron-validatable-behavior/iron-validatable-behavior.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> <link rel=import href=../habitlab-iron-meta/habitlab-iron-meta.html> <script src=iron-validatable-behavior-0.js></script> </head><body></body></html>";

/***/ }),

/***/ "./src/bower_components/paper-behaviors/habitlab-paper-button-behavior-0.js":
/*!*************************************************************************!*\
  !*** ./src/bower_components/paper-behaviors/habitlab-paper-button-behavior-0.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



  /** @polymerBehavior Polymer.PaperButtonBehavior */
  Polymer.PaperButtonBehaviorImpl = {

    properties: {

      /**
       * The z-depth of this element, from 0-5. Setting to 0 will remove the
       * shadow, and each increasing number greater than 0 will be "deeper"
       * than the last.
       *
       * @attribute elevation
       * @type number
       * @default 1
       */
      elevation: {
        type: Number,
        reflectToAttribute: true,
        readOnly: true
      }

    },

    observers: [
      '_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)',
      '_computeKeyboardClass(receivedFocusFromKeyboard)'
    ],

    hostAttributes: {
      role: 'button',
      tabindex: '0',
      animated: true
    },

    _calculateElevation: function() {
      var e = 1;
      if (this.disabled) {
        e = 0;
      } else if (this.active || this.pressed) {
        e = 4;
      } else if (this.receivedFocusFromKeyboard) {
        e = 3;
      }
      this._setElevation(e);
    },

    _computeKeyboardClass: function(receivedFocusFromKeyboard) {
      this.toggleClass('keyboard-focus', receivedFocusFromKeyboard);
    },

    /**
     * In addition to `IronButtonState` behavior, when space key goes down,
     * create a ripple down effect.
     *
     * @param {!KeyboardEvent} event .
     */
    _spaceKeyDownHandler: function(event) {
      Polymer.IronButtonStateImpl._spaceKeyDownHandler.call(this, event);
      // Ensure that there is at most one ripple when the space key is held down.
      if (this.hasRipple() && this.getRipple().ripples.length < 1) {
        this._ripple.uiDownAction();
      }
    },

    /**
     * In addition to `IronButtonState` behavior, when space key goes up,
     * create a ripple up effect.
     *
     * @param {!KeyboardEvent} event .
     */
    _spaceKeyUpHandler: function(event) {
      Polymer.IronButtonStateImpl._spaceKeyUpHandler.call(this, event);
      if (this.hasRipple()) {
        this._ripple.uiUpAction();
      }
    }

  };

  /** @polymerBehavior */
  Polymer.PaperButtonBehavior = [
    Polymer.IronButtonState,
    Polymer.IronControlState,
    Polymer.PaperRippleBehavior,
    Polymer.PaperButtonBehaviorImpl
  ];



/***/ }),

/***/ "./src/bower_components/paper-behaviors/habitlab-paper-button-behavior.deps.js":
/*!****************************************************************************!*\
  !*** ./src/bower_components/paper-behaviors/habitlab-paper-button-behavior.deps.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/iron-behaviors/iron-button-state.deps.js */ "./src/bower_components/iron-behaviors/iron-button-state.deps.js")
__webpack_require__(/*! bower_components/paper-behaviors/habitlab-paper-ripple-behavior.deps.js */ "./src/bower_components/paper-behaviors/habitlab-paper-ripple-behavior.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/paper-behaviors/habitlab-paper-button-behavior.html */ "./src/bower_components/paper-behaviors/habitlab-paper-button-behavior.html"), 'bower_components/paper-behaviors/habitlab-paper-button-behavior.html')
__webpack_require__(/*! bower_components/paper-behaviors/habitlab-paper-button-behavior-0 */ "./src/bower_components/paper-behaviors/habitlab-paper-button-behavior-0.js")


/***/ }),

/***/ "./src/bower_components/paper-behaviors/habitlab-paper-button-behavior.html":
/*!*************************************************************************!*\
  !*** ./src/bower_components/paper-behaviors/habitlab-paper-button-behavior.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> <link rel=import href=../iron-behaviors/iron-button-state.html> <link rel=import href=habitlab-paper-ripple-behavior.html> <script src=habitlab-paper-button-behavior-0.js></script> </head><body></body></html>";

/***/ }),

/***/ "./src/bower_components/paper-behaviors/paper-checked-element-behavior-0.js":
/*!**********************************************************************************!*\
  !*** ./src/bower_components/paper-behaviors/paper-checked-element-behavior-0.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



  /**
   * Use `Polymer.PaperCheckedElementBehavior` to implement a custom element
   * that has a `checked` property similar to `Polymer.IronCheckedElementBehavior`
   * and is compatible with having a ripple effect.
   * @polymerBehavior Polymer.PaperCheckedElementBehavior
   */
  Polymer.PaperCheckedElementBehaviorImpl = {

    /**
     * Synchronizes the element's checked state with its ripple effect.
     */
    _checkedChanged: function() {
      Polymer.IronCheckedElementBehaviorImpl._checkedChanged.call(this);
      if (this.hasRipple()) {
        if (this.checked) {
          this._ripple.setAttribute('checked', '');
        } else {
          this._ripple.removeAttribute('checked');
        }
      }
    },

    /**
     * Synchronizes the element's `active` and `checked` state.
     */
    _buttonStateChanged: function() {
      Polymer.PaperRippleBehavior._buttonStateChanged.call(this);
      if (this.disabled) {
        return;
      }
      if (this.isAttached) {
        this.checked = this.active;
      }
    }

  };

  /** @polymerBehavior Polymer.PaperCheckedElementBehavior */
  Polymer.PaperCheckedElementBehavior = [
    Polymer.PaperInkyFocusBehavior,
    Polymer.IronCheckedElementBehavior,
    Polymer.PaperCheckedElementBehaviorImpl
  ];



/***/ }),

/***/ "./src/bower_components/paper-behaviors/paper-checked-element-behavior.deps.js":
/*!*************************************************************************************!*\
  !*** ./src/bower_components/paper-behaviors/paper-checked-element-behavior.deps.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/iron-checked-element-behavior/iron-checked-element-behavior.deps.js */ "./src/bower_components/iron-checked-element-behavior/iron-checked-element-behavior.deps.js")
__webpack_require__(/*! bower_components/paper-behaviors/paper-inky-focus-behavior.deps.js */ "./src/bower_components/paper-behaviors/paper-inky-focus-behavior.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/paper-behaviors/paper-checked-element-behavior.html */ "./src/bower_components/paper-behaviors/paper-checked-element-behavior.html"), 'bower_components/paper-behaviors/paper-checked-element-behavior.html')
__webpack_require__(/*! bower_components/paper-behaviors/paper-checked-element-behavior-0 */ "./src/bower_components/paper-behaviors/paper-checked-element-behavior-0.js")


/***/ }),

/***/ "./src/bower_components/paper-behaviors/paper-checked-element-behavior.html":
/*!**********************************************************************************!*\
  !*** ./src/bower_components/paper-behaviors/paper-checked-element-behavior.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> <link rel=import href=../iron-checked-element-behavior/iron-checked-element-behavior.html> <link rel=import href=paper-inky-focus-behavior.html> <script src=paper-checked-element-behavior-0.js></script> </head><body></body></html>";

/***/ }),

/***/ "./src/bower_components/paper-behaviors/paper-inky-focus-behavior-0.js":
/*!*****************************************************************************!*\
  !*** ./src/bower_components/paper-behaviors/paper-inky-focus-behavior-0.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



  /**
   * `Polymer.PaperInkyFocusBehavior` implements a ripple when the element has keyboard focus.
   *
   * @polymerBehavior Polymer.PaperInkyFocusBehavior
   */
  Polymer.PaperInkyFocusBehaviorImpl = {

    observers: [
      '_focusedChanged(receivedFocusFromKeyboard)'
    ],

    _focusedChanged: function(receivedFocusFromKeyboard) {
      if (receivedFocusFromKeyboard) {
        this.ensureRipple();
      }
      if (this.hasRipple()) {
        this._ripple.holdDown = receivedFocusFromKeyboard;
      }
    },

    _createRipple: function() {
      var ripple = Polymer.PaperRippleBehavior._createRipple();
      ripple.id = 'ink';
      ripple.setAttribute('center', '');
      ripple.classList.add('circle');
      return ripple;
    }

  };

  /** @polymerBehavior Polymer.PaperInkyFocusBehavior */
  Polymer.PaperInkyFocusBehavior = [
    Polymer.IronButtonState,
    Polymer.IronControlState,
    Polymer.PaperRippleBehavior,
    Polymer.PaperInkyFocusBehaviorImpl
  ];



/***/ }),

/***/ "./src/bower_components/paper-behaviors/paper-inky-focus-behavior.deps.js":
/*!********************************************************************************!*\
  !*** ./src/bower_components/paper-behaviors/paper-inky-focus-behavior.deps.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/iron-behaviors/iron-button-state.deps.js */ "./src/bower_components/iron-behaviors/iron-button-state.deps.js")
__webpack_require__(/*! bower_components/paper-behaviors/habitlab-paper-ripple-behavior.deps.js */ "./src/bower_components/paper-behaviors/habitlab-paper-ripple-behavior.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/paper-behaviors/paper-inky-focus-behavior.html */ "./src/bower_components/paper-behaviors/paper-inky-focus-behavior.html"), 'bower_components/paper-behaviors/paper-inky-focus-behavior.html')
__webpack_require__(/*! bower_components/paper-behaviors/paper-inky-focus-behavior-0 */ "./src/bower_components/paper-behaviors/paper-inky-focus-behavior-0.js")


/***/ }),

/***/ "./src/bower_components/paper-behaviors/paper-inky-focus-behavior.html":
/*!*****************************************************************************!*\
  !*** ./src/bower_components/paper-behaviors/paper-inky-focus-behavior.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> <link rel=import href=../iron-behaviors/iron-button-state.html> <link rel=import href=habitlab-paper-ripple-behavior.html> <script src=paper-inky-focus-behavior-0.js></script> </head><body></body></html>";

/***/ }),

/***/ "./src/bower_components/paper-behaviors/habitlab-paper-ripple-behavior-0.js":
/*!*************************************************************************!*\
  !*** ./src/bower_components/paper-behaviors/habitlab-paper-ripple-behavior-0.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



  /**
   * `Polymer.PaperRippleBehavior` dynamically implements a ripple
   * when the element has focus via pointer or keyboard.
   *
   * NOTE: This behavior is intended to be used in conjunction with and after
   * `Polymer.IronButtonState` and `Polymer.IronControlState`.
   *
   * @polymerBehavior Polymer.PaperRippleBehavior
   */
  Polymer.PaperRippleBehavior = {

    properties: {
      /**
       * If true, the element will not produce a ripple effect when interacted
       * with via the pointer.
       */
      noink: {
        type: Boolean,
        observer: '_noinkChanged'
      },

      /**
       * @type {Element|undefined}
       */
      _rippleContainer: {
        type: Object,
      }
    },

    /**
     * Ensures a `<habitlab-paper-ripple>` element is available when the element is
     * focused.
     */
    _buttonStateChanged: function() {
      if (this.focused) {
        this.ensureRipple();
      }
    },

    /**
     * In addition to the functionality provided in `IronButtonState`, ensures
     * a ripple effect is created when the element is in a `pressed` state.
     */
    _downHandler: function(event) {
      Polymer.IronButtonStateImpl._downHandler.call(this, event);
      if (this.pressed) {
        this.ensureRipple(event);
      }
    },

    /**
     * Ensures this element contains a ripple effect. For startup efficiency
     * the ripple effect is dynamically on demand when needed.
     * @param {!Event=} optTriggeringEvent (optional) event that triggered the
     * ripple.
     */
    ensureRipple: function(optTriggeringEvent) {
      if (!this.hasRipple()) {
        this._ripple = this._createRipple();
        this._ripple.noink = this.noink;
        var rippleContainer = this._rippleContainer || this.root;
        if (rippleContainer) {
          Polymer.dom(rippleContainer).appendChild(this._ripple);
        }
        if (optTriggeringEvent) {
          // Check if the event happened inside of the ripple container
          // Fall back to host instead of the root because distributed text
          // nodes are not valid event targets
          var domContainer = Polymer.dom(this._rippleContainer || this);
          var target = Polymer.dom(optTriggeringEvent).rootTarget;
          if (domContainer.deepContains( /** @type {Node} */(target))) {
            this._ripple.uiDownAction(optTriggeringEvent);
          }
        }
      }
    },

    /**
     * Returns the `<habitlab-paper-ripple>` element used by this element to create
     * ripple effects. The element's ripple is created on demand, when
     * necessary, and calling this method will force the
     * ripple to be created.
     */
    getRipple: function() {
      this.ensureRipple();
      return this._ripple;
    },

    /**
     * Returns true if this element currently contains a ripple effect.
     * @return {boolean}
     */
    hasRipple: function() {
      return Boolean(this._ripple);
    },

    /**
     * Create the element's ripple effect via creating a `<habitlab-paper-ripple>`.
     * Override this method to customize the ripple element.
     * @return {!PaperRippleElement} Returns a `<habitlab-paper-ripple>` element.
     */
    _createRipple: function() {
      return /** @type {!PaperRippleElement} */ (
          document.createElement('habitlab-paper-ripple'));
    },

    _noinkChanged: function(noink) {
      if (this.hasRipple()) {
        this._ripple.noink = noink;
      }
    }

  };



/***/ }),

/***/ "./src/bower_components/paper-behaviors/habitlab-paper-ripple-behavior.deps.js":
/*!****************************************************************************!*\
  !*** ./src/bower_components/paper-behaviors/habitlab-paper-ripple-behavior.deps.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/habitlab-paper-ripple/habitlab-paper-ripple.deps.js */ "./src/bower_components/habitlab-paper-ripple/habitlab-paper-ripple.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/paper-behaviors/habitlab-paper-ripple-behavior.html */ "./src/bower_components/paper-behaviors/habitlab-paper-ripple-behavior.html"), 'bower_components/paper-behaviors/habitlab-paper-ripple-behavior.html')
__webpack_require__(/*! bower_components/paper-behaviors/habitlab-paper-ripple-behavior-0 */ "./src/bower_components/paper-behaviors/habitlab-paper-ripple-behavior-0.js")


/***/ }),

/***/ "./src/bower_components/paper-behaviors/habitlab-paper-ripple-behavior.html":
/*!*************************************************************************!*\
  !*** ./src/bower_components/paper-behaviors/habitlab-paper-ripple-behavior.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> <link rel=import href=../habitlab-paper-ripple/habitlab-paper-ripple.html> <script src=habitlab-paper-ripple-behavior-0.js></script> </head><body></body></html>";

/***/ }),

/***/ "./src/bower_components/habitlab-paper-button/habitlab-paper-button-0.js":
/*!*************************************************************!*\
  !*** ./src/bower_components/habitlab-paper-button/habitlab-paper-button-0.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


    Polymer({
      is: 'habitlab-paper-button',

      behaviors: [
        Polymer.PaperButtonBehavior
      ],

      properties: {
        /**
         * If true, the button should be styled with a shadow.
         */
        raised: {
          type: Boolean,
          reflectToAttribute: true,
          value: false,
          observer: '_calculateElevation'
        }
      },

      _calculateElevation: function() {
        if (!this.raised) {
          this._setElevation(0);
        } else {
          Polymer.PaperButtonBehaviorImpl._calculateElevation.apply(this);
        }
      }

      /**
      Fired when the animation finishes.
      This is useful if you want to wait until
      the ripple animation finishes to perform some action.

      @event transitionend
      Event param: {{node: Object}} detail Contains the animated node.
      */
    });
  

/***/ }),

/***/ "./src/bower_components/habitlab-paper-button/habitlab-paper-button.deps.js":
/*!****************************************************************!*\
  !*** ./src/bower_components/habitlab-paper-button/habitlab-paper-button.deps.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/iron-flex-layout/iron-flex-layout.deps.js */ "./src/bower_components/iron-flex-layout/iron-flex-layout.deps.js")
__webpack_require__(/*! bower_components/paper-behaviors/habitlab-paper-button-behavior.deps.js */ "./src/bower_components/paper-behaviors/habitlab-paper-button-behavior.deps.js")
__webpack_require__(/*! bower_components/habitlab-paper-material/habitlab-paper-material.deps.js */ "./src/bower_components/habitlab-paper-material/habitlab-paper-material.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/habitlab-paper-button/habitlab-paper-button.html */ "./src/bower_components/habitlab-paper-button/habitlab-paper-button.html"), 'bower_components/habitlab-paper-button/habitlab-paper-button.html')
__webpack_require__(/*! bower_components/habitlab-paper-button/habitlab-paper-button-0 */ "./src/bower_components/habitlab-paper-button/habitlab-paper-button-0.js")


/***/ }),

/***/ "./src/bower_components/habitlab-paper-button/habitlab-paper-button.html":
/*!*************************************************************!*\
  !*** ./src/bower_components/habitlab-paper-button/habitlab-paper-button.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> <link rel=import href=../iron-flex-layout/iron-flex-layout.html> <link rel=import href=../paper-behaviors/habitlab-paper-button-behavior.html> <link rel=import href=../habitlab-paper-material/habitlab-paper-material.html> </head><body><habitlab-dom-module id=habitlab-paper-button> <template strip-whitespace=\"\"> <style include=habitlab-paper-material>:host{@apply(--layout-inline);@apply(--layout-center-center);position:relative;box-sizing:border-box;min-width:5.14em;margin:0 .29em;background:0 0;-webkit-tap-highlight-color:transparent;-webkit-tap-highlight-color:transparent;font-size:1em;font-family:Verdana,Geneva,HelveticaNeue-Light,\"Helvetica Neue Light\",\"Helvetica Neue\",Helvetica,Arial,\"Lucida Grande\",sans-serif;font-weight:400;text-transform:uppercase;outline-width:0;border-radius:3px;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none;cursor:pointer;z-index:0;padding:.7em .57em;@apply(--paper-font-common-base);@apply(--habitlab-paper-button)}:host([raised].keyboard-focus){font-weight:700;@apply(--habitlab-paper-button-raised-keyboard-focus)}:host(:not([raised]).keyboard-focus){font-weight:700;@apply(--habitlab-paper-button-flat-keyboard-focus)}:host([disabled]){background:#eaeaea;color:#a8a8a8;cursor:auto;pointer-events:none;@apply(--habitlab-paper-button-disabled)}habitlab-paper-ripple{color:var(--habitlab-paper-button-ink-color)}</style> <content></content> </template> <script src=habitlab-paper-button-0.js></script> </habitlab-dom-module> </body></html> ";

/***/ }),

/***/ "./src/bower_components/habitlab-paper-material/habitlab-paper-material-0.js":
/*!*****************************************************************!*\
  !*** ./src/bower_components/habitlab-paper-material/habitlab-paper-material-0.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


  Polymer({
    is: 'habitlab-paper-material',

    properties: {
      /**
       * The z-depth of this element, from 0-5. Setting to 0 will remove the
       * shadow, and each increasing number greater than 0 will be "deeper"
       * than the last.
       *
       * @attribute elevation
       * @type number
       * @default 1
       */
      elevation: {
        type: Number,
        reflectToAttribute: true,
        value: 1
      },

      /**
       * Set this to true to animate the shadow when setting a new
       * `elevation` value.
       *
       * @attribute animated
       * @type boolean
       * @default false
       */
      animated: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      }
    }
  });


/***/ }),

/***/ "./src/bower_components/habitlab-paper-material/habitlab-paper-material-shared-styles.deps.js":
/*!**********************************************************************************!*\
  !*** ./src/bower_components/habitlab-paper-material/habitlab-paper-material-shared-styles.deps.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/paper-styles/shadow.deps.js */ "./src/bower_components/paper-styles/shadow.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/habitlab-paper-material/habitlab-paper-material-shared-styles.html */ "./src/bower_components/habitlab-paper-material/habitlab-paper-material-shared-styles.html"), 'bower_components/habitlab-paper-material/habitlab-paper-material-shared-styles.html')


/***/ }),

/***/ "./src/bower_components/habitlab-paper-material/habitlab-paper-material-shared-styles.html":
/*!*******************************************************************************!*\
  !*** ./src/bower_components/habitlab-paper-material/habitlab-paper-material-shared-styles.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <link rel=import href=../paper-styles/shadow.html> <habitlab-dom-module id=habitlab-paper-material-shared-styles> <template> <style>:host{display:block;position:relative}:host([elevation=\"1\"]){@apply(--shadow-elevation-2dp)}:host([elevation=\"2\"]){@apply(--shadow-elevation-4dp)}:host([elevation=\"3\"]){@apply(--shadow-elevation-6dp)}:host([elevation=\"4\"]){@apply(--shadow-elevation-8dp)}:host([elevation=\"5\"]){@apply(--shadow-elevation-16dp)}</style> </template> </habitlab-dom-module> ";

/***/ }),

/***/ "./src/bower_components/habitlab-paper-material/habitlab-paper-material.deps.js":
/*!********************************************************************!*\
  !*** ./src/bower_components/habitlab-paper-material/habitlab-paper-material.deps.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/paper-styles/shadow.deps.js */ "./src/bower_components/paper-styles/shadow.deps.js")
__webpack_require__(/*! bower_components/habitlab-paper-material/habitlab-paper-material-shared-styles.deps.js */ "./src/bower_components/habitlab-paper-material/habitlab-paper-material-shared-styles.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/habitlab-paper-material/habitlab-paper-material.html */ "./src/bower_components/habitlab-paper-material/habitlab-paper-material.html"), 'bower_components/habitlab-paper-material/habitlab-paper-material.html')
__webpack_require__(/*! bower_components/habitlab-paper-material/habitlab-paper-material-0 */ "./src/bower_components/habitlab-paper-material/habitlab-paper-material-0.js")


/***/ }),

/***/ "./src/bower_components/habitlab-paper-material/habitlab-paper-material.html":
/*!*****************************************************************!*\
  !*** ./src/bower_components/habitlab-paper-material/habitlab-paper-material.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> <link rel=import href=../paper-styles/shadow.html> <link rel=import href=habitlab-paper-material-shared-styles.html> </head><body><habitlab-dom-module id=habitlab-paper-material> <template> <style include=habitlab-paper-material-shared-styles></style> <style>:host([animated]){@apply(--shadow-transition)}</style> <content></content> </template> </habitlab-dom-module> <script src=habitlab-paper-material-0.js></script> </body></html>";

/***/ }),

/***/ "./src/bower_components/habitlab-paper-ripple/habitlab-paper-ripple-0.js":
/*!*************************************************************!*\
  !*** ./src/bower_components/habitlab-paper-ripple/habitlab-paper-ripple-0.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


  (function() {
    var Utility = {
      distance: function(x1, y1, x2, y2) {
        var xDelta = (x1 - x2);
        var yDelta = (y1 - y2);

        return Math.sqrt(xDelta * xDelta + yDelta * yDelta);
      },

      now: window.performance && window.performance.now ?
          window.performance.now.bind(window.performance) : Date.now
    };

    /**
     * @param {HTMLElement} element
     * @constructor
     */
    function ElementMetrics(element) {
      this.element = element;
      this.width = this.boundingRect.width;
      this.height = this.boundingRect.height;

      this.size = Math.max(this.width, this.height);
    }

    ElementMetrics.prototype = {
      get boundingRect () {
        return this.element.getBoundingClientRect();
      },

      furthestCornerDistanceFrom: function(x, y) {
        var topLeft = Utility.distance(x, y, 0, 0);
        var topRight = Utility.distance(x, y, this.width, 0);
        var bottomLeft = Utility.distance(x, y, 0, this.height);
        var bottomRight = Utility.distance(x, y, this.width, this.height);

        return Math.max(topLeft, topRight, bottomLeft, bottomRight);
      }
    };

    /**
     * @param {HTMLElement} element
     * @constructor
     */
    function Ripple(element) {
      this.element = element;
      this.color = window.getComputedStyle(element).color;

      this.wave = document.createElement('div');
      this.waveContainer = document.createElement('div');
      this.wave.style.backgroundColor = this.color;
      this.wave.classList.add('wave');
      this.waveContainer.classList.add('wave-container');
      Polymer.dom(this.waveContainer).appendChild(this.wave);

      this.resetInteractionState();
    }

    Ripple.MAX_RADIUS = 300;

    Ripple.prototype = {
      get recenters() {
        return this.element.recenters;
      },

      get center() {
        return this.element.center;
      },

      get mouseDownElapsed() {
        var elapsed;

        if (!this.mouseDownStart) {
          return 0;
        }

        elapsed = Utility.now() - this.mouseDownStart;

        if (this.mouseUpStart) {
          elapsed -= this.mouseUpElapsed;
        }

        return elapsed;
      },

      get mouseUpElapsed() {
        return this.mouseUpStart ?
          Utility.now () - this.mouseUpStart : 0;
      },

      get mouseDownElapsedSeconds() {
        return this.mouseDownElapsed / 1000;
      },

      get mouseUpElapsedSeconds() {
        return this.mouseUpElapsed / 1000;
      },

      get mouseInteractionSeconds() {
        return this.mouseDownElapsedSeconds + this.mouseUpElapsedSeconds;
      },

      get initialOpacity() {
        return this.element.initialOpacity;
      },

      get opacityDecayVelocity() {
        return this.element.opacityDecayVelocity;
      },

      get radius() {
        var width2 = this.containerMetrics.width * this.containerMetrics.width;
        var height2 = this.containerMetrics.height * this.containerMetrics.height;
        var waveRadius = Math.min(
          Math.sqrt(width2 + height2),
          Ripple.MAX_RADIUS
        ) * 1.1 + 5;

        var duration = 1.1 - 0.2 * (waveRadius / Ripple.MAX_RADIUS);
        var timeNow = this.mouseInteractionSeconds / duration;
        var size = waveRadius * (1 - Math.pow(80, -timeNow));

        return Math.abs(size);
      },

      get opacity() {
        if (!this.mouseUpStart) {
          return this.initialOpacity;
        }

        return Math.max(
          0,
          this.initialOpacity - this.mouseUpElapsedSeconds * this.opacityDecayVelocity
        );
      },

      get outerOpacity() {
        // Linear increase in background opacity, capped at the opacity
        // of the wavefront (waveOpacity).
        var outerOpacity = this.mouseUpElapsedSeconds * 0.3;
        var waveOpacity = this.opacity;

        return Math.max(
          0,
          Math.min(outerOpacity, waveOpacity)
        );
      },

      get isOpacityFullyDecayed() {
        return this.opacity < 0.01 &&
          this.radius >= Math.min(this.maxRadius, Ripple.MAX_RADIUS);
      },

      get isRestingAtMaxRadius() {
        return this.opacity >= this.initialOpacity &&
          this.radius >= Math.min(this.maxRadius, Ripple.MAX_RADIUS);
      },

      get isAnimationComplete() {
        return this.mouseUpStart ?
          this.isOpacityFullyDecayed : this.isRestingAtMaxRadius;
      },

      get translationFraction() {
        return Math.min(
          1,
          this.radius / this.containerMetrics.size * 2 / Math.sqrt(2)
        );
      },

      get xNow() {
        if (this.xEnd) {
          return this.xStart + this.translationFraction * (this.xEnd - this.xStart);
        }

        return this.xStart;
      },

      get yNow() {
        if (this.yEnd) {
          return this.yStart + this.translationFraction * (this.yEnd - this.yStart);
        }

        return this.yStart;
      },

      get isMouseDown() {
        return this.mouseDownStart && !this.mouseUpStart;
      },

      resetInteractionState: function() {
        this.maxRadius = 0;
        this.mouseDownStart = 0;
        this.mouseUpStart = 0;

        this.xStart = 0;
        this.yStart = 0;
        this.xEnd = 0;
        this.yEnd = 0;
        this.slideDistance = 0;

        this.containerMetrics = new ElementMetrics(this.element);
      },

      draw: function() {
        var scale;
        var translateString;
        var dx;
        var dy;

        this.wave.style.opacity = this.opacity;

        scale = this.radius / (this.containerMetrics.size / 2);
        dx = this.xNow - (this.containerMetrics.width / 2);
        dy = this.yNow - (this.containerMetrics.height / 2);


        // 2d transform for safari because of border-radius and overflow:hidden clipping bug.
        // https://bugs.webkit.org/show_bug.cgi?id=98538
        this.waveContainer.style.webkitTransform = 'translate(' + dx + 'px, ' + dy + 'px)';
        this.waveContainer.style.transform = 'translate3d(' + dx + 'px, ' + dy + 'px, 0)';
        this.wave.style.webkitTransform = 'scale(' + scale + ',' + scale + ')';
        this.wave.style.transform = 'scale3d(' + scale + ',' + scale + ',1)';
      },

      /** @param {Event=} event */
      downAction: function(event) {
        var xCenter = this.containerMetrics.width / 2;
        var yCenter = this.containerMetrics.height / 2;

        this.resetInteractionState();
        this.mouseDownStart = Utility.now();

        if (this.center) {
          this.xStart = xCenter;
          this.yStart = yCenter;
          this.slideDistance = Utility.distance(
            this.xStart, this.yStart, this.xEnd, this.yEnd
          );
        } else {
          this.xStart = event ?
              event.detail.x - this.containerMetrics.boundingRect.left :
              this.containerMetrics.width / 2;
          this.yStart = event ?
              event.detail.y - this.containerMetrics.boundingRect.top :
              this.containerMetrics.height / 2;
        }

        if (this.recenters) {
          this.xEnd = xCenter;
          this.yEnd = yCenter;
          this.slideDistance = Utility.distance(
            this.xStart, this.yStart, this.xEnd, this.yEnd
          );
        }

        this.maxRadius = this.containerMetrics.furthestCornerDistanceFrom(
          this.xStart,
          this.yStart
        );

        this.waveContainer.style.top =
          (this.containerMetrics.height - this.containerMetrics.size) / 2 + 'px';
        this.waveContainer.style.left =
          (this.containerMetrics.width - this.containerMetrics.size) / 2 + 'px';

        this.waveContainer.style.width = this.containerMetrics.size + 'px';
        this.waveContainer.style.height = this.containerMetrics.size + 'px';
      },

      /** @param {Event=} event */
      upAction: function(event) {
        if (!this.isMouseDown) {
          return;
        }

        this.mouseUpStart = Utility.now();
      },

      remove: function() {
        Polymer.dom(this.waveContainer.parentNode).removeChild(
          this.waveContainer
        );
      }
    };

    Polymer({
      is: 'habitlab-paper-ripple',

      behaviors: [
        Polymer.IronA11yKeysBehavior
      ],

      properties: {
        /**
         * The initial opacity set on the wave.
         *
         * @attribute initialOpacity
         * @type number
         * @default 0.25
         */
        initialOpacity: {
          type: Number,
          value: 0.25
        },

        /**
         * How fast (opacity per second) the wave fades out.
         *
         * @attribute opacityDecayVelocity
         * @type number
         * @default 0.8
         */
        opacityDecayVelocity: {
          type: Number,
          value: 0.8
        },

        /**
         * If true, ripples will exhibit a gravitational pull towards
         * the center of their container as they fade away.
         *
         * @attribute recenters
         * @type boolean
         * @default false
         */
        recenters: {
          type: Boolean,
          value: false
        },

        /**
         * If true, ripples will center inside its container
         *
         * @attribute recenters
         * @type boolean
         * @default false
         */
        center: {
          type: Boolean,
          value: false
        },

        /**
         * A list of the visual ripples.
         *
         * @attribute ripples
         * @type Array
         * @default []
         */
        ripples: {
          type: Array,
          value: function() {
            return [];
          }
        },

        /**
         * True when there are visible ripples animating within the
         * element.
         */
        animating: {
          type: Boolean,
          readOnly: true,
          reflectToAttribute: true,
          value: false
        },

        /**
         * If true, the ripple will remain in the "down" state until `holdDown`
         * is set to false again.
         */
        holdDown: {
          type: Boolean,
          value: false,
          observer: '_holdDownChanged'
        },

        /**
         * If true, the ripple will not generate a ripple effect
         * via pointer interaction.
         * Calling ripple's imperative api like `simulatedRipple` will
         * still generate the ripple effect.
         */
        noink: {
          type: Boolean,
          value: false
        },

        _animating: {
          type: Boolean
        },

        _boundAnimate: {
          type: Function,
          value: function() {
            return this.animate.bind(this);
          }
        }
      },

      get target () {
        var ownerRoot = Polymer.dom(this).getOwnerRoot();
        var target;

        if (this.parentNode.nodeType == 11) { // DOCUMENT_FRAGMENT_NODE
          target = ownerRoot.host;
        } else {
          target = this.parentNode;
        }

        return target;
      },

      keyBindings: {
        'enter:keydown': '_onEnterKeydown',
        'space:keydown': '_onSpaceKeydown',
        'space:keyup': '_onSpaceKeyup'
      },

      attached: function() {
        // Set up a11yKeysBehavior to listen to key events on the target,
        // so that space and enter activate the ripple even if the target doesn't
        // handle key events. The key handlers deal with `noink` themselves.
        this.keyEventTarget = this.target;
        this.listen(this.target, 'up', 'uiUpAction');
        this.listen(this.target, 'down', 'uiDownAction');
      },

      detached: function() {
        this.unlisten(this.target, 'up', 'uiUpAction');
        this.unlisten(this.target, 'down', 'uiDownAction');
      },

      get shouldKeepAnimating () {
        for (var index = 0; index < this.ripples.length; ++index) {
          if (!this.ripples[index].isAnimationComplete) {
            return true;
          }
        }

        return false;
      },

      simulatedRipple: function() {
        this.downAction(null);

        // Please see polymer/polymer#1305
        this.async(function() {
          this.upAction();
        }, 1);
      },

      /**
       * Provokes a ripple down effect via a UI event,
       * respecting the `noink` property.
       * @param {Event=} event
       */
      uiDownAction: function(event) {
        if (!this.noink) {
          this.downAction(event);
        }
      },

      /**
       * Provokes a ripple down effect via a UI event,
       * *not* respecting the `noink` property.
       * @param {Event=} event
       */
      downAction: function(event) {
        if (this.holdDown && this.ripples.length > 0) {
          return;
        }

        var ripple = this.addRipple();

        ripple.downAction(event);

        if (!this._animating) {
          this.animate();
        }
      },

      /**
       * Provokes a ripple up effect via a UI event,
       * respecting the `noink` property.
       * @param {Event=} event
       */
      uiUpAction: function(event) {
        if (!this.noink) {
          this.upAction(event);
        }
      },

      /**
       * Provokes a ripple up effect via a UI event,
       * *not* respecting the `noink` property.
       * @param {Event=} event
       */
      upAction: function(event) {
        if (this.holdDown) {
          return;
        }

        this.ripples.forEach(function(ripple) {
          ripple.upAction(event);
        });

        this.animate();
      },

      onAnimationComplete: function() {
        this._animating = false;
        this.$.background.style.backgroundColor = null;
        this.fire('transitionend');
      },

      addRipple: function() {
        var ripple = new Ripple(this);

        Polymer.dom(this.$.waves).appendChild(ripple.waveContainer);
        this.$.background.style.backgroundColor = ripple.color;
        this.ripples.push(ripple);

        this._setAnimating(true);

        return ripple;
      },

      removeRipple: function(ripple) {
        var rippleIndex = this.ripples.indexOf(ripple);

        if (rippleIndex < 0) {
          return;
        }

        this.ripples.splice(rippleIndex, 1);

        ripple.remove();

        if (!this.ripples.length) {
          this._setAnimating(false);
        }
      },

      animate: function() {
        var index;
        var ripple;

        this._animating = true;

        for (index = 0; index < this.ripples.length; ++index) {
          ripple = this.ripples[index];

          ripple.draw();

          this.$.background.style.opacity = ripple.outerOpacity;

          if (ripple.isOpacityFullyDecayed && !ripple.isRestingAtMaxRadius) {
            this.removeRipple(ripple);
          }
        }

        if (!this.shouldKeepAnimating && this.ripples.length === 0) {
          this.onAnimationComplete();
        } else {
          window.requestAnimationFrame(this._boundAnimate);
        }
      },

      _onEnterKeydown: function() {
        this.uiDownAction();
        this.async(this.uiUpAction, 1);
      },

      _onSpaceKeydown: function() {
        this.uiDownAction();
      },

      _onSpaceKeyup: function() {
        this.uiUpAction();
      },

      // note: holdDown does not respect noink since it can be a focus based
      // effect.
      _holdDownChanged: function(newVal, oldVal) {
        if (oldVal === undefined) {
          return;
        }
        if (newVal) {
          this.downAction();
        } else {
          this.upAction();
        }
      }
    });
  })();


/***/ }),

/***/ "./src/bower_components/habitlab-paper-ripple/habitlab-paper-ripple.deps.js":
/*!****************************************************************!*\
  !*** ./src/bower_components/habitlab-paper-ripple/habitlab-paper-ripple.deps.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.deps.js */ "./src/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/habitlab-paper-ripple/habitlab-paper-ripple.html */ "./src/bower_components/habitlab-paper-ripple/habitlab-paper-ripple.html"), 'bower_components/habitlab-paper-ripple/habitlab-paper-ripple.html')
__webpack_require__(/*! bower_components/habitlab-paper-ripple/habitlab-paper-ripple-0 */ "./src/bower_components/habitlab-paper-ripple/habitlab-paper-ripple-0.js")


/***/ }),

/***/ "./src/bower_components/habitlab-paper-ripple/habitlab-paper-ripple.html":
/*!*************************************************************!*\
  !*** ./src/bower_components/habitlab-paper-ripple/habitlab-paper-ripple.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> <link rel=import href=../iron-a11y-keys-behavior/iron-a11y-keys-behavior.html> </head><body><habitlab-dom-module id=habitlab-paper-ripple> <template> <style>:host{display:block;position:absolute;border-radius:inherit;overflow:hidden;top:0;left:0;right:0;bottom:0;pointer-events:none}:host([animating]){-webkit-transform:translate(0,0);transform:translate3d(0,0,0)}#background,#waves,.wave,.wave-container{pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%}#background,.wave{opacity:0}#waves,.wave{overflow:hidden}.wave,.wave-container{border-radius:50%}:host(.circle) #background,:host(.circle) #waves{border-radius:50%}:host(.circle) .wave-container{overflow:hidden}</style> <div id=background></div> <div id=waves></div> </template> </habitlab-dom-module> <script src=habitlab-paper-ripple-0.js></script> </body></html>";

/***/ }),

/***/ "./src/bower_components/paper-styles/color.deps.js":
/*!*********************************************************!*\
  !*** ./src/bower_components/paper-styles/color.deps.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/paper-styles/color.html */ "./src/bower_components/paper-styles/color.html"), 'bower_components/paper-styles/color.html')


/***/ }),

/***/ "./src/bower_components/paper-styles/color.html":
/*!******************************************************!*\
  !*** ./src/bower_components/paper-styles/color.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <link rel=import href=../polymer/polymer.html> <style is=habitlab-custom-style>:root{--google-red-100:#f4c7c3;--google-red-300:#e67c73;--google-red-500:#db4437;--google-red-700:#c53929;--google-blue-100:#c6dafc;--google-blue-300:#7baaf7;--google-blue-500:#4285f4;--google-blue-700:#3367d6;--google-green-100:#b7e1cd;--google-green-300:#57bb8a;--google-green-500:#0f9d58;--google-green-700:#0b8043;--google-yellow-100:#fce8b2;--google-yellow-300:#f7cb4d;--google-yellow-500:#f4b400;--google-yellow-700:#f09300;--google-grey-100:#f5f5f5;--google-grey-300:#e0e0e0;--google-grey-500:#9e9e9e;--google-grey-700:#616161;--paper-red-50:#ffebee;--paper-red-100:#ffcdd2;--paper-red-200:#ef9a9a;--paper-red-300:#e57373;--paper-red-400:#ef5350;--paper-red-500:#f44336;--paper-red-600:#e53935;--paper-red-700:#d32f2f;--paper-red-800:#c62828;--paper-red-900:#b71c1c;--paper-red-a100:#ff8a80;--paper-red-a200:#ff5252;--paper-red-a400:#ff1744;--paper-red-a700:#d50000;--paper-pink-50:#fce4ec;--paper-pink-100:#f8bbd0;--paper-pink-200:#f48fb1;--paper-pink-300:#f06292;--paper-pink-400:#ec407a;--paper-pink-500:#e91e63;--paper-pink-600:#d81b60;--paper-pink-700:#c2185b;--paper-pink-800:#ad1457;--paper-pink-900:#880e4f;--paper-pink-a100:#ff80ab;--paper-pink-a200:#ff4081;--paper-pink-a400:#f50057;--paper-pink-a700:#c51162;--paper-purple-50:#f3e5f5;--paper-purple-100:#e1bee7;--paper-purple-200:#ce93d8;--paper-purple-300:#ba68c8;--paper-purple-400:#ab47bc;--paper-purple-500:#9c27b0;--paper-purple-600:#8e24aa;--paper-purple-700:#7b1fa2;--paper-purple-800:#6a1b9a;--paper-purple-900:#4a148c;--paper-purple-a100:#ea80fc;--paper-purple-a200:#e040fb;--paper-purple-a400:#d500f9;--paper-purple-a700:#aa00ff;--paper-deep-purple-50:#ede7f6;--paper-deep-purple-100:#d1c4e9;--paper-deep-purple-200:#b39ddb;--paper-deep-purple-300:#9575cd;--paper-deep-purple-400:#7e57c2;--paper-deep-purple-500:#673ab7;--paper-deep-purple-600:#5e35b1;--paper-deep-purple-700:#512da8;--paper-deep-purple-800:#4527a0;--paper-deep-purple-900:#311b92;--paper-deep-purple-a100:#b388ff;--paper-deep-purple-a200:#7c4dff;--paper-deep-purple-a400:#651fff;--paper-deep-purple-a700:#6200ea;--paper-indigo-50:#e8eaf6;--paper-indigo-100:#c5cae9;--paper-indigo-200:#9fa8da;--paper-indigo-300:#7986cb;--paper-indigo-400:#5c6bc0;--paper-indigo-500:#3f51b5;--paper-indigo-600:#3949ab;--paper-indigo-700:#303f9f;--paper-indigo-800:#283593;--paper-indigo-900:#1a237e;--paper-indigo-a100:#8c9eff;--paper-indigo-a200:#536dfe;--paper-indigo-a400:#3d5afe;--paper-indigo-a700:#304ffe;--paper-blue-50:#e3f2fd;--paper-blue-100:#bbdefb;--paper-blue-200:#90caf9;--paper-blue-300:#64b5f6;--paper-blue-400:#42a5f5;--paper-blue-500:#2196f3;--paper-blue-600:#1e88e5;--paper-blue-700:#1976d2;--paper-blue-800:#1565c0;--paper-blue-900:#0d47a1;--paper-blue-a100:#82b1ff;--paper-blue-a200:#448aff;--paper-blue-a400:#2979ff;--paper-blue-a700:#2962ff;--paper-light-blue-50:#e1f5fe;--paper-light-blue-100:#b3e5fc;--paper-light-blue-200:#81d4fa;--paper-light-blue-300:#4fc3f7;--paper-light-blue-400:#29b6f6;--paper-light-blue-500:#03a9f4;--paper-light-blue-600:#039be5;--paper-light-blue-700:#0288d1;--paper-light-blue-800:#0277bd;--paper-light-blue-900:#01579b;--paper-light-blue-a100:#80d8ff;--paper-light-blue-a200:#40c4ff;--paper-light-blue-a400:#00b0ff;--paper-light-blue-a700:#0091ea;--paper-cyan-50:#e0f7fa;--paper-cyan-100:#b2ebf2;--paper-cyan-200:#80deea;--paper-cyan-300:#4dd0e1;--paper-cyan-400:#26c6da;--paper-cyan-500:#00bcd4;--paper-cyan-600:#00acc1;--paper-cyan-700:#0097a7;--paper-cyan-800:#00838f;--paper-cyan-900:#006064;--paper-cyan-a100:#84ffff;--paper-cyan-a200:#18ffff;--paper-cyan-a400:#00e5ff;--paper-cyan-a700:#00b8d4;--paper-teal-50:#e0f2f1;--paper-teal-100:#b2dfdb;--paper-teal-200:#80cbc4;--paper-teal-300:#4db6ac;--paper-teal-400:#26a69a;--paper-teal-500:#009688;--paper-teal-600:#00897b;--paper-teal-700:#00796b;--paper-teal-800:#00695c;--paper-teal-900:#004d40;--paper-teal-a100:#a7ffeb;--paper-teal-a200:#64ffda;--paper-teal-a400:#1de9b6;--paper-teal-a700:#00bfa5;--paper-green-50:#e8f5e9;--paper-green-100:#c8e6c9;--paper-green-200:#a5d6a7;--paper-green-300:#81c784;--paper-green-400:#66bb6a;--paper-green-500:#4caf50;--paper-green-600:#43a047;--paper-green-700:#388e3c;--paper-green-800:#2e7d32;--paper-green-900:#1b5e20;--paper-green-a100:#b9f6ca;--paper-green-a200:#69f0ae;--paper-green-a400:#00e676;--paper-green-a700:#00c853;--paper-light-green-50:#f1f8e9;--paper-light-green-100:#dcedc8;--paper-light-green-200:#c5e1a5;--paper-light-green-300:#aed581;--paper-light-green-400:#9ccc65;--paper-light-green-500:#8bc34a;--paper-light-green-600:#7cb342;--paper-light-green-700:#689f38;--paper-light-green-800:#558b2f;--paper-light-green-900:#33691e;--paper-light-green-a100:#ccff90;--paper-light-green-a200:#b2ff59;--paper-light-green-a400:#76ff03;--paper-light-green-a700:#64dd17;--paper-lime-50:#f9fbe7;--paper-lime-100:#f0f4c3;--paper-lime-200:#e6ee9c;--paper-lime-300:#dce775;--paper-lime-400:#d4e157;--paper-lime-500:#cddc39;--paper-lime-600:#c0ca33;--paper-lime-700:#afb42b;--paper-lime-800:#9e9d24;--paper-lime-900:#827717;--paper-lime-a100:#f4ff81;--paper-lime-a200:#eeff41;--paper-lime-a400:#c6ff00;--paper-lime-a700:#aeea00;--paper-yellow-50:#fffde7;--paper-yellow-100:#fff9c4;--paper-yellow-200:#fff59d;--paper-yellow-300:#fff176;--paper-yellow-400:#ffee58;--paper-yellow-500:#ffeb3b;--paper-yellow-600:#fdd835;--paper-yellow-700:#fbc02d;--paper-yellow-800:#f9a825;--paper-yellow-900:#f57f17;--paper-yellow-a100:#ffff8d;--paper-yellow-a200:#ffff00;--paper-yellow-a400:#ffea00;--paper-yellow-a700:#ffd600;--paper-amber-50:#fff8e1;--paper-amber-100:#ffecb3;--paper-amber-200:#ffe082;--paper-amber-300:#ffd54f;--paper-amber-400:#ffca28;--paper-amber-500:#ffc107;--paper-amber-600:#ffb300;--paper-amber-700:#ffa000;--paper-amber-800:#ff8f00;--paper-amber-900:#ff6f00;--paper-amber-a100:#ffe57f;--paper-amber-a200:#ffd740;--paper-amber-a400:#ffc400;--paper-amber-a700:#ffab00;--paper-orange-50:#fff3e0;--paper-orange-100:#ffe0b2;--paper-orange-200:#ffcc80;--paper-orange-300:#ffb74d;--paper-orange-400:#ffa726;--paper-orange-500:#ff9800;--paper-orange-600:#fb8c00;--paper-orange-700:#f57c00;--paper-orange-800:#ef6c00;--paper-orange-900:#e65100;--paper-orange-a100:#ffd180;--paper-orange-a200:#ffab40;--paper-orange-a400:#ff9100;--paper-orange-a700:#ff6500;--paper-deep-orange-50:#fbe9e7;--paper-deep-orange-100:#ffccbc;--paper-deep-orange-200:#ffab91;--paper-deep-orange-300:#ff8a65;--paper-deep-orange-400:#ff7043;--paper-deep-orange-500:#ff5722;--paper-deep-orange-600:#f4511e;--paper-deep-orange-700:#e64a19;--paper-deep-orange-800:#d84315;--paper-deep-orange-900:#bf360c;--paper-deep-orange-a100:#ff9e80;--paper-deep-orange-a200:#ff6e40;--paper-deep-orange-a400:#ff3d00;--paper-deep-orange-a700:#dd2c00;--paper-brown-50:#efebe9;--paper-brown-100:#d7ccc8;--paper-brown-200:#bcaaa4;--paper-brown-300:#a1887f;--paper-brown-400:#8d6e63;--paper-brown-500:#795548;--paper-brown-600:#6d4c41;--paper-brown-700:#5d4037;--paper-brown-800:#4e342e;--paper-brown-900:#3e2723;--paper-grey-50:#fafafa;--paper-grey-100:#f5f5f5;--paper-grey-200:#eeeeee;--paper-grey-300:#e0e0e0;--paper-grey-400:#bdbdbd;--paper-grey-500:#9e9e9e;--paper-grey-600:#757575;--paper-grey-700:#616161;--paper-grey-800:#424242;--paper-grey-900:#212121;--paper-blue-grey-50:#eceff1;--paper-blue-grey-100:#cfd8dc;--paper-blue-grey-200:#b0bec5;--paper-blue-grey-300:#90a4ae;--paper-blue-grey-400:#78909c;--paper-blue-grey-500:#607d8b;--paper-blue-grey-600:#546e7a;--paper-blue-grey-700:#455a64;--paper-blue-grey-800:#37474f;--paper-blue-grey-900:#263238;--dark-divider-opacity:0.12;--dark-disabled-opacity:0.38;--dark-secondary-opacity:0.54;--dark-primary-opacity:0.87;--light-divider-opacity:0.12;--light-disabled-opacity:0.3;--light-secondary-opacity:0.7;--light-primary-opacity:1.0}</style> ";

/***/ }),

/***/ "./src/bower_components/paper-styles/default-theme.deps.js":
/*!*****************************************************************!*\
  !*** ./src/bower_components/paper-styles/default-theme.deps.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/paper-styles/color.deps.js */ "./src/bower_components/paper-styles/color.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/paper-styles/default-theme.html */ "./src/bower_components/paper-styles/default-theme.html"), 'bower_components/paper-styles/default-theme.html')


/***/ }),

/***/ "./src/bower_components/paper-styles/default-theme.html":
/*!**************************************************************!*\
  !*** ./src/bower_components/paper-styles/default-theme.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <link rel=import href=../polymer/polymer.html> <link rel=import href=color.html> <style is=habitlab-custom-style>:root{--primary-text-color:var(--light-theme-text-color);--primary-background-color:var(--light-theme-background-color);--secondary-text-color:var(--light-theme-secondary-color);--disabled-text-color:var(--light-theme-disabled-color);--divider-color:var(--light-theme-divider-color);--error-color:var(--paper-deep-orange-a700);--primary-color:var(--paper-indigo-500);--light-primary-color:var(--paper-indigo-100);--dark-primary-color:var(--paper-indigo-700);--accent-color:var(--paper-pink-a200);--light-accent-color:var(--paper-pink-a100);--dark-accent-color:var(--paper-pink-a400);--light-theme-background-color:#ffffff;--light-theme-base-color:#000000;--light-theme-text-color:var(--paper-grey-900);--light-theme-secondary-color:#737373;--light-theme-disabled-color:#9b9b9b;--light-theme-divider-color:#dbdbdb;--dark-theme-background-color:var(--paper-grey-900);--dark-theme-base-color:#ffffff;--dark-theme-text-color:#ffffff;--dark-theme-secondary-color:#bcbcbc;--dark-theme-disabled-color:#646464;--dark-theme-divider-color:#3c3c3c;--text-primary-color:var(--dark-theme-text-color);--default-primary-color:var(--primary-color)}</style> ";

/***/ }),

/***/ "./src/bower_components/paper-styles/shadow.deps.js":
/*!**********************************************************!*\
  !*** ./src/bower_components/paper-styles/shadow.deps.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/paper-styles/shadow.html */ "./src/bower_components/paper-styles/shadow.html"), 'bower_components/paper-styles/shadow.html')


/***/ }),

/***/ "./src/bower_components/paper-styles/shadow.html":
/*!*******************************************************!*\
  !*** ./src/bower_components/paper-styles/shadow.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <link rel=import href=../polymer/polymer.html> <style is=habitlab-custom-style>:root{--shadow-transition:{transition:box-shadow .28s cubic-bezier(.4,0,.2,1)};--shadow-none:{box-shadow:none};--shadow-elevation-2dp:{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)};--shadow-elevation-3dp:{box-shadow:0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12),0 3px 3px -2px rgba(0,0,0,.4)};--shadow-elevation-4dp:{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.4)};--shadow-elevation-6dp:{box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.4)};--shadow-elevation-8dp:{box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.4)};--shadow-elevation-12dp:{box-shadow:0 12px 16px 1px rgba(0,0,0,.14),0 4px 22px 3px rgba(0,0,0,.12),0 6px 7px -4px rgba(0,0,0,.4)};--shadow-elevation-16dp:{box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.4)};}</style> ";

/***/ }),

/***/ "./src/bower_components/habitlab-paper-toast/habitlab-paper-toast-0.js":
/*!***********************************************************!*\
  !*** ./src/bower_components/habitlab-paper-toast/habitlab-paper-toast-0.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


    (function() {
      'use strict';

      // Keeps track of the toast currently opened.
      var currentToast = null;

      Polymer({
        is: 'habitlab-paper-toast',

        behaviors: [
          Polymer.IronOverlayBehavior
        ],

        properties: {
          /**
           * The element to fit `this` into.
           * Overridden from `Polymer.IronFitBehavior`.
           */
          fitInto: {
            type: Object,
            value: window,
            observer: '_onFitIntoChanged'
          },

          /**
           * The orientation against which to align the dropdown content
           * horizontally relative to `positionTarget`.
           * Overridden from `Polymer.IronFitBehavior`.
           */
          horizontalAlign: {
            type: String,
            value: 'left'
          },

          /**
           * The orientation against which to align the dropdown content
           * vertically relative to `positionTarget`.
           * Overridden from `Polymer.IronFitBehavior`.
           */
          verticalAlign: {
            type: String,
            value: 'bottom'
          },

          /**
           * The duration in milliseconds to show the toast.
           * Set to `0`, a negative number, or `Infinity`, to disable the
           * toast auto-closing.
           */
          duration: {
            type: Number,
            value: 3000
          },

          /**
           * The text to display in the toast.
           */
          text: {
            type: String,
            value: ''
          },

          /**
           * Overridden from `IronOverlayBehavior`.
           * Set to false to enable closing of the toast by clicking outside it.
           */
          noCancelOnOutsideClick: {
            type: Boolean,
            value: true
          },

          /**
           * Overridden from `IronOverlayBehavior`.
           * Set to true to disable auto-focusing the toast or child nodes with
           * the `autofocus` attribute` when the overlay is opened.
           */
          noAutoFocus: {
            type: Boolean,
            value: true
          }
        },

        listeners: {
          'transitionend': '__onTransitionEnd'
        },

        /**
         * Read-only. Deprecated. Use `opened` from `IronOverlayBehavior`.
         * @property visible
         * @deprecated
         */
        get visible() {
          Polymer.Base._warn('`visible` is deprecated, use `opened` instead');
          return this.opened;
        },

        /**
         * Read-only. Can auto-close if duration is a positive finite number.
         * @property _canAutoClose
         */
        get _canAutoClose() {
          return this.duration > 0 && this.duration !== Infinity;
        },

        created: function() {
          this._autoClose = null;
          Polymer.IronA11yAnnouncer.requestAvailability();
        },

        /**
         * Show the toast. Without arguments, this is the same as `open()` from `IronOverlayBehavior`.
         * @param {(Object|string)=} properties Properties to be set before opening the toast.
         * e.g. `toast.show('hello')` or `toast.show({text: 'hello', duration: 3000})`
         */
        show: function(properties) {
          if (typeof properties == 'string') {
            properties = { text: properties };
          }
          for (var property in properties) {
            if (property.indexOf('_') === 0) {
              Polymer.Base._warn('The property "' + property + '" is private and was not set.');
            } else if (property in this) {
              this[property] = properties[property];
            } else {
              Polymer.Base._warn('The property "' + property + '" is not valid.');
            }
          }
          this.open();
        },

        /**
         * Hide the toast. Same as `close()` from `IronOverlayBehavior`.
         */
        hide: function() {
          this.close();
        },

        /**
         * Called on transitions of the toast, indicating a finished animation
         * @private
         */
        __onTransitionEnd: function(e) {
          // there are different transitions that are happening when opening and
          // closing the toast. The last one so far is for `opacity`.
          // This marks the end of the transition, so we check for this to determine if this
          // is the correct event.
          if (e && e.target === this && e.propertyName === 'opacity') {
            if (this.opened) {
              this._finishRenderOpened();
            } else {
              this._finishRenderClosed();
            }
          }
        },

        /**
         * Overridden from `IronOverlayBehavior`.
         * Called when the value of `opened` changes.
         */
        _openedChanged: function() {
          if (this._autoClose !== null) {
            this.cancelAsync(this._autoClose);
            this._autoClose = null;
          }
          if (this.opened) {
            if (currentToast && currentToast !== this) {
              currentToast.close();
            }
            currentToast = this;
            this.fire('iron-announce', {
              text: this.text
            });
            if (this._canAutoClose) {
              this._autoClose = this.async(this.close, this.duration);
            }
          } else if (currentToast === this) {
            currentToast = null;
          }
          Polymer.IronOverlayBehaviorImpl._openedChanged.apply(this, arguments);
        },

        /**
         * Overridden from `IronOverlayBehavior`.
         */
        _renderOpened: function() {
          this.classList.add('habitlab-paper-toast-open');
        },

        /**
         * Overridden from `IronOverlayBehavior`.
         */
        _renderClosed: function() {
          this.classList.remove('habitlab-paper-toast-open');
        },

        /**
         * @private
         */
        _onFitIntoChanged: function(fitInto) {
          this.positionTarget = fitInto;
        }

        /**
         * Fired when `habitlab-paper-toast` is opened.
         *
         * @event 'iron-announce'
         * @param {{text: string}} detail Contains text that will be announced.
         */
      });
    })();
  

/***/ }),

/***/ "./src/bower_components/habitlab-paper-toast/habitlab-paper-toast.deps.js":
/*!**************************************************************!*\
  !*** ./src/bower_components/habitlab-paper-toast/habitlab-paper-toast.deps.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/habitlab-iron-a11y-announcer/habitlab-iron-a11y-announcer.deps.js */ "./src/bower_components/habitlab-iron-a11y-announcer/habitlab-iron-a11y-announcer.deps.js")
__webpack_require__(/*! bower_components/iron-overlay-behavior/iron-overlay-behavior.deps.js */ "./src/bower_components/iron-overlay-behavior/iron-overlay-behavior.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/habitlab-paper-toast/habitlab-paper-toast.html */ "./src/bower_components/habitlab-paper-toast/habitlab-paper-toast.html"), 'bower_components/habitlab-paper-toast/habitlab-paper-toast.html')
__webpack_require__(/*! bower_components/habitlab-paper-toast/habitlab-paper-toast-0 */ "./src/bower_components/habitlab-paper-toast/habitlab-paper-toast-0.js")


/***/ }),

/***/ "./src/bower_components/habitlab-paper-toast/habitlab-paper-toast.html":
/*!***********************************************************!*\
  !*** ./src/bower_components/habitlab-paper-toast/habitlab-paper-toast.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> <link rel=import href=../habitlab-iron-a11y-announcer/habitlab-iron-a11y-announcer.html> <link rel=import href=../iron-overlay-behavior/iron-overlay-behavior.html> </head><body><habitlab-dom-module id=habitlab-paper-toast> <template> <style>:host{display:block;position:fixed;background-color:var(--habitlab-paper-toast-background-color,#323232);color:var(--habitlab-paper-toast-color,#f1f1f1);min-height:48px;min-width:288px;padding:16px 24px;box-sizing:border-box;box-shadow:0 2px 5px 0 rgba(0,0,0,.26);border-radius:2px;margin:12px;font-size:14px;cursor:default;-webkit-transition:-webkit-transform .3s,opacity .3s;transition:transform .3s,opacity .3s;opacity:0;-webkit-transform:translateY(100px);transform:translateY(100px);@apply --paper-font-common-base}:host(.capsule){border-radius:24px}:host(.fit-bottom){width:100%;min-width:0;border-radius:0;margin:0}:host(.habitlab-paper-toast-open){opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}</style> <span id=label>{{text}}</span> <slot></slot> </template> <script src=habitlab-paper-toast-0.js></script> </habitlab-dom-module> </body></html>";

/***/ }),

/***/ "./src/bower_components/habitlab-paper-toggle-button/habitlab-paper-toggle-button-0.js":
/*!***************************************************************************!*\
  !*** ./src/bower_components/habitlab-paper-toggle-button/habitlab-paper-toggle-button-0.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


    Polymer({
      is: 'habitlab-paper-toggle-button',

      behaviors: [
        Polymer.PaperCheckedElementBehavior
      ],

      hostAttributes: {
        role: 'button',
        'aria-pressed': 'false',
        tabindex: 0
      },

      properties: {
        /**
         * Fired when the checked state changes due to user interaction.
         *
         * @event change
         */
        /**
         * Fired when the checked state changes.
         *
         * @event iron-change
         */
      },

      listeners: {
        track: '_ontrack'
      },

      _ontrack: function(event) {
        var track = event.detail;
        if (track.state === 'start') {
          this._trackStart(track);
        } else if (track.state === 'track') {
          this._trackMove(track);
        } else if (track.state === 'end') {
          this._trackEnd(track);
        }
      },

      _trackStart: function(track) {
        this._width = this.$.toggleBar.offsetWidth / 2;
        /*
         * keep an track-only check state to keep the dragging behavior smooth
         * while toggling activations
         */
        this._trackChecked = this.checked;
        this.$.toggleButton.classList.add('dragging');
      },

      _trackMove: function(track) {
        var dx = track.dx;
        this._x = Math.min(this._width,
            Math.max(0, this._trackChecked ? this._width + dx : dx));
        this.translate3d(this._x + 'px', 0, 0, this.$.toggleButton);
        this._userActivate(this._x > (this._width / 2));
      },

      _trackEnd: function(track) {
        this.$.toggleButton.classList.remove('dragging');
        this.transform('', this.$.toggleButton);
      },

      // customize the element's ripple
      _createRipple: function() {
        this._rippleContainer = this.$.toggleButton;
        var ripple = Polymer.PaperRippleBehavior._createRipple();
        ripple.id = 'ink';
        ripple.setAttribute('recenters', '');
        ripple.classList.add('circle', 'toggle-ink');
        return ripple;
      }

    });
  

/***/ }),

/***/ "./src/bower_components/habitlab-paper-toggle-button/habitlab-paper-toggle-button.deps.js":
/*!******************************************************************************!*\
  !*** ./src/bower_components/habitlab-paper-toggle-button/habitlab-paper-toggle-button.deps.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/iron-flex-layout/iron-flex-layout.deps.js */ "./src/bower_components/iron-flex-layout/iron-flex-layout.deps.js")
__webpack_require__(/*! bower_components/paper-styles/color.deps.js */ "./src/bower_components/paper-styles/color.deps.js")
__webpack_require__(/*! bower_components/paper-styles/default-theme.deps.js */ "./src/bower_components/paper-styles/default-theme.deps.js")
__webpack_require__(/*! bower_components/paper-behaviors/paper-checked-element-behavior.deps.js */ "./src/bower_components/paper-behaviors/paper-checked-element-behavior.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/habitlab-paper-toggle-button/habitlab-paper-toggle-button.html */ "./src/bower_components/habitlab-paper-toggle-button/habitlab-paper-toggle-button.html"), 'bower_components/habitlab-paper-toggle-button/habitlab-paper-toggle-button.html')
__webpack_require__(/*! bower_components/habitlab-paper-toggle-button/habitlab-paper-toggle-button-0 */ "./src/bower_components/habitlab-paper-toggle-button/habitlab-paper-toggle-button-0.js")


/***/ }),

/***/ "./src/bower_components/habitlab-paper-toggle-button/habitlab-paper-toggle-button.html":
/*!***************************************************************************!*\
  !*** ./src/bower_components/habitlab-paper-toggle-button/habitlab-paper-toggle-button.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=../polymer/polymer.html> <link rel=import href=../iron-flex-layout/iron-flex-layout.html> <link rel=import href=../paper-styles/color.html> <link rel=import href=../paper-styles/default-theme.html> <link rel=import href=../paper-behaviors/paper-checked-element-behavior.html> </head><body><habitlab-dom-module id=habitlab-paper-toggle-button> <template strip-whitespace=\"\"> <style>:host{display:inline-block;@apply(--layout-horizontal);@apply(--layout-center);@apply(--paper-font-common-base)}:host([disabled]){pointer-events:none}:host(:focus){outline:0}.toggle-bar{position:absolute;height:100%;width:100%;border-radius:8px;pointer-events:none;opacity:.4;transition:background-color linear .08s;background-color:var(--habitlab-paper-toggle-button-unchecked-bar-color,#000);@apply(--habitlab-paper-toggle-button-unchecked-bar)}.toggle-button{position:absolute;top:-3px;left:0;height:20px;width:20px;border-radius:50%;box-shadow:0 1px 5px 0 rgba(0,0,0,.6);transition:-webkit-transform linear .08s,background-color linear .08s;transition:transform linear .08s,background-color linear .08s;will-change:transform;background-color:var(--habitlab-paper-toggle-button-unchecked-button-color,--paper-grey-50);@apply(--habitlab-paper-toggle-button-unchecked-button)}.toggle-button.dragging{-webkit-transition:none;transition:none}:host([checked]:not([disabled])) .toggle-bar{opacity:.5;background-color:var(--habitlab-paper-toggle-button-checked-bar-color,--primary-color);@apply(--habitlab-paper-toggle-button-checked-bar)}:host([disabled]) .toggle-bar{background-color:#000;opacity:.12}:host([checked]) .toggle-button{-webkit-transform:translate(16px,0);transform:translate(16px,0)}:host([checked]:not([disabled])) .toggle-button{background-color:var(--habitlab-paper-toggle-button-checked-button-color,--primary-color);@apply(--habitlab-paper-toggle-button-checked-button)}:host([disabled]) .toggle-button{background-color:#bdbdbd;opacity:1}.toggle-ink{position:absolute;top:-14px;left:-14px;right:auto;bottom:auto;width:48px;height:48px;opacity:.5;pointer-events:none;color:var(--habitlab-paper-toggle-button-unchecked-ink-color,--primary-text-color)}:host([checked]) .toggle-ink{color:var(--habitlab-paper-toggle-button-checked-ink-color,--primary-color)}.toggle-container{display:inline-block;position:relative;width:36px;height:14px;margin:4px 1px}.toggle-label{position:relative;display:inline-block;vertical-align:middle;padding-left:var(--habitlab-paper-toggle-button-label-spacing,8px);pointer-events:none;color:var(--habitlab-paper-toggle-button-label-color,--primary-text-color)}</style> <div class=toggle-container> <div id=toggleBar class=toggle-bar></div> <div id=toggleButton class=toggle-button></div> </div> <div class=toggle-label><content></content></div> </template> <script src=habitlab-paper-toggle-button-0.js></script> </habitlab-dom-module> </body></html>";

/***/ }),

/***/ "./src/bower_components/polymer-themes/ice.deps.js":
/*!*********************************************************!*\
  !*** ./src/bower_components/polymer-themes/ice.deps.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
import_dom_modules(__webpack_require__(/*! bower_components/polymer-themes/ice.html */ "./src/bower_components/polymer-themes/ice.html"), 'bower_components/polymer-themes/ice.html')


/***/ }),

/***/ "./src/bower_components/polymer-themes/ice.html":
/*!******************************************************!*\
  !*** ./src/bower_components/polymer-themes/ice.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style is=habitlab-custom-style>html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;font-size:16px}body,html{margin:0;padding:0;min-height:100%;color:#2d2d2d;background-color:#fff;font-family:Verdana,Geneva,HelveticaNeue-Light,\"Helvetica Neue Light\",\"Helvetica Neue\",Helvetica,Arial,\"Lucida Grande\",sans-serif;font-weight:400}section{padding:40px 0}section[hero]{background-color:#f3f3f3}section:after{content:if false,'one','two'}h1,h2,h3,h4,h5,h6{font-weight:400;margin:0;padding:0;line-height:1em}h1,h3,h5{font-family:Verdana,Geneva,HelveticaNeue-Light,\"Helvetica Neue Light\",\"Helvetica Neue\",Helvetica,Arial,\"Lucida Grande\",sans-serif}h1{font-size:50px;margin:30px 0}h2{color:#777;font-size:35px;margin:20px 0}h3{font-size:25px;margin:15px 0}h4{font-size:20px}a,a:active,a:focus,a:visited{color:#777;text-decoration:none}a:hover{color:#777;text-decoration:underline}:root{--default-primary-color:#446e9b;--dark-primary-color:#e7e7e7;--light-primary-color:#c5cae9;--text-primary-color:#ffffff;--accent-color:#ff4081;--primary-background-color:#ffffff;--primary-text-color:#2d2d2d;--secondary-text-color:#777777;--disabled-text-color:#313238;--divider-color:#e0e0e0;--habitlab-paper-checkbox-checked-color:#446e9b;--habitlab-paper-checkbox-checked-ink-color:#446e9b;--habitlab-paper-checkbox-unchecked-color:#777777;--habitlab-paper-checkbox-unchecked-ink-color:#777777;--habitlab-paper-checkbox-label-color:#2d2d2d;--paper-fab-background:#446e9b;--paper-fab-disabled-background:#afb1b9;--paper-fab-disabled-text:#313238;--habitlab-paper-icon-button-disabled-text:#afb1b9;--habitlab-paper-input-container-color:#7a7a7a;--habitlab-paper-input-container-focus-color:#446e9b;--habitlab-paper-input-container-invalid-color:#ff6e40;--habitlab-paper-input-container-input-color:#7a7a7a;--paper-menu-background-color:#f3f3f3;--paper-menu-color:#2d2d2d;--paper-menu-disabled-color:#afb1b9;--habitlab-paper-progress-active-color:#446e9b;--habitlab-paper-progress-secondary-color:#80cbc4;--paper-radio-button-checked-color:#446e9b;--paper-radio-button-checked-ink-color:white;--paper-radio-button-unchecked-color:#2d2d2d;--paper-radio-button-unchecked-ink-color:#2d2d2d;--paper-radio-button-label-color:#2d2d2d;--habitlab-paper-slider-knob-color:#446e9b;--habitlab-paper-slider-active-color:#446e9b;--habitlab-paper-slider-pin-color:#446e9b;--paper-spinner-layer-1-color:#446e9b;--paper-spinner-layer-2-color:#446e9b;--paper-spinner-layer-3-color:#446e9b;--paper-spinner-layer-4-color:#446e9b;--paper-tabs-selection-bar-color:#80cbc4;--paper-tab-ink:#80cbc4;--habitlab-paper-toggle-button-checked-bar-color:#446e9b;--habitlab-paper-toggle-button-checked-button-color:#446e9b;--habitlab-paper-toggle-button-checked-ink-color:#446e9b;--habitlab-paper-toggle-button-unchecked-bar-color:#777777;--habitlab-paper-toggle-button-unchecked-button-color:white;--habitlab-paper-toggle-button-unchecked-ink-color:white;--paper-toolbar-background:#e7e7e7;--paper-toolbar-color:#777777}paper-toolbar a,paper-toolbar a:active,paper-toolbar a:focus,paper-toolbar a:hover,paper-toolbar a:visited{color:#777}habitlab-paper-button.btn-primary,habitlab-paper-button.primary,habitlab-paper-button[primary]{color:#446e9b}habitlab-paper-button.btn-primary[raised],habitlab-paper-button.primary[raised],habitlab-paper-button[primary][raised]{background-color:#446e9b;color:#fff}habitlab-paper-button.btn-secondary,habitlab-paper-button.secondary,habitlab-paper-button[secondary]{color:#80cbc4}habitlab-paper-button.btn-secondary[raised],habitlab-paper-button.secondary[raised],habitlab-paper-button[secondary][raised]{background-color:#80cbc4;color:#263d3b}habitlab-paper-button.btn-success,habitlab-paper-button.success,habitlab-paper-button[success]{color:#9dc56e}habitlab-paper-button.btn-success[raised],habitlab-paper-button.success[raised],habitlab-paper-button[success][raised]{background-color:#9dc56e;color:#2f3b21}habitlab-paper-button.btn-info,habitlab-paper-button.info,habitlab-paper-button[info]{color:#ffb74d}habitlab-paper-button.btn-info[raised],habitlab-paper-button.info[raised],habitlab-paper-button[info][raised]{background-color:#ffb74d;color:#4d3717}habitlab-paper-button.btn-warning,habitlab-paper-button.warning,habitlab-paper-button[warning]{color:#fadd60}habitlab-paper-button.btn-warning[raised],habitlab-paper-button.warning[raised],habitlab-paper-button[warning][raised]{background-color:#fadd60;color:#4b421d}habitlab-paper-button.btn-error,habitlab-paper-button.error,habitlab-paper-button[error]{color:#ff6e40}habitlab-paper-button.btn-error[raised],habitlab-paper-button.error[raised],habitlab-paper-button[error][raised]{background-color:#ff6e40;color:#4d2113}habitlab-paper-button.btn-link,habitlab-paper-button.link,habitlab-paper-button[link]{text-decoration:underline}habitlab-paper-button[raised]{color:#2d2d2d}habitlab-paper-button[disabled]{color:#313238!important;background:#afb1b9!important}habitlab-paper-icon-button.btn-primary,habitlab-paper-icon-button.primary,habitlab-paper-icon-button[primary]{color:#446e9b}habitlab-paper-icon-button.btn-primary:hover,habitlab-paper-icon-button.primary:hover,habitlab-paper-icon-button[primary]:hover{background-color:#ecf1f5;background-color:rgba(68,110,155,.2);border-radius:50%}habitlab-paper-icon-button.btn-secondary,habitlab-paper-icon-button.secondary,habitlab-paper-icon-button[secondary]{color:#80cbc4}habitlab-paper-icon-button.btn-secondary:hover,habitlab-paper-icon-button.secondary:hover,habitlab-paper-icon-button[secondary]:hover{background-color:#f2faf9;background-color:rgba(128,203,196,.2);border-radius:50%}habitlab-paper-icon-button.btn-success,habitlab-paper-icon-button.success,habitlab-paper-icon-button[success]{color:#9dc56e}habitlab-paper-icon-button.btn-success:hover,habitlab-paper-icon-button.success:hover,habitlab-paper-icon-button[success]:hover{background-color:#f5f9f1;background-color:rgba(157,197,110,.2);border-radius:50%}habitlab-paper-icon-button.btn-info,habitlab-paper-icon-button.info,habitlab-paper-icon-button[info]{color:#ffb74d}habitlab-paper-icon-button.btn-info:hover,habitlab-paper-icon-button.info:hover,habitlab-paper-icon-button[info]:hover{background-color:#fff8ed;background-color:rgba(255,183,77,.2);border-radius:50%}habitlab-paper-icon-button.btn-warning,habitlab-paper-icon-button.warning,habitlab-paper-icon-button[warning]{color:#fadd60}habitlab-paper-icon-button.btn-warning:hover,habitlab-paper-icon-button.warning:hover,habitlab-paper-icon-button[warning]:hover{background-color:#fffcef;background-color:rgba(250,221,96,.2);border-radius:50%}habitlab-paper-icon-button.btn-error,habitlab-paper-icon-button.error,habitlab-paper-icon-button[error]{color:#ff6e40}habitlab-paper-icon-button.btn-error:hover,habitlab-paper-icon-button.error:hover,habitlab-paper-icon-button[error]:hover{background-color:#fff1ec;background-color:rgba(255,110,64,.2);border-radius:50%}habitlab-paper-checkbox #checkmark.habitlab-paper-checkbox,habitlab-paper-checkbox /deep/,habitlab-paper-checkbox::shadow #checkmark.habitlab-paper-checkbox{border-color:#fff!important}habitlab-paper-dialog{color:#2d2d2d;background-color:#fff;font-family:Verdana,Geneva,HelveticaNeue-Light,\"Helvetica Neue Light\",\"Helvetica Neue\",Helvetica,Arial,\"Lucida Grande\",sans-serif;font-weight:400}habitlab-paper-dialog h1,habitlab-paper-dialog h2,habitlab-paper-dialog h3,habitlab-paper-dialog h4,habitlab-paper-dialog h5,habitlab-paper-dialog h6{overflow:visible;padding:0 1em;text-align:center}paper-fab{--text-primary-color:white}paper-fab{background-color:#446e9b;color:#fff;--paper-fab-keyboard-focus-background:#1d2f42}paper-fab.btn-primary,paper-fab.primary,paper-fab[primary]{background-color:#446e9b;color:#fff;--paper-fab-keyboard-focus-background:#1d2f42}paper-fab.btn-secondary,paper-fab.secondary,paper-fab[secondary]{background-color:#80cbc4;color:#263d3b;--paper-fab-keyboard-focus-background:#3b9088}paper-fab.btn-success,paper-fab.success,paper-fab[success]{background-color:#9dc56e;color:#2f3b21;--paper-fab-keyboard-focus-background:#5d8033}paper-fab.btn-info,paper-fab.info,paper-fab[info]{background-color:#ffb74d;color:#4d3717;--paper-fab-keyboard-focus-background:#cd7a00}paper-fab.btn-warning,paper-fab.warning,paper-fab[warning]{background-color:#fadd60;color:#4b421d;--paper-fab-keyboard-focus-background:#d4ad07}paper-fab.btn-error,paper-fab.error,paper-fab[error]{background-color:#ff6e40;color:#4d2113;--paper-fab-keyboard-focus-background:#c02e00}paper-fab[disabled]{color:#313238!important;background:#afb1b9!important}section.hero paper-menu,section[hero] paper-menu{--paper-menu-background-color:#f3f3f3}paper-tabs{background-color:#fff;color:#777}</style> ";

/***/ }),

/***/ "./src/bower_components/polymer/polymer-0.js":
/*!***************************************************!*\
  !*** ./src/bower_components/polymer/polymer-0.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.check_if_is_habitlab_node = check_if_is_habitlab_node = function (node) {
  while (node != null) {
    if (node.is_habitlab_element) {
      return true;
    }
    if (node.parentNode != null) {
      node = node.parentNode
    } else {
      node = node.host
    }
  }
  return false
};

(function () {
Polymer.nar = [];
var disableUpgradeEnabled = Polymer.Settings.disableUpgradeEnabled;
Polymer.Annotations = {
parseAnnotations: function (template, stripWhiteSpace) {
var list = [];
var content = template._content || template.content;
this._parseNodeAnnotations(content, list, stripWhiteSpace || template.hasAttribute('strip-whitespace'));
return list;
},
_parseNodeAnnotations: function (node, list, stripWhiteSpace) {
return node.nodeType === Node.TEXT_NODE ? this._parseTextNodeAnnotation(node, list) : this._parseElementAnnotations(node, list, stripWhiteSpace);
},
_bindingRegex: function () {
var IDENT = '(?:' + '[a-zA-Z_$][\\w.:$\\-*]*' + ')';
var NUMBER = '(?:' + '[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?' + ')';
var SQUOTE_STRING = '(?:' + '\'(?:[^\'\\\\]|\\\\.)*\'' + ')';
var DQUOTE_STRING = '(?:' + '"(?:[^"\\\\]|\\\\.)*"' + ')';
var STRING = '(?:' + SQUOTE_STRING + '|' + DQUOTE_STRING + ')';
var ARGUMENT = '(?:' + IDENT + '|' + NUMBER + '|' + STRING + '\\s*' + ')';
var ARGUMENTS = '(?:' + ARGUMENT + '(?:,\\s*' + ARGUMENT + ')*' + ')';
var ARGUMENT_LIST = '(?:' + '\\(\\s*' + '(?:' + ARGUMENTS + '?' + ')' + '\\)\\s*' + ')';
var BINDING = '(' + IDENT + '\\s*' + ARGUMENT_LIST + '?' + ')';
var OPEN_BRACKET = '(\\[\\[|{{)' + '\\s*';
var CLOSE_BRACKET = '(?:]]|}})';
var NEGATE = '(?:(!)\\s*)?';
var EXPRESSION = OPEN_BRACKET + NEGATE + BINDING + CLOSE_BRACKET;
return new RegExp(EXPRESSION, 'g');
}(),
_parseBindings: function (text) {
var re = this._bindingRegex;
var parts = [];
var lastIndex = 0;
var m;
while ((m = re.exec(text)) !== null) {
if (m.index > lastIndex) {
parts.push({ literal: text.slice(lastIndex, m.index) });
}
var mode = m[1][0];
var negate = Boolean(m[2]);
var value = m[3].trim();
var customEvent, notifyEvent, colon;
if (mode == '{' && (colon = value.indexOf('::')) > 0) {
notifyEvent = value.substring(colon + 2);
value = value.substring(0, colon);
customEvent = true;
}
parts.push({
compoundIndex: parts.length,
value: value,
mode: mode,
negate: negate,
event: notifyEvent,
customEvent: customEvent
});
lastIndex = re.lastIndex;
}
if (lastIndex && lastIndex < text.length) {
var literal = text.substring(lastIndex);
if (literal) {
parts.push({ literal: literal });
}
}
if (parts.length) {
return parts;
}
},
_literalFromParts: function (parts) {
var s = '';
for (var i = 0; i < parts.length; i++) {
var literal = parts[i].literal;
s += literal || '';
}
return s;
},
_parseTextNodeAnnotation: function (node, list) {
var parts = this._parseBindings(node.textContent);
if (parts) {
node.textContent = this._literalFromParts(parts) || ' ';
var annote = {
bindings: [{
kind: 'text',
name: 'textContent',
parts: parts,
isCompound: parts.length !== 1
}]
};
list.push(annote);
return annote;
}
},
_parseElementAnnotations: function (element, list, stripWhiteSpace) {
var annote = {
bindings: [],
events: []
};
if (element.localName === 'content') {
list._hasContent = true;
}
this._parseChildNodesAnnotations(element, annote, list, stripWhiteSpace);
if (element.attributes) {
this._parseNodeAttributeAnnotations(element, annote, list);
if (this.prepElement) {
this.prepElement(element);
}
}
if (annote.bindings.length || annote.events.length || annote.id) {
list.push(annote);
}
return annote;
},
_parseChildNodesAnnotations: function (root, annote, list, stripWhiteSpace) {
if (root.firstChild) {
var node = root.firstChild;
var i = 0;
while (node) {
var next = node.nextSibling;
if (node.localName === 'template' && !node.hasAttribute('preserve-content')) {
this._parseTemplate(node, i, list, annote, stripWhiteSpace);
}
if (node.localName == 'slot') {
node = this._replaceSlotWithContent(node);
}
if (node.nodeType === Node.TEXT_NODE) {
var n = next;
while (n && n.nodeType === Node.TEXT_NODE) {
node.textContent += n.textContent;
next = n.nextSibling;
root.removeChild(n);
n = next;
}
if (stripWhiteSpace && !node.textContent.trim()) {
root.removeChild(node);
i--;
}
}
if (node.parentNode) {
var childAnnotation = this._parseNodeAnnotations(node, list, stripWhiteSpace);
if (childAnnotation) {
childAnnotation.parent = annote;
childAnnotation.index = i;
}
}
node = next;
i++;
}
}
},
_replaceSlotWithContent: function (slot) {
var content = slot.ownerDocument.createElement('content');
while (slot.firstChild) {
content.appendChild(slot.firstChild);
}
var attrs = slot.attributes;
for (var i = 0; i < attrs.length; i++) {
var attr = attrs[i];
content.setAttribute(attr.name, attr.value);
}
var name = slot.getAttribute('name');
if (name) {
content.setAttribute('select', '[slot=\'' + name + '\']');
}
slot.parentNode.replaceChild(content, slot);
return content;
},
_parseTemplate: function (node, index, list, parent, stripWhiteSpace) {
var content = document.createDocumentFragment();
content._notes = this.parseAnnotations(node, stripWhiteSpace);
content.appendChild(node.content);
list.push({
bindings: Polymer.nar,
events: Polymer.nar,
templateContent: content,
parent: parent,
index: index
});
},
_parseNodeAttributeAnnotations: function (node, annotation) {
var attrs = Array.prototype.slice.call(node.attributes);
for (var i = attrs.length - 1, a; a = attrs[i]; i--) {
var n = a.name;
var v = a.value;
var b;
if (n.slice(0, 3) === 'on-') {
node.removeAttribute(n);
annotation.events.push({
name: n.slice(3),
value: v
});
} else if (b = this._parseNodeAttributeAnnotation(node, n, v)) {
annotation.bindings.push(b);
} else if (n === 'id') {
annotation.id = v;
}
}
},
_parseNodeAttributeAnnotation: function (node, name, value) {
var parts = this._parseBindings(value);
if (parts) {
var origName = name;
var kind = 'property';
if (name[name.length - 1] == '$') {
name = name.slice(0, -1);
kind = 'attribute';
}
var literal = this._literalFromParts(parts);
if (literal && kind == 'attribute') {
node.setAttribute(name, literal);
}
if (node.localName === 'input' && origName === 'value') {
node.setAttribute(origName, '');
}
if (disableUpgradeEnabled && origName === 'disable-upgrade$') {
node.setAttribute(name, '');
}
node.removeAttribute(origName);
var propertyName = Polymer.CaseMap.dashToCamelCase(name);
if (kind === 'property') {
name = propertyName;
}
return {
kind: kind,
name: name,
propertyName: propertyName,
parts: parts,
literal: literal,
isCompound: parts.length !== 1
};
}
},
findAnnotatedNode: function (root, annote) {
var parent = annote.parent && Polymer.Annotations.findAnnotatedNode(root, annote.parent);
if (parent) {
for (var n = parent.firstChild, i = 0; n; n = n.nextSibling) {
if (annote.index === i++) {
return n;
}
}
} else {
return root;
}
}
};
}());Polymer.Path = {
root: function (path) {
var dotIndex = path.indexOf('.');
if (dotIndex === -1) {
return path;
}
return path.slice(0, dotIndex);
},
isDeep: function (path) {
return path.indexOf('.') !== -1;
},
isAncestor: function (base, path) {
return base.indexOf(path + '.') === 0;
},
isDescendant: function (base, path) {
return path.indexOf(base + '.') === 0;
},
translate: function (base, newBase, path) {
return newBase + path.slice(base.length);
},
matches: function (base, wildcard, path) {
return base === path || this.isAncestor(base, path) || Boolean(wildcard) && this.isDescendant(base, path);
}
};Polymer.Base._addFeature({
_prepAnnotations: function () {
if (!this._template) {
this._notes = [];
} else {
var self = this;
Polymer.Annotations.prepElement = function (element) {
self._prepElement(element);
};
if (this._template._content && this._template._content._notes) {
this._notes = this._template._content._notes;
} else {
this._notes = Polymer.Annotations.parseAnnotations(this._template);
this._processAnnotations(this._notes);
}
Polymer.Annotations.prepElement = null;
}
},
_processAnnotations: function (notes) {
for (var i = 0; i < notes.length; i++) {
var note = notes[i];
for (var j = 0; j < note.bindings.length; j++) {
var b = note.bindings[j];
for (var k = 0; k < b.parts.length; k++) {
var p = b.parts[k];
if (!p.literal) {
var signature = this._parseMethod(p.value);
if (signature) {
p.signature = signature;
} else {
p.model = Polymer.Path.root(p.value);
}
}
}
}
if (note.templateContent) {
this._processAnnotations(note.templateContent._notes);
var pp = note.templateContent._parentProps = this._discoverTemplateParentProps(note.templateContent._notes);
var bindings = [];
for (var prop in pp) {
var name = '_parent_' + prop;
bindings.push({
index: note.index,
kind: 'property',
name: name,
propertyName: name,
parts: [{
mode: '{',
model: prop,
value: prop
}]
});
}
note.bindings = note.bindings.concat(bindings);
}
}
},
_discoverTemplateParentProps: function (notes) {
var pp = {};
for (var i = 0, n; i < notes.length && (n = notes[i]); i++) {
for (var j = 0, b$ = n.bindings, b; j < b$.length && (b = b$[j]); j++) {
for (var k = 0, p$ = b.parts, p; k < p$.length && (p = p$[k]); k++) {
if (p.signature) {
var args = p.signature.args;
for (var kk = 0; kk < args.length; kk++) {
var model = args[kk].model;
if (model) {
pp[model] = true;
}
}
if (p.signature.dynamicFn) {
pp[p.signature.method] = true;
}
} else {
if (p.model) {
pp[p.model] = true;
}
}
}
}
if (n.templateContent) {
var tpp = n.templateContent._parentProps;
Polymer.Base.mixin(pp, tpp);
}
}
return pp;
},
_prepElement: function (element) {
Polymer.ResolveUrl.resolveAttrs(element, this._template.ownerDocument);
},
_findAnnotatedNode: Polymer.Annotations.findAnnotatedNode,
_marshalAnnotationReferences: function () {
if (this._template) {
this._marshalIdNodes();
this._marshalAnnotatedNodes();
this._marshalAnnotatedListeners();
}
},
_configureAnnotationReferences: function () {
var notes = this._notes;
var nodes = this._nodes;
for (var i = 0; i < notes.length; i++) {
var note = notes[i];
var node = nodes[i];
this._configureTemplateContent(note, node);
this._configureCompoundBindings(note, node);
}
},
_configureTemplateContent: function (note, node) {
if (note.templateContent) {
node._content = note.templateContent;
}
},
_configureCompoundBindings: function (note, node) {
var bindings = note.bindings;
for (var i = 0; i < bindings.length; i++) {
var binding = bindings[i];
if (binding.isCompound) {
var storage = node.__compoundStorage__ || (node.__compoundStorage__ = {});
var parts = binding.parts;
var literals = new Array(parts.length);
for (var j = 0; j < parts.length; j++) {
literals[j] = parts[j].literal;
}
var name = binding.name;
storage[name] = literals;
if (binding.literal && binding.kind == 'property') {
if (node._configValue) {
node._configValue(name, binding.literal);
} else {
node[name] = binding.literal;
}
}
}
}
},
_marshalIdNodes: function () {
this.$ = {};
for (var i = 0, l = this._notes.length, a; i < l && (a = this._notes[i]); i++) {
if (a.id) {
this.$[a.id] = this._findAnnotatedNode(this.root, a);
}
}
},
_marshalAnnotatedNodes: function () {
if (this._notes && this._notes.length) {
var r = new Array(this._notes.length);
for (var i = 0; i < this._notes.length; i++) {
r[i] = this._findAnnotatedNode(this.root, this._notes[i]);
}
this._nodes = r;
}
},
_marshalAnnotatedListeners: function () {
for (var i = 0, l = this._notes.length, a; i < l && (a = this._notes[i]); i++) {
if (a.events && a.events.length) {
var node = this._findAnnotatedNode(this.root, a);
for (var j = 0, e$ = a.events, e; j < e$.length && (e = e$[j]); j++) {
this.listen(node, e.name, e.value);
}
}
}
}
});Polymer.Base._addFeature({
listeners: {},
_listenListeners: function (listeners) {
var node, name, eventName;
for (eventName in listeners) {
if (eventName.indexOf('.') < 0) {
node = this;
name = eventName;
} else {
name = eventName.split('.');
node = this.$[name[0]];
name = name[1];
}
this.listen(node, name, listeners[eventName]);
}
},
listen: function (node, eventName, methodName) {
var handler = this._recallEventHandler(this, eventName, node, methodName);
if (!handler) {
handler = this._createEventHandler(node, eventName, methodName);
}
if (handler._listening) {
return;
}
this._listen(node, eventName, handler);
handler._listening = true;
},
_boundListenerKey: function (eventName, methodName) {
return eventName + ':' + methodName;
},
_recordEventHandler: function (host, eventName, target, methodName, handler) {
var hbl = host.__boundListeners;
if (!hbl) {
hbl = host.__boundListeners = new WeakMap();
}
var bl = hbl.get(target);
if (!bl) {
bl = {};
if (!Polymer.Settings.isIE || target != window) {
hbl.set(target, bl);
}
}
var key = this._boundListenerKey(eventName, methodName);
bl[key] = handler;
},
_recallEventHandler: function (host, eventName, target, methodName) {
var hbl = host.__boundListeners;
if (!hbl) {
return;
}
var bl = hbl.get(target);
if (!bl) {
return;
}
var key = this._boundListenerKey(eventName, methodName);
return bl[key];
},
_createEventHandler: function (node, eventName, methodName) {
var host = this;
var handler = function (e) {
if (host[methodName]) {
host[methodName](e, e.detail);
} else {
host._warn(host._logf('_createEventHandler', 'listener method `' + methodName + '` not defined'));
}
};
handler._listening = false;
this._recordEventHandler(host, eventName, node, methodName, handler);
return handler;
},
unlisten: function (node, eventName, methodName) {
var handler = this._recallEventHandler(this, eventName, node, methodName);
if (handler) {
this._unlisten(node, eventName, handler);
handler._listening = false;
}
},
_listen: function (node, eventName, handler) {
node.addEventListener(eventName, handler);
},
_unlisten: function (node, eventName, handler) {
node.removeEventListener(eventName, handler);
}
});(function () {
'use strict';
var wrap = Polymer.DomApi.wrap;
var HAS_NATIVE_TA = true;
var GESTURE_KEY = '__habitlabPolymerGestures';
var HANDLED_OBJ = '__habitlabPolymerGesturesHandled';
var TOUCH_ACTION = '__habitlabPolymerGesturesTouchAction';
var TAP_DISTANCE = 25;
var TRACK_DISTANCE = 5;
var TRACK_LENGTH = 2;
var MOUSE_TIMEOUT = 2500;
var MOUSE_EVENTS = [
'mousedown',
'mousemove',
'mouseup',
'click'
];
var MOUSE_WHICH_TO_BUTTONS = [
0,
1,
4,
2
];
var MOUSE_HAS_BUTTONS = function () {
try {
return new MouseEvent('test', { buttons: 1 }).buttons === 1;
} catch (e) {
return false;
}
}();
var SUPPORTS_PASSIVE = false;
(function () {
try {
var opts = Object.defineProperty({}, 'passive', {
get: function () {
SUPPORTS_PASSIVE = true;
}
});
window.addEventListener('test', null, opts);
window.removeEventListener('test', null, opts);
} catch (e) {
}
}());
var IS_TOUCH_ONLY = navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);
var mouseCanceller = function (mouseEvent) {
var sc = mouseEvent.sourceCapabilities;
if (sc && !sc.firesTouchEvents) {
return;
}
mouseEvent[HANDLED_OBJ] = { skip: true };
if (mouseEvent.type === 'click') {
var path = Polymer.dom(mouseEvent).path;
for (var i = 0; i < path.length; i++) {
if (path[i] === POINTERSTATE.mouse.target) {
return;
}
}
mouseEvent.preventDefault();
mouseEvent.stopPropagation();
}
};
function setupTeardownMouseCanceller(setup) {
var events = IS_TOUCH_ONLY ? ['click'] : MOUSE_EVENTS;
for (var i = 0, en; i < events.length; i++) {
en = events[i];
if (setup) {
document.addEventListener(en, mouseCanceller, true);
} else {
document.removeEventListener(en, mouseCanceller, true);
}
}
}
function ignoreMouse(ev) {
if (!POINTERSTATE.mouse.mouseIgnoreJob) {
setupTeardownMouseCanceller(true);
}
var unset = function () {
setupTeardownMouseCanceller();
POINTERSTATE.mouse.target = null;
POINTERSTATE.mouse.mouseIgnoreJob = null;
};
POINTERSTATE.mouse.target = Polymer.dom(ev).rootTarget;
POINTERSTATE.mouse.mouseIgnoreJob = Polymer.Debounce(POINTERSTATE.mouse.mouseIgnoreJob, unset, MOUSE_TIMEOUT);
}
function hasLeftMouseButton(ev) {
var type = ev.type;
if (MOUSE_EVENTS.indexOf(type) === -1) {
return false;
}
if (type === 'mousemove') {
var buttons = ev.buttons === undefined ? 1 : ev.buttons;
if (ev instanceof window.MouseEvent && !MOUSE_HAS_BUTTONS) {
buttons = MOUSE_WHICH_TO_BUTTONS[ev.which] || 0;
}
return Boolean(buttons & 1);
} else {
var button = ev.button === undefined ? 0 : ev.button;
return button === 0;
}
}
function isSyntheticClick(ev) {
if (ev.type === 'click') {
if (ev.detail === 0) {
return true;
}
var t = Gestures.findOriginalTarget(ev);
var bcr = t.getBoundingClientRect();
var x = ev.pageX, y = ev.pageY;
return !(x >= bcr.left && x <= bcr.right && (y >= bcr.top && y <= bcr.bottom));
}
return false;
}
var POINTERSTATE = {
mouse: {
target: null,
mouseIgnoreJob: null
},
touch: {
x: 0,
y: 0,
id: -1,
scrollDecided: false
}
};
function firstTouchAction(ev) {
var path = Polymer.dom(ev).path;
var ta = 'auto';
for (var i = 0, n; i < path.length; i++) {
n = path[i];
if (n[TOUCH_ACTION]) {
ta = n[TOUCH_ACTION];
break;
}
}
return ta;
}
function trackDocument(stateObj, movefn, upfn) {
stateObj.movefn = movefn;
stateObj.upfn = upfn;
document.addEventListener('mousemove', movefn);
document.addEventListener('mouseup', upfn);
}
function untrackDocument(stateObj) {
document.removeEventListener('mousemove', stateObj.movefn);
document.removeEventListener('mouseup', stateObj.upfn);
stateObj.movefn = null;
stateObj.upfn = null;
}
document.addEventListener('touchend', ignoreMouse, SUPPORTS_PASSIVE ? { passive: true } : false);
var Gestures = {
gestures: {},
recognizers: [],
deepTargetFind: function (x, y) {
var node = document.elementFromPoint(x, y);
var next = node;
while (next && next.shadowRoot) {
next = next.shadowRoot.elementFromPoint(x, y);
if (next) {
node = next;
}
}
return node;
},
findOriginalTarget: function (ev) {
if (ev.path) {
return ev.path[0];
}
return ev.target;
},
handleNative: function (ev) {
var handled;
var type = ev.type;
var node = wrap(ev.currentTarget);
var gobj = node[GESTURE_KEY];
if (!gobj) {
return;
}
var gs = gobj[type];
if (!gs) {
return;
}
if (!ev[HANDLED_OBJ]) {
ev[HANDLED_OBJ] = {};
if (type.slice(0, 5) === 'touch') {
var t = ev.changedTouches[0];
if (type === 'touchstart') {
if (ev.touches.length === 1) {
POINTERSTATE.touch.id = t.identifier;
}
}
if (POINTERSTATE.touch.id !== t.identifier) {
return;
}
if (!HAS_NATIVE_TA) {
if (type === 'touchstart' || type === 'touchmove') {
Gestures.handleTouchAction(ev);
}
}
}
}
handled = ev[HANDLED_OBJ];
if (handled.skip) {
return;
}
var recognizers = Gestures.recognizers;
for (var i = 0, r; i < recognizers.length; i++) {
r = recognizers[i];
if (gs[r.name] && !handled[r.name]) {
if (r.flow && r.flow.start.indexOf(ev.type) > -1 && r.reset) {
r.reset();
}
}
}
for (i = 0, r; i < recognizers.length; i++) {
r = recognizers[i];
if (gs[r.name] && !handled[r.name]) {
handled[r.name] = true;
r[type](ev);
}
}
},
handleTouchAction: function (ev) {
var t = ev.changedTouches[0];
var type = ev.type;
if (type === 'touchstart') {
POINTERSTATE.touch.x = t.clientX;
POINTERSTATE.touch.y = t.clientY;
POINTERSTATE.touch.scrollDecided = false;
} else if (type === 'touchmove') {
if (POINTERSTATE.touch.scrollDecided) {
return;
}
POINTERSTATE.touch.scrollDecided = true;
var ta = firstTouchAction(ev);
var prevent = false;
var dx = Math.abs(POINTERSTATE.touch.x - t.clientX);
var dy = Math.abs(POINTERSTATE.touch.y - t.clientY);
if (!ev.cancelable) {
} else if (ta === 'none') {
prevent = true;
} else if (ta === 'pan-x') {
prevent = dy > dx;
} else if (ta === 'pan-y') {
prevent = dx > dy;
}
if (prevent) {
ev.preventDefault();
} else {
Gestures.prevent('track');
}
}
},
add: function (node, evType, handler) {
node = wrap(node);
var recognizer = this.gestures[evType];
var deps = recognizer.deps;
var name = recognizer.name;
var gobj = node[GESTURE_KEY];
if (!gobj) {
node[GESTURE_KEY] = gobj = {};
}
for (var i = 0, dep, gd; i < deps.length; i++) {
dep = deps[i];
if (IS_TOUCH_ONLY && MOUSE_EVENTS.indexOf(dep) > -1 && dep !== 'click') {
continue;
}
gd = gobj[dep];
if (!gd) {
gobj[dep] = gd = { _count: 0 };
}
if (gd._count === 0) {
if (!window.habitlab_content_script || check_if_is_habitlab_node(node) || node == window.document) {
node.addEventListener(dep, this.handleNative);
}
}
gd[name] = (gd[name] || 0) + 1;
gd._count = (gd._count || 0) + 1;
}
if (!window.habitlab_content_script || check_if_is_habitlab_node(node)) {
node.addEventListener(evType, handler);
}
if (recognizer.touchAction) {
this.setTouchAction(node, recognizer.touchAction);
}
},
remove: function (node, evType, handler) {
node = wrap(node);
var recognizer = this.gestures[evType];
var deps = recognizer.deps;
var name = recognizer.name;
var gobj = node[GESTURE_KEY];
if (gobj) {
for (var i = 0, dep, gd; i < deps.length; i++) {
dep = deps[i];
gd = gobj[dep];
if (gd && gd[name]) {
gd[name] = (gd[name] || 1) - 1;
gd._count = (gd._count || 1) - 1;
if (gd._count === 0) {
node.removeEventListener(dep, this.handleNative);
}
}
}
}
node.removeEventListener(evType, handler);
},
register: function (recog) {
this.recognizers.push(recog);
for (var i = 0; i < recog.emits.length; i++) {
this.gestures[recog.emits[i]] = recog;
}
},
findRecognizerByEvent: function (evName) {
for (var i = 0, r; i < this.recognizers.length; i++) {
r = this.recognizers[i];
for (var j = 0, n; j < r.emits.length; j++) {
n = r.emits[j];
if (n === evName) {
return r;
}
}
}
return null;
},
setTouchAction: function (node, value) {
if (HAS_NATIVE_TA) {
node.style.touchAction = value;
}
node[TOUCH_ACTION] = value;
},
fire: function (target, type, detail) {
var ev = Polymer.Base.fire(type, detail, {
node: target,
bubbles: true,
cancelable: true
});
if (ev.defaultPrevented) {
var preventer = detail.preventer || detail.sourceEvent;
if (preventer && preventer.preventDefault) {
preventer.preventDefault();
}
}
},
prevent: function (evName) {
var recognizer = this.findRecognizerByEvent(evName);
if (recognizer.info) {
recognizer.info.prevent = true;
}
},
resetMouseCanceller: function () {
if (POINTERSTATE.mouse.mouseIgnoreJob) {
POINTERSTATE.mouse.mouseIgnoreJob.complete();
}
}
};
Gestures.register({
name: 'downup',
deps: [
'mousedown',
'touchstart',
'touchend'
],
flow: {
start: [
'mousedown',
'touchstart'
],
end: [
'mouseup',
'touchend'
]
},
emits: [
'down',
'up'
],
info: {
movefn: null,
upfn: null
},
reset: function () {
untrackDocument(this.info);
},
mousedown: function (e) {
if (!hasLeftMouseButton(e)) {
return;
}
var t = Gestures.findOriginalTarget(e);
var self = this;
var movefn = function movefn(e) {
if (!hasLeftMouseButton(e)) {
self.fire('up', t, e);
untrackDocument(self.info);
}
};
var upfn = function upfn(e) {
if (hasLeftMouseButton(e)) {
self.fire('up', t, e);
}
untrackDocument(self.info);
};
trackDocument(this.info, movefn, upfn);
this.fire('down', t, e);
},
touchstart: function (e) {
this.fire('down', Gestures.findOriginalTarget(e), e.changedTouches[0], e);
},
touchend: function (e) {
this.fire('up', Gestures.findOriginalTarget(e), e.changedTouches[0], e);
},
fire: function (type, target, event, preventer) {
Gestures.fire(target, type, {
x: event.clientX,
y: event.clientY,
sourceEvent: event,
preventer: preventer,
prevent: function (e) {
return Gestures.prevent(e);
}
});
}
});
Gestures.register({
name: 'track',
touchAction: 'none',
deps: [
'mousedown',
'touchstart',
'touchmove',
'touchend'
],
flow: {
start: [
'mousedown',
'touchstart'
],
end: [
'mouseup',
'touchend'
]
},
emits: ['track'],
info: {
x: 0,
y: 0,
state: 'start',
started: false,
moves: [],
addMove: function (move) {
if (this.moves.length > TRACK_LENGTH) {
this.moves.shift();
}
this.moves.push(move);
},
movefn: null,
upfn: null,
prevent: false
},
reset: function () {
this.info.state = 'start';
this.info.started = false;
this.info.moves = [];
this.info.x = 0;
this.info.y = 0;
this.info.prevent = false;
untrackDocument(this.info);
},
hasMovedEnough: function (x, y) {
if (this.info.prevent) {
return false;
}
if (this.info.started) {
return true;
}
var dx = Math.abs(this.info.x - x);
var dy = Math.abs(this.info.y - y);
return dx >= TRACK_DISTANCE || dy >= TRACK_DISTANCE;
},
mousedown: function (e) {
if (!hasLeftMouseButton(e)) {
return;
}
var t = Gestures.findOriginalTarget(e);
var self = this;
var movefn = function movefn(e) {
var x = e.clientX, y = e.clientY;
if (self.hasMovedEnough(x, y)) {
self.info.state = self.info.started ? e.type === 'mouseup' ? 'end' : 'track' : 'start';
if (self.info.state === 'start') {
Gestures.prevent('tap');
}
self.info.addMove({
x: x,
y: y
});
if (!hasLeftMouseButton(e)) {
self.info.state = 'end';
untrackDocument(self.info);
}
self.fire(t, e);
self.info.started = true;
}
};
var upfn = function upfn(e) {
if (self.info.started) {
movefn(e);
}
untrackDocument(self.info);
};
trackDocument(this.info, movefn, upfn);
this.info.x = e.clientX;
this.info.y = e.clientY;
},
touchstart: function (e) {
var ct = e.changedTouches[0];
this.info.x = ct.clientX;
this.info.y = ct.clientY;
},
touchmove: function (e) {
var t = Gestures.findOriginalTarget(e);
var ct = e.changedTouches[0];
var x = ct.clientX, y = ct.clientY;
if (this.hasMovedEnough(x, y)) {
if (this.info.state === 'start') {
Gestures.prevent('tap');
}
this.info.addMove({
x: x,
y: y
});
this.fire(t, ct);
this.info.state = 'track';
this.info.started = true;
}
},
touchend: function (e) {
var t = Gestures.findOriginalTarget(e);
var ct = e.changedTouches[0];
if (this.info.started) {
this.info.state = 'end';
this.info.addMove({
x: ct.clientX,
y: ct.clientY
});
this.fire(t, ct, e);
}
},
fire: function (target, touch, preventer) {
var secondlast = this.info.moves[this.info.moves.length - 2];
var lastmove = this.info.moves[this.info.moves.length - 1];
var dx = lastmove.x - this.info.x;
var dy = lastmove.y - this.info.y;
var ddx, ddy = 0;
if (secondlast) {
ddx = lastmove.x - secondlast.x;
ddy = lastmove.y - secondlast.y;
}
return Gestures.fire(target, 'track', {
state: this.info.state,
x: touch.clientX,
y: touch.clientY,
dx: dx,
dy: dy,
ddx: ddx,
ddy: ddy,
sourceEvent: touch,
preventer: preventer,
hover: function () {
return Gestures.deepTargetFind(touch.clientX, touch.clientY);
}
});
}
});
Gestures.register({
name: 'tap',
deps: [
'mousedown',
'click',
'touchstart',
'touchend'
],
flow: {
start: [
'mousedown',
'touchstart'
],
end: [
'click',
'touchend'
]
},
emits: ['tap'],
info: {
x: NaN,
y: NaN,
prevent: false
},
reset: function () {
this.info.x = NaN;
this.info.y = NaN;
this.info.prevent = false;
},
save: function (e) {
this.info.x = e.clientX;
this.info.y = e.clientY;
},
mousedown: function (e) {
if (hasLeftMouseButton(e)) {
this.save(e);
}
},
click: function (e) {
if (hasLeftMouseButton(e)) {
this.forward(e);
}
},
touchstart: function (e) {
this.save(e.changedTouches[0], e);
},
touchend: function (e) {
this.forward(e.changedTouches[0], e);
},
forward: function (e, preventer) {
var dx = Math.abs(e.clientX - this.info.x);
var dy = Math.abs(e.clientY - this.info.y);
var t = Gestures.findOriginalTarget(e);
if (window.habitlab_content_script && !check_if_is_habitlab_node(t)) {
  return;
}
if (isNaN(dx) || isNaN(dy) || dx <= TAP_DISTANCE && dy <= TAP_DISTANCE || isSyntheticClick(e)) {
if (!this.info.prevent) {
Gestures.fire(t, 'tap', {
x: e.clientX,
y: e.clientY,
sourceEvent: e,
preventer: preventer
});
}
}
}
});
var DIRECTION_MAP = {
x: 'pan-x',
y: 'pan-y',
none: 'none',
all: 'auto'
};
Polymer.Base._addFeature({
_setupGestures: function () {
this.__polymerGestures = null;
},
_listen: function (node, eventName, handler) {
if (Gestures.gestures[eventName]) {
Gestures.add(node, eventName, handler);
} else {
node.addEventListener(eventName, handler);
}
},
_unlisten: function (node, eventName, handler) {
if (Gestures.gestures[eventName]) {
Gestures.remove(node, eventName, handler);
} else {
node.removeEventListener(eventName, handler);
}
},
setScrollDirection: function (direction, node) {
node = node || this;
Gestures.setTouchAction(node, DIRECTION_MAP[direction] || 'auto');
}
});
Polymer.Gestures = Gestures;
}());(function () {
'use strict';
Polymer.Base._addFeature({
$$: function (slctr) {
return Polymer.dom(this.root).querySelector(slctr);
},
toggleClass: function (name, bool, node) {
node = node || this;
if (arguments.length == 1) {
bool = !node.classList.contains(name);
}
if (bool) {
Polymer.dom(node).classList.add(name);
} else {
Polymer.dom(node).classList.remove(name);
}
},
toggleAttribute: function (name, bool, node) {
node = node || this;
if (arguments.length == 1) {
bool = !node.hasAttribute(name);
}
if (bool) {
Polymer.dom(node).setAttribute(name, '');
} else {
Polymer.dom(node).removeAttribute(name);
}
},
classFollows: function (name, toElement, fromElement) {
if (fromElement) {
Polymer.dom(fromElement).classList.remove(name);
}
if (toElement) {
Polymer.dom(toElement).classList.add(name);
}
},
attributeFollows: function (name, toElement, fromElement) {
if (fromElement) {
Polymer.dom(fromElement).removeAttribute(name);
}
if (toElement) {
Polymer.dom(toElement).setAttribute(name, '');
}
},
getEffectiveChildNodes: function () {
return Polymer.dom(this).getEffectiveChildNodes();
},
getEffectiveChildren: function () {
var list = Polymer.dom(this).getEffectiveChildNodes();
return list.filter(function (n) {
return n.nodeType === Node.ELEMENT_NODE;
});
},
getEffectiveTextContent: function () {
var cn = this.getEffectiveChildNodes();
var tc = [];
for (var i = 0, c; c = cn[i]; i++) {
if (c.nodeType !== Node.COMMENT_NODE) {
tc.push(Polymer.dom(c).textContent);
}
}
return tc.join('');
},
queryEffectiveChildren: function (slctr) {
var e$ = Polymer.dom(this).queryDistributedElements(slctr);
return e$ && e$[0];
},
queryAllEffectiveChildren: function (slctr) {
return Polymer.dom(this).queryDistributedElements(slctr);
},
getContentChildNodes: function (slctr) {
var content = Polymer.dom(this.root).querySelector(slctr || 'content');
return content ? Polymer.dom(content).getDistributedNodes() : [];
},
getContentChildren: function (slctr) {
return this.getContentChildNodes(slctr).filter(function (n) {
return n.nodeType === Node.ELEMENT_NODE;
});
},
fire: function (type, detail, options) {
options = options || Polymer.nob;
var node = options.node || this;
detail = detail === null || detail === undefined ? {} : detail;
var bubbles = options.bubbles === undefined ? true : options.bubbles;
var cancelable = Boolean(options.cancelable);
var useCache = options._useCache;
var event = this._getEvent(type, bubbles, cancelable, useCache);
event.detail = detail;
if (useCache) {
this.__eventCache[type] = null;
}
node.dispatchEvent(event);
if (useCache) {
this.__eventCache[type] = event;
}
return event;
},
__eventCache: {},
_getEvent: function (type, bubbles, cancelable, useCache) {
var event = useCache && this.__eventCache[type];
if (!event || (event.bubbles != bubbles || event.cancelable != cancelable)) {
event = new Event(type, {
bubbles: Boolean(bubbles),
cancelable: cancelable
});
}
return event;
},
async: function (callback, waitTime) {
var self = this;
return Polymer.Async.run(function () {
callback.call(self);
}, waitTime);
},
cancelAsync: function (handle) {
Polymer.Async.cancel(handle);
},
arrayDelete: function (path, item) {
var index;
if (Array.isArray(path)) {
index = path.indexOf(item);
if (index >= 0) {
return path.splice(index, 1);
}
} else {
var arr = this._get(path);
index = arr.indexOf(item);
if (index >= 0) {
return this.splice(path, index, 1);
}
}
},
transform: function (transform, node) {
node = node || this;
node.style.webkitTransform = transform;
node.style.transform = transform;
},
translate3d: function (x, y, z, node) {
node = node || this;
this.transform('translate3d(' + x + ',' + y + ',' + z + ')', node);
},
importHref: function (href, onload, onerror, optAsync) {
var link = document.createElement('link');
link.rel = 'import';
link.href = href;
var list = Polymer.Base.importHref.imported = Polymer.Base.importHref.imported || {};
var cached = list[link.href];
var imprt = cached || link;
var self = this;
var loadListener = function (e) {
e.target.__firedLoad = true;
e.target.removeEventListener('load', loadListener);
e.target.removeEventListener('error', errorListener);
return onload.call(self, e);
};
var errorListener = function (e) {
e.target.__firedError = true;
e.target.removeEventListener('load', loadListener);
e.target.removeEventListener('error', errorListener);
return onerror.call(self, e);
};
if (onload) {
imprt.addEventListener('load', loadListener);
}
if (onerror) {
imprt.addEventListener('error', errorListener);
}
if (cached) {
if (cached.__firedLoad) {
cached.dispatchEvent(new Event('load'));
}
if (cached.__firedError) {
cached.dispatchEvent(new Event('error'));
}
} else {
list[link.href] = link;
optAsync = Boolean(optAsync);
if (optAsync) {
link.setAttribute('async', '');
}
document.head.appendChild(link);
}
return imprt;
},
create: function (tag, props) {
var elt = document.createElement(tag);
if (props) {
for (var n in props) {
elt[n] = props[n];
}
}
return elt;
},
isLightDescendant: function (node) {
return this !== node && this.contains(node) && Polymer.dom(this).getOwnerRoot() === Polymer.dom(node).getOwnerRoot();
},
isLocalDescendant: function (node) {
return this.root === Polymer.dom(node).getOwnerRoot();
}
});
if (!Polymer.Settings.useNativeCustomElements) {
var importHref = Polymer.Base.importHref;
Polymer.Base.importHref = function (href, onload, onerror, optAsync) {
CustomElements.ready = false;
var loadFn = function (e) {
CustomElements.upgradeDocumentTree(document);
CustomElements.ready = true;
if (onload) {
return onload.call(this, e);
}
};
return importHref.call(this, href, loadFn, onerror, optAsync);
};
}
}());Polymer.Bind = {
prepareModel: function (model) {
Polymer.Base.mixin(model, this._modelApi);
},
_modelApi: {
_notifyChange: function (source, event, value) {
value = value === undefined ? this[source] : value;
event = event || Polymer.CaseMap.camelToDashCase(source) + '-changed';
this.fire(event, { value: value }, {
bubbles: false,
cancelable: false,
_useCache: Polymer.Settings.eventDataCache || !Polymer.Settings.isIE
});
},
_propertySetter: function (property, value, effects, fromAbove) {
var old = this.__data__[property];
if (old !== value && (old === old || value === value)) {
this.__data__[property] = value;
if (typeof value == 'object') {
this._clearPath(property);
}
if (this._propertyChanged) {
this._propertyChanged(property, value, old);
}
if (effects) {
this._effectEffects(property, value, effects, old, fromAbove);
}
}
return old;
},
__setProperty: function (property, value, quiet, node) {
node = node || this;
var effects = node._propertyEffects && node._propertyEffects[property];
if (effects) {
node._propertySetter(property, value, effects, quiet);
} else if (node[property] !== value) {
node[property] = value;
}
},
_effectEffects: function (property, value, effects, old, fromAbove) {
for (var i = 0, l = effects.length, fx; i < l && (fx = effects[i]); i++) {
fx.fn.call(this, property, this[property], fx.effect, old, fromAbove);
}
},
_clearPath: function (path) {
for (var prop in this.__data__) {
if (Polymer.Path.isDescendant(path, prop)) {
this.__data__[prop] = undefined;
}
}
}
},
ensurePropertyEffects: function (model, property) {
if (!model._propertyEffects) {
model._propertyEffects = {};
}
var fx = model._propertyEffects[property];
if (!fx) {
fx = model._propertyEffects[property] = [];
}
return fx;
},
addPropertyEffect: function (model, property, kind, effect) {
var fx = this.ensurePropertyEffects(model, property);
var propEffect = {
kind: kind,
effect: effect,
fn: Polymer.Bind['_' + kind + 'Effect']
};
fx.push(propEffect);
return propEffect;
},
createBindings: function (model) {
var fx$ = model._propertyEffects;
if (fx$) {
for (var n in fx$) {
var fx = fx$[n];
fx.sort(this._sortPropertyEffects);
this._createAccessors(model, n, fx);
}
}
},
_sortPropertyEffects: function () {
var EFFECT_ORDER = {
'compute': 0,
'annotation': 1,
'annotatedComputation': 2,
'reflect': 3,
'notify': 4,
'observer': 5,
'complexObserver': 6,
'function': 7
};
return function (a, b) {
return EFFECT_ORDER[a.kind] - EFFECT_ORDER[b.kind];
};
}(),
_createAccessors: function (model, property, effects) {
var defun = {
get: function () {
return this.__data__[property];
}
};
var setter = function (value) {
this._propertySetter(property, value, effects);
};
var info = model.getPropertyInfo && model.getPropertyInfo(property);
if (info && info.readOnly) {
if (!info.computed) {
model['_set' + this.upper(property)] = setter;
}
} else {
defun.set = setter;
}
Object.defineProperty(model, property, defun);
},
upper: function (name) {
return name[0].toUpperCase() + name.substring(1);
},
_addAnnotatedListener: function (model, index, property, path, event, negated) {
if (!model._bindListeners) {
model._bindListeners = [];
}
var fn = this._notedListenerFactory(property, path, Polymer.Path.isDeep(path), negated);
var eventName = event || Polymer.CaseMap.camelToDashCase(property) + '-changed';
model._bindListeners.push({
index: index,
property: property,
path: path,
changedFn: fn,
event: eventName
});
},
_isEventBogus: function (e, target) {
return e.path && e.path[0] !== target;
},
_notedListenerFactory: function (property, path, isStructured, negated) {
return function (target, value, targetPath) {
if (targetPath) {
var newPath = Polymer.Path.translate(property, path, targetPath);
this._notifyPath(newPath, value);
} else {
value = target[property];
if (negated) {
value = !value;
}
if (!isStructured) {
this[path] = value;
} else {
if (this.__data__[path] != value) {
this.set(path, value);
}
}
}
};
},
prepareInstance: function (inst) {
inst.__data__ = Object.create(null);
},
setupBindListeners: function (inst) {
var b$ = inst._bindListeners;
for (var i = 0, l = b$.length, info; i < l && (info = b$[i]); i++) {
var node = inst._nodes[info.index];
this._addNotifyListener(node, inst, info.event, info.changedFn);
}
},
_addNotifyListener: function (element, context, event, changedFn) {
element.addEventListener(event, function (e) {
return context._notifyListener(changedFn, e);
});
}
};Polymer.Base.mixin(Polymer.Bind, {
_shouldAddListener: function (effect) {
return effect.name && effect.kind != 'attribute' && effect.kind != 'text' && !effect.isCompound && effect.parts[0].mode === '{';
},
_annotationEffect: function (source, value, effect) {
if (source != effect.value) {
value = this._get(effect.value);
this.__data__[effect.value] = value;
}
this._applyEffectValue(effect, value);
},
_reflectEffect: function (source, value, effect) {
this.reflectPropertyToAttribute(source, effect.attribute, value);
},
_notifyEffect: function (source, value, effect, old, fromAbove) {
if (!fromAbove) {
this._notifyChange(source, effect.event, value);
}
},
_functionEffect: function (source, value, fn, old, fromAbove) {
fn.call(this, source, value, old, fromAbove);
},
_observerEffect: function (source, value, effect, old) {
var fn = this[effect.method];
if (fn) {
fn.call(this, value, old);
} else {
this._warn(this._logf('_observerEffect', 'observer method `' + effect.method + '` not defined'));
}
},
_complexObserverEffect: function (source, value, effect) {
var fn = this[effect.method];
if (fn) {
var args = Polymer.Bind._marshalArgs(this.__data__, effect, source, value);
if (args) {
fn.apply(this, args);
}
} else if (effect.dynamicFn) {
} else {
this._warn(this._logf('_complexObserverEffect', 'observer method `' + effect.method + '` not defined'));
}
},
_computeEffect: function (source, value, effect) {
var fn = this[effect.method];
if (fn) {
var args = Polymer.Bind._marshalArgs(this.__data__, effect, source, value);
if (args) {
var computedvalue = fn.apply(this, args);
this.__setProperty(effect.name, computedvalue);
}
} else if (effect.dynamicFn) {
} else {
this._warn(this._logf('_computeEffect', 'compute method `' + effect.method + '` not defined'));
}
},
_annotatedComputationEffect: function (source, value, effect) {
var computedHost = this._rootDataHost || this;
var fn = computedHost[effect.method];
if (fn) {
var args = Polymer.Bind._marshalArgs(this.__data__, effect, source, value);
if (args) {
var computedvalue = fn.apply(computedHost, args);
this._applyEffectValue(effect, computedvalue);
}
} else if (effect.dynamicFn) {
} else {
computedHost._warn(computedHost._logf('_annotatedComputationEffect', 'compute method `' + effect.method + '` not defined'));
}
},
_marshalArgs: function (model, effect, path, value) {
var values = [];
var args = effect.args;
var bailoutEarly = args.length > 1 || effect.dynamicFn;
for (var i = 0, l = args.length; i < l; i++) {
var arg = args[i];
var name = arg.name;
var v;
if (arg.literal) {
v = arg.value;
} else if (path === name) {
v = value;
} else {
v = model[name];
if (v === undefined && arg.structured) {
v = Polymer.Base._get(name, model);
}
}
if (bailoutEarly && v === undefined) {
return;
}
if (arg.wildcard) {
var matches = Polymer.Path.isAncestor(path, name);
values[i] = {
path: matches ? path : name,
value: matches ? value : v,
base: v
};
} else {
values[i] = v;
}
}
return values;
}
});Polymer.Base._addFeature({
_addPropertyEffect: function (property, kind, effect) {
var prop = Polymer.Bind.addPropertyEffect(this, property, kind, effect);
prop.pathFn = this['_' + prop.kind + 'PathEffect'];
},
_prepEffects: function () {
Polymer.Bind.prepareModel(this);
this._addAnnotationEffects(this._notes);
},
_prepBindings: function () {
Polymer.Bind.createBindings(this);
},
_addPropertyEffects: function (properties) {
if (properties) {
for (var p in properties) {
var prop = properties[p];
if (prop.observer) {
this._addObserverEffect(p, prop.observer);
}
if (prop.computed) {
prop.readOnly = true;
this._addComputedEffect(p, prop.computed);
}
if (prop.notify) {
this._addPropertyEffect(p, 'notify', { event: Polymer.CaseMap.camelToDashCase(p) + '-changed' });
}
if (prop.reflectToAttribute) {
var attr = Polymer.CaseMap.camelToDashCase(p);
if (attr[0] === '-') {
this._warn(this._logf('_addPropertyEffects', 'Property ' + p + ' cannot be reflected to attribute ' + attr + ' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'));
} else {
this._addPropertyEffect(p, 'reflect', { attribute: attr });
}
}
if (prop.readOnly) {
Polymer.Bind.ensurePropertyEffects(this, p);
}
}
}
},
_addComputedEffect: function (name, expression) {
var sig = this._parseMethod(expression);
var dynamicFn = sig.dynamicFn;
for (var i = 0, arg; i < sig.args.length && (arg = sig.args[i]); i++) {
this._addPropertyEffect(arg.model, 'compute', {
method: sig.method,
args: sig.args,
trigger: arg,
name: name,
dynamicFn: dynamicFn
});
}
if (dynamicFn) {
this._addPropertyEffect(sig.method, 'compute', {
method: sig.method,
args: sig.args,
trigger: null,
name: name,
dynamicFn: dynamicFn
});
}
},
_addObserverEffect: function (property, observer) {
this._addPropertyEffect(property, 'observer', {
method: observer,
property: property
});
},
_addComplexObserverEffects: function (observers) {
if (observers) {
for (var i = 0, o; i < observers.length && (o = observers[i]); i++) {
this._addComplexObserverEffect(o);
}
}
},
_addComplexObserverEffect: function (observer) {
var sig = this._parseMethod(observer);
if (!sig) {
throw new Error('Malformed observer expression \'' + observer + '\'');
}
var dynamicFn = sig.dynamicFn;
for (var i = 0, arg; i < sig.args.length && (arg = sig.args[i]); i++) {
this._addPropertyEffect(arg.model, 'complexObserver', {
method: sig.method,
args: sig.args,
trigger: arg,
dynamicFn: dynamicFn
});
}
if (dynamicFn) {
this._addPropertyEffect(sig.method, 'complexObserver', {
method: sig.method,
args: sig.args,
trigger: null,
dynamicFn: dynamicFn
});
}
},
_addAnnotationEffects: function (notes) {
for (var i = 0, note; i < notes.length && (note = notes[i]); i++) {
var b$ = note.bindings;
for (var j = 0, binding; j < b$.length && (binding = b$[j]); j++) {
this._addAnnotationEffect(binding, i);
}
}
},
_addAnnotationEffect: function (note, index) {
if (Polymer.Bind._shouldAddListener(note)) {
Polymer.Bind._addAnnotatedListener(this, index, note.name, note.parts[0].value, note.parts[0].event, note.parts[0].negate);
}
for (var i = 0; i < note.parts.length; i++) {
var part = note.parts[i];
if (part.signature) {
this._addAnnotatedComputationEffect(note, part, index);
} else if (!part.literal) {
if (note.kind === 'attribute' && note.name[0] === '-') {
this._warn(this._logf('_addAnnotationEffect', 'Cannot set attribute ' + note.name + ' because "-" is not a valid attribute starting character'));
} else {
this._addPropertyEffect(part.model, 'annotation', {
kind: note.kind,
index: index,
name: note.name,
propertyName: note.propertyName,
value: part.value,
isCompound: note.isCompound,
compoundIndex: part.compoundIndex,
event: part.event,
customEvent: part.customEvent,
negate: part.negate
});
}
}
}
},
_addAnnotatedComputationEffect: function (note, part, index) {
var sig = part.signature;
if (sig.static) {
this.__addAnnotatedComputationEffect('__static__', index, note, part, null);
} else {
for (var i = 0, arg; i < sig.args.length && (arg = sig.args[i]); i++) {
if (!arg.literal) {
this.__addAnnotatedComputationEffect(arg.model, index, note, part, arg);
}
}
if (sig.dynamicFn) {
this.__addAnnotatedComputationEffect(sig.method, index, note, part, null);
}
}
},
__addAnnotatedComputationEffect: function (property, index, note, part, trigger) {
this._addPropertyEffect(property, 'annotatedComputation', {
index: index,
isCompound: note.isCompound,
compoundIndex: part.compoundIndex,
kind: note.kind,
name: note.name,
negate: part.negate,
method: part.signature.method,
args: part.signature.args,
trigger: trigger,
dynamicFn: part.signature.dynamicFn
});
},
_parseMethod: function (expression) {
var m = expression.match(/([^\s]+?)\(([\s\S]*)\)/);
if (m) {
var sig = {
method: m[1],
static: true
};
if (this.getPropertyInfo(sig.method) !== Polymer.nob) {
sig.static = false;
sig.dynamicFn = true;
}
if (m[2].trim()) {
var args = m[2].replace(/\\,/g, '&comma;').split(',');
return this._parseArgs(args, sig);
} else {
sig.args = Polymer.nar;
return sig;
}
}
},
_parseArgs: function (argList, sig) {
sig.args = argList.map(function (rawArg) {
var arg = this._parseArg(rawArg);
if (!arg.literal) {
sig.static = false;
}
return arg;
}, this);
return sig;
},
_parseArg: function (rawArg) {
var arg = rawArg.trim().replace(/&comma;/g, ',').replace(/\\(.)/g, '$1');
var a = { name: arg };
var fc = arg[0];
if (fc === '-') {
fc = arg[1];
}
if (fc >= '0' && fc <= '9') {
fc = '#';
}
switch (fc) {
case '\'':
case '"':
a.value = arg.slice(1, -1);
a.literal = true;
break;
case '#':
a.value = Number(arg);
a.literal = true;
break;
}
if (!a.literal) {
a.model = Polymer.Path.root(arg);
a.structured = Polymer.Path.isDeep(arg);
if (a.structured) {
a.wildcard = arg.slice(-2) == '.*';
if (a.wildcard) {
a.name = arg.slice(0, -2);
}
}
}
return a;
},
_marshalInstanceEffects: function () {
Polymer.Bind.prepareInstance(this);
if (this._bindListeners) {
Polymer.Bind.setupBindListeners(this);
}
},
_applyEffectValue: function (info, value) {
var node = this._nodes[info.index];
var property = info.name;
value = this._computeFinalAnnotationValue(node, property, value, info);
if (info.kind == 'attribute') {
this.serializeValueToAttribute(value, property, node);
} else {
var pinfo = node._propertyInfo && node._propertyInfo[property];
if (pinfo && pinfo.readOnly) {
return;
}
this.__setProperty(property, value, Polymer.Settings.suppressBindingNotifications, node);
}
},
_computeFinalAnnotationValue: function (node, property, value, info) {
if (info.negate) {
value = !value;
}
if (info.isCompound) {
var storage = node.__compoundStorage__[property];
storage[info.compoundIndex] = value;
value = storage.join('');
}
if (info.kind !== 'attribute') {
if (property === 'className') {
value = this._scopeElementClass(node, value);
}
if (property === 'textContent' || node.localName == 'input' && property == 'value') {
value = value == undefined ? '' : value;
}
}
return value;
},
_executeStaticEffects: function () {
if (this._propertyEffects && this._propertyEffects.__static__) {
this._effectEffects('__static__', null, this._propertyEffects.__static__);
}
}
});(function () {
var usePolyfillProto = Polymer.Settings.usePolyfillProto;
var avoidInstanceProperties = Boolean(Object.getOwnPropertyDescriptor(document.documentElement, 'properties'));
Polymer.Base._addFeature({
_setupConfigure: function (initialConfig) {
this._config = {};
this._handlers = [];
this._aboveConfig = null;
if (initialConfig) {
for (var i in initialConfig) {
if (initialConfig[i] !== undefined) {
this._config[i] = initialConfig[i];
}
}
}
},
_marshalAttributes: function () {
this._takeAttributesToModel(this._config);
},
_attributeChangedImpl: function (name) {
var model = this._clientsReadied ? this : this._config;
this._setAttributeToProperty(model, name);
},
_configValue: function (name, value) {
var info = this._propertyInfo[name];
if (!info || !info.readOnly) {
this._config[name] = value;
}
},
_beforeClientsReady: function () {
this._configure();
},
_configure: function () {
this._configureAnnotationReferences();
this._configureInstanceProperties();
this._aboveConfig = this.mixin({}, this._config);
var config = {};
for (var i = 0; i < this.behaviors.length; i++) {
this._configureProperties(this.behaviors[i].properties, config);
}
this._configureProperties(avoidInstanceProperties ? this.__proto__.properties : this.properties, config);
this.mixin(config, this._aboveConfig);
this._config = config;
if (this._clients && this._clients.length) {
this._distributeConfig(this._config);
}
},
_configureInstanceProperties: function () {
for (var i in this._propertyEffects) {
if (!usePolyfillProto && this.hasOwnProperty(i)) {
this._configValue(i, this[i]);
delete this[i];
}
}
},
_configureProperties: function (properties, config) {
for (var i in properties) {
var c = properties[i];
if (c.value !== undefined) {
var value = c.value;
if (typeof value == 'function') {
value = value.call(this, this._config);
}
config[i] = value;
}
}
},
_distributeConfig: function (config) {
var fx$ = this._propertyEffects;
if (fx$) {
for (var p in config) {
var fx = fx$[p];
if (fx) {
for (var i = 0, l = fx.length, x; i < l && (x = fx[i]); i++) {
if (x.kind === 'annotation') {
var node = this._nodes[x.effect.index];
var name = x.effect.propertyName;
var isAttr = x.effect.kind == 'attribute';
var hasEffect = node._propertyEffects && node._propertyEffects[name];
if (node._configValue && (hasEffect || !isAttr)) {
var value = p === x.effect.value ? config[p] : this._get(x.effect.value, config);
value = this._computeFinalAnnotationValue(node, name, value, x.effect);
if (isAttr) {
value = node.deserialize(this.serialize(value), node._propertyInfo[name].type);
}
node._configValue(name, value);
}
}
}
}
}
}
},
_afterClientsReady: function () {
this.importPath = this._importPath;
this.rootPath = Polymer.rootPath;
this._executeStaticEffects();
this._applyConfig(this._config, this._aboveConfig);
this._flushHandlers();
},
_applyConfig: function (config, aboveConfig) {
for (var n in config) {
if (this[n] === undefined) {
this.__setProperty(n, config[n], n in aboveConfig);
}
}
},
_notifyListener: function (fn, e) {
if (!Polymer.Bind._isEventBogus(e, e.target)) {
var value, path;
if (e.detail) {
value = e.detail.value;
path = e.detail.path;
}
if (!this._clientsReadied) {
this._queueHandler([
fn,
e.target,
value,
path
]);
} else {
return fn.call(this, e.target, value, path);
}
}
},
_queueHandler: function (args) {
this._handlers.push(args);
},
_flushHandlers: function () {
var h$ = this._handlers;
for (var i = 0, l = h$.length, h; i < l && (h = h$[i]); i++) {
h[0].call(this, h[1], h[2], h[3]);
}
this._handlers = [];
}
});
}());(function () {
'use strict';
var Path = Polymer.Path;
Polymer.Base._addFeature({
notifyPath: function (path, value, fromAbove) {
var info = {};
var v = this._get(path, this, info);
if (arguments.length === 1) {
value = v;
}
if (info.path) {
this._notifyPath(info.path, value, fromAbove);
}
},
_notifyPath: function (path, value, fromAbove) {
var old = this._propertySetter(path, value);
if (old !== value && (old === old || value === value)) {
this._pathEffector(path, value);
if (!fromAbove) {
this._notifyPathUp(path, value);
}
return true;
}
},
_getPathParts: function (path) {
if (Array.isArray(path)) {
var parts = [];
for (var i = 0; i < path.length; i++) {
var args = path[i].toString().split('.');
for (var j = 0; j < args.length; j++) {
parts.push(args[j]);
}
}
return parts;
} else {
return path.toString().split('.');
}
},
set: function (path, value, root) {
var prop = root || this;
var parts = this._getPathParts(path);
var array;
var last = parts[parts.length - 1];
if (parts.length > 1) {
for (var i = 0; i < parts.length - 1; i++) {
var part = parts[i];
if (array && part[0] == '#') {
prop = Polymer.Collection.get(array).getItem(part);
} else {
prop = prop[part];
if (array && parseInt(part, 10) == part) {
parts[i] = Polymer.Collection.get(array).getKey(prop);
}
}
if (!prop) {
return;
}
array = Array.isArray(prop) ? prop : null;
}
if (array) {
var coll = Polymer.Collection.get(array);
var old, key;
if (last[0] == '#') {
key = last;
old = coll.getItem(key);
last = array.indexOf(old);
coll.setItem(key, value);
} else if (parseInt(last, 10) == last) {
old = prop[last];
key = coll.getKey(old);
parts[i] = key;
coll.setItem(key, value);
}
}
prop[last] = value;
if (!root) {
this._notifyPath(parts.join('.'), value);
}
} else {
prop[path] = value;
}
},
get: function (path, root) {
return this._get(path, root);
},
_get: function (path, root, info) {
var prop = root || this;
var parts = this._getPathParts(path);
var array;
for (var i = 0; i < parts.length; i++) {
if (!prop) {
return;
}
var part = parts[i];
if (array && part[0] == '#') {
prop = Polymer.Collection.get(array).getItem(part);
} else {
prop = prop[part];
if (info && array && parseInt(part, 10) == part) {
parts[i] = Polymer.Collection.get(array).getKey(prop);
}
}
array = Array.isArray(prop) ? prop : null;
}
if (info) {
info.path = parts.join('.');
}
return prop;
},
_pathEffector: function (path, value) {
var model = Path.root(path);
var fx$ = this._propertyEffects && this._propertyEffects[model];
if (fx$) {
for (var i = 0, fx; i < fx$.length && (fx = fx$[i]); i++) {
var fxFn = fx.pathFn;
if (fxFn) {
fxFn.call(this, path, value, fx.effect);
}
}
}
if (this._boundPaths) {
this._notifyBoundPaths(path, value);
}
},
_annotationPathEffect: function (path, value, effect) {
if (Path.matches(effect.value, false, path)) {
Polymer.Bind._annotationEffect.call(this, path, value, effect);
} else if (!effect.negate && Path.isDescendant(effect.value, path)) {
var node = this._nodes[effect.index];
if (node && node._notifyPath) {
var newPath = Path.translate(effect.value, effect.name, path);
node._notifyPath(newPath, value, true);
}
}
},
_complexObserverPathEffect: function (path, value, effect) {
if (Path.matches(effect.trigger.name, effect.trigger.wildcard, path)) {
Polymer.Bind._complexObserverEffect.call(this, path, value, effect);
}
},
_computePathEffect: function (path, value, effect) {
if (Path.matches(effect.trigger.name, effect.trigger.wildcard, path)) {
Polymer.Bind._computeEffect.call(this, path, value, effect);
}
},
_annotatedComputationPathEffect: function (path, value, effect) {
if (Path.matches(effect.trigger.name, effect.trigger.wildcard, path)) {
Polymer.Bind._annotatedComputationEffect.call(this, path, value, effect);
}
},
linkPaths: function (to, from) {
this._boundPaths = this._boundPaths || {};
if (from) {
this._boundPaths[to] = from;
} else {
this.unlinkPaths(to);
}
},
unlinkPaths: function (path) {
if (this._boundPaths) {
delete this._boundPaths[path];
}
},
_notifyBoundPaths: function (path, value) {
for (var a in this._boundPaths) {
var b = this._boundPaths[a];
if (Path.isDescendant(a, path)) {
this._notifyPath(Path.translate(a, b, path), value);
} else if (Path.isDescendant(b, path)) {
this._notifyPath(Path.translate(b, a, path), value);
}
}
},
_notifyPathUp: function (path, value) {
var rootName = Path.root(path);
var dashCaseName = Polymer.CaseMap.camelToDashCase(rootName);
var eventName = dashCaseName + this._EVENT_CHANGED;
this.fire(eventName, {
path: path,
value: value
}, {
bubbles: false,
_useCache: Polymer.Settings.eventDataCache || !Polymer.Settings.isIE
});
},
_EVENT_CHANGED: '-changed',
notifySplices: function (path, splices) {
var info = {};
var array = this._get(path, this, info);
this._notifySplices(array, info.path, splices);
},
_notifySplices: function (array, path, splices) {
var change = {
keySplices: Polymer.Collection.applySplices(array, splices),
indexSplices: splices
};
var splicesPath = path + '.splices';
this._notifyPath(splicesPath, change);
this._notifyPath(path + '.length', array.length);
this.__data__[splicesPath] = {
keySplices: null,
indexSplices: null
};
},
_notifySplice: function (array, path, index, added, removed) {
this._notifySplices(array, path, [{
index: index,
addedCount: added,
removed: removed,
object: array,
type: 'splice'
}]);
},
push: function (path) {
var info = {};
var array = this._get(path, this, info);
var args = Array.prototype.slice.call(arguments, 1);
var len = array.length;
var ret = array.push.apply(array, args);
if (args.length) {
this._notifySplice(array, info.path, len, args.length, []);
}
return ret;
},
pop: function (path) {
var info = {};
var array = this._get(path, this, info);
var hadLength = Boolean(array.length);
var args = Array.prototype.slice.call(arguments, 1);
var ret = array.pop.apply(array, args);
if (hadLength) {
this._notifySplice(array, info.path, array.length, 0, [ret]);
}
return ret;
},
splice: function (path, start) {
var info = {};
var array = this._get(path, this, info);
if (start < 0) {
start = array.length - Math.floor(-start);
} else {
start = Math.floor(start);
}
if (!start) {
start = 0;
}
var args = Array.prototype.slice.call(arguments, 1);
var ret = array.splice.apply(array, args);
var addedCount = Math.max(args.length - 2, 0);
if (addedCount || ret.length) {
this._notifySplice(array, info.path, start, addedCount, ret);
}
return ret;
},
shift: function (path) {
var info = {};
var array = this._get(path, this, info);
var hadLength = Boolean(array.length);
var args = Array.prototype.slice.call(arguments, 1);
var ret = array.shift.apply(array, args);
if (hadLength) {
this._notifySplice(array, info.path, 0, 0, [ret]);
}
return ret;
},
unshift: function (path) {
var info = {};
var array = this._get(path, this, info);
var args = Array.prototype.slice.call(arguments, 1);
var ret = array.unshift.apply(array, args);
if (args.length) {
this._notifySplice(array, info.path, 0, args.length, []);
}
return ret;
},
prepareModelNotifyPath: function (model) {
this.mixin(model, {
fire: Polymer.Base.fire,
_getEvent: Polymer.Base._getEvent,
__eventCache: Polymer.Base.__eventCache,
notifyPath: Polymer.Base.notifyPath,
_get: Polymer.Base._get,
_EVENT_CHANGED: Polymer.Base._EVENT_CHANGED,
_notifyPath: Polymer.Base._notifyPath,
_notifyPathUp: Polymer.Base._notifyPathUp,
_pathEffector: Polymer.Base._pathEffector,
_annotationPathEffect: Polymer.Base._annotationPathEffect,
_complexObserverPathEffect: Polymer.Base._complexObserverPathEffect,
_annotatedComputationPathEffect: Polymer.Base._annotatedComputationPathEffect,
_computePathEffect: Polymer.Base._computePathEffect,
_notifyBoundPaths: Polymer.Base._notifyBoundPaths,
_getPathParts: Polymer.Base._getPathParts
});
}
});
}());Polymer.Base._addFeature({
resolveUrl: function (url) {
return Polymer.ResolveUrl.resolveUrl(url, this._importPath);
}
});Polymer.CssParse = function () {
return {
parse: function (text) {
text = this._clean(text);
return this._parseCss(this._lex(text), text);
},
_clean: function (cssText) {
return cssText.replace(this._rx.comments, '').replace(this._rx.port, '');
},
_lex: function (text) {
var root = {
start: 0,
end: text.length
};
var n = root;
for (var i = 0, l = text.length; i < l; i++) {
switch (text[i]) {
case this.OPEN_BRACE:
if (!n.rules) {
n.rules = [];
}
var p = n;
var previous = p.rules[p.rules.length - 1];
n = {
start: i + 1,
parent: p,
previous: previous
};
p.rules.push(n);
break;
case this.CLOSE_BRACE:
n.end = i + 1;
n = n.parent || root;
break;
}
}
return root;
},
_parseCss: function (node, text) {
var t = text.substring(node.start, node.end - 1);
node.parsedCssText = node.cssText = t.trim();
if (node.parent) {
var ss = node.previous ? node.previous.end : node.parent.start;
t = text.substring(ss, node.start - 1);
t = this._expandUnicodeEscapes(t);
t = t.replace(this._rx.multipleSpaces, ' ');
t = t.substring(t.lastIndexOf(';') + 1);
var s = node.parsedSelector = node.selector = t.trim();
node.atRule = s.indexOf(this.AT_START) === 0;
if (node.atRule) {
if (s.indexOf(this.MEDIA_START) === 0) {
node.type = this.types.MEDIA_RULE;
} else if (s.match(this._rx.keyframesRule)) {
node.type = this.types.KEYFRAMES_RULE;
node.keyframesName = node.selector.split(this._rx.multipleSpaces).pop();
}
} else {
if (s.indexOf(this.VAR_START) === 0) {
node.type = this.types.MIXIN_RULE;
} else {
node.type = this.types.STYLE_RULE;
}
}
}
var r$ = node.rules;
if (r$) {
for (var i = 0, l = r$.length, r; i < l && (r = r$[i]); i++) {
this._parseCss(r, text);
}
}
return node;
},
_expandUnicodeEscapes: function (s) {
return s.replace(/\\([0-9a-f]{1,6})\s/gi, function () {
var code = arguments[1], repeat = 6 - code.length;
while (repeat--) {
code = '0' + code;
}
return '\\' + code;
});
},
stringify: function (node, preserveProperties, text) {
text = text || '';
var cssText = '';
if (node.cssText || node.rules) {
var r$ = node.rules;
if (r$ && !this._hasMixinRules(r$)) {
for (var i = 0, l = r$.length, r; i < l && (r = r$[i]); i++) {
cssText = this.stringify(r, preserveProperties, cssText);
}
} else {
cssText = preserveProperties ? node.cssText : this.removeCustomProps(node.cssText);
cssText = cssText.trim();
if (cssText) {
cssText = '  ' + cssText + '\n';
}
}
}
if (cssText) {
if (node.selector) {
text += node.selector + ' ' + this.OPEN_BRACE + '\n';
}
text += cssText;
if (node.selector) {
text += this.CLOSE_BRACE + '\n\n';
}
}
return text;
},
_hasMixinRules: function (rules) {
return rules[0].selector.indexOf(this.VAR_START) === 0;
},
removeCustomProps: function (cssText) {
cssText = this.removeCustomPropAssignment(cssText);
return this.removeCustomPropApply(cssText);
},
removeCustomPropAssignment: function (cssText) {
return cssText.replace(this._rx.customProp, '').replace(this._rx.mixinProp, '');
},
removeCustomPropApply: function (cssText) {
return cssText.replace(this._rx.mixinApply, '').replace(this._rx.varApply, '');
},
types: {
STYLE_RULE: 1,
KEYFRAMES_RULE: 7,
MEDIA_RULE: 4,
MIXIN_RULE: 1000
},
OPEN_BRACE: '{',
CLOSE_BRACE: '}',
_rx: {
comments: /\/\*[^*]*\*+([^\/*][^*]*\*+)*\//gim,
port: /@import[^;]*;/gim,
customProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
mixinProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
mixinApply: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
varApply: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
keyframesRule: /^@[^\s]*keyframes/,
multipleSpaces: /\s+/g
},
VAR_START: '--',
MEDIA_START: '@media',
AT_START: '@'
};
}();Polymer.StyleUtil = function () {
var settings = Polymer.Settings;
return {
NATIVE_VARIABLES: Polymer.Settings.useNativeCSSProperties,
MODULE_STYLES_SELECTOR: 'style, link[rel=import][type~=css], template',
INCLUDE_ATTR: 'include',
toCssText: function (rules, callback) {
if (typeof rules === 'string') {
rules = this.parser.parse(rules);
}
if (callback) {
this.forEachRule(rules, callback);
}
return this.parser.stringify(rules, this.NATIVE_VARIABLES);
},
forRulesInStyles: function (styles, styleRuleCallback, keyframesRuleCallback) {
if (styles) {
for (var i = 0, l = styles.length, s; i < l && (s = styles[i]); i++) {
this.forEachRuleInStyle(s, styleRuleCallback, keyframesRuleCallback);
}
}
},
forActiveRulesInStyles: function (styles, styleRuleCallback, keyframesRuleCallback) {
if (styles) {
for (var i = 0, l = styles.length, s; i < l && (s = styles[i]); i++) {
this.forEachRuleInStyle(s, styleRuleCallback, keyframesRuleCallback, true);
}
}
},
rulesForStyle: function (style) {
if (!style.__cssRules && style.textContent) {
style.__cssRules = this.parser.parse(style.textContent);
}
return style.__cssRules;
},
isKeyframesSelector: function (rule) {
return rule.parent && rule.parent.type === this.ruleTypes.KEYFRAMES_RULE;
},
forEachRuleInStyle: function (style, styleRuleCallback, keyframesRuleCallback, onlyActiveRules) {
var rules = this.rulesForStyle(style);
var styleCallback, keyframeCallback;
if (styleRuleCallback) {
styleCallback = function (rule) {
styleRuleCallback(rule, style);
};
}
if (keyframesRuleCallback) {
keyframeCallback = function (rule) {
keyframesRuleCallback(rule, style);
};
}
this.forEachRule(rules, styleCallback, keyframeCallback, onlyActiveRules);
},
forEachRule: function (node, styleRuleCallback, keyframesRuleCallback, onlyActiveRules) {
if (!node) {
return;
}
var skipRules = false;
if (onlyActiveRules) {
if (node.type === this.ruleTypes.MEDIA_RULE) {
var matchMedia = node.selector.match(this.rx.MEDIA_MATCH);
if (matchMedia) {
if (!window.matchMedia(matchMedia[1]).matches) {
skipRules = true;
}
}
}
}
if (node.type === this.ruleTypes.STYLE_RULE) {
styleRuleCallback(node);
} else if (keyframesRuleCallback && node.type === this.ruleTypes.KEYFRAMES_RULE) {
keyframesRuleCallback(node);
} else if (node.type === this.ruleTypes.MIXIN_RULE) {
skipRules = true;
}
var r$ = node.rules;
if (r$ && !skipRules) {
for (var i = 0, l = r$.length, r; i < l && (r = r$[i]); i++) {
this.forEachRule(r, styleRuleCallback, keyframesRuleCallback, onlyActiveRules);
}
}
},
applyCss: function (cssText, moniker, target, contextNode) {
var style = this.createScopeStyle(cssText, moniker);
return this.applyStyle(style, target, contextNode);
},
applyStyle: function (style, target, contextNode) {
target = target || document.head;
var after = contextNode && contextNode.nextSibling || target.firstChild;
this.__lastHeadApplyNode = style;
return target.insertBefore(style, after);
},
createScopeStyle: function (cssText, moniker) {
var style = document.createElement('style');
if (moniker) {
style.setAttribute('scope', moniker);
}
style.textContent = cssText;
return style;
},
__lastHeadApplyNode: null,
applyStylePlaceHolder: function (moniker) {
var placeHolder = document.createComment(' Shady DOM styles for ' + moniker + ' ');
var after = this.__lastHeadApplyNode ? this.__lastHeadApplyNode.nextSibling : null;
var scope = document.head;
scope.insertBefore(placeHolder, after || scope.firstChild);
this.__lastHeadApplyNode = placeHolder;
return placeHolder;
},
cssFromModules: function (moduleIds, warnIfNotFound) {
var modules = moduleIds.trim().split(' ');
var cssText = '';
for (var i = 0; i < modules.length; i++) {
cssText += this.cssFromModule(modules[i], warnIfNotFound);
}
return cssText;
},
cssFromModule: function (moduleId, warnIfNotFound) {
var m = Polymer.DomModule.import(moduleId);
if (m && !m._cssText) {
m._cssText = this.cssFromElement(m);
}
if (!m && warnIfNotFound) {
console.warn('Could not find style data in module named', moduleId);
}
return m && m._cssText || '';
},
cssFromElement: function (element) {
var cssText = '';
var content = element.content || element;
var e$ = Polymer.TreeApi.arrayCopy(content.querySelectorAll(this.MODULE_STYLES_SELECTOR));
for (var i = 0, e; i < e$.length; i++) {
e = e$[i];
if (e.localName === 'template') {
if (!e.hasAttribute('preserve-content')) {
cssText += this.cssFromElement(e);
}
} else {
if (e.localName === 'style') {
var include = e.getAttribute(this.INCLUDE_ATTR);
if (include) {
cssText += this.cssFromModules(include, true);
}
e = e.__appliedElement || e;
e.parentNode.removeChild(e);
cssText += this.resolveCss(e.textContent, element.ownerDocument);
} else if (e.import && e.import.body) {
cssText += this.resolveCss(e.import.body.textContent, e.import);
}
}
}
return cssText;
},
styleIncludesToTemplate: function (targetTemplate) {
var styles = targetTemplate.content.querySelectorAll('style[include]');
for (var i = 0, s; i < styles.length; i++) {
s = styles[i];
s.parentNode.insertBefore(this._includesToFragment(s.getAttribute('include')), s);
}
},
_includesToFragment: function (styleIncludes) {
var includeArray = styleIncludes.trim().split(' ');
var frag = document.createDocumentFragment();
for (var i = 0; i < includeArray.length; i++) {
var t = Polymer.DomModule.import(includeArray[i], 'template');
if (t) {
this._addStylesToFragment(frag, t.content);
}
}
return frag;
},
_addStylesToFragment: function (frag, source) {
var s$ = source.querySelectorAll('style');
for (var i = 0, s; i < s$.length; i++) {
s = s$[i];
var include = s.getAttribute('include');
if (include) {
frag.appendChild(this._includesToFragment(include));
}
if (s.textContent) {
frag.appendChild(s.cloneNode(true));
}
}
},
isTargetedBuild: function (buildType) {
return settings.useNativeShadow ? buildType === 'shadow' : buildType === 'shady';
},
cssBuildTypeForModule: function (module) {
var dm = Polymer.DomModule.import(module);
if (dm) {
return this.getCssBuildType(dm);
}
},
getCssBuildType: function (element) {
return element.getAttribute('css-build');
},
_findMatchingParen: function (text, start) {
var level = 0;
for (var i = start, l = text.length; i < l; i++) {
switch (text[i]) {
case '(':
level++;
break;
case ')':
if (--level === 0) {
return i;
}
break;
}
}
return -1;
},
processVariableAndFallback: function (str, callback) {
var start = str.indexOf('var(');
if (start === -1) {
return callback(str, '', '', '');
}
var end = this._findMatchingParen(str, start + 3);
var inner = str.substring(start + 4, end);
var prefix = str.substring(0, start);
var suffix = this.processVariableAndFallback(str.substring(end + 1), callback);
var comma = inner.indexOf(',');
if (comma === -1) {
return callback(prefix, inner.trim(), '', suffix);
}
var value = inner.substring(0, comma).trim();
var fallback = inner.substring(comma + 1).trim();
return callback(prefix, value, fallback, suffix);
},
rx: {
VAR_ASSIGN: /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:([^;{]*)|{([^}]*)})(?:(?=[;\s}])|$)/gi,
MIXIN_MATCH: /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
VAR_CONSUMED: /(--[\w-]+)\s*([:,;)]|$)/gi,
ANIMATION_MATCH: /(animation\s*:)|(animation-name\s*:)/,
MEDIA_MATCH: /@media[^(]*(\([^)]*\))/,
IS_VAR: /^--/,
BRACKETED: /\{[^}]*\}/g,
HOST_PREFIX: '(?:^|[^.#[:])',
HOST_SUFFIX: '($|[.:[\\s>+~])'
},
resolveCss: Polymer.ResolveUrl.resolveCss,
parser: Polymer.CssParse,
ruleTypes: Polymer.CssParse.types
};
}();Polymer.StyleTransformer = function () {
var styleUtil = Polymer.StyleUtil;
var settings = Polymer.Settings;
var api = {
dom: function (node, scope, useAttr, shouldRemoveScope) {
this._transformDom(node, scope || '', useAttr, shouldRemoveScope);
},
_transformDom: function (node, selector, useAttr, shouldRemoveScope) {
if (node.setAttribute) {
this.element(node, selector, useAttr, shouldRemoveScope);
}
var c$ = Polymer.dom(node).childNodes;
for (var i = 0; i < c$.length; i++) {
this._transformDom(c$[i], selector, useAttr, shouldRemoveScope);
}
},
element: function (element, scope, useAttr, shouldRemoveScope) {
if (useAttr) {
if (shouldRemoveScope) {
element.removeAttribute(SCOPE_NAME);
} else {
element.setAttribute(SCOPE_NAME, scope);
}
} else {
if (scope) {
if (element.classList) {
if (shouldRemoveScope) {
element.classList.remove(SCOPE_NAME);
element.classList.remove(scope);
} else {
element.classList.add(SCOPE_NAME);
element.classList.add(scope);
}
} else if (element.getAttribute) {
var c = element.getAttribute(CLASS);
if (shouldRemoveScope) {
if (c) {
element.setAttribute(CLASS, c.replace(SCOPE_NAME, '').replace(scope, ''));
}
} else {
element.setAttribute(CLASS, (c ? c + ' ' : '') + SCOPE_NAME + ' ' + scope);
}
}
}
}
},
elementStyles: function (element, callback) {
var styles = element._styles;
var cssText = '';
var cssBuildType = element.__cssBuild;
var passthrough = settings.useNativeShadow || cssBuildType === 'shady';
var cb;
if (passthrough) {
var self = this;
cb = function (rule) {
rule.selector = self._slottedToContent(rule.selector);
rule.selector = rule.selector.replace(ROOT, ':host > *');
if (callback) {
callback(rule);
}
};
}
for (var i = 0, l = styles.length, s; i < l && (s = styles[i]); i++) {
var rules = styleUtil.rulesForStyle(s);
cssText += passthrough ? styleUtil.toCssText(rules, cb) : this.css(rules, element.is, element.extends, callback, element._scopeCssViaAttr) + '\n\n';
}
return cssText.trim();
},
css: function (rules, scope, ext, callback, useAttr) {
var hostScope = this._calcHostScope(scope, ext);
scope = this._calcElementScope(scope, useAttr);
var self = this;
return styleUtil.toCssText(rules, function (rule) {
if (!rule.isScoped) {
self.rule(rule, scope, hostScope);
rule.isScoped = true;
}
if (callback) {
callback(rule, scope, hostScope);
}
});
},
_calcElementScope: function (scope, useAttr) {
if (scope) {
return useAttr ? CSS_ATTR_PREFIX + scope + CSS_ATTR_SUFFIX : CSS_CLASS_PREFIX + scope;
} else {
return '';
}
},
_calcHostScope: function (scope, ext) {
return ext ? '[is=' + scope + ']' : scope;
},
rule: function (rule, scope, hostScope) {
this._transformRule(rule, this._transformComplexSelector, scope, hostScope);
},
_transformRule: function (rule, transformer, scope, hostScope) {
rule.selector = rule.transformedSelector = this._transformRuleCss(rule, transformer, scope, hostScope);
},
_transformRuleCss: function (rule, transformer, scope, hostScope) {
var p$ = rule.selector.split(COMPLEX_SELECTOR_SEP);
if (!styleUtil.isKeyframesSelector(rule)) {
for (var i = 0, l = p$.length, p; i < l && (p = p$[i]); i++) {
p$[i] = transformer.call(this, p, scope, hostScope);
}
}
return p$.join(COMPLEX_SELECTOR_SEP);
},
_transformComplexSelector: function (selector, scope, hostScope) {
var stop = false;
var hostContext = false;
var self = this;
selector = selector.trim();
selector = this._slottedToContent(selector);
selector = selector.replace(ROOT, ':host > *');
selector = selector.replace(CONTENT_START, HOST + ' $1');
selector = selector.replace(SIMPLE_SELECTOR_SEP, function (m, c, s) {
if (!stop) {
var info = self._transformCompoundSelector(s, c, scope, hostScope);
stop = stop || info.stop;
hostContext = hostContext || info.hostContext;
c = info.combinator;
s = info.value;
} else {
s = s.replace(SCOPE_JUMP, ' ');
}
return c + s;
});
if (hostContext) {
selector = selector.replace(HOST_CONTEXT_PAREN, function (m, pre, paren, post) {
return pre + paren + ' ' + hostScope + post + COMPLEX_SELECTOR_SEP + ' ' + pre + hostScope + paren + post;
});
}
return selector;
},
_transformCompoundSelector: function (selector, combinator, scope, hostScope) {
var jumpIndex = selector.search(SCOPE_JUMP);
var hostContext = false;
if (selector.indexOf(HOST_CONTEXT) >= 0) {
hostContext = true;
} else if (selector.indexOf(HOST) >= 0) {
selector = this._transformHostSelector(selector, hostScope);
} else if (jumpIndex !== 0) {
selector = scope ? this._transformSimpleSelector(selector, scope) : selector;
}
if (selector.indexOf(CONTENT) >= 0) {
combinator = '';
}
var stop;
if (jumpIndex >= 0) {
selector = selector.replace(SCOPE_JUMP, ' ');
stop = true;
}
return {
value: selector,
combinator: combinator,
stop: stop,
hostContext: hostContext
};
},
_transformSimpleSelector: function (selector, scope) {
var p$ = selector.split(PSEUDO_PREFIX);
p$[0] += scope;
return p$.join(PSEUDO_PREFIX);
},
_transformHostSelector: function (selector, hostScope) {
var m = selector.match(HOST_PAREN);
var paren = m && m[2].trim() || '';
if (paren) {
if (!paren[0].match(SIMPLE_SELECTOR_PREFIX)) {
var typeSelector = paren.split(SIMPLE_SELECTOR_PREFIX)[0];
if (typeSelector === hostScope) {
return paren;
} else {
return SELECTOR_NO_MATCH;
}
} else {
return selector.replace(HOST_PAREN, function (m, host, paren) {
return hostScope + paren;
});
}
} else {
return selector.replace(HOST, hostScope);
}
},
documentRule: function (rule) {
rule.selector = rule.parsedSelector;
this.normalizeRootSelector(rule);
if (!settings.useNativeShadow) {
this._transformRule(rule, this._transformDocumentSelector);
}
},
normalizeRootSelector: function (rule) {
rule.selector = rule.selector.replace(ROOT, 'html');
var parts = rule.selector.split(COMPLEX_SELECTOR_SEP);
parts = parts.filter(function (part) {
return !part.match(HOST_OR_HOST_GT_STAR);
});
rule.selector = parts.join(COMPLEX_SELECTOR_SEP);
},
_transformDocumentSelector: function (selector) {
return selector.match(SCOPE_JUMP) ? this._transformComplexSelector(selector, SCOPE_DOC_SELECTOR) : this._transformSimpleSelector(selector.trim(), SCOPE_DOC_SELECTOR);
},
_slottedToContent: function (cssText) {
return cssText.replace(SLOTTED_PAREN, CONTENT + '> $1');
},
SCOPE_NAME: 'style-scope'
};
var SCOPE_NAME = api.SCOPE_NAME;
var SCOPE_DOC_SELECTOR = ':not([' + SCOPE_NAME + '])' + ':not(.' + SCOPE_NAME + ')';
var COMPLEX_SELECTOR_SEP = ',';
var SIMPLE_SELECTOR_SEP = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=\[])+)/g;
var SIMPLE_SELECTOR_PREFIX = /[[.:#*]/;
var HOST = ':host';
var ROOT = ':root';
var HOST_PAREN = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/;
var HOST_CONTEXT = ':host-context';
var HOST_CONTEXT_PAREN = /(.*)(?::host-context)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))(.*)/;
var CONTENT = '::content';
var SCOPE_JUMP = /::content|::shadow|\/deep\//;
var CSS_CLASS_PREFIX = '.';
var CSS_ATTR_PREFIX = '[' + SCOPE_NAME + '~=';
var CSS_ATTR_SUFFIX = ']';
var PSEUDO_PREFIX = ':';
var CLASS = 'class';
var CONTENT_START = new RegExp('^(' + CONTENT + ')');
var SELECTOR_NO_MATCH = 'should_not_match';
var SLOTTED_PAREN = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/g;
var HOST_OR_HOST_GT_STAR = /:host(?:\s*>\s*\*)?/;
return api;
}();Polymer.StyleExtends = function () {
var styleUtil = Polymer.StyleUtil;
return {
hasExtends: function (cssText) {
return Boolean(cssText.match(this.rx.EXTEND));
},
transform: function (style) {
var rules = styleUtil.rulesForStyle(style);
var self = this;
styleUtil.forEachRule(rules, function (rule) {
self._mapRuleOntoParent(rule);
if (rule.parent) {
var m;
while (m = self.rx.EXTEND.exec(rule.cssText)) {
var extend = m[1];
var extendor = self._findExtendor(extend, rule);
if (extendor) {
self._extendRule(rule, extendor);
}
}
}
rule.cssText = rule.cssText.replace(self.rx.EXTEND, '');
});
return styleUtil.toCssText(rules, function (rule) {
if (rule.selector.match(self.rx.STRIP)) {
rule.cssText = '';
}
}, true);
},
_mapRuleOntoParent: function (rule) {
if (rule.parent) {
var map = rule.parent.map || (rule.parent.map = {});
var parts = rule.selector.split(',');
for (var i = 0, p; i < parts.length; i++) {
p = parts[i];
map[p.trim()] = rule;
}
return map;
}
},
_findExtendor: function (extend, rule) {
return rule.parent && rule.parent.map && rule.parent.map[extend] || this._findExtendor(extend, rule.parent);
},
_extendRule: function (target, source) {
if (target.parent !== source.parent) {
this._cloneAndAddRuleToParent(source, target.parent);
}
target.extends = target.extends || [];
target.extends.push(source);
source.selector = source.selector.replace(this.rx.STRIP, '');
source.selector = (source.selector && source.selector + ',\n') + target.selector;
if (source.extends) {
source.extends.forEach(function (e) {
this._extendRule(target, e);
}, this);
}
},
_cloneAndAddRuleToParent: function (rule, parent) {
rule = Object.create(rule);
rule.parent = parent;
if (rule.extends) {
rule.extends = rule.extends.slice();
}
parent.rules.push(rule);
},
rx: {
EXTEND: /@extends\(([^)]*)\)\s*?;/gim,
STRIP: /%[^,]*$/
}
};
}();Polymer.ApplyShim = function () {
'use strict';
var styleUtil = Polymer.StyleUtil;
var MIXIN_MATCH = styleUtil.rx.MIXIN_MATCH;
var VAR_ASSIGN = styleUtil.rx.VAR_ASSIGN;
var BAD_VAR = /var\(\s*(--[^,]*),\s*(--[^)]*)\)/g;
var APPLY_NAME_CLEAN = /;\s*/m;
var INITIAL_INHERIT = /^\s*(initial)|(inherit)\s*$/;
var MIXIN_VAR_SEP = '_-_';
var mixinMap = {};
function mapSet(name, props) {
name = name.trim();
mixinMap[name] = {
properties: props,
dependants: {}
};
}
function mapGet(name) {
name = name.trim();
return mixinMap[name];
}
function replaceInitialOrInherit(property, value) {
var match = INITIAL_INHERIT.exec(value);
if (match) {
if (match[1]) {
value = ApplyShim._getInitialValueForProperty(property);
} else {
value = 'apply-shim-inherit';
}
}
return value;
}
function cssTextToMap(text) {
var props = text.split(';');
var property, value;
var out = {};
for (var i = 0, p, sp; i < props.length; i++) {
p = props[i];
if (p) {
sp = p.split(':');
if (sp.length > 1) {
property = sp[0].trim();
value = replaceInitialOrInherit(property, sp.slice(1).join(':'));
out[property] = value;
}
}
}
return out;
}
function invalidateMixinEntry(mixinEntry) {
var currentProto = ApplyShim.__currentElementProto;
var currentElementName = currentProto && currentProto.is;
for (var elementName in mixinEntry.dependants) {
if (elementName !== currentElementName) {
mixinEntry.dependants[elementName].__applyShimInvalid = true;
}
}
}
function produceCssProperties(matchText, propertyName, valueProperty, valueMixin) {
if (valueProperty) {
styleUtil.processVariableAndFallback(valueProperty, function (prefix, value) {
if (value && mapGet(value)) {
valueMixin = '@apply ' + value + ';';
}
});
}
if (!valueMixin) {
return matchText;
}
var mixinAsProperties = consumeCssProperties(valueMixin);
var prefix = matchText.slice(0, matchText.indexOf('--'));
var mixinValues = cssTextToMap(mixinAsProperties);
var combinedProps = mixinValues;
var mixinEntry = mapGet(propertyName);
var oldProps = mixinEntry && mixinEntry.properties;
if (oldProps) {
combinedProps = Object.create(oldProps);
combinedProps = Polymer.Base.mixin(combinedProps, mixinValues);
} else {
mapSet(propertyName, combinedProps);
}
var out = [];
var p, v;
var needToInvalidate = false;
for (p in combinedProps) {
v = mixinValues[p];
if (v === undefined) {
v = 'initial';
}
if (oldProps && !(p in oldProps)) {
needToInvalidate = true;
}
out.push(propertyName + MIXIN_VAR_SEP + p + ': ' + v);
}
if (needToInvalidate) {
invalidateMixinEntry(mixinEntry);
}
if (mixinEntry) {
mixinEntry.properties = combinedProps;
}
if (valueProperty) {
prefix = matchText + ';' + prefix;
}
return prefix + out.join('; ') + ';';
}
function fixVars(matchText, varA, varB) {
return 'var(' + varA + ',' + 'var(' + varB + '))';
}
function atApplyToCssProperties(mixinName, fallbacks) {
mixinName = mixinName.replace(APPLY_NAME_CLEAN, '');
var vars = [];
var mixinEntry = mapGet(mixinName);
if (!mixinEntry) {
mapSet(mixinName, {});
mixinEntry = mapGet(mixinName);
}
if (mixinEntry) {
var currentProto = ApplyShim.__currentElementProto;
if (currentProto) {
mixinEntry.dependants[currentProto.is] = currentProto;
}
var p, parts, f;
for (p in mixinEntry.properties) {
f = fallbacks && fallbacks[p];
parts = [
p,
': var(',
mixinName,
MIXIN_VAR_SEP,
p
];
if (f) {
parts.push(',', f);
}
parts.push(')');
vars.push(parts.join(''));
}
}
return vars.join('; ');
}
function consumeCssProperties(text) {
var m;
while (m = MIXIN_MATCH.exec(text)) {
var matchText = m[0];
var mixinName = m[1];
var idx = m.index;
var applyPos = idx + matchText.indexOf('@apply');
var afterApplyPos = idx + matchText.length;
var textBeforeApply = text.slice(0, applyPos);
var textAfterApply = text.slice(afterApplyPos);
var defaults = cssTextToMap(textBeforeApply);
var replacement = atApplyToCssProperties(mixinName, defaults);
text = [
textBeforeApply,
replacement,
textAfterApply
].join('');
MIXIN_MATCH.lastIndex = idx + replacement.length;
}
return text;
}
var ApplyShim = {
_measureElement: null,
_map: mixinMap,
_separator: MIXIN_VAR_SEP,
transform: function (styles, elementProto) {
this.__currentElementProto = elementProto;
styleUtil.forRulesInStyles(styles, this._boundFindDefinitions);
styleUtil.forRulesInStyles(styles, this._boundFindApplications);
if (elementProto) {
elementProto.__applyShimInvalid = false;
}
this.__currentElementProto = null;
},
_findDefinitions: function (rule) {
var cssText = rule.parsedCssText;
cssText = cssText.replace(BAD_VAR, fixVars);
cssText = cssText.replace(VAR_ASSIGN, produceCssProperties);
rule.cssText = cssText;
if (rule.selector === ':root') {
rule.selector = ':host > *';
}
},
_findApplications: function (rule) {
rule.cssText = consumeCssProperties(rule.cssText);
},
transformRule: function (rule) {
this._findDefinitions(rule);
this._findApplications(rule);
},
_getInitialValueForProperty: function (property) {
if (!this._measureElement) {
this._measureElement = document.createElement('meta');
this._measureElement.style.all = 'initial';
document.head.appendChild(this._measureElement);
}
return window.getComputedStyle(this._measureElement).getPropertyValue(property);
}
};
ApplyShim._boundTransformRule = ApplyShim.transformRule.bind(ApplyShim);
ApplyShim._boundFindDefinitions = ApplyShim._findDefinitions.bind(ApplyShim);
ApplyShim._boundFindApplications = ApplyShim._findApplications.bind(ApplyShim);
return ApplyShim;
}();(function () {
var prepElement = Polymer.Base._prepElement;
var nativeShadow = Polymer.Settings.useNativeShadow;
var styleUtil = Polymer.StyleUtil;
var styleTransformer = Polymer.StyleTransformer;
var styleExtends = Polymer.StyleExtends;
var applyShim = Polymer.ApplyShim;
var settings = Polymer.Settings;
Polymer.Base._addFeature({
_prepElement: function (element) {
if (this._encapsulateStyle && this.__cssBuild !== 'shady') {
styleTransformer.element(element, this.is, this._scopeCssViaAttr);
}
prepElement.call(this, element);
},
_prepStyles: function () {
if (this._encapsulateStyle === undefined) {
this._encapsulateStyle = !nativeShadow;
}
if (!nativeShadow) {
this._scopeStyle = styleUtil.applyStylePlaceHolder(this.is);
}
this.__cssBuild = styleUtil.cssBuildTypeForModule(this.is);
},
_prepShimStyles: function () {
if (this._template) {
var hasTargetedCssBuild = styleUtil.isTargetedBuild(this.__cssBuild);
if (settings.useNativeCSSProperties && this.__cssBuild === 'shadow' && hasTargetedCssBuild) {
if (settings.preserveStyleIncludes) {
styleUtil.styleIncludesToTemplate(this._template);
}
return;
}
this._styles = this._styles || this._collectStyles();
if (settings.useNativeCSSProperties && !this.__cssBuild) {
applyShim.transform(this._styles, this);
}
var cssText = settings.useNativeCSSProperties && hasTargetedCssBuild ? this._styles.length && this._styles[0].textContent.trim() : styleTransformer.elementStyles(this);
this._prepStyleProperties();
if (!this._needsStyleProperties() && cssText) {
styleUtil.applyCss(cssText, this.is, nativeShadow ? this._template.content : null, this._scopeStyle);
}
} else {
this._styles = [];
}
},
_collectStyles: function () {
var styles = [];
var cssText = '', m$ = this.styleModules;
if (m$) {
for (var i = 0, l = m$.length, m; i < l && (m = m$[i]); i++) {
cssText += styleUtil.cssFromModule(m);
}
}
cssText += styleUtil.cssFromModule(this.is);
var p = this._template && this._template.parentNode;
if (this._template && (!p || p.id.toLowerCase() !== this.is)) {
cssText += styleUtil.cssFromElement(this._template);
}
if (cssText) {
var style = document.createElement('style');
style.textContent = cssText;
if (styleExtends.hasExtends(style.textContent)) {
cssText = styleExtends.transform(style);
}
styles.push(style);
}
return styles;
},
_elementAdd: function (node) {
if (this._encapsulateStyle) {
if (node.__styleScoped) {
node.__styleScoped = false;
} else {
styleTransformer.dom(node, this.is, this._scopeCssViaAttr);
}
}
},
_elementRemove: function (node) {
if (this._encapsulateStyle) {
styleTransformer.dom(node, this.is, this._scopeCssViaAttr, true);
}
},
scopeSubtree: function (container, shouldObserve) {
if (nativeShadow) {
return;
}
var self = this;
var scopify = function (node) {
if (node.nodeType === Node.ELEMENT_NODE) {
var className = node.getAttribute('class');
node.setAttribute('class', self._scopeElementClass(node, className));
var n$ = node.querySelectorAll('*');
for (var i = 0, n; i < n$.length && (n = n$[i]); i++) {
className = n.getAttribute('class');
n.setAttribute('class', self._scopeElementClass(n, className));
}
}
};
scopify(container);
if (shouldObserve) {
var mo = new MutationObserver(function (mxns) {
for (var i = 0, m; i < mxns.length && (m = mxns[i]); i++) {
if (m.addedNodes) {
for (var j = 0; j < m.addedNodes.length; j++) {
scopify(m.addedNodes[j]);
}
}
}
});
mo.observe(container, {
childList: true,
subtree: true
});
return mo;
}
}
});
}());Polymer.StyleProperties = function () {
'use strict';
var matchesSelector = Polymer.DomApi.matchesSelector;
var styleUtil = Polymer.StyleUtil;
var styleTransformer = Polymer.StyleTransformer;
var IS_IE = navigator.userAgent.match('Trident');
var settings = Polymer.Settings;
return {
decorateStyles: function (styles, scope) {
var self = this, props = {}, keyframes = [], ruleIndex = 0;
var scopeSelector = styleTransformer._calcHostScope(scope.is, scope.extends);
styleUtil.forRulesInStyles(styles, function (rule, style) {
self.decorateRule(rule);
rule.index = ruleIndex++;
self.whenHostOrRootRule(scope, rule, style, function (info) {
if (rule.parent.type === styleUtil.ruleTypes.MEDIA_RULE) {
scope.__notStyleScopeCacheable = true;
}
if (info.isHost) {
var hostContextOrFunction = info.selector.split(' ').some(function (s) {
return s.indexOf(scopeSelector) === 0 && s.length !== scopeSelector.length;
});
scope.__notStyleScopeCacheable = scope.__notStyleScopeCacheable || hostContextOrFunction;
}
});
self.collectPropertiesInCssText(rule.propertyInfo.cssText, props);
}, function onKeyframesRule(rule) {
keyframes.push(rule);
});
styles._keyframes = keyframes;
var names = [];
for (var i in props) {
names.push(i);
}
return names;
},
decorateRule: function (rule) {
if (rule.propertyInfo) {
return rule.propertyInfo;
}
var info = {}, properties = {};
var hasProperties = this.collectProperties(rule, properties);
if (hasProperties) {
info.properties = properties;
rule.rules = null;
}
info.cssText = this.collectCssText(rule);
rule.propertyInfo = info;
return info;
},
collectProperties: function (rule, properties) {
var info = rule.propertyInfo;
if (info) {
if (info.properties) {
Polymer.Base.mixin(properties, info.properties);
return true;
}
} else {
var m, rx = this.rx.VAR_ASSIGN;
var cssText = rule.parsedCssText;
var value;
var any;
while (m = rx.exec(cssText)) {
value = (m[2] || m[3]).trim();
if (value !== 'inherit') {
properties[m[1].trim()] = value;
}
any = true;
}
return any;
}
},
collectCssText: function (rule) {
return this.collectConsumingCssText(rule.parsedCssText);
},
collectConsumingCssText: function (cssText) {
return cssText.replace(this.rx.BRACKETED, '').replace(this.rx.VAR_ASSIGN, '');
},
collectPropertiesInCssText: function (cssText, props) {
var m;
while (m = this.rx.VAR_CONSUMED.exec(cssText)) {
var name = m[1];
if (m[2] !== ':') {
props[name] = true;
}
}
},
reify: function (props) {
var names = Object.getOwnPropertyNames(props);
for (var i = 0, n; i < names.length; i++) {
n = names[i];
props[n] = this.valueForProperty(props[n], props);
}
},
valueForProperty: function (property, props) {
if (property) {
if (property.indexOf(';') >= 0) {
property = this.valueForProperties(property, props);
} else {
var self = this;
var fn = function (prefix, value, fallback, suffix) {
var propertyValue = self.valueForProperty(props[value], props);
if (!propertyValue || propertyValue === 'initial') {
propertyValue = self.valueForProperty(props[fallback] || fallback, props) || fallback;
} else if (propertyValue === 'apply-shim-inherit') {
propertyValue = 'inherit';
}
return prefix + (propertyValue || '') + suffix;
};
property = styleUtil.processVariableAndFallback(property, fn);
}
}
return property && property.trim() || '';
},
valueForProperties: function (property, props) {
var parts = property.split(';');
for (var i = 0, p, m; i < parts.length; i++) {
if (p = parts[i]) {
this.rx.MIXIN_MATCH.lastIndex = 0;
m = this.rx.MIXIN_MATCH.exec(p);
if (m) {
p = this.valueForProperty(props[m[1]], props);
} else {
var colon = p.indexOf(':');
if (colon !== -1) {
var pp = p.substring(colon);
pp = pp.trim();
pp = this.valueForProperty(pp, props) || pp;
p = p.substring(0, colon) + pp;
}
}
parts[i] = p && p.lastIndexOf(';') === p.length - 1 ? p.slice(0, -1) : p || '';
}
}
return parts.join(';');
},
applyProperties: function (rule, props) {
var output = '';
if (!rule.propertyInfo) {
this.decorateRule(rule);
}
if (rule.propertyInfo.cssText) {
output = this.valueForProperties(rule.propertyInfo.cssText, props);
}
rule.cssText = output;
},
applyKeyframeTransforms: function (rule, keyframeTransforms) {
var input = rule.cssText;
var output = rule.cssText;
if (rule.hasAnimations == null) {
rule.hasAnimations = this.rx.ANIMATION_MATCH.test(input);
}
if (rule.hasAnimations) {
var transform;
if (rule.keyframeNamesToTransform == null) {
rule.keyframeNamesToTransform = [];
for (var keyframe in keyframeTransforms) {
transform = keyframeTransforms[keyframe];
output = transform(input);
if (input !== output) {
input = output;
rule.keyframeNamesToTransform.push(keyframe);
}
}
} else {
for (var i = 0; i < rule.keyframeNamesToTransform.length; ++i) {
transform = keyframeTransforms[rule.keyframeNamesToTransform[i]];
input = transform(input);
}
output = input;
}
}
rule.cssText = output;
},
propertyDataFromStyles: function (styles, element) {
var props = {}, self = this;
var o = [];
styleUtil.forActiveRulesInStyles(styles, function (rule) {
if (!rule.propertyInfo) {
self.decorateRule(rule);
}
var selectorToMatch = rule.transformedSelector || rule.parsedSelector;
if (element && rule.propertyInfo.properties && selectorToMatch) {
if (matchesSelector.call(element, selectorToMatch)) {
self.collectProperties(rule, props);
addToBitMask(rule.index, o);
}
}
});
return {
properties: props,
key: o
};
},
_rootSelector: /:root|:host\s*>\s*\*/,
_checkRoot: function (hostScope, selector) {
return Boolean(selector.match(this._rootSelector)) || hostScope === 'html' && selector.indexOf('html') > -1;
},
whenHostOrRootRule: function (scope, rule, style, callback) {
if (!rule.propertyInfo) {
self.decorateRule(rule);
}
if (!rule.propertyInfo.properties) {
return;
}
var hostScope = scope.is ? styleTransformer._calcHostScope(scope.is, scope.extends) : 'html';
var parsedSelector = rule.parsedSelector;
var isRoot = this._checkRoot(hostScope, parsedSelector);
var isHost = !isRoot && parsedSelector.indexOf(':host') === 0;
var cssBuild = scope.__cssBuild || style.__cssBuild;
if (cssBuild === 'shady') {
isRoot = parsedSelector === hostScope + ' > *.' + hostScope || parsedSelector.indexOf('html') > -1;
isHost = !isRoot && parsedSelector.indexOf(hostScope) === 0;
}
if (!isRoot && !isHost) {
return;
}
var selectorToMatch = hostScope;
if (isHost) {
if (settings.useNativeShadow && !rule.transformedSelector) {
rule.transformedSelector = styleTransformer._transformRuleCss(rule, styleTransformer._transformComplexSelector, scope.is, hostScope);
}
selectorToMatch = rule.transformedSelector || rule.parsedSelector;
}
if (isRoot && hostScope === 'html') {
selectorToMatch = rule.transformedSelector || rule.parsedSelector;
}
callback({
selector: selectorToMatch,
isHost: isHost,
isRoot: isRoot
});
},
hostAndRootPropertiesForScope: function (scope) {
var hostProps = {}, rootProps = {}, self = this;
styleUtil.forActiveRulesInStyles(scope._styles, function (rule, style) {
self.whenHostOrRootRule(scope, rule, style, function (info) {
var element = scope._element || scope;
if (matchesSelector.call(element, info.selector)) {
if (info.isHost) {
self.collectProperties(rule, hostProps);
} else {
self.collectProperties(rule, rootProps);
}
}
});
});
return {
rootProps: rootProps,
hostProps: hostProps
};
},
transformStyles: function (element, properties, scopeSelector) {
var self = this;
var hostSelector = styleTransformer._calcHostScope(element.is, element.extends);
var rxHostSelector = element.extends ? '\\' + hostSelector.slice(0, -1) + '\\]' : hostSelector;
var hostRx = new RegExp(this.rx.HOST_PREFIX + rxHostSelector + this.rx.HOST_SUFFIX);
var keyframeTransforms = this._elementKeyframeTransforms(element, scopeSelector);
return styleTransformer.elementStyles(element, function (rule) {
self.applyProperties(rule, properties);
if (!settings.useNativeShadow && !Polymer.StyleUtil.isKeyframesSelector(rule) && rule.cssText) {
self.applyKeyframeTransforms(rule, keyframeTransforms);
self._scopeSelector(rule, hostRx, hostSelector, element._scopeCssViaAttr, scopeSelector);
}
});
},
_elementKeyframeTransforms: function (element, scopeSelector) {
var keyframesRules = element._styles._keyframes;
var keyframeTransforms = {};
if (!settings.useNativeShadow && keyframesRules) {
for (var i = 0, keyframesRule = keyframesRules[i]; i < keyframesRules.length; keyframesRule = keyframesRules[++i]) {
this._scopeKeyframes(keyframesRule, scopeSelector);
keyframeTransforms[keyframesRule.keyframesName] = this._keyframesRuleTransformer(keyframesRule);
}
}
return keyframeTransforms;
},
_keyframesRuleTransformer: function (keyframesRule) {
return function (cssText) {
return cssText.replace(keyframesRule.keyframesNameRx, keyframesRule.transformedKeyframesName);
};
},
_scopeKeyframes: function (rule, scopeId) {
rule.keyframesNameRx = new RegExp(rule.keyframesName, 'g');
rule.transformedKeyframesName = rule.keyframesName + '-' + scopeId;
rule.transformedSelector = rule.transformedSelector || rule.selector;
rule.selector = rule.transformedSelector.replace(rule.keyframesName, rule.transformedKeyframesName);
},
_scopeSelector: function (rule, hostRx, hostSelector, viaAttr, scopeId) {
rule.transformedSelector = rule.transformedSelector || rule.selector;
var selector = rule.transformedSelector;
var scope = viaAttr ? '[' + styleTransformer.SCOPE_NAME + '~=' + scopeId + ']' : '.' + scopeId;
var parts = selector.split(',');
for (var i = 0, l = parts.length, p; i < l && (p = parts[i]); i++) {
parts[i] = p.match(hostRx) ? p.replace(hostSelector, scope) : scope + ' ' + p;
}
rule.selector = parts.join(',');
},
applyElementScopeSelector: function (element, selector, old, viaAttr) {
var c = viaAttr ? element.getAttribute(styleTransformer.SCOPE_NAME) : element.getAttribute('class') || '';
var v = old ? c.replace(old, selector) : (c ? c + ' ' : '') + this.XSCOPE_NAME + ' ' + selector;
if (c !== v) {
if (viaAttr) {
element.setAttribute(styleTransformer.SCOPE_NAME, v);
} else {
element.setAttribute('class', v);
}
}
},
applyElementStyle: function (element, properties, selector, style) {
var cssText = style ? style.textContent || '' : this.transformStyles(element, properties, selector);
var s = element._customStyle;
if (s && !settings.useNativeShadow && s !== style) {
s._useCount--;
if (s._useCount <= 0 && s.parentNode) {
s.parentNode.removeChild(s);
}
}
if (settings.useNativeShadow) {
if (element._customStyle) {
element._customStyle.textContent = cssText;
style = element._customStyle;
} else if (cssText) {
style = styleUtil.applyCss(cssText, selector, element.root, element._scopeStyle);
}
} else {
if (!style) {
if (cssText) {
style = styleUtil.applyCss(cssText, selector, null, element._scopeStyle);
}
} else if (!style.parentNode) {
if (IS_IE && cssText.indexOf('@media') > -1) {
style.textContent = cssText;
}
styleUtil.applyStyle(style, null, element._scopeStyle);
}
}
if (style) {
style._useCount = style._useCount || 0;
if (element._customStyle != style) {
style._useCount++;
}
element._customStyle = style;
}
return style;
},
mixinCustomStyle: function (props, customStyle) {
var v;
for (var i in customStyle) {
v = customStyle[i];
if (v || v === 0) {
props[i] = v;
}
}
},
updateNativeStyleProperties: function (element, properties) {
var oldPropertyNames = element.__customStyleProperties;
if (oldPropertyNames) {
for (var i = 0; i < oldPropertyNames.length; i++) {
element.style.removeProperty(oldPropertyNames[i]);
}
}
var propertyNames = [];
for (var p in properties) {
if (properties[p] !== null) {
element.style.setProperty(p, properties[p]);
propertyNames.push(p);
}
}
element.__customStyleProperties = propertyNames;
},
rx: styleUtil.rx,
XSCOPE_NAME: 'x-scope'
};
function addToBitMask(n, bits) {
var o = parseInt(n / 32);
var v = 1 << n % 32;
bits[o] = (bits[o] || 0) | v;
}
}();(function () {
Polymer.StyleCache = function () {
this.cache = {};
};
Polymer.StyleCache.prototype = {
MAX: 100,
store: function (is, data, keyValues, keyStyles) {
data.keyValues = keyValues;
data.styles = keyStyles;
var s$ = this.cache[is] = this.cache[is] || [];
s$.push(data);
if (s$.length > this.MAX) {
s$.shift();
}
},
retrieve: function (is, keyValues, keyStyles) {
var cache = this.cache[is];
if (cache) {
for (var i = cache.length - 1, data; i >= 0; i--) {
data = cache[i];
if (keyStyles === data.styles && this._objectsEqual(keyValues, data.keyValues)) {
return data;
}
}
}
},
clear: function () {
this.cache = {};
},
_objectsEqual: function (target, source) {
var t, s;
for (var i in target) {
t = target[i], s = source[i];
if (!(typeof t === 'object' && t ? this._objectsStrictlyEqual(t, s) : t === s)) {
return false;
}
}
if (Array.isArray(target)) {
return target.length === source.length;
}
return true;
},
_objectsStrictlyEqual: function (target, source) {
return this._objectsEqual(target, source) && this._objectsEqual(source, target);
}
};
}());Polymer.StyleDefaults = function () {
var styleProperties = Polymer.StyleProperties;
var StyleCache = Polymer.StyleCache;
var nativeVariables = Polymer.Settings.useNativeCSSProperties;
var api = {
_styles: [],
_properties: null,
customStyle: {},
_styleCache: new StyleCache(),
_element: Polymer.DomApi.wrap(document.documentElement),
addStyle: function (style) {
this._styles.push(style);
this._properties = null;
},
get _styleProperties() {
if (!this._properties) {
styleProperties.decorateStyles(this._styles, this);
this._styles._scopeStyleProperties = null;
this._properties = styleProperties.hostAndRootPropertiesForScope(this).rootProps;
styleProperties.mixinCustomStyle(this._properties, this.customStyle);
styleProperties.reify(this._properties);
}
return this._properties;
},
hasStyleProperties: function () {
return Boolean(this._properties);
},
_needsStyleProperties: function () {
},
_computeStyleProperties: function () {
return this._styleProperties;
},
updateStyles: function (properties) {
this._properties = null;
if (properties) {
Polymer.Base.mixin(this.customStyle, properties);
}
this._styleCache.clear();
for (var i = 0, s; i < this._styles.length; i++) {
s = this._styles[i];
s = s.__importElement || s;
s._apply();
}
if (nativeVariables) {
styleProperties.updateNativeStyleProperties(document.documentElement, this.customStyle);
}
}
};
return api;
}();(function () {
'use strict';
var serializeValueToAttribute = Polymer.Base.serializeValueToAttribute;
var propertyUtils = Polymer.StyleProperties;
var styleTransformer = Polymer.StyleTransformer;
var styleDefaults = Polymer.StyleDefaults;
var nativeShadow = Polymer.Settings.useNativeShadow;
var nativeVariables = Polymer.Settings.useNativeCSSProperties;
Polymer.Base._addFeature({
_prepStyleProperties: function () {
if (!nativeVariables) {
this._ownStylePropertyNames = this._styles && this._styles.length ? propertyUtils.decorateStyles(this._styles, this) : null;
}
},
customStyle: null,
getComputedStyleValue: function (property) {
if (!nativeVariables && !this._styleProperties) {
this._computeStyleProperties();
}
return !nativeVariables && this._styleProperties && this._styleProperties[property] || getComputedStyle(this).getPropertyValue(property);
},
_setupStyleProperties: function () {
this.customStyle = {};
this._styleCache = null;
this._styleProperties = null;
this._scopeSelector = null;
this._ownStyleProperties = null;
this._customStyle = null;
},
_needsStyleProperties: function () {
return Boolean(!nativeVariables && this._ownStylePropertyNames && this._ownStylePropertyNames.length);
},
_validateApplyShim: function () {
if (this.__applyShimInvalid) {
Polymer.ApplyShim.transform(this._styles, this.__proto__);
var cssText = styleTransformer.elementStyles(this);
if (nativeShadow) {
var templateStyle = this._template.content.querySelector('style');
if (templateStyle) {
templateStyle.textContent = cssText;
}
} else {
var shadyStyle = this._scopeStyle && this._scopeStyle.nextSibling;
if (shadyStyle) {
shadyStyle.textContent = cssText;
}
}
}
},
_beforeAttached: function () {
if ((!this._scopeSelector || this.__stylePropertiesInvalid) && this._needsStyleProperties()) {
this.__stylePropertiesInvalid = false;
this._updateStyleProperties();
}
},
_findStyleHost: function () {
var e = this, root;
while (root = Polymer.dom(e).getOwnerRoot()) {
if (Polymer.isInstance(root.host)) {
return root.host;
}
e = root.host;
}
return styleDefaults;
},
_updateStyleProperties: function () {
var info, scope = this._findStyleHost();
if (!scope._styleProperties) {
scope._computeStyleProperties();
}
if (!scope._styleCache) {
scope._styleCache = new Polymer.StyleCache();
}
var scopeData = propertyUtils.propertyDataFromStyles(scope._styles, this);
var scopeCacheable = !this.__notStyleScopeCacheable;
if (scopeCacheable) {
scopeData.key.customStyle = this.customStyle;
info = scope._styleCache.retrieve(this.is, scopeData.key, this._styles);
}
var scopeCached = Boolean(info);
if (scopeCached) {
this._styleProperties = info._styleProperties;
} else {
this._computeStyleProperties(scopeData.properties);
}
this._computeOwnStyleProperties();
if (!scopeCached) {
info = styleCache.retrieve(this.is, this._ownStyleProperties, this._styles);
}
var globalCached = Boolean(info) && !scopeCached;
var style = this._applyStyleProperties(info);
if (!scopeCached) {
style = style && nativeShadow ? style.cloneNode(true) : style;
info = {
style: style,
_scopeSelector: this._scopeSelector,
_styleProperties: this._styleProperties
};
if (scopeCacheable) {
scopeData.key.customStyle = {};
this.mixin(scopeData.key.customStyle, this.customStyle);
scope._styleCache.store(this.is, info, scopeData.key, this._styles);
}
if (!globalCached) {
styleCache.store(this.is, Object.create(info), this._ownStyleProperties, this._styles);
}
}
},
_computeStyleProperties: function (scopeProps) {
var scope = this._findStyleHost();
if (!scope._styleProperties) {
scope._computeStyleProperties();
}
var props = Object.create(scope._styleProperties);
var hostAndRootProps = propertyUtils.hostAndRootPropertiesForScope(this);
this.mixin(props, hostAndRootProps.hostProps);
scopeProps = scopeProps || propertyUtils.propertyDataFromStyles(scope._styles, this).properties;
this.mixin(props, scopeProps);
this.mixin(props, hostAndRootProps.rootProps);
propertyUtils.mixinCustomStyle(props, this.customStyle);
propertyUtils.reify(props);
this._styleProperties = props;
},
_computeOwnStyleProperties: function () {
var props = {};
for (var i = 0, n; i < this._ownStylePropertyNames.length; i++) {
n = this._ownStylePropertyNames[i];
props[n] = this._styleProperties[n];
}
this._ownStyleProperties = props;
},
_scopeCount: 0,
_applyStyleProperties: function (info) {
var oldScopeSelector = this._scopeSelector;
this._scopeSelector = info ? info._scopeSelector : this.is + '-' + this.__proto__._scopeCount++;
var style = propertyUtils.applyElementStyle(this, this._styleProperties, this._scopeSelector, info && info.style);
if (!nativeShadow) {
propertyUtils.applyElementScopeSelector(this, this._scopeSelector, oldScopeSelector, this._scopeCssViaAttr);
}
return style;
},
serializeValueToAttribute: function (value, attribute, node) {
node = node || this;
if (attribute === 'class' && !nativeShadow) {
var host = node === this ? this.domHost || this.dataHost : this;
if (host) {
value = host._scopeElementClass(node, value);
}
}
node = this.shadyRoot && this.shadyRoot._hasDistributed ? Polymer.dom(node) : node;
serializeValueToAttribute.call(this, value, attribute, node);
},
_scopeElementClass: function (element, selector) {
if (!nativeShadow && !this._scopeCssViaAttr) {
selector = (selector ? selector + ' ' : '') + SCOPE_NAME + ' ' + this.is + (element._scopeSelector ? ' ' + XSCOPE_NAME + ' ' + element._scopeSelector : '');
}
return selector;
},
updateStyles: function (properties) {
if (properties) {
this.mixin(this.customStyle, properties);
}
if (nativeVariables) {
propertyUtils.updateNativeStyleProperties(this, this.customStyle);
} else {
if (this.isAttached) {
if (this._needsStyleProperties()) {
this._updateStyleProperties();
} else {
this._styleProperties = null;
}
} else {
this.__stylePropertiesInvalid = true;
}
if (this._styleCache) {
this._styleCache.clear();
}
this._updateRootStyles();
}
},
_updateRootStyles: function (root) {
root = root || this.root;
var c$ = Polymer.dom(root)._query(function (e) {
return e.shadyRoot || e.shadowRoot;
});
for (var i = 0, l = c$.length, c; i < l && (c = c$[i]); i++) {
if (c.updateStyles) {
c.updateStyles();
}
}
}
});
Polymer.updateStyles = function (properties) {
styleDefaults.updateStyles(properties);
Polymer.Base._updateRootStyles(document);
};
var styleCache = new Polymer.StyleCache();
Polymer.customStyleCache = styleCache;
var SCOPE_NAME = styleTransformer.SCOPE_NAME;
var XSCOPE_NAME = propertyUtils.XSCOPE_NAME;
}());Polymer.Base._addFeature({
_registerFeatures: function () {
this._prepIs();
if (this.factoryImpl) {
this._prepConstructor();
}
this._prepStyles();
},
_finishRegisterFeatures: function () {
this._prepTemplate();
this._prepShimStyles();
this._prepAnnotations();
this._prepEffects();
this._prepBehaviors();
this._prepPropertyInfo();
this._prepBindings();
this._prepShady();
},
_prepBehavior: function (b) {
this._addPropertyEffects(b.properties);
this._addComplexObserverEffects(b.observers);
this._addHostAttributes(b.hostAttributes);
},
_initFeatures: function () {
this._setupGestures();
this._setupConfigure(this.__data__);
this._setupStyleProperties();
this._setupDebouncers();
this._setupShady();
this._registerHost();
if (this._template) {
this._validateApplyShim();
this._poolContent();
this._beginHosting();
this._stampTemplate();
this._endHosting();
this._marshalAnnotationReferences();
}
this._marshalInstanceEffects();
this._marshalBehaviors();
this._marshalHostAttributes();
this._marshalAttributes();
this._tryReady();
},
_marshalBehavior: function (b) {
if (b.listeners) {
this._listenListeners(b.listeners);
}
}
});(function () {
var propertyUtils = Polymer.StyleProperties;
var styleUtil = Polymer.StyleUtil;
var cssParse = Polymer.CssParse;
var styleDefaults = Polymer.StyleDefaults;
var styleTransformer = Polymer.StyleTransformer;
var applyShim = Polymer.ApplyShim;
var debounce = Polymer.Debounce;
var settings = Polymer.Settings;
var updateDebouncer;
Polymer({
is: 'habitlab-custom-style',
extends: 'style',
_template: null,
properties: { include: String },
ready: function () {
this.__appliedElement = this.__appliedElement || this;
this.__cssBuild = styleUtil.getCssBuildType(this);
if (this.__appliedElement !== this) {
this.__appliedElement.__cssBuild = this.__cssBuild;
}
this._tryApply();
},
attached: function () {
this._tryApply();
},
_tryApply: function () {
if (!this._appliesToDocument) {
if (this.parentNode && this.parentNode.localName !== 'habitlab-dom-module') {
this._appliesToDocument = true;
var e = this.__appliedElement;
if (!settings.useNativeCSSProperties) {
this.__needsUpdateStyles = styleDefaults.hasStyleProperties();
styleDefaults.addStyle(e);
}
if (e.textContent || this.include) {
this._apply(true);
} else {
var self = this;
var observer = new MutationObserver(function () {
observer.disconnect();
self._apply(true);
});
observer.observe(e, { childList: true });
}
}
}
},
_updateStyles: function () {
Polymer.updateStyles();
},
_apply: function (initialApply) {
var e = this.__appliedElement;
if (this.include) {
e.textContent = styleUtil.cssFromModules(this.include, true) + e.textContent;
}
if (!e.textContent) {
return;
}
var buildType = this.__cssBuild;
var targetedBuild = styleUtil.isTargetedBuild(buildType);
if (settings.useNativeCSSProperties && targetedBuild) {
return;
}
var styleRules = styleUtil.rulesForStyle(e);
if (!targetedBuild) {
styleUtil.forEachRule(styleRules, function (rule) {
styleTransformer.documentRule(rule);
});
if (settings.useNativeCSSProperties && !buildType) {
applyShim.transform([e]);
}
}
if (settings.useNativeCSSProperties) {
e.textContent = styleUtil.toCssText(styleRules);
} else {
var self = this;
var fn = function fn() {
self._flushCustomProperties();
};
if (initialApply) {
Polymer.RenderStatus.whenReady(fn);
} else {
fn();
}
}
},
_flushCustomProperties: function () {
if (this.__needsUpdateStyles) {
this.__needsUpdateStyles = false;
updateDebouncer = debounce(updateDebouncer, this._updateStyles);
} else {
this._applyCustomProperties();
}
},
_applyCustomProperties: function () {
var element = this.__appliedElement;
this._computeStyleProperties();
var props = this._styleProperties;
var rules = styleUtil.rulesForStyle(element);
if (!rules) {
return;
}
element.textContent = styleUtil.toCssText(rules, function (rule) {
var css = rule.cssText = rule.parsedCssText;
if (rule.propertyInfo && rule.propertyInfo.cssText) {
css = cssParse.removeCustomPropAssignment(css);
rule.cssText = propertyUtils.valueForProperties(css, props);
}
});
}
});
}());Polymer.Templatizer = {
properties: { __hideTemplateChildren__: { observer: '_showHideChildren' } },
_instanceProps: Polymer.nob,
_parentPropPrefix: '_parent_',
templatize: function (template) {
this._templatized = template;
if (!template._content) {
template._content = template.content;
}
if (template._content._ctor) {
this.ctor = template._content._ctor;
this._prepParentProperties(this.ctor.prototype, template);
return;
}
var archetype = Object.create(Polymer.Base);
this._customPrepAnnotations(archetype, template);
this._prepParentProperties(archetype, template);
archetype._prepEffects();
this._customPrepEffects(archetype);
archetype._prepBehaviors();
archetype._prepPropertyInfo();
archetype._prepBindings();
archetype._notifyPathUp = this._notifyPathUpImpl;
archetype._scopeElementClass = this._scopeElementClassImpl;
archetype.listen = this._listenImpl;
archetype._showHideChildren = this._showHideChildrenImpl;
archetype.__setPropertyOrig = this.__setProperty;
archetype.__setProperty = this.__setPropertyImpl;
var _constructor = this._constructorImpl;
var ctor = function TemplateInstance(model, host) {
_constructor.call(this, model, host);
};
ctor.prototype = archetype;
archetype.constructor = ctor;
template._content._ctor = ctor;
this.ctor = ctor;
},
_getRootDataHost: function () {
return this.dataHost && this.dataHost._rootDataHost || this.dataHost;
},
_showHideChildrenImpl: function (hide) {
var c = this._children;
for (var i = 0; i < c.length; i++) {
var n = c[i];
if (Boolean(hide) != Boolean(n.__hideTemplateChildren__)) {
if (n.nodeType === Node.TEXT_NODE) {
if (hide) {
n.__polymerTextContent__ = n.textContent;
n.textContent = '';
} else {
n.textContent = n.__polymerTextContent__;
}
} else if (n.style) {
if (hide) {
n.__polymerDisplay__ = n.style.display;
n.style.display = 'none';
} else {
n.style.display = n.__polymerDisplay__;
}
}
}
n.__hideTemplateChildren__ = hide;
}
},
__setPropertyImpl: function (property, value, fromAbove, node) {
if (node && node.__hideTemplateChildren__ && property == 'textContent') {
property = '__polymerTextContent__';
}
this.__setPropertyOrig(property, value, fromAbove, node);
},
_debounceTemplate: function (fn) {
Polymer.dom.addDebouncer(this.debounce('_debounceTemplate', fn));
},
_flushTemplates: function () {
Polymer.dom.flush();
},
_customPrepEffects: function (archetype) {
var parentProps = archetype._parentProps;
for (var prop in parentProps) {
archetype._addPropertyEffect(prop, 'function', this._createHostPropEffector(prop));
}
for (prop in this._instanceProps) {
archetype._addPropertyEffect(prop, 'function', this._createInstancePropEffector(prop));
}
},
_customPrepAnnotations: function (archetype, template) {
archetype._template = template;
var c = template._content;
if (!c._notes) {
var rootDataHost = archetype._rootDataHost;
if (rootDataHost) {
Polymer.Annotations.prepElement = function () {
rootDataHost._prepElement();
};
}
c._notes = Polymer.Annotations.parseAnnotations(template);
Polymer.Annotations.prepElement = null;
this._processAnnotations(c._notes);
}
archetype._notes = c._notes;
archetype._parentProps = c._parentProps;
},
_prepParentProperties: function (archetype, template) {
var parentProps = this._parentProps = archetype._parentProps;
if (this._forwardParentProp && parentProps) {
var proto = archetype._parentPropProto;
var prop;
if (!proto) {
for (prop in this._instanceProps) {
delete parentProps[prop];
}
proto = archetype._parentPropProto = Object.create(null);
if (template != this) {
Polymer.Bind.prepareModel(proto);
Polymer.Base.prepareModelNotifyPath(proto);
}
for (prop in parentProps) {
var parentProp = this._parentPropPrefix + prop;
var effects = [
{
kind: 'function',
effect: this._createForwardPropEffector(prop),
fn: Polymer.Bind._functionEffect
},
{
kind: 'notify',
fn: Polymer.Bind._notifyEffect,
effect: { event: Polymer.CaseMap.camelToDashCase(parentProp) + '-changed' }
}
];
proto._propertyEffects = proto._propertyEffects || {};
proto._propertyEffects[parentProp] = effects;
Polymer.Bind._createAccessors(proto, parentProp, effects);
}
}
var self = this;
if (template != this) {
Polymer.Bind.prepareInstance(template);
template._forwardParentProp = function (source, value) {
self._forwardParentProp(source, value);
};
}
this._extendTemplate(template, proto);
template._pathEffector = function (path, value, fromAbove) {
return self._pathEffectorImpl(path, value, fromAbove);
};
}
},
_createForwardPropEffector: function (prop) {
return function (source, value) {
this._forwardParentProp(prop, value);
};
},
_createHostPropEffector: function (prop) {
var prefix = this._parentPropPrefix;
return function (source, value) {
this.dataHost._templatized[prefix + prop] = value;
};
},
_createInstancePropEffector: function (prop) {
return function (source, value, old, fromAbove) {
if (!fromAbove) {
this.dataHost._forwardInstanceProp(this, prop, value);
}
};
},
_extendTemplate: function (template, proto) {
var n$ = Object.getOwnPropertyNames(proto);
if (proto._propertySetter) {
template._propertySetter = proto._propertySetter;
}
for (var i = 0, n; i < n$.length && (n = n$[i]); i++) {
var val = template[n];
if (val && n == '_propertyEffects') {
var pe = Polymer.Base.mixin({}, val);
template._propertyEffects = Polymer.Base.mixin(pe, proto._propertyEffects);
} else {
var pd = Object.getOwnPropertyDescriptor(proto, n);
Object.defineProperty(template, n, pd);
if (val !== undefined) {
template._propertySetter(n, val);
}
}
}
},
_showHideChildren: function (hidden) {
},
_forwardInstancePath: function (inst, path, value) {
},
_forwardInstanceProp: function (inst, prop, value) {
},
_notifyPathUpImpl: function (path, value) {
var dataHost = this.dataHost;
var root = Polymer.Path.root(path);
dataHost._forwardInstancePath.call(dataHost, this, path, value);
if (root in dataHost._parentProps) {
dataHost._templatized._notifyPath(dataHost._parentPropPrefix + path, value);
}
},
_pathEffectorImpl: function (path, value, fromAbove) {
if (this._forwardParentPath) {
if (path.indexOf(this._parentPropPrefix) === 0) {
var subPath = path.substring(this._parentPropPrefix.length);
var model = Polymer.Path.root(subPath);
if (model in this._parentProps) {
this._forwardParentPath(subPath, value);
}
}
}
Polymer.Base._pathEffector.call(this._templatized, path, value, fromAbove);
},
_constructorImpl: function (model, host) {
this._rootDataHost = host._getRootDataHost();
this._setupConfigure(model);
this._registerHost(host);
this._beginHosting();
this.root = this.instanceTemplate(this._template);
this.root.__noContent = !this._notes._hasContent;
this.root.__styleScoped = true;
this._endHosting();
this._marshalAnnotatedNodes();
this._marshalInstanceEffects();
this._marshalAnnotatedListeners();
var children = [];
for (var n = this.root.firstChild; n; n = n.nextSibling) {
children.push(n);
n._templateInstance = this;
}
this._children = children;
if (host.__hideTemplateChildren__) {
this._showHideChildren(true);
}
this._tryReady();
},
_listenImpl: function (node, eventName, methodName) {
var model = this;
var host = this._rootDataHost;
var handler = host._createEventHandler(node, eventName, methodName);
var decorated = function (e) {
e.model = model;
handler(e);
};
host._listen(node, eventName, decorated);
},
_scopeElementClassImpl: function (node, value) {
var host = this._rootDataHost;
if (host) {
return host._scopeElementClass(node, value);
}
return value;
},
stamp: function (model) {
model = model || {};
if (this._parentProps) {
var templatized = this._templatized;
for (var prop in this._parentProps) {
if (model[prop] === undefined) {
model[prop] = templatized[this._parentPropPrefix + prop];
}
}
}
return new this.ctor(model, this);
},
modelForElement: function (el) {
var model;
while (el) {
if (model = el._templateInstance) {
if (model.dataHost != this) {
el = model.dataHost;
} else {
return model;
}
} else {
el = el.parentNode;
}
}
}
};Polymer({
is: 'habitlab-dom-template',
extends: 'template',
_template: null,
behaviors: [Polymer.Templatizer],
ready: function () {
this.templatize(this);
}
});Polymer._collections = new WeakMap();
Polymer.Collection = function (userArray) {
Polymer._collections.set(userArray, this);
this.userArray = userArray;
this.store = userArray.slice();
this.initMap();
};
Polymer.Collection.prototype = {
constructor: Polymer.Collection,
initMap: function () {
var omap = this.omap = new WeakMap();
var pmap = this.pmap = {};
var s = this.store;
for (var i = 0; i < s.length; i++) {
var item = s[i];
if (item && typeof item == 'object') {
omap.set(item, i);
} else {
pmap[item] = i;
}
}
},
add: function (item) {
var key = this.store.push(item) - 1;
if (item && typeof item == 'object') {
this.omap.set(item, key);
} else {
this.pmap[item] = key;
}
return '#' + key;
},
removeKey: function (key) {
if (key = this._parseKey(key)) {
this._removeFromMap(this.store[key]);
delete this.store[key];
}
},
_removeFromMap: function (item) {
if (item && typeof item == 'object') {
this.omap.delete(item);
} else {
delete this.pmap[item];
}
},
remove: function (item) {
var key = this.getKey(item);
this.removeKey(key);
return key;
},
getKey: function (item) {
var key;
if (item && typeof item == 'object') {
key = this.omap.get(item);
} else {
key = this.pmap[item];
}
if (key != undefined) {
return '#' + key;
}
},
getKeys: function () {
return Object.keys(this.store).map(function (key) {
return '#' + key;
});
},
_parseKey: function (key) {
if (key && key[0] == '#') {
return key.slice(1);
}
},
setItem: function (key, item) {
if (key = this._parseKey(key)) {
var old = this.store[key];
if (old) {
this._removeFromMap(old);
}
if (item && typeof item == 'object') {
this.omap.set(item, key);
} else {
this.pmap[item] = key;
}
this.store[key] = item;
}
},
getItem: function (key) {
if (key = this._parseKey(key)) {
return this.store[key];
}
},
getItems: function () {
var items = [], store = this.store;
for (var key in store) {
items.push(store[key]);
}
return items;
},
_applySplices: function (splices) {
var keyMap = {}, key;
for (var i = 0, s; i < splices.length && (s = splices[i]); i++) {
s.addedKeys = [];
for (var j = 0; j < s.removed.length; j++) {
key = this.getKey(s.removed[j]);
keyMap[key] = keyMap[key] ? null : -1;
}
for (j = 0; j < s.addedCount; j++) {
var item = this.userArray[s.index + j];
key = this.getKey(item);
key = key === undefined ? this.add(item) : key;
keyMap[key] = keyMap[key] ? null : 1;
s.addedKeys.push(key);
}
}
var removed = [];
var added = [];
for (key in keyMap) {
if (keyMap[key] < 0) {
this.removeKey(key);
removed.push(key);
}
if (keyMap[key] > 0) {
added.push(key);
}
}
return [{
removed: removed,
added: added
}];
}
};
Polymer.Collection.get = function (userArray) {
return Polymer._collections.get(userArray) || new Polymer.Collection(userArray);
};
Polymer.Collection.applySplices = function (userArray, splices) {
var coll = Polymer._collections.get(userArray);
return coll ? coll._applySplices(splices) : null;
};Polymer({
is: 'habitlab-dom-repeat',
extends: 'template',
_template: null,
properties: {
items: { type: Array },
as: {
type: String,
value: 'item'
},
indexAs: {
type: String,
value: 'index'
},
sort: {
type: Function,
observer: '_sortChanged'
},
filter: {
type: Function,
observer: '_filterChanged'
},
observe: {
type: String,
observer: '_observeChanged'
},
delay: Number,
renderedItemCount: {
type: Number,
notify: !Polymer.Settings.suppressTemplateNotifications,
readOnly: true
},
initialCount: {
type: Number,
observer: '_initializeChunking'
},
targetFramerate: {
type: Number,
value: 20
},
notifyDomChange: { type: Boolean },
_targetFrameTime: {
type: Number,
computed: '_computeFrameTime(targetFramerate)'
}
},
behaviors: [Polymer.Templatizer],
observers: ['_itemsChanged(items.*)'],
created: function () {
this._instances = [];
this._pool = [];
this._limit = Infinity;
var self = this;
this._boundRenderChunk = function () {
self._renderChunk();
};
},
detached: function () {
this.__isDetached = true;
for (var i = 0; i < this._instances.length; i++) {
this._detachInstance(i);
}
},
attached: function () {
if (this.__isDetached) {
this.__isDetached = false;
var refNode;
var parentNode = Polymer.dom(this).parentNode;
if (parentNode.localName == this.is) {
refNode = parentNode;
parentNode = Polymer.dom(parentNode).parentNode;
} else {
refNode = this;
}
var parent = Polymer.dom(parentNode);
for (var i = 0; i < this._instances.length; i++) {
this._attachInstance(i, parent, refNode);
}
}
},
ready: function () {
this._instanceProps = { __key__: true };
this._instanceProps[this.as] = true;
this._instanceProps[this.indexAs] = true;
if (!this.ctor) {
this.templatize(this);
}
},
_sortChanged: function (sort) {
var dataHost = this._getRootDataHost();
this._sortFn = sort && (typeof sort == 'function' ? sort : function () {
return dataHost[sort].apply(dataHost, arguments);
});
this._needFullRefresh = true;
if (this.items) {
this._debounceTemplate(this._render);
}
},
_filterChanged: function (filter) {
var dataHost = this._getRootDataHost();
this._filterFn = filter && (typeof filter == 'function' ? filter : function () {
return dataHost[filter].apply(dataHost, arguments);
});
this._needFullRefresh = true;
if (this.items) {
this._debounceTemplate(this._render);
}
},
_computeFrameTime: function (rate) {
return Math.ceil(1000 / rate);
},
_initializeChunking: function () {
if (this.initialCount) {
this._limit = this.initialCount;
this._chunkCount = this.initialCount;
this._lastChunkTime = performance.now();
}
},
_tryRenderChunk: function () {
if (this.items && this._limit < this.items.length) {
this.debounce('renderChunk', this._requestRenderChunk);
}
},
_requestRenderChunk: function () {
requestAnimationFrame(this._boundRenderChunk);
},
_renderChunk: function () {
var currChunkTime = performance.now();
var ratio = this._targetFrameTime / (currChunkTime - this._lastChunkTime);
this._chunkCount = Math.round(this._chunkCount * ratio) || 1;
this._limit += this._chunkCount;
this._lastChunkTime = currChunkTime;
this._debounceTemplate(this._render);
},
_observeChanged: function () {
this._observePaths = this.observe && this.observe.replace('.*', '.').split(' ');
},
_itemsChanged: function (change) {
if (change.path == 'items') {
if (Array.isArray(this.items)) {
this.collection = Polymer.Collection.get(this.items);
} else if (!this.items) {
this.collection = null;
} else {
this._error(this._logf('habitlab-dom-repeat', 'expected array for `items`,' + ' found', this.items));
}
this._keySplices = [];
this._indexSplices = [];
this._needFullRefresh = true;
this._initializeChunking();
this._debounceTemplate(this._render);
} else if (change.path == 'items.splices') {
this._keySplices = this._keySplices.concat(change.value.keySplices);
this._indexSplices = this._indexSplices.concat(change.value.indexSplices);
this._debounceTemplate(this._render);
} else {
var subpath = change.path.slice(6);
this._forwardItemPath(subpath, change.value);
this._checkObservedPaths(subpath);
}
},
_checkObservedPaths: function (path) {
if (this._observePaths) {
path = path.substring(path.indexOf('.') + 1);
var paths = this._observePaths;
for (var i = 0; i < paths.length; i++) {
if (path.indexOf(paths[i]) === 0) {
this._needFullRefresh = true;
if (this.delay) {
this.debounce('render', this._render, this.delay);
} else {
this._debounceTemplate(this._render);
}
return;
}
}
}
},
render: function () {
this._needFullRefresh = true;
this._debounceTemplate(this._render);
this._flushTemplates();
},
_render: function () {
if (this._needFullRefresh) {
this._applyFullRefresh();
this._needFullRefresh = false;
} else if (this._keySplices.length) {
if (this._sortFn) {
this._applySplicesUserSort(this._keySplices);
} else {
if (this._filterFn) {
this._applyFullRefresh();
} else {
this._applySplicesArrayOrder(this._indexSplices);
}
}
} else {
}
this._keySplices = [];
this._indexSplices = [];
var keyToIdx = this._keyToInstIdx = {};
for (var i = this._instances.length - 1; i >= 0; i--) {
var inst = this._instances[i];
if (inst.isPlaceholder && i < this._limit) {
inst = this._insertInstance(i, inst.__key__);
} else if (!inst.isPlaceholder && i >= this._limit) {
inst = this._downgradeInstance(i, inst.__key__);
}
keyToIdx[inst.__key__] = i;
if (!inst.isPlaceholder) {
inst.__setProperty(this.indexAs, i, true);
}
}
this._pool.length = 0;
this._setRenderedItemCount(this._instances.length);
if (!Polymer.Settings.suppressTemplateNotifications || this.notifyDomChange) {
this.fire('dom-change');
}
this._tryRenderChunk();
},
_applyFullRefresh: function () {
var c = this.collection;
var keys;
if (this._sortFn) {
keys = c ? c.getKeys() : [];
} else {
keys = [];
var items = this.items;
if (items) {
for (var i = 0; i < items.length; i++) {
keys.push(c.getKey(items[i]));
}
}
}
var self = this;
if (this._filterFn) {
keys = keys.filter(function (a) {
return self._filterFn(c.getItem(a));
});
}
if (this._sortFn) {
keys.sort(function (a, b) {
return self._sortFn(c.getItem(a), c.getItem(b));
});
}
for (i = 0; i < keys.length; i++) {
var key = keys[i];
var inst = this._instances[i];
if (inst) {
inst.__key__ = key;
if (!inst.isPlaceholder && i < this._limit) {
inst.__setProperty(this.as, c.getItem(key), true);
}
} else if (i < this._limit) {
this._insertInstance(i, key);
} else {
this._insertPlaceholder(i, key);
}
}
for (var j = this._instances.length - 1; j >= i; j--) {
this._detachAndRemoveInstance(j);
}
},
_numericSort: function (a, b) {
return a - b;
},
_applySplicesUserSort: function (splices) {
var c = this.collection;
var keyMap = {};
var key;
for (var i = 0, s; i < splices.length && (s = splices[i]); i++) {
for (var j = 0; j < s.removed.length; j++) {
key = s.removed[j];
keyMap[key] = keyMap[key] ? null : -1;
}
for (j = 0; j < s.added.length; j++) {
key = s.added[j];
keyMap[key] = keyMap[key] ? null : 1;
}
}
var removedIdxs = [];
var addedKeys = [];
for (key in keyMap) {
if (keyMap[key] === -1) {
removedIdxs.push(this._keyToInstIdx[key]);
}
if (keyMap[key] === 1) {
addedKeys.push(key);
}
}
if (removedIdxs.length) {
removedIdxs.sort(this._numericSort);
for (i = removedIdxs.length - 1; i >= 0; i--) {
var idx = removedIdxs[i];
if (idx !== undefined) {
this._detachAndRemoveInstance(idx);
}
}
}
var self = this;
if (addedKeys.length) {
if (this._filterFn) {
addedKeys = addedKeys.filter(function (a) {
return self._filterFn(c.getItem(a));
});
}
addedKeys.sort(function (a, b) {
return self._sortFn(c.getItem(a), c.getItem(b));
});
var start = 0;
for (i = 0; i < addedKeys.length; i++) {
start = this._insertRowUserSort(start, addedKeys[i]);
}
}
},
_insertRowUserSort: function (start, key) {
var c = this.collection;
var item = c.getItem(key);
var end = this._instances.length - 1;
var idx = -1;
while (start <= end) {
var mid = start + end >> 1;
var midKey = this._instances[mid].__key__;
var cmp = this._sortFn(c.getItem(midKey), item);
if (cmp < 0) {
start = mid + 1;
} else if (cmp > 0) {
end = mid - 1;
} else {
idx = mid;
break;
}
}
if (idx < 0) {
idx = end + 1;
}
this._insertPlaceholder(idx, key);
return idx;
},
_applySplicesArrayOrder: function (splices) {
for (var i = 0, s; i < splices.length && (s = splices[i]); i++) {
for (var j = 0; j < s.removed.length; j++) {
this._detachAndRemoveInstance(s.index);
}
for (j = 0; j < s.addedKeys.length; j++) {
this._insertPlaceholder(s.index + j, s.addedKeys[j]);
}
}
},
_detachInstance: function (idx) {
var inst = this._instances[idx];
if (!inst.isPlaceholder) {
for (var i = 0; i < inst._children.length; i++) {
var el = inst._children[i];
Polymer.dom(inst.root).appendChild(el);
}
return inst;
}
},
_attachInstance: function (idx, parent, refNode) {
var inst = this._instances[idx];
if (!inst.isPlaceholder) {
parent.insertBefore(inst.root, refNode);
}
},
_detachAndRemoveInstance: function (idx) {
var inst = this._detachInstance(idx);
if (inst) {
this._pool.push(inst);
}
this._instances.splice(idx, 1);
},
_insertPlaceholder: function (idx, key) {
this._instances.splice(idx, 0, {
isPlaceholder: true,
__key__: key
});
},
_stampInstance: function (idx, key) {
var model = { __key__: key };
model[this.as] = this.collection.getItem(key);
model[this.indexAs] = idx;
return this.stamp(model);
},
_insertInstance: function (idx, key) {
var inst = this._pool.pop();
if (inst) {
inst.__setProperty(this.as, this.collection.getItem(key), true);
inst.__setProperty('__key__', key, true);
} else {
inst = this._stampInstance(idx, key);
}
var beforeRow = this._instances[idx + 1];
var beforeNode = beforeRow && !beforeRow.isPlaceholder ? beforeRow._children[0] : this;
var parentNode = Polymer.dom(this).parentNode;
if (parentNode.localName == this.is) {
if (beforeNode == this) {
beforeNode = parentNode;
}
parentNode = Polymer.dom(parentNode).parentNode;
}
Polymer.dom(parentNode).insertBefore(inst.root, beforeNode);
this._instances[idx] = inst;
return inst;
},
_downgradeInstance: function (idx, key) {
var inst = this._detachInstance(idx);
if (inst) {
this._pool.push(inst);
}
inst = {
isPlaceholder: true,
__key__: key
};
this._instances[idx] = inst;
return inst;
},
_showHideChildren: function (hidden) {
for (var i = 0; i < this._instances.length; i++) {
if (!this._instances[i].isPlaceholder)
this._instances[i]._showHideChildren(hidden);
}
},
_forwardInstanceProp: function (inst, prop, value) {
if (prop == this.as) {
var idx;
if (this._sortFn || this._filterFn) {
idx = this.items.indexOf(this.collection.getItem(inst.__key__));
} else {
idx = inst[this.indexAs];
}
this.set('items.' + idx, value);
}
},
_forwardInstancePath: function (inst, path, value) {
if (path.indexOf(this.as + '.') === 0) {
this._notifyPath('items.' + inst.__key__ + '.' + path.slice(this.as.length + 1), value);
}
},
_forwardParentProp: function (prop, value) {
var i$ = this._instances;
for (var i = 0, inst; i < i$.length && (inst = i$[i]); i++) {
if (!inst.isPlaceholder) {
inst.__setProperty(prop, value, true);
}
}
},
_forwardParentPath: function (path, value) {
var i$ = this._instances;
for (var i = 0, inst; i < i$.length && (inst = i$[i]); i++) {
if (!inst.isPlaceholder) {
inst._notifyPath(path, value, true);
}
}
},
_forwardItemPath: function (path, value) {
if (this._keyToInstIdx) {
var dot = path.indexOf('.');
var key = path.substring(0, dot < 0 ? path.length : dot);
var idx = this._keyToInstIdx[key];
var inst = this._instances[idx];
if (inst && !inst.isPlaceholder) {
if (dot >= 0) {
path = this.as + '.' + path.substring(dot + 1);
inst._notifyPath(path, value, true);
} else {
inst.__setProperty(this.as, value, true);
}
}
}
},
itemForElement: function (el) {
var instance = this.modelForElement(el);
return instance && instance[this.as];
},
keyForElement: function (el) {
var instance = this.modelForElement(el);
return instance && instance.__key__;
},
indexForElement: function (el) {
var instance = this.modelForElement(el);
return instance && instance[this.indexAs];
}
});Polymer({
is: 'habitlab-array-selector',
_template: null,
properties: {
items: {
type: Array,
observer: 'clearSelection'
},
multi: {
type: Boolean,
value: false,
observer: 'clearSelection'
},
selected: {
type: Object,
notify: true
},
selectedItem: {
type: Object,
notify: true
},
toggle: {
type: Boolean,
value: false
}
},
clearSelection: function () {
if (Array.isArray(this.selected)) {
for (var i = 0; i < this.selected.length; i++) {
this.unlinkPaths('selected.' + i);
}
} else {
this.unlinkPaths('selected');
this.unlinkPaths('selectedItem');
}
if (this.multi) {
if (!this.selected || this.selected.length) {
this.selected = [];
this._selectedColl = Polymer.Collection.get(this.selected);
}
} else {
this.selected = null;
this._selectedColl = null;
}
this.selectedItem = null;
},
isSelected: function (item) {
if (this.multi) {
return this._selectedColl.getKey(item) !== undefined;
} else {
return this.selected == item;
}
},
deselect: function (item) {
if (this.multi) {
if (this.isSelected(item)) {
var skey = this._selectedColl.getKey(item);
this.arrayDelete('selected', item);
this.unlinkPaths('selected.' + skey);
}
} else {
this.selected = null;
this.selectedItem = null;
this.unlinkPaths('selected');
this.unlinkPaths('selectedItem');
}
},
select: function (item) {
var icol = Polymer.Collection.get(this.items);
var key = icol.getKey(item);
if (this.multi) {
if (this.isSelected(item)) {
if (this.toggle) {
this.deselect(item);
}
} else {
this.push('selected', item);
var skey = this._selectedColl.getKey(item);
this.linkPaths('selected.' + skey, 'items.' + key);
}
} else {
if (this.toggle && item == this.selected) {
this.deselect();
} else {
this.selected = item;
this.selectedItem = item;
this.linkPaths('selected', 'items.' + key);
this.linkPaths('selectedItem', 'items.' + key);
}
}
}
});Polymer({
is: 'habitlab-dom-if',
extends: 'template',
_template: null,
properties: {
'if': {
type: Boolean,
value: false,
observer: '_queueRender'
},
restamp: {
type: Boolean,
value: false,
observer: '_queueRender'
},
notifyDomChange: { type: Boolean }
},
behaviors: [Polymer.Templatizer],
_queueRender: function () {
this._debounceTemplate(this._render);
},
detached: function () {
var parentNode = this.parentNode;
if (parentNode && parentNode.localName == this.is) {
parentNode = Polymer.dom(parentNode).parentNode;
}
if (!parentNode || parentNode.nodeType == Node.DOCUMENT_FRAGMENT_NODE && (!Polymer.Settings.hasShadow || !(parentNode instanceof ShadowRoot))) {
this._teardownInstance();
}
},
attached: function () {
if (this.if && this.ctor) {
this.async(this._ensureInstance);
}
},
render: function () {
this._flushTemplates();
},
_render: function () {
if (this.if) {
if (!this.ctor) {
this.templatize(this);
}
this._ensureInstance();
this._showHideChildren();
} else if (this.restamp) {
this._teardownInstance();
}
if (!this.restamp && this._instance) {
this._showHideChildren();
}
if (this.if != this._lastIf) {
if (!Polymer.Settings.suppressTemplateNotifications || this.notifyDomChange) {
this.fire('dom-change');
}
this._lastIf = this.if;
}
},
_ensureInstance: function () {
var refNode;
var parentNode = Polymer.dom(this).parentNode;
if (parentNode && parentNode.localName == this.is) {
refNode = parentNode;
parentNode = Polymer.dom(parentNode).parentNode;
} else {
refNode = this;
}
if (parentNode) {
if (!this._instance) {
this._instance = this.stamp();
var root = this._instance.root;
Polymer.dom(parentNode).insertBefore(root, refNode);
} else {
var c$ = this._instance._children;
if (c$ && c$.length) {
var lastChild = Polymer.dom(refNode).previousSibling;
if (lastChild !== c$[c$.length - 1]) {
for (var i = 0, n; i < c$.length && (n = c$[i]); i++) {
Polymer.dom(parentNode).insertBefore(n, refNode);
}
}
}
}
}
},
_teardownInstance: function () {
if (this._instance) {
var c$ = this._instance._children;
if (c$ && c$.length) {
var parent = Polymer.dom(Polymer.dom(c$[0]).parentNode);
for (var i = 0, n; i < c$.length && (n = c$[i]); i++) {
parent.removeChild(n);
}
}
this._instance = null;
}
},
_showHideChildren: function () {
var hidden = this.__hideTemplateChildren__ || !this.if;
if (this._instance) {
this._instance._showHideChildren(hidden);
}
},
_forwardParentProp: function (prop, value) {
if (this._instance) {
this._instance.__setProperty(prop, value, true);
}
},
_forwardParentPath: function (path, value) {
if (this._instance) {
this._instance._notifyPath(path, value, true);
}
}
});Polymer({
is: 'habitlab-dom-bind',
properties: { notifyDomChange: { type: Boolean } },
extends: 'template',
_template: null,
created: function () {
var self = this;
Polymer.RenderStatus.whenReady(function () {
if (document.readyState == 'loading') {
document.addEventListener('DOMContentLoaded', function () {
self._markImportsReady();
});
} else {
self._markImportsReady();
}
});
},
_ensureReady: function () {
if (!this._readied) {
this._readySelf();
}
},
_markImportsReady: function () {
this._importsReady = true;
this._ensureReady();
},
_registerFeatures: function () {
this._prepConstructor();
},
_insertChildren: function () {
var refNode;
var parentNode = Polymer.dom(this).parentNode;
if (parentNode.localName == this.is) {
refNode = parentNode;
parentNode = Polymer.dom(parentNode).parentNode;
} else {
refNode = this;
}
Polymer.dom(parentNode).insertBefore(this.root, refNode);
},
_removeChildren: function () {
if (this._children) {
for (var i = 0; i < this._children.length; i++) {
this.root.appendChild(this._children[i]);
}
}
},
_initFeatures: function () {
},
_scopeElementClass: function (element, selector) {
if (this.dataHost) {
return this.dataHost._scopeElementClass(element, selector);
} else {
return selector;
}
},
_configureInstanceProperties: function () {
},
_prepConfigure: function () {
var config = {};
for (var prop in this._propertyEffects) {
config[prop] = this[prop];
}
var setupConfigure = this._setupConfigure;
this._setupConfigure = function () {
setupConfigure.call(this, config);
};
},
attached: function () {
if (this._importsReady) {
this.render();
}
},
detached: function () {
this._removeChildren();
},
render: function () {
this._ensureReady();
if (!this._children) {
this._template = this;
this._prepAnnotations();
this._prepEffects();
this._prepBehaviors();
this._prepConfigure();
this._prepBindings();
this._prepPropertyInfo();
Polymer.Base._initFeatures.call(this);
this._children = Polymer.TreeApi.arrayCopyChildNodes(this.root);
}
this._insertChildren();
if (!Polymer.Settings.suppressTemplateNotifications || this.notifyDomChange) {
this.fire('dom-change');
}
}
});

/***/ }),

/***/ "./src/bower_components/polymer/polymer-micro-0.js":
/*!*********************************************************!*\
  !*** ./src/bower_components/polymer/polymer-micro-0.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
function resolve() {
document.body.removeAttribute('unresolved');
}
if (window.WebComponents) {
addEventListener('WebComponentsReady', resolve);
} else {
if (document.readyState === 'interactive' || document.readyState === 'complete') {
resolve();
} else {
addEventListener('DOMContentLoaded', resolve);
}
}
}());window.Polymer = {
Settings: function () {
var settings = window.Polymer || {};
if (!settings.noUrlSettings) {
var parts = location.search.slice(1).split('&');
for (var i = 0, o; i < parts.length && (o = parts[i]); i++) {
o = o.split('=');
o[0] && (settings[o[0]] = o[1] || true);
}
}
settings.wantShadow = settings.dom === 'shadow';
settings.hasShadow = Boolean(Element.prototype.createShadowRoot);
settings.nativeShadow = settings.hasShadow && !window.ShadowDOMPolyfill;
settings.useShadow = settings.wantShadow && settings.hasShadow;
settings.hasNativeImports = Boolean('import' in document.createElement('link'));
settings.useNativeImports = settings.hasNativeImports;
settings.useNativeCustomElements = !window.CustomElements || window.CustomElements.useNative;
settings.useNativeShadow = settings.useShadow && settings.nativeShadow;
settings.usePolyfillProto = !settings.useNativeCustomElements && !Object.__proto__;
settings.hasNativeCSSProperties = !navigator.userAgent.match('AppleWebKit/601') && window.CSS && CSS.supports && CSS.supports('box-shadow', '0 0 0 var(--foo)');
settings.useNativeCSSProperties = settings.hasNativeCSSProperties && settings.lazyRegister && settings.useNativeCSSProperties;
settings.isIE = navigator.userAgent.match('Trident');
return settings;
}()
};(function () {
var userPolymer = window.Polymer;
window.Polymer = function (prototype) {
if (typeof prototype === 'function') {
prototype = prototype.prototype;
}
if (!prototype) {
prototype = {};
}
prototype = desugar(prototype);
var customCtor = prototype === prototype.constructor.prototype ? prototype.constructor : null;
var options = { prototype: prototype };
if (prototype.extends) {
options.extends = prototype.extends;
}
Polymer.telemetry._registrate(prototype);
var ctor = document.registerElement(prototype.is, options);
return customCtor || ctor;
};
var desugar = function (prototype) {
var base = Polymer.Base;
if (prototype.extends) {
base = Polymer.Base._getExtendedPrototype(prototype.extends);
}
prototype = Polymer.Base.chainObject(prototype, base);
prototype.registerCallback();
return prototype;
};
if (userPolymer) {
for (var i in userPolymer) {
Polymer[i] = userPolymer[i];
}
}
Polymer.Class = function (prototype) {
if (!prototype.factoryImpl) {
prototype.factoryImpl = function () {
};
}
return desugar(prototype).constructor;
};
}());
Polymer.telemetry = {
registrations: [],
_regLog: function (prototype) {
console.log('[' + prototype.is + ']: registered');
},
_registrate: function (prototype) {
this.registrations.push(prototype);
Polymer.log && this._regLog(prototype);
},
dumpRegistrations: function () {
this.registrations.forEach(this._regLog);
}
};Object.defineProperty(window, 'currentImport', {
enumerable: true,
configurable: true,
get: function () {
return (document._currentScript || document.currentScript || {}).ownerDocument;
}
});Polymer.RenderStatus = {
_ready: false,
_callbacks: [],
whenReady: function (cb) {
if (this._ready) {
cb();
} else {
this._callbacks.push(cb);
}
},
_makeReady: function () {
this._ready = true;
for (var i = 0; i < this._callbacks.length; i++) {
this._callbacks[i]();
}
this._callbacks = [];
},
_catchFirstRender: function () {
requestAnimationFrame(function () {
Polymer.RenderStatus._makeReady();
});
},
_afterNextRenderQueue: [],
_waitingNextRender: false,
afterNextRender: function (element, fn, args) {
this._watchNextRender();
this._afterNextRenderQueue.push([
element,
fn,
args
]);
},
hasRendered: function () {
return this._ready;
},
_watchNextRender: function () {
if (!this._waitingNextRender) {
this._waitingNextRender = true;
var fn = function () {
Polymer.RenderStatus._flushNextRender();
};
if (!this._ready) {
this.whenReady(fn);
} else {
requestAnimationFrame(fn);
}
}
},
_flushNextRender: function () {
var self = this;
setTimeout(function () {
self._flushRenderCallbacks(self._afterNextRenderQueue);
self._afterNextRenderQueue = [];
self._waitingNextRender = false;
});
},
_flushRenderCallbacks: function (callbacks) {
for (var i = 0, h; i < callbacks.length; i++) {
h = callbacks[i];
h[1].apply(h[0], h[2] || Polymer.nar);
}
}
};
if (window.HTMLImports) {
HTMLImports.whenReady(function () {
Polymer.RenderStatus._catchFirstRender();
});
} else {
Polymer.RenderStatus._catchFirstRender();
}
Polymer.ImportStatus = Polymer.RenderStatus;
Polymer.ImportStatus.whenLoaded = Polymer.ImportStatus.whenReady;(function () {
'use strict';
var settings = Polymer.Settings;
Polymer.Base = {
__isPolymerInstance__: true,
_addFeature: function (feature) {
this.mixin(this, feature);
},
registerCallback: function () {
if (settings.lazyRegister === 'max') {
if (this.beforeRegister) {
this.beforeRegister();
}
} else {
this._desugarBehaviors();
for (var i = 0, b; i < this.behaviors.length; i++) {
b = this.behaviors[i];
if (b.beforeRegister) {
b.beforeRegister.call(this);
}
}
if (this.beforeRegister) {
this.beforeRegister();
}
}
this._registerFeatures();
if (!settings.lazyRegister) {
this.ensureRegisterFinished();
}
},
createdCallback: function () {
this.is_habitlab_element = true;
if (settings.disableUpgradeEnabled) {
if (this.hasAttribute('disable-upgrade')) {
this._propertySetter = disableUpgradePropertySetter;
this._configValue = null;
this.__data__ = {};
return;
} else {
this.__hasInitialized = true;
}
}
this.__initialize();
},
__initialize: function () {
if (!this.__hasRegisterFinished) {
this._ensureRegisterFinished(this.__proto__);
}
Polymer.telemetry.instanceCount++;
this.root = this;
for (var i = 0, b; i < this.behaviors.length; i++) {
b = this.behaviors[i];
if (b.created) {
b.created.call(this);
}
}
if (this.created) {
this.created();
}
this._initFeatures();
},
ensureRegisterFinished: function () {
this._ensureRegisterFinished(this);
},
_ensureRegisterFinished: function (proto) {
if (proto.__hasRegisterFinished !== proto.is || !proto.is) {
if (settings.lazyRegister === 'max') {
proto._desugarBehaviors();
for (var i = 0, b; i < proto.behaviors.length; i++) {
b = proto.behaviors[i];
if (b.beforeRegister) {
b.beforeRegister.call(proto);
}
}
}
proto.__hasRegisterFinished = proto.is;
if (proto._finishRegisterFeatures) {
proto._finishRegisterFeatures();
}
for (var j = 0, pb; j < proto.behaviors.length; j++) {
pb = proto.behaviors[j];
if (pb.registered) {
pb.registered.call(proto);
}
}
if (proto.registered) {
proto.registered();
}
if (settings.usePolyfillProto && proto !== this) {
proto.extend(this, proto);
}
}
},
attachedCallback: function () {
var self = this;
Polymer.RenderStatus.whenReady(function () {
self.isAttached = true;
for (var i = 0, b; i < self.behaviors.length; i++) {
b = self.behaviors[i];
if (b.attached) {
b.attached.call(self);
}
}
if (self.attached) {
self.attached();
}
});
},
detachedCallback: function () {
var self = this;
Polymer.RenderStatus.whenReady(function () {
self.isAttached = false;
for (var i = 0, b; i < self.behaviors.length; i++) {
b = self.behaviors[i];
if (b.detached) {
b.detached.call(self);
}
}
if (self.detached) {
self.detached();
}
});
},
attributeChangedCallback: function (name, oldValue, newValue) {
this._attributeChangedImpl(name);
for (var i = 0, b; i < this.behaviors.length; i++) {
b = this.behaviors[i];
if (b.attributeChanged) {
b.attributeChanged.call(this, name, oldValue, newValue);
}
}
if (this.attributeChanged) {
this.attributeChanged(name, oldValue, newValue);
}
},
_attributeChangedImpl: function (name) {
this._setAttributeToProperty(this, name);
},
extend: function (target, source) {
if (target && source) {
var n$ = Object.getOwnPropertyNames(source);
for (var i = 0, n; i < n$.length && (n = n$[i]); i++) {
this.copyOwnProperty(n, source, target);
}
}
return target || source;
},
mixin: function (target, source) {
for (var i in source) {
target[i] = source[i];
}
return target;
},
copyOwnProperty: function (name, source, target) {
var pd = Object.getOwnPropertyDescriptor(source, name);
if (pd) {
Object.defineProperty(target, name, pd);
}
},
_logger: function (level, args) {
if (args.length === 1 && Array.isArray(args[0])) {
args = args[0];
}
switch (level) {
case 'log':
case 'warn':
case 'error':
console[level].apply(console, args);
break;
}
},
_log: function () {
var args = Array.prototype.slice.call(arguments, 0);
this._logger('log', args);
},
_warn: function () {
var args = Array.prototype.slice.call(arguments, 0);
this._logger('warn', args);
},
_error: function () {
var args = Array.prototype.slice.call(arguments, 0);
this._logger('error', args);
},
_logf: function () {
return this._logPrefix.concat(this.is).concat(Array.prototype.slice.call(arguments, 0));
}
};
Polymer.Base._logPrefix = function () {
var color = window.chrome && !/edge/i.test(navigator.userAgent) || /firefox/i.test(navigator.userAgent);
return color ? [
'%c[%s::%s]:',
'font-weight: bold; background-color:#EEEE00;'
] : ['[%s::%s]:'];
}();
Polymer.Base.chainObject = function (object, inherited) {
if (object && inherited && object !== inherited) {
if (!Object.__proto__) {
object = Polymer.Base.extend(Object.create(inherited), object);
}
object.__proto__ = inherited;
}
return object;
};
Polymer.Base = Polymer.Base.chainObject(Polymer.Base, HTMLElement.prototype);
Polymer.BaseDescriptors = {};
var disableUpgradePropertySetter;
if (settings.disableUpgradeEnabled) {
disableUpgradePropertySetter = function (property, value) {
this.__data__[property] = value;
};
var origAttributeChangedCallback = Polymer.Base.attributeChangedCallback;
Polymer.Base.attributeChangedCallback = function (name, oldValue, newValue) {
if (!this.__hasInitialized && name === 'disable-upgrade') {
this.__hasInitialized = true;
this._propertySetter = Polymer.Bind._modelApi._propertySetter;
this._configValue = Polymer.Base._configValue;
this.__initialize();
}
origAttributeChangedCallback.call(this, name, oldValue, newValue);
};
}
if (window.CustomElements) {
Polymer.instanceof = CustomElements.instanceof;
} else {
Polymer.instanceof = function (obj, ctor) {
return obj instanceof ctor;
};
}
Polymer.isInstance = function (obj) {
return Boolean(obj && obj.__isPolymerInstance__);
};
Polymer.telemetry.instanceCount = 0;
}());(function () {
var modules = {};
var lcModules = {};
var findModule = function (id) {
return modules[id] || lcModules[id.toLowerCase()];
};
var DomModule = function () {
return document.createElement('habitlab-dom-module');
};
DomModule.prototype = Object.create(HTMLElement.prototype);
Polymer.Base.mixin(DomModule.prototype, {
createdCallback: function () {
this.register();
},
register: function (id) {
id = id || this.id || this.getAttribute('name') || this.getAttribute('is');
if (id) {
this.id = id;
modules[id] = this;
lcModules[id.toLowerCase()] = this;
}
},
import: function (id, selector) {
if (id) {
var m = findModule(id);
if (!m) {
forceDomModulesUpgrade();
m = findModule(id);
}
if (m && selector) {
m = m.querySelector(selector);
}
return m;
}
}
});
Object.defineProperty(DomModule.prototype, 'constructor', {
value: DomModule,
configurable: true,
writable: true
});
var cePolyfill = window.CustomElements && !CustomElements.useNative;
document.registerElement('habitlab-dom-module', DomModule);
function forceDomModulesUpgrade() {
if (cePolyfill) {
var script = document._currentScript || document.currentScript;
var doc = script && script.ownerDocument || document;
var modules = doc.querySelectorAll('habitlab-dom-module');
for (var i = modules.length - 1, m; i >= 0 && (m = modules[i]); i--) {
if (m.__upgraded__) {
return;
} else {
CustomElements.upgrade(m);
}
}
}
}
}());Polymer.Base._addFeature({
_prepIs: function () {
if (!this.is) {
var module = (document._currentScript || document.currentScript).parentNode;
if (module.localName === 'habitlab-dom-module') {
var id = module.id || module.getAttribute('name') || module.getAttribute('is');
this.is = id;
}
}
if (this.is) {
this.is = this.is.toLowerCase();
}
}
});Polymer.Base._addFeature({
behaviors: [],
_desugarBehaviors: function () {
if (this.behaviors.length) {
this.behaviors = this._desugarSomeBehaviors(this.behaviors);
}
},
_desugarSomeBehaviors: function (behaviors) {
var behaviorSet = [];
behaviors = this._flattenBehaviorsList(behaviors);
for (var i = behaviors.length - 1; i >= 0; i--) {
var b = behaviors[i];
if (behaviorSet.indexOf(b) === -1) {
this._mixinBehavior(b);
behaviorSet.unshift(b);
}
}
return behaviorSet;
},
_flattenBehaviorsList: function (behaviors) {
var flat = [];
for (var i = 0; i < behaviors.length; i++) {
var b = behaviors[i];
if (b instanceof Array) {
flat = flat.concat(this._flattenBehaviorsList(b));
} else if (b) {
flat.push(b);
} else {
this._warn(this._logf('_flattenBehaviorsList', 'behavior is null, check for missing or 404 import'));
}
}
return flat;
},
_mixinBehavior: function (b) {
var n$ = Object.getOwnPropertyNames(b);
var useAssignment = b._noAccessors;
for (var i = 0, n; i < n$.length && (n = n$[i]); i++) {
if (!Polymer.Base._behaviorProperties[n] && !this.hasOwnProperty(n)) {
if (useAssignment) {
this[n] = b[n];
} else {
this.copyOwnProperty(n, b, this);
}
}
}
},
_prepBehaviors: function () {
this._prepFlattenedBehaviors(this.behaviors);
},
_prepFlattenedBehaviors: function (behaviors) {
for (var i = 0, l = behaviors.length; i < l; i++) {
this._prepBehavior(behaviors[i]);
}
this._prepBehavior(this);
},
_marshalBehaviors: function () {
for (var i = 0; i < this.behaviors.length; i++) {
this._marshalBehavior(this.behaviors[i]);
}
this._marshalBehavior(this);
}
});
Polymer.Base._behaviorProperties = {
hostAttributes: true,
beforeRegister: true,
registered: true,
properties: true,
observers: true,
listeners: true,
created: true,
attached: true,
detached: true,
attributeChanged: true,
ready: true,
_noAccessors: true
};Polymer.Base._addFeature({
_getExtendedPrototype: function (tag) {
return this._getExtendedNativePrototype(tag);
},
_nativePrototypes: {},
_getExtendedNativePrototype: function (tag) {
var p = this._nativePrototypes[tag];
if (!p) {
p = Object.create(this.getNativePrototype(tag));
var p$ = Object.getOwnPropertyNames(Polymer.Base);
for (var i = 0, n; i < p$.length && (n = p$[i]); i++) {
if (!Polymer.BaseDescriptors[n]) {
p[n] = Polymer.Base[n];
}
}
Object.defineProperties(p, Polymer.BaseDescriptors);
this._nativePrototypes[tag] = p;
}
return p;
},
getNativePrototype: function (tag) {
return Object.getPrototypeOf(document.createElement(tag));
}
});Polymer.Base._addFeature({
_prepConstructor: function () {
this._factoryArgs = this.extends ? [
this.extends,
this.is
] : [this.is];
var ctor = function () {
return this._factory(arguments);
};
if (this.hasOwnProperty('extends')) {
ctor.extends = this.extends;
}
Object.defineProperty(this, 'constructor', {
value: ctor,
writable: true,
configurable: true
});
ctor.prototype = this;
},
_factory: function (args) {
var elt = document.createElement.apply(document, this._factoryArgs);
if (this.factoryImpl) {
this.factoryImpl.apply(elt, args);
}
return elt;
}
});Polymer.nob = Object.create(null);
Polymer.Base._addFeature({
getPropertyInfo: function (property) {
var info = this._getPropertyInfo(property, this.properties);
if (!info) {
for (var i = 0; i < this.behaviors.length; i++) {
info = this._getPropertyInfo(property, this.behaviors[i].properties);
if (info) {
return info;
}
}
}
return info || Polymer.nob;
},
_getPropertyInfo: function (property, properties) {
var p = properties && properties[property];
if (typeof p === 'function') {
p = properties[property] = { type: p };
}
if (p) {
p.defined = true;
}
return p;
},
_prepPropertyInfo: function () {
this._propertyInfo = {};
for (var i = 0; i < this.behaviors.length; i++) {
this._addPropertyInfo(this._propertyInfo, this.behaviors[i].properties);
}
this._addPropertyInfo(this._propertyInfo, this.properties);
this._addPropertyInfo(this._propertyInfo, this._propertyEffects);
},
_addPropertyInfo: function (target, source) {
if (source) {
var t, s;
for (var i in source) {
t = target[i];
s = source[i];
if (i[0] === '_' && !s.readOnly) {
continue;
}
if (!target[i]) {
target[i] = {
type: typeof s === 'function' ? s : s.type,
readOnly: s.readOnly,
attribute: Polymer.CaseMap.camelToDashCase(i)
};
} else {
if (!t.type) {
t.type = s.type;
}
if (!t.readOnly) {
t.readOnly = s.readOnly;
}
}
}
}
}
});
(function () {
var propertiesDesc = {
configurable: true,
writable: true,
enumerable: true,
value: {}
};
Polymer.BaseDescriptors.properties = propertiesDesc;
Object.defineProperty(Polymer.Base, 'properties', propertiesDesc);
}());Polymer.CaseMap = {
_caseMap: {},
_rx: {
dashToCamel: /-[a-z]/g,
camelToDash: /([A-Z])/g
},
dashToCamelCase: function (dash) {
return this._caseMap[dash] || (this._caseMap[dash] = dash.indexOf('-') < 0 ? dash : dash.replace(this._rx.dashToCamel, function (m) {
return m[1].toUpperCase();
}));
},
camelToDashCase: function (camel) {
return this._caseMap[camel] || (this._caseMap[camel] = camel.replace(this._rx.camelToDash, '-$1').toLowerCase());
}
};Polymer.Base._addFeature({
_addHostAttributes: function (attributes) {
if (!this._aggregatedAttributes) {
this._aggregatedAttributes = {};
}
if (attributes) {
this.mixin(this._aggregatedAttributes, attributes);
}
},
_marshalHostAttributes: function () {
if (this._aggregatedAttributes) {
this._applyAttributes(this, this._aggregatedAttributes);
}
},
_applyAttributes: function (node, attr$) {
for (var n in attr$) {
if (!this.hasAttribute(n) && n !== 'class') {
var v = attr$[n];
this.serializeValueToAttribute(v, n, this);
}
}
},
_marshalAttributes: function () {
this._takeAttributesToModel(this);
},
_takeAttributesToModel: function (model) {
if (this.hasAttributes()) {
for (var i in this._propertyInfo) {
var info = this._propertyInfo[i];
if (this.hasAttribute(info.attribute)) {
this._setAttributeToProperty(model, info.attribute, i, info);
}
}
}
},
_setAttributeToProperty: function (model, attribute, property, info) {
if (!this._serializing) {
property = property || Polymer.CaseMap.dashToCamelCase(attribute);
info = info || this._propertyInfo && this._propertyInfo[property];
if (info && !info.readOnly) {
var v = this.getAttribute(attribute);
model[property] = this.deserialize(v, info.type);
}
}
},
_serializing: false,
reflectPropertyToAttribute: function (property, attribute, value) {
this._serializing = true;
value = value === undefined ? this[property] : value;
this.serializeValueToAttribute(value, attribute || Polymer.CaseMap.camelToDashCase(property));
this._serializing = false;
},
serializeValueToAttribute: function (value, attribute, node) {
var str = this.serialize(value);
node = node || this;
if (str === undefined) {
node.removeAttribute(attribute);
} else {
node.setAttribute(attribute, str);
}
},
deserialize: function (value, type) {
switch (type) {
case Number:
value = Number(value);
break;
case Boolean:
value = value != null;
break;
case Object:
try {
value = JSON.parse(value);
} catch (x) {
}
break;
case Array:
try {
value = JSON.parse(value);
} catch (x) {
value = null;
console.warn('Polymer::Attributes: couldn`t decode Array as JSON');
}
break;
case Date:
value = new Date(value);
break;
case String:
default:
break;
}
return value;
},
serialize: function (value) {
switch (typeof value) {
case 'boolean':
return value ? '' : undefined;
case 'object':
if (value instanceof Date) {
return value.toString();
} else if (value) {
try {
return JSON.stringify(value);
} catch (x) {
return '';
}
}
default:
return value != null ? value : undefined;
}
}
});Polymer.version = "1.9.3";Polymer.Base._addFeature({
_registerFeatures: function () {
this._prepIs();
this._prepBehaviors();
this._prepConstructor();
this._prepPropertyInfo();
},
_prepBehavior: function (b) {
this._addHostAttributes(b.hostAttributes);
},
_marshalBehavior: function (b) {
},
_initFeatures: function () {
this._marshalHostAttributes();
this._marshalBehaviors();
}
});

/***/ }),

/***/ "./src/bower_components/polymer/polymer-micro.deps.js":
/*!************************************************************!*\
  !*** ./src/bower_components/polymer/polymer-micro.deps.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
import_dom_modules(__webpack_require__(/*! bower_components/polymer/polymer-micro.html */ "./src/bower_components/polymer/polymer-micro.html"), 'bower_components/polymer/polymer-micro.html')
__webpack_require__(/*! bower_components/polymer/polymer-micro-0 */ "./src/bower_components/polymer/polymer-micro-0.js")


/***/ }),

/***/ "./src/bower_components/polymer/polymer-micro.html":
/*!*********************************************************!*\
  !*** ./src/bower_components/polymer/polymer-micro.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><script src=polymer-micro-0.js></script> </head><body></body></html>";

/***/ }),

/***/ "./src/bower_components/polymer/polymer-mini-0.js":
/*!********************************************************!*\
  !*** ./src/bower_components/polymer/polymer-mini-0.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
function resolveCss(cssText, ownerDocument) {
return cssText.replace(CSS_URL_RX, function (m, pre, url, post) {
return pre + '\'' + resolve(url.replace(/["']/g, ''), ownerDocument) + '\'' + post;
});
}
function resolveAttrs(element, ownerDocument) {
for (var name in URL_ATTRS) {
var a$ = URL_ATTRS[name];
for (var i = 0, l = a$.length, a, at, v; i < l && (a = a$[i]); i++) {
if (name === '*' || element.localName === name) {
at = element.attributes[a];
v = at && at.value;
if (v && v.search(BINDING_RX) < 0) {
at.value = a === 'style' ? resolveCss(v, ownerDocument) : resolve(v, ownerDocument);
}
}
}
}
}
function resolve(url, ownerDocument) {
if (url && ABS_URL.test(url)) {
return url;
}
var resolver = getUrlResolver(ownerDocument);
resolver.href = url;
return resolver.href || url;
}
var tempDoc;
var tempDocBase;
function resolveUrl(url, baseUri) {
if (!tempDoc) {
tempDoc = document.implementation.createHTMLDocument('temp');
tempDocBase = tempDoc.createElement('base');
tempDoc.head.appendChild(tempDocBase);
}
tempDocBase.href = baseUri;
return resolve(url, tempDoc);
}
function getUrlResolver(ownerDocument) {
return ownerDocument.body.__urlResolver || (ownerDocument.body.__urlResolver = ownerDocument.createElement('a'));
}
function pathFromUrl(url) {
return url.substring(0, url.lastIndexOf('/') + 1);
}
var CSS_URL_RX = /(url\()([^)]*)(\))/g;
var URL_ATTRS = {
'*': [
'href',
'src',
'style',
'url'
],
form: ['action']
};
var ABS_URL = /(^\/)|(^#)|(^[\w-\d]*:)/;
var BINDING_RX = /\{\{|\[\[/;
Polymer.ResolveUrl = {
resolveCss: resolveCss,
resolveAttrs: resolveAttrs,
resolveUrl: resolveUrl,
pathFromUrl: pathFromUrl
};
Polymer.rootPath = Polymer.Settings.rootPath || pathFromUrl(document.baseURI || window.location.href);
}());Polymer.Base._addFeature({
_prepTemplate: function () {
var module;
if (this._template === undefined) {
module = Polymer.DomModule.import(this.is);
this._template = module && module.querySelector('template');
}
if (module) {
var assetPath = module.getAttribute('assetpath') || '';
var importURL = Polymer.ResolveUrl.resolveUrl(assetPath, module.ownerDocument.baseURI);
this._importPath = Polymer.ResolveUrl.pathFromUrl(importURL);
} else {
this._importPath = '';
}
if (this._template && this._template.hasAttribute('is')) {
this._warn(this._logf('_prepTemplate', 'top-level Polymer template ' + 'must not be a type-extension, found', this._template, 'Move inside simple <template>.'));
}
if (this._template && !this._template.content && window.HTMLTemplateElement && HTMLTemplateElement.decorate) {
HTMLTemplateElement.decorate(this._template);
}
},
_stampTemplate: function () {
if (this._template) {
this.root = this.instanceTemplate(this._template);
}
},
instanceTemplate: function (template) {
var dom = document.importNode(template._content || template.content, true);
return dom;
}
});(function () {
var baseAttachedCallback = Polymer.Base.attachedCallback;
var baseDetachedCallback = Polymer.Base.detachedCallback;
Polymer.Base._addFeature({
_hostStack: [],
ready: function () {
},
_registerHost: function (host) {
this.dataHost = host = host || Polymer.Base._hostStack[Polymer.Base._hostStack.length - 1];
if (host && host._clients) {
host._clients.push(this);
}
this._clients = null;
this._clientsReadied = false;
},
_beginHosting: function () {
Polymer.Base._hostStack.push(this);
if (!this._clients) {
this._clients = [];
}
},
_endHosting: function () {
Polymer.Base._hostStack.pop();
},
_tryReady: function () {
this._readied = false;
if (this._canReady()) {
this._ready();
}
},
_canReady: function () {
return !this.dataHost || this.dataHost._clientsReadied;
},
_ready: function () {
this._beforeClientsReady();
if (this._template) {
this._setupRoot();
this._readyClients();
}
this._clientsReadied = true;
this._clients = null;
this._afterClientsReady();
this._readySelf();
},
_readyClients: function () {
this._beginDistribute();
var c$ = this._clients;
if (c$) {
for (var i = 0, l = c$.length, c; i < l && (c = c$[i]); i++) {
c._ready();
}
}
this._finishDistribute();
},
_readySelf: function () {
for (var i = 0, b; i < this.behaviors.length; i++) {
b = this.behaviors[i];
if (b.ready) {
b.ready.call(this);
}
}
if (this.ready) {
this.ready();
}
this._readied = true;
if (this._attachedPending) {
this._attachedPending = false;
this.attachedCallback();
}
},
_beforeClientsReady: function () {
},
_afterClientsReady: function () {
},
_beforeAttached: function () {
},
attachedCallback: function () {
if (this._readied) {
this._beforeAttached();
baseAttachedCallback.call(this);
} else {
this._attachedPending = true;
}
},
detachedCallback: function () {
if (this._readied) {
baseDetachedCallback.call(this);
} else {
this._attachedPending = false;
}
}
});
}());Polymer.ArraySplice = function () {
function newSplice(index, removed, addedCount) {
return {
index: index,
removed: removed,
addedCount: addedCount
};
}
var EDIT_LEAVE = 0;
var EDIT_UPDATE = 1;
var EDIT_ADD = 2;
var EDIT_DELETE = 3;
function ArraySplice() {
}
ArraySplice.prototype = {
calcEditDistances: function (current, currentStart, currentEnd, old, oldStart, oldEnd) {
var rowCount = oldEnd - oldStart + 1;
var columnCount = currentEnd - currentStart + 1;
var distances = new Array(rowCount);
for (var i = 0; i < rowCount; i++) {
distances[i] = new Array(columnCount);
distances[i][0] = i;
}
for (var j = 0; j < columnCount; j++)
distances[0][j] = j;
for (i = 1; i < rowCount; i++) {
for (j = 1; j < columnCount; j++) {
if (this.equals(current[currentStart + j - 1], old[oldStart + i - 1]))
distances[i][j] = distances[i - 1][j - 1];
else {
var north = distances[i - 1][j] + 1;
var west = distances[i][j - 1] + 1;
distances[i][j] = north < west ? north : west;
}
}
}
return distances;
},
spliceOperationsFromEditDistances: function (distances) {
var i = distances.length - 1;
var j = distances[0].length - 1;
var current = distances[i][j];
var edits = [];
while (i > 0 || j > 0) {
if (i == 0) {
edits.push(EDIT_ADD);
j--;
continue;
}
if (j == 0) {
edits.push(EDIT_DELETE);
i--;
continue;
}
var northWest = distances[i - 1][j - 1];
var west = distances[i - 1][j];
var north = distances[i][j - 1];
var min;
if (west < north)
min = west < northWest ? west : northWest;
else
min = north < northWest ? north : northWest;
if (min == northWest) {
if (northWest == current) {
edits.push(EDIT_LEAVE);
} else {
edits.push(EDIT_UPDATE);
current = northWest;
}
i--;
j--;
} else if (min == west) {
edits.push(EDIT_DELETE);
i--;
current = west;
} else {
edits.push(EDIT_ADD);
j--;
current = north;
}
}
edits.reverse();
return edits;
},
calcSplices: function (current, currentStart, currentEnd, old, oldStart, oldEnd) {
var prefixCount = 0;
var suffixCount = 0;
var minLength = Math.min(currentEnd - currentStart, oldEnd - oldStart);
if (currentStart == 0 && oldStart == 0)
prefixCount = this.sharedPrefix(current, old, minLength);
if (currentEnd == current.length && oldEnd == old.length)
suffixCount = this.sharedSuffix(current, old, minLength - prefixCount);
currentStart += prefixCount;
oldStart += prefixCount;
currentEnd -= suffixCount;
oldEnd -= suffixCount;
if (currentEnd - currentStart == 0 && oldEnd - oldStart == 0)
return [];
if (currentStart == currentEnd) {
var splice = newSplice(currentStart, [], 0);
while (oldStart < oldEnd)
splice.removed.push(old[oldStart++]);
return [splice];
} else if (oldStart == oldEnd)
return [newSplice(currentStart, [], currentEnd - currentStart)];
var ops = this.spliceOperationsFromEditDistances(this.calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd));
splice = undefined;
var splices = [];
var index = currentStart;
var oldIndex = oldStart;
for (var i = 0; i < ops.length; i++) {
switch (ops[i]) {
case EDIT_LEAVE:
if (splice) {
splices.push(splice);
splice = undefined;
}
index++;
oldIndex++;
break;
case EDIT_UPDATE:
if (!splice)
splice = newSplice(index, [], 0);
splice.addedCount++;
index++;
splice.removed.push(old[oldIndex]);
oldIndex++;
break;
case EDIT_ADD:
if (!splice)
splice = newSplice(index, [], 0);
splice.addedCount++;
index++;
break;
case EDIT_DELETE:
if (!splice)
splice = newSplice(index, [], 0);
splice.removed.push(old[oldIndex]);
oldIndex++;
break;
}
}
if (splice) {
splices.push(splice);
}
return splices;
},
sharedPrefix: function (current, old, searchLength) {
for (var i = 0; i < searchLength; i++)
if (!this.equals(current[i], old[i]))
return i;
return searchLength;
},
sharedSuffix: function (current, old, searchLength) {
var index1 = current.length;
var index2 = old.length;
var count = 0;
while (count < searchLength && this.equals(current[--index1], old[--index2]))
count++;
return count;
},
calculateSplices: function (current, previous) {
return this.calcSplices(current, 0, current.length, previous, 0, previous.length);
},
equals: function (currentValue, previousValue) {
return currentValue === previousValue;
}
};
return new ArraySplice();
}();Polymer.domInnerHTML = function () {
var escapeAttrRegExp = /[&\u00A0"]/g;
var escapeDataRegExp = /[&\u00A0<>]/g;
function escapeReplace(c) {
switch (c) {
case '&':
return '&amp;';
case '<':
return '&lt;';
case '>':
return '&gt;';
case '"':
return '&quot;';
case '\xA0':
return '&nbsp;';
}
}
function escapeAttr(s) {
return s.replace(escapeAttrRegExp, escapeReplace);
}
function escapeData(s) {
return s.replace(escapeDataRegExp, escapeReplace);
}
function makeSet(arr) {
var set = {};
for (var i = 0; i < arr.length; i++) {
set[arr[i]] = true;
}
return set;
}
var voidElements = makeSet([
'area',
'base',
'br',
'col',
'command',
'embed',
'hr',
'img',
'input',
'keygen',
'link',
'meta',
'param',
'source',
'track',
'wbr'
]);
var plaintextParents = makeSet([
'style',
'script',
'xmp',
'iframe',
'noembed',
'noframes',
'plaintext',
'noscript'
]);
function getOuterHTML(node, parentNode, composed) {
switch (node.nodeType) {
case Node.ELEMENT_NODE:
var tagName = node.localName;
var s = '<' + tagName;
var attrs = node.attributes;
for (var i = 0, attr; attr = attrs[i]; i++) {
s += ' ' + attr.name + '="' + escapeAttr(attr.value) + '"';
}
s += '>';
if (voidElements[tagName]) {
return s;
}
return s + getInnerHTML(node, composed) + '</' + tagName + '>';
case Node.TEXT_NODE:
var data = node.data;
if (parentNode && plaintextParents[parentNode.localName]) {
return data;
}
return escapeData(data);
case Node.COMMENT_NODE:
return '<!--' + node.data + '-->';
default:
console.error(node);
throw new Error('not implemented');
}
}
function getInnerHTML(node, composed) {
if (node instanceof HTMLTemplateElement)
node = node.content;
var s = '';
var c$ = Polymer.dom(node).childNodes;
for (var i = 0, l = c$.length, child; i < l && (child = c$[i]); i++) {
s += getOuterHTML(child, node, composed);
}
return s;
}
return { getInnerHTML: getInnerHTML };
}();(function () {
'use strict';
var nativeInsertBefore = Element.prototype.insertBefore;
var nativeAppendChild = Element.prototype.appendChild;
var nativeRemoveChild = Element.prototype.removeChild;
Polymer.TreeApi = {
arrayCopyChildNodes: function (parent) {
var copy = [], i = 0;
for (var n = parent.firstChild; n; n = n.nextSibling) {
copy[i++] = n;
}
return copy;
},
arrayCopyChildren: function (parent) {
var copy = [], i = 0;
for (var n = parent.firstElementChild; n; n = n.nextElementSibling) {
copy[i++] = n;
}
return copy;
},
arrayCopy: function (a$) {
var l = a$.length;
var copy = new Array(l);
for (var i = 0; i < l; i++) {
copy[i] = a$[i];
}
return copy;
}
};
Polymer.TreeApi.Logical = {
hasParentNode: function (node) {
return Boolean(node.__dom && node.__dom.parentNode);
},
hasChildNodes: function (node) {
return Boolean(node.__dom && node.__dom.childNodes !== undefined);
},
getChildNodes: function (node) {
return this.hasChildNodes(node) ? this._getChildNodes(node) : node.childNodes;
},
_getChildNodes: function (node) {
if (!node.__dom.childNodes) {
node.__dom.childNodes = [];
for (var n = node.__dom.firstChild; n; n = n.__dom.nextSibling) {
node.__dom.childNodes.push(n);
}
}
return node.__dom.childNodes;
},
getParentNode: function (node) {
return node.__dom && node.__dom.parentNode !== undefined ? node.__dom.parentNode : node.parentNode;
},
getFirstChild: function (node) {
return node.__dom && node.__dom.firstChild !== undefined ? node.__dom.firstChild : node.firstChild;
},
getLastChild: function (node) {
return node.__dom && node.__dom.lastChild !== undefined ? node.__dom.lastChild : node.lastChild;
},
getNextSibling: function (node) {
return node.__dom && node.__dom.nextSibling !== undefined ? node.__dom.nextSibling : node.nextSibling;
},
getPreviousSibling: function (node) {
return node.__dom && node.__dom.previousSibling !== undefined ? node.__dom.previousSibling : node.previousSibling;
},
getFirstElementChild: function (node) {
return node.__dom && node.__dom.firstChild !== undefined ? this._getFirstElementChild(node) : node.firstElementChild;
},
_getFirstElementChild: function (node) {
var n = node.__dom.firstChild;
while (n && n.nodeType !== Node.ELEMENT_NODE) {
n = n.__dom.nextSibling;
}
return n;
},
getLastElementChild: function (node) {
return node.__dom && node.__dom.lastChild !== undefined ? this._getLastElementChild(node) : node.lastElementChild;
},
_getLastElementChild: function (node) {
var n = node.__dom.lastChild;
while (n && n.nodeType !== Node.ELEMENT_NODE) {
n = n.__dom.previousSibling;
}
return n;
},
getNextElementSibling: function (node) {
return node.__dom && node.__dom.nextSibling !== undefined ? this._getNextElementSibling(node) : node.nextElementSibling;
},
_getNextElementSibling: function (node) {
var n = node.__dom.nextSibling;
while (n && n.nodeType !== Node.ELEMENT_NODE) {
n = n.__dom.nextSibling;
}
return n;
},
getPreviousElementSibling: function (node) {
return node.__dom && node.__dom.previousSibling !== undefined ? this._getPreviousElementSibling(node) : node.previousElementSibling;
},
_getPreviousElementSibling: function (node) {
var n = node.__dom.previousSibling;
while (n && n.nodeType !== Node.ELEMENT_NODE) {
n = n.__dom.previousSibling;
}
return n;
},
saveChildNodes: function (node) {
if (!this.hasChildNodes(node)) {
node.__dom = node.__dom || {};
node.__dom.firstChild = node.firstChild;
node.__dom.lastChild = node.lastChild;
node.__dom.childNodes = [];
for (var n = node.firstChild; n; n = n.nextSibling) {
n.__dom = n.__dom || {};
n.__dom.parentNode = node;
node.__dom.childNodes.push(n);
n.__dom.nextSibling = n.nextSibling;
n.__dom.previousSibling = n.previousSibling;
}
}
},
recordInsertBefore: function (node, container, ref_node) {
container.__dom.childNodes = null;
if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
for (var n = node.firstChild; n; n = n.nextSibling) {
this._linkNode(n, container, ref_node);
}
} else {
this._linkNode(node, container, ref_node);
}
},
_linkNode: function (node, container, ref_node) {
node.__dom = node.__dom || {};
container.__dom = container.__dom || {};
if (ref_node) {
ref_node.__dom = ref_node.__dom || {};
}
node.__dom.previousSibling = ref_node ? ref_node.__dom.previousSibling : container.__dom.lastChild;
if (node.__dom.previousSibling) {
node.__dom.previousSibling.__dom.nextSibling = node;
}
node.__dom.nextSibling = ref_node || null;
if (node.__dom.nextSibling) {
node.__dom.nextSibling.__dom.previousSibling = node;
}
node.__dom.parentNode = container;
if (ref_node) {
if (ref_node === container.__dom.firstChild) {
container.__dom.firstChild = node;
}
} else {
container.__dom.lastChild = node;
if (!container.__dom.firstChild) {
container.__dom.firstChild = node;
}
}
container.__dom.childNodes = null;
},
recordRemoveChild: function (node, container) {
node.__dom = node.__dom || {};
container.__dom = container.__dom || {};
if (node === container.__dom.firstChild) {
container.__dom.firstChild = node.__dom.nextSibling;
}
if (node === container.__dom.lastChild) {
container.__dom.lastChild = node.__dom.previousSibling;
}
var p = node.__dom.previousSibling;
var n = node.__dom.nextSibling;
if (p) {
p.__dom.nextSibling = n;
}
if (n) {
n.__dom.previousSibling = p;
}
node.__dom.parentNode = node.__dom.previousSibling = node.__dom.nextSibling = undefined;
container.__dom.childNodes = null;
}
};
Polymer.TreeApi.Composed = {
getChildNodes: function (node) {
return Polymer.TreeApi.arrayCopyChildNodes(node);
},
getParentNode: function (node) {
return node.parentNode;
},
clearChildNodes: function (node) {
node.textContent = '';
},
insertBefore: function (parentNode, newChild, refChild) {
return nativeInsertBefore.call(parentNode, newChild, refChild || null);
},
appendChild: function (parentNode, newChild) {
return nativeAppendChild.call(parentNode, newChild);
},
removeChild: function (parentNode, node) {
return nativeRemoveChild.call(parentNode, node);
}
};
}());Polymer.DomApi = function () {
'use strict';
var Settings = Polymer.Settings;
var TreeApi = Polymer.TreeApi;
var DomApi = function (node) {
this.node = needsToWrap ? DomApi.wrap(node) : node;
};
var needsToWrap = Settings.hasShadow && !Settings.nativeShadow;
DomApi.wrap = window.wrap ? window.wrap : function (node) {
return node;
};
DomApi.prototype = {
flush: function () {
Polymer.dom.flush();
},
deepContains: function (node) {
if (this.node.contains(node)) {
return true;
}
var n = node;
var doc = node.ownerDocument;
while (n && n !== doc && n !== this.node) {
n = Polymer.dom(n).parentNode || n.host;
}
return n === this.node;
},
queryDistributedElements: function (selector) {
var c$ = this.getEffectiveChildNodes();
var list = [];
for (var i = 0, l = c$.length, c; i < l && (c = c$[i]); i++) {
if (c.nodeType === Node.ELEMENT_NODE && DomApi.matchesSelector.call(c, selector)) {
list.push(c);
}
}
return list;
},
getEffectiveChildNodes: function () {
var list = [];
var c$ = this.childNodes;
for (var i = 0, l = c$.length, c; i < l && (c = c$[i]); i++) {
if (c.localName === CONTENT) {
var d$ = dom(c).getDistributedNodes();
for (var j = 0; j < d$.length; j++) {
list.push(d$[j]);
}
} else {
list.push(c);
}
}
return list;
},
observeNodes: function (callback) {
if (callback) {
if (!this.observer) {
this.observer = this.node.localName === CONTENT ? new DomApi.DistributedNodesObserver(this) : new DomApi.EffectiveNodesObserver(this);
}
return this.observer.addListener(callback);
}
},
unobserveNodes: function (handle) {
if (this.observer) {
this.observer.removeListener(handle);
}
},
notifyObserver: function () {
if (this.observer) {
this.observer.notify();
}
},
_query: function (matcher, node, halter) {
node = node || this.node;
var list = [];
this._queryElements(TreeApi.Logical.getChildNodes(node), matcher, halter, list);
return list;
},
_queryElements: function (elements, matcher, halter, list) {
for (var i = 0, l = elements.length, c; i < l && (c = elements[i]); i++) {
if (c.nodeType === Node.ELEMENT_NODE) {
if (this._queryElement(c, matcher, halter, list)) {
return true;
}
}
}
},
_queryElement: function (node, matcher, halter, list) {
var result = matcher(node);
if (result) {
list.push(node);
}
if (halter && halter(result)) {
return result;
}
this._queryElements(TreeApi.Logical.getChildNodes(node), matcher, halter, list);
}
};
var CONTENT = DomApi.CONTENT = 'content';
var dom = DomApi.factory = function (node) {
node = node || document;
if (!node.__domApi) {
node.__domApi = new DomApi.ctor(node);
}
return node.__domApi;
};
DomApi.hasApi = function (node) {
return Boolean(node.__domApi);
};
DomApi.ctor = DomApi;
Polymer.dom = function (obj, patch) {
if (obj instanceof Event) {
return Polymer.EventApi.factory(obj);
} else {
return DomApi.factory(obj, patch);
}
};
var p = Element.prototype;
DomApi.matchesSelector = p.matches || p.matchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector || p.webkitMatchesSelector;
return DomApi;
}();(function () {
'use strict';
var Settings = Polymer.Settings;
var DomApi = Polymer.DomApi;
var dom = DomApi.factory;
var TreeApi = Polymer.TreeApi;
var getInnerHTML = Polymer.domInnerHTML.getInnerHTML;
var CONTENT = DomApi.CONTENT;
if (Settings.useShadow) {
return;
}
var nativeCloneNode = Element.prototype.cloneNode;
var nativeImportNode = Document.prototype.importNode;
Polymer.Base.mixin(DomApi.prototype, {
_lazyDistribute: function (host) {
if (host.shadyRoot && host.shadyRoot._distributionClean) {
host.shadyRoot._distributionClean = false;
Polymer.dom.addDebouncer(host.debounce('_distribute', host._distributeContent));
}
},
appendChild: function (node) {
return this.insertBefore(node);
},
insertBefore: function (node, ref_node) {
if (ref_node && TreeApi.Logical.getParentNode(ref_node) !== this.node) {
throw Error('The ref_node to be inserted before is not a child ' + 'of this node');
}
if (node.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
var parent = TreeApi.Logical.getParentNode(node);
if (parent) {
if (DomApi.hasApi(parent)) {
dom(parent).notifyObserver();
}
this._removeNode(node);
} else {
this._removeOwnerShadyRoot(node);
}
}
if (!this._addNode(node, ref_node)) {
if (ref_node) {
ref_node = ref_node.localName === CONTENT ? this._firstComposedNode(ref_node) : ref_node;
}
var container = this.node._isShadyRoot ? this.node.host : this.node;
if (ref_node) {
TreeApi.Composed.insertBefore(container, node, ref_node);
} else {
TreeApi.Composed.appendChild(container, node);
}
}
this.notifyObserver();
return node;
},
_addNode: function (node, ref_node) {
var root = this.getOwnerRoot();
if (root) {
var ipAdded = this._maybeAddInsertionPoint(node, this.node);
if (!root._invalidInsertionPoints) {
root._invalidInsertionPoints = ipAdded;
}
this._addNodeToHost(root.host, node);
}
if (TreeApi.Logical.hasChildNodes(this.node)) {
TreeApi.Logical.recordInsertBefore(node, this.node, ref_node);
}
var handled = this._maybeDistribute(node) || this.node.shadyRoot;
if (handled) {
if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
while (node.firstChild) {
TreeApi.Composed.removeChild(node, node.firstChild);
}
} else {
var parent = TreeApi.Composed.getParentNode(node);
if (parent) {
TreeApi.Composed.removeChild(parent, node);
}
}
}
return handled;
},
removeChild: function (node) {
if (TreeApi.Logical.getParentNode(node) !== this.node) {
throw Error('The node to be removed is not a child of this node: ' + node);
}
if (!this._removeNode(node)) {
var container = this.node._isShadyRoot ? this.node.host : this.node;
var parent = TreeApi.Composed.getParentNode(node);
if (container === parent) {
TreeApi.Composed.removeChild(container, node);
}
}
this.notifyObserver();
return node;
},
_removeNode: function (node) {
var logicalParent = TreeApi.Logical.hasParentNode(node) && TreeApi.Logical.getParentNode(node);
var distributed;
var root = this._ownerShadyRootForNode(node);
if (logicalParent) {
distributed = dom(node)._maybeDistributeParent();
TreeApi.Logical.recordRemoveChild(node, logicalParent);
if (root && this._removeDistributedChildren(root, node)) {
root._invalidInsertionPoints = true;
this._lazyDistribute(root.host);
}
}
this._removeOwnerShadyRoot(node);
if (root) {
this._removeNodeFromHost(root.host, node);
}
return distributed;
},
replaceChild: function (node, ref_node) {
this.insertBefore(node, ref_node);
this.removeChild(ref_node);
return node;
},
_hasCachedOwnerRoot: function (node) {
return Boolean(node._ownerShadyRoot !== undefined);
},
getOwnerRoot: function () {
return this._ownerShadyRootForNode(this.node);
},
_ownerShadyRootForNode: function (node) {
if (!node) {
return;
}
var root = node._ownerShadyRoot;
if (root === undefined) {
if (node._isShadyRoot) {
root = node;
} else {
var parent = TreeApi.Logical.getParentNode(node);
if (parent) {
root = parent._isShadyRoot ? parent : this._ownerShadyRootForNode(parent);
} else {
root = null;
}
}
if (root || document.documentElement.contains(node)) {
node._ownerShadyRoot = root;
}
}
return root;
},
_maybeDistribute: function (node) {
var fragContent = node.nodeType === Node.DOCUMENT_FRAGMENT_NODE && !node.__noContent && dom(node).querySelector(CONTENT);
var wrappedContent = fragContent && TreeApi.Logical.getParentNode(fragContent).nodeType !== Node.DOCUMENT_FRAGMENT_NODE;
var hasContent = fragContent || node.localName === CONTENT;
if (hasContent) {
var root = this.getOwnerRoot();
if (root) {
this._lazyDistribute(root.host);
}
}
var needsDist = this._nodeNeedsDistribution(this.node);
if (needsDist) {
this._lazyDistribute(this.node);
}
return needsDist || hasContent && !wrappedContent;
},
_maybeAddInsertionPoint: function (node, parent) {
var added;
if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE && !node.__noContent) {
var c$ = dom(node).querySelectorAll(CONTENT);
for (var i = 0, n, np, na; i < c$.length && (n = c$[i]); i++) {
np = TreeApi.Logical.getParentNode(n);
if (np === node) {
np = parent;
}
na = this._maybeAddInsertionPoint(n, np);
added = added || na;
}
} else if (node.localName === CONTENT) {
TreeApi.Logical.saveChildNodes(parent);
TreeApi.Logical.saveChildNodes(node);
added = true;
}
return added;
},
_updateInsertionPoints: function (host) {
var i$ = host.shadyRoot._insertionPoints = dom(host.shadyRoot).querySelectorAll(CONTENT);
for (var i = 0, c; i < i$.length; i++) {
c = i$[i];
TreeApi.Logical.saveChildNodes(c);
TreeApi.Logical.saveChildNodes(TreeApi.Logical.getParentNode(c));
}
},
_nodeNeedsDistribution: function (node) {
return node && node.shadyRoot && DomApi.hasInsertionPoint(node.shadyRoot);
},
_addNodeToHost: function (host, node) {
if (host._elementAdd) {
host._elementAdd(node);
}
},
_removeNodeFromHost: function (host, node) {
if (host._elementRemove) {
host._elementRemove(node);
}
},
_removeDistributedChildren: function (root, container) {
var hostNeedsDist;
var ip$ = root._insertionPoints;
for (var i = 0; i < ip$.length; i++) {
var content = ip$[i];
if (this._contains(container, content)) {
var dc$ = dom(content).getDistributedNodes();
for (var j = 0; j < dc$.length; j++) {
hostNeedsDist = true;
var node = dc$[j];
var parent = TreeApi.Composed.getParentNode(node);
if (parent) {
TreeApi.Composed.removeChild(parent, node);
}
}
}
}
return hostNeedsDist;
},
_contains: function (container, node) {
while (node) {
if (node == container) {
return true;
}
node = TreeApi.Logical.getParentNode(node);
}
},
_removeOwnerShadyRoot: function (node) {
if (this._hasCachedOwnerRoot(node)) {
var c$ = TreeApi.Logical.getChildNodes(node);
for (var i = 0, l = c$.length, n; i < l && (n = c$[i]); i++) {
this._removeOwnerShadyRoot(n);
}
}
node._ownerShadyRoot = undefined;
},
_firstComposedNode: function (content) {
var n$ = dom(content).getDistributedNodes();
for (var i = 0, l = n$.length, n, p$; i < l && (n = n$[i]); i++) {
p$ = dom(n).getDestinationInsertionPoints();
if (p$[p$.length - 1] === content) {
return n;
}
}
},
querySelector: function (selector) {
var result = this._query(function (n) {
return DomApi.matchesSelector.call(n, selector);
}, this.node, function (n) {
return Boolean(n);
})[0];
return result || null;
},
querySelectorAll: function (selector) {
return this._query(function (n) {
return DomApi.matchesSelector.call(n, selector);
}, this.node);
},
getDestinationInsertionPoints: function () {
return this.node._destinationInsertionPoints || [];
},
getDistributedNodes: function () {
return this.node._distributedNodes || [];
},
_clear: function () {
while (this.childNodes.length) {
this.removeChild(this.childNodes[0]);
}
},
setAttribute: function (name, value) {
this.node.setAttribute(name, value);
this._maybeDistributeParent();
},
removeAttribute: function (name) {
this.node.removeAttribute(name);
this._maybeDistributeParent();
},
_maybeDistributeParent: function () {
if (this._nodeNeedsDistribution(this.parentNode)) {
this._lazyDistribute(this.parentNode);
return true;
}
},
cloneNode: function (deep) {
var n = nativeCloneNode.call(this.node, false);
if (deep) {
var c$ = this.childNodes;
var d = dom(n);
for (var i = 0, nc; i < c$.length; i++) {
nc = dom(c$[i]).cloneNode(true);
d.appendChild(nc);
}
}
return n;
},
importNode: function (externalNode, deep) {
var doc = this.node instanceof Document ? this.node : this.node.ownerDocument;
var n = nativeImportNode.call(doc, externalNode, false);
if (deep) {
var c$ = TreeApi.Logical.getChildNodes(externalNode);
var d = dom(n);
for (var i = 0, nc; i < c$.length; i++) {
nc = dom(doc).importNode(c$[i], true);
d.appendChild(nc);
}
}
return n;
},
_getComposedInnerHTML: function () {
return getInnerHTML(this.node, true);
}
});
Object.defineProperties(DomApi.prototype, {
activeElement: {
get: function () {
var active = document.activeElement;
if (!active) {
return null;
}
var isShadyRoot = !!this.node._isShadyRoot;
if (this.node !== document) {
if (!isShadyRoot) {
return null;
}
if (this.node.host === active || !this.node.host.contains(active)) {
return null;
}
}
var activeRoot = dom(active).getOwnerRoot();
while (activeRoot && activeRoot !== this.node) {
active = activeRoot.host;
activeRoot = dom(active).getOwnerRoot();
}
if (this.node === document) {
return activeRoot ? null : active;
} else {
return activeRoot === this.node ? active : null;
}
},
configurable: true
},
childNodes: {
get: function () {
var c$ = TreeApi.Logical.getChildNodes(this.node);
return Array.isArray(c$) ? c$ : TreeApi.arrayCopyChildNodes(this.node);
},
configurable: true
},
children: {
get: function () {
if (TreeApi.Logical.hasChildNodes(this.node)) {
return Array.prototype.filter.call(this.childNodes, function (n) {
return n.nodeType === Node.ELEMENT_NODE;
});
} else {
return TreeApi.arrayCopyChildren(this.node);
}
},
configurable: true
},
parentNode: {
get: function () {
return TreeApi.Logical.getParentNode(this.node);
},
configurable: true
},
firstChild: {
get: function () {
return TreeApi.Logical.getFirstChild(this.node);
},
configurable: true
},
lastChild: {
get: function () {
return TreeApi.Logical.getLastChild(this.node);
},
configurable: true
},
nextSibling: {
get: function () {
return TreeApi.Logical.getNextSibling(this.node);
},
configurable: true
},
previousSibling: {
get: function () {
return TreeApi.Logical.getPreviousSibling(this.node);
},
configurable: true
},
firstElementChild: {
get: function () {
return TreeApi.Logical.getFirstElementChild(this.node);
},
configurable: true
},
lastElementChild: {
get: function () {
return TreeApi.Logical.getLastElementChild(this.node);
},
configurable: true
},
nextElementSibling: {
get: function () {
return TreeApi.Logical.getNextElementSibling(this.node);
},
configurable: true
},
previousElementSibling: {
get: function () {
return TreeApi.Logical.getPreviousElementSibling(this.node);
},
configurable: true
},
textContent: {
get: function () {
var nt = this.node.nodeType;
if (nt === Node.TEXT_NODE || nt === Node.COMMENT_NODE) {
return this.node.textContent;
} else {
var tc = [];
for (var i = 0, cn = this.childNodes, c; c = cn[i]; i++) {
if (c.nodeType !== Node.COMMENT_NODE) {
tc.push(c.textContent);
}
}
return tc.join('');
}
},
set: function (text) {
var nt = this.node.nodeType;
if (nt === Node.TEXT_NODE || nt === Node.COMMENT_NODE) {
this.node.textContent = text;
} else {
this._clear();
if (text) {
this.appendChild(document.createTextNode(text));
}
}
},
configurable: true
},
innerHTML: {
get: function () {
var nt = this.node.nodeType;
if (nt === Node.TEXT_NODE || nt === Node.COMMENT_NODE) {
return null;
} else {
return getInnerHTML(this.node);
}
},
set: function (text) {
var nt = this.node.nodeType;
if (nt !== Node.TEXT_NODE || nt !== Node.COMMENT_NODE) {
this._clear();
var d = document.createElement('div');
d.innerHTML = text;
var c$ = TreeApi.arrayCopyChildNodes(d);
for (var i = 0; i < c$.length; i++) {
this.appendChild(c$[i]);
}
}
},
configurable: true
}
});
DomApi.hasInsertionPoint = function (root) {
return Boolean(root && root._insertionPoints.length);
};
}());(function () {
'use strict';
var Settings = Polymer.Settings;
var TreeApi = Polymer.TreeApi;
var DomApi = Polymer.DomApi;
if (!Settings.useShadow) {
return;
}
Polymer.Base.mixin(DomApi.prototype, {
querySelectorAll: function (selector) {
return TreeApi.arrayCopy(this.node.querySelectorAll(selector));
},
getOwnerRoot: function () {
var n = this.node;
while (n) {
if (n.nodeType === Node.DOCUMENT_FRAGMENT_NODE && n.host) {
return n;
}
n = n.parentNode;
}
},
importNode: function (externalNode, deep) {
var doc = this.node instanceof Document ? this.node : this.node.ownerDocument;
return doc.importNode(externalNode, deep);
},
getDestinationInsertionPoints: function () {
var n$ = this.node.getDestinationInsertionPoints && this.node.getDestinationInsertionPoints();
return n$ ? TreeApi.arrayCopy(n$) : [];
},
getDistributedNodes: function () {
var n$ = this.node.getDistributedNodes && this.node.getDistributedNodes();
return n$ ? TreeApi.arrayCopy(n$) : [];
}
});
Object.defineProperties(DomApi.prototype, {
activeElement: {
get: function () {
var node = DomApi.wrap(this.node);
var activeElement = node.activeElement;
return node.contains(activeElement) ? activeElement : null;
},
configurable: true
},
childNodes: {
get: function () {
return TreeApi.arrayCopyChildNodes(this.node);
},
configurable: true
},
children: {
get: function () {
return TreeApi.arrayCopyChildren(this.node);
},
configurable: true
},
textContent: {
get: function () {
return this.node.textContent;
},
set: function (value) {
return this.node.textContent = value;
},
configurable: true
},
innerHTML: {
get: function () {
return this.node.innerHTML;
},
set: function (value) {
return this.node.innerHTML = value;
},
configurable: true
}
});
var forwardMethods = function (m$) {
for (var i = 0; i < m$.length; i++) {
forwardMethod(m$[i]);
}
};
var forwardMethod = function (method) {
DomApi.prototype[method] = function () {
return this.node[method].apply(this.node, arguments);
};
};
forwardMethods([
'cloneNode',
'appendChild',
'insertBefore',
'removeChild',
'replaceChild',
'setAttribute',
'removeAttribute',
'querySelector'
]);
var forwardProperties = function (f$) {
for (var i = 0; i < f$.length; i++) {
forwardProperty(f$[i]);
}
};
var forwardProperty = function (name) {
Object.defineProperty(DomApi.prototype, name, {
get: function () {
return this.node[name];
},
configurable: true
});
};
forwardProperties([
'parentNode',
'firstChild',
'lastChild',
'nextSibling',
'previousSibling',
'firstElementChild',
'lastElementChild',
'nextElementSibling',
'previousElementSibling'
]);
}());Polymer.Base.mixin(Polymer.dom, {
_flushGuard: 0,
_FLUSH_MAX: 100,
_needsTakeRecords: !Polymer.Settings.useNativeCustomElements,
_debouncers: [],
_staticFlushList: [],
_finishDebouncer: null,
flush: function () {
this._flushGuard = 0;
this._prepareFlush();
while (this._debouncers.length && this._flushGuard < this._FLUSH_MAX) {
while (this._debouncers.length) {
this._debouncers.shift().complete();
}
if (this._finishDebouncer) {
this._finishDebouncer.complete();
}
this._prepareFlush();
this._flushGuard++;
}
if (this._flushGuard >= this._FLUSH_MAX) {
console.warn('Polymer.dom.flush aborted. Flush may not be complete.');
}
},
_prepareFlush: function () {
if (this._needsTakeRecords) {
CustomElements.takeRecords();
}
for (var i = 0; i < this._staticFlushList.length; i++) {
this._staticFlushList[i]();
}
},
addStaticFlush: function (fn) {
this._staticFlushList.push(fn);
},
removeStaticFlush: function (fn) {
var i = this._staticFlushList.indexOf(fn);
if (i >= 0) {
this._staticFlushList.splice(i, 1);
}
},
addDebouncer: function (debouncer) {
this._debouncers.push(debouncer);
this._finishDebouncer = Polymer.Debounce(this._finishDebouncer, this._finishFlush);
},
_finishFlush: function () {
Polymer.dom._debouncers = [];
}
});Polymer.EventApi = function () {
'use strict';
var DomApi = Polymer.DomApi.ctor;
var Settings = Polymer.Settings;
DomApi.Event = function (event) {
this.event = event;
};
if (Settings.useShadow) {
DomApi.Event.prototype = {
get rootTarget() {
return this.event.path[0];
},
get localTarget() {
return this.event.target;
},
get path() {
var path = this.event.path;
if (!Array.isArray(path)) {
path = Array.prototype.slice.call(path);
}
return path;
}
};
} else {
DomApi.Event.prototype = {
get rootTarget() {
return this.event.target;
},
get localTarget() {
var current = this.event.currentTarget;
var currentRoot = current && Polymer.dom(current).getOwnerRoot();
var p$ = this.path;
for (var i = 0; i < p$.length; i++) {
if (Polymer.dom(p$[i]).getOwnerRoot() === currentRoot) {
return p$[i];
}
}
},
get path() {
if (!this.event._path) {
var path = [];
var current = this.rootTarget;
while (current) {
path.push(current);
var insertionPoints = Polymer.dom(current).getDestinationInsertionPoints();
if (insertionPoints.length) {
for (var i = 0; i < insertionPoints.length - 1; i++) {
path.push(insertionPoints[i]);
}
current = insertionPoints[insertionPoints.length - 1];
} else {
current = Polymer.dom(current).parentNode || current.host;
}
}
path.push(window);
this.event._path = path;
}
return this.event._path;
}
};
}
var factory = function (event) {
if (!event.__eventApi) {
event.__eventApi = new DomApi.Event(event);
}
return event.__eventApi;
};
return { factory: factory };
}();(function () {
'use strict';
var DomApi = Polymer.DomApi.ctor;
var useShadow = Polymer.Settings.useShadow;
Object.defineProperty(DomApi.prototype, 'classList', {
get: function () {
if (!this._classList) {
this._classList = new DomApi.ClassList(this);
}
return this._classList;
},
configurable: true
});
DomApi.ClassList = function (host) {
this.domApi = host;
this.node = host.node;
};
DomApi.ClassList.prototype = {
add: function () {
this.node.classList.add.apply(this.node.classList, arguments);
this._distributeParent();
},
remove: function () {
this.node.classList.remove.apply(this.node.classList, arguments);
this._distributeParent();
},
toggle: function () {
this.node.classList.toggle.apply(this.node.classList, arguments);
this._distributeParent();
},
_distributeParent: function () {
if (!useShadow) {
this.domApi._maybeDistributeParent();
}
},
contains: function () {
return this.node.classList.contains.apply(this.node.classList, arguments);
}
};
}());(function () {
'use strict';
var DomApi = Polymer.DomApi.ctor;
var Settings = Polymer.Settings;
DomApi.EffectiveNodesObserver = function (domApi) {
this.domApi = domApi;
this.node = this.domApi.node;
this._listeners = [];
};
DomApi.EffectiveNodesObserver.prototype = {
addListener: function (callback) {
if (!this._isSetup) {
this._setup();
this._isSetup = true;
}
var listener = {
fn: callback,
_nodes: []
};
this._listeners.push(listener);
this._scheduleNotify();
return listener;
},
removeListener: function (handle) {
var i = this._listeners.indexOf(handle);
if (i >= 0) {
this._listeners.splice(i, 1);
handle._nodes = [];
}
if (!this._hasListeners()) {
this._cleanup();
this._isSetup = false;
}
},
_setup: function () {
this._observeContentElements(this.domApi.childNodes);
},
_cleanup: function () {
this._unobserveContentElements(this.domApi.childNodes);
},
_hasListeners: function () {
return Boolean(this._listeners.length);
},
_scheduleNotify: function () {
if (this._debouncer) {
this._debouncer.stop();
}
this._debouncer = Polymer.Debounce(this._debouncer, this._notify);
this._debouncer.context = this;
Polymer.dom.addDebouncer(this._debouncer);
},
notify: function () {
if (this._hasListeners()) {
this._scheduleNotify();
}
},
_notify: function () {
this._beforeCallListeners();
this._callListeners();
},
_beforeCallListeners: function () {
this._updateContentElements();
},
_updateContentElements: function () {
this._observeContentElements(this.domApi.childNodes);
},
_observeContentElements: function (elements) {
for (var i = 0, n; i < elements.length && (n = elements[i]); i++) {
if (this._isContent(n)) {
n.__observeNodesMap = n.__observeNodesMap || new WeakMap();
if (!n.__observeNodesMap.has(this)) {
n.__observeNodesMap.set(this, this._observeContent(n));
}
}
}
},
_observeContent: function (content) {
var self = this;
var h = Polymer.dom(content).observeNodes(function () {
self._scheduleNotify();
});
h._avoidChangeCalculation = true;
return h;
},
_unobserveContentElements: function (elements) {
for (var i = 0, n, h; i < elements.length && (n = elements[i]); i++) {
if (this._isContent(n)) {
h = n.__observeNodesMap.get(this);
if (h) {
Polymer.dom(n).unobserveNodes(h);
n.__observeNodesMap.delete(this);
}
}
}
},
_isContent: function (node) {
return node.localName === 'content';
},
_callListeners: function () {
var o$ = this._listeners;
var nodes = this._getEffectiveNodes();
for (var i = 0, o; i < o$.length && (o = o$[i]); i++) {
var info = this._generateListenerInfo(o, nodes);
if (info || o._alwaysNotify) {
this._callListener(o, info);
}
}
},
_getEffectiveNodes: function () {
return this.domApi.getEffectiveChildNodes();
},
_generateListenerInfo: function (listener, newNodes) {
if (listener._avoidChangeCalculation) {
return true;
}
var oldNodes = listener._nodes;
var info = {
target: this.node,
addedNodes: [],
removedNodes: []
};
var splices = Polymer.ArraySplice.calculateSplices(newNodes, oldNodes);
for (var i = 0, s; i < splices.length && (s = splices[i]); i++) {
for (var j = 0, n; j < s.removed.length && (n = s.removed[j]); j++) {
info.removedNodes.push(n);
}
}
for (i = 0, s; i < splices.length && (s = splices[i]); i++) {
for (j = s.index; j < s.index + s.addedCount; j++) {
info.addedNodes.push(newNodes[j]);
}
}
listener._nodes = newNodes;
if (info.addedNodes.length || info.removedNodes.length) {
return info;
}
},
_callListener: function (listener, info) {
return listener.fn.call(this.node, info);
},
enableShadowAttributeTracking: function () {
}
};
if (Settings.useShadow) {
var baseSetup = DomApi.EffectiveNodesObserver.prototype._setup;
var baseCleanup = DomApi.EffectiveNodesObserver.prototype._cleanup;
Polymer.Base.mixin(DomApi.EffectiveNodesObserver.prototype, {
_setup: function () {
if (!this._observer) {
var self = this;
this._mutationHandler = function (mxns) {
if (mxns && mxns.length) {
self._scheduleNotify();
}
};
this._observer = new MutationObserver(this._mutationHandler);
this._boundFlush = function () {
self._flush();
};
Polymer.dom.addStaticFlush(this._boundFlush);
this._observer.observe(this.node, { childList: true });
}
baseSetup.call(this);
},
_cleanup: function () {
this._observer.disconnect();
this._observer = null;
this._mutationHandler = null;
Polymer.dom.removeStaticFlush(this._boundFlush);
baseCleanup.call(this);
},
_flush: function () {
if (this._observer) {
this._mutationHandler(this._observer.takeRecords());
}
},
enableShadowAttributeTracking: function () {
if (this._observer) {
this._makeContentListenersAlwaysNotify();
this._observer.disconnect();
this._observer.observe(this.node, {
childList: true,
attributes: true,
subtree: true
});
var root = this.domApi.getOwnerRoot();
var host = root && root.host;
if (host && Polymer.dom(host).observer) {
Polymer.dom(host).observer.enableShadowAttributeTracking();
}
}
},
_makeContentListenersAlwaysNotify: function () {
for (var i = 0, h; i < this._listeners.length; i++) {
h = this._listeners[i];
h._alwaysNotify = h._isContentListener;
}
}
});
}
}());(function () {
'use strict';
var DomApi = Polymer.DomApi.ctor;
var Settings = Polymer.Settings;
DomApi.DistributedNodesObserver = function (domApi) {
DomApi.EffectiveNodesObserver.call(this, domApi);
};
DomApi.DistributedNodesObserver.prototype = Object.create(DomApi.EffectiveNodesObserver.prototype);
Polymer.Base.mixin(DomApi.DistributedNodesObserver.prototype, {
_setup: function () {
},
_cleanup: function () {
},
_beforeCallListeners: function () {
},
_getEffectiveNodes: function () {
return this.domApi.getDistributedNodes();
}
});
if (Settings.useShadow) {
Polymer.Base.mixin(DomApi.DistributedNodesObserver.prototype, {
_setup: function () {
if (!this._observer) {
var root = this.domApi.getOwnerRoot();
var host = root && root.host;
if (host) {
var self = this;
this._observer = Polymer.dom(host).observeNodes(function () {
self._scheduleNotify();
});
this._observer._isContentListener = true;
if (this._hasAttrSelect()) {
Polymer.dom(host).observer.enableShadowAttributeTracking();
}
}
}
},
_hasAttrSelect: function () {
var select = this.node.getAttribute('select');
return select && select.match(/[[.]+/);
},
_cleanup: function () {
var root = this.domApi.getOwnerRoot();
var host = root && root.host;
if (host) {
Polymer.dom(host).unobserveNodes(this._observer);
}
this._observer = null;
}
});
}
}());(function () {
var DomApi = Polymer.DomApi;
var TreeApi = Polymer.TreeApi;
Polymer.Base._addFeature({
_prepShady: function () {
this._useContent = this._useContent || Boolean(this._template);
},
_setupShady: function () {
this.shadyRoot = null;
if (!this.__domApi) {
this.__domApi = null;
}
if (!this.__dom) {
this.__dom = null;
}
if (!this._ownerShadyRoot) {
this._ownerShadyRoot = undefined;
}
},
_poolContent: function () {
if (this._useContent) {
TreeApi.Logical.saveChildNodes(this);
}
},
_setupRoot: function () {
if (this._useContent) {
this._createLocalRoot();
if (!this.dataHost) {
upgradeLogicalChildren(TreeApi.Logical.getChildNodes(this));
}
}
},
_createLocalRoot: function () {
this.shadyRoot = this.root;
this.shadyRoot._distributionClean = false;
this.shadyRoot._hasDistributed = false;
this.shadyRoot._isShadyRoot = true;
this.shadyRoot._dirtyRoots = [];
var i$ = this.shadyRoot._insertionPoints = !this._notes || this._notes._hasContent ? this.shadyRoot.querySelectorAll('content') : [];
TreeApi.Logical.saveChildNodes(this.shadyRoot);
for (var i = 0, c; i < i$.length; i++) {
c = i$[i];
TreeApi.Logical.saveChildNodes(c);
TreeApi.Logical.saveChildNodes(c.parentNode);
}
this.shadyRoot.host = this;
},
distributeContent: function (updateInsertionPoints) {
if (this.shadyRoot) {
this.shadyRoot._invalidInsertionPoints = this.shadyRoot._invalidInsertionPoints || updateInsertionPoints;
var host = getTopDistributingHost(this);
Polymer.dom(this)._lazyDistribute(host);
}
},
_distributeContent: function () {
if (this._useContent && !this.shadyRoot._distributionClean) {
if (this.shadyRoot._invalidInsertionPoints) {
Polymer.dom(this)._updateInsertionPoints(this);
this.shadyRoot._invalidInsertionPoints = false;
}
this._beginDistribute();
this._distributeDirtyRoots();
this._finishDistribute();
}
},
_beginDistribute: function () {
if (this._useContent && DomApi.hasInsertionPoint(this.shadyRoot)) {
this._resetDistribution();
this._distributePool(this.shadyRoot, this._collectPool());
}
},
_distributeDirtyRoots: function () {
var c$ = this.shadyRoot._dirtyRoots;
for (var i = 0, l = c$.length, c; i < l && (c = c$[i]); i++) {
c._distributeContent();
}
this.shadyRoot._dirtyRoots = [];
},
_finishDistribute: function () {
if (this._useContent) {
this.shadyRoot._distributionClean = true;
if (DomApi.hasInsertionPoint(this.shadyRoot)) {
this._composeTree();
notifyContentObservers(this.shadyRoot);
} else {
if (!this.shadyRoot._hasDistributed) {
TreeApi.Composed.clearChildNodes(this);
this.appendChild(this.shadyRoot);
} else {
var children = this._composeNode(this);
this._updateChildNodes(this, children);
}
}
if (!this.shadyRoot._hasDistributed) {
notifyInitialDistribution(this);
}
this.shadyRoot._hasDistributed = true;
}
},
elementMatches: function (selector, node) {
node = node || this;
return DomApi.matchesSelector.call(node, selector);
},
_resetDistribution: function () {
var children = TreeApi.Logical.getChildNodes(this);
for (var i = 0; i < children.length; i++) {
var child = children[i];
if (child._destinationInsertionPoints) {
child._destinationInsertionPoints = undefined;
}
if (isInsertionPoint(child)) {
clearDistributedDestinationInsertionPoints(child);
}
}
var root = this.shadyRoot;
var p$ = root._insertionPoints;
for (var j = 0; j < p$.length; j++) {
p$[j]._distributedNodes = [];
}
},
_collectPool: function () {
var pool = [];
var children = TreeApi.Logical.getChildNodes(this);
for (var i = 0; i < children.length; i++) {
var child = children[i];
if (isInsertionPoint(child)) {
pool.push.apply(pool, child._distributedNodes);
} else {
pool.push(child);
}
}
return pool;
},
_distributePool: function (node, pool) {
var p$ = node._insertionPoints;
for (var i = 0, l = p$.length, p; i < l && (p = p$[i]); i++) {
this._distributeInsertionPoint(p, pool);
maybeRedistributeParent(p, this);
}
},
_distributeInsertionPoint: function (content, pool) {
var anyDistributed = false;
for (var i = 0, l = pool.length, node; i < l; i++) {
node = pool[i];
if (!node) {
continue;
}
if (this._matchesContentSelect(node, content)) {
distributeNodeInto(node, content);
pool[i] = undefined;
anyDistributed = true;
}
}
if (!anyDistributed) {
var children = TreeApi.Logical.getChildNodes(content);
for (var j = 0; j < children.length; j++) {
distributeNodeInto(children[j], content);
}
}
},
_composeTree: function () {
this._updateChildNodes(this, this._composeNode(this));
var p$ = this.shadyRoot._insertionPoints;
for (var i = 0, l = p$.length, p, parent; i < l && (p = p$[i]); i++) {
parent = TreeApi.Logical.getParentNode(p);
if (!parent._useContent && parent !== this && parent !== this.shadyRoot) {
this._updateChildNodes(parent, this._composeNode(parent));
}
}
},
_composeNode: function (node) {
var children = [];
var c$ = TreeApi.Logical.getChildNodes(node.shadyRoot || node);
for (var i = 0; i < c$.length; i++) {
var child = c$[i];
if (isInsertionPoint(child)) {
var distributedNodes = child._distributedNodes;
for (var j = 0; j < distributedNodes.length; j++) {
var distributedNode = distributedNodes[j];
if (isFinalDestination(child, distributedNode)) {
children.push(distributedNode);
}
}
} else {
children.push(child);
}
}
return children;
},
_updateChildNodes: function (container, children) {
var composed = TreeApi.Composed.getChildNodes(container);
var splices = Polymer.ArraySplice.calculateSplices(children, composed);
for (var i = 0, d = 0, s; i < splices.length && (s = splices[i]); i++) {
for (var j = 0, n; j < s.removed.length && (n = s.removed[j]); j++) {
if (TreeApi.Composed.getParentNode(n) === container) {
TreeApi.Composed.removeChild(container, n);
}
composed.splice(s.index + d, 1);
}
d -= s.addedCount;
}
for (var i = 0, s, next; i < splices.length && (s = splices[i]); i++) {
next = composed[s.index];
for (j = s.index, n; j < s.index + s.addedCount; j++) {
n = children[j];
TreeApi.Composed.insertBefore(container, n, next);
composed.splice(j, 0, n);
}
}
},
_matchesContentSelect: function (node, contentElement) {
var select = contentElement.getAttribute('select');
if (!select) {
return true;
}
select = select.trim();
if (!select) {
return true;
}
if (!(node instanceof Element)) {
return false;
}
var validSelectors = /^(:not\()?[*.#[a-zA-Z_|]/;
if (!validSelectors.test(select)) {
return false;
}
return this.elementMatches(select, node);
},
_elementAdd: function () {
},
_elementRemove: function () {
}
});
var domHostDesc = {
get: function () {
var root = Polymer.dom(this).getOwnerRoot();
return root && root.host;
},
configurable: true
};
Object.defineProperty(Polymer.Base, 'domHost', domHostDesc);
Polymer.BaseDescriptors.domHost = domHostDesc;
function distributeNodeInto(child, insertionPoint) {
insertionPoint._distributedNodes.push(child);
var points = child._destinationInsertionPoints;
if (!points) {
child._destinationInsertionPoints = [insertionPoint];
} else {
points.push(insertionPoint);
}
}
function clearDistributedDestinationInsertionPoints(content) {
var e$ = content._distributedNodes;
if (e$) {
for (var i = 0; i < e$.length; i++) {
var d = e$[i]._destinationInsertionPoints;
if (d) {
d.splice(d.indexOf(content) + 1, d.length);
}
}
}
}
function maybeRedistributeParent(content, host) {
var parent = TreeApi.Logical.getParentNode(content);
if (parent && parent.shadyRoot && DomApi.hasInsertionPoint(parent.shadyRoot) && parent.shadyRoot._distributionClean) {
parent.shadyRoot._distributionClean = false;
host.shadyRoot._dirtyRoots.push(parent);
}
}
function isFinalDestination(insertionPoint, node) {
var points = node._destinationInsertionPoints;
return points && points[points.length - 1] === insertionPoint;
}
function isInsertionPoint(node) {
return node.localName == 'content';
}
function getTopDistributingHost(host) {
while (host && hostNeedsRedistribution(host)) {
host = host.domHost;
}
return host;
}
function hostNeedsRedistribution(host) {
var c$ = TreeApi.Logical.getChildNodes(host);
for (var i = 0, c; i < c$.length; i++) {
c = c$[i];
if (c.localName && c.localName === 'content') {
return host.domHost;
}
}
}
function notifyContentObservers(root) {
for (var i = 0, c; i < root._insertionPoints.length; i++) {
c = root._insertionPoints[i];
if (DomApi.hasApi(c)) {
Polymer.dom(c).notifyObserver();
}
}
}
function notifyInitialDistribution(host) {
if (DomApi.hasApi(host)) {
Polymer.dom(host).notifyObserver();
}
}
var needsUpgrade = window.CustomElements && !CustomElements.useNative;
function upgradeLogicalChildren(children) {
if (needsUpgrade && children) {
for (var i = 0; i < children.length; i++) {
CustomElements.upgrade(children[i]);
}
}
}
}());if (Polymer.Settings.useShadow) {
Polymer.Base._addFeature({
_poolContent: function () {
},
_beginDistribute: function () {
},
distributeContent: function () {
},
_distributeContent: function () {
},
_finishDistribute: function () {
},
_createLocalRoot: function () {
this.createShadowRoot();
this.shadowRoot.appendChild(this.root);
this.root = this.shadowRoot;
}
});
}Polymer.Async = {
_currVal: 0,
_lastVal: 0,
_callbacks: [],
_twiddleContent: 0,
_twiddle: document.createTextNode(''),
run: function (callback, waitTime) {
if (waitTime > 0) {
return ~setTimeout(callback, waitTime);
} else {
this._twiddle.textContent = this._twiddleContent++;
this._callbacks.push(callback);
return this._currVal++;
}
},
cancel: function (handle) {
if (handle < 0) {
clearTimeout(~handle);
} else {
var idx = handle - this._lastVal;
if (idx >= 0) {
if (!this._callbacks[idx]) {
throw 'invalid async handle: ' + handle;
}
this._callbacks[idx] = null;
}
}
},
_atEndOfMicrotask: function () {
var len = this._callbacks.length;
for (var i = 0; i < len; i++) {
var cb = this._callbacks[i];
if (cb) {
try {
cb();
} catch (e) {
i++;
this._callbacks.splice(0, i);
this._lastVal += i;
this._twiddle.textContent = this._twiddleContent++;
throw e;
}
}
}
this._callbacks.splice(0, len);
this._lastVal += len;
}
};
new window.MutationObserver(function () {
Polymer.Async._atEndOfMicrotask();
}).observe(Polymer.Async._twiddle, { characterData: true });Polymer.Debounce = function () {
var Async = Polymer.Async;
var Debouncer = function (context) {
this.context = context;
var self = this;
this.boundComplete = function () {
self.complete();
};
};
Debouncer.prototype = {
go: function (callback, wait) {
var h;
this.finish = function () {
Async.cancel(h);
};
h = Async.run(this.boundComplete, wait);
this.callback = callback;
},
stop: function () {
if (this.finish) {
this.finish();
this.finish = null;
this.callback = null;
}
},
complete: function () {
if (this.finish) {
var callback = this.callback;
this.stop();
callback.call(this.context);
}
}
};
function debounce(debouncer, callback, wait) {
if (debouncer) {
debouncer.stop();
} else {
debouncer = new Debouncer(this);
}
debouncer.go(callback, wait);
return debouncer;
}
return debounce;
}();Polymer.Base._addFeature({
_setupDebouncers: function () {
this._debouncers = {};
},
debounce: function (jobName, callback, wait) {
return this._debouncers[jobName] = Polymer.Debounce.call(this, this._debouncers[jobName], callback, wait);
},
isDebouncerActive: function (jobName) {
var debouncer = this._debouncers[jobName];
return !!(debouncer && debouncer.finish);
},
flushDebouncer: function (jobName) {
var debouncer = this._debouncers[jobName];
if (debouncer) {
debouncer.complete();
}
},
cancelDebouncer: function (jobName) {
var debouncer = this._debouncers[jobName];
if (debouncer) {
debouncer.stop();
}
}
});Polymer.DomModule = document.createElement('habitlab-dom-module');
Polymer.Base._addFeature({
_registerFeatures: function () {
this._prepIs();
this._prepBehaviors();
this._prepConstructor();
this._prepTemplate();
this._prepShady();
this._prepPropertyInfo();
},
_prepBehavior: function (b) {
this._addHostAttributes(b.hostAttributes);
},
_initFeatures: function () {
this._registerHost();
if (this._template) {
this._poolContent();
this._beginHosting();
this._stampTemplate();
this._endHosting();
}
this._marshalHostAttributes();
this._setupDebouncers();
this._marshalBehaviors();
this._tryReady();
},
_marshalBehavior: function (b) {
}
});

/***/ }),

/***/ "./src/bower_components/polymer/polymer-mini.deps.js":
/*!***********************************************************!*\
  !*** ./src/bower_components/polymer/polymer-mini.deps.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer-micro.deps.js */ "./src/bower_components/polymer/polymer-micro.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/polymer/polymer-mini.html */ "./src/bower_components/polymer/polymer-mini.html"), 'bower_components/polymer/polymer-mini.html')
__webpack_require__(/*! bower_components/polymer/polymer-mini-0 */ "./src/bower_components/polymer/polymer-mini-0.js")


/***/ }),

/***/ "./src/bower_components/polymer/polymer-mini.html":
/*!********************************************************!*\
  !*** ./src/bower_components/polymer/polymer-mini.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=polymer-micro.html><script src=polymer-mini-0.js></script> </head><body></body></html>";

/***/ }),

/***/ "./src/bower_components/polymer/polymer.deps.js":
/*!******************************************************!*\
  !*** ./src/bower_components/polymer/polymer.deps.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer-mini.deps.js */ "./src/bower_components/polymer/polymer-mini.deps.js")
import_dom_modules(__webpack_require__(/*! bower_components/polymer/polymer.html */ "./src/bower_components/polymer/polymer.html"), 'bower_components/polymer/polymer.html')
__webpack_require__(/*! bower_components/polymer/polymer-0 */ "./src/bower_components/polymer/polymer-0.js")


/***/ }),

/***/ "./src/bower_components/polymer/polymer.html":
/*!***************************************************!*\
  !*** ./src/bower_components/polymer/polymer.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html><head><link rel=import href=polymer-mini.html><script src=polymer-0.js></script> </head><body></body></html>";

/***/ }),

/***/ "./src/components/habitlab-habitlab-intervention-first-seen-info.deps.js":
/*!**********************************************************************!*\
  !*** ./src/components/habitlab-habitlab-intervention-first-seen-info.deps.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/polymer-themes/ice.deps.js */ "./src/bower_components/polymer-themes/ice.deps.js")
__webpack_require__(/*! bower_components/habitlab-paper-toast/habitlab-paper-toast.deps.js */ "./src/bower_components/habitlab-paper-toast/habitlab-paper-toast.deps.js")
__webpack_require__(/*! bower_components/habitlab-paper-button/habitlab-paper-button.deps.js */ "./src/bower_components/habitlab-paper-button/habitlab-paper-button.deps.js")
import_dom_modules(__webpack_require__(/*! components/habitlab-habitlab-intervention-first-seen-info.html */ "./src/components/habitlab-habitlab-intervention-first-seen-info.html"), 'components/habitlab-habitlab-intervention-first-seen-info.html')
__webpack_require__(/*! components/habitlab-habitlab-intervention-first-seen-info */ "./src/components/habitlab-habitlab-intervention-first-seen-info.js")


/***/ }),

/***/ "./src/components/habitlab-habitlab-intervention-first-seen-info.html":
/*!*******************************************************************!*\
  !*** ./src/components/habitlab-habitlab-intervention-first-seen-info.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=import href=../bower_components/polymer/polymer.html> <link rel=import href=../bower_components/polymer-themes/ice.html> <link rel=import href=../bower_components/habitlab-paper-toast/habitlab-paper-toast.html> <link rel=import href=../bower_components/habitlab-paper-button/habitlab-paper-button.html> <habitlab-dom-module id=habitlab-habitlab-intervention-first-seen-info> <template> <style>:host{z-index:9007199254740991}#intervention_name_display{margin-top:10px}.intervention-icon{align:center;height:50px;width:50px;margin-right:10px;border-radius:5px;box-shadow:2px 2px 2px #888}#sample_toast{width:350px;height:230px;z-index:9007199254740991;background-color:#f0f8ff;color:#000}#ok_button{height:38px;width:100%;text-transform:none;background-color:#415D67;color:#fff;margin:0 auto;box-shadow:2px 2px 2px #888}</style> <habitlab-paper-toast id=sample_toast text=\"\" duration=0 vertical-align=top horizontal-align=right> <div>HabitLab rotates between different nudges each time you visit {{sitename}}. This is the first time you're seeing:</div> <div style=margin-top:10px;background-color:#383838;border-radius:5px;padding:5px;color:#fff> <div style=display:flex;align-items:center;align-content:center;justify-content:center> <img class=intervention-icon src={{get_intervention_icon_url()}} /> <h2 style=margin-right:25px;font-size:24px;color:#fff>{{intervention_name}}</h2> </div> <div style=display:flex;align-items:center;align-content:center;justify-content:center;padding-bottom:5px> <div style=text-align:center;font-size:11px;color:#fff>{{intervention_description}}</div> </div> </div> <div style=padding-top:10px></div> <habitlab-paper-button id=ok_button class=yellow-button on-click=ok_button_clicked>OK</habitlab-paper-button> </habitlab-paper-toast> </template> <script src=habitlab-habitlab-intervention-first-seen-info.js></script> </habitlab-dom-module>";

/***/ }),

/***/ "./src/components/habitlab-habitlab-intervention-first-seen-info.js":
/*!*****************************************************************!*\
  !*** ./src/components/habitlab-habitlab-intervention-first-seen-info.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const intervention = __webpack_require__(/*! libs_common/intervention_info */ "./src/libs_common/intervention_info.ls").get_intervention()

Polymer({
  is: 'habitlab-habitlab-intervention-first-seen-info',
  properties: {
    intervention_name: {
      type: String,
      value: (intervention != null) ? intervention.displayname : ''
    },
    intervention_description: {
      type: String,
      value: (intervention != null) ? intervention.description : '',
    },
    sitename: {
      type: String,
      value: (intervention != null) ? intervention.sitename_printable : '',
    },
  },
  ready: function() {
    /*
    let self = this
    //console.log('toast-test-widget ready')
    this.$.sample_toast.show()
    this.$.sample_toast_close_button.addEventListener('click', function() {
      self.$.sample_toast.hide()
    })
    */
   this.$$('#sample_toast').show()
    //show_toast('foobar')
  },
  ok_button_clicked: function() {
    this.$$('#sample_toast').hide()
  },
  get_intervention_icon_url: function() {
    let url_path
    if (intervention.generic_intervention != null)
      url_path = 'interventions/'+ intervention.generic_intervention + '/icon.svg'
    else {
      if (intervention.custom == true) {
        url_path = 'icons/custom_intervention_icon.svg'
      } else {
        url_path = 'interventions/'+ intervention.name + '/icon.svg'
      }
    }
    return (chrome.extension.getURL(url_path)).toString()
  }
})


/***/ }),

/***/ "./src/components/habitlab-habitlab-intervention-first-seen-power.deps.js":
/*!***********************************************************************!*\
  !*** ./src/components/habitlab-habitlab-intervention-first-seen-power.deps.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/polymer-themes/ice.deps.js */ "./src/bower_components/polymer-themes/ice.deps.js")
__webpack_require__(/*! bower_components/habitlab-paper-toast/habitlab-paper-toast.deps.js */ "./src/bower_components/habitlab-paper-toast/habitlab-paper-toast.deps.js")
__webpack_require__(/*! bower_components/habitlab-paper-button/habitlab-paper-button.deps.js */ "./src/bower_components/habitlab-paper-button/habitlab-paper-button.deps.js")
__webpack_require__(/*! bower_components/habitlab-paper-toggle-button/habitlab-paper-toggle-button.deps.js */ "./src/bower_components/habitlab-paper-toggle-button/habitlab-paper-toggle-button.deps.js")
import_dom_modules(__webpack_require__(/*! components/habitlab-habitlab-intervention-first-seen-power.html */ "./src/components/habitlab-habitlab-intervention-first-seen-power.html"), 'components/habitlab-habitlab-intervention-first-seen-power.html')
__webpack_require__(/*! components/habitlab-habitlab-intervention-first-seen-power */ "./src/components/habitlab-habitlab-intervention-first-seen-power.js")


/***/ }),

/***/ "./src/components/habitlab-habitlab-intervention-first-seen-power.html":
/*!********************************************************************!*\
  !*** ./src/components/habitlab-habitlab-intervention-first-seen-power.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=import href=../bower_components/polymer/polymer.html> <link rel=import href=../bower_components/polymer-themes/ice.html> <link rel=import href=../bower_components/habitlab-paper-toast/habitlab-paper-toast.html> <link rel=import href=../bower_components/habitlab-paper-button/habitlab-paper-button.html> <link rel=import href=../bower_components/habitlab-paper-toggle-button/habitlab-paper-toggle-button.html> <habitlab-dom-module id=habitlab-habitlab-intervention-first-seen-power> <template> <style>:host{z-index:9007199254740991}.intervention-icon{align:center;height:50px;width:50px;margin-right:10px;border-radius:5px;box-shadow:2px 2px 2px #888}#sample_toast{width:350px;height:270px;z-index:9007199254740991;background-color:#f0f8ff;color:#000}#ok_button{height:38px;width:100%;text-transform:none;background-color:#415D67;color:#fff;margin:0 auto;box-shadow:2px 2px 2px #888}</style> <habitlab-paper-toast id=sample_toast text=\"\" duration=0 vertical-align=top horizontal-align=right> <div>HabitLab rotates between different nudges each time you visit {{sitename}}. This is the first time you're seeing:</div> <div style=margin-top:10px;background-color:#383838;border-radius:5px;padding:5px;color:#fff> <div style=display:flex;align-items:center;align-content:center;justify-content:center> <img class=intervention-icon src={{get_intervention_icon_url()}} /> <h2 style=margin-right:25px;font-size:24px;color:#fff>{{intervention_name}}</h2> </div> <div style=display:flex;align-items:center;align-content:center;justify-content:center;padding-bottom:5px> <div style=text-align:center;font-size:11px;color:#fff>{{intervention_description}}</div> </div> </div> <div style=padding-top:10px></div> <div style=display:flex;align-items:center;align-content:center;justify-content:center> <habitlab-paper-toggle-button id=future_visits_checkbox checked={{is_intervention_enabled}}>Show {{intervention_name}} on future visits</habitlab-paper-toggle-button> </div> <br> <habitlab-paper-button id=ok_button class=yellow-button on-click=ok_button_clicked>OK</habitlab-paper-button> </habitlab-paper-toast> </template> <script src=habitlab-habitlab-intervention-first-seen-power.js></script> </habitlab-dom-module>";

/***/ }),

/***/ "./src/components/habitlab-habitlab-intervention-first-seen-power.js":
/*!******************************************************************!*\
  !*** ./src/components/habitlab-habitlab-intervention-first-seen-power.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  intervention_first_seen_power_enabledisable,
  get_enabled_interventions,
} = __webpack_require__(/*! libs_common/intervention_utils */ "./src/generated_libs/libs_frontend/intervention_utils.js")

const intervention = __webpack_require__(/*! libs_common/intervention_info */ "./src/libs_common/intervention_info.ls").get_intervention()

Polymer({
  is: 'habitlab-habitlab-intervention-first-seen-power',
  properties: {
    intervention_name: {
      type: String,
      value: (intervention != null) ? intervention.displayname : '',
    },
    intervention_description: {
      type: String,
      value: (intervention != null) ? intervention.description : '',
    },
    sitename: {
      type: String,
      value: (intervention != null) ? intervention.sitename_printable : '',
    },
    is_intervention_enabled: {
      type: Boolean,
      value: true,
      observer: 'is_intervention_enabled_changed',
    }
  },
  ready: async function() {
    /*
    let self = this
    //console.log('toast-test-widget ready')
    this.$.sample_toast.show()
    this.$.sample_toast_close_button.addEventListener('click', function() {
      self.$.sample_toast.hide()
    })
    */
    let self = this
    this.$$('#sample_toast').show()
    // setTimeout(function() {
    //   const {
    //     //make_checkbox_clickable,
    //     make_togglebutton_clickable,
    //   } = require('libs_frontend/frontend_libs')
    //   // workaround since habitlab-paper-checkbox seems to mysteriously not be checkable
    //   make_togglebutton_clickable(self.$$('#future_visits_checkbox'))
    //   //make_checkbox_clickable(self.$$('#future_visits_checkbox'))
    // }, 1000);
    let enabled_interventions = await get_enabled_interventions()
    if (enabled_interventions != null && enabled_interventions[intervention.name] != null && enabled_interventions[intervention.name] == false) {
      this.is_intervention_enabled = false
    }
    console.log('finished ready')
  },
  is_intervention_enabled_changed: async function(is_enabled, prev_value) {
    console.log('is_intervention_enabled_changed')
    if (prev_value == null) {
      return
    }
    if (is_enabled == prev_value) {
      return
    }
    if (intervention == null) {
      return
    }
    await intervention_first_seen_power_enabledisable(intervention, is_enabled, window.location.href)
  },
  ok_button_clicked: function() {
    this.$$('#sample_toast').hide()
  },
  get_intervention_icon_url: function() {
    let url_path
    if (intervention.generic_intervention != null)
      url_path = 'interventions/'+ intervention.generic_intervention + '/icon.svg'
    else {
      if (intervention.custom == true) {
        url_path = 'icons/custom_intervention_icon.svg'
      } else {
        url_path = 'interventions/'+ intervention.name + '/icon.svg'
      }
    }
    return (chrome.extension.getURL(url_path)).toString()
  }
})


/***/ }),

/***/ "./src/components/habitlab-habitlab-intervention-suggestion-thisvisit-optout.deps.js":
/*!**********************************************************************************!*\
  !*** ./src/components/habitlab-habitlab-intervention-suggestion-thisvisit-optout.deps.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/polymer-themes/ice.deps.js */ "./src/bower_components/polymer-themes/ice.deps.js")
__webpack_require__(/*! bower_components/habitlab-paper-toast/habitlab-paper-toast.deps.js */ "./src/bower_components/habitlab-paper-toast/habitlab-paper-toast.deps.js")
__webpack_require__(/*! bower_components/habitlab-paper-button/habitlab-paper-button.deps.js */ "./src/bower_components/habitlab-paper-button/habitlab-paper-button.deps.js")
__webpack_require__(/*! bower_components/habitlab-paper-toggle-button/habitlab-paper-toggle-button.deps.js */ "./src/bower_components/habitlab-paper-toggle-button/habitlab-paper-toggle-button.deps.js")
import_dom_modules(__webpack_require__(/*! components/habitlab-habitlab-intervention-suggestion-thisvisit-optout.html */ "./src/components/habitlab-habitlab-intervention-suggestion-thisvisit-optout.html"), 'components/habitlab-habitlab-intervention-suggestion-thisvisit-optout.html')
__webpack_require__(/*! components/habitlab-habitlab-intervention-suggestion-thisvisit-optout */ "./src/components/habitlab-habitlab-intervention-suggestion-thisvisit-optout.js")


/***/ }),

/***/ "./src/components/habitlab-habitlab-intervention-suggestion-thisvisit-optout.html":
/*!*******************************************************************************!*\
  !*** ./src/components/habitlab-habitlab-intervention-suggestion-thisvisit-optout.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=import href=../bower_components/polymer/polymer.html> <link rel=import href=../bower_components/polymer-themes/ice.html> <link rel=import href=../bower_components/habitlab-paper-toast/habitlab-paper-toast.html> <link rel=import href=../bower_components/habitlab-paper-button/habitlab-paper-button.html> <link rel=import href=../bower_components/habitlab-paper-toggle-button/habitlab-paper-toggle-button.html> <habitlab-dom-module id=habitlab-habitlab-intervention-suggestion-thisvisit-optout> <template> <style>:host{z-index:9007199254740991}#intervention_name_display{margin-top:10px}.intervention-icon{align:center;height:50px;width:50px;margin-right:10px;border-radius:5px;box-shadow:2px 2px 2px #888}#sample_toast{width:350px;height:280px;z-index:9007199254740991;background-color:#f0f8ff;color:#000}#ok_button{height:38px;width:100%;text-transform:none;background-color:#415D67;color:#fff;margin:0 auto;box-shadow:2px 2px 2px #888;margin-bottom:10px}</style> <habitlab-paper-toast id=sample_toast text=\"\" duration=0 vertical-align=top horizontal-align=right> <div>HabitLab rotates between different nudges each time you visit {{sitename}}. This is the first time you're seeing:</div> <div style=margin-top:10px;background-color:#383838;border-radius:5px;padding:5px;color:#fff> <div style=display:flex;align-items:center;align-content:center;justify-content:center> <img class=intervention-icon src={{get_intervention_icon_url()}} /> <h2 style=margin-right:25px;font-size:24px;color:#fff>{{intervention_name}}</h2> </div> <div style=display:flex;align-items:center;align-content:center;justify-content:center;padding-bottom:5px> <div style=text-align:center;font-size:11px;color:#fff>{{intervention_description}}</div> </div> <div style=display:flex;align-items:center;align-content:center;justify-content:center;padding-bottom:5px> <div style=text-align:center;font-size:11px;color:#fff>Difficulty: {{intervention_difficulty_printable}}</div> </div> </div> <div style=padding-top:10px></div> <habitlab-paper-button id=ok_button class=yellow-button on-click=no_button_clicked>No, I don't want this nudge</habitlab-paper-button> <br> <habitlab-paper-button id=ok_button class=yellow-button on-click=ok_button_clicked>OK</habitlab-paper-button> </habitlab-paper-toast> </template> <script src=habitlab-habitlab-intervention-suggestion-thisvisit-optout.js></script> </habitlab-dom-module>";

/***/ }),

/***/ "./src/components/habitlab-habitlab-intervention-suggestion-thisvisit-optout.js":
/*!*****************************************************************************!*\
  !*** ./src/components/habitlab-habitlab-intervention-suggestion-thisvisit-optout.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const intervention = __webpack_require__(/*! libs_common/intervention_info */ "./src/libs_common/intervention_info.ls").get_intervention();

const {
  log_intervention_suggestion_action,
  log_impression,
} = __webpack_require__(/*! libs_frontend/intervention_log_utils */ "./src/libs_frontend/intervention_log_utils.ls");

const {
  set_intervention_enabled,
  set_intervention_disabled,
} = __webpack_require__(/*! libs_frontend/intervention_utils */ "./src/generated_libs/libs_frontend/intervention_utils.js");

Polymer({
  is: 'habitlab-habitlab-intervention-suggestion-thisvisit-optout',
  properties: {
    intervention_name: {
      type: String,
      value: (intervention != null) ? intervention.displayname : ''
    },
    intervention_description: {
      type: String,
      value: (intervention != null) ? intervention.description : '',
    },
    intervention_difficulty: {
      type: String,
      value: (intervention != null) ? intervention.difficulty : 'medium'
    },
    intervention_difficulty_printable: {
      type: String,
      computed: 'compute_intervention_difficulty_printable(intervention_difficulty)',
    },
    sitename: {
      type: String,
      value: (intervention != null) ? intervention.sitename_printable : '',
    },
    isdemo: {
      type: Boolean,
      observer: 'isdemo_changed',
    },
  },
  isdemo_changed: function() {
    if (this.isdemo) {
      this.show();
    }
  },
  compute_intervention_difficulty_printable: function(intervention_difficulty) {
    let output = 'Medium'
    switch (intervention_difficulty) {
      case 'easy':
        output = 'Easy';
        break
      case 'medium':
        output = 'Medium';
        break
      case 'hard':
        output = 'Hard';
        break
    }
    return output
  },
  show: async function() {
    this.$$('#sample_toast').show()
    await set_intervention_enabled(intervention.name)
    await log_impression({'suggestion': 'true', 'optout':'true'})
  },
  ok_button_clicked: async function() {
    this.$$('#sample_toast').hide();
    await log_impression({'suggestion': 'true', 'suggestion_optout':'true', 'ok_clicked':'true'})
  },
  //ok_button_clicked: async function() {
    //this.$$('#sample_toast').hide()
   // this.fire('intervention_suggestion_accepted', {})
  //},
  no_button_clicked: async function() {
    this.$$('#sample_toast').hide();
    this.fire('disable_intervention')
    await set_intervention_disabled(intervention.name)
    await log_intervention_suggestion_action({'action': 'rejected', 'accepted': 'false', 'optout':'false'})
  },
  get_intervention_icon_url: function() {
    let url_path
    if (intervention.generic_intervention != null)
      url_path = 'interventions/'+ intervention.generic_intervention + '/icon.svg'
    else {
      if (intervention.custom == true) {
        url_path = 'icons/custom_intervention_icon.svg'
      } else {
        url_path = 'interventions/'+ intervention.name + '/icon.svg'
      }
    }
    return (chrome.extension.getURL(url_path)).toString()
  }
})


/***/ }),

/***/ "./src/components/habitlab-habitlab-intervention-suggestion-thisvisit.deps.js":
/*!***************************************************************************!*\
  !*** ./src/components/habitlab-habitlab-intervention-suggestion-thisvisit.deps.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// this file was generated by scripts/generate_polymer_dependencies
// do not edit this file directly
// instead, edit the corresponding .html file and re-run the script
const {import_dom_modules} = __webpack_require__(/*! libs_frontend/dom_utils */ "./src/libs_frontend/dom_utils.ls")
__webpack_require__(/*! bower_components/polymer/polymer.deps.js */ "./src/bower_components/polymer/polymer.deps.js")
__webpack_require__(/*! bower_components/polymer-themes/ice.deps.js */ "./src/bower_components/polymer-themes/ice.deps.js")
__webpack_require__(/*! bower_components/habitlab-paper-toast/habitlab-paper-toast.deps.js */ "./src/bower_components/habitlab-paper-toast/habitlab-paper-toast.deps.js")
__webpack_require__(/*! bower_components/habitlab-paper-button/habitlab-paper-button.deps.js */ "./src/bower_components/habitlab-paper-button/habitlab-paper-button.deps.js")
import_dom_modules(__webpack_require__(/*! components/habitlab-habitlab-intervention-suggestion-thisvisit.html */ "./src/components/habitlab-habitlab-intervention-suggestion-thisvisit.html"), 'components/habitlab-habitlab-intervention-suggestion-thisvisit.html')
__webpack_require__(/*! components/habitlab-habitlab-intervention-suggestion-thisvisit */ "./src/components/habitlab-habitlab-intervention-suggestion-thisvisit.js")


/***/ }),

/***/ "./src/components/habitlab-habitlab-intervention-suggestion-thisvisit.html":
/*!************************************************************************!*\
  !*** ./src/components/habitlab-habitlab-intervention-suggestion-thisvisit.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=import href=../bower_components/polymer/polymer.html> <link rel=import href=../bower_components/polymer-themes/ice.html> <link rel=import href=../bower_components/habitlab-paper-toast/habitlab-paper-toast.html> <link rel=import href=../bower_components/habitlab-paper-button/habitlab-paper-button.html> <habitlab-dom-module id=habitlab-habitlab-intervention-suggestion-thisvisit> <template> <style>:host{z-index:9007199254740991}#intervention_name_display{margin-top:10px}.intervention-icon{align:center;height:50px;width:50px;margin-right:10px;border-radius:5px;box-shadow:2px 2px 2px #888}#sample_toast{width:350px;height:280px;z-index:9007199254740991;background-color:#f0f8ff;color:#000}#ok_button{height:38px;width:100%;text-transform:none;background-color:#415D67;color:#fff;margin:0 auto;box-shadow:2px 2px 2px #888;margin-bottom:10px}#no_button{height:38px;width:100%;text-transform:none;background-color:#415D67;color:#fff;margin:0 auto;box-shadow:2px 2px 2px #888}</style> <habitlab-paper-toast id=sample_toast text=\"\" duration=0 vertical-align=top horizontal-align=right> <div>Here's a nudge you haven't yet tried. Would you like to try it this visit?</div> <div style=margin-top:10px;background-color:#383838;border-radius:5px;padding:5px;color:#fff> <div style=display:flex;align-items:center;align-content:center;justify-content:center> <img class=intervention-icon src={{get_intervention_icon_url()}} /> <h2 style=margin-right:25px;font-size:24px;color:#fff>{{intervention_name}}</h2> </div> <div style=display:flex;align-items:center;align-content:center;justify-content:center;padding-bottom:5px> <div style=text-align:center;font-size:11px;color:#fff>{{intervention_description}}</div> </div> <div style=display:flex;align-items:center;align-content:center;justify-content:center;padding-bottom:5px> <div style=text-align:center;font-size:11px;color:#fff>Difficulty: {{intervention_difficulty_printable}}</div> </div> </div> <div style=padding-top:10px></div> <div> <habitlab-paper-button id=ok_button class=yellow-button on-click=ok_button_clicked>Yes, try this nudge right now</habitlab-paper-button> <habitlab-paper-button id=no_button class=yellow-button on-click=no_button_clicked>No, I don't want this nudge</habitlab-paper-button> </div> </habitlab-paper-toast> </template> <script src=habitlab-habitlab-intervention-suggestion-thisvisit.js></script> </habitlab-dom-module>";

/***/ }),

/***/ "./src/components/habitlab-habitlab-intervention-suggestion-thisvisit.js":
/*!**********************************************************************!*\
  !*** ./src/components/habitlab-habitlab-intervention-suggestion-thisvisit.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const intervention = __webpack_require__(/*! libs_common/intervention_info */ "./src/libs_common/intervention_info.ls").get_intervention();

const {
  log_intervention_suggestion_action,
  log_impression,
} = __webpack_require__(/*! libs_frontend/intervention_log_utils */ "./src/libs_frontend/intervention_log_utils.ls");

const {
  set_intervention_enabled
} = __webpack_require__(/*! libs_frontend/intervention_utils */ "./src/generated_libs/libs_frontend/intervention_utils.js");

Polymer({
  is: 'habitlab-habitlab-intervention-suggestion-thisvisit',
  properties: {
    intervention_name: {
      type: String,
      value: (intervention != null) ? intervention.displayname : ''
    },
    intervention_description: {
      type: String,
      value: (intervention != null) ? intervention.description : '',
    },
    intervention_difficulty: {
      type: String,
      value: (intervention != null) ? intervention.difficulty : 'medium'
    },
    intervention_difficulty_printable: {
      type: String,
      computed: 'compute_intervention_difficulty_printable(intervention_difficulty)',
    },
    sitename: {
      type: String,
      value: (intervention != null) ? intervention.sitename_printable : '',
    },
    isdemo: {
      type: Boolean,
      observer: 'isdemo_changed',
    },
  },
  isdemo_changed: function() {
    if (this.isdemo) {
      this.show();
    }
  },
  compute_intervention_difficulty_printable: function(intervention_difficulty) {
    let output = 'Medium'
    switch (intervention_difficulty) {
      case 'easy':
        output = 'Easy';
        break
      case 'medium':
        output = 'Medium';
        break
      case 'hard':
        output = 'Hard';
        break
    }
    return output
  },
  ready: function() {
    /*
    let self = this
    //console.log('toast-test-widget ready')
    this.$.sample_toast.show()
    this.$.sample_toast_close_button.addEventListener('click', function() {
      self.$.sample_toast.hide()
    })
    */
    //show_toast('foobar')
  },
  show: function() {
    this.$$('#sample_toast').show()
  },
  ok_button_clicked: async function() {
    this.$$('#sample_toast').hide()
    this.fire('intervention_suggestion_accepted', {})
    await log_intervention_suggestion_action({'action': 'accepted', 'accepted': 'true'})
    await log_impression({'suggestion': 'true'})
    await set_intervention_enabled(intervention.name)
  },
  no_button_clicked: async function() {
    this.$$('#sample_toast').hide();
    this.fire('intervention_suggestion_rejected', {})
    await log_intervention_suggestion_action({'action': 'rejected', 'accepted': 'false'})
  },
  get_intervention_icon_url: function() {
    let url_path
    if (intervention.generic_intervention != null)
      url_path = 'interventions/'+ intervention.generic_intervention + '/icon.svg'
    else {
      if (intervention.custom == true) {
        url_path = 'icons/custom_intervention_icon.svg'
      } else {
        url_path = 'interventions/'+ intervention.name + '/icon.svg'
      }
    }
    return (chrome.extension.getURL(url_path)).toString()
  }
})


/***/ }),

/***/ "./src/generated_libs/libs_frontend/intervention_first_impression_utils_backend.js":
/*!*****************************************************************************************!*\
  !*** ./src/generated_libs/libs_frontend/intervention_first_impression_utils_backend.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// This file is generated from libs_common/function_signatures.ls
// Do not edit this file directly. To regenerate, run gulp
const {import_lib} = __webpack_require__(/*! libs_frontend/import_lib */ "./src/libs_frontend/import_lib.ls");
module.exports = import_lib('intervention_first_impression_utils_backend');


/***/ }),

/***/ "./src/generated_libs/libs_frontend/intervention_utils.js":
/*!****************************************************************!*\
  !*** ./src/generated_libs/libs_frontend/intervention_utils.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// This file is generated from libs_common/function_signatures.ls
// Do not edit this file directly. To regenerate, run gulp
const {import_lib} = __webpack_require__(/*! libs_frontend/import_lib */ "./src/libs_frontend/import_lib.ls");
module.exports = import_lib('intervention_utils');


/***/ }),

/***/ "./src/generated_libs/libs_frontend/log_utils.js":
/*!*******************************************************!*\
  !*** ./src/generated_libs/libs_frontend/log_utils.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// This file is generated from libs_common/function_signatures.ls
// Do not edit this file directly. To regenerate, run gulp
const {import_lib} = __webpack_require__(/*! libs_frontend/import_lib */ "./src/libs_frontend/import_lib.ls");
module.exports = import_lib('log_utils');


/***/ }),

/***/ "./src/interventions/youtube/prompt_before_watch/frontend.js":
/*!*******************************************************************!*\
  !*** ./src/interventions/youtube/prompt_before_watch/frontend.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* habitlab javascript intervention loader */

window.Polymer = window.Polymer || {};
window.Polymer.dom = "shadow";

  if (typeof(window.wrap) != 'function') {
    window.wrap = null;
  }
  
__webpack_require__(/*! enable-webcomponents-in-content-scripts */ "./node_modules/enable-webcomponents-in-content-scripts/index.js");
async function habitlab_intervention_main_function(){
Promise.all(/*! require.ensure */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(1), __webpack_require__.e(5), __webpack_require__.e(36)]).then((async function(require) { 

var define_component = __webpack_require__(/*! libs_frontend/polymer_utils */ "./src/libs_frontend/polymer_utils.ls").polymer_ext;

Promise.resolve(/*! require.ensure */).then((async function(require){

const $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")

const {close_selected_tab} = __webpack_require__(/*! libs_frontend/tab_utils */ "./src/generated_libs/libs_frontend/tab_utils.js")

const {
  once_available,
  on_url_change,
  wrap_in_shadow,
} = __webpack_require__(/*! libs_frontend/frontend_libs */ "./src/libs_frontend/frontend_libs.ls")

const {
  run_only_one_at_a_time
} = __webpack_require__(/*! libs_common/common_libs */ "./src/libs_common/common_libs.ls")

const {
  get_seconds_spent_on_domain_today
} = __webpack_require__(/*! libs_common/time_spent_utils */ "./src/libs_common/time_spent_utils.ls")

const {
  log_action,
} = __webpack_require__(/*! libs_frontend/intervention_log_utils */ "./src/libs_frontend/intervention_log_utils.ls")

// require_component('habitlab-logo-v2')
// require_component('call-to-action-button')
// require_component('habitlab-positive-goal-site-button')
// require_component('habitlab-paper-button')

__webpack_require__(/*! components/habitlab-logo-v2.deps */ "./src/components/habitlab-logo-v2.deps.js")
__webpack_require__(/*! components/call-to-action-button.deps */ "./src/components/call-to-action-button.deps.js")
__webpack_require__(/*! components/habitlab-positive-goal-site-button.deps */ "./src/components/habitlab-positive-goal-site-button.deps.js")
__webpack_require__(/*! bower_components/habitlab-paper-button/habitlab-paper-button.deps */ "./src/bower_components/habitlab-paper-button/habitlab-paper-button.deps.js")


//console.log('youtube prompt before watch loaded frontend')


let end_pauser = null //new
let play_video_clicked = false
let video_pauser = null

function create_video_pauser() {
  if (video_pauser != null) {
    return
  }
  play_video_clicked = false
  video_pauser = setInterval(() => {
    if (play_video_clicked) {
      clearInterval(video_pauser);
      video_pauser = null
      return;
    }
    set_overlay_position_over_video()
    pauseVideo();
  }, 100);
}

//Initially pauses the video when the page is loaded
function pauseVideo() {
  const overlayBox = document.querySelector('video:not(#rewardvideo)');
  if (!overlayBox.paused) {
    overlayBox.pause();
  }
}

function shadow_find(query) {
  var overlay_host = $('#habitlab_video_overlay')
  if (overlay_host.length == 0) {
    return $()
  }
  return $(overlay_host[0].shadow_div).find(query)
}

function get_overlay() {
  var overlay_host = $('#habitlab_video_overlay')
  if (overlay_host.length == 0) {
    return $()
  }
  return $(overlay_host[0].shadow_div)
}

function first_nonempty(...args) {
  for (var x of args) {
    var $x = $(x)
    if ($x.length > 0) {
      return $x
    }
  }
  return $()
}

function set_overlay_position_over_video() {
  var $a = get_overlay()
  if ($a.length == 0) {
    return false
  }
  var video = first_nonempty('.html5-video-player', 'video:not(#rewardvideo)', '#player-api')
  var video_container = video
  //while (video_container.length > 0) {}
  var video_height = video.height()
  var video_width = video.width()
  if (video_height == 0 || video_width == 0) {
    return false
  }
  $a.width(video_width);
  $a.height(video_height);
  $a.css({'background-color': 'white'});
  $a.css('z-index', 100);
  const b = $a[0]
  b.style.left = video.offset().left + 'px';
  b.style.top = video.offset().top + 'px';
  //b.style.opacity = 0.9;
  return true
}

function get_youtube_video_id_from_url() {
  var rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/
  return window.location.href.match(rx)[1]
}

function get_youtube_video_id_from_page() {
  if ($('ytd-watch').length > 0 && $('ytd-watch').attr('video-id') != null) {
    // new youtube
    return $('ytd-watch').attr('video-id')
  }
  if ($('ytd-watch-flexy').length > 0 && $('ytd-watch-flexy').attr('video-id') != null) {
    return $('ytd-watch-flexy').attr('video-id')
  }
  var $page = $('#page')
  if ($page.length == 0) {
    return '' // TODO log error intervention broken
  }
  // old youtube version
  var class_list = $page[0].className.split(' ')
  var classnames_starting_with_video = class_list.filter(x => x.startsWith('video-'))
  if (classnames_starting_with_video.length == 0) {
    return '' // TODO log error intervention broken
  }
  return classnames_starting_with_video[0].substr('video-'.length)
}

var wait_for_video_duration = null

function set_video_duration() {
  var overlay = get_overlay()
  if (overlay.length == 0) {
    return false
  }
  if (get_youtube_video_id_from_url() != get_youtube_video_id_from_page()) {
    // not yet finished loading
    return false
  }
  if (overlay.data('duration_set') == true) {
    clearInterval(wait_for_video_duration);
    wait_for_video_duration = null
    return true
  }
  var video = $('video:not(#rewardvideo)');
  if (video.length == 0) return;
  const duration = Math.round(video[0].duration)
  if (!isNaN(duration)) {
    const minutes = Math.floor(duration / 60)
    const seconds = (duration % 60)
    overlay.find('#message_text').html("This video is " + minutes + " minutes and " + seconds + " seconds long.<br>Are you sure you want to play it?");
    clearInterval(wait_for_video_duration);
    wait_for_video_duration = null
    overlay.data('duration_set', true)
    return true
  }
  return false
}

function start_video_duration_setter() {
  var overlay = get_overlay()
  if (!overlay.data('duration_set')) {
    overlay.find('#message_text').html('<span style="visibility: hidden">This video is XX minutes and XX seconds long.<br>Are you sure you want to play it?</span>')
  }
  if (!wait_for_video_duration) {
    wait_for_video_duration = setInterval(set_video_duration, 100)
  }
  set_video_duration()
}

function divOverVideoOnceAvailable(status) {
  once_available('video:not(#rewardvideo)').then(function() {
    divOverVideo(status);
  })
}

//Places a white box over the video with a warning message
function divOverVideo(status) {
  //Constructs white overlay box
  if (window.intervention_disabled) {
    return
  }
  var video = $('video:not(#rewardvideo)')
  if (video.length == 0) {
    return
  }
  if (video.width() == 0 || video.height() == 0) {
    return
  }
  if (window.location.href.indexOf('watch') == -1) {
    return
  }
  if (get_overlay().data('location') == window.location.href) {
    return
  }
  var video_container = first_nonempty('.html5-video-player', 'video:not(#rewardvideo)', '#player-api')
  if (video_container.width() == 0 || video_container.height() == 0) {
    return
  }
  $('#habitlab_video_overlay').remove()
  const $a = $('<div>')
  //$a.text();
  $(document.body).append($(wrap_in_shadow($a)).attr('id', 'habitlab_video_overlay'));
  $a.css({'position': 'absolute', 'display': 'table'})
  //if (!set_overlay_position_over_video()) {
  //  console.log('failed set_overlay_position_over_video')
  //  $('#habitlab_video_overlay').remove()
  //  return
  //}
  //if ($('#habitlab_video_overlay').width() == 0 || $('#habitlab_video_overlay').height() == 0) {
  //  console.log('failed habitlab_video_overlay size check')
  //  $('#habitlab_video_overlay').remove()
  //  return
  //}
  //console.log('everything succeeded running as usual')
  $a.data('location', window.location.href).data('duration_set', false)

  //Centered container for text in the white box
  const $contentContainer = $('<div>')
  .addClass('contentContainer')
  .css({
    //'position': 'absolute',
    //'top': '50%',
    //'left': '50%',
    //'transform': 'translateX(-50%) translateY(-50%)',
    'text-align': 'center',
    'display': 'table-cell',
    'vertical-align': 'middle'
  });
  
  $contentContainer.append('<habitlab-logo-v2>')
  $contentContainer.append('<br><br>')

  //Message to user
  const $text1 = $('<h2>').attr('id', 'message_text').css('font-weight', 'normal');
  $contentContainer.append($text1);
  $contentContainer.append($('<br>'));

  //Decide whether to show a close tab or a specific positive call-to-action button.
  if (Math.random()<1) {
    const $button1 = $('<call-to-action-button text="Close Youtube">');
    $contentContainer.append($button1);

  } else {
    const $button1 = $('<habitlab-positive-goal-site-button>');
    $contentContainer.append($button1);
  }

  //Continue watching video button
  const $button2 = $('<habitlab-paper-button>');
  $button2.text("Watch Video");
  $button2.css({
    'cursor': 'pointer',
    'background-color': '#415D67',
    'color': 'white',
    '-webkit-font-smoothing': 'antialiased',
    'box-shadow': '2px 2px 2px #888888',
    'height': '38px',
    'margin-left': '10px'
  });
  $button2.click(() => {
    log_action({'negative': 'remainedOnYoutube'})
    removeDivAndPlay();
    $button2.hide();
  })
  $contentContainer.append($button2);

  //Adds text into the white box
  $a.append($contentContainer);

  //Logs impression

  if (status === 'begin') {
    start_video_duration_setter()
  } else { //status === 'end'
    get_seconds_spent_on_domain_today('www.youtube.com').then(function(secondsSpent) {
      const mins = Math.floor(secondsSpent/60)
      const secs = secondsSpent % 60
      shadow_find('#message_text').html("You've spent " + mins + " minutes and " + secs + " seconds on Youtube today. <br>Are you sure you want to continue watching videos?");
    })
  }
}

//Remove the white div
function removeDivAndPlay() {
  play_video_clicked = true;
  $('#habitlab_video_overlay').remove();
  const play = document.querySelector('video:not(#rewardvideo)');
  play.play();
}

//Remove the white div
function removeDiv() {
  $('#habitlab_video_overlay').remove();
}

function endWarning() {
  // $('video').on('ended', function() {
  //   console.log("executing");
  //   divOverVideoEnd();
  // });
  if (window.intervention_disabled) {
    return
  }
  const overlayBox = document.querySelector('video:not(#rewardvideo)');
  if ((overlayBox.currentTime > (overlayBox.duration - 0.15)) && !overlayBox.paused) {
    clearInterval(end_pauser)
    end_pauser = null
    pauseVideo()
    removeDiv();
    divOverVideo("end")
    set_overlay_position_over_video()
  }
}

var prev_location_href = null

//All method calls
function main() {
  if (window.intervention_disabled) {
    return
  }
  if (window.location.href == prev_location_href) {
    return // duplicate call to main
  }
  prev_location_href = window.location.href
  create_video_pauser()
  removeDiv();
  divOverVideoOnceAvailable("begin");
  if (end_pauser === null) {
    end_pauser = setInterval(() => {
      endWarning()
    }, 100); //Loop to test the status of the video until near the end
  }
}

//Link to Fix: http://stackoverflow.com/questions/18397962/chrome-extension-is-not-loading-on-browser-navigation-at-youtube
function afterNavigate() {
  if (video_pauser != null) { 
    clearInterval(video_pauser);
    video_pauser = null 
  }
  if (end_pauser != null) { 
    clearInterval(end_pauser); 
    end_pauser = null
  }
  if ('/watch' === location.pathname) {
    //if (video_pauser) {
    //  clearInterval(video_pauser);
    //  video_pauser = null;
    //}
    //$(document).ready(main);
    main();
  } else {
    removeDiv();
  }
}

//Youtube specific call for displaying the white div/message when the red top slider transitions
//(Solution from link above)
(document.body || document.documentElement).addEventListener('transitionend',
  (event) => {
    if (event.propertyName === 'width' && event.target.id === 'progress') {
        afterNavigate();
    }
}, true);

//$(document).ready(main);
//main()

once_available('video:not(#rewardvideo)', () => {
  afterNavigate()
})

on_url_change(() => {
  afterNavigate()
})

//Executed after page load
//afterNavigate();

window.addEventListener('popstate', function(evt) {
  afterNavigate()
})

window.addEventListener('resize', function(evt) {
  set_overlay_position_over_video()
})

window.on_intervention_disabled = () => {
  removeDivAndPlay()
}

}).bind(null, __webpack_require__)).catch(__webpack_require__.oe)

}).bind(null, __webpack_require__)).catch(__webpack_require__.oe) 
window.debugeval = x => eval(x);
__webpack_require__(/*! libs_frontend/intervention_first_impression_utils */ "./src/libs_frontend/intervention_first_impression_utils.js").show_first_impression_notice_if_needed();

	  }

	(async function() {

		let {get_is_suggestion_mode, get_is_suggestion_mode_optout, get_is_new_session} = __webpack_require__(/*! libs_common/intervention_info */ "./src/libs_common/intervention_info.ls")

		if (get_is_suggestion_mode()) {
      if (get_is_suggestion_mode_optout()) {
        // opt out suggestions todo
        if (get_is_new_session()) {
          __webpack_require__(/*! components/habitlab-habitlab-intervention-suggestion-thisvisit-optout.deps */ "./src/components/habitlab-habitlab-intervention-suggestion-thisvisit-optout.deps.js");
          
          let {
            append_to_body_shadow,
            once_body_available
          } = __webpack_require__(/*! libs_frontend/frontend_libs */ "./src/libs_frontend/frontend_libs.ls");
          
          await once_body_available();
          let intervention_suggestion_display = document.createElement('habitlab-habitlab-intervention-suggestion-thisvisit-optout');
          let shadow_intervention_suggestion_display = append_to_body_shadow(intervention_suggestion_display, {zIndex: 9007199254740991});
          setTimeout(function() {
            intervention_suggestion_display.show();
          }, 5000)

          habitlab_intervention_main_function();
        } else {
          
        }
      } else {
        // opt in suggestions
        if (get_is_new_session()) {
          __webpack_require__(/*! components/habitlab-habitlab-intervention-suggestion-thisvisit.deps */ "./src/components/habitlab-habitlab-intervention-suggestion-thisvisit.deps.js");
          
          let {
            append_to_body_shadow,
            once_body_available
          } = __webpack_require__(/*! libs_frontend/frontend_libs */ "./src/libs_frontend/frontend_libs.ls");
          
          await once_body_available();
          let intervention_suggestion_display = document.createElement('habitlab-habitlab-intervention-suggestion-thisvisit');
          let shadow_intervention_suggestion_display = append_to_body_shadow(intervention_suggestion_display);
          intervention_suggestion_display.show();
          
          intervention_suggestion_display.addEventListener('intervention_suggestion_accepted', function() {
            habitlab_intervention_main_function();
          });
        } else {
          
        }
      }
		} else {
		  habitlab_intervention_main_function();
		}

	})();
  

/***/ }),

/***/ "./src/libs_common/function_signatures.ls":
/*!************************************************!*\
  !*** ./src/libs_common/function_signatures.ls ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var lib_name_to_func_names_and_signatures, func_name_to_signature, lib_name, funcs, func_name, func_signature, list_functions_in_lib, list_libs, get_function_signature, out$ = typeof exports != 'undefined' && exports || this;
lib_name_to_func_names_and_signatures = {
  log_utils: {
    addtolog: ['name', 'data'],
    getlog: 'name',
    clearlog: 'name',
    add_log_habitlab_disabled: ['data'],
    add_log_interventions: ['data'],
    log_impression_internal: ['name', 'data'],
    log_intervention_suggested_internal: ['name', 'data'],
    log_intervention_suggestion_action_internal: ['name', 'data'],
    log_disable_internal: ['name', 'data'],
    log_action_internal: ['name', 'data'],
    log_upvote_internal: ['name', 'data'],
    log_downvote_internal: ['name', 'data'],
    log_feedback_internal: ['name', 'data']
  },
  db_utils: {
    addtolist: ['name', 'data'],
    getlist: 'name',
    clearlist: 'name',
    getvar: 'key',
    setvar: ['key', 'val'],
    addtovar: ['key', 'val'],
    getkey_dictdict: ['name', 'key', 'key2'],
    getdict_for_key_dictdict: ['name', 'key'],
    getdict_for_key2_dictdict: ['name', 'key2']
  },
  intervention_first_impression_utils_backend: {
    show_firstimpression_message_for_intervention: 'intervention_name'
  },
  intervention_utils: {
    set_intervention_enabled: 'name',
    set_intervention_disabled: 'name',
    set_intervention_disabled_permanently: 'name',
    get_intervention_info: 'intervention_name',
    intervention_first_seen_power_enabledisable: ['intervention', 'is_enabled', 'url'],
    get_enabled_interventions: [],
    record_intensity_level_for_intervention: ['intervention_name', 'generic_name', 'intensity']
  },
  tab_utils: {
    close_selected_tab: [],
    open_url_in_new_tab: 'url',
    get_selected_tab_id: [],
    close_tab_with_id: 'tab_id'
  },
  history_utils: {
    get_pages_visited_today: [],
    get_pages_visited_all_time: [],
    get_work_pages_visited_today: [],
    get_productivity_classifications: []
  },
  goal_utils: {
    get_goals: [],
    get_goal_target: ['goal_name'],
    set_goal_target: ['goal_name', 'target_value'],
    get_all_goal_targets: [],
    list_goal_info_for_enabled_goals: [],
    get_random_positive_goal: [],
    get_random_uncompleted_positive_goal: [],
    get_positive_enabled_goals: [],
    get_positive_enabled_uncompleted_goals: [],
    get_goal_info: ['goal_name'],
    get_goal_statement: ['goal_info'],
    accept_domain_as_goal_and_record: ['domain'],
    reject_domain_as_goal_and_record: ['domain']
  },
  goal_progress: {
    get_progress_on_enabled_goals_this_week: [],
    get_whether_goal_achieved_today: []
  },
  gamification_utils: {
    get_num_times_intervention_used: ['intervention_name'],
    get_intervention_level: ['intervention_name'],
    get_time_saved_total: [],
    get_time_saved_total_with_intervention: ['intervention_name'],
    baseline_time_per_session_for_domain: ['domain'],
    record_seconds_saved_and_get_rewards: ['seconds', 'intervention_name', 'domain']
  },
  disable_habitlab_utils: {
    disable_habitlab: [],
    enable_habitlab: [],
    is_habitlab_enabled: []
  },
  session_utils: {
    is_on_same_domain_and_same_tab: 'tab_id',
    is_on_same_domain: 'tab_id'
  },
  screenshot_utils: {
    get_screenshot_as_base64: [],
    get_data_for_feedback: []
  },
  fetch_page_utils: {
    fetch_page_text: 'url'
  },
  ajax_utils: {
    post_json: ['url', 'data']
  },
  cacheget_utils: {
    localget: 'url',
    localget_json: 'url',
    localget_base64: 'url',
    remoteget: 'url',
    remoteget_json: 'url',
    remoteget_base64: 'url',
    systemjsget: 'url'
  },
  favicon_utils: {
    get_favicon_data_for_domain: 'domain'
  },
  debug_console_utils: {
    open_debug_page_for_tab_id: 'tab_id'
  },
  notification_utils_backend: {
    make_notification_backend: ['info', 'tab_id'],
    close_notification_backend: 'notification_id'
  },
  persistent_storage_utils: {
    set_var: ['key', 'val'],
    get_var: 'key'
  },
  localization_utils_backend: {
    record_unlocalized_string: 'text',
    record_localized_string: 'text'
  },
  duolingo_utils: {
    get_duolingo_username: [],
    get_duolingo_info: [],
    get_duolingo_info_for_user: 'username',
    get_duolingo_is_logged_in: [],
    wait_until_user_is_logged_in: 'timeout'
  },
  streak_utils: {
    get_streak: 'goal_info'
  },
  intervention_vars_backend: {
    getvar_intervention_synced_backend: ['intervention_name', 'key'],
    setvar_intervention_synced_backend: ['intervention_name', 'key', 'val'],
    getvar_intervention_unsynced_backend: ['intervention_name', 'key'],
    setvar_intervention_unsynced_backend: ['intervention_name', 'key', 'val']
  },
  goal_vars_backend: {
    getvar_goal_synced_backend: ['goal_name', 'key'],
    setvar_goal_synced_backend: ['goal_name', 'key', 'val'],
    getvar_goal_unsynced_backend: ['goal_name', 'key'],
    setvar_goal_unsynced_backend: ['goal_name', 'key', 'val']
  },
  intervention_feedback_utils: {
    upvote_intervention: 'intervention_name',
    downvote_intervention: 'intervention_name',
    add_feedback_for_intervention: ['intervention_name', 'feedback_data'],
    get_num_upvotes_for_intervention: 'intervention_name',
    get_num_downvotes_for_intervention: 'intervention_name',
    get_feedback_for_intervention: 'intervention_name'
  },
  intervention_session_vars_backend: {
    get_intervention_session_var_backend: ['intervention_name', 'session_id', 'key'],
    set_intervention_session_var_backend: ['intervention_name', 'session_id', 'key', 'val']
  }
};
func_name_to_signature = {};
for (lib_name in lib_name_to_func_names_and_signatures) {
  funcs = lib_name_to_func_names_and_signatures[lib_name];
  for (func_name in funcs) {
    func_signature = funcs[func_name];
    func_name_to_signature[func_name] = func_signature;
  }
}
out$.list_functions_in_lib = list_functions_in_lib = function(lib_name){
  return Object.keys(lib_name_to_func_names_and_signatures[lib_name]);
};
out$.list_libs = list_libs = function(){
  return Object.keys(lib_name_to_func_names_and_signatures);
};
out$.get_function_signature = get_function_signature = function(func_name){
  return func_name_to_signature[func_name];
};
//# sourceMappingURL=function_signatures.ls.map


/***/ }),

/***/ "./src/libs_common/gexport.ls":
/*!************************************!*\
  !*** ./src/libs_common/gexport.ls ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var gexport, gexport_module, out$ = typeof exports != 'undefined' && exports || this;
out$.gexport = gexport = function(vardict){
  var k, v;
  if (window.global_exports == null) {
    console.log('calling gexport but global_exports is not defined');
    return;
  }
  for (k in vardict) {
    v = vardict[k];
    window.global_exports[k] = v;
  }
};
out$.gexport_module = gexport_module = function(module_name, eval_func){
  if (window.global_exports == null) {
    return;
  }
  window.global_exports['eval_' + module_name] = eval_func;
  if (window.global_exports.gexport_eval_funcs == null) {
    window.global_exports.gexport_eval_funcs = {};
  }
  return window.global_exports.gexport_eval_funcs[module_name] = eval_func;
};
//# sourceMappingURL=gexport.ls.map


/***/ }),

/***/ "./src/libs_common/intervention_info.ls":
/*!**********************************************!*\
  !*** ./src/libs_common/intervention_info.ls ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var intervention_info_cached, set_intervention, get_goal_name, get_intervention, goal_info_cached, set_goal_info, get_goal_info, tab_id_cached, set_tab_id, get_tab_id, is_new_session_cached, set_is_new_session, get_is_new_session, is_preview_mode_cached, set_is_preview_mode, get_is_preview_mode, is_suggestion_mode_cached, set_is_suggestion_mode, get_is_suggestion_mode, is_suggestion_mode_optout_cached, set_is_suggestion_mode_optout, get_is_suggestion_mode_optout, is_previously_seen_cached, set_is_previously_seen, get_is_previously_seen, session_id_cached, set_session_id, get_session_id, out$ = typeof exports != 'undefined' && exports || this;
intervention_info_cached = null;
out$.set_intervention = set_intervention = function(new_intervention_info){
  return intervention_info_cached = new_intervention_info;
};
/**
 * Gets the name of the current goal
 * @return {string} The current goal name
 */
out$.get_goal_name = get_goal_name = function(){
  return get_intervention().goals[0];
};
out$.get_intervention = get_intervention = function(){
  if (intervention_info_cached != null) {
    return intervention_info_cached;
  }
  if (typeof intervention != 'undefined' && intervention !== null) {
    return intervention;
  }
};
goal_info_cached = null;
out$.set_goal_info = set_goal_info = function(new_goal_info){
  return goal_info_cached = new_goal_info;
};
out$.get_goal_info = get_goal_info = function(){
  if (goal_info_cached != null) {
    return goal_info_cached;
  }
  if (typeof goal_info != 'undefined' && goal_info !== null) {
    return goal_info;
  }
};
tab_id_cached = null;
out$.set_tab_id = set_tab_id = function(new_tab_id){
  return tab_id_cached = new_tab_id;
};
out$.get_tab_id = get_tab_id = function(){
  if (tab_id_cached != null) {
    return tab_id_cached;
  }
  if (typeof tab_id != 'undefined' && tab_id !== null) {
    return tab_id;
  }
};
is_new_session_cached = null;
out$.set_is_new_session = set_is_new_session = function(new_is_new_session){
  return is_new_session_cached = new_is_new_session;
};
out$.get_is_new_session = get_is_new_session = function(){
  if (is_new_session_cached != null) {
    return is_new_session_cached;
  }
  if (typeof is_new_session != 'undefined' && is_new_session !== null) {
    return is_new_session;
  }
  return false;
};
is_preview_mode_cached = null;
out$.set_is_preview_mode = set_is_preview_mode = function(new_is_preview_mode){
  return is_preview_mode_cached = new_is_preview_mode;
};
out$.get_is_preview_mode = get_is_preview_mode = function(){
  if (is_preview_mode_cached != null) {
    return is_preview_mode_cached;
  }
  if (typeof is_preview_mode != 'undefined' && is_preview_mode !== null) {
    return is_preview_mode;
  }
  return false;
};
is_suggestion_mode_cached = null;
out$.set_is_suggestion_mode = set_is_suggestion_mode = function(new_is_suggestion_mode){
  return is_suggestion_mode_cached = new_is_suggestion_mode;
};
out$.get_is_suggestion_mode = get_is_suggestion_mode = function(){
  if (is_suggestion_mode_cached != null) {
    return is_suggestion_mode_cached;
  }
  if (typeof is_suggestion_mode != 'undefined' && is_suggestion_mode !== null) {
    return is_suggestion_mode;
  }
  return false;
};
is_suggestion_mode_optout_cached = null;
out$.set_is_suggestion_mode_optout = set_is_suggestion_mode_optout = function(new_is_suggestion_mode_optout){
  return is_suggestion_mode_optout_cached = new_is_suggestion_mode_optout;
};
out$.get_is_suggestion_mode_optout = get_is_suggestion_mode_optout = function(){
  if (is_suggestion_mode_optout_cached != null) {
    return is_suggestion_mode_optout_cached;
  }
  if (typeof is_suggestion_mode_optout != 'undefined' && is_suggestion_mode_optout !== null) {
    return is_suggestion_mode_optout;
  }
  return false;
};
is_previously_seen_cached = null;
out$.set_is_previously_seen = set_is_previously_seen = function(new_is_previously_seen){
  return is_previously_seen_cached = new_is_previously_seen;
};
out$.get_is_previously_seen = get_is_previously_seen = function(){
  if (is_previously_seen_cached != null) {
    return is_previously_seen_cached;
  }
  if (typeof is_previously_seen != 'undefined' && is_previously_seen !== null) {
    return is_previously_seen;
  }
  return false;
};
session_id_cached = null;
out$.set_session_id = set_session_id = function(new_session_id){
  return session_id_cached = new_session_id;
};
out$.get_session_id = get_session_id = function(){
  if (session_id_cached != null) {
    return session_id_cached;
  }
  if (typeof session_id != 'undefined' && session_id !== null) {
    return session_id;
  }
};
//# sourceMappingURL=intervention_info.ls.map


/***/ }),

/***/ "./src/libs_frontend/dom_utils.ls":
/*!****************************************!*\
  !*** ./src/libs_frontend/dom_utils.ls ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var import_dom_modules, recreateIronIconset, recreateDomModule, recreateStyle, recreateCustomStyle, recreateFileLocalStyle, recreateGlobalStyle, parseHTML, __get__, __set__, out$ = typeof exports != 'undefined' && exports || this;
if (window.file_local_styles == null) {
  window.file_local_styles = [];
}
if (window.all_imported_custom_styles == null) {
  window.all_imported_custom_styles = [];
}
if (window.all_imported_html_files == null) {
  window.all_imported_html_files = {};
}
out$.import_dom_modules = import_dom_modules = function(element_dom, options){
  var filename, element_dom_parsed_list, i$, len$, element_dom_parsed, nodename, ref$, ref1$;
  filename = null;
  if (typeof options === 'string') {
    filename = options;
    options = {
      filename: options
    };
  }
  if (filename != null && window.all_imported_html_files[filename]) {
    return;
  }
  if (options == null) {
    options = {};
  }
  if (filename != null) {
    window.all_imported_html_files[filename] = true;
  }
  window.file_local_styles = [];
  element_dom_parsed_list = parseHTML(element_dom);
  for (i$ = 0, len$ = element_dom_parsed_list.length; i$ < len$; ++i$) {
    element_dom_parsed = element_dom_parsed_list[i$];
    if (element_dom_parsed == null) {
      continue;
    }
    nodename = element_dom_parsed.nodeName.toLowerCase();
    if (nodename === 'habitlab-dom-module') {
      recreateDomModule(element_dom_parsed, options);
    } else if (nodename === 'habitlab-custom-style' && ((ref$ = element_dom_parsed.firstChild) != null ? (ref1$ = ref$.nodeName) != null ? typeof ref1$.toLowerCase == 'function' ? ref1$.toLowerCase() : void 8 : void 8 : void 8) === 'style') {
      'recreate on habitlab-custom-style being called';
      recreateCustomStyle(element_dom_parsed.firstChild);
    } else if (nodename === 'style') {
      recreateStyle(element_dom_parsed);
    } else if (nodename === 'habitlab-iron-iconset-svg') {
      recreateIronIconset(element_dom_parsed);
    }
  }
};
recreateIronIconset = function(element_dom_parsed){
  var elem, i$, ref$, len$, attribute, name, value;
  elem = document.createElement(element_dom_parsed.nodeName.toLowerCase());
  elem.innerHTML = element_dom_parsed.innerHTML;
  for (i$ = 0, len$ = (ref$ = element_dom_parsed.attributes).length; i$ < len$; ++i$) {
    attribute = ref$[i$];
    name = attribute.name;
    value = attribute.value;
    elem.setAttribute(name, value);
  }
  if (typeof elem.createdCallback == 'function') {
    elem.createdCallback();
  }
};
recreateDomModule = function(element_dom_parsed, options){
  var DOM_MODULE, template_child, i$, ref$, len$, child, custom_style_text_list, style_parsed, style_parsed_new;
  DOM_MODULE = document.createElement('habitlab-dom-module');
  template_child = null;
  for (i$ = 0, len$ = (ref$ = element_dom_parsed.children).length; i$ < len$; ++i$) {
    child = ref$[i$];
    if (child.nodeName.toLowerCase() === 'template') {
      template_child = child;
    }
  }
  custom_style_text_list = [];
  for (i$ = 0, len$ = (ref$ = window.all_imported_custom_styles.concat(window.file_local_styles)).length; i$ < len$; ++i$) {
    style_parsed = ref$[i$];
    custom_style_text_list.push(style_parsed.innerHTML);
  }
  if (custom_style_text_list.length > 0) {
    style_parsed_new = document.createElement('style');
    style_parsed_new.innerHTML = custom_style_text_list.join('\n\n');
    if (template_child != null) {
      template_child.content.insertBefore(style_parsed_new, template_child.content.firstChild);
    } else {
      element_dom_parsed.appendChild(style_parsed_new);
    }
  }
  DOM_MODULE.innerHTML = element_dom_parsed.innerHTML;
  if (options.tagname != null) {
    DOM_MODULE.id = options.tagname;
  } else {
    DOM_MODULE.id = element_dom_parsed.id;
  }
  if (typeof DOM_MODULE.createdCallback == 'function') {
    DOM_MODULE.createdCallback();
  }
};
recreateStyle = function(style_parsed){
  if (style_parsed.getAttribute('is') === 'habitlab-custom-style') {
    recreateCustomStyle(style_parsed);
  } else {
    recreateFileLocalStyle(style_parsed);
  }
};
recreateCustomStyle = function(style_parsed){
  window.all_imported_custom_styles.push(style_parsed);
  return;
  /*
  STYLES = document.createElement('style', 'habitlab-custom-style')
  console.log 'recreateCustomStyle called'
  #STYLES.textContent = style_parsed.textContent
  if STYLES.styleSheet
    STYLES.styleSheet.cssText = style_parsed.textContent
  else
    STYLES.appendChild(document.createTextNode(style_parsed.textContent))
  if IS_CONTENT_SCRIPT
    console.log 'recreateCustomStyle in content script'
    load_css_code style_parsed.textContent, ->
      console.log 'load_css_code done'
  else
    console.log 'recreateCustomStyle outside content script'
    document.documentElement.appendChild(STYLES)
  #document.head.appendChild(STYLES)
  #document.getElementsByTagName("head")[0].appendChild(STYLES)
  */
};
recreateFileLocalStyle = function(style_parsed){
  window.file_local_styles.push(style_parsed);
  return;
};
recreateGlobalStyle = function(style_parsed){
  return;
  /*
  STYLES = document.createElement('style')
  console.log 'recreateGlobalStyle called'
  #STYLES.textContent = style_parsed.textContent
  if STYLES.styleSheet
    STYLES.styleSheet.cssText = style_parsed.textContent
  else
    STYLES.appendChild(document.createTextNode(style_parsed.textContent))
  document.documentElement.appendChild(STYLES)
  #document.head.appendChild(STYLES)
  #document.getElementsByTagName("head")[0].appendChild(STYLES)
  */
};
parseHTML = function(str){
  var tmp;
  tmp = document.implementation.createHTMLDocument();
  tmp.body.innerHTML = str;
  return tmp.body.children;
};
out$.__get__ = __get__ = function(name){
  return eval(name);
};
out$.__set__ = __set__ = function(name, val){
  return eval(name + ' = val');
};
//# sourceMappingURL=dom_utils.ls.map


/***/ }),

/***/ "./src/libs_frontend/frontend_libs.ls":
/*!********************************************!*\
  !*** ./src/libs_frontend/frontend_libs.ls ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ref$, gexport, gexport_module, getUrlParameters, sleep, once_available, once_available_fast, once_available_multiselect, once_body_available, on_url_change, on_url_change_not_from_history, to_camelcase_string, to_camelcase_dict, create_shadow_div, wrap_in_shadow, create_shadow_div_on_body, append_to_body_shadow, out$ = typeof exports != 'undefined' && exports || this;
ref$ = __webpack_require__(/*! libs_common/gexport */ "./src/libs_common/gexport.ls"), gexport = ref$.gexport, gexport_module = ref$.gexport_module;
/**
 * Gets an object containing the URL parameters. Ie, for a URL http://www.example.com/path?foo=bar&baz=qux will output {'foo': 'bar', 'baz': 'qux'}
 * @return {Object} An object with parameter names as keys, and parameter values as values
 */
out$.getUrlParameters = getUrlParameters = function(){
  var url, hash, map, parts;
  url = window.location.href;
  hash = url.lastIndexOf('#');
  if (hash !== -1) {
    url = url.slice(0, hash);
  }
  map = {};
  parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value){
    return map[key] = decodeURIComponent(value).split('+').join(' ');
  });
  return map;
};
out$.sleep = sleep = async function(time){
  return new Promise(function(it){
    return setTimeout(it, time);
  });
};
/**
* Return an element once it's available (check every 0.1 seconds)
* @param {String} selector of the element
* @param {function} callback
* @return {HTMLElement}
*/
out$.once_available = once_available = async function(selector, callback){
  var current_result;
  current_result = document.querySelector(selector);
  while (current_result == null) {
    current_result = document.querySelector(selector);
    (await sleep(100));
  }
  if (callback != null) {
    callback(current_result);
  }
  return current_result;
};
/**
* Return an element once it's available (check every 0.03 seconds)
* @param {String} selector of the element
* @param {function} callback
* @return {HTMLElement}
*/
out$.once_available_fast = once_available_fast = async function(selector, callback){
  var current_result;
  current_result = document.querySelector(selector);
  while (current_result == null) {
    current_result = document.querySelector(selector);
    (await sleep(30));
  }
  if (callback != null) {
    callback(current_result);
  }
  return current_result;
};
/**
* Return multiple elements once they are available (check every 0.1 seconds)
* @param {String} selector of the elements
* @param {function} callback
* @return {NodeList} the list of elements selected
*/
out$.once_available_multiselect = once_available_multiselect = async function(selector, callback){
  var current_result;
  current_result = document.querySelectorAll(selector);
  while (!(current_result.length > 0)) {
    current_result = document.querySelectorAll(selector);
    (await sleep(100));
  }
  if (callback != null) {
    callback(current_result);
  }
  return current_result;
};
/**
* Return once body is available (check every 0.03 seconds)
* @param {function} callback
*/
out$.once_body_available = once_body_available = async function(callback){
  while (document.body == null) {
    (await sleep(30));
  }
  if (callback != null) {
    callback();
  }
};
/**
* Execute a particular function when curren url changes
* @param {function} func - function to get executed
*/
out$.on_url_change = on_url_change = function(func){
  var prev_url;
  prev_url = window.location.href;
  return chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse){
    var type, data;
    type = msg.type, data = msg.data;
    if (type === 'navigation_occurred') {
      if (data.url !== prev_url) {
        prev_url = data.url;
        return func();
      }
    }
  });
};
/**
* Execute a particular function when curren url changes
* @param {function} func - function to get executed
*/
out$.on_url_change_not_from_history = on_url_change_not_from_history = function(func){
  var prev_url;
  prev_url = window.location.href;
  return chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse){
    var type, data;
    type = msg.type, data = msg.data;
    if (type === 'navigation_occurred') {
      if (data.is_from_history) {
        return;
      }
      if (data.url !== prev_url) {
        console.log('data.url is: ' + data.url);
        console.log('prev_url in loc 2 is: ' + prev_url);
        prev_url = data.url;
        return func();
      }
    }
  });
};
to_camelcase_string = function(myString){
  return myString.replace(/-([a-z])/g, function(g){
    return g[1].toUpperCase();
  });
};
to_camelcase_dict = function(options){
  var output, k, v;
  output = {};
  for (k in options) {
    v = options[k];
    output[to_camelcase_string(k)] = v;
  }
  return output;
};
/**
* Creates a div in the shadow dom to protect the div styling from outside CSS
* @param options - css styling which should be applied to shadow div
* @return the created shadow div
*/
out$.create_shadow_div = create_shadow_div = function(options){
  var shadow_div, default_options, k, v, ref$, shadow_host, shadow_root;
  if (options == null) {
    options = {};
  }
  if (options.shadow_div != null) {
    shadow_div = options.shadow_div;
    delete options.shadow_div;
  } else {
    shadow_div = document.createElement('div');
  }
  options = to_camelcase_dict(options);
  default_options = {
    fontFamily: 'Verdana, Geneva, Tahoma, "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
    position: 'static',
    zIndex: 2147483646,
    fontSize: '14px',
    lineHeight: 1,
    padding: '0px',
    margin: '0px',
    opacity: 1,
    boxSizing: 'content-box'
  };
  for (k in default_options) {
    v = default_options[k];
    options[k] = (ref$ = options[k]) != null ? ref$ : v;
  }
  shadow_host = document.createElement('div');
  shadow_root = shadow_host.createShadowRoot();
  for (k in options) {
    v = options[k];
    shadow_div.style[k] = v;
  }
  shadow_root.appendChild(shadow_div);
  shadow_div.shadow_root = shadow_root;
  shadow_div.shadow_host = shadow_host;
  shadow_host.shadow_root = shadow_root;
  shadow_host.shadow_div = shadow_div;
  return shadow_div;
};
/**
 * Wraps the provided element in a div under the Shadow DOM
 * @param {HTMLElement} elem - The element to add to the Shadow DOM
 * @param {Object} [options] - Options for the creation of the Shadow DOM wrapper element
 * @return {HTMLElement} The created div in the shadow dom
 */
out$.wrap_in_shadow = wrap_in_shadow = function(elem, options){
  if (elem.length != null && elem.length > 0) {
    elem = elem[0];
  }
  options = import$({}, options);
  options.shadow_div = elem;
  create_shadow_div(options);
  return elem.shadow_host;
};
/**
* Creates a div in the shadow dom to protect the div styling from outside CSS
* @param {Object} [options] - Options(CSS styling) for the creation of the Shadow DOM wrapper element
* @return the created shadow div
*/
out$.create_shadow_div_on_body = create_shadow_div_on_body = function(options){
  var ref$, shadow_div;
  if (options == null) {
    options = {};
  }
  options.position = (ref$ = options.position) != null ? ref$ : 'fixed';
  shadow_div = create_shadow_div(options);
  document.body.appendChild(shadow_div.shadow_host);
  return shadow_div;
};
/**
 * Wraps the provided element in a div under the Shadow DOM and appends it to the body of the document
 * @param {HTMLElement} elem - The element to add to the Shadow DOM
 * @param {Object} [options] - Options for the creation of the Shadow DOM wrapper element
 * @return {HTMLElement} The created div in the shadow dom
 */
out$.append_to_body_shadow = append_to_body_shadow = function(elem, options){
  var ref$, shadow_div;
  if (options == null) {
    options = {};
  }
  options.position = (ref$ = options.position) != null ? ref$ : 'fixed';
  shadow_div = create_shadow_div_on_body(options);
  if (elem.length != null && elem.length > 0) {
    elem = elem[0];
  }
  shadow_div.appendChild(elem);
  return shadow_div;
};
gexport_module('frontend_libs', function(it){
  return eval(it);
});
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
//# sourceMappingURL=frontend_libs.ls.map


/***/ }),

/***/ "./src/libs_frontend/import_lib.ls":
/*!*****************************************!*\
  !*** ./src/libs_frontend/import_lib.ls ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ref$, list_functions_in_lib, get_function_signature, import_lib, send_message_to_background, import_func, out$ = typeof exports != 'undefined' && exports || this;
ref$ = __webpack_require__(/*! libs_common/function_signatures */ "./src/libs_common/function_signatures.ls"), list_functions_in_lib = ref$.list_functions_in_lib, get_function_signature = ref$.get_function_signature;
out$.import_lib = import_lib = function(lib_name){
  var output, i$, ref$, len$, func_name;
  output = {};
  for (i$ = 0, len$ = (ref$ = list_functions_in_lib(lib_name)).length; i$ < len$; ++i$) {
    func_name = ref$[i$];
    output[func_name] = import_func(func_name);
  }
  return output;
};
send_message_to_background = function(type, data){
  return new Promise(function(callback){
    chrome.runtime.sendMessage({
      type: type,
      data: data
    }, callback);
    return true;
  });
};
out$.import_func = import_func = function(func_name){
  var signature;
  signature = get_function_signature(func_name);
  if (signature == null) {
    throw new Error("need to add function signature for function " + func_name + " to libs_common/function_signatures.ls");
  }
  if (!(typeof signature === 'string' || Array.isArray(signature))) {
    throw new Error("invalid signature " + JSON.stringify(signature) + " for function " + func_name + " in libs_common/function_signatures.ls");
  }
  if (Array.isArray(signature)) {
    return async function(){
      var args, res$, i$, to$, arg_dict, ref$, len$, idx, arg_name;
      res$ = [];
      for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
        res$.push(arguments[i$]);
      }
      args = res$;
      arg_dict = {};
      for (i$ = 0, len$ = (ref$ = signature).length; i$ < len$; ++i$) {
        idx = i$;
        arg_name = ref$[i$];
        arg_dict[arg_name] = args[idx];
      }
      return (await send_message_to_background(func_name, arg_dict));
    };
  }
  if (typeof signature === 'string') {
    return async function(arg){
      return (await send_message_to_background(func_name, arg));
    };
  }
  throw new Error("import_func failed for function " + func_name + " with signature " + JSON.stringify(signature));
};
//# sourceMappingURL=import_lib.ls.map


/***/ }),

/***/ "./src/libs_frontend/intervention_first_impression_utils.js":
/*!******************************************************************!*\
  !*** ./src/libs_frontend/intervention_first_impression_utils.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

async function show_first_impression_notice_if_needed () {
  const {
    get_intervention,
    get_is_preview_mode,
    get_is_suggestion_mode,
    get_is_previously_seen,
    get_is_new_session,
  } = __webpack_require__(/*! libs_common/intervention_info */ "./src/libs_common/intervention_info.ls")
  const intervention = get_intervention()
  const is_suggestion_mode = get_is_suggestion_mode()
  if (is_suggestion_mode) {
    return
  }
  const is_preview_mode = get_is_preview_mode()
  if (is_preview_mode) {
    return
  }
  const is_previously_seen = get_is_previously_seen()
  if (is_previously_seen) {
    return
  }
  const is_new_session = get_is_new_session()
  if (!is_new_session) {
    return
  }
  let intervention_name = intervention.name
  if (intervention.generic_intervention != null) {
    intervention_name = intervention.generic_intervention
  }
  const {show_firstimpression_message_for_intervention} = __webpack_require__(/*! libs_common/intervention_first_impression_utils_backend */ "./src/generated_libs/libs_frontend/intervention_first_impression_utils_backend.js")
  let notice_to_show = await show_firstimpression_message_for_intervention(intervention_name)

  if (intervention_name == 'generic/toast_notifications') {
    setTimeout(function() {
      if (notice_to_show == 'power') {
        show_first_impression_notice_power()
      } else if (notice_to_show == 'info') {
        show_first_impression_notice_info()
      }
    }, 5000)
  } else {
    setTimeout(function() {
      if (notice_to_show == 'power') {
        show_first_impression_notice_power()
      } else if (notice_to_show == 'info') {
        show_first_impression_notice_info()
      }
    }, 500)
  }
}

async function show_first_impression_notice_power() {
  __webpack_require__(/*! components/habitlab-habitlab-intervention-first-seen-power.deps */ "./src/components/habitlab-habitlab-intervention-first-seen-power.deps.js")
  __webpack_require__(/*! libs_frontend/frontend_libs */ "./src/libs_frontend/frontend_libs.ls").append_to_body_shadow(document.createElement('habitlab-habitlab-intervention-first-seen-power'), {zIndex: 2147483647})
}

async function show_first_impression_notice_info() {
  __webpack_require__(/*! components/habitlab-habitlab-intervention-first-seen-info.deps */ "./src/components/habitlab-habitlab-intervention-first-seen-info.deps.js")
  __webpack_require__(/*! libs_frontend/frontend_libs */ "./src/libs_frontend/frontend_libs.ls").append_to_body_shadow(document.createElement('habitlab-habitlab-intervention-first-seen-info'), {zIndex: 2147483647})
}

module.exports = {
  show_first_impression_notice_if_needed,
}

/***/ }),

/***/ "./src/libs_frontend/intervention_log_utils.ls":
/*!*****************************************************!*\
  !*** ./src/libs_frontend/intervention_log_utils.ls ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ref$, get_intervention, get_tab_id, get_session_id, get_is_new_session, get_is_preview_mode, get_is_suggestion_mode, get_is_previously_seen, log_utils, make_basic_data, log_impression, log_intervention_suggested, log_intervention_suggestion_action, log_disable, log_action, log_upvote, log_downvote, log_feedback, out$ = typeof exports != 'undefined' && exports || this;
ref$ = __webpack_require__(/*! libs_common/intervention_info */ "./src/libs_common/intervention_info.ls"), get_intervention = ref$.get_intervention, get_tab_id = ref$.get_tab_id, get_session_id = ref$.get_session_id, get_is_new_session = ref$.get_is_new_session, get_is_preview_mode = ref$.get_is_preview_mode, get_is_suggestion_mode = ref$.get_is_suggestion_mode, get_is_previously_seen = ref$.get_is_previously_seen;
log_utils = __webpack_require__(/*! libs_frontend/log_utils */ "./src/generated_libs/libs_frontend/log_utils.js");
make_basic_data = function(data){
  if (data == null) {
    data = {};
  }
  data.url = window.location.href;
  data.tab_id = get_tab_id();
  data.session_id = get_session_id();
  data.is_new_session = get_is_new_session();
  data.is_preview_mode = get_is_preview_mode();
  data.is_suggestion_mode = get_is_suggestion_mode();
  data.is_previously_seen = get_is_previously_seen();
  return data;
};
out$.log_impression = log_impression = async function(data){
  data = make_basic_data(data);
  return (await log_utils.log_impression_internal(get_intervention().name, data));
};
out$.log_intervention_suggested = log_intervention_suggested = async function(data){
  data = make_basic_data(data);
  return (await log_utils.log_intervention_suggested_internal(get_intervention().name, data));
};
out$.log_intervention_suggestion_action = log_intervention_suggestion_action = async function(data){
  data = make_basic_data(data);
  return (await log_utils.log_intervention_suggestion_action_internal(get_intervention().name, data));
};
out$.log_disable = log_disable = async function(data){
  data = make_basic_data(data);
  return (await log_utils.log_disable_internal(get_intervention().name, data));
};
out$.log_action = log_action = async function(data){
  data = make_basic_data(data);
  return (await log_utils.log_action_internal(get_intervention().name, data));
};
out$.log_upvote = log_upvote = async function(data){
  data = make_basic_data(data);
  return (await log_utils.log_upvote_internal(get_intervention().name, data));
};
out$.log_downvote = log_downvote = async function(data){
  data = make_basic_data(data);
  return (await log_utils.log_downvote_internal(get_intervention().name, data));
};
out$.log_feedback = log_feedback = async function(data){
  data = make_basic_data(data);
  return (await log_utils.log_feedback_internal(get_intervention().name, data));
};
//# sourceMappingURL=intervention_log_utils.ls.map


/***/ }),

/***/ 35:
/*!*************************************************************************!*\
  !*** multi ./src/interventions/youtube/prompt_before_watch/frontend.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/geza/Dropbox/habitlab-xps/src/interventions/youtube/prompt_before_watch/frontend.js */"./src/interventions/youtube/prompt_before_watch/frontend.js");


/***/ })

/******/ });