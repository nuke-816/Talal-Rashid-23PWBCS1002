const navbar = document.getElementById("navbar");
let lastScrollTop = 0; 

window.addEventListener("scroll", function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop; 

    if (currentScroll > lastScrollTop) {
       
        navbar.style.top = "-60px"; 
    } else {
        
        navbar.style.top = "50px"; 
    }

    lastScrollTop = currentScroll;
});
const logo = document.getElementById("logo");
let lastScrollTop1 = 0; 

window.addEventListener("scroll", function() {
    const currentScroll1 = window.pageYOffset || document.documentElement.scrollTop; 

    if (currentScroll1 > lastScrollTop1) {
       
        logo.style.top = "-90px"; 
    } else {
        
        logo.style.top = "20px"; 
    }

    lastScrollTop1 = currentScroll1;
});









document.getElementById("read-more-btn").addEventListener("click", function() {
    const fullText = document.querySelector(".full-text");
    if (fullText.style.display === "none") {
        fullText.style.display = "block"; 
        this.textContent = "Read Less"; 
    } else {
        fullText.style.display = "none"; 
        this.textContent = "Read More"; 
    }
});


const lines = ["IT DOESN'T GET EASIER.", "YOU GET BETTER."]; // Array of lines
let lineIndex = 0; // Current line index
let charIndex = 0; // Current character index
const typingSpeed = 50; // Speed of typing in milliseconds

function typeText() {
    if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
            // Append the current character to the hidden text
            document.getElementById("typing-text").innerHTML += lines[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, typingSpeed); // Call the function again after a delay
        } else {
            // Move to the next line after a short delay
            charIndex = 0; // Reset character index
            lineIndex++; // Move to the next line
            document.getElementById("typing-text").innerHTML += "<br>"; // Add line break
            setTimeout(typeText, typingSpeed * 3); // Wait before typing next line
        }
    }
}

typeText(); // Start the typing effect

