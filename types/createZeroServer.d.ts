import type { AsyncAction, AuthData, GenericModels, GetZeroMutators, Transaction } from './types';
import type { AnyQueryRegistry, HumanReadable, Query, Schema as ZeroSchema } from '@rocicorp/zero';
export declare function createZeroServer<Schema extends ZeroSchema, Models extends GenericModels, ServerActions extends Record<string, unknown>>({ createServerActions, database, schema, models, queries, }: {
    /**
     * The DB connection string, same as ZERO_UPSTREAM_DB
     */
    database: string;
    schema: Schema;
    models: Models;
    createServerActions: () => ServerActions;
    queries?: AnyQueryRegistry;
}): {
    handleMutationRequest: ({ authData, request, skipAsyncTasks, }: {
        authData: AuthData | null;
        request: Request;
        skipAsyncTasks?: boolean;
    }) => Promise<{
        response: {
            mutations: {
                id: {
                    id: number;
                    clientID: string;
                };
                result: {
                    data?: import("@rocicorp/zero").ReadonlyJSONValue | undefined;
                } | {
                    message?: string | undefined;
                    details?: import("@rocicorp/zero").ReadonlyJSONValue | undefined;
                    error: "app";
                } | {
                    details?: import("@rocicorp/zero").ReadonlyJSONValue | undefined;
                    error: "oooMutation" | "alreadyProcessed";
                };
            }[];
        } | {
            mutationIDs?: {
                id: number;
                clientID: string;
            }[] | undefined;
            error: "unsupportedPushVersion";
        } | {
            mutationIDs?: {
                id: number;
                clientID: string;
            }[] | undefined;
            error: "unsupportedSchemaVersion";
        } | {
            mutationIDs?: {
                id: number;
                clientID: string;
            }[] | undefined;
            error: "http";
            status: number;
            details: string;
        } | {
            mutationIDs?: {
                id: number;
                clientID: string;
            }[] | undefined;
            error: "zeroPusher";
            details: string;
        } | {
            details?: import("@rocicorp/zero").ReadonlyJSONValue | undefined;
            message: string;
            kind: "PushFailed";
            mutationIDs: {
                id: number;
                clientID: string;
            }[];
            origin: "server";
            reason: "parse" | "database" | "oooMutation" | "unsupportedPushVersion" | "internal";
        } | {
            details?: import("@rocicorp/zero").ReadonlyJSONValue | undefined;
            bodyPreview?: string | undefined;
            message: string;
            kind: "PushFailed";
            mutationIDs: {
                id: number;
                clientID: string;
            }[];
            origin: "zeroCache";
            reason: "http";
            status: number;
        } | {
            details?: import("@rocicorp/zero").ReadonlyJSONValue | undefined;
            message: string;
            kind: "PushFailed";
            mutationIDs: {
                id: number;
                clientID: string;
            }[];
            origin: "zeroCache";
            reason: "parse" | "internal" | "timeout";
        };
        asyncTasks: AsyncAction[];
    }>;
    handleQueryRequest: ({ authData, request, }: {
        authData: AuthData | null;
        request: Request;
    }) => Promise<{
        response: ["transformed", ({
            message?: string | undefined;
            details?: import("@rocicorp/zero").ReadonlyJSONValue | undefined;
            error: "app";
            id: string;
            name: string;
        } | {
            details?: import("@rocicorp/zero").ReadonlyJSONValue | undefined;
            error: "parse";
            id: string;
            name: string;
            message: string;
        } | {
            id: string;
            name: string;
            ast: import("@rocicorp/zero").AST;
        })[]] | ["transformFailed", {
            details?: import("@rocicorp/zero").ReadonlyJSONValue | undefined;
            message: string;
            kind: "TransformFailed";
            queryIDs: string[];
            origin: "server";
            reason: "parse" | "database" | "internal";
        } | {
            details?: import("@rocicorp/zero").ReadonlyJSONValue | undefined;
            bodyPreview?: string | undefined;
            message: string;
            kind: "TransformFailed";
            queryIDs: string[];
            origin: "zeroCache";
            reason: "http";
            status: number;
        } | {
            details?: import("@rocicorp/zero").ReadonlyJSONValue | undefined;
            message: string;
            kind: "TransformFailed";
            queryIDs: string[];
            origin: "zeroCache";
            reason: "parse" | "internal" | "timeout";
        }];
    }>;
    transaction: <CB extends (tx: Transaction) => Promise<any>, Returns extends CB extends (tx: Transaction) => Promise<infer X> ? X : never>(query: CB) => Promise<Returns>;
    mutate: (run: (tx: Transaction, mutators: GetZeroMutators<Models>) => Promise<void>, authData?: Pick<AuthData, "email" | "id"> & Partial<AuthData>) => Promise<void>;
    query: <R>(cb: (q: Transaction["query"]) => Query<any, Schema, R>) => Promise<HumanReadable<R>>;
};
//# sourceMappingURL=createZeroServer.d.ts.map