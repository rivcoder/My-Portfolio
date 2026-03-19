window.hi/* =========================
SAFE INIT
========================= */

document.addEventListener("DOMContentLoaded", () => {


/* =========================
CUSTOM CURSOR (DESKTOP ONLY)
========================= */

const cursor = document.querySelector(".cursor")

if (cursor && window.innerWidth > 768) {

document.addEventListener("mousemove", (e) => {
cursor.style.left = e.clientX + "px"
cursor.style.top = e.clientY + "px"
})

document.addEventListener("click", () => {
cursor.style.transform = "translate(-50%,-50%) scale(0.7)"

setTimeout(() => {
cursor.style.transform = "translate(-50%,-50%) scale(1)"
}, 100)
})

} else if (cursor) {
cursor.style.display = "none"
}


/* =========================
SMOOTH SCROLL
========================= */

window.scrollToSection = function(id) {

const el = document.getElementById(id)
if (!el) return

const offset = 80
const y = el.getBoundingClientRect().top + window.pageYOffset - offset

window.scrollTo({
top: y,
behavior: "smooth"
})

}


/* =========================
SCROLL REVEAL (ONCE)
========================= */

const reveals = document.querySelectorAll(".reveal")

function revealOnScroll() {

const windowHeight = window.innerHeight

reveals.forEach((el, index) => {

if (el.classList.contains("active")) return

const top = el.getBoundingClientRect().top

if (top < windowHeight - 120) {
setTimeout(() => {
el.classList.add("active")
}, index * 80)
}

})

}

window.addEventListener("scroll", revealOnScroll)
revealOnScroll()


/* =========================
NAV ACTIVE LINK
========================= */

const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll(".nav-link")

window.addEventListener("scroll", () => {

let current = ""

sections.forEach(sec => {
const top = window.scrollY
const offset = sec.offsetTop - 150
const height = sec.offsetHeight

if (top >= offset && top < offset + height) {
current = sec.getAttribute("id")
}
})

navLinks.forEach(link => {
link.classList.remove("active")

if (link.getAttribute("href") === "#" + current) {
link.classList.add("active")
}
})

})


/* =========================
MAGNETIC BUTTONS (SMOOTH)
========================= */

const magnets = document.querySelectorAll(".magnetic-btn")

magnets.forEach(btn => {

btn.addEventListener("mousemove", (e) => {

const rect = btn.getBoundingClientRect()

const x = e.clientX - rect.left - rect.width / 2
const y = e.clientY - rect.top - rect.height / 2

btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
})

btn.addEventListener("mouseleave", () => {
btn.style.transform = "translate(0,0)"
})

})


/* =========================
CARD FLIP (CLICK BASED)
========================= */

const cards = document.querySelectorAll(".project-card")

cards.forEach(card => {

card.addEventListener("click", () => {

// close all others
cards.forEach(c => {
if (c !== card) c.classList.remove("flipped")
})

// toggle current
card.classList.toggle("flipped")

})

})


/* =========================
CONTACT → EMAIL REDIRECT
========================= */

window.sendMessage = function() {

const name = document.getElementById("name")?.value || ""
const email = document.getElementById("email")?.value || ""
const message = document.getElementById("message")?.value || ""

const subject = encodeURIComponent(`Message from ${name}`)
const body = encodeURIComponent(
`Name: ${name}\nEmail: ${email}\n\n${message}`
)

window.location.href =
`mailto:rashika.k.jain@gmail.com?subject=${subject}&body=${body}`

}


})
