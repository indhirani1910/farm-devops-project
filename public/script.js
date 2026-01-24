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