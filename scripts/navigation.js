// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Select the navigation bar
    const navbar = document.querySelector("nav");
  
    // Function to handle scroll event
    function handleScroll() {
      if (window.scrollY > 120) {
        // If the scroll position is greater than 100, make the navbar transparent
        navbar.style.backgroundColor = "transparent";
        navbar.style.backdropFilter = 'blur(10px) contrast(1.2)';
      } else {
        // Otherwise, reset the background color
        navbar.style.backgroundColor = "transparent";  // You can set this to your default color
      }
    }
  
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);
  });