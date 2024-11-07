const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFiles = ['pic1.jpg','pic2.jpg','pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const imageAltArr = [
    {altText: "Closeup of a human eye"},
    {altText: "Closeup of textured wavy paint"},
    {altText: "Purple and white flowers"},
    {altText: "Ancient egyptian tapestry"},
    {altText: "Butterfly sitting on a leaf"}
];

/* Functions for getting image source and alt and transferring it to displayed image */
function setDisplayedImage(event){
    const imageSrc = event.target.getAttribute('src');
    const imageAlt = event.target.getAttribute('alt');
    displayedImage.setAttribute('src',imageSrc);
    displayedImage.setAttribute('alt',imageAlt);
}

/* Looping through images */
for (let index = 0; index < imageFiles.length; index++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${imageFiles[index]}`);
    newImage.setAttribute('alt', imageAltArr[index].altText);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', setDisplayedImage);
};



/* Wiring up the Darken/Lighten button */
function darkenLighten(){
    if(btn.getAttribute("class") === "dark"){
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
};


btn.addEventListener('click',darkenLighten);