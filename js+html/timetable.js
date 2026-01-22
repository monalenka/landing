document.addEventListener('DOMContentLoaded', function () {
    fetch('assets/data/timetable.json')
        .then(response => response.json())
        .then(data => {
            const timetableData = data.timetableData;
            initTimetable(timetableData);
        })
});

let currentTimetableData = null;

function createModal() {
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';

    modalOverlay.innerHTML = `
        <div class="modal">
            <button class="modal__close" aria-label="Закрыть"></button>
            <div class="modal__form-container">
                <h2 class="modal__title">Записаться<br>на тренировку</h2>
                
                <div class="modal__class-info"></div>
                <div class="modal__divider"></div>
                
                <form class="modal__form" novalidate>
                    <div class="modal__phone-group">
                        <input type="tel" 
                               class="modal__input phone-input" 
                               placeholder="Номер телефона"
                               required
                               maxlength="18">
                        <div class="modal__input-line"></div>
                    </div>
                    
                    <div class="modal__comment-group">
                        <input type="text" 
                               class="modal__input comment-input" 
                               placeholder="Комментарий">
                        <div class="modal__input-line"></div>
                    </div>
                    <div class="modal__checkbox-group">
                        <input type="checkbox" 
                               class="modal__checkbox" 
                               id="privacy-policy"
                               required>
                        <label for="privacy-policy" class="modal__checkbox-label">
                            Принимаю условия политики конфиденциальности
                        </label>
                    </div>
                    
                    <button type="submit" class="modal__submit">записаться</button>
                </form>
            </div>
            
            <div class="modal__success" style="display: none;">
                <div class="modal__success-title">спасибо!<br>ваша заявка принята</div>
                <div class="modal__success-message">Наш менеджер свяжется с вами<br>в ближайшее время</div>
            </div>
        </div>
    `;

    document.body.appendChild(modalOverlay);

    const phoneInput = modalOverlay.querySelector('.phone-input');
    phoneInput.addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, '');
        let formattedValue = '';

        if (value.length > 0) {
            formattedValue = '+7 ';
            if (value.length > 1) {
                formattedValue += '(' + value.substring(1, 4);
            }
            if (value.length >= 4) {
                formattedValue += ') ' + value.substring(4, 7);
            }
            if (value.length >= 7) {
                formattedValue += '-' + value.substring(7, 9);
            }
            if (value.length >= 9) {
                formattedValue += '-' + value.substring(9, 11);
            }
        }
        e.target.value = formattedValue;
    });

    const form = modalOverlay.querySelector('.modal__form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let isValid = true;

        const phoneValue = phoneInput.value.replace(/\D/g, '');
        if (phoneValue.length !== 11) {
            ;
            isValid = false;
        }

        const checkbox = modalOverlay.querySelector('#privacy-policy');
        if (!checkbox.checked) {
            isValid = false;
        }

        if (isValid) {
            const formContainer = modalOverlay.querySelector('.modal__form-container');
            const successContainer = modalOverlay.querySelector('.modal__success');

            formContainer.style.display = 'none';
            successContainer.style.display = 'block';
        }
    });

    const closeBtn = modalOverlay.querySelector('.modal__close');
    closeBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', function (e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    return modalOverlay;
}

function openModal(className, classTime) {
    const modalOverlay = document.querySelector('.modal-overlay') || createModal();
    const classInfo = modalOverlay.querySelector('.modal__class-info');
    classInfo.textContent = `${className} (${classTime})`;
    modalOverlay.style.display = 'flex';

    const form = modalOverlay.querySelector('.modal__form');
    form.reset();
    modalOverlay.querySelectorAll('.error-message').forEach(el => {
        el.style.display = 'none';
    });
}

function closeModal() {
    const modalOverlay = document.querySelector('.modal-overlay');
    if (modalOverlay) {
        modalOverlay.style.display = 'none';
    }
}

function initTimetable(timetableData) {
    currentTimetableData = timetableData;
    const timetableSection = document.getElementById('timetable-section');
    const description = timetableData.description

    timetableSection.innerHTML = `
    <div class="timetable">
        <h2 class="timetable__title">${timetableData.title}</h2>
        <p class="timetable__description">${description}</p>
        <img src="assets/images/side-view-woman-rolling-yoga-mat.png" alt="Йога" class="timetable__image">
        
        <div class="timetable__days">
            ${createDay(timetableData.days)}
        </div>
        
        <div class="timetable__table">
            <div class="timetable__header">
                <div class="timetable__header-item">Направление</div>
                <div class="timetable__header-item">Время</div>
                <div class="timetable__header-item">Длительность</div>
            </div>
            ${getClasses(timetableData.days.find(day => day.active)?.classes || [])}
        </div>
    </div>
`;
    function getClasses(classes) {
        if (!classes || classes.length === 0) {
            return '<div class="timetable__no-classes">На этот день занятий нет</div>';
        }

        return classes.map(classItem => `
        <div class="timetable__row">
            <div class="timetable__class-info">
                <div class="timetable__class-name">${classItem.name}</div>
                <div class="timetable__teacher">${classItem.teacher}</div>
            </div>
            <div class="timetable__time">
                <div class="timetable__start-time">${classItem.startTime}</div>
            </div>
            <div class="timetable__duration">
                ${classItem.durationMinutes || classItem.duration}
            </div>
            <div class="timetable__teacher-column">${classItem.teacher}</div>
            <div class="timetable__actions">
                <button class="timetable__action-btn timetable__signup-btn" 
                        aria-label="Записаться"
                        data-class-name="${classItem.name}"
                        data-class-time="${classItem.startTime}">
                    <img src="assets/images/pen.svg" alt="Записаться" width="16" height="16">
                </button>
                <button class="timetable__action-btn" aria-label="Позвонить">
                    <img src="assets/images/call-seriy.svg" alt="Позвонить" width="16" height="16">
                </button>
            </div>
        </div>
    `).join('');
    }

    const dayElements = timetableSection.querySelectorAll('.timetable__day');
    dayElements.forEach(dayElement => {
        dayElement.addEventListener('click', function () {
            const dayId = parseInt(this.dataset.id);
            const activeDay = timetableData.days.find(day => day.id === dayId);

            if (activeDay) {
                dayElements.forEach(el => el.classList.remove('timetable__day--active'));
                this.classList.add('timetable__day--active');

                const tableBody = timetableSection.querySelector('.timetable__table');
                const header = tableBody.querySelector('.timetable__header');
                const classesHtml = getClasses(activeDay.classes || []);

                tableBody.innerHTML = '';
                tableBody.appendChild(header);
                tableBody.insertAdjacentHTML('beforeend', classesHtml);
            }
        });
    });

    setTimeout(() => {
        const signupButtons = timetableSection.querySelectorAll('.timetable__signup-btn');
        signupButtons.forEach(button => {
            button.addEventListener('click', function () {
                const className = this.dataset.className;
                const classTime = this.dataset.classTime;
                openModal(className, classTime);
            });
        });
    }, 100);
}

function createDay(days) {
    return days.map(day => `
            <div class="timetable__day ${day.active ? 'timetable__day--active' : ''}" data-id="${day.id}">
                <div class="timetable__day-name">${day.name}</div>
                <div class="timetable__day-line"></div>
            </div>
        `).join('');
}
;