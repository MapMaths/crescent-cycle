var moonBody = document.querySelector(".moon-body");
var moonShadow = document.querySelector(".moon-shadow");
var messageDialog = document.getElementById("message-dialog");
var messageDialogCloseButton = document.getElementById("message-dialog-close-button");
var markdownTest = document.getElementById("markdown-test");
var converter = new showdown.Converter(),
    text      = markdownTest.value,
    html      = converter.makeHtml(text);
markdownTest.innerHTML = html;
console.log(markdownTest.value);

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
  let x = (e.clientX / window.innerWidth + 0.5) * 50;
  moonShadow.style.left = `${x}%`;
});

messageDialogCloseButton.onclick = function() {
  messageDialog.close();
}