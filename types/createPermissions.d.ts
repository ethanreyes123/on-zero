import type { AuthData, Can, Where } from './types';
import type { Condition, ExpressionBuilder, Schema as ZeroSchema } from '@rocicorp/zero';
export declare function createPermissions<Schema extends ZeroSchema>({ environment, schema, }: {
    environment: 'client' | 'server';
    schema: Schema;
}): {
    can: Can;
    buildPermissionQuery: <PermissionWhere extends Where<string, boolean | Condition>>(authData: AuthData | null, eb: ExpressionBuilder<any, any>, permissionWhere: PermissionWhere, objOrId: Record<string, any> | string) => Condition;
};
//# sourceMappingURL=createPermissions.d.ts.map