using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<MultiTenancy.Modules.Administration.Tenant.TenantRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = MultiTenancy.Modules.Administration.Tenant.TenantRow;

namespace MultiTenancy.Modules.Administration.Tenant.RequestHandlers;

public interface ITenantSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class TenantSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ITenantSaveHandler
{
    public TenantSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}