using System;
using System.Transactions;
using Microsoft.AspNetCore.Mvc;
using SocialDevs.Business.Interfaces;
using SocialDevs.Domain.Api;
using SocialDevs.Domain.Common;
using SocialDevs.Domain.Dto;
using SocialDevs.Entities.Entities;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SocialDevs.Api.Controllers
{
    public class PostController : BaseController
    {
        #region Ctor
        private readonly IPostService _postService;

        public PostController(IPostService postService)
        {
            _postService = postService;
        }

        #endregion

        [HttpPost("createpost")]
        public JsonResult CreatePost([FromBody] PostCreateApi model)
        {
            using (var scope = new TransactionScope(TransactionScopeAsyncFlowOption.Enabled))
            {
                try
                {
                    if (model.Text == null)
                    {
                        Result.Status = false;
                        Result.Message = "You can not add a post without writing text ! ";
                        return BadResponse(Result);
                    }

                    #region CRUD

                    var newPost = new Post
                    {
                        Text = model.Text,
                    };
                    ResultModel postModel = _postService.Create(newPost);

                    if (!postModel.Status)
                    {
                        scope.Dispose();
                        return BadResponse(ResultModel.Error("The upload process can not be done !"));
                    }

                    #endregion

                    scope.Complete();
                    //TODO
                    //There must be an integration that returns the last post that has just been createad.

                    return OkResponse(new PostListDto
                    {
                        Id = newPost.Id,
                        Text = newPost.Text,
                        CreatedDate = newPost.CreatedDate,
                        Comments = null
                    });
                }
                catch (Exception ex)
                {
                    scope.Dispose();
                    Result.Status = false;
                    Result.Message = ex.ToString();
                    return BadResponse(Result);
                }
            }
        }


        [HttpGet("getallposts")]
        public JsonResult GetPostLists()
        {
            var data = _postService.GetPostList();
            return OkResponse(data);
        }
    }
}
