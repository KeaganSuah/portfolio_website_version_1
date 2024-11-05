/************** Navigation bar **************/
// toggle Icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 300;
    let height = sec.offsetHeight + 200;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // active navbar links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
      //   activate sections
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  //   remove toggle icon and navbar when click
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Change Theme Page

var icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    icon.className = "bx bxs-moon";
  } else {
    icon.className = "bx bxs-sun";
  }
};

/************** Home Page **************/
// I am multiple texts
const typed = new Typed(".multiple-text", {
  strings: [
    "Web Developer",
    "lifelong Learner",
    "Computer Student",
    "Problem Solver",
  ],
  typeSpeed: 70,
  backSpeed: 50,
  BackDelay: 1600,
  loop: true,
});

/************** About Me Page **************/
var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

/************** Portfolio Page **************/

var mixer = mixitup(".portfolio-container");

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("portfolio-btn")) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement.parentElement);
  }
});

function togglePortfolioPopup() {
  document.querySelector(".portfolio_popup").classList.toggle("open");
}

document
  .querySelector(".portfolio_popup-close")
  .addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
  // Image
  console.log(portfolioItem);
  document.querySelector(".pp_thumbnail img").src =
    portfolioItem.querySelector(".portfolio-box img").src;

  // Category
  document.querySelector(".portfolio_popup-subtitle span").innerHTML =
    portfolioItem.querySelector(".portfolio-box h6").innerHTML;

  // title
  document.querySelector(".details_title").innerHTML =
    portfolioItem.querySelector(".portfolio-layer h4").innerHTML;

  // Full Body details
  document.querySelector(".portfolio_popup-body").innerHTML =
    portfolioItem.querySelector(".portfolio-body").innerHTML;
}

/************** Form Submission **************/

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyjRAiBke4MAONBz1Fz_sfoqyHKLQ8VvyHE9Hl0n6pS5ZOs5Mq1MoF2tsjSIweaWELB/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 8000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
