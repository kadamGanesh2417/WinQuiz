// Function to trigger overlay, vibration, and progress bar animation
window.onload = function() {
    // Show the black screen overlay
    const overlay = document.getElementById("overlay");
    overlay.classList.add("active");

    // Trigger browser vibration (only works on devices that support it)
    if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200]); // Vibrate for 200ms, pause for 100ms, then vibrate for 200ms
    }

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
    function stopVibration() {
        if (navigator.vibrate) {
            navigator.vibrate(0); // Stop the vibration
        }
    }

    // Update progress bar every 100ms (for a 10-second duration)
    let progressInterval = setInterval(updateProgressBar, 100);

    // Hide the overlay after 20 seconds
    setTimeout(() => {
        overlay.classList.remove("active");
    }, 20000);
};
