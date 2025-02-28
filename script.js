document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let formMessage = document.getElementById("form-message");

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "Message sent successfully!";
        formMessage.style.color = "green";
        this.reset();
    }
});