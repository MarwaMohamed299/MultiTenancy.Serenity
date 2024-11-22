using System.Security.Claims;
using System.Security.Principal;

namespace MultiTenancy.Modules.Administration;

public static class ClaimsPrincipalExtensions
{
    public static int GetTenantId(this ClaimsPrincipal user)
    {
        if (user == null)
            throw new ArgumentNullException(nameof(user));

        var tenantClaim = user.Claims.FirstOrDefault(x => x.Type == "TenantId");
        if (tenantClaim == null)
            throw new NullReferenceException("TenantId claim not found");

        return int.Parse(tenantClaim.Value);
    }

    public static ClaimsPrincipal CreatePrincipal(IUserRetrieveService userRetriever, string username, string authType)
    {
        if (userRetriever is null)
            throw new ArgumentNullException(nameof(userRetriever));

        if (username is null)
            throw new ArgumentNullException(nameof(username));

        // Retrieve the user object using the username
        var user = (UserDefinition)userRetriever.ByUsername(username);
        if (user == null)
            throw new ArgumentOutOfRangeException(nameof(username));

        if (authType == null)
            throw new ArgumentNullException(nameof(authType));

        // Create a new GenericIdentity using the username and authentication type
        var identity = new GenericIdentity(username, authType);

        // Add standard claims such as NameIdentifier
        identity.AddClaim(new Claim(ClaimTypes.NameIdentifier, user.Id));

        // Add the TenantId claim here
        identity.AddClaim(new Claim("TenantId", user.TenantId.ToInvariant()));


        // Return the ClaimsPrincipal with the created identity and associated claims
        return new ClaimsPrincipal(identity);
    }
}

