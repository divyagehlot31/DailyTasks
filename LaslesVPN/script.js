// document.addEventListener("DOMContentLoaded", function () {
//   const menuToggle = document.querySelector(".menu-toggle");
//   const navLinks = document.querySelector(".nav-links");

//   menuToggle.addEventListener("click", function () {
//       navLinks.classList.toggle("active");
//   });
// });


// document.addEventListener("DOMContentLoaded", function () {
//   var menuToggle = document.getElementById("menu-toggle");
//   var navlinks = document.querySelector(".nav-links");

//   if (menuToggle && navlinks) { 
//       menuToggle.addEventListener("click", function () {
//           navlinks.classList.toggle("show");
//       });
//   } else {
//       console.error("ERROR!");
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
    var menuToggle = document.getElementById("menu-toggle");
    var navlinks = document.querySelector(".nav-links");

    if (menuToggle && navlinks) { 
        menuToggle.addEventListener("click", function () {
            navlinks.classList.toggle("show");
        });

        // Click close menu
        document.addEventListener("click", function (event) {
            if (!menuToggle.contains(event.target) && !navlinks.contains(event.target)) {
                navlinks.classList.remove("show");
            }
        });
    } else {
        console.error("ERROR!");
    }
});


