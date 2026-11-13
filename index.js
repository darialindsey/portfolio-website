//initializing buttons and system preferences
//used ai to add day/night theme toggle
const root = document.documentElement;
const systemQuery = window.matchMedia("(prefers-color-scheme: dark)");
const modes = ["auto", "light", "dark"];
const themeButton = document.getElementById("theme-toggle");
let mode = localStorage.getItem("theme-mode") || "auto";

function applyTheme() {
    const actual = mode === "auto" ? (systemQuery.matches ? "dark" : "light") : mode;
    root.setAttribute("data-theme", actual);
    themeButton.textContent = "Theme: " + mode;
}
themeButton.addEventListener("click", function () {
    mode = modes[(modes.indexOf(mode) + 1) % modes.length];
    localStorage.setItem("theme-mode", mode);
    applyTheme();
});
systemQuery.addEventListener("change", function() {
    if (mode === "auto") applyTheme();
});

applyTheme();