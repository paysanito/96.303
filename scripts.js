document.addEventListener("DOMContentLoaded", () => {
    const icons = document.querySelectorAll(".icon a");
    const sections = document.querySelectorAll(".content");

    icons.forEach(icon => {
        icon.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = icon.getAttribute("href").substring(1);
            
            sections.forEach(section => {
                section.classList.add("hidden");
            });
            
            document.getElementById(targetId).classList.remove("hidden");
        });
    });
});
