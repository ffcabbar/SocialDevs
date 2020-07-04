using SocialDevs.Domain.Api;
using SocialDevs.Domain.Dto;
using System.Collections.Generic;
using System.Security.Claims;

namespace SocialDevs.Core.Security
{
    public interface ITokenService
    {
        TokenUserResponse GenerateToken(AppUserDto appUserDto);
        string GenerateAccessToken(IEnumerable<Claim> claims);
        string GenerateRefreshToken();
    }
}
