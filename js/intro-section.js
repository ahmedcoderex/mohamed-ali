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

