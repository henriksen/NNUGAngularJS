using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using NNUGAngularJS.Models;

namespace NNUGAngularJS.Controllers
{
    public class TaskController : ApiController
    {
        // GET api/values
        public IEnumerable<Task> Get()
        {
            return new Task[]
                {
                    new Task { Name="Do stuff", Done = true},
                    new Task { Name="Do more stuff"},
                    new Task { Name="Do all the stuff"},
                };
        }


    }
}