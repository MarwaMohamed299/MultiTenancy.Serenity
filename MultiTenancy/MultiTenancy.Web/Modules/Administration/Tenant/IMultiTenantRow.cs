namespace MultiTenancy.Modules.Administration.Tenant;

public interface IMultiTenantRow
{
    Int32Field TenantIdField { get; }
}
