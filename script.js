window.onload = function() {
    // Get the necessary DOM elements
    const overlay = document.getElementById("overlay");
    const progressBar = document.getElementById("progressBar");
    const userInput = document.getElementById("userNumber");
    const form = document.getElementById("numberForm");

    let progress = 0;
    let isVibrating = false;
    let progressInterval;

    // Function to update progress bar
    function updateProgressBar() {
        if (progress < 100) {
            progress += 1; // Increase progress by 1%
            progressBar.style.width = progress + "%"; // Set the width of the progress bar
        } else {
            clearInterval(progressInterval); // Stop the progress once it reaches 100%
            stopVibration(); // Stop vibration when progress reaches 100%
        }
    }

    // Function to start vibration
    function startVibration() {
        if (navigator.vibrate) {
            navigator.vibrate([200, 100, 200]); // Vibration pattern
        }
    }

    // Function to stop vibration
    function stopVibration() {
        if (navigator.vibrate) {
            navigator.vibrate(0); // Stop the vibration
        }
        isVibrating = false;
    }

    // Event listener for user input
    userInput.addEventListener("input", () => {
        const enteredNumber = parseInt(userInput.value);

        // Start vibrating if the entered number is not 96
        if (enteredNumber !== 96 && !isVibrating) {
            isVibrating = true;
            startVibration();
        }

        // Stop vibrating when the entered number is 96
        if (enteredNumber === 96) {
            stopVibration();
        }
    });

    // Form submission handler
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        // Show the black screen overlay
        overlay.classList.add("active");

        // Reset progress and start the progress bar animation
        progress = 0;
        progressBar.style.width = "0%";
        progressInterval = setInterval(updateProgressBar, 100);

        // Stop overlay after 20 seconds
        setTimeout(() => {
            overlay.classList.remove("active");
        }, 20000);
    });
};
