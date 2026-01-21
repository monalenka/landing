document.addEventListener('DOMContentLoaded', function () {
    const timetableData = {
        "title": "Найдите свою практику В нашем расписании",
        "description": "Приглашаем на первое пробное занятие <strong>бесплатно</strong>!<br> Не упустите возможность попробовать что-то новое и полезное для вашего здоровья!",
        "days": [
            {
                "id": 1,
                "name": "Понедельник",
                "active": true,
                "classes": [
                    {
                        "id": 1,
                        "name": "Хатха-йога",
                        "teacher": "Ирина Беляева",
                        "startTime": "8:00",
                        "duration": "1:30",
                        "durationMinutes": "90 мин"
                    },
                    {
                        "id": 2,
                        "name": "Здоровая спина",
                        "teacher": "Ирина Беляева",
                        "startTime": "10:00",
                        "duration": "1:00",
                        "durationMinutes": "60 мин"
                    },
                    {
                        "id": 3,
                        "name": "Пилатес",
                        "teacher": "Анна Беляева",
                        "startTime": "12:00",
                        "duration": "1:30",
                        "durationMinutes": "90 мин"
                    },
                    {
                        "id": 4,
                        "name": "Флоу-йога",
                        "teacher": "Ирина Беляева",
                        "startTime": "14:00",
                        "duration": "1:40",
                        "durationMinutes": "120 мин"
                    },
                    {
                        "id": 5,
                        "name": "Стретчинг",
                        "teacher": "Анна Беляева",
                        "startTime": "16:00",
                        "duration": "1:20",
                        "durationMinutes": "80 мин"
                    },
                    {
                        "id": 6,
                        "name": "Пилатес",
                        "teacher": "Анна Беляева",
                        "startTime": "18:00",
                        "duration": "1:20",
                        "durationMinutes": "80 мин"
                    },
                    {
                        "id": 7,
                        "name": "Кундалини-йога",
                        "teacher": "Ирина Беляева",
                        "startTime": "20:00",
                        "duration": "1:20",
                        "durationMinutes": "80 мин"
                    }
                ]
            },
            {
                "id": 2,
                "name": "Вторник",
                "active": false,
                "classes": [
                    {
                        "id": 8,
                        "name": "Здоровая спина",
                        "teacher": "Екатерина Волкова",
                        "startTime": "8:00",
                        "duration": "1:00",
                        "durationMinutes": "60 мин"
                    },
                    {
                        "id": 9,
                        "name": "Хатха-йога",
                        "teacher": "Ирина Беляева",
                        "startTime": "10:00",
                        "duration": "1:30",
                        "durationMinutes": "90 мин"
                    },
                    {
                        "id": 10,
                        "name": "Пилатес",
                        "teacher": "Екатерина Волкова",
                        "startTime": "12:00",
                        "duration": "1:30",
                        "durationMinutes": "90 мин"
                    },
                    {
                        "id": 11,
                        "name": "Кундалини-йога",
                        "teacher": "Ирина Беляева",
                        "startTime": "14:00",
                        "duration": "1:40",
                        "durationMinutes": "120 мин"
                    },
                    {
                        "id": 12,
                        "name": "Стретчинг",
                        "teacher": "Анна Беляева",
                        "startTime": "16:00",
                        "duration": "1:20",
                        "durationMinutes": "80 мин"
                    },
                    {
                        "id": 13,
                        "name": "Пилатес",
                        "teacher": "Анна Беляева",
                        "startTime": "18:00",
                        "duration": "1:20",
                        "durationMinutes": "80 мин"
                    },
                    {
                        "id": 14,
                        "name": "Кундалини-йога",
                        "teacher": "Мария Смирнова",
                        "startTime": "20:00",
                        "duration": "1:20",
                        "durationMinutes": "80 мин"
                    }
                ]
            },
            {
                "id": 3,
                "name": "Среда",
                "active": false,
                "classes": [
                    {
                        "id": 15,
                        "name": "Хатха-йога",
                        "teacher": "Ирина Беляева",
                        "startTime": "8:00",
                        "duration": "1:30",
                        "durationMinutes": "90 мин"
                    },
                    {
                        "id": 16,
                        "name": "Здоровая спина",
                        "teacher": "Ирина Беляева",
                        "startTime": "10:00",
                        "duration": "1:00",
                        "durationMinutes": "60 мин"
                    },
                    {
                        "id": 17,
                        "name": "Пилатес",
                        "teacher": "Анна Беляева",
                        "startTime": "12:00",
                        "duration": "1:30",
                        "durationMinutes": "90 мин"
                    },
                    {
                        "id": 18,
                        "name": "Флоу-йога",
                        "teacher": "Ирина Беляева",
                        "startTime": "14:00",
                        "duration": "2:00",
                        "durationMinutes": "120 мин"
                    },
                    {
                        "id": 19,
                        "name": "Стретчинг",
                        "teacher": "Анна Беляева",
                        "startTime": "16:00",
                        "duration": "1:20",
                        "durationMinutes": "80 мин"
                    },
                    {
                        "id": 20,
                        "name": "Пилатес",
                        "teacher": "Анна Беляева",
                        "startTime": "18:00",
                        "duration": "1:20",
                        "durationMinutes": "80 мин"
                    },
                    {
                        "id": 21,
                        "name": "Кундалини-йога",
                        "teacher": "Ирина Беляева",
                        "startTime": "20:00",
                        "duration": "2:00",
                        "durationMinutes": "120 мин"
                    }
                ]
            },
            {
                "id": 4,
                "name": "Четверг",
                "active": false,
                "classes": [
                    {
                        "id": 15,
                        "name": "Хатха-йога",
                        "teacher": "Ирина Беляева",
                        "startTime": "8:00",
                        "duration": "1:30",
                        "durationMinutes": "90 мин"
                    },
                    {
                        "id": 16,
                        "name": "Здоровая спина",
                        "teacher": "Ирина Беляева",
                        "startTime": "10:00",
                        "duration": "1:00",
                        "durationMinutes": "60 мин"
                    },
                    {
                        "id": 17,
                        "name": "Пилатес",
                        "teacher": "Анна Беляева",
                        "startTime": "12:00",
                        "duration": "1:30",
                        "durationMinutes": "90 мин"
                    },
                    {
                        "id": 18,
                        "name": "Флоу-йога",
                        "teacher": "Ирина Беляева",
                        "startTime": "14:00",
                        "duration": "2:00",
                        "durationMinutes": "120 мин"
                    },
                    {
                        "id": 19,
                        "name": "Стретчинг",
                        "teacher": "Анна Беляева",
                        "startTime": "16:00",
                        "duration": "1:20",
                        "durationMinutes": "80 мин"
                    },
                    {
                        "id": 20,
                        "name": "Пилатес",
                        "teacher": "Анна Беляева",
                        "startTime": "18:00",
                        "duration": "1:20",
                        "durationMinutes": "80 мин"
                    },
                    {
                        "id": 21,
                        "name": "Кундалини-йога",
                        "teacher": "Ирина Беляева",
                        "startTime": "20:00",
                        "duration": "2:00",
                        "durationMinutes": "120 мин"
                    }
                ]
            },
            {
                "id": 5,
                "name": "Пятница",
                "active": false,
                "classes": [
                    {
                        "id": 8,
                        "name": "Здоровая спина",
                        "teacher": "Екатерина Волкова",
                        "startTime": "8:00",
                        "duration": "1:00",
                        "durationMinutes": "60 мин"
                    },
                    {
                        "id": 9,
                        "name": "Хатха-йога",
                        "teacher": "Ирина Беляева",
                        "startTime": "10:00",
                        "duration": "1:30",
                        "durationMinutes": "90 мин"
                    },
                    {
                        "id": 10,
                        "name": "Пилатес",
                        "teacher": "Екатерина Волкова",
                        "startTime": "12:00",
                        "duration": "1:30",
                        "durationMinutes": "90 мин"
                    },
                    {
                        "id": 11,
                        "name": "Кундалини-йога",
                        "teacher": "Ирина Беляева",
                        "startTime": "14:00",
                        "duration": "1:40",
                        "durationMinutes": "120 мин"
                    },
                    {
                        "id": 12,
                        "name": "Стретчинг",
                        "teacher": "Анна Беляева",
                        "startTime": "16:00",
                        "duration": "1:20",
                        "durationMinutes": "80 мин"
                    },
                    {
                        "id": 13,
                        "name": "Пилатес",
                        "teacher": "Анна Беляева",
                        "startTime": "18:00",
                        "duration": "1:20",
                        "durationMinutes": "80 мин"
                    },
                    {
                        "id": 14,
                        "name": "Кундалини-йога",
                        "teacher": "Мария Смирнова",
                        "startTime": "20:00",
                        "duration": "1:20",
                        "durationMinutes": "80 мин"
                    }
                ]
            },
            {
                "id": 6,
                "name": "Суббота",
                "active": false,
                "classes": [
                    {
                        "id": 8,
                        "name": "Здоровая спина",
                        "teacher": "Екатерина Волкова",
                        "startTime": "8:00",
                        "duration": "1:00",
                        "durationMinutes": "60 мин"
                    },
                    {
                        "id": 9,
                        "name": "Хатха-йога",
                        "teacher": "Ирина Беляева",
                        "startTime": "10:00",
                        "duration": "1:30",
                        "durationMinutes": "90 мин"
                    },
                    {
                        "id": 10,
                        "name": "Пилатес",
                        "teacher": "Екатерина Волкова",
                        "startTime": "12:00",
                        "duration": "1:30",
                        "durationMinutes": "90 мин"
                    },
                    {
                        "id": 11,
                        "name": "Кундалини-йога",
                        "teacher": "Ирина Беляева",
                        "startTime": "14:00",
                        "duration": "1:40",
                        "durationMinutes": "120 мин"
                    },
                    {
                        "id": 12,
                        "name": "Стретчинг",
                        "teacher": "Анна Беляева",
                        "startTime": "16:00",
                        "duration": "1:20",
                        "durationMinutes": "80 мин"
                    },
                    {
                        "id": 13,
                        "name": "Пилатес",
                        "teacher": "Анна Беляева",
                        "startTime": "18:00",
                        "duration": "1:20",
                        "durationMinutes": "80 мин"
                    },
                    {
                        "id": 14,
                        "name": "Кундалини-йога",
                        "teacher": "Мария Смирнова",
                        "startTime": "20:00",
                        "duration": "1:20",
                        "durationMinutes": "80 мин"
                    }
                ]
            }
        ]
    };

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