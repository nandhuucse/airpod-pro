const html10 = document.documentElement;
const canvasfall = document.getElementById("fall-into-case");
const context10 = canvasfall.getContext("2d");

const frameCount10 = 90;
const currentFrame10 = (index) =>
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/08-turn-for-chip/${index
    .toString()
    .padStart(4, "0")}.jpg`;

const preloadImages10 = () => {
  for (let i = 1; i < frameCount10; i++) {
    const img10 = new Image();
    img10.src = currentFrame10(i);
  }
};
preloadImages10();

const img10 = new Image();
img10.src = currentFrame10(1);
canvasfall.width = 1208;
canvasfall.height = 770;
img10.onload = function () {
  context10.drawImage(img10, 0, 0);
};

const updateImage10 = (index) => {
  img10.src = currentFrame10(index);
  context10.drawImage(img10, 0, 0);
};

window.addEventListener("scroll", () => {
  const scrollTop10 = html.scrollTop;
  const maxScrollTop10 = html.scrollHeight - window.innerHeight;
  const scrollFraction10 = scrollTop10 / maxScrollTop10;
  const frameIndex10 = Math.min(
    frameCount10 - 1,
    Math.ceil(scrollFraction10 * frameCount10)
  );

  // if (window.scrollY > 360 && window.scrollY < 2000) {
  requestAnimationFrame(() => updateImage10(frameIndex10 + 1));
  console.log(window.scrollY);
  // }
});

// if (window.scrollY > 360 && window.scrollY < 500) {
//   console.log(window.scrollY);
// }
