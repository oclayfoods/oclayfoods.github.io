import { db, collection, addDoc } from "./firebase.js";

const form = document.getElementById("feedbackForm");

// Product QR URL nundi automatic ga read chestundi
const params = new URLSearchParams(window.location.search);
const product = document.getElementById("productName")?.innerText.trim() || params.get("product") || "Unknown Product";

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const ratings = {};

    document.querySelectorAll(".rating-group").forEach(group => {

        const title = group.dataset.title;
        const selected = group.querySelector("input:checked");

        ratings[title] = selected ? Number(selected.value) : 0;

    });

    const feedback = document.getElementById("feedback").value.trim();

    if (Object.values(ratings).includes(0)) {
        alert("Please give ratings for all categories.");
        return;
    }

    try {

        await addDoc(collection(db, "feedbacks"), {

            product,
            ratings,
            feedback,
            createdAt: new Date()

        });

        window.location.href = "thanks.html";

        form.reset();

    } catch (err) {

        console.error(err);

        alert("Unable to submit feedback.");

    }

});