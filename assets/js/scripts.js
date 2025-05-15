//scroll
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

//sidebar
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const computedStyle = window.getComputedStyle(sidebar);
    const currentLeft = computedStyle.left;

    if (currentLeft === "-250px") {
        sidebar.style.left = "0";
    } else {
        sidebar.style.left = "-250px";
    }
}

//sort memories/poems
document.addEventListener("DOMContentLoaded", function () {
    const sortButton = document.getElementById("sortButton");
    const memoriesContainer = document.getElementById("memories-container");

    let ascending = true;

    sortButton.addEventListener("click", function () {
        let memories = Array.from(memoriesContainer.children);
        memories.reverse();

        memories.forEach(memory => memoriesContainer.appendChild(memory));

        ascending = !ascending;
        sortButton.textContent = ascending ? "Sort: Oldest to Newest" : "Sort: Newest to Oldest";
    });
});

//expand poem
function togglePoem(poem) {
    poem.classList.toggle("expanded");
}

//sort letters
document.addEventListener("DOMContentLoaded", function () {
    const sortButton = document.getElementById("sortButton");
    const lettersContainer = document.getElementById("letters-container");

    let ascending = false;

    sortButton.addEventListener("click", function () {
        const letters = Array.from(lettersContainer.getElementsByClassName("letter"));

        letters.reverse();

        letters.forEach(letter => lettersContainer.appendChild(letter));

        ascending = !ascending;
        sortButton.textContent = ascending
            ? "Sort: Newest to Oldest"
            : "Sort: Oldest to Newest";
    });
});

//login
function login() {
    const user = document.getElementById("userSelect").value;
    const password = document.getElementById("passwordInput").value;
    const message = document.getElementById("message");

        const passwords = {
        "1": "123456",
        "2": "654321"
    };

    if (password === passwords[user]) {
        message.style.color = "green";
        message.textContent = "Login successful!";
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000); // redirect after 1 second
    } else {
        message.style.color = "red";
        message.textContent = "Incorrect password.";
    }
}
