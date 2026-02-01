import type { Query, Row } from '@rocicorp/zero';
export declare function batchQuery<Q extends Query<any, any, any>, Item extends Row<Q>>(q: Q, mapper: (items: Item[]) => Promise<void>, { chunk, pause, stopAfter, }?: {
    chunk: number;
    pause?: number;
    stopAfter?: number;
}): Promise<void>;
//# sourceMappingURL=batchQuery.d.ts.map