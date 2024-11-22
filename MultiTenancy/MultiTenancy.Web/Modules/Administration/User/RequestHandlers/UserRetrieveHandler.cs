using MultiTenancy.Modules.Administration;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<MultiTenancy.Administration.UserRow>;
using MyRow = MultiTenancy.Administration.UserRow;


namespace MultiTenancy.Administration;
public interface IUserRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }
public class UserRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IUserRetrieveHandler
{
    public UserRetrieveHandler(IRequestContext context)
         : base(context)
    {
    }
    protected override void PrepareQuery(SqlQuery query)
    {
        base.PrepareQuery(query);

        if (!Permissions.HasPermission(PermissionKeys.Tenants))
            query.Where(MyRow.Fields.TenantId == User.GetTenantId());
    }
}