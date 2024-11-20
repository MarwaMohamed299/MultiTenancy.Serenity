import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from "@serenity-is/corelib";
import { TenantRow } from "./Administration.Tenant.TenantRow";

export namespace TenantService {
    export const baseUrl = 'Adminstration/Tenant';

    export declare function Create(request: SaveRequest<TenantRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<TenantRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<TenantRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<TenantRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<TenantRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<TenantRow>>;

    export const Methods = {
        Create: "Adminstration/Tenant/Create",
        Update: "Adminstration/Tenant/Update",
        Delete: "Adminstration/Tenant/Delete",
        Retrieve: "Adminstration/Tenant/Retrieve",
        List: "Adminstration/Tenant/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>TenantService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}