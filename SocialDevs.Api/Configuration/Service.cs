using Microsoft.Extensions.DependencyInjection;
using SocialDevs.Business.Interfaces;
using SocialDevs.Business.Services;
using SocialDevs.Core.Security;
using SocialDevs.Repository.Generic;
using SocialDevs.Repository.UnitOfWork;

namespace SocialDevs.Api.Configuration
{
    public static class Service
    {
        /// <summary>
        /// When the program runs, services are injected.
        /// </summary>
        /// <param name="services"></param>
        public static void AddMyServices(this IServiceCollection services)
        {
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
            services.AddScoped<IPostService, PostService>();
            services.AddScoped<ITokenService, TokenService>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IUserDetailService, UserDetailService>();

        }
    }
}
