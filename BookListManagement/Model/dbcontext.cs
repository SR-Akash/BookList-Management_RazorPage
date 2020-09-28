using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookListManagement.Pages.Model
{
    public class dbcontext:DbContext
    {
        public dbcontext(DbContextOptions<dbcontext>options) : base (options)
        {

        }
        public DbSet<Book> Book { get; set; }
    }
}
