using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SPA_kunde_ng2.Models;
using log4net;
using System.Reflection;

namespace SPA_kunde_ng2
{
        public class DB
        {
        private readonly ILog log = LogManager.GetLogger(MethodBase.GetCurrentMethod().DeclaringType);
        public List<FaqDomainModel> getAllAnswers()
            {
                    using (var db = new FaqContext())
                    {
                        List<Faq> faq = (from a in db.Faq
                                                select a).ToList();

                        List<FaqDomainModel> allAnswers = new List<FaqDomainModel>();
                        faq.ForEach(c => allAnswers.Add(new FaqDomainModel
                        {
                            Question = c.Question,
                            Answer = c.Answer
                        }));
                log.Error("getAllAnswers" + allAnswers);
                    return allAnswers;
                    }
                }
                
            

            public List<UserQuestionDomainModel> getAllUserQuestions()
            {
                
                    using (var db = new FaqContext())
                    {
                        List<UserQuestion> queryResult = (from a in db.Question
                                                           select a).ToList();

                    List<UserQuestionDomainModel> allAnswers = new List<UserQuestionDomainModel>();

                queryResult.ForEach(c => allAnswers.Add(new UserQuestionDomainModel
                {
                        Id = c.Id,
                        Name = c.Name,
                        Email = c.Email,
                        Date = c.Date.ToShortDateString(),
                        Question = c.Question,
                        Answer = c.Answer
                    }));
                log.Error("Failed to get Airports");
                return allAnswers;
                    }
                }
              

            public List<FaqDomainModel> getCategoryContent(Category category)
            {
              
                    using (var db = new FaqContext())
                    {
                        
                        List<Faq> faq = db.Faq.Where(o => o.Category == category).ToList();
                        List<FaqDomainModel> categoryContent = new List<FaqDomainModel>();
                        faq.ForEach(c => categoryContent.Add(new FaqDomainModel
                    {
                        Category = category.ToString(),
                        Question = c.Question,
                        Answer = c.Answer
                    }));
                log.Error("getCategory" + categoryContent);
                return categoryContent;
                    }
                }

            

            public bool AddUserQuestion(UserQuestionDomainModel question)
            {
            
                using (var db = new FaqContext())
                {

                db.Question.Add(new UserQuestion {
                    Name = question.Name,
                    Date = DateTime.Now,
                    Email = question.Email,
                    Question = question.Question
                 });
                    db.SaveChanges();
                    log.Debug("AddUserQuestionDb");
                    return true;
                    }
                
            }
        }
    }
