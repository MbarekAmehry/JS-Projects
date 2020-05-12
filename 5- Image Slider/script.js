const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const container = document.querySelector(".container");

nextBtn.addEventListener("click", nextPic);
prevBtn.addEventListener("click", prevPic);

let i = 0;

function nextPic() {
    animation()
  if (i === 7) {
    i = -1;
  }
  i++;
  container.style.backgroundImage = `url(img/pic-${i}.jpg )`;
}

function prevPic() {
    animation()
  if (i === 0) {
    i = 8;
  }
  i--;
  container.style.backgroundImage = `url(img/pic-${i}.jpg )`;
}

function animation(){
    container.animate([{ opacity: "0.2" }, { opacity: "1.0" }], {
        duration: 1500,
        fill: 'forwards'
      });
}
