var moonBody = document.querySelector(".moon-body");
var moonShadow = document.querySelector(".moon-shadow");
window.onload = function() {
  let r;
  if (window.innerWidth >= window.innerHeight) {
    r = window.innerHeight / 2;
  } else {
    r = window.innerWidth / 2;
  }
  moonShadow.style.width = `${r}px`;
  moonShadow.style.height = `${r}px`;
  moonBody.style.width = `${r}px`;
  moonBody.style.height = `${r}px`;
}
window.onresize = function() {
  window.location.reload();
}
window.addEventListener("mousemove", e => {
  let x = (e.clientX / window.innerWidth) * 100;
  moonShadow.style.left = `${x}%`;
});
window.addEventListener("touchmove", e => {
  let x = (e.clientX / window.innerWidth) * 100;
  moonShadow.style.left = `${x}%`;
});
