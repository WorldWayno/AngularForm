using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularForm.Startup))]
namespace AngularForm
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
