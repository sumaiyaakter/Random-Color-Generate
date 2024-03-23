const titleOne = document.querySelector(".block h1");
const titleTwo = document.querySelector(".block h2");
const currentColor = document.querySelector(".block .color");
const btn = document.querySelector('.btn');


function generateColor() {
  const hexCode = "abcdef0123456789";
  const arrConvert = hexCode.split("");
  let hash = "#";

  for (let i = 0; i < 6; i++) {
    const num = Math.round(Math.random() * 15);
    const numTwo = arrConvert[num];
     hash += numTwo;
  }
  return hash;
}
btn.addEventListener("click", () => {
  titleOne.style.color = '#ffffff';
  titleTwo.style.color = '#ffffff';
  
  const randomColor = generateColor();
  document.body.style.backgroundColor = randomColor;
  currentColor.style.color = randomColor;
  currentColor.textContent = randomColor;
  
});

