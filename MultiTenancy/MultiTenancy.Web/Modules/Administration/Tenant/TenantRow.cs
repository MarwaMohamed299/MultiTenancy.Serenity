using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace MultiTenancy.Modules.Administration.Tenant;

[ConnectionKey("Default"), Module("Adminstration"), TableName("Tenants")]
[DisplayName("Tenant"), InstanceName("Tenant")]
[ReadPermission("Adminstration:Tenants")]
[ModifyPermission("Adminstration:Tenants")]
[ServiceLookupPermission("Adminstration:Tenants")]
public sealed class TenantRow : Row<TenantRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Tenant Id"), Identity, IdProperty]
    public int? TenantId { get => fields.TenantId[this]; set => fields.TenantId[this] = value; }

    [DisplayName("Tenant Name"), Size(100), NotNull, QuickSearch, NameProperty]
    public string TenantName { get => fields.TenantName[this]; set => fields.TenantName[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field TenantId;
        public StringField TenantName;

    }
}