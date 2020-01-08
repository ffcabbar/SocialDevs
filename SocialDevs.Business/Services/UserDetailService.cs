using SocialDevs.Business.Interfaces;
using SocialDevs.Domain.Common;
using SocialDevs.Domain.Dto;
using SocialDevs.Entities.Entities;
using SocialDevs.Repository.Generic;
using SocialDevs.Repository.UnitOfWork;
using System;

namespace SocialDevs.Business.Services
{
    public class UserDetailService : IUserDetailService
    {
        #region Ctor
        private readonly IRepository<AppUserDetail> _appUserDetailRepository;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IPostService _postService;
        private readonly IUserService _userService;

        public UserDetailService(IUnitOfWork unitOfWork,
            IRepository<AppUserDetail> appUserDetailRepository,
            IPostService postService,
            IUserService userService)
        {
            _appUserDetailRepository = appUserDetailRepository;
            _unitOfWork = unitOfWork;
            _postService = postService;
            _userService = userService;
        }

        #endregion

        public AppUserDetailDto GetUserDetailByUsername(string username)
        {
            if (!string.IsNullOrEmpty(username))
            {
                var appUser = _userService.FindByUserName(username);
                if (appUser != null)
                {
                    AppUserDetailDto postListDto = new AppUserDetailDto
                    {
                        Id = appUser.Id,
                        UserName = appUser.UserName,
                        UserPosts = _postService.GetUserPostsWithDto(appUser.Id),
                        CoverPhotoUrl = appUser.UserDetail.CoverPhotoPath ?? null,
                        ProfilePhotoUrl = appUser.UserDetail.ProfilePhotoPath ?? null,
                        RegisteredDate = appUser.CreatedDate
                    };
                    return postListDto;
                }
                else
                {
                    return null;
                }
            }
            return null;
        }

        public ResultModel Create(AppUserDetail appUserDetail)
        {
            try
            {
                _appUserDetailRepository.Create(appUserDetail);
                _unitOfWork.Commit();
                return new ResultModel { Status = true, Message = "Create Process Success ! " };
            }
            catch (Exception ex)
            {
                return new ResultModel { Status = false, Message = ex.ToString() };
            }

        }
    }
}
