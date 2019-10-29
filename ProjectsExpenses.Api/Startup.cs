using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using ProjectsExpenses.API.Models;
using AutoMapper;
using Newtonsoft.Json.Schema;
using Microsoft.AspNetCore.Identity;

namespace ProjectsExpenses.Api
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
            services.AddIdentity<ApplicationUser, IdentityRole>(options =>
                options.Password = new PasswordOptions {
                    RequiredLength = 8,
                    RequireUppercase = false,
                    RequireNonAlphanumeric = false,
                    RequireLowercase = false,
                    RequireDigit = false,
                    RequiredUniqueChars = 0
                })
                .AddEntityFrameworkStores<DataContext>()
                .AddDefaultTokenProviders();
            services.AddControllers(options => 
                options.Filters.Add(new AutoValidateAntiforgeryTokenAttribute()));
            services.AddDbContext<DataContext>(x => x.UseSqlite(Configuration.GetConnectionString("DefaultConnection")));
            services.AddAutoMapper(typeof(Startup));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseAuthentication();
            
            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
