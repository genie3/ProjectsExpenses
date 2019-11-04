using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectsExpenses.API.Dtos;
using ProjectsExpenses.API.Models;

namespace ProjectsExpenses.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public ProjectsController(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/Projects
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Project>>> GetProjects([FromQuery(Name ="customerId")] int ? CustomerId)
        {
            var projects = await _context.Projects.ToListAsync();
            if (CustomerId != null)
            {
                projects = await _context.Projects.Where(p => p.CustomerID == CustomerId).ToListAsync();
            }

            var result = _mapper.Map<IEnumerable<ProjectsListDto>>(projects);

            return Ok(result);

            
        }

    //    // GET: api/Projects/5
    //    [HttpGet("{id}")]
    //    public async Task<ActionResult<Project>> GetProject(int id)
    //    {
    //        var project = await _context.Projects.FindAsync(id);

    //        if (project == null)
    //        {
    //            return NotFound();
    //        }

    //        return project;
    //    }

    //    // PUT: api/Projects/5
    //    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    //    // more details see https://aka.ms/RazorPagesCRUD.
    //    [HttpPut("{id}")]
    //    public async Task<IActionResult> PutProject(int id, Project project)
    //    {
    //        if (id != project.ID)
    //        {
    //            return BadRequest();
    //        }

    //        _context.Entry(project).State = EntityState.Modified;

    //        try
    //        {
    //            await _context.SaveChangesAsync();
    //        }
    //        catch (DbUpdateConcurrencyException)
    //        {
    //            if (!ProjectExists(id))
    //            {
    //                return NotFound();
    //            }
    //            else
    //            {
    //                throw;
    //            }
    //        }

    //        return NoContent();
    //    }

    //    // POST: api/Projects
    //    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    //    // more details see https://aka.ms/RazorPagesCRUD.
    //    [HttpPost]
    //    public async Task<ActionResult<Project>> PostProject(Project project)
    //    {
    //        _context.Projects.Add(project);
    //        await _context.SaveChangesAsync();

    //        return CreatedAtAction("GetProject", new { id = project.ID }, project);
    //    }

    //    // DELETE: api/Projects/5
    //    [HttpDelete("{id}")]
    //    public async Task<ActionResult<Project>> DeleteProject(int id)
    //    {
    //        var project = await _context.Projects.FindAsync(id);
    //        if (project == null)
    //        {
    //            return NotFound();
    //        }

    //        _context.Projects.Remove(project);
    //        await _context.SaveChangesAsync();

    //        return project;
    //    }

    //    private bool ProjectExists(int id)
    //    {
    //        return _context.Projects.Any(e => e.ID == id);
    //    }
    }
}
