function toggleDarkLight() {
    const body = document.querySelector("body");
    const currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}
