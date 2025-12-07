const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const dropdowns = document.querySelectorAll(".dropdown");

// OPEN / CLOSE hamburger menu
navToggle.addEventListener("click", (e) => {
    e.stopPropagation(); // stop closing
    navLinks.classList.toggle("open");

    if (navLinks.classList.contains("open")) {
        navLinks.style.maxHeight = navLinks.scrollHeight + "px";
    } else {
        navLinks.style.maxHeight = "0px";
    }
});

// Prevent closing menu when clicking inside
navLinks.addEventListener("click", (e) => {
    e.stopPropagation();
});

// CLICK OUTSIDE → CLOSE menu (mobile only)
document.addEventListener("click", () => {
    if (window.innerWidth <= 900) {
        navLinks.classList.remove("open");
        navLinks.style.maxHeight = "0px";
    }
});

// Dropdown toggle
dropdowns.forEach(drop => {
    const link = drop.querySelector("a");

    link.addEventListener("click", (e) => {
        if (window.innerWidth <= 900) {
            e.preventDefault();
            e.stopPropagation(); // VERY IMPORTANT

            drop.classList.toggle("open");

            // expand menu height so it never closes
            navLinks.style.maxHeight = navLinks.scrollHeight + "px";
        }
    });
});
