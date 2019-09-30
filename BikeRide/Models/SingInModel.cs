using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BikeRide.Models
{
    public class SingInModel
    {
        [Required(ErrorMessage = "Please, supply your name")]
        public string Username { get; set; }
        [Required(ErrorMessage = "Please, supply your date of birth")]
        public string Password { get; set; }

    }
}
