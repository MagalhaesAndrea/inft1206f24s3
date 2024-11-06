const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imagesFiles = ['pic1.jpg','pic2.jpg','pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const imageAlts = [
    {altText: "Closeup of a human eye"},
    {altText: "Closeup of textured wavy paint"},
    {altText: "Purple and white flowers"},
    {altText: "Ancient egyptian tapestry"},
    {altText: "Butterfly sitting on a leaf"}
];

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
