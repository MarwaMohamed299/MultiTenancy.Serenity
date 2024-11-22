using System.Security.Claims;
using System.Security.Principal;
using MyRow = MultiTenancy.Administration.UserRow;

namespace MultiTenancy.AppServices;
public class UserRetrieveService(ITwoLevelCache cache, ISqlConnections sqlConnections)
    : BaseUserRetrieveService<MyRow>(cache, sqlConnections)
{
    protected override UserDefinition ToUserDefinition(MyRow user)
    {
        return new UserDefinition
        {
            UserId = user.UserId.Value,
            Username = user.Username,
            Email = user.Email,
            UserImage = user.UserImage,
            DisplayName = user.DisplayName,
            IsActive = user.IsActive.Value,
            Source = user.Source,
            PasswordHash = user.PasswordHash,
            PasswordSalt = user.PasswordSalt,
            UpdateDate = user.UpdateDate,
            LastDirectoryUpdate = user.LastDirectoryUpdate,
            TenantId = user.TenantId.Value

        };
    }
    public static ClaimsPrincipal CreatePrincipal(IUserRetrieveService userRetriever, string username, string authType)
    {
        if (userRetriever is null)
            throw new ArgumentNullException(nameof(userRetriever));

        if (username is null)
            throw new ArgumentNullException(nameof(username));

        var user = (UserDefinition)userRetriever.ByUsername(username);
        if (user == null)
            throw new ArgumentOutOfRangeException(nameof(username));

        if (authType == null)
            throw new ArgumentNullException(nameof(authType));

        var identity = new GenericIdentity(username, authType);
        identity.AddClaim(new Claim(ClaimTypes.NameIdentifier, user.Id));
        identity.AddClaim(new Claim("TenantId", user.TenantId.ToInvariant())); // add tenant id claim

        return new ClaimsPrincipal(identity);
    }
}