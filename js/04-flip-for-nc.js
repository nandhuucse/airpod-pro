const html5 = document.documentElement;
const canvasc = document.getElementById("flip-for-nc");
const context5 = canvasc.getContext("2d");

const frameCount5 = 140;
const currentFrame5 = (index) =>
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/05-flip-for-nc/${index
    .toString()
    .padStart(4, "0")}.jpg`;

const preloadImages5 = () => {
  for (let i = 1; i < frameCount5; i++) {
    const img5 = new Image();
    img5.src = currentFrame5(i);
  }
};

const img5 = new Image();
img5.src = currentFrame5(1);
canvasc.width = 1208;
canvasc.height = 770;
img5.onload = function () {
  context5.drawImage(img5, 0, 0);
};

const updateImage5 = (index) => {
  img5.src = currentFrame5(index);
  context5.drawImage(img5, 0, 0);
};

window.addEventListener("scroll", () => {
  const scrollTop5 = html.scrollTop;
  const maxScrollTop5 = html.scrollHeight - window.innerHeight;
  const scrollFraction5 = scrollTop5 / maxScrollTop5;
  const frameIndex5 = Math.min(
    frameCount5 - 1,
    Math.ceil(scrollFraction5 * frameCount5)
  );

  // if (window.scrollY > 360 && window.scrollY < 2000) {
  requestAnimationFrame(() => updateImage5(frameIndex5 + 1));
  console.log(window.scrollY);
  // }
});

preloadImages5();

// if (window.scrollY > 360 && window.scrollY < 500) {
//   console.log(window.scrollY);
// }
