import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { TenantRow } from "./Administration.Tenant.TenantRow";

export interface TenantColumns {
    TenantId: Column<TenantRow>;
    TenantName: Column<TenantRow>;
}

export class TenantColumns extends ColumnsBase<TenantRow> {
    static readonly columnsKey = 'Adminstration.Tenant';
    static readonly Fields = fieldsProxy<TenantColumns>();
}