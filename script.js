window.addEnentListener("mousemove", e => {
  let percentage = 100 - (e.clientX / window.innerWidth) * 100;
  document.querySelector("#moon-shadow").style.left = percentage;
});
