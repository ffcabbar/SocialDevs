using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SocialDevs.Api.Configuration
{
    public static class Validator
    {
        public static void AddMyValidator(this IServiceCollection services)
        {
            //services.AddSingleton<IValidator<LoginApiRequest>, LoginApiRequestValidator>();
            //services.AddSingleton<IValidator<PostCreateApi>, PostCreateApiValidator>();
        }
    }
}
