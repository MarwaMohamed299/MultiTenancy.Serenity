using MyRepository = MultiTenancy.Administration.Repositories.RolePermissionRepository;
using MyRow = MultiTenancy.Administration.RolePermissionRow;

namespace MultiTenancy.Administration.Endpoints;
[Route("Services/Administration/RolePermission/[action]")]
[ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
public class RolePermissionEndpoint : ServiceEndpoint
{

    [HttpPost, AuthorizeUpdate(typeof(MyRow))]
    public SaveResponse Update(IUnitOfWork uow, RolePermissionUpdateRequest request,
    [FromServices] ITypeSource typeSource,
    [FromServices] ISqlConnections sqlConnections)
    {
        return new MyRepository(Context, typeSource, sqlConnections).Update(uow, request);
    }

    public RolePermissionListResponse List(IDbConnection connection, RolePermissionListRequest request,
        [FromServices] ITypeSource typeSource,
        [FromServices] ISqlConnections sqlConnections)
    {
        return new MyRepository(Context, typeSource, sqlConnections).List(connection, request);
    }
}
