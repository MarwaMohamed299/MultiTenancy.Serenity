using MyRequest = MultiTenancy.Administration.UserListRequest;
using MyResponse = Serenity.Services.ListResponse<MultiTenancy.Administration.UserRow>;
using MyRow = MultiTenancy.Administration.UserRow;

namespace MultiTenancy.Administration;
public interface IUserListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class UserListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IUserListHandler
{
    public UserListHandler(IRequestContext context)
         : base(context)
    {
    }
    //protected override void ApplyFilters(SqlQuery query)
    //{
    //    base.ApplyFilters(query);

    //    if (Permissions.HasPermission(PermissionKeys.Tenants))
    //        return;

    //    //query.Where(MyRow.Fields.TenantId == User.GetTenantId());
    //}
}