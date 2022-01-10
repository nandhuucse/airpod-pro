const html4 = document.documentElement;
const canvase = document.getElementById("explode-tips");
const context4 = canvase.getContext("2d");

const frameCount4 = 139;
const currentFrame4 = (index) =>
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/04-explode-tips/${index
    .toString()
    .padStart(4, "0")}.jpg`;

const preloadImages4 = () => {
  for (let i = 1; i < frameCount4; i++) {
    const img4 = new Image();
    img4.src = currentFrame4(i);
  }
};
preloadImages4();

const img4 = new Image();
img4.src = currentFrame4(1);
canvase.width = 1208;
canvase.height = 770;
img4.onload = function () {
  context4.drawImage(img4, 0, 0);
};

const updateImage4 = (index) => {
  img4.src = currentFrame4(index);
  context4.drawImage(img4, 0, 0);
};

window.addEventListener("scroll", () => {
  const scrollTop4 = html.scrollTop;
  const maxScrollTop4 = html.scrollHeight - window.innerHeight;
  const scrollFraction4 = scrollTop4 / maxScrollTop4;
  const frameIndex4 = Math.min(
    frameCount4 - 1,
    Math.ceil(scrollFraction4 * frameCount4)
  );

  // if (window.scrollY > 360 && window.scrollY < 2000) {
  requestAnimationFrame(() => updateImage4(frameIndex4 + 1));
  console.log(window.scrollY);
  // }
});

// if (window.scrollY > 360 && window.scrollY < 500) {
//   console.log(window.scrollY);
// }
