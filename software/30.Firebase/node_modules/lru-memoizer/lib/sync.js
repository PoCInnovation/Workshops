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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lru_cache_1 = __importDefault(require("lru-cache"));
var events_1 = require("events");
var lodash_clonedeep_1 = __importDefault(require("lodash.clonedeep"));
var freeze_1 = require("./freeze");
function syncMemoizer(options) {
    var cache = new lru_cache_1.default(options);
    var load = options.load;
    var hash = options.hash;
    var bypass = options.bypass;
    var itemMaxAge = options.itemMaxAge;
    var freeze = options.freeze;
    var clone = options.clone;
    var emitter = new events_1.EventEmitter();
    var defaultResult = Object.assign({
        del: del,
        reset: function () { return cache.reset(); },
        keys: cache.keys.bind(cache),
        on: emitter.on.bind(emitter),
        once: emitter.once.bind(emitter)
    }, options);
    if (options.disable) {
        return Object.assign(load, defaultResult);
    }
    function del() {
        var key = hash.apply(void 0, __spread(arguments));
        cache.del(key);
    }
    function emit(event) {
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parameters[_i - 1] = arguments[_i];
        }
        emitter.emit.apply(emitter, __spread([event], parameters));
    }
    function isPromise(result) {
        // detect native, bluebird, A+ promises
        return result && result.then && typeof result.then === 'function';
    }
    function processResult(result) {
        var res = result;
        if (clone) {
            if (isPromise(res)) {
                res = res.then(lodash_clonedeep_1.default);
            }
            else {
                res = lodash_clonedeep_1.default(res);
            }
        }
        if (freeze) {
            if (isPromise(res)) {
                res = res.then(freeze_1.deepFreeze);
            }
            else {
                freeze_1.deepFreeze(res);
            }
        }
        return res;
    }
    var result = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (bypass && bypass.apply(void 0, __spread(args))) {
            emit.apply(void 0, __spread(['miss'], args));
            return load.apply(void 0, __spread(args));
        }
        var key = hash.apply(void 0, __spread(args));
        var fromCache = cache.get(key);
        if (fromCache) {
            emit.apply(void 0, __spread(['hit'], args));
            return processResult(fromCache);
        }
        emit.apply(void 0, __spread(['miss'], args));
        var result = load.apply(void 0, __spread(args));
        if (itemMaxAge) {
            // @ts-ignore
            cache.set(key, result, itemMaxAge.apply(void 0, __spread(args.concat([result]))));
        }
        else {
            cache.set(key, result);
        }
        return processResult(result);
    };
    return Object.assign(result, defaultResult);
}
exports.syncMemoizer = syncMemoizer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3luYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9zeW5jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBNEI7QUFDNUIsaUNBQXNDO0FBQ3RDLHNFQUF5QztBQUN6QyxtQ0FBc0M7QUF5RHRDLFNBQWdCLFlBQVksQ0FDeEIsT0FBb0Q7SUFFdEQsSUFBTSxLQUFLLEdBQVEsSUFBSSxtQkFBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLElBQU0sSUFBSSxHQUFTLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDaEMsSUFBTSxJQUFJLEdBQVMsT0FBTyxDQUFDLElBQUksQ0FBQztJQUNoQyxJQUFNLE1BQU0sR0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ2xDLElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7SUFDdEMsSUFBTSxNQUFNLEdBQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUNsQyxJQUFNLEtBQUssR0FBUSxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQ2pDLElBQU0sT0FBTyxHQUFNLElBQUkscUJBQVksRUFBRSxDQUFDO0lBRXRDLElBQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEMsR0FBRyxLQUFBO1FBQ0gsS0FBSyxFQUFFLGNBQU0sT0FBQSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQWIsQ0FBYTtRQUMxQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzVCLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUNqQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRVosSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1FBQ25CLE9BQU8sTUFBTSxDQUFD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