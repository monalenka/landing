document.addEventListener('DOMContentLoaded', function () {
    fetch('assets/data/directions.json')
        .then(response => response.json())
        .then(data => {
            const directions = data.directions;
            initDirections(directions);
        })

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