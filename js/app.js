let settingsBox = document.querySelector('.settings-box');
let settingsGearContainer = document.querySelector('.settings-box .gear-icon');
let settingsGear = document.querySelector('.settings-box .gear-icon .fa');
let colorOption = document.querySelector('.settings-box .colors-list li');

// **//**// */ */
// Settings Box
// **//**// */ */

//Collapse options sidebar
settingsGearContainer.addEventListener('click', (e) => {
  e.preventDefault();
  settingsGear.classList.toggle('fa-spin');
  settingsBox.classList.toggle('opened');
});

// Change main color
let colorsArr = document.querySelectorAll('.settings-box .colors-list li');

colorsArr.forEach((li) => {
  li.addEventListener('click', (e) => {
    document.documentElement.style.setProperty(
      '--main-color',
      e.target.dataset.color,
    );
    this.classList.add('active');
  });
});

//**//**// */ */
// Landing Page
//**//**// */ */
let landingPage = document.querySelector('.landing-page');
let imgesArr = ['1', '2', '3', '4', '5'];
setInterval(() => {
  let randNum = Math.floor(Math.random() * imgesArr.length);
  landingPage.style.backgroundImage =
    'url("images/' + imgesArr[randNum] + '.jpeg")';
}, 10000);
