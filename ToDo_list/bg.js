const body = document.querySelector('body');

const IMAGE_NUM = 4;

function selectBg() {
    const num = Math.floor(Math.random()*IMAGE_NUM) + 1;
    return num;
}

function paintImage(imageNum) {
    const image = new Image();
    image.src = `assets/background_image_${selectBg()}.jpg`
    image.addEventListener('loaded', () => {console.log('background image fished loading')});
    image.classList.add('backgroundImage');
    body.appendChild(image);
}

function init() {
    paintImage(IMAGE_NUM)
}

init();