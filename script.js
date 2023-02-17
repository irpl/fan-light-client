var shade = document.querySelectorAll(".turnoff,.lamp");

for (let i = 0; i < shade.length; i++) {
  shade[i].addEventListener("click", function (e) {
    console.log(e.target.className);
  });
}

document.querySelector(".ceiling-container").addEventListener("click", function () {
  if (this.className.split(" ")[1] == "spinning") {
    this.classList.remove("spinning");
    this.classList.add("stopped");
  } else {
    this.classList.remove("stopped");
    this.classList.add("spinning");
  }
  console.log();
});
