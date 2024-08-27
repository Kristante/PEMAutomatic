document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.portfolio__images');
    const items = container.querySelectorAll('.portfolio__images-item');
    const leftButton = document.querySelector('.button__arrow-left');
    const rightButton = document.querySelector('.button__arrow-right');
    let activeIndex = 0;

    function updateButtons() {
        leftButton.disabled = activeIndex === 0;
        rightButton.disabled = activeIndex === items.length - 1;
    }

    function updateActiveItem() {
        items.forEach((item, index) => {
            if (index === activeIndex) {
                item.setAttribute('status', 'active');
            } else {
                item.setAttribute('status', 'nonactive');
            }
        });
        updateButtons();
    }

    rightButton.addEventListener('click', function() {
        if (activeIndex < items.length - 1) {
            activeIndex++;
            updateActiveItem();
        }
    });

    leftButton.addEventListener('click', function() {
        if (activeIndex > 0) {
            activeIndex--;
            updateActiveItem();
        }
    });

    updateActiveItem();
});