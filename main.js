let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/lac-anosy.jpg') {
      myImage.setAttribute('src', 'images/mr.jpg');
    } else {
      myImage.setAttribute('src', 'images/lac-anosy.jpg');
    }
});let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Bienvenue, ' + myName;
  }
  if (!localStorage.getItem('nom')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Bienvenue, ' + storedName;
  }
  myButton.addEventListener('click', function() {
    setUserName();
  });