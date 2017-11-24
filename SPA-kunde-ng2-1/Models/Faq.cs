using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SPA_kunde_ng2.Models
{
    public enum Category
    {
        Bestilling,
        Reiseinformasjon,
        Spesialbehov,
        Bagasje,
        Innsjekk
    }
    public class Faq
    {
        [Key]
            public int FaqId { get; set; }
            
            public DateTime Date { get; set; }
           
            public Category Category { get; set; }
         
            public string Question { get; set; }
            public string Answer { get; set; }
        
    }
}