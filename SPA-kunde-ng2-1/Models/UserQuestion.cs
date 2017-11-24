using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SPA_kunde_ng2.Models
{
    public class UserQuestion
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public string Email { get; set; }
        public string Question { get; set; }
        public string Answer { get; set; }
    }
}