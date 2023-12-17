function initializeSlider(modalId) {
    const slider = document.querySelectorAll(`#${modalId} .slider span`);
    const itemCount = slider.length;
    const nextItem = document.querySelector(`#${modalId} .next`);
    const previousItem = document.querySelector(`#${modalId} .previous`);
    let count = 0;

    function showNextItem() {
        slider[count].classList.remove('active');

        if (count < itemCount - 1) {
            count++;
        } else {
            count = 0;
        }

        slider[count].classList.add('active');
        console.log(count);
    }

    function showPreviousItem() {
        slider[count].classList.remove('active');

        if (count > 0) {
            count--;
        } else {
            count = itemCount - 1;
        }

        slider[count].classList.add('active');
        console.log(count);
    }

    function keyPress(e) {
        e = e || window.event;

        if (e.keyCode == '37') {
            showPreviousItem();
        } else if (e.keyCode == '39') {
            showNextItem();
        }
    }

    nextItem.addEventListener('click', showNextItem);
    previousItem.addEventListener('click', showPreviousItem);
    document.addEventListener('keydown', keyPress);
}

// Utiliser la fonction pour initialiser le slider pour chaque modal
initializeSlider('doctur');
initializeSlider('clinique');
// initializeSlider('wikicrew');
// initializeSlider('ezkeyz');
initializeSlider('mastermind');