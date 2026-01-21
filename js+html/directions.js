document.addEventListener('DOMContentLoaded', function () {
    fetch('data/directions.json')
        .then(response => response.json())
        .then(data => {
            const directions = data.directions;
            initDirections(directions);
        })
        .catch(error => {
            console.error('Ошибка (направления):', error);
            const fallbackData = {
                "directions": [
                    {
                        "id": 1,
                        "name": "Кундалини-йога",
                        "tagName": "Кундалини-йога",
                        "description": "Сочетает довольно интенсивные упражнения, специальную дыхательную практику, повторяющиеся асаны.\n\nПомогает увеличить уровень энергии и силы, снять напряжение и стресс, улучшить физическую выносливость, концентрацию, стимулировать творческий потенциал и привнести глубокий внутренний покой. Кундалини-йога доступна людям любого возраста и физической подготовки.",
                        "days": "пн, ср, пт",
                        "duration": "60 мин",
                        "imageUrl": "assets/images/directions/1.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Хатха-йога",
                        "tagName": "Хатха-йога",
                        "description": "Это классическое направление йоги, которое включает в себя асаны для укрепления мышц, дыхательные упражнения и медитацию. Регулярные занятия помогают подтянуть тело, улучши гибкость, укрепить здоровье, придав телу силу и выносливость, а также обрести душевное равновесие.",
                        "days": "пн, ср, пт",
                        "duration": "60 мин",
                        "imageUrl": "assets/images/directions/2.jpg"
                    },
                    {
                        "id": 3,
                        "name": "Пилатес",
                        "tagName": "Пилатес",
                        "description": "Основан на принципе баланса и координации, нацелен на укрепление мышц, улучшение гибкости, состоит из плавных и бережных движений. Пилатес работает не только с крупными, но и с мелкими мышцами, которые часто остаются незадействованными при стандартных  упражнениях. Подходит для людей всех возрастов и уровней физической подготовки, включая беременных женщин и пожилых людей.",
                        "days": "пн, ср, пт",
                        "duration": "60 мин",
                        "imageUrl": "assets/images/directions/woman-digital-disconnecting-home-by-doing-yoga.jpg"
                    },
                    {
                        "id": 4,
                        "name": "Здоровая спина",
                        "tagName": "Здоровая спина",
                        "description": "Занятия ориентированы на гармоничное развитие тела. Регулярное выполнение упражнений формирует мышечный корсет, удерживающий позвоночник. Способствует улучшению осанки, координации движений, снижению веса благодаря нормализации лимфотока. Снимается психоэмоциональное напряжение.",
                        "days": "пн, ср, пт",
                        "duration": "60 мин",
                        "imageUrl": "assets/images/directions/4.jpg"
                    },
                    {
                        "id": 5,
                        "name": "Флоу-йога",
                        "tagName": "Флоу-йога",
                        "description": "Сочетает в себе элементы различных стилей йоги, позволяет быстро достичь гармонии тела и духа. Занятия йогой построены на принципах напряжения, расслабления и дыхания.  Дыхательные практики способствуют улучшению кровообращения и нормализации давления.",
                        "days": "пн, ср, пт",
                        "duration": "60 мин",
                        "imageUrl": "assets/images/directions/5.jpg"
                    },
                    {
                        "id": 6,
                        "name": "Стретчинг",
                        "tagName": "Стретчинг",
                        "description": "Стрейч, растяжка  поможет снять напряжение, приобрести легкость и свободу тела. Состоит из плавных движений, которые рассчитаны на удлинение и растяжку мышц. Стретчинг помогает улучшить гибкость тела, укрепить мышцы, улучшить подвижность суставов и снизить риск получения травм.",
                        "days": "пн, ср, пт",
                        "duration": "60 мин",
                        "imageUrl": "assets/images/directions/6.jpg"
                    }
                ]
            };
            initDirections(fallbackData.directions);
        });

    function initDirections(directions) {
        const directionsSection = document.getElementById('directions-section');

        directionsSection.innerHTML = `
            <div class="directions__header">
                <h2 class="directions__title">Все направления в одном абонементе</h2>
                <p class="directions__subtitle">Не определились с направлением? Мы подскажем!</p>
            </div>

            <div class="directions__tags">
                <div class="tags-container">
                </div>
            </div>

            <div class="direction__flower">
                <img src="assets/images/flowers/directions-Flower.svg">
            </div>

            <div class="direction__card">
                <div class="direction__image">
                    <img src="" alt="" class="direction__image__img">
                </div>

                <div class="direction__info">
                    <div class="direction__details">
                        <div class="detail-item">
                            <div class="detail-icon">
                                <img src="assets/images/calendar.svg" alt="Календарь">
                            </div>
                            <span class="detail-text"></span>
                        </div>

                        <div class="detail-item">
                            <div class="detail-icon">
                                <img src="assets/images/timer.svg" alt="Таймер">
                            </div>
                            <span class="detail-text"></span>
                        </div>
                    </div>

                    <h3 class="direction__name"></h3>
                    <p class="direction__description"></p>
                </div>

                <div class="direction__navigation">
                    <div class="navigation__arrows">
                        <button class="arrow arrow--left">
                            <img src="assets/images/left.png" alt="Предыдущий" class="arrow__icon">
                        </button>
                        <button class="arrow arrow--right">
                            <img src="assets/images/right.png" alt="Следующий" class="arrow__icon">
                        </button>
                    </div>

                    <div class="nav__progress">
                        <div class="progress-bar">
                            <div class="progress-fill"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const tagsContainer = directionsSection.querySelector('.tags-container');
        const directionName = directionsSection.querySelector('.direction__name');
        const detailTexts = directionsSection.querySelectorAll('.detail-text');
        const directionDescription = directionsSection.querySelector('.direction__description');
        const progressFill = directionsSection.querySelector('.progress-fill');
        const progressBar = directionsSection.querySelector('.progress-bar');
        tagsContainer.innerHTML = '';

        directions.forEach((direction, index) => {
            const button = document.createElement('button');
            button.className = 'tag';
            if (direction.name === "Кундалини-йога") {
                button.classList.add('active');
            }
            button.textContent = direction.tagName;
            button.dataset.id = direction.id;
            button.dataset.index = index;
            tagsContainer.appendChild(button);
        });

        function updateDirectionCard(direction, directionIndex = null) {
            const directionImage = directionsSection.querySelector('.direction__image__img');

            if (directionImage) {
                const newImage = document.createElement('img');
                newImage.className = 'direction__image__img fade-in';
                newImage.src = direction.imageUrl;
                newImage.alt = direction.name;

                const imageContainer = directionsSection.querySelector('.direction__image');
                const oldImage = imageContainer.querySelector('.direction__image__img:not(.fade-in)');

                if (oldImage) oldImage.classList.add('fade-out');
                imageContainer.appendChild(newImage);

                setTimeout(() => {
                    if (oldImage && oldImage.parentNode) oldImage.remove();
                    newImage.classList.remove('fade-in');
                }, 300);
            }

            if (progressFill && progressBar) {
                const total = directions.length;
                const widthPercent = ((directionIndex + 1) / total) * 100;
                progressFill.style.width = `${widthPercent}%`;
            }
            if (directionName) directionName.textContent = direction.name;
            if (detailTexts.length >= 2) {
                detailTexts[0].textContent = `Проходит по: ${direction.days}`;
                detailTexts[1].textContent = `Длительность: ${direction.duration}`;
            }
            if (directionDescription) {
                directionDescription.textContent = direction.description;
                directionDescription.style.whiteSpace = 'pre-line';
            }
        }

        const defaultDirection = directions.find(d => d.name === "Здоровая спина") || directions[0];
        if (defaultDirection) {
            const defaultIndex = directions.findIndex(d => d.id === defaultDirection.id);
            updateDirectionCard(defaultDirection, defaultIndex);
        }

        tagsContainer.addEventListener('click', function (event) {
            if (event.target.classList.contains('tag')) {
                document.querySelectorAll('.tag').forEach(tag => {
                    tag.classList.remove('active');
                });

                event.target.classList.add('active');

                const directionId = parseInt(event.target.dataset.id);
                const directionIndex = parseInt(event.target.dataset.index);
                const selectedDirection = directions.find(d => d.id === directionId);

                if (selectedDirection) {
                    updateDirectionCard(selectedDirection, directionIndex);
                }
            }
        });

        const leftArrow = directionsSection.querySelector('.arrow--left');
        const rightArrow = directionsSection.querySelector('.arrow--right');

        if (leftArrow && rightArrow) {
            leftArrow.addEventListener('click', function () {
                const currentActive = directionsSection.querySelector('.tag.active');
                const prevTag = currentActive.previousElementSibling || tagsContainer.lastElementChild;

                if (prevTag) {
                    currentActive.classList.remove('active');
                    prevTag.classList.add('active');

                    const directionId = parseInt(prevTag.dataset.id);
                    const directionIndex = parseInt(prevTag.dataset.index);
                    const selectedDirection = directions.find(d => d.id === directionId);

                    if (selectedDirection) {
                        updateDirectionCard(selectedDirection, directionIndex);
                    }
                }
            });

            rightArrow.addEventListener('click', function () {
                const currentActive = directionsSection.querySelector('.tag.active');
                const nextTag = currentActive.nextElementSibling || tagsContainer.firstElementChild;

                if (nextTag) {
                    currentActive.classList.remove('active');
                    nextTag.classList.add('active');

                    const directionId = parseInt(nextTag.dataset.id);
                    const directionIndex = parseInt(nextTag.dataset.index);
                    const selectedDirection = directions.find(d => d.id === directionId);

                    if (selectedDirection) {
                        updateDirectionCard(selectedDirection, directionIndex);
                    }
                }
            });
        }
    }
});