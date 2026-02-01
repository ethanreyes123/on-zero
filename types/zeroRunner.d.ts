import type { HumanReadable, Query, RunOptions, Schema as ZeroSchema } from '@rocicorp/zero';
export type { RunOptions };
export type ZeroRunner = <TReturn>(query: Query<any, ZeroSchema, TReturn>, options?: RunOptions) => Promise<HumanReadable<TReturn>>;
export declare function setRunner(r: ZeroRunner): void;
export declare function getRunner(): ZeroRunner;
//# sourceMappingURL=zeroRunner.d.ts.map