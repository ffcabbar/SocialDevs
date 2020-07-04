using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.Net.Http.Headers;
using SocialDevs.Api.Configuration;
using SocialDevs.Core.Attributes;
using SocialDevs.Core.Middleware;
using System.Linq;

namespace SocialDevs.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            //DbContext
            services.AddMyDbContext(Configuration);
            //Swagger
            services.AddMySwagger();
            //Services
            services.AddMyServices();
            //Auth
            services.AddMyAuth(Configuration);

            services.AddResponseCompression(
               options => options.MimeTypes = ResponseCompressionDefaults.MimeTypes.Concat(new[]
                               {
                                    "image/jpeg",
                                    "image/png",
                                    "image/gif"
                               }));

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "SocialDevsSpa/build";
            });

            services.AddMvc(opt =>
            {
                opt.EnableEndpointRouting = false;
                opt.Filters.Add(typeof(ValidateModelAttribute));
            });
            //.AddFluentValidation(fvc => fvc.RegisterValidatorsFromAssemblyContaining<Startup>());

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseMiddleware<ErrorHandlingMiddleware>();

            app.UseAuthentication();

            app.UseHttpsRedirection()
           .UseResponseCompression()
           .UseStaticFiles(new StaticFileOptions
           {
               // 6 hour cache
               OnPrepareResponse =
                   _ => _.Context.Response.Headers[HeaderNames.CacheControl] = "public,max-age=21600"
           })
           .UseSpaStaticFiles();

            app.UseMySwagger();

            app.UseMvc()
             .UseSpa(spa =>
             {
                 spa.Options.SourcePath = "SocialDevsSpa";

                 if (env.IsDevelopment())
                 {
                     spa.UseReactDevelopmentServer(npmScript: "start");
                 }
             });
        }
    }
}
