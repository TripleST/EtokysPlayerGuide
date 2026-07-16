const buttons = document.querySelectorAll(".sectionBtn");
const stories = document.querySelectorAll(".stories");

function showSection(sectionID) {
    const button = document.querySelector(`[data-section="${sectionID}"]`);
    if (!button) return;
    
    stories.forEach(section => { section.classList.add("hidden"); });
    buttons.forEach(btn => { btn.classList.remove("clicked"); });
    button.classList.add("clicked");
    document.getElementById(sectionID).classList.remove("hidden");
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const sectionID = button.dataset.section;
        window.history.replaceState(null, "", `#${sectionID}`);
        showSection(sectionID);
    });
});

if (window.location.hash) {
    showSection(window.location.hash.slice(1));
}



const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

if (menuBtn && menu && overlay) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("show");
        overlay.classList.toggle("show");
    });

    overlay.addEventListener("click", () => {
        menu.classList.remove("show");
        overlay.classList.remove("show");
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            menu.classList.remove("show");
            overlay.classList.remove("show");
        }
    });
}