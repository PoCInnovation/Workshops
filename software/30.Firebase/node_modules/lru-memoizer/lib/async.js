"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lru_cache_1 = __importDefault(require("lru-cache"));
var events_1 = require("events");
var lodash_clonedeep_1 = __importDefault(require("lodash.clonedeep"));
var freeze_1 = require("./freeze");
var sync_1 = require("./sync");
function asyncMemoizer(options) {
    var cache = new lru_cache_1.default(options);
    var load = options.load;
    var hash = options.hash;
    var bypass = options.bypass;
    var itemMaxAge = options.itemMaxAge;
    var freeze = options.freeze;
    var clone = options.clone;
    var queueMaxAge = options.queueMaxAge || 1000;
    var loading = new Map();
    var emitter = new events_1.EventEmitter();
    var memoizerMethods = Object.assign({
        del: del,
        reset: function () { return cache.reset(); },
        keys: cache.keys.bind(cache),
        on: emitter.on.bind(emitter),
        once: emitter.once.bind(emitter)
    }, options);
    if (options.disable) {
        return Object.assign(load, memoizerMethods);
    }
    function del() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var key = hash.apply(void 0, __spread(args));
        cache.del(key);
    }
    function add(key, parameters, result) {
        if (freeze) {
            result.forEach(freeze_1.deepFreeze);
        }
        if (itemMaxAge) {
            cache.set(key, result, itemMaxAge.apply(void 0, __spread(parameters.concat(result))));
        }
        else {
            cache.set(key, result);
        }
    }
    function runCallbacks(callbacks, args) {
        var e_1, _a;
        try {
            for (var callbacks_1 = __values(callbacks), callbacks_1_1 = callbacks_1.next(); !callbacks_1_1.done; callbacks_1_1 = callbacks_1.next()) {
                var callback = callbacks_1_1.value;
                // Simulate async call when returning from cache
                // and yield between callback resolution
                if (clone) {
                    setImmediate.apply(void 0, __spread([callback], args.map(lodash_clonedeep_1.default)));
                }
                else {
                    setImmediate.apply(void 0, __spread([callback], args));
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (callbacks_1_1 && !callbacks_1_1.done && (_a = callbacks_1.return)) _a.call(callbacks_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    function emit(event) {
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parameters[_i - 1] = arguments[_i];
        }
        emitter.emit.apply(emitter, __spread([event], parameters));
    }
    function memoizedFunction() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var parameters = args.slice(0, -1);
        var callback = args.slice(-1).pop();
        var key;
        if (bypass && bypass.apply(void 0, __spread(parameters))) {
            emit.apply(void 0, __spread(['miss'], parameters));
            return load.apply(void 0, __spread(args));
        }
        if (parameters.length === 0 && !hash) {
            //the load function only receives callback.
            key = '_';
        }
        else {
            key = hash.apply(void 0, __spread(parameters));
        }
        var fromCache = cache.get(key);
        if (fromCache) {
            emit.apply(void 0, __spread(['hit'], parameters));
            // found, invoke callback
            return runCallbacks([callback], [null].concat(fromCache));
        }
        var pendingLoad = loading.get(key);
        if (pendingLoad && pendingLoad.expiresAt > Date.now()) {
            // request already in progress, queue and return
            pendingLoad.queue.push(callback);
            emit.apply(void 0, __spread(['queue'], parameters));
            return;
        }
        emit.apply(void 0, __spread(['miss'], parameters));
        var started = Date.now();
        // no pending request or not resolved before expiration
        // create a new queue and invoke load
        var queue = [callback];
        loading.set(key, {
            queue: queue,
            expiresAt: started + queueMaxAge
        });
        var loadHandler = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var err = args[0];
            if (!err) {
                add(key, parameters, args.slice(1));
            }
            // this can potentially delete a different queue than `queue` if
            // this callback was called after expiration.
            // that will only cause a new call to be performed and a new queue to be
            // created
            loading.delete(key);
            emit.apply(void 0, __spread(['loaded', Date.now() - started], parameters));
            runCallbacks(queue, args);
        };
        load.apply(void 0, __spread(parameters, [loadHandler]));
    }
    ;
    return Object.assign(memoizedFunction, memoizerMethods);
}
exports.asyncMemoizer = asyncMemoizer;
asyncMemoizer.sync = sync_1.syncMemoizer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYXN5bmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBNEI7QUFDNUIsaUNBQXNDO0FBQ3RDLHNFQUF5QztBQUN6QyxtQ0FBc0M7QUFDdEMsK0JBQXNDO0FBOEV0QyxTQUFTLGFBQWEsQ0FDbEIsT0FBcUQ7SUFFdkQsSUFBTSxLQUFLLEdBQVEsSUFBSSxtQkFBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLElBQU0sSUFBSSxHQUFTLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDaEMsSUFBTSxJQUFJLEdBQVMsT0FBTyxDQUFDLElBQUksQ0FBQztJQUNoQyxJQUFNLE1BQU0sR0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ2xDLElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7SUFDdEMsSUFBTSxNQUFNLEdBQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUNsQyxJQUFNLEtBQUssR0FBUSxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQ2pDLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDO0lBQ2hELElBQU0sT0FBTyxHQUFNLElBQUksR0FBRyxFQUF1QixDQUFDO0lBQ2xELElBQU0sT0FBTyxHQUFNLElBQUkscUJBQVksRUFBRSxDQUFDO0lBRXRDLElBQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDcEMsR0FBRyxLQUFBO1FBQ0gsS0FBSyxFQUFFLGNBQU0sT0FBQSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQWIsQ0FBYTtRQUMxQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzVCLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxFQUFF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