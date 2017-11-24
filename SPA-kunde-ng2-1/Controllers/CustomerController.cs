using log4net;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Reflection;
using System.Text;
using System.Web.Http;
using System.Web.Script.Serialization;
using SPA_kunde_ng2.Models;

namespace SPA_kunde_ng2.Controllers
{
    public class CustomerController : ApiController
    {
        private DB db = new DB();
        private readonly ILog log = LogManager.GetLogger(MethodBase.GetCurrentMethod().DeclaringType);

        // GET api/UserController
        public HttpResponseMessage Get()
        {
            List<QuestionViewModel> faq = db.getAllUserQuestions();

            var Json = new JavaScriptSerializer();
            string JsonString = Json.Serialize(faq);

            return new HttpResponseMessage()
            {
                Content = new StringContent(JsonString, Encoding.UTF8, "application/json"),
                StatusCode = HttpStatusCode.OK
            };
        }

        // POST api/UserController
        [HttpPost]
        public HttpResponseMessage Post(QuestionViewModel question)
        {
            if (question == null)
            {
                throw new ArgumentNullException(nameof(question));
            }

            if (ModelState.IsValid)
            {
                if (db.AddUserQuestion(question))
                {
                    return new HttpResponseMessage()
                    {
                        StatusCode = HttpStatusCode.OK
                    };
                }
            }
            return new HttpResponseMessage()
            {
                StatusCode = HttpStatusCode.BadRequest,
                Content = new StringContent("Kunne ikke registrere spørsmålet")
            };
        }
    }
}
