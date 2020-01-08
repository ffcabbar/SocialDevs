using SocialDevs.Business.Interfaces;
using SocialDevs.Domain.Common;
using SocialDevs.Domain.Dto;
using SocialDevs.Entities.Entities;
using SocialDevs.Repository.Extensions;
using SocialDevs.Repository.Generic;
using SocialDevs.Repository.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SocialDevs.Business.Services
{
    public class PostService : IPostService
    {
        #region Ctor
        private readonly IRepository<Post> _postRepository;
        private readonly IUnitOfWork _unitOfWork;

        public PostService(IUnitOfWork unitOfWork,
            IRepository<Post> postRepository)
        {
            _postRepository = postRepository;
            _unitOfWork = unitOfWork;
        }

        #endregion

        public ResultModel Create(Post createPost)
        {
            try
            {
                _postRepository.Create(createPost);
                _unitOfWork.Commit();
                return new ResultModel { Status = true, Message = "Create Process Success ! " };
            }
            catch (Exception ex)
            {
                return new ResultModel { Status = false, Message = ex.ToString() };
            }
        }

        public IEnumerable<PostListDto> GetPostList()
        {
            IEnumerable<PostListDto> data = _postRepository.GetList(null, x => x.Include(y => y.PostImages)
            .Include(a => a.PostVideos).Include(comment => comment.PostComments)
            .ThenInclude(tr => tr.CreatedUser).ThenInclude(hg => hg.UserDetail)
            .Include(s => s.CreatedUser).ThenInclude(t => t.UserDetail))
                .Select(p => new PostListDto
                {
                    Id = p.Id,
                    Text = p.Text,
                    CreatedDate = p.CreatedDate,
                    ImageUrl = p.PostImages.Count() == 0 ? "" : p.PostImages.FirstOrDefault().ImageUrl, //TODO It can be more photos of the post
                    VideoUrl = p.PostVideos.Count() == 0 ? "" : p.PostVideos.FirstOrDefault().VideoUrl, //TODO It can be more videos of the post
                    CreatedByUserName = p.CreatedUser == null ? "" : p.CreatedUser.UserName,
                    CreatedByUserPhoto = p.CreatedUser == null ? "" : p.CreatedUser.UserDetail.ProfilePhotoPath,
                    PostType = p.PostType,
                    Comments = p.PostComments.ToList().Select(y => new PostCommentListDto
                    {
                        Text = y.Text,
                        CreatedDate = y.CreatedDate,
                        Id = y.Id,
                        CreatedByUserName = y.CreatedUser.UserName,
                        CreatedByUserPhoto = y.CreatedUser.UserDetail.ProfilePhotoPath,
                        PostId = y.PostId
                    }).ToList()

                    //TODO
                }).OrderByDescending(sa => sa.CreatedDate).AsEnumerable();

            return data;
        }

        public IEnumerable<PostListDto> GetUserPostsWithDto(int userId)
        {
            IEnumerable<PostListDto> data = _postRepository.GetList(y => y.CreatedBy == userId, x => x.Include(y => y.PostImages)
              .Include(a => a.PostVideos).Include(comment => comment.PostComments)
              .ThenInclude(tr => tr.CreatedUser).ThenInclude(hg => hg.UserDetail)
              .Include(s => s.CreatedUser).ThenInclude(t => t.UserDetail))
              .Select(p => new PostListDto
              {
                  Id = p.Id,
                  Text = p.Text,
                  CreatedDate = p.CreatedDate,
                  ImageUrl = p.PostImages.Count() == 0 ? "" : p.PostImages.FirstOrDefault().ImageUrl, //TODO It can be more photos of the post
                  VideoUrl = p.PostVideos.Count() == 0 ? "" : p.PostVideos.FirstOrDefault().VideoUrl, //TODO It can be more videos of the post
                  CreatedByUserName = p.CreatedUser == null ? "" : p.CreatedUser.UserName,
                  CreatedByUserPhoto = p.CreatedUser == null ? "" : p.CreatedUser.UserDetail.ProfilePhotoPath,
                  PostType = p.PostType,
                  Comments = p.PostComments.ToList().Select(y => new PostCommentListDto
                  {
                      Text = y.Text,
                      CreatedDate = y.CreatedDate,
                      Id = y.Id,
                      CreatedByUserName = y.CreatedUser.UserName,
                      CreatedByUserPhoto = y.CreatedUser.UserDetail.ProfilePhotoPath,
                      PostId = y.PostId
                  }).ToList()

                  //TODO
              }).OrderByDescending(sa => sa.CreatedDate).AsEnumerable();

            return data;
        }
    }
}
