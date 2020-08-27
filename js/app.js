/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const section = document.querySelectorAll("section"),
  navBarList = document.getElementById("navbar__list"),
  menuItems = [
    { link: "#home", label: "Home" },
    { link: "#section1", label: "Section 1" },
    { link: "#section2", label: "Section 2" },
    { link: "#section3", label: "Section 3" },
  ];
let sections = {},
  i = 0;

Array.prototype.forEach.call(section, function (e) {
  sections[e.id] = e.offsetTop;
});
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
menuItems.forEach((element, i) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = element.link;
  a.innerText = element.label;
  if (i === 0) {
    a.classList.add("active");
  }
  a.addEventListener("click", () => {
    console.log("call");
    window.scrollTo({
      left: 0,
      top: sections[element.link],
      behavior: "smooth",
    });
  });
  li.appendChild(a);
  navBarList.appendChild(li);
});

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
window.onscroll = function () {
  var scrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;

  for (i in sections) {
    if (sections[i] <= scrollPosition) {
      document.querySelector(".active").setAttribute("class", " ");
      document
        .querySelector("a[href*=" + i + "]")
        .setAttribute("class", "active");

      //   document
      document.querySelector("section.active").setAttribute("class", " ");
      document.getElementById(i).setAttribute("class", "active");
    }
  }
};
