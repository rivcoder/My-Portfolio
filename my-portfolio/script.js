/* =========================
CUSTOM CURSOR
========================= */

const cursor = document.querySelector(".cursor")

document.addEventListener("mousemove",(e)=>{

cursor.style.left = e.clientX + "px"
cursor.style.top = e.clientY + "px"

})



/* =========================
MAGNETIC BUTTONS
========================= */

const magnets = document.querySelectorAll(".magnetic-btn")

magnets.forEach(btn => {

btn.addEventListener("mousemove",(e)=>{

const rect = btn.getBoundingClientRect()

const x = e.clientX - rect.left - rect.width/2
const y = e.clientY - rect.top - rect.height/2

btn.style.transform = `translate(${x*0.3}px, ${y*0.3}px)`

})

btn.addEventListener("mouseleave",()=>{

btn.style.transform = "translate(0,0)"

})

})



/* =========================
SMOOTH SCROLL
========================= */

function scrollToSection(id){

document.getElementById(id).scrollIntoView({
behavior:"smooth"
})

}



/* =========================
SCROLL REVEAL
========================= */

const reveals = document.querySelectorAll(".reveal")

function revealOnScroll(){

const windowHeight = window.innerHeight

reveals.forEach((el,index)=>{

const elementTop = el.getBoundingClientRect().top
const visible = 120

if(elementTop < windowHeight - visible){

setTimeout(()=>{

el.classList.add("active")

}, index * 120)

}

})

}

window.addEventListener("scroll", revealOnScroll)

revealOnScroll()



/* =========================
CONTACT FORM
========================= */

function sendMessage(){

let name = document.getElementById("name").value
let email = document.getElementById("email").value
let message = document.getElementById("message").value

fetch("/contact",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name:name,
email:email,
message:message
})

})
.then(res => res.json())
.then(data => {

alert("Message Sent ✔")

})
.catch(err => {

alert("Error sending message")

})

}



/* =========================
3D PROJECT CARD TILT
========================= */

const cards = document.querySelectorAll(".project-card")

cards.forEach(card => {

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect()

const x = e.clientX - rect.left
const y = e.clientY - rect.top

card.style.setProperty("--x", x + "px")
card.style.setProperty("--y", y + "px")

const centerX = rect.width / 2
const centerY = rect.height / 2

const rotateX = (y - centerY) / 15
const rotateY = (centerX - x) / 15

card.style.transform =
`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`

})


card.addEventListener("mouseleave",()=>{

card.style.transform =
"rotateX(0deg) rotateY(0deg) scale(1)"

})

})



/* =========================
CURSOR INTERACTION WITH CARDS
========================= */

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

cursor.style.transform =
"translate(-50%,-50%) scale(1.3)"

})

card.addEventListener("mouseleave",()=>{

cursor.style.transform =
"translate(-50%,-50%) scale(1)"

})

})