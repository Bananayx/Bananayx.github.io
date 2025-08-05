
        document.addEventListener("DOMContentLoaded", function() {
            var navLinks = document.querySelectorAll("nav ul li a");
            
            navLinks.forEach(function(link) {
                link.addEventListener("click", function(event) {
                    event.preventDefault();
                    
                    navLinks.forEach(function(link) {
                        link.classList.remove("active");
                    });
                    this.classList.add("active");
                    
                    var target = this.getAttribute("href");
                    var section = document.querySelector(target);
                    
                    if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                    }
                });
            });
            
            var backToTopButton = document.querySelector(".back-to-top");
            
            window.addEventListener("scroll", function() {
                if (window.pageYOffset > 200) {
                    backToTopButton.classList.add("show");
                } else {
                    backToTopButton.classList.remove("show");
                }
            });
            
            backToTopButton.addEventListener("click", function() {
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        });
