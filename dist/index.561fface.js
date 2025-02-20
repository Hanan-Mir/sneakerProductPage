// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"cYdHD":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "770b8518561fface";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"a2PJv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _addedToCartView = require("./Views/addedToCartView");
var _addedToCartViewDefault = parcelHelpers.interopDefault(_addedToCartView);
var _avatarClickView = require("./Views/avatarClickView");
var _avatarClickViewDefault = parcelHelpers.interopDefault(_avatarClickView);
var _addQuantity = require("./Views/addQuantity");
var _addQuantityDefault = parcelHelpers.interopDefault(_addQuantity);
var _subtractQuantity = require("./Views/subtractQuantity");
var _subtractQuantityDefault = parcelHelpers.interopDefault(_subtractQuantity);
var _cartIconUpdate = require("./Views/cartIconUpdate");
var _cartIconUpdateDefault = parcelHelpers.interopDefault(_cartIconUpdate);
var _deleteItemCart = require("./Views/deleteItemCart");
var _deleteItemCartDefault = parcelHelpers.interopDefault(_deleteItemCart);
var _displayImageOnClick = require("./Views/displayImageOnClick");
var _displayImageOnClickDefault = parcelHelpers.interopDefault(_displayImageOnClick);
var _fullImageView = require("./Views/fullImageView");
var _fullImageViewDefault = parcelHelpers.interopDefault(_fullImageView);
var _slideImagesView = require("./Views/slideImagesView");
var _slideImagesViewDefault = parcelHelpers.interopDefault(_slideImagesView);
var _model = require("./model");
var _mobileView = require("./Views/mobileView");
var _mobileViewDefault = parcelHelpers.interopDefault(_mobileView);
var _view = require("./Views/view");
var _viewDefault = parcelHelpers.interopDefault(_view);
const addItemToCart = function() {
    if ((0, _addQuantityDefault.default)._parentEl.textContent == 0) {
        alert('Add the quantity first');
        return;
    } else {
        (0, _addedToCartViewDefault.default)._render((0, _addedToCartViewDefault.default)._generateMarkup);
        itemAddedToCart = true;
    }
};
const viewCartItems = function() {
    (0, _avatarClickViewDefault.default)._parentEl.classList.toggle('hidden');
};
const increaseItems = function() {
    (0, _addQuantityDefault.default)._parentEl.textContent++;
};
const decreaseItems = function() {
    if ((0, _addQuantityDefault.default)._parentEl.textContent == 0) return;
    else (0, _addQuantityDefault.default)._parentEl.textContent--;
};
const updateValue = function() {
    if ((0, _addQuantityDefault.default)._parentEl.textContent == 0) return;
    else (0, _cartIconUpdateDefault.default)._parentEl.textContent = 1;
};
const deleteCartItem = function(e) {
    if (e.target.classList.contains('deleteImage')) {
        (0, _deleteItemCartDefault.default)._render((0, _deleteItemCartDefault.default)._generateMarkup);
        (0, _cartIconUpdateDefault.default)._parentEl.textContent = 0;
        return;
    }
};
const fullImage = function() {
    (0, _fullImageViewDefault.default)._parentEl.classList.add('blurBackground');
    (0, _fullImageViewDefault.default)._viewFullImgSection.classList.remove('hidden');
};
const closeImg = function() {
    (0, _fullImageViewDefault.default)._parentEl.classList.remove('blurBackground');
    (0, _fullImageViewDefault.default)._viewFullImgSection.classList.add('hidden');
};
let init = function() {
    (0, _addedToCartViewDefault.default).addHandlerRender(addItemToCart);
    (0, _avatarClickViewDefault.default)._itemsInCart(viewCartItems);
    (0, _addQuantityDefault.default).increaseItemQuantity(increaseItems);
    (0, _subtractQuantityDefault.default).decreaseItemQuantity(decreaseItems);
    (0, _cartIconUpdateDefault.default).updateCartValue(updateValue);
    (0, _deleteItemCartDefault.default).deleteItem(deleteCartItem);
    (0, _displayImageOnClickDefault.default).addHandlerImageView((0, _model.imageAddress));
    (0, _displayImageOnClickDefault.default).activeImage();
    (0, _fullImageViewDefault.default).fullImageView(fullImage, (0, _model.imageAddress));
    (0, _fullImageViewDefault.default).closeFullImgView(closeImg);
    (0, _slideImagesViewDefault.default).addHandlerMoveNextSlide((0, _model.imageAddress));
    (0, _slideImagesViewDefault.default).addHandlerMovePrevSlide((0, _model.imageAddress));
    (0, _slideImagesViewDefault.default).addHandlerOnThumbnailClick((0, _model.imageAddress));
    (0, _mobileViewDefault.default).onClickHumberg();
    (0, _mobileViewDefault.default).onClickClose();
    (0, _mobileViewDefault.default).onMovePrevSlide((0, _model.imageAddress));
    (0, _mobileViewDefault.default).onMoveNextSlide((0, _model.imageAddress));
};
init();

},{"./Views/addedToCartView":"ccVy2","./Views/avatarClickView":"gEPw4","./Views/addQuantity":"cEnm5","./Views/subtractQuantity":"9nnqP","./Views/cartIconUpdate":"dZTBy","./Views/deleteItemCart":"iZFDW","./Views/displayImageOnClick":"aomW9","./Views/fullImageView":"d6ilH","./Views/slideImagesView":"9eFt8","./model":"4mRaZ","./Views/view":"2JHy7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./Views/mobileView":"dGaGc"}],"ccVy2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _imageProduct1ThumbnailJpg = require("url:../images/image-product-1-thumbnail.jpg");
var _imageProduct1ThumbnailJpgDefault = parcelHelpers.interopDefault(_imageProduct1ThumbnailJpg);
var _iconDeleteSvg = require("url:../images/icon-delete.svg");
var _iconDeleteSvgDefault = parcelHelpers.interopDefault(_iconDeleteSvg);
class addedToCartView extends (0, _viewDefault.default) {
    view = new (0, _viewDefault.default)();
    _parentEl = document.querySelector('.bottom');
    _generateMarkup() {
        let quantitylabel = document.getElementById('number');
        return `<div class="pImage"> <img src="${0, _imageProduct1ThumbnailJpgDefault.default}" alt=""></div>
      <div class="pDescription">
        <p>Fall Limited Edition Sneakers</p>
        <div class="paymentamt">
        <label for="" class="price">$125</label>
        <label for="" class="multiply">x</label>
        <label for="" class="quantity">${quantitylabel.textContent}</label>
        <label for="" class="total">$${125 * quantitylabel.textContent}</label>
      </div>
      </div>
      <div class="deleteIcon">
        <img class='deleteImage' src='${0, _iconDeleteSvgDefault.default}' alt="">
      </div>
      <div class="checkoutbtn">
       <button>Checkout</button>
      </div>`;
    }
    addHandlerRender(handler) {
        this.view._addToCart.addEventListener('click', handler);
    }
}
exports.default = new addedToCartView();

},{"./view":"2JHy7","url:../images/image-product-1-thumbnail.jpg":"ilBwq","url:../images/icon-delete.svg":"c7vCn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2JHy7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    //element selections are below
    _minusBtn = document.querySelector('.minus');
    _plusBtn = document.querySelector('.plus');
    _addToCart = document.querySelector('.addtocart');
    _itemsInCartBtn = document.querySelector('.avatarLink');
    _data;
    //function for generating markup in UI
    _render(data) {
        this._data = data;
        let markup = this._generateMarkup();
        console.log(markup);
        this.clear();
        console.log(this._parentEl);
        this._parentEl.insertAdjacentHTML('afterbegin', markup);
    }
    clear() {
        this._parentEl.innerHTML = '';
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"ilBwq":[function(require,module,exports,__globalThis) {
module.exports = require("fb190324a5018c71").getBundleURL('adFLR') + "image-product-1-thumbnail.a20206f6.jpg" + "?" + Date.now();

},{"fb190324a5018c71":"lgJ39"}],"lgJ39":[function(require,module,exports,__globalThis) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"c7vCn":[function(require,module,exports,__globalThis) {
module.exports = require("d80a8518b972ba80").getBundleURL('adFLR') + "icon-delete.0ef01a8b.svg" + "?" + Date.now();

},{"d80a8518b972ba80":"lgJ39"}],"gEPw4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
class AvatarClickView extends (0, _viewDefault.default) {
    view = new (0, _viewDefault.default)();
    _parentEl = document.querySelector('.itemDescription');
    _itemsInCart(handler) {
        this.view._itemsInCartBtn.addEventListener('click', handler);
    }
}
exports.default = new AvatarClickView();

},{"./view":"2JHy7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cEnm5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
class AddItems extends (0, _viewDefault.default) {
    view = new (0, _viewDefault.default)();
    _parentEl = document.querySelector('.quantity');
    increaseItemQuantity(handler) {
        this.view._plusBtn.addEventListener('click', handler);
    }
}
exports.default = new AddItems();

},{"./view":"2JHy7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9nnqP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
class SubItems extends (0, _viewDefault.default) {
    view = new (0, _viewDefault.default)();
    _parentEl = document.querySelector('.quantity');
    decreaseItemQuantity(handler) {
        this.view._minusBtn.addEventListener('click', handler);
    }
}
exports.default = new SubItems();

},{"./view":"2JHy7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dZTBy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
class CartIconUpdate extends (0, _viewDefault.default) {
    view = new (0, _viewDefault.default)();
    _parentEl = document.querySelector('.cartQ');
    updateCartValue(handler) {
        this.view._addToCart.addEventListener('click', handler);
    }
}
exports.default = new CartIconUpdate();

},{"./view":"2JHy7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iZFDW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
class deleteItemCart extends (0, _viewDefault.default) {
    _parentEl = document.querySelector('.bottom');
    _generateMarkup() {
        return `
    <div class="bottom">
    <p>Your cart is empty.</p>`;
    }
    deleteItem(handler) {
        document.addEventListener('click', handler);
    }
}
exports.default = new deleteItemCart();

},{"./view":"2JHy7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aomW9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
class displayImageOnClick extends (0, _viewDefault.default) {
    _parentEl = document.querySelector('.left-col');
    _thumbnailImages = document.querySelectorAll('.thumbnailImg');
    _imageUrl;
    addHandlerImageView(imgAdd) {
        this._thumbnailImages.forEach((img)=>{
            const mainImage = document.querySelector('#mainImage');
            img.addEventListener('click', function(e) {
                e.preventDefault();
                this._imageUrl = img.getAttribute('imgId');
                switch(+this._imageUrl){
                    case 1:
                        mainImage.src = imgAdd.firstImg;
                        mainImage.setAttribute('imgId', '1');
                        break;
                    case 2:
                        mainImage.src = imgAdd.secondImg;
                        mainImage.setAttribute('imgId', '2');
                        break;
                    case 3:
                        mainImage.src = imgAdd.thirdImg;
                        mainImage.setAttribute('imgId', '3');
                        break;
                    case 4:
                        mainImage.src = imgAdd.fourthImg;
                        mainImage.setAttribute('imgId', '4');
                        break;
                }
            });
        });
    }
    //function for adding active class
    activeImage() {
        this._thumbnailImages.forEach((img)=>{
            img.addEventListener('click', function(e) {
                e.preventDefault();
                const currentActiveEl = document.querySelector('.active-img');
                currentActiveEl.classList.remove('active-img');
                e.target.classList.add('active-img');
            });
        });
    }
}
exports.default = new displayImageOnClick();

},{"./view":"2JHy7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d6ilH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
class FullImageView extends (0, _viewDefault.default) {
    _onClickImg = document.querySelector('#mainImage');
    _viewFullImgSection = document.querySelector('.fullProductImg');
    _crossEl = document.querySelector('.crossEl');
    _parentEl = document.querySelector('.container');
    _fullImg = document.querySelector('.fullPImg');
    _thumbnailImages = document.querySelectorAll('.thumbnailImg-2');
    _imageUrl;
    fullImageView(handler, imgAdd) {
        this._onClickImg.addEventListener('click', (e)=>{
            e.preventDefault();
            console.log(Array.from(this._thumbnailImages));
            const thumbnailImgArr = Array.from(this._thumbnailImages);
            switch(+this._onClickImg.getAttribute('imgid')){
                case 1:
                    this._fullImg.src = imgAdd.firstImg;
                    this._fullImg.setAttribute('imgid', 1);
                    this.removeActivethumbnail();
                    thumbnailImgArr[0].classList.add('active-img');
                    break;
                case 2:
                    this._fullImg.src = imgAdd.secondImg;
                    this._fullImg.setAttribute('imgid', 2);
                    this.removeActivethumbnail();
                    thumbnailImgArr[1].classList.add('active-img');
                    break;
                case 3:
                    this._fullImg.src = imgAdd.thirdImg;
                    this._fullImg.setAttribute('imgid', 3);
                    this.removeActivethumbnail();
                    thumbnailImgArr[2].classList.add('active-img');
                    break;
                case 4:
                    this._fullImg.src = imgAdd.fourthImg;
                    this._fullImg.setAttribute('imgid', 4);
                    this.removeActivethumbnail();
                    thumbnailImgArr[3].classList.add('active-img');
                    break;
            }
            handler();
        });
    }
    closeFullImgView(handler) {
        this._crossEl.addEventListener('click', handler);
    }
    removeActivethumbnail() {
        this._thumbnailImages.forEach((img)=>{
            img.classList.remove('active-img');
        });
    }
}
exports.default = new FullImageView();

},{"./view":"2JHy7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9eFt8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _fullImageView = require("./fullImageView");
var _fullImageViewDefault = parcelHelpers.interopDefault(_fullImageView);
class SildeImages extends (0, _viewDefault.default) {
    _prevSlide = document.querySelector('.previous');
    _nextSlide = document.querySelector('.next');
    _parentEl = document.querySelector('.fullPImg');
    _thumbnailImages = document.querySelectorAll('.thumbnailImg-2');
    _onClick = false;
    addHandlerMovePrevSlide(imgAdd) {
        this._prevSlide.addEventListener('click', (e)=>{
            e.preventDefault();
            const thumbnailImgArr = Array.from(document.querySelectorAll('.thumbnailImg-2'));
            let currentImg = this._parentEl.getAttribute('imgid');
            if (currentImg == 1) {
                this._parentEl.src = imgAdd.fourthImg;
                (0, _fullImageViewDefault.default).removeActivethumbnail();
                thumbnailImgArr[3].classList.add('active-img');
                this._parentEl.setAttribute('imgid', 4);
            }
            if (currentImg == 2) {
                this._parentEl.src = imgAdd.firstImg;
                (0, _fullImageViewDefault.default).removeActivethumbnail();
                thumbnailImgArr[0].classList.add('active-img');
                this._parentEl.setAttribute('imgid', 1);
            }
            if (currentImg == 3) {
                this._parentEl.src = imgAdd.secondImg;
                (0, _fullImageViewDefault.default).removeActivethumbnail();
                thumbnailImgArr[1].classList.add('active-img');
                this._parentEl.setAttribute('imgid', 2);
            }
            if (currentImg == 4) {
                this._parentEl.src = imgAdd.thirdImg;
                (0, _fullImageViewDefault.default).removeActivethumbnail();
                thumbnailImgArr[2].classList.add('active-img');
                this._parentEl.setAttribute('imgid', 3);
            }
        });
    }
    addHandlerMoveNextSlide(imgAdd) {
        this._nextSlide.addEventListener('click', ()=>{
            const thumbnailImgArr = Array.from(document.querySelectorAll('.thumbnailImg-2'));
            let currentImg = this._parentEl.getAttribute('imgid');
            if (currentImg == 1) {
                this._parentEl.src = imgAdd.secondImg;
                (0, _fullImageViewDefault.default).removeActivethumbnail();
                thumbnailImgArr[1].classList.add('active-img');
                this._parentEl.setAttribute('imgid', 2);
            }
            if (currentImg == 2) {
                this._parentEl.src = imgAdd.thirdImg;
                (0, _fullImageViewDefault.default).removeActivethumbnail();
                thumbnailImgArr[2].classList.add('active-img');
                this._parentEl.setAttribute('imgid', 3);
            }
            if (currentImg == 3) {
                this._parentEl.src = imgAdd.fourthImg;
                (0, _fullImageViewDefault.default).removeActivethumbnail();
                thumbnailImgArr[3].classList.add('active-img');
                this._parentEl.setAttribute('imgid', 4);
            }
            if (currentImg == 4) {
                this._parentEl.src = imgAdd.firstImg;
                (0, _fullImageViewDefault.default).removeActivethumbnail();
                thumbnailImgArr[0].classList.add('active-img');
                this._parentEl.setAttribute('imgid', 1);
            }
        });
    }
    _imgUrl;
    addHandlerOnThumbnailClick(imgAdd) {
        this._thumbnailImages.forEach((img)=>{
            img.addEventListener('click', (e)=>{
                e.preventDefault();
                this._onClick = true;
                const thumbnailImgArr = Array.from(document.querySelectorAll('.thumbnailImg-2'));
                this._imgUrl = img.getAttribute('imgid');
                switch(+this._imgUrl){
                    case 1:
                        this._parentEl.src = imgAdd.firstImg;
                        (0, _fullImageViewDefault.default).removeActivethumbnail();
                        thumbnailImgArr[0].classList.add('active-img');
                        this._parentEl.setAttribute('imgid', 1);
                        break;
                    case 2:
                        this._parentEl.src = imgAdd.secondImg;
                        (0, _fullImageViewDefault.default).removeActivethumbnail();
                        thumbnailImgArr[1].classList.add('active-img');
                        this._parentEl.setAttribute('imgid', 2);
                        break;
                    case 3:
                        this._parentEl.src = imgAdd.thirdImg;
                        (0, _fullImageViewDefault.default).removeActivethumbnail();
                        thumbnailImgArr[2].classList.add('active-img');
                        this._parentEl.setAttribute('imgid', 3);
                        break;
                    case 4:
                        this._parentEl.src = imgAdd.fourthImg;
                        (0, _fullImageViewDefault.default).removeActivethumbnail();
                        thumbnailImgArr[3].classList.add('active-img');
                        this._parentEl.setAttribute('imgid', 4);
                        break;
                }
            });
        });
    }
}
exports.default = new SildeImages();

},{"./view":"2JHy7","./fullImageView":"d6ilH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4mRaZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "itemAddedToCart", ()=>itemAddedToCart);
parcelHelpers.export(exports, "imageAddress", ()=>imageAddress);
var _imageProduct1Jpg = require("url:./images/image-product-1.jpg");
var _imageProduct1JpgDefault = parcelHelpers.interopDefault(_imageProduct1Jpg);
var _imageProduct2Jpg = require("url:./images/image-product-2.jpg");
var _imageProduct2JpgDefault = parcelHelpers.interopDefault(_imageProduct2Jpg);
var _imageProduct3Jpg = require("url:./images/image-product-3.jpg");
var _imageProduct3JpgDefault = parcelHelpers.interopDefault(_imageProduct3Jpg);
var _imageProduct4Jpg = require("url:./images/image-product-4.jpg");
var _imageProduct4JpgDefault = parcelHelpers.interopDefault(_imageProduct4Jpg);
let itemAddedToCart = false;
let imageAddress = {
    firstImg: (0, _imageProduct1JpgDefault.default),
    secondImg: (0, _imageProduct2JpgDefault.default),
    thirdImg: (0, _imageProduct3JpgDefault.default),
    fourthImg: (0, _imageProduct4JpgDefault.default)
};

},{"url:./images/image-product-1.jpg":"exyzL","url:./images/image-product-2.jpg":"atyUO","url:./images/image-product-3.jpg":"djhuZ","url:./images/image-product-4.jpg":"7GTzW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"exyzL":[function(require,module,exports,__globalThis) {
module.exports = require("f96788208b74efcb").getBundleURL('adFLR') + "image-product-1.be2fda11.jpg" + "?" + Date.now();

},{"f96788208b74efcb":"lgJ39"}],"atyUO":[function(require,module,exports,__globalThis) {
module.exports = require("3d09cf4ee7980ac2").getBundleURL('adFLR') + "image-product-2.fba8d3e7.jpg" + "?" + Date.now();

},{"3d09cf4ee7980ac2":"lgJ39"}],"djhuZ":[function(require,module,exports,__globalThis) {
module.exports = require("f2646136bd691447").getBundleURL('adFLR') + "image-product-3.3f85bcd6.jpg" + "?" + Date.now();

},{"f2646136bd691447":"lgJ39"}],"7GTzW":[function(require,module,exports,__globalThis) {
module.exports = require("a636a265b3f5766").getBundleURL('adFLR') + "image-product-4.e1e3e0cc.jpg" + "?" + Date.now();

},{"a636a265b3f5766":"lgJ39"}],"dGaGc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _slideImagesView = require("./slideImagesView");
var _slideImagesViewDefault = parcelHelpers.interopDefault(_slideImagesView);
class MobileView extends (0, _viewDefault.default) {
    _menu = document.querySelector('.menu');
    _sideBar = document.querySelector('.navigation-links');
    _cross = document.querySelector('.close');
    _background = document.querySelector('.section-container');
    _prevSlide = document.querySelector('.previousPhone');
    _nextSlide = document.querySelector('.nextPhone');
    _parentEl = document.querySelector('.phone-mainImg');
    onClickHumberg() {
        this._menu.addEventListener('click', (e)=>{
            e.preventDefault();
            this._sideBar.classList.remove('hide');
            this._background.style.position = 'fixed';
            this._background.style.opacity = '0.6';
        });
    }
    onClickClose() {
        this._cross.addEventListener('click', (e)=>{
            e.preventDefault();
            this._sideBar.classList.add('hide');
            this._background.style.position = 'relative';
            this._background.style.opacity = '1';
        });
    }
    onMovePrevSlide(imgAdd) {
        this._prevSlide.addEventListener('click', (e)=>{
            let currentImg = this._parentEl.getAttribute('imgid');
            if (currentImg == 1) {
                this._parentEl.src = imgAdd.fourthImg;
                this._parentEl.setAttribute('imgid', 4);
            }
            if (currentImg == 2) {
                this._parentEl.src = imgAdd.firstImg;
                this._parentEl.setAttribute('imgid', 1);
            }
            if (currentImg == 3) {
                this._parentEl.src = imgAdd.secondImg;
                this._parentEl.setAttribute('imgid', 2);
            }
            if (currentImg == 4) {
                this._parentEl.src = imgAdd.thirdImg;
                this._parentEl.setAttribute('imgid', 3);
            }
        });
        (0, _slideImagesViewDefault.default).addHandlerMoveNextSlide(imgAdd);
    }
    onMoveNextSlide(imgAdd) {
        this._nextSlide.addEventListener('click', (e)=>{
            e.preventDefault();
            let currentImg = this._parentEl.getAttribute('imgid');
            if (currentImg == 1) {
                this._parentEl.src = imgAdd.secondImg;
                this._parentEl.setAttribute('imgid', 2);
            }
            if (currentImg == 2) {
                this._parentEl.src = imgAdd.thirdImg;
                this._parentEl.setAttribute('imgid', 3);
            }
            if (currentImg == 3) {
                this._parentEl.src = imgAdd.fourthImg;
                this._parentEl.setAttribute('imgid', 4);
            }
            if (currentImg == 4) {
                this._parentEl.src = imgAdd.firstImg;
                this._parentEl.setAttribute('imgid', 1);
            }
        });
    }
}
exports.default = new MobileView();

},{"./view":"2JHy7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./slideImagesView":"9eFt8"}]},["cYdHD","a2PJv"], "a2PJv", "parcelRequire94c2")

//# sourceMappingURL=index.561fface.js.map
