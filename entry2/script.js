document.addEventListener("mousemove", function(event) {
    const screenWidth = window.innerWidth;
    const mouseX = event.clientX;
    const body = document.body;
    const homeLink = document.querySelector(".home-link");

    if (mouseX < screenWidth / 2) {
        body.classList.add("dark");
        body.classList.remove("light");
        homeLink.classList.add("dark");
        homeLink.classList.remove("light");
    } else {
        body.classList.add("light");
        body.classList.remove("dark");
        homeLink.classList.add("light");
        homeLink.classList.remove("dark");
    }
});
