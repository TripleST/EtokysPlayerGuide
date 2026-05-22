// document.getElementById("tabSwitch").addEventListener("click", function() {
//     alert("TabSwitch clicked.");
// });
const buttons = document.querySelectorAll(".sectionBtn");
const title = document.getElementById("title");
const stories = document.querySelectorAll(".stories");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const newTitle = button.dataset.title;
        title.textContent = newTitle;

        stories.forEach(section => { section.classList.add("hidden"); });
        const sectionID = button.dataset.section;
        const visibleSection = document.getElementById(sectionID);
        visibleSection.classList.remove("hidden");
    });
});