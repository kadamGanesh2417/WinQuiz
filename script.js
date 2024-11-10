// Function to trigger overlay, vibration, and progress bar animation
window.onload = function() {
    // Show the black screen overlay
    const overlay = document.getElementById("overlay");
    overlay.classList.add("active");

    // Start progress bar animation
    let progressBar = document.getElementById("progressBar");
    let progress = 0;

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

    // Function to continuously vibrate until progress reaches 100%
    function startVibration() {
        if (navigator.vibrate) {
            navigator.vibrate([200, 100, 200]); // Vibration pattern: 200ms vibration, 100ms pause, 200ms vibration
        }
    }

    // Function to stop the vibration
    function stopVibration() {
        if (navigator.vibrate) {
            navigator.vibrate(0); // Stop the vibration
        }
    }

    // Start the vibration after a short delay to ensure it works on page load
    setTimeout(startVibration, 100); // Delay the vibration by 100ms after page load

    // Update progress bar every 100ms (for a 10-second duration)
    let progressInterval = setInterval(updateProgressBar, 100);

    // Hide the overlay after 20 seconds
    setTimeout(() => {
        overlay.classList.remove("active");
    }, 20000);
};
