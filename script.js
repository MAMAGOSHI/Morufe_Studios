
document.addEventListener("DOMContentLoaded", function () {
    // MOBILE NAVIGATION
    const navToggle = document.querySelector(".nav-toggle");
    const mainNav = document.querySelector(".main-nav");

    function closeNavigation() {
        if (!navToggle || !mainNav) {
            return;
        }

        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open navigation");
        mainNav.classList.remove("is-open");
        document.body.classList.remove("menu-open");
    }

    if (navToggle && mainNav) {
        navToggle.addEventListener("click", function () {
            const isExpanded =
                navToggle.getAttribute("aria-expanded") === "true";

            navToggle.setAttribute("aria-expanded", String(!isExpanded));
            navToggle.setAttribute(
                "aria-label",
                isExpanded ? "Open navigation" : "Close navigation"
            );

            mainNav.classList.toggle("is-open", !isExpanded);
            document.body.classList.toggle("menu-open", !isExpanded);
        });

        mainNav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", closeNavigation);
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeNavigation();
            }
        });

        window.addEventListener("resize", function () {
            if (window.innerWidth > 760) {
                closeNavigation();
            }
        });
    }

    // LIVE SOUTH AFRICAN TIME
    const clock = document.getElementById("south-africa-clock");

    function updateSouthAfricanTime() {
        if (!clock) {
            return;
        }

        const now = new Date();

        clock.textContent = new Intl.DateTimeFormat("en-GB", {
            timeZone: "Africa/Johannesburg",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        }).format(now);
    }

    updateSouthAfricanTime();
    window.setInterval(updateSouthAfricanTime, 30000);

    // SCROLL REVEAL ANIMATIONS
    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver(
            function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(function (element) {
            revealObserver.observe(element);
        });
    } else {
        revealElements.forEach(function (element) {
            element.classList.add("is-visible");
        });
    }
});
