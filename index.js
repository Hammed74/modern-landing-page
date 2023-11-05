const loginBtn = document.querySelector(".login-text")
const underline = document.querySelector(".underline")
const signupBtn = document.querySelector(".signup-text")
const signupForm = document.querySelector("#form")
const loginForm = document.querySelector(".login-form")
const signupBox = document.querySelector(".signup-box")

loginBtn.addEventListener("click", () => {
    underline.style.transform = "translateX(425px)"
    signupForm.style.display = "none"
    signupBox.style.width = "500px"
    signupBox.style.justifyContent = "center"
    signupBox.style.height = "450px"
    signupBox.appendChild(loginForm)
    loginForm.style.display = "flex"
    
})

signupBtn.addEventListener("click", () => {
  underline.style.transform = "none";
  loginForm.remove()
  signupBox.style.width = ""
  signupBox.style.height = ""
  signupBox. justifyContent = ""
  signupForm.style.display = ""
});