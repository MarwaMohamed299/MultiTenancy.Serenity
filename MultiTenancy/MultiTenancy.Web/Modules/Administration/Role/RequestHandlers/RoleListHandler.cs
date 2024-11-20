using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<MultiTenancy.Administration.RoleRow>;
using MyRow = MultiTenancy.Administration.RoleRow;


namespace MultiTenancy.Administration;
public interface IRoleListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class RoleListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IRoleListHandler
{
    public RoleListHandler(IRequestContext context)
         : base(context)
    {
    }
}