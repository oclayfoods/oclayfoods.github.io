// ======================================
// OCLAY Official Website
// JavaScript File
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("OCLAY Website Loaded");

    // Scroll Top Button
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    if (scrollTopBtn) {
        window.addEventListener("scroll", function () {
            scrollTopBtn.style.display = window.scrollY > 300 ? "flex" : "none";
        });

        scrollTopBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // =========================
    // State -> District -> City
    // =========================

    const districts = {

        "Andhra Pradesh": [
            "Anantapur",
            "Chittoor",
            "East Godavari",
            "Guntur",
            "Kadapa",
            "Krishna",
            "Kurnool",
            "NTR",
            "Palnadu",
            "Prakasam",
            "Srikakulam",
            "Tirupati",
            "Visakhapatnam",
            "Vizianagaram",
            "West Godavari"
        ],

        "Telangana": [
            "Adilabad",
            "Bhadradri Kothagudem",
            "Hanamkonda",
            "Hyderabad",
            "Jagtial",
            "Jangaon",
            "Karimnagar",
            "Khammam",
            "Mahabubnagar",
            "Medak",
            "Medchal-Malkajgiri",
            "Nalgonda",
            "Narayanpet",
            "Nirmal",
            "Nizamabad",
            "Peddapalli",
            "Rajanna Sircilla",
            "Rangareddy",
            "Sangareddy",
            "Siddipet",
            "Suryapet",
            "Vikarabad",
            "Warangal",
            "Yadadri Bhuvanagiri"
        ]
    };


    const state = document.getElementById("state");
    const district = document.getElementById("district");

    if (state && district) {

        state.addEventListener("change", function () {

            district.innerHTML = '<option value="">Select District</option>';

            const selectedDistricts = districts[this.value] || [];

            selectedDistricts.forEach(function (d) {
                district.innerHTML += `<option value="${d}">${d}</option>`;
            });

        });

    }

const distributorForm = document.getElementById("distributorForm");
const successMessage = document.getElementById("successMessage");

if (distributorForm) {

    distributorForm.addEventListener("submit", function () {

        setTimeout(() => {
            successMessage.style.display = "block";
            distributorForm.reset();
        }, 1000);

    });

}
});