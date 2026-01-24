function checkLogin() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const msg = document.getElementById("msg");

    // Demo credentials
    const correctUser = "admin";
    const correctPass = "admin123";

    // Check empty fields
    if (!username || !password) {
        msg.style.color = "red";
        msg.innerText = "Please enter both username and password!";
        return;
    }

    // Validate credentials
    if (username === correctUser && password === correctPass) {
        msg.style.color = "green";
        msg.innerText = "Login Successful! Redirecting...";
        setTimeout(() => {
            window.location.href = "/home";  // matches server.js route
        }, 1000);
    } else {
        msg.style.color = "red";
        msg.innerText = "Wrong username or password!";
    }
}

// Optional: simple logout function
function logout() {
    alert("You have been logged out!");
    window.location.href = "/";
}