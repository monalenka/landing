document.addEventListener('DOMContentLoaded', function () {
    fetch('assets/data/timetable.json')
        .then(response => response.json())
        .then(data => {
            const timetableData = data.timetableData;
            initTimetable(timetableData);
        })


    initTimetable(timetableData);
});

function initTimetable(timetableData) {
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
                <button class="timetable__action-btn" aria-label="Записаться">
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