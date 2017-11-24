using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace SPA_kunde_ng2.Models
{
        public class FaqContext : DbContext
        {
            public FaqContext() : base("name=Customerservice")
            {

            Database.SetInitializer(new DbInitialize());
        }


            public DbSet<Faq> Faq { get; set; }
            public DbSet<UserQuestion> Question { get; set; }

            protected override void OnModelCreating(DbModelBuilder modelBuilder)
            {
                modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

            }
        }
    }
