const html2 = document.documentElement;
const canvasn = document.getElementById("head-bob-turn");
const context2 = canvasn.getContext("2d");

const frameCount2 = 132;
const currentFrame2 = (index) =>
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/02-head-bob-turn/${index
    .toString()
    .padStart(4, "0")}.jpg`;

const preloadImages2 = () => {
  for (let i = 1; i < frameCount2; i++) {
    const img2 = new Image();
    img2.src = currentFrame2(i);
  }
};

const img2 = new Image();
img2.src = currentFrame2(1);
canvasn.width = 1208;
canvasn.height = 770;
img2.onload = function () {
  context2.drawImage(img2, 0, 0);
};

const updateImage2 = (index) => {
  img2.src = currentFrame2(index);
  context2.drawImage(img2, 0, 0);
};

window.addEventListener("scroll", () => {
  const scrollTop2 = html.scrollTop;
  const maxScrollTop2 = html.scrollHeight - window.innerHeight;
  const scrollFraction2 = scrollTop2 / maxScrollTop2;
  const frameIndex2 = Math.min(
    frameCount2 - 1,
    Math.ceil(scrollFraction2 * frameCount2)
  );

  // if (window.scrollY > 360 && window.scrollY < 2000) {
  requestAnimationFrame(() => updateImage2(frameIndex2 + 1));
  console.log(window.scrollY);
  // }
});

preloadImages2();

// if (window.scrollY > 360 && window.scrollY < 500) {
//   console.log(window.scrollY);
// }
