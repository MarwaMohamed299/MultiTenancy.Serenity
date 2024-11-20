using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace MultiTenancy.Modules.Administration.Tenant;

[PageAuthorize(typeof(TenantRow))]
public class TenantPage : Controller
{
    [Route("Adminstration/Tenant")]
    public ActionResult Index()
    {
        return this.GridPage<TenantRow>("@/Adminstration/Tenant/TenantPage");
    }
}