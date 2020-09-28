using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookListManagement.Pages.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace BookListManagement.Pages.BookList
{
    public class CreateModel : PageModel
    {
        private readonly dbcontext _db;
        public CreateModel(dbcontext db)
        {
            _db = db;
        }
        [BindProperty]
        public Book Book { get; set; }
        public void OnGet()
        {

        }
        public async Task<IActionResult> OnPost()
        {
            if(ModelState.IsValid)
            {
                await _db.Book.AddAsync(Book);
                await _db.SaveChangesAsync();
                return RedirectToPage("Index");
            }
            else
            {
                return Page();
            }

        }
    }
}
