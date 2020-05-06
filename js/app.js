let landingPage = document.querySelector('.landing-page');
let imgesArr = ['1', '2', '3', '4', '5'];
setInterval(() => {
  let randNum = Math.floor(Math.random() * imgesArr.length);
  landingPage.style.backgroundImage =
    'url("images/' + imgesArr[randNum] + '.jpeg")';
}, 3000);
