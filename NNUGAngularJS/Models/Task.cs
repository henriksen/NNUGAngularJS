using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace NNUGAngularJS.Models
{
    public class Task
    {
        [JsonProperty(PropertyName = "id")]
        public int Id { get; set; }
        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }
        [JsonProperty(PropertyName = "description")]
        public string Description { get; set; }
        [JsonProperty(PropertyName = "done")]
        public bool Done { get; set; }
    }
}