using Microsoft.AspNetCore.Http;

namespace SocialDevs.Domain.Api
{
    public class PostCreateApi
    {
        public string Text { get; set; }
        public IFormFile Photo { get; set; }
        public IFormFile Video { get; set; }
    }
}
