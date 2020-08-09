// Add click listener for mobile nav
const mobileNavButton = document.getElementById("mobile-nav-btn");
const mobileNav = document.getElementById("mobile-nav");
var mobileIsDisplayed = false;
mobileNavButton.addEventListener("click", () => {
    if (mobileIsDisplayed) mobileNav.style.display = "None";
    else mobileNav.style.display = "flex";
    mobileIsDisplayed = !mobileIsDisplayed;
});

// Up arrow click and appear
const upArrow = document.getElementById("up-arrow");
upArrow.addEventListener("click", () => {
    window.scrollTo(0, 0);
});

const navHeight = 100;
const footer = document.getElementById("footer");
document.addEventListener("scroll", () => {
    if (window.scrollY >= navHeight && 
        upArrow.getBoundingClientRect().bottom < footer.getBoundingClientRect().top) {
        upArrow.style.opacity = 1;
    } else {
        upArrow.style.opacity = 0;
    }
});

