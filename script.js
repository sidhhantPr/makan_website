const navBar = () => {
  const menu = document.querySelector("#menu");
  const navitem = document.querySelector(".navitem");
  menu.addEventListener("click", () => {
    navitem.classList.toggle("nav--a");
  });
};
navBar();
/*carsoul */
const img = document.querySelectorAll(".body_right img");
const btn_left = document.querySelector(".btn_left");
const btn_right = document.querySelector(".btn_right");
let c = 0;
let i_count = 0;
img.forEach((image, index) => {
  image.style.left = `${index * 100}%`;
  i_count++;
});
function buttonLeft() {
  c--;
  slideImage();
}
function buttonRight() {
  c++;
  console.log("right");
  slideImage();
}
function slideImage() {
  img.forEach((slide) => {
    if (c >= 0 && c < i_count)
      slide.style.transform = `translateX(-${c * 100}%)`;
  });
}
