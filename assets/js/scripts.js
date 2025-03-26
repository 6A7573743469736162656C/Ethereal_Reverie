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

//sort
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

//expand
function togglePoem(poem) {
    poem.classList.toggle("expanded");
}
