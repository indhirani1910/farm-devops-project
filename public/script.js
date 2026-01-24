function checkLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("msg");

  if(!username || !password){
      msg.style.color = "red";
      msg.innerText = "Enter both fields!";
      return;
  }

  const correctUser = "admin";
  const correctPass = "admin123";

  if(username === correctUser && password === correctPass){
      msg.style.color = "green";
      msg.innerText = "Login Successful!";
      setTimeout(()=> window.location.href="/home", 800);
  } else {
      msg.style.color = "red";
      msg.innerText = "Wrong username or password!";
  }
}
function registerUser() {
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const msg = document.getElementById("msg");

    if(!fullname || !email || !username || !password){
        msg.style.color = "red";
        msg.innerText = "Please fill all fields!";
        return;
    }

    // 1️⃣ Save user in localStorage
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push({ fullname, email, username, password });
    localStorage.setItem("users", JSON.stringify(users));

    // 2️⃣ Success message
    msg.style.color = "green";
    msg.innerText = "Registration Successful! Redirecting to dashboard...";

    // 3️⃣ Redirect to dashboard/index page after 1.5 sec
    setTimeout(() => {
        window.location.href = "index.html"; // or /home if using server route
    }, 1500);
}


