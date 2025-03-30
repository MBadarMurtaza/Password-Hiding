let password = document.getElementById("password");
let icon = document.getElementById("eyeicon");

icon.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
    icon.src = "/images/eye-open.png";
  } else {
    password.type = "password";
    icon.src = "/images/eye-close.png";
  }
});
