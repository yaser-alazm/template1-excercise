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

// Change random background option

let randomBckg = true;

let bckgInterval;

// Check local storage for background value
let bckgLocalValue = localStorage.getItem('bckg-option');

if (bckgLocalValue !== null) {
  if (bckgLocalValue == 'yes') {
    randomBckg = true;
  } else {
    randomBckg = false;
  }
} else {
  console.log('No bckg value');
}

document.querySelectorAll('.random-background .btn').forEach((btn) => {
  // remove active class
  btn.addEventListener('click', (e) => {
    e.target.parentElement.querySelectorAll('.active').forEach((el) => {
      el.classList.remove('active');
    });
    btn.classList.add('active');

    // deal with random background option
    if (e.target.dataset.bckg == 'yes') {
      randomBckg = true;
      // console.log(randomBckg);
      randomizeBckg();
    } else {
      randomBckg = false;
      clearInterval(bckgInterval);
    }

    localStorage.setItem('bckg-option', e.target.dataset.bckg);
  });

  // Compare active btn with localStorage value
  if (btn.dataset.bckg == localStorage.getItem('bckg-option')) {
    btn.parentElement.querySelectorAll('.active').forEach((ele) => {
      ele.classList.remove('active');
    });
    btn.classList.add('active');
  }
});

//**//**// */ */
// Landing Page
//**//**// */ */
let landingPage = document.querySelector('.landing-page');
let imgesArr = ['1', '2', '3', '4', '5'];

const randomizeBckg = () => {
  if (randomBckg) {
    bckgInterval = setInterval(() => {
      let randNum = Math.floor(Math.random() * imgesArr.length);
      landingPage.style.backgroundImage =
        'url("images/' + imgesArr[randNum] + '.jpeg")';
    }, 1000);
  }
};
