document.addEventListener("DOMContentLoaded", function () {
    const quoteBox = document.getElementById("quote-box");

    // Local array of quotes
    const quotes = [
        { text: "Believe in yourself and all that you are.", author: "Christian D. Larson" },
        { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
        { text: "Do what you love, and you’ll never work a day in your life.", author: "Confucius" },
        { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
        { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" }
    ];

    // Pick a random quote
    function displayRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const selectedQuote = quotes[randomIndex];
        quoteBox.textContent = `"${selectedQuote.text}" - ${selectedQuote.author}`;
    }

    displayRandomQuote(); // Show a quote on load
});


    // Feature Boxes Animation
    document.querySelectorAll(".feature-box").forEach(box => {
        box.addEventListener("mouseenter", () => {
            box.classList.add("pop-animation");
        });
        box.addEventListener("mouseleave", () => {
            box.classList.remove("pop-animation");
        });
    });
    
    // Menu Click Handler (for future settings)
    document.getElementById("menu-icon").addEventListener("click", () => {
        alert("Settings menu will be implemented soon!");
    });
    
    // Load Profile Data (if stored in localStorage or Firebase)
    const usernameElement = document.getElementById("username");
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
        usernameElement.textContent = storedUsername;
    }

    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("love-box").addEventListener("click", () => {
            window.location.href = "love.html";
        });
    
        document.getElementById("imp-date-box").addEventListener("click", () => {
            window.location.href = "imp-date.html";
        });
    
        document.getElementById("notif-box").addEventListener("click", () => {
            window.location.href = "notif.html";
        });
    
        document.getElementById("surveys-box").addEventListener("click", () => {
            window.location.href = "surveys.html";
        });
    });
    

