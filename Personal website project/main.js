const thumbBar = document.querySelector('.thumb-bar');

const images = ['img/asset/SL photo 1.jpg', 'img/asset/hsad.png', 'img/asset/uni logo_2.png'];

for (let i = 0; i < images.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    thumbBar.appendChild(newImage);
}