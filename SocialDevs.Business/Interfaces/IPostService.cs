using SocialDevs.Domain.Common;
using SocialDevs.Domain.Dto;
using SocialDevs.Entities.Entities;
using System.Collections.Generic;

namespace SocialDevs.Business.Interfaces
{
    public interface IPostService
    {
       /// <summary>
       /// Creates a post.
       /// </summary>
       /// <param name="createPost"></param>
       /// <returns></returns>
        ResultModel Create(Post createPost);

        /// <summary>
        /// Returns the post lists
        /// </summary>
        /// <returns></returns>
        IEnumerable<PostListDto> GetPostList();


        /// <summary>
        /// Returns posts of a user by userId with dto
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        IEnumerable<PostListDto> GetUserPostsWithDto(int userId);
    }
}
