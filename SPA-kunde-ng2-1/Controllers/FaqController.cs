using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SPA_kunde_ng2.Models;
using System.Web.Script.Serialization;
using System.Text;
using log4net;
using System.Reflection;

namespace SPA_kunde_ng2.Controllers
{
    public class FaqController : ApiController
    {
 
            private DB db = new DB();
            private readonly ILog log = LogManager.GetLogger(MethodBase.GetCurrentMethod().DeclaringType);

        // GET api/Faq
        public HttpResponseMessage Get()
            {
            // List<FaqViewModel> faq = db.getCategories();
            List<string> categories = new List<string>();
            categories.Add(Category.Bagasje.ToString());
            categories.Add(Category.Bestilling.ToString());
            categories.Add(Category.Innsjekk.ToString());
            categories.Add(Category.Spesialbehov.ToString());
            categories.Add(Category.Reiseinformasjon.ToString());

            var Json = new JavaScriptSerializer();
                string JsonString = Json.Serialize(categories);
            log.Debug("Get " + categories);

            return new HttpResponseMessage()
                {
                    Content = new StringContent(JsonString, Encoding.UTF8, "application/json"),
                    StatusCode = HttpStatusCode.OK
                };
            }


            // GET api/Faq/5
            public HttpResponseMessage Get(string id)
            {
            Category var = (Category)Enum.Parse(typeof(Category), id);
            log.Debug("Get in FAQ" + var);
            List<FaqViewModel> allFaq = db.getCategoryContent(var);


                var Json = new JavaScriptSerializer();
                string JsonString = Json.Serialize(allFaq);
            


            return new HttpResponseMessage()
                {
                    Content = new StringContent(JsonString, Encoding.UTF8, "application/json"),
                    StatusCode = HttpStatusCode.OK
                };
            }
        }
    }

