import type { MutatorContext } from '../types';
export declare function mutatorContext(): MutatorContext;
export declare function isInZeroMutation(): boolean;
export declare function runWithContext<T>(context: MutatorContext, fn: () => T | Promise<T>): Promise<T>;
//# sourceMappingURL=mutatorContext.d.ts.map