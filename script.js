window.onload = function() {
  if(window.innerWidth > window.innerHeight)
};
window.addEventListener("mousemove", e => {
  let percentage = (e.clientX / window.innerWidth) * 100;
  document.querySelector(".moon-shadow").style.left = `${percentage}%`;
});
