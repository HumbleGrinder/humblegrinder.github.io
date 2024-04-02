
/* Looping through images */
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const alts = {
  'pic1.jpg' : 'Eye',
  'pic2.jpg' : 'Rock',
  'pic3.jpg' : 'Flowers',
  'pic4.jpg' : 'Hieroglyphics',
  'pic5.jpg' : 'Butterfly'
};

for (let i = 0; i < images.length; i++){
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/' + images[i]);
  newImage.setAttribute('alt', alts[images[i]]); // Set alt text using the alts object
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', setImage);
}

function setImage(e){
  const imgPath = e.target.getAttribute('src');
  const imgAlt = e.target.getAttribute('alt'); // Get alt text

  // set thumbnail as the picture displayed 
  displayedImage.setAttribute('src', imgPath);
  displayedImage.setAttribute('alt', imgAlt); // Set alt text
}