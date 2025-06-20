// AOS.init({
//   duration: 800, // values from 0 to 3000, with step 50ms
//   easing: "ease-in-out", // default easing for AOS animations
//   once: false, // whether animation should happen only once - while scrolling down
//   mirror: false, // whether elements should animate out while scrolling past them
//   offset: 120, // offset (in px) from the original trigger point
// });

// Original script for typing effect
{
  const jop = document.getElementById("jop");
  // jop.innerHTML += ""; // Not strictly necessary here
  setTimeout(() => {
    jop.style.opacity = "1";
  }, 500); // Delay before typing starts to ensure h1 animation completes
  let content = "Photographer";
  let index = 1;
  let stop = setInterval(() => {
    if (index > content.length) {
      clearInterval(stop);
      return; // Exit after clearing interval
    }
    jop.innerHTML = content.slice(0, index);
    index++;
  }, 200); // Typing speed
}

const navLinks = document.querySelectorAll(".nav-links");


navLinks.forEach((element) => {
  element.addEventListener("click", (eo) => {
    document.getElementsByClassName("active")[0].classList.remove("active");
    element.classList.add("active");
  });
});

// Go to Page Booking Session
{
  const btnBookingNow = document.getElementById("bookNewBtn");
  btnBookingNow.addEventListener("click", () => {
    window.location = "booking.html";
  });
}
