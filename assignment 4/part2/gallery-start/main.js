
/* Looping through images */
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (let k = 1; k <= 5; k++){
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + k + '.jpg');
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', setImage);
}

function setImage(e){
  const imgPath = e.target.getAttribute('src');

  // set thumbnail as the picture displayed 
  displayedImage.setAttribute('src', imgPath);
}

