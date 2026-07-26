// ======================================
// OCLAY Official Website
// JavaScript File
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("OCLAY Website Loaded");

});
// ================= Scroll To Top =================

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "flex";
    } else {
        scrollTopBtn.style.display = "none";
    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});