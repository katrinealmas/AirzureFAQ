using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SPA_kunde_ng2.Models
{
    public class QuestionViewModel
    {
        public int Id { get; set; }
        [Required]
        [RegularExpression("[a-zA-ZøæåØÆÅ\\-. ]{2,30}$")]
        public string Name { get; set; }
        public string Date { get; set; }
        [Required]
        [RegularExpression(".+\\@.+\\..+")]
        public string Email { get; set; }
        [Required]
        [RegularExpression("[0-9a-zA-ZøæåØÆÅ\\-.\\? ]{2,300}")]
        public string Question { get; set; }
        
        public string Answer { get; set; }
    }
}