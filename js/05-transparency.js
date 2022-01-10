const html6 = document.documentElement;
const canvast = document.getElementById("transparency");
const context6 = canvast.getContext("2d");

const frameCount6 = 177;
const currentFrame6 = (index) =>
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/06-transparency-head/${index
    .toString()
    .padStart(4, "0")}.jpg`;

const preloadImages6 = () => {
  for (let i = 1; i < frameCount6; i++) {
    const img6 = new Image();
    img6.src = currentFrame6(i);
  }
};
preloadImages6();

const img6 = new Image();
img6.src = currentFrame6(1);
canvast.width = 1208;
canvast.height = 770;
img6.onload = function () {
  context6.drawImage(img6, 0, 0);
};

const updateImage6 = (index) => {
  img6.src = currentFrame6(index);
  context6.drawImage(img6, 0, 0);
};

window.addEventListener("scroll", () => {
  const scrollTop6 = html.scrollTop;
  const maxScrollTop6 = html.scrollHeight - window.innerHeight;
  const scrollFraction6 = scrollTop6 / maxScrollTop6;
  const frameIndex6 = Math.min(
    frameCount6 - 1,
    Math.ceil(scrollFraction6 * frameCount6)
  );

  // if (window.scrollY > 360 && window.scrollY < 2000) {
  requestAnimationFrame(() => updateImage6(frameIndex6 + 1));
  console.log(window.scrollY);
  // }
});

// if (window.scrollY > 360 && window.scrollY < 500) {
//   console.log(window.scrollY);
// }
