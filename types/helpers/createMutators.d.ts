import type { AuthData, Can, GenericModels, GetZeroMutators } from '../types';
export declare function createMutators<Models extends GenericModels>({ environment, authData, createServerActions, asyncTasks, can, models, }: {
    environment: 'server' | 'client';
    authData: AuthData | null;
    can: Can;
    models: Models;
    asyncTasks?: Array<() => Promise<void>>;
    createServerActions?: () => Record<string, any>;
}): GetZeroMutators<Models>;
//# sourceMappingURL=createMutators.d.ts.map