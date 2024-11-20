using Serenity.ComponentModel;

namespace MultiTenancy.Modules.Administration.Tenant;

[FormScript("Adminstration.Tenant")]
[BasedOnRow(typeof(TenantRow), CheckNames = true)]
public class TenantForm
{
    public string TenantName { get; set; }
}