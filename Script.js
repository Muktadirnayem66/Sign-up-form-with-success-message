const formEmail = document.querySelector("#form")
const errorDiv = document.querySelector("#show-error")
const inputEmail = document.querySelector("#email")
const submit = document.querySelector("#submit")
const mainDisplay = document.querySelector("#container")
const message = document.querySelector("#successMessage")
const DismissButton = document.querySelector("#dismiss")
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const NotRedload = (event)=>{
event.preventDefault();
}

 formEmail.addEventListener("click",NotRedload)

 const EmailRequired = (email) =>{
    if(!email.match(emailRegex)){
        errorDiv.innerText="valid email required"
        errorDiv.style.color = 'red';
        inputEmail.style.border = '1px solid red'
        inputEmail.style.color = "red"
    }else{
         errorDiv.innerText = ""  
         mainDisplay.style.display = "none"
         message.style.display = 'block'      
    }   
 }

 submit.addEventListener("click",()=>{
    EmailRequired(inputEmail.value)
  
 })

 inputEmail.addEventListener("click",()=>{
   submit.style.backgroundColor = "tomato"
 })
 
 DismissButton.addEventListener("click", ()=>{
   mainDisplay.style.display = "block"
   
 })
 
 



