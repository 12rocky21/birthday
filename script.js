document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("open-btn");
    const welcomeScreen = document.getElementById("welcome-screen");
    const birthdayPage = document.getElementById("birthday-page");
    const audio = document.getElementById("bg-music");

    // Function to show birthday page
    function openBirthdayPage() {
        welcomeScreen.style.display = "none"; // Hide welcome screen
        birthdayPage.classList.remove("hidden"); // Show birthday page

        // Try playing music
        audio.play().catch(() => {
            console.log("Autoplay blocked, waiting for interaction...");
        });
    }

    // Button click event to show birthday page and play music
    openBtn.addEventListener("click", openBirthdayPage);
});
