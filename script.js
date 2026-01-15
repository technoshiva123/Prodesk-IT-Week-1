const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i")

menuBtn.addEventListener("click",() =>{
    navLinks.classList.toggle("open")

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-4-line"
    )

});

navLinks.addEventListener("click" , () =>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class","ri-menu-4-line")
})

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const themeIcon = themeToggle.querySelector("i");

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeIcon.classList.replace("ri-moon-line", "ri-sun-line");
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    
    if (body.classList.contains("dark-mode")) {
        themeIcon.classList.replace("ri-moon-line", "ri-sun-line");
        localStorage.setItem("theme", "dark");
    } else {
        themeIcon.classList.replace("ri-sun-line", "ri-moon-line");
        localStorage.setItem("theme", "light");
    }
});

window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.style.backgroundColor = body.classList.contains("dark-mode") ? "#111827" : "#ffffff";
        nav.style.padding = "1rem 1rem"; 
    } else {
        nav.style.backgroundColor = "transparent";
        nav.style.padding = "2rem 1rem 1rem";
    }
});

window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});