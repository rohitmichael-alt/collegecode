document.addEventListener("DOMContentLoaded", function () {
    // --- Random Quote ---
    const quoteBox = document.getElementById("quote-box");
    const quotes = [
        { text: "Believe in yourself and all that you are.", author: "Christian D. Larson" },
        { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
        { text: "Do what you love, and you’ll never work a day in your life.", author: "Confucius" },
        { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
        { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" }
    ];
    function displayRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const selectedQuote = quotes[randomIndex];
        quoteBox.textContent = `"${selectedQuote.text}" - ${selectedQuote.author}`;
    }
    displayRandomQuote();

    // --- Feature Boxes Animation ---
    document.querySelectorAll(".feature-box").forEach(box => {
        box.addEventListener("mouseenter", () => {
            box.classList.add("pop-animation");
        });
        box.addEventListener("mouseleave", () => {
            box.classList.remove("pop-animation");
        });
    });

    // --- Menu Icon Click ---
    document.getElementById("menu-icon").addEventListener("click", () => {
        function navigateTo(page) {
            window.location.href = page;
        }
        
    });
    

    // --- Load Profile Data ---
    const usernameElement = document.getElementById("username");
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
        usernameElement.textContent = storedUsername;
    }

    // --- Feature Boxes Clicks ---
    document.getElementById("love").addEventListener("click", () => {
        window.location.href = "contacts.html";
    });

    document.getElementById("imp-date").addEventListener("click", () => {
        window.location.href = "calendar.html";
    });

    document.getElementById("notif").addEventListener("click", () => {
        window.location.href = "notification.html";
    });

    document.getElementById("surveys").addEventListener("click", () => {
        window.location.href = "surveys.html";
    });

    // --- Bottom Nav Button Clicks ---
    const hideHomepageSections = () => {
        document.getElementById('profile-section').style.display = 'none';
        document.getElementById('features').style.display = 'none';
        document.getElementById('bottom-nav').style.display = 'none';
        document.querySelector('.quote-container').style.display = 'none';
    };

    document.getElementById('notes-btn').addEventListener('click', () => {
        hideHomepageSections();
        fetch('notes.html')
            .then(res => res.text())
            .then(html => {
                document.getElementById('dynamic-content').innerHTML = html;
            });
    });

    document.getElementById('gift-btn').addEventListener('click', () => {
        hideHomepageSections();
        fetch('gift.html')
            .then(res => res.text())
            .then(html => {
                document.getElementById('dynamic-content').innerHTML = html;
                const script = document.createElement('script');
                script.src = 'gift.js';
                document.body.appendChild(script);
            });
    });

    document.getElementById('heartlock-btn').addEventListener('click', () => {
        hideHomepageSections();
        fetch('heartlock.html')
            .then(res => res.text())
            .then(html => {
                document.getElementById('dynamic-content').innerHTML = html;
            });
    });

    document.getElementById('cam-btn').addEventListener('click', () => {
        hideHomepageSections();
        fetch('cam.html')
            .then(res => res.text())
            .then(html => {
                document.getElementById('dynamic-content').innerHTML = html;
                const script = document.createElement('script');
                script.src = 'cam.js';
                document.body.appendChild(script);
            });
    });
});
