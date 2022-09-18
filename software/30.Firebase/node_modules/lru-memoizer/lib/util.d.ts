import LRU from 'lru-cache';
export declare type Listener = (...args: any[]) => void;
export declare type INodeStyleCallBack<SuccessArg> = (err: Error, result?: SuccessArg) => void;
export interface ResultBase {
    /**
     * Returns all keys in the cache.
     */
    keys: () => string[];
    /**
     * Clear the cache.
     */
    reset: () => void;
    /**
     * Delete an item given the parameters.
     */
    del: <T1, T2, T3, T4, T5, T6>(arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => void;
    on(event: 'hit', handler: Listener): void;
    on(event: 'miss', handler: Listener): void;
    on(event: 'queue', handler: Listener): void;
}
export interface IHashingFunction<T1, T2, T3, T4, T5, T6> {
    (): string;
    (arg1: T1): string;
    (arg1: T1, arg2: T2): string;
    (arg1: T1, arg2: T2, arg3: T3): string;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4): string;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5): string;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6): string;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6): string;
    (...rest: any[]): string;
}
export interface IBypassFunction<T1, T2, T3, T4, T5, T6> {
    (): boolean;
    (arg1: T1): boolean;
    (arg1: T1, arg2: T2): boolean;
    (arg1: T1, arg2: T2, arg3: T3): boolean;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4): boolean;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5): boolean;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6): boolean;
    (...rest: any[]): boolean;
}
export interface IMaxAgeFunction<T1, T2, T3, T4, T5, T6, TResult> {
    (res: TResult): number;
    (arg1: T1, res: TResult): number;
    (arg1: T1, arg2: T2, res: TResult): number;
    (arg1: T1, arg2: T2, arg3: T3, res: TResult): number;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, res: TResult): number;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, res: TResult): number;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, res: TResult): number;
    (...rest: any[]): number;
}
export interface IParamsBase<T1, T2, T3, T4, T5, T6, TResult> extends LRU.Options<string, any> {
    /**
     * A function to generate the key of the cache.
     */
    hash: IHashingFunction<T1, T2, T3, T4, T5, T6>;
    /**
     * Return true if the result should not be retrieved from the cache.
     */
    bypass?: IBypassFunction<T1, T2, T3, T4, T5, T6>;
    /**
     * An optional function to indicate the maxAge of an specific item.
     */
    itemMaxAge: IMaxAgeFunction<T1, T2, T3, T4, T5, T6, TResult>;
    /**
     * Indicates if the resource should be freezed.
     */
    freeze?: boolean;
    /**
     * Indicates if the resource should be cloned before is returned.
     */
    clone?: boolean;
    /**
     * Disable the cache and executes the load logic directly.
     */
    disable?: boolean;
    /**
     * Do not queue requests if initial call is more than `queueMaxAge` milliseconds old.
     * Instead, invoke `load` again and create a new queue.
     * Defaults to 1000ms.
     */
    queueMaxAge?: number;
}
