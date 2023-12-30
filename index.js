// # Strict Mode
"use strict";

const header = document.querySelector("[data-container]");
const logo = document.querySelector("h1");
const navbar = document.querySelector(".navbar-toggler");
const links_one = document.querySelectorAll(".nav-link")[1];
const links_two = document.querySelectorAll(".nav-link")[2];
const links_three = document.querySelectorAll(".nav-link")[3];
const links_four = document.querySelectorAll(".nav-link")[4];
const item = document.querySelector(".dropdown-menu").children;


window.addEventListener("scroll" , function () {
    if (this.window.scrollY > 50) {
        header.classList.add("active");
        logo.classList.add("active");
        links_one.classList.add("show");
        links_two.classList.add("show");
        links_three.classList.add("show");
        links_four.classList.add("show");
        navbar.classList.add("active");

        for (let j of item) {
            j.classList.add("active");
        }
    } else {
        header.classList.remove("active");
        logo.classList.remove("active");
        links_one.classList.remove("show");
        links_two.classList.remove("show");
        links_three.classList.remove("show");
        links_four.classList.remove("show");
        navbar.classList.remove("active");

        for (let i of item) {
            i.classList.remove("active");
        }
    }
});


const filterButtons = document.querySelector("#filter-btn").children;
const items = document.querySelector(".item").children ;

for (let i of filterButtons) {
    i.addEventListener("click", function () {

        for (let j of filterButtons) {
            j.classList.remove('active');
        }

        this.classList.add("active");
        const target = this.getAttribute("data-target");

        for (let k of items) {
            k.style.display = "none";

            if(target == k.getAttribute("data-id")) {
                k.style.display = "block";
            }

            if(target == "all") {
                k.style.display = "block";
            }
        }

    });
}

const nav = document.querySelector("[data-container]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll" , function () {
    if (this.window.scrollY > 50) {
        nav.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        nav.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
});