var moonBody = document.querySelector(".moon-body");
var moonShadow = document.querySelector(".moon-shadow")
window.onload = function() {
  let r;
  if(window.innerWidth >= window.innerHeight){
    r = window.innerHeight;
  } else {
    r = window.innerWidth;
  }
  document.querySelector(".moon-shadow").style
};
window.addEventListener("mousemove", e => {
  let percentage = (e.clientX / window.innerWidth) * 100;
  document.querySelector(".moon-shadow").style.left = `${percentage}%`;
});
