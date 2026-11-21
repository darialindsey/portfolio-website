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

//typing animation for hero terminal on index html
const terminalText = document.getElementById("terminal-text");
//if user opts for no animation, display text in full
if (terminalText) {
    const fullText = terminalText.textContent; 
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let i = 0;

    function typeNext() {
        if (i < fullText.length) {
            terminalText.textContent += fullText.charAt(i);
            i++;
            setTimeout(typeNext, 40);
        }
    }

    if (!reduceMotion) {
        terminalText.textContent = "";
        typeNext();
    }
}
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // stops page from reloading when submit is clicked
        const name = document.getElementById(".value.trim();
            formMessage.textContent = "Thanks, " + name + "! I'll get back to you soon.";
            contactForm.reset(); //clears the boxes after submit
        )
    }
}