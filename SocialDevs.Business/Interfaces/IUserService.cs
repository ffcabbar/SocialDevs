using SocialDevs.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace SocialDevs.Business.Interfaces
{
    public interface IUserService
    {
        /// <summary>
        /// Returns a user by username
        /// </summary>
        /// <param name="username"></param>
        /// <returns></returns>
        AppUser FindByUserName(string username);
    }
}
