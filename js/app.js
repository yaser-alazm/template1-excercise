let settingsBox = document.querySelector('.settings-box');
let settingsGearContainer = document.querySelector('.settings-box .gear-icon');
let settingsGear = document.querySelector('.settings-box .gear-icon .fa');
let colorOption = document.querySelector('.settings-box .colors-list li');

// **//**// */ */
// Settings Box
// **//**// */ */

// Check for local storage color value
let colorLocalValue = localStorage.getItem('main-color');

if (colorLocalValue !== null) {
  document.documentElement.style.setProperty('--main-color', colorLocalValue);

  // remove active class
  document.querySelectorAll('.colors-list li').forEach((li) => {
    li.classList.remove('active');
    // add active class
    if (li.dataset.color == colorLocalValue) {
      li.classList.add('active');
    }
  });
}

//Toggle options sidebar
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
    localStorage.setItem('main-color', e.target.dataset.color);

    // Remove active class from all sibilings
    e.target.parentElement.querySelectorAll('.active').forEach((el) => {
      el.classList.remove('active');
    });

    // Add active class to current list element
    li.classList.add('active');
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
