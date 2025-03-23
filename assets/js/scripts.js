document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome!");
});

document.addEventListener("DOMContentLoaded", function () {
    let scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.timeline-nav a').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            let targetId = this.getAttribute("href").substring(1);
            let targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: "smooth"
                });
            }
        });
    });
});

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
