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
const navBarList = document.getElementById("navbar__list"),
  sections = Array.from(document.getElementsByTagName("section")),
  menuItems = sections.map((el) => ({
    link: `#${el.id}`,
    label: el.dataset.nav,
  }));

let sectionsOffsetTop = {};

sections.forEach((e) => {
  sectionsOffsetTop[e.id] = e.offsetTop;
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
menuItems.forEach((element, index) => {
  const li = document.createElement("li"),
    a = document.createElement("a");

  a.href = element.link;
  a.innerText = element.label;

  if (index === 0) {
    a.classList.add("active");
  }

  a.addEventListener("click", (e) => {
    let targetBlock = document.querySelector(e.target.hash);
    e.preventDefault();
    window.scrollTo({
      top: targetBlock.offsetTop,
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

  for (el in sectionsOffsetTop) {
    if (sectionsOffsetTop[el] <= scrollPosition) {
      document.querySelector(".active").setAttribute("class", "");
      document
        .querySelector("a[href*=" + el + "]")
        .setAttribute("class", "active");

      //   document
      document.querySelector("section.active").setAttribute("class", " ");
      document.getElementById(el).setAttribute("class", "active");
    }
  }
};
