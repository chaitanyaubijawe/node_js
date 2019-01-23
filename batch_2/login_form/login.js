function validate()
{
  let message = document.getElementById("message");
  if( document.getElementById("usrname").value === "admin" && document.getElementById("pswd").value === "admin"){
    message.style.display = "block";
    message.innerHTML += "Login Success";
    message.classList.add("valid");
    console.log("login");
    //alert("login");
  }
  else{
    message.style.display = "block";
    message.innerHTML += "Login Invalid";
    message.classList.add("invalid");
  }
}
