using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<MultiTenancy.Modules.Administration.Tenant.TenantRow>;
using MyRow = MultiTenancy.Modules.Administration.Tenant.TenantRow;

namespace MultiTenancy.Modules.Administration.Tenant.RequestHandlers;

public interface ITenantListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class TenantListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ITenantListHandler
{
    public TenantListHandler(IRequestContext context)
            : base(context)
    {
    }
}