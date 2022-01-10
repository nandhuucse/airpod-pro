const html8 = document.documentElement;
const canvasturn = document.getElementById("turn-for-chip");
const context8 = canvasturn.getContext("2d");

const frameCount8 = 90;
const currentFrame8 = (index) =>
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/08-turn-for-chip/${index
    .toString()
    .padStart(4, "0")}.jpg`;

const preloadImages8 = () => {
  for (let i = 1; i < frameCount8; i++) {
    const img8 = new Image();
    img8.src = currentFrame8(i);
  }
};
preloadImages8();

const img8 = new Image();
img8.src = currentFrame8(1);
canvasturn.width = 1158;
canvasturn.height = 770;
img8.onload = function () {
  context8.drawImage(img8, 0, 0);
};

const updateImage8 = (index) => {
  img8.src = currentFrame8(index);
  context8.drawImage(img8, 0, 0);
};

window.addEventListener("scroll", () => {
  const scrollTop8 = html.scrollTop;
  const maxScrollTop8 = html.scrollHeight - window.innerHeight;
  const scrollFraction8 = scrollTop8 / maxScrollTop8;
  const frameIndex8 = Math.min(
    frameCount8 - 1,
    Math.ceil(scrollFraction8 * frameCount8)
  );

  // if (window.scrollY > 360 && window.scrollY < 2000) {
  requestAnimationFrame(() => updateImage8(frameIndex8 + 1));
  console.log(window.scrollY);
  // }
});

// if (window.scrollY > 360 && window.scrollY < 500) {
//   console.log(window.scrollY);
// }
