console.log("Hello, Liss Brine!");

const discoverButton = document.querySelector("#discoverBtn");
const welcomeMessage = document.querySelector("#welcomeMessage");
const aboutSection = document.querySelector("#about");

discoverButton.addEventListener("click", function() {

    welcomeMessage.textContent =
        "Welcome to the world of Liss Brine's portfolio!";

    aboutSection.style.display = "block";

});