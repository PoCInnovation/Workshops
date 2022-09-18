"use strict";
// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HashStreamValidator_crc32cHash, _HashStreamValidator_md5Hash, _HashStreamValidator_md5Digest;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashStreamValidator = void 0;
const crypto_1 = require("crypto");
const stream_1 = require("stream");
const crc32c_1 = require("./crc32c");
class HashStreamValidator extends stream_1.Transform {
    constructor(options = {}) {
        super();
        _HashStreamValidator_crc32cHash.set(this, undefined);
        _HashStreamValidator_md5Hash.set(this, undefined);
        _HashStreamValidator_md5Digest.set(this, '');
        this.crc32cEnabled = !!options.crc32c;
        this.md5Enabled = !!options.md5;
        if (this.crc32cEnabled) {
            const crc32cGenerator = options.crc32cGenerator || crc32c_1.CRC32C_DEFAULT_VALIDATOR_GENERATOR;
            __classPrivateFieldSet(this, _HashStreamValidator_crc32cHash, crc32cGenerator(), "f");
        }
        if (this.md5Enabled) {
            __classPrivateFieldSet(this, _HashStreamValidator_md5Hash, (0, crypto_1.createHash)('md5'), "f");
        }
    }
    _flush(callback) {
        if (__classPrivateFieldGet(this, _HashStreamValidator_md5Hash, "f")) {
            __classPrivateFieldSet(this, _HashStreamValidator_md5Digest, __classPrivateFieldGet(this, _HashStreamValidator_md5Hash, "f").digest('base64'), "f");
        }
        callback();
    }
    _transform(chunk, encoding, callback) {
        this.push(chunk, encoding);
        try {
            if (__classPrivateFieldGet(this, _HashStreamValidator_crc32cHash, "f"))
                __classPrivateFieldGet(this, _HashStreamValidator_crc32cHash, "f").update(chunk);
            if (__classPrivateFieldGet(this, _HashStreamValidator_md5Hash, "f"))
                __classPrivateFieldGet(this, _HashStreamValidator_md5Hash, "f").update(chunk);
            callback();
        }
        catch (e) {
            callback(e);
        }
    }
    test(hash, sum) {
        const check = Buffer.isBuffer(sum) ? sum.toString('base64') : sum;
        if (hash === 'crc32c' && __classPrivateFieldGet(this, _HashStreamValidator_crc32cHash, "f")) {
            return __classPrivateFieldGet(this, _HashStreamValidator_crc32cHash, "f").validate(check);
        }
        if (hash === 'md5' && __classPrivateFieldGet(this, _HashStreamValidator_md5Hash, "f")) {
            return __classPrivateFieldGet(this, _HashStreamValidator_md5Digest, "f") === check;
        }
        return false;
    }
}
exports.HashStreamValidator = HashStreamValidator;
_HashStreamValidator_crc32cHash = new WeakMap(), _HashStreamValidator_md5Hash = new WeakMap(), _HashStreamValidator_md5Digest = new WeakMap();
//# sourceMappingURL=hash-stream-validator.js.map