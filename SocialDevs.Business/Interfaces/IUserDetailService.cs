using SocialDevs.Domain.Common;
using SocialDevs.Domain.Dto;
using SocialDevs.Entities.Entities;

namespace SocialDevs.Business.Interfaces
{
    public interface IUserDetailService
    {
        /// <summary>
        /// Returns a user detail by username
        /// </summary>
        /// <param name="username"></param>
        /// <returns></returns>
        AppUserDetailDto GetUserDetailByUsername(string username);

        /// <summary>
        /// Creates a user detail
        /// </summary>
        /// <param name="appUserDetail"></param>
        ResultModel Create(AppUserDetail appUserDetail);
    }
}
