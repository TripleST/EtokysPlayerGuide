const buttons = document.querySelectorAll(".sectionBtn");
const title = document.getElementById("title");
const blurbs = document.querySelectorAll(".descriptor");
const stories = document.querySelectorAll(".stories");

function showSection(sectionID) {
    const button = document.querySelector(`[data-section="${sectionID}"]`);
    if (!button) return;
    
    title.textContent = button.dataset.title;
    blurbs.forEach(blurb => { blurb.classList.add("hidden"); });
    stories.forEach(section => { section.classList.add("hidden"); });
    
    document.getElementById(sectionID + "-desc").classList.remove("hidden");
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