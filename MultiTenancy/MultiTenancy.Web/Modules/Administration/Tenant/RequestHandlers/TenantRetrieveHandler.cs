using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<MultiTenancy.Modules.Administration.Tenant.TenantRow>;
using MyRow = MultiTenancy.Modules.Administration.Tenant.TenantRow;

namespace MultiTenancy.Modules.Administration.Tenant.RequestHandlers;

public interface ITenantRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class TenantRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ITenantRetrieveHandler
{
    public TenantRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}