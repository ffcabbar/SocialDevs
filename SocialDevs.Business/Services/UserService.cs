using SocialDevs.Business.Interfaces;
using SocialDevs.Entities.Entities;
using SocialDevs.Repository.Extensions;
using SocialDevs.Repository.Generic;
using SocialDevs.Repository.UnitOfWork;
using System.Linq;

namespace SocialDevs.Business.Services
{
    public class UserService : IUserService
    {
        #region Ctor
        private readonly IRepository<AppUser> _userRepository;
        private readonly IUnitOfWork _unitOfWork;

        public UserService(IUnitOfWork unitOfWork,
            IRepository<AppUser> userRepository)
        {
            _userRepository = userRepository;
            _unitOfWork = unitOfWork;
        }
        #endregion

        public AppUser FindByUserName(string username)
        {
            return _userRepository.Find(x => x.UserName == username, x => x.Include(t => t.UserDetail)).FirstOrDefault();
        }
    }
}
