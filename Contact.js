// Initialize EmailJS with your user ID
emailjs.init("cMbeXk20HzlKvaKRe");

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // EmailJS service parameters
    const templateParams = {
        name: name,
        email: email,
        message: message,
    };

    emailjs
        .send("service_xnhhv1f", "template_bvk7pkv", templateParams)
        .then(
            function (response) {
                document.getElementById("response-message").textContent =
                    "Message sent successfully!";
                document.getElementById("response-message").classList.remove("hidden");
                document.getElementById("contact-form").reset();
            },
            function (error) {
                document.getElementById("response-message").textContent =
                    "Failed to send the message. Please try again.";
                document.getElementById("response-message").classList.remove("hidden");
            }
        );
});
