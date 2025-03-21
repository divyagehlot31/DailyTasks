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



document.addEventListener('DOMContentLoaded', function() {

    setTimeout(function() {
        // Hide skeleton
        document.getElementById('skeleton-loader').style.display = 'none';
        // Show real content
        document.getElementById('actual-content').classList.remove('content-invisible');
    }, 5000);
});
