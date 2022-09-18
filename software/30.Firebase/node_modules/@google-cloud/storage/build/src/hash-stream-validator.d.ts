/// <reference types="node" />
/// <reference types="node" />
import { Transform } from 'stream';
import { CRC32CValidatorGenerator } from './crc32c';
interface HashStreamValidatorOptions {
    crc32c: boolean;
    md5: boolean;
    crc32cGenerator: CRC32CValidatorGenerator;
}
declare class HashStreamValidator extends Transform {
    #private;
    readonly crc32cEnabled: boolean;
    readonly md5Enabled: boolean;
    constructor(options?: Partial<HashStreamValidatorOptions>);
    _flush(callback: () => void): void;
    _transform(chunk: Buffer, encoding: BufferEncoding, callback: (e?: Error) => void): void;
    test(hash: 'crc32c' | 'md5', sum: Buffer | string): boolean;
}
export { HashStreamValidator, HashStreamValidatorOptions };
