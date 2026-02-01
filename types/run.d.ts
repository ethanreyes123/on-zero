import { type PlainQueryFn } from './resolveQuery';
import { type RunOptions } from './zeroRunner';
import type { AnyQueryRegistry, HumanReadable, Query, Schema as ZeroSchema } from '@rocicorp/zero';
export declare function setCustomQueries(queries: AnyQueryRegistry): void;
export declare function run<Schema extends ZeroSchema, TArg, TTable extends keyof Schema['tables'] & string, TReturn>(fn: PlainQueryFn<TArg, Query<TTable, Schema, TReturn>>, params: TArg, options?: RunOptions): Promise<HumanReadable<TReturn>>;
export declare function run<Schema extends ZeroSchema, TTable extends keyof Schema['tables'] & string, TReturn>(fn: PlainQueryFn<void, Query<TTable, Schema, TReturn>>, options?: RunOptions): Promise<HumanReadable<TReturn>>;
//# sourceMappingURL=run.d.ts.map