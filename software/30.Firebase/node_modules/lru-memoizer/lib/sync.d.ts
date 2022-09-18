import { ResultBase, IParamsBase } from './util';
interface IMemoizedSync<T1, T2, T3, T4, T5, T6, TResult> extends ResultBase {
    (arg1: T1): TResult;
    (arg1: T1, arg2: T2): TResult;
    (arg1: T1, arg2: T2, arg3: T3): TResult;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4): TResult;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5): TResult;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6): TResult;
}
interface IMemoizableFunctionSync<T1, T2, T3, T4, T5, T6, TResult> {
    (): TResult;
    (arg1: T1): TResult;
    (arg1: T1, arg2: T2): TResult;
    (arg1: T1, arg2: T2, arg3: T3): TResult;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4): TResult;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5): TResult;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6): TResult;
    (...args: any[]): TResult;
}
export interface SyncParams<T1, T2, T3, T4, T5, T6, TResult> extends IParamsBase<T1, T2, T3, T4, T5, T6, TResult> {
    /**
     * The function that loads the resource when is not in the cache.
     */
    load: IMemoizableFunctionSync<T1, T2, T3, T4, T5, T6, TResult>;
}
export declare function syncMemoizer<T1, T2, T3, T4, T5, T6, TResult>(options: SyncParams<T1, T2, T3, T4, T5, T6, TResult>): IMemoizedSync<T1, T2, T3, T4, T5, T6, TResult>;
export {};
