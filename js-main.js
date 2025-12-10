// BEGIN Anesa Kastrati.

document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       SCROLL PROGRESS BAR
    ========================== */
    const scrollBar = document.getElementById("scroll-progress");

    if (scrollBar) {
        window.addEventListener("scroll", () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const percent = (scrollTop / docHeight) * 100;
            scrollBar.style.width = percent + "%";
        });
    }

    /* =========================
       NAV ACTIVE LINK HIGHLIGHT
    ========================== */
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll("nav a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    /* =========================
       CARD ANIMATION
    ========================== */
    const cards = document.querySelectorAll(".card");
    function revealCards() {
        cards.forEach(card => {
            if (card.getBoundingClientRect().top < window.innerHeight - 120) {
                card.classList.add("visible");
            }
        });
    }
    window.addEventListener("scroll", revealCards);
    revealCards();

    /* =========================
       HOW IT WORKS - FAQ ACCORDION
    ========================== */
    const faqButtons = document.querySelectorAll(".faq-question");
    faqButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const answer = btn.nextElementSibling;
            answer.style.display =
                answer.style.display === "block" ? "none" : "block";
        });
    });

    /* =========================
       COUNT-UP STATS
    ========================== */
    const counters = document.querySelectorAll(".count");
    let statsStarted = false;

    function startCountUp() {
        if (!statsStarted && counters.length > 0 &&
            document.querySelector(".stats").getBoundingClientRect().top < window.innerHeight) {

            counters.forEach(counter => {
                let target = +counter.getAttribute("data-target");
                let count = 0;
                let speed = 20;

                let interval = setInterval(() => {
                    count++;
                    counter.textContent = count;
                    if (count >= target) clearInterval(interval);
                }, speed);
            });

            statsStarted = true;
        }
    }
    window.addEventListener("scroll", startCountUp);

    /* =========================
       BACK TO TOP BUTTON
    ========================== */
    const backToTop = document.getElementById("backToTop");
    if (backToTop) {
        window.addEventListener("scroll", () => {
            backToTop.style.display = window.scrollY > 400 ? "block" : "none";
        });
        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    /* =========================
       NEWSLETTER FORM
    ========================== */
    const newsletterForm = document.getElementById("newsletter-form");
    const newsletterMsg = document.getElementById("newsletter-msg");

    if (newsletterForm) {
        newsletterForm.addEventListener("submit", e => {
            e.preventDefault();
            const email = document.getElementById("newsletter-email").value.trim();

            if (email.length < 5 || !email.includes("@")) {
                newsletterMsg.textContent = "Please enter a valid email.";
                newsletterMsg.style.color = "red";
            } else {
                newsletterMsg.textContent = "Subscribed successfully!";
                newsletterMsg.style.color = "green";
                newsletterForm.reset();
            }
        });
    }

    /* =========================
       BOOKING FORM VALIDATION
       (booking.html)
    ========================== */
    const bookingForm = document.getElementById("booking-form");

    if (bookingForm) {
        bookingForm.addEventListener("submit", e => {
            e.preventDefault();

            const name = document.getElementById("booking-name").value.trim();
            const email = document.getElementById("booking-email").value.trim();
            const vehicle = document.getElementById("booking-vehicle").value;
            const startDate = document.getElementById("booking-start-date").value;
            const endDate = document.getElementById("booking-end-date").value;
            const time = document.getElementById("booking-time").value;

            const msgBox = document.getElementById("booking-message");
            msgBox.style.color = "red";

            if (!name || name.length < 2) return msgBox.textContent = "Please enter your full name.";
            if (!email.includes("@")) return msgBox.textContent = "Enter a valid email.";
            if (!vehicle) return msgBox.textContent = "Select a vehicle.";
            if (!startDate) return msgBox.textContent = "Choose start date.";
            if (!endDate) return msgBox.textContent = "Choose end date.";
            if (startDate > endDate) return msgBox.textContent = "End date must be after start date.";
            if (!time) return msgBox.textContent = "Select pickup time.";

            msgBox.style.color = "green";
            msgBox.textContent = "Booking successful! We will email you shortly.";

            bookingForm.reset();
        });
    }

    /* =========================
       CONTACT FORM VALIDATION
       (contact.html)
    ========================== */
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", e => {
            e.preventDefault();

            const name = document.getElementById("contact-name").value.trim();
            const email = document.getElementById("contact-email").value.trim();
            const topic = document.getElementById("contact-topic").value;
            const message = document.getElementById("contact-message").value.trim();

            const msgBox = document.getElementById("contact-msg");
            msgBox.style.color = "red";

            if (!name) return msgBox.textContent = "Please enter your name.";
            if (!email.includes("@")) return msgBox.textContent = "Enter a valid email.";
            if (!topic) return msgBox.textContent = "Please choose a topic.";
            if (message.length < 10) return msgBox.textContent = "Message must be at least 10 characters.";

            msgBox.style.color = "green";
            msgBox.textContent = "Message sent successfully! We will get back to you.";

            contactForm.reset();
        });
    }

});

// END Anesa Kastrati.
