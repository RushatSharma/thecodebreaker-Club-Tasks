document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        contactNumber: document.getElementById("contactNumber").value,
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        gender: document.getElementById("gender").value,
        address: document.getElementById("address").value,
        domain: document.getElementById("domain").value,
        year: document.getElementById("year").value,
        branchSection: document.getElementById("branchSection").value,
    };

    fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        alert("Registration successful!");
        console.log(data);
        document.getElementById("registrationForm").reset();
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Registration failed. Please try again.");
    });
});
