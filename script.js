

document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    const header = box.querySelector(".flex-container");
    header.addEventListener("click", () => {
      boxes.forEach((value) => value.classList.remove("expanded"));
      box.classList.add("expanded");
    });
  });
});
