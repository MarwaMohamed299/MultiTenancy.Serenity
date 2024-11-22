namespace MultiTenancy.Modules.Administration.Tenant;


     public class MultiTenantBehavior : IImplicitBehavior,
        ISaveBehavior, IDeleteBehavior,
        IListBehavior, IRetrieveBehavior
{
    private Int32Field fldTenantId;

    public bool ActivateFor(IRow row)
    {
        if (row is not IMultiTenantRow mt)
            return false;

        fldTenantId = mt.TenantIdField;
        return true;
    }

    public void OnPrepareQuery(IRetrieveRequestHandler handler,
        SqlQuery query)
    {
        if (!handler.Context.Permissions.HasPermission(PermissionKeys.Tenants))
            query.Where(fldTenantId == handler.Context.User.GetTenantId());
    }

    public void OnPrepareQuery(IListRequestHandler handler,
        SqlQuery query)
    {
        if (!handler.Context.Permissions.HasPermission(PermissionKeys.Tenants))
            query.Where(fldTenantId == handler.Context.User.GetTenantId());
    }

    public void OnSetInternalFields(ISaveRequestHandler handler)
    {
        if (handler.IsCreate)
            fldTenantId[handler.Row] = handler.Context.User.GetTenantId();
    }

    public void OnValidateRequest(ISaveRequestHandler handler)
    {
        if (handler.IsUpdate)
        {
            if (fldTenantId[handler.Old] != fldTenantId[handler.Row])
                handler.Context.Permissions.ValidatePermission(PermissionKeys.Tenants, handler.Context.Localizer);
        }
    }

    public void OnValidateRequest(IDeleteRequestHandler handler)
    {
        if (fldTenantId[handler.Row] != handler.Context.User.GetTenantId())
            handler.Context.Permissions.ValidatePermission(PermissionKeys.Tenants, handler.Context.Localizer);
    }

    public void OnAfterDelete(IDeleteRequestHandler handler) { }
    public void OnAfterExecuteQuery(IRetrieveRequestHandler handler) { }
    public void OnAfterExecuteQuery(IListRequestHandler handler) { }
    public void OnAfterSave(ISaveRequestHandler handler) { }
    public void OnApplyFilters(IListRequestHandler handler, SqlQuery query) { }
    public void OnAudit(IDeleteRequestHandler handler) { }
    public void OnAudit(ISaveRequestHandler handler) { }
    public void OnBeforeDelete(IDeleteRequestHandler handler) { }
    public void OnBeforeExecuteQuery(IRetrieveRequestHandler handler) { }
    public void OnBeforeExecuteQuery(IListRequestHandler handler) { }
    public void OnBeforeSave(ISaveRequestHandler handler) { }
    public void OnPrepareQuery(IDeleteRequestHandler handler, SqlQuery query) { }
    public void OnPrepareQuery(ISaveRequestHandler handler, SqlQuery query) { }
    public void OnReturn(IDeleteRequestHandler handler) { }
    public void OnReturn(IRetrieveRequestHandler handler) { }
    public void OnReturn(IListRequestHandler handler) { }
    public void OnReturn(ISaveRequestHandler handler) { }
    public void OnValidateRequest(IRetrieveRequestHandler handler) { }
    public void OnValidateRequest(IListRequestHandler handler) { }
}