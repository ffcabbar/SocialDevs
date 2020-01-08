using Microsoft.AspNetCore.Mvc;
using SocialDevs.Domain.Api;
using SocialDevs.Domain.Common;
using System.Net;

namespace SocialDevs.Api.Controllers
{
    [Route("api/[controller]")]
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class BaseController : Controller
    {
        public ResultModel Result;

        public BaseController()
        {
            Result = ResultModel.Success();
        }

        protected JsonResult OkResponse<T>(T data) where T : class
        {
            var response = Response<T>.Create(HttpStatusCode.OK, data);

            return Json(response);
        }

        protected JsonResult BadResponse<T>(T data) where T : class
        {
            var response = Response<T>.Create(HttpStatusCode.BadRequest, data);

            return Json(response);
        }
    }
}
