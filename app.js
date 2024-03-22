const titleOne = document.querySelector('.block h1');
const titleTwo = document.querySelector('.block h2');
const currentColor = document.querySelector('.block h2 span');
const btn = document.querySelector('.btn');

const colorList = ['#333333', '#000000', '#272822','#303FBF', '#272822', '#228B22', '#3EB489', '#40E0D0','#1B4D3E'];

// box.style.backgroundColor = color[0];
btn.addEventListener('click', () => {
  const rand = Math.floor(Math.random() * colorList.length);
  document.body.style.backgroundColor = colorList[rand];

  currentColor.textContent = colorList[rand];

  titleOne.style.color = '#fff';
  titleTwo.style.color = '#fff';
})