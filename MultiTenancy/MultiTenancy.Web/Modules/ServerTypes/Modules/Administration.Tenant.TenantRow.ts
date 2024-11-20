import { fieldsProxy } from "@serenity-is/corelib";

export interface TenantRow {
    TenantId?: number;
    TenantName?: string;
}

export abstract class TenantRow {
    static readonly idProperty = 'TenantId';
    static readonly nameProperty = 'TenantName';
    static readonly localTextPrefix = 'Adminstration.Tenant';
    static readonly deletePermission = 'Adminstration:Tenants';
    static readonly insertPermission = 'Adminstration:Tenants';
    static readonly readPermission = 'Adminstration:Tenants';
    static readonly updatePermission = 'Adminstration:Tenants';

    static readonly Fields = fieldsProxy<TenantRow>();
}