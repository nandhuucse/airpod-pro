const html7 = document.documentElement;
const canvasr = document.getElementById("flip-reveal-guts");
const context7 = canvasr.getContext("2d");

const frameCount7 = 69;
const currentFrame7 = (index) =>
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/07-flip-reveal-guts/${index
    .toString()
    .padStart(4, "0")}.jpg`;

const preloadImages7 = () => {
  for (let i = 1; i < frameCount7; i++) {
    const img7 = new Image();
    img7.src = currentFrame7(i);
  }
};
preloadImages7();

const img7 = new Image();
img7.src = currentFrame7(1);
canvasr.width = 1158;
canvasr.height = 770;
img7.onload = function () {
  context7.drawImage(img7, 0, 0);
};

const updateImage7 = (index) => {
  img7.src = currentFrame7(index);
  context7.drawImage(img7, 0, 0);
};

window.addEventListener("scroll", () => {
  const scrollTop7 = html.scrollTop;
  const maxScrollTop7 = html.scrollHeight - window.innerHeight;
  const scrollFraction7 = scrollTop7 / maxScrollTop7;
  const frameIndex7 = Math.min(
    frameCount7 - 1,
    Math.ceil(scrollFraction7 * frameCount7)
  );

  // if (window.scrollY > 360 && window.scrollY < 2000) {
  requestAnimationFrame(() => updateImage7(frameIndex7 + 1));
  console.log(window.scrollY);
  // }
});

// if (window.scrollY > 360 && window.scrollY < 500) {
//   console.log(window.scrollY);
// }
