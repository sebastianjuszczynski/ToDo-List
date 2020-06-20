const imageList = [
  {
    img: "../img/1.jpg",
  },
  {
    img: "../img/2.jpg",
  },
  {
    img: ../img/3.jpg",
  },
  {
    img: "../img/4.jpg",
  },
  {
    img: "../img/5.jpg",
  },
  {
    img: "../img/6.jpg",
  },
];
const image = document.querySelector(".header__image");
let active = 1;

const imageChange = () => {
  if (active < 6) {
    image.src = imageList[active].img;
    active++;
  } else {
    active = 0;
    image.src = imageList[active].img;
    active++;
  }
};

setInterval(imageChange, 2000);
