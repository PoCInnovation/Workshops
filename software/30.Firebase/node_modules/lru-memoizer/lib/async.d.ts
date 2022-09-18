import { syncMemoizer } from './sync';
import { INodeStyleCallBack, ResultBase, IParamsBase } from './util';
interface IMemoized<T1, T2, T3, T4, T5, T6, TResult> extends ResultBase {
    (arg1: T1, cb: INodeStyleCallBack<TResult>): void;
    (arg1: T1, arg2: T2, cb: INodeStyleCallBack<TResult>): void;
    (arg1: T1, arg2: T2, arg3: T3, cb: INodeStyleCallBack<TResult>): void;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, cb: INodeStyleCallBack<TResult>): void;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, cb: INodeStyleCallBack<TResult>): void;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, cb: INodeStyleCallBack<TResult>): void;
}
interface IMemoizableFunction<T1, T2, T3, T4, T5, T6, TResult> {
    (cb: INodeStyleCallBack<TResult>): void;
    (arg1: T1, cb: INodeStyleCallBack<TResult>): void;
    (arg1: T1, arg2: T2, cb: INodeStyleCallBack<TResult>): void;
    (arg1: T1, arg2: T2, arg3: T3, cb: INodeStyleCallBack<TResult>): void;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, cb: INodeStyleCallBack<TResult>): void;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, cb: INodeStyleCallBack<TResult>): void;
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, cb: INodeStyleCallBack<TResult>): void;
    (...rest: any[]): void;
}
interface AsyncParams<T1, T2, T3, T4, T5, T6, TResult> extends IParamsBase<T1, T2, T3, T4, T5, T6, TResult> {
    /**
     * The function that loads the resource when is not in the cache.
     */
    load: IMemoizableFunction<T1, T2, T3, T4, T5, T6, TResult>;
}
declare function asyncMemoizer<T1, T2, T3, T4, T5, T6, TResult>(options: AsyncParams<T1, T2, T3, T4, T5, T6, TResult>): IMemoized<T1, T2, T3, T4, T5, T6, TResult>;
declare namespace asyncMemoizer {
    var sync: typeof syncMemoizer;
}
export { asyncMemoizer };
