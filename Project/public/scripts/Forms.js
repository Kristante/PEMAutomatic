const elements = {
    contactButtons: [document.querySelector('.header__button'), document.querySelector('.hero__button')],
    overlays: [document.querySelector('.overlay'), document.querySelector('.overlay2')],
    closeButtons: [document.querySelector('.close-button'), document.querySelector('.close-button-second')],
    forms: {
        contact: {
            form: document.querySelector('.contact__form-form'),
            name: document.querySelector('.contact__form-name'),
            phone: document.querySelector('.contact__form-tel')
        },
        application: {
            form: document.querySelector('.application__form'),
            name: document.querySelector('.application-form-name'),
            phone: document.querySelector('.application-form-phone')
        },
        footer: {
            form: document.querySelector('.footer__application-form'),
            name: document.querySelector('.footer__form-name'),
            phone: document.querySelector('.footer__form-tel')
        }
    }
};

// Функция для показа/скрытия оверлеев
function toggleOverlay(overlay, show) {
    overlay.style.display = show ? 'flex' : 'none';
}

// Назначение обработчиков событий для кнопок показа форм
elements.contactButtons[0].addEventListener('click', () => toggleOverlay(elements.overlays[1], true));
elements.contactButtons[1].addEventListener('click', () => toggleOverlay(elements.overlays[0], true));

// Назначение обработчиков событий для кнопок закрытия форм
elements.closeButtons.forEach((button, index) => {
    button.addEventListener('click', () => toggleOverlay(elements.overlays[index], false));
});

// Функция сбора данных формы
function getDataFromForm(formType) {
    const data = {
        DateTime: new Date().toLocaleString(),
        Name: formType.name.value.toString(),
        PhoneNumber: formType.phone.value.toString()
    };

    console.log(data);
    return data;
}

// Обработка отправки форм
Object.values(elements.forms).forEach(formType => {
    formType.form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = getDataFromForm(formType);
        sendData(data);
        formType.form.reset();
        toggleOverlay(elements.overlays[0], false); // Закрытие оверлея после отправки
    });
});

// Функция отправки данных на сервер
function sendData(data) {
    fetch('http://127.0.0.1:5000/api/data', {
        mode: "cors",
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Response from Flask:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}