using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SPA_kunde_ng2.Models;
using System.Web.Script.Serialization;
using System.Text;

namespace SPA_kunde_ng2.Controllers
{
    public class SearchController : ApiController
    {
        private DB db = new DB();

        // GET api/search
        public HttpResponseMessage Get()
        {
            List<FaqViewModel> faq = db.getAllAnswers();

            var Json = new JavaScriptSerializer();
            string JsonString = Json.Serialize(faq);

            return new HttpResponseMessage()
            {
                Content = new StringContent(JsonString, Encoding.UTF8, "application/json"),
                StatusCode = HttpStatusCode.OK
            };
        }

    }
}
