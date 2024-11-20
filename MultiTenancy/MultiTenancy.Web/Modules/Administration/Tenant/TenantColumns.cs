using Serenity.ComponentModel;
using System.ComponentModel;

namespace MultiTenancy.Modules.Administration.Tenant;

[ColumnsScript("Adminstration.Tenant")]
[BasedOnRow(typeof(TenantRow), CheckNames = true)]
public class TenantColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int TenantId { get; set; }
    [EditLink]
    public string TenantName { get; set; }
}