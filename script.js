let btn = document.getElementById("dark")
let btn2 = document.getElementById("Light")
let BackCL = document.getElementById("back")
let BackCL1 = document.getElementById("back1")
let BackCL2 = document.getElementById("back2")
let BackCL3 = document.getElementById("back3")
const Menubtn = document.getElementById("Menu")
const Items = document.getElementById("Items")
const Close = document.getElementById("fa-xmark")
btn.addEventListener("click",()=>{
    document.body.style = "background-color:black;color:white;transition:1s"
    btn.style = "display:none;transition:1s"
    btn2.style = "display:block;transition:1s"
    BackCL.style = "background-color:white"
    BackCL1.style = "background-color:white"
    BackCL2.style = "background-color:white"
    BackCL3.style = "background-color:white"
})
btn2.addEventListener("click",()=>{
    document.body.style = "background-color:white;color:black;transition:1s"
    btn2.style = "display:none;transition:1s"
    btn.style = "display:block;transition:1s"
})

Menubtn.addEventListener("click",()=>{
    Items.classList.add("max-sm:block")
    Items.classList.remove("max-sm:hidden")
    Menubtn.style = "display:none"
    Close.style = "display:block"

})
Close.addEventListener("click",()=>{
    Items.classList.add("max-sm:hidden")
    Menubtn.style = "display:block"
    Close.style = "display:none"
})