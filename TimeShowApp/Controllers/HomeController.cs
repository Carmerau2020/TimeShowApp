using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TimeShowApp.Controllers
{
    [HandleError]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
           
            return View();
        }
                
        public ActionResult LocalTime()
        {
            ViewBag.Message = "Your local time is:";

            return View();
        }

        public ActionResult UTCTime()
        {
            ViewBag.Message = "Coordinated Universal Time is:";

            return View();
        }
    }
}