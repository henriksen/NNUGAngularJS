using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using NNUGAngularJS.Data;
using NNUGAngularJS.Models;

namespace NNUGAngularJS.Controllers
{
    public class TaskController : ApiController
    {
        private TaskManager _db = new TaskManager();
        // GET api/task
        public IEnumerable<Task> Get()
        {
            return _db.Tasks.ToList();
        }

        // GET api/task/5
        public Task Get(int id)
        {
            return _db.Tasks.Find(id);
        }

        // POST api/values
        public void Post([FromBody]Task task)
        {
            _db.Tasks.Add(task);
            _db.SaveChanges();
        }

        // POST api/values/5
        public void Post(int id, [FromBody]Task task)
        {
            var editedTask = _db.Tasks.Attach(task);
            _db.Entry(editedTask).State = EntityState.Modified;
            _db.SaveChanges();
        }


    }
}