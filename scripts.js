var sliderBackground = document.getElementsByClassName('slider round')[0];
var checkbox = document.getElementById('check-reportees-only');

checkbox.onclick = moveSlider;

function moveSlider() {
    if (checkbox.checked) {
        turnSliderOn();
    }
    else
    {
        turnSliderOff();
    }
}

function turnSliderOn() {
    sliderBackground.id = 'slider-background-on';
    sliderBackground.style.setProperty('--transform', 'translateX(26px)');
}

function turnSliderOff() {
    sliderBackground.id = '';
    sliderBackground.style.setProperty('--transform', 'translateX(0px)');
}

