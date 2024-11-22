namespace MultiTenancy.Modules.Administration.Tenant;

public class MultiTenantRowLookupScript<TRow> :
            RowLookupScript<TRow>
            where TRow : class, IRow, IMultiTenantRow, new()
{
    public ITwoLevelCache TwoLevelCache { get; }
    public IUserAccessor UserAccessor { get; }

    public MultiTenantRowLookupScript(ISqlConnections sqlConnections, ITwoLevelCache twoLevelCache, IUserAccessor userAccessor) : base(sqlConnections)
    {
        Expiration = TimeSpan.FromDays(-1);
        TwoLevelCache = twoLevelCache ?? throw new ArgumentNullException(nameof(twoLevelCache));
        UserAccessor = userAccessor ?? throw new ArgumentNullException(nameof(userAccessor));
    }

    protected override void PrepareQuery(SqlQuery query)
    {
        base.PrepareQuery(query);
        AddTenantFilter(query);
    }

    protected void AddTenantFilter(SqlQuery query)
    {
        var r = new TRow();
        query.Where(r.TenantIdField == UserAccessor.User.GetTenantId());
    }

    public override string GetScript()
    {
        return TwoLevelCache.GetLocalStoreOnly("MultiTenantLookup:" +
                this.ScriptName + ":" +
                UserAccessor.User.GetTenantId(),
                TimeSpan.FromHours(1),
            new TRow().GetFields().GenerationKey, () =>
            {
                return base.GetScript();
            });
    }
}