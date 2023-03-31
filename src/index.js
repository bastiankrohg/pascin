//import React from 'react';
//import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/

/***********************/
const gallery = document.getElementById('gallery');

// Replace the URLs in the following array with your own photos
const photos = [
  'photo1.jpg',
  'photo2.jpg',
  'photo3.jpg',
  // add more photos here...
];

// Loop through the array of photos and create image elements for each one
photos.forEach(photo => {
  const img = document.createElement('img');
  img.src = photo;
  img.alt = 'My photo gallery';
  gallery.appendChild(img);
});
/***********************/
