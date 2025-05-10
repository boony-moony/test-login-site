function showcredentials() {
    const email = document.querySelector(".mail").value.trim();
    const password = document.querySelector(".password").value.trim();
    const checkbox = document.querySelector(".checkbox");
    if (!checkbox.checked) {
        alert("You must agree to the terms first.");
        return;
    }
    if (!email || !password) {
        alert("Both email and password are required")
        return;
    }
    alert(`Email: ${email}\npassword: ${password}`);
}

function togglePassword() {
    const passwordinput = document.querySelector(".password");
    passwordinput.type = passwordinput.type === "password" ? "text" : "password";
}
