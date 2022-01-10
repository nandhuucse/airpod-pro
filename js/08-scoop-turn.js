const html9 = document.documentElement;
const canvasscoop = document.getElementById("scoop-turn");
const context9 = canvasscoop.getContext("2d");

const frameCount9 = 235;
const currentFrame9 = (index) =>
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/09-scoop-turn/${index
    .toString()
    .padStart(4, "0")}.jpg`;

const preloadImages9 = () => {
  for (let i = 1; i < frameCount9; i++) {
    const img9 = new Image();
    img9.src = currentFrame9(i);
  }
};
preloadImages9();

const img9 = new Image();
img9.src = currentFrame9(1);
canvasscoop.width = 1208;
canvasscoop.height = 770;
img9.onload = function () {
  context9.drawImage(img9, 0, 0);
};

const updateImage9 = (index) => {
  img9.src = currentFrame9(index);
  context9.drawImage(img9, 0, 0);
};

window.addEventListener("scroll", () => {
  const scrollTop9 = html.scrollTop;
  const maxScrollTop9 = html.scrollHeight - window.innerHeight;
  const scrollFraction9 = scrollTop9 / maxScrollTop9;
  const frameIndex9 = Math.min(
    frameCount9 - 1,
    Math.ceil(scrollFraction9 * frameCount9)
  );

  // if (window.scrollY > 360 && window.scrollY < 2000) {
  requestAnimationFrame(() => updateImage9(frameIndex9 + 1));
  console.log(window.scrollY);
  // }
});

// if (window.scrollY > 360 && window.scrollY < 500) {
//   console.log(window.scrollY);
// }
