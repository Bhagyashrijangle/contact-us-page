document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        const password = document.getElementById("password").value;

        // Encode the password 
        const encodedPassword = btoa(password);

        // Simulate sending data to the server
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
        console.log("Encoded Password:", encodedPassword);
        form.reset();
    });
});

