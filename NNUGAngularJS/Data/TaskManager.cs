using System.Data.Entity;
using NNUGAngularJS.Models;

namespace NNUGAngularJS.Data
{
    public class TaskManager : DbContext
    {
        public DbSet<Task> Tasks { get; set; }
    }
}