using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Course.api.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    [Produces("application/json")]
    public class BaseController:ControllerBase
    {
        public BaseController()
        {

        }

        [HttpGet]
        public IActionResult GetTest()
        {
            return Ok("Hello World");
        }
    }
}
