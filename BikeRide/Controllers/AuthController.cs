using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using BikeRide.Models;
using BikeRide.Service;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;

namespace BikeRide.Controllers
{   
    [Route("api/login")]
    public class AuthController : Controller
    {
        private IUserService _userService;

        public AuthController(IUserService userService) 
        {
            userService = _userService;
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> SignIn(SingInModel model)
        {
            if (ModelState.IsValid)
            {
                User user;
                if (await _userService.ValidateCredentials(model.Username, model.Password, out user))
                {
                    await SignInUser(user.Username);
                    return RedirectToAction("Index", "Home");
                    Console.WriteLine("Logged");
                }
            }

            return BadRequest();
        }

        public async Task SignInUser(string username)
        {
            var claims = new List<Claim> {
                new Claim(ClaimTypes.NameIdentifier, username),
                new Claim("name", username)
            };
            var identity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme, "name", null);
            var principal = new ClaimsPrincipal(identity);
            await HttpContext.SignInAsync(principal);
        }
        
    }
}