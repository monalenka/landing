document.addEventListener('DOMContentLoaded', function () {
    fetch('data/directions.json')
        .then(response => response.json())
        .then(data => {
            const directions = data.directions;
            initDirections(directions);
        })
        .catch(error => {
            console.error('Ошибка с загрузкой данных:', error);
            const fallbackData = {
                "directions": [
                    {
                        "id": 1,
                        "name": "Кундалини-йога",
                        "tagName": "Кундалини-йога",
                        "description": "Сочетает довольно интенсивные упражнения, специальную дыхательную практику, повторяющиеся асаны. Помогает увеличить уровень энергии и силы, снять напряжение и стресс, улучшить физическую выносливость, концентрацию, стимулировать творческий потенциал и привнести глубокий внутренний покой.",
                        "days": "пн, ср, пт",
                        "duration": "60 мин",
                        "imageUrl": "assets/images/woman-digital-disconnecting-home-by-doing-yoga.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Хатха-йога",
                        "tagName": "Хатха",
                        "description": "Это классическое направление йоги, которое включает в себя асаны для укрепления мышц, дыхательные упражнения и медитацию. Регулярные занятия помогают подтянуть тело, улучшить гибкость, укрепить здоровье, придав телу силу и выносливость.",
                        "days": "пн, ср, пт",
                        "duration": "60 мин",
                        "imageUrl": "assets/images/woman-digital-disconnecting-home-by-doing-yoga.jpg"
                    },
                    {
                        "id": 3,
                        "name": "Пилатес",
                        "tagName": "Пилатес",
                        "description": "Основан на принципе баланса и координации, нацелен на укрепление мышц, улучшение гибкости, состоит из плавных и бережных движений. Пилатес работает не только с крупными, но и с мелкими мышцами.",
                        "days": "пн, ср, пт",
                        "duration": "60 мин",
                        "imageUrl": "assets/images/woman-digital-disconnecting-home-by-doing-yoga.jpg"
                    },
                    {
                        "id": 4,
                        "name": "Здоровая спина",
                        "tagName": "Здоровая спина",
                        "description": "Занятия ориентированы на гармоничное развитие тела. Регулярное выполнение упражнений формирует мышечный корсет, удерживающий позвоночник. Способствует улучшению осанки, координации движений.",
                        "days": "пн, ср, пт",
                        "duration": "60 мин",
                        "imageUrl": "assets/images/woman-digital-disconnecting-home-by-doing-yoga.jpg"
                    },
                    {
                        "id": 5,
                        "name": "Флоу-йога",
                        "tagName": "Флоу-йога",
                        "description": "Сочетает в себе элементы различных стилей йоги, позволяет быстро достичь гармонии тела и духа. Занятия йогой построены на принципах напряжения, расслабления и дыхания.",
                        "days": "пн, ср, пт",
                        "duration": "60 мин",
                        "imageUrl": "assets/images/woman-digital-disconnecting-home-by-doing-yoga.jpg"
                    },
                    {
                        "id": 6,
                        "name": "Стретчинг",
                        "tagName": "Стретчинг",
                        "description": "Стрейч, растяжка поможет снять напряжение, приобрести легкость и свободу тела. Состоит из плавных движений, которые рассчитаны на удлинение и растяжку мышц.",
                        "days": "пн, ср, пт",
                        "duration": "60 мин",
                        "imageUrl": "assets/images/woman-digital-disconnecting-home-by-doing-yoga.jpg"
                    }
                ]
            };
            initDirections(fallbackData.directions);
        });

    function initDirections(directions) {
        const tagsContainer = document.querySelector('.tags-container');
        const directionImage = document.querySelector('.direction__image__img');
        const directionName = document.querySelector('.direction__name');
        const detailTexts = document.querySelectorAll('.detail-text');
        const directionDescription = document.querySelector('.direction__description');

        tagsContainer.innerHTML = '';

        directions.forEach((direction, index) => {
            const button = document.createElement('button');
            button.className = 'tag';
            if (direction.name === "Здоровая спина") {
                button.classList.add('active');
            }
            button.textContent = direction.tagName;
            button.dataset.id = direction.id;
            tagsContainer.appendChild(button);
        });

        function updateDirectionCard(direction) {
            if (directionImage) {
                directionImage.src = direction.imageUrl;
                directionImage.alt = direction.name;
            }
            if (directionName) {
                directionName.textContent = direction.name;
            }
            if (detailTexts.length >= 2) {
                detailTexts[0].textContent = `Проходит по: ${direction.days}`;
                detailTexts[1].textContent = `Длительность: ${direction.duration}`;
            }
            if (directionDescription) {
                directionDescription.textContent = direction.description;
            }
        }

        const defaultDirection = directions.find(d => d.name === "Здоровая спина") || directions[0];
        if (defaultDirection) {
            updateDirectionCard(defaultDirection);
        }

        tagsContainer.addEventListener('click', function (event) {
            if (event.target.classList.contains('tag')) {
                document.querySelectorAll('.tag').forEach(tag => {
                    tag.classList.remove('active');
                });

                event.target.classList.add('active');

                const directionId = parseInt(event.target.dataset.id);
                const selectedDirection = directions.find(d => d.id === directionId);

                if (selectedDirection) {
                    updateDirectionCard(selectedDirection);
                }
            }
        });

        const leftArrow = document.querySelector('.arrow--left');
        const rightArrow = document.querySelector('.arrow--right');

        if (leftArrow && rightArrow) {
            leftArrow.addEventListener('click', function () {
                const currentActive = document.querySelector('.tag.active');
                const prevTag = currentActive.previousElementSibling ||
                    tagsContainer.lastElementChild;

                if (prevTag) {
                    currentActive.classList.remove('active');
                    prevTag.classList.add('active');

                    const directionId = parseInt(prevTag.dataset.id);
                    const selectedDirection = directions.find(d => d.id === directionId);

                    if (selectedDirection) {
                        updateDirectionCard(selectedDirection);
                    }
                }
            });

            rightArrow.addEventListener('click', function () {
                const currentActive = document.querySelector('.tag.active');
                const nextTag = currentActive.nextElementSibling ||
                    tagsContainer.firstElementChild;

                if (nextTag) {
                    currentActive.classList.remove('active');
                    nextTag.classList.add('active');

                    const directionId = parseInt(nextTag.dataset.id);
                    const selectedDirection = directions.find(d => d.id === directionId);

                    if (selectedDirection) {
                        updateDirectionCard(selectedDirection);
                    }
                }
            });
        }
    }
});