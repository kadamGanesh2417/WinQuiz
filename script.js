// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Show the black screen overlay
    const overlay = document.getElementById("overlay");
    overlay.classList.add("active");

    // Trigger browser vibration (only works on devices that support it)
    if (navigator.vibrate) {
        navigator.vibrate([2000, 100, 20000]); // Vibrate for 200ms, pause for 100ms, then vibrate for 200ms
    }

    // You can add any other logic here, like sending the form data to a server

    // Optional: hide the overlay after a delay (e.g., 2 seconds)
    setTimeout(() => {
        overlay.classList.remove("active");
    }, 20000);
}
