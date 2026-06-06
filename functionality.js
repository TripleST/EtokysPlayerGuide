// document.getElementById("tabSwitch").addEventListener("click", function() {
//     alert("TabSwitch clicked.");
// });
const buttons = document.querySelectorAll(".sectionBtn");
const title = document.getElementById("title");
const blurbs = document.querySelectorAll(".descriptor");
const stories = document.querySelectorAll(".stories");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const newTitle = button.dataset.title;
        title.textContent = newTitle;

        blurbs.forEach(blurb => { blurb.classList.add("hidden"); });
        stories.forEach(section => { section.classList.add("hidden"); });

        const sectionID = button.dataset.section;
        document.getElementById(sectionID + "-desc").classList.remove("hidden");
        document.getElementById(sectionID).classList.remove("hidden");

        // const visibleSection = document.getElementById(sectionID);
        // visibleSection.classList.remove("hidden");
    });
});