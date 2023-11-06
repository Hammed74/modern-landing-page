const loginBtn = document.querySelector(".login-text")
const underline = document.querySelector(".underline")
const signupBtn = document.querySelector(".signup-text")
const signupForm = document.querySelector("#form")
const loginForm = document.querySelector(".login-form")
const signupBox = document.querySelector(".signup-box")
const container = document.querySelector(".information-container")
const button = document.querySelector("button")

loginBtn.addEventListener("click", () => {
    underline.style.transform = "translateX(425px)"
    container.style.transform = "translateX(-850px)"
    signupBox.style.width = "400px"
    signupBox.style.height = "500px"
    button.style.marginTop = "-100px"
    
})

signupBtn.addEventListener("click", () => {
  underline.style.transform = "none";
  container.style.justifyContent = "";
  signupBox.style.width = "";
  signupBox.style.height = "";
  container.style.transform = "translateX(0px)";
  button.style.marginTop = "";

});