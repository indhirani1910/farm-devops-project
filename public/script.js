function goHome() {
  // Directly go to home page (demo login)
  window.location.href = "/home";
}
function logout(){
    alert("You have been logged out!");
    window.location.href = "/";
}

function checkLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const msg = document.getElementById("msg");

    // Example correct credentials
    const correctUser = "admin";
    const correctPass = "admin123";

    if(username === correctUser && password === correctPass) {
        msg.style.color = "green";
        msg.innerText = "Login Successful!";
        // Redirect to dashboard after 1 second
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    } else {
        msg.style.color = "red";
        msg.innerText = "Wrong username or password!";
    }
}