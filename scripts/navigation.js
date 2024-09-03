// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Select the navigation bar
    const navbar = document.querySelector("nav");
  
    // Function to handle scroll event
    function handleScroll() {
      if (window.scrollY > 600) {
        // If the scroll position is greater than 100, make the navbar transparent
        navbar.style.background= "linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, .5))";
        navbar.style.backdropFilter = 'blur(10px) contrast(1.2)';
      } else {
        // Otherwise, reset the background color
        navbar.style.backgroundColor = "none";  // You can set this to your default color
      }
    }
  
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);
  });