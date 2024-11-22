namespace MultiTenancy.Administration;

[ConnectionKey("Default"), Module("Administration"), TableName("Roles")]
[DisplayName("Roles"), InstanceName("Role")]
[ReadPermission(PermissionKeys.Security)]
[ModifyPermission(PermissionKeys.Security)]
[LookupScript]
public sealed class RoleRow : Row<RoleRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Role Id"), Identity, ForeignKey("Roles", "RoleId"), LeftJoin("jRole"), IdProperty]
    public int? RoleId { get => fields.RoleId[this]; set => fields.RoleId[this] = value; }

    [DisplayName("Role Name"), Size(100), NotNull, QuickSearch, NameProperty]
    public string RoleName { get => fields.RoleName[this]; set => fields.RoleName[this] = value; }
    [Insertable(false), Updatable(false)]
    public int? TenantId
    {
        get => Fields.TenantId[this];
        set => Fields.TenantId[this] = value;
    }
    public Int32Field TenantIdField
    {
        get => Fields.TenantId;
    }

    public class RowFields : RowFieldsBase
    {
        public Int32Field RoleId;
        public StringField RoleName;
        public Int32Field TenantId;

    }
}