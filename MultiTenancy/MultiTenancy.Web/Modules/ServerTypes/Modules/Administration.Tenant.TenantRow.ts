import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib";

export interface TenantRow {
    TenantId?: number;
    TenantName?: string;
}

export abstract class TenantRow {
    static readonly idProperty = 'TenantId';
    static readonly nameProperty = 'TenantName';
    static readonly localTextPrefix = 'Adminstration.Tenant';
    static readonly lookupKey = 'Administration.Tenant';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<TenantRow>('Administration.Tenant') }
    static async getLookupAsync() { return getLookupAsync<TenantRow>('Administration.Tenant') }

    static readonly deletePermission = 'Administration:Tenants';
    static readonly insertPermission = 'Administration:Tenants';
    static readonly readPermission = 'Administration:Tenants';
    static readonly updatePermission = 'Administration:Tenants';

    static readonly Fields = fieldsProxy<TenantRow>();
}