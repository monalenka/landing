document.addEventListener('DOMContentLoaded', function () {
    const MOBILE_BREAKPOINT = 768;
    const DESKTOP_BREAKPOINT = 1600;

    let currentMode = null;
    let expertsData = null;
    let currentIndex = 0;

    function loadExpertsData() {
        fetch('data/experts.json')
            .then(response => response.json())
            .then(data => {
                expertsData = data.experts;
                initExperts();
            })
            .catch(error => {
                console.error('Ошибка загрузки (для экспертов):', error);
                expertsData = getFallbackExperts();
                initExperts();
            });
    }

    function getFallbackExperts() {
        return [
            {
                "id": 1,
                "name": "Ирина Беляева",
                "imageUrl": "assets/images/experts/1.jpg",
                "mobileImageUrl": "assets/images/experts/1-m.svg",
                "bio": "Йога-инструктор с образованием по специальности 'Физическая культура и спорт', имеет сертификат международного уровня и пять лет практического опыта."
            },
            {
                "id": 2,
                "name": "Анна Беляева",
                "imageUrl": "assets/images/experts/2.jpg",
                "mobileImageUrl": "assets/images/experts/2-m.svg",
                "bio": "Инструктор по стретчингу и пилатесу с образованием по специальности 'Физическая культура и спорт', проходила курсы по стретчингу у ведущих тренеров."
            },
            {
                "id": 3,
                "name": "Екатерина Волкова",
                "imageUrl": "assets/images/experts/3.jpg",
                "mobileImageUrl": "assets/images/experts/3-m.svg",
                "bio": "Инструктор по пилатесу и здоровой спине с медицинским образованием и сертификатами по лечебной физкультуре и массажу."
            },
            {
                "id": 4,
                "name": "Мария Смирнова",
                "imageUrl": "assets/images/experts/4.jpg",
                "mobileImageUrl": "assets/images/experts/4-m.svg",
                "bio": "Фитнес-тренер по питанию с дипломом по диетологии и нутрициологии, проходила обучение у ведущих экспертов в области здорового питания."
            }
        ];
    }

    function getCurrentMode() {
        const width = window.innerWidth;
        if (width < MOBILE_BREAKPOINT) return 'mobile';
        if (width < DESKTOP_BREAKPOINT) return 'tablet';
        return 'desktop';
    }

    function initExperts() {
        const expertsSection = document.getElementById('experts-section');

        const newMode = getCurrentMode();

        if (newMode !== currentMode) {
            currentMode = newMode;
            currentIndex = 0;
            renderLayout(expertsSection);
        }
    }

    function createCommonMarkup() {
        return `
            <h2 class="experts__title">Эксперты в области тела и разума</h2>
            <p class="experts__description">Наши инструктора сочетают свои знания и опыт, чтобы создать эффективные и интересные занятия, которые помогут вам укрепить мышечный корсет, достичь гибкости, улучшить осанку и свою физическую форму.</p>
        `;
    }

    function createNavigation() {
        return `
            <div class="experts__navigation">
                <div class="navigation__arrows">
                    <button class="arrow arrow--left">
                        <img src="assets/images/left.png" alt="Предыдущий" class="arrow__icon">
                    </button>
                    <button class="arrow arrow--right">
                        <img src="assets/images/right.png" alt="Следующий" class="arrow__icon">
                    </button>
                </div>
                
                <div class="nav__progress">
                    <div class="experts__progress-bar">
                        <div class="progress-fill"></div>
                    </div>
                </div>
            </div>
        `;
    }

    function createExpertCard(expert, options = {}) {
        const { showBio = false, isThumbnail = false, originalIndex = null } = options;

        if (isThumbnail) {
            const mobileImageUrl = expert.mobileImageUrl || expert.imageUrl;
            return `
                <div class="expert__card--mobile" data-id="${expert.id}" data-original-index="${originalIndex}">
                    <div class="expert__image--mobile">
                        <img src="${mobileImageUrl}" alt="${expert.name}" class="expert__image__img--mobile">
                    </div>
                    <h3 class="expert__name--mobile">${expert.name}</h3>
                </div>`;
        }

        if (showBio) {
            return `
                <div class="expert__card" data-id="${expert.id}">
                    <div class="expert__image">
                        <img src="${expert.imageUrl}" alt="${expert.name}" class="expert__image__img">
                    </div>
                    <div class="expert__info">
                        <h3 class="expert__name">${expert.name}</h3>
                        <p class="expert__bio">${expert.bio || ''}</p>
                    </div>
                </div>`;
        }

        return `
            <div class="expert__card" data-id="${expert.id}">
                <div class="expert__image">
                    <img src="${expert.imageUrl}" alt="${expert.name}" class="expert__image__img">
                </div>
                <h3 class="expert__name">${expert.name}</h3>
            </div>`;
    }

    function updateProgressBar() {
        const progressFill = document.querySelector('.progress-fill');
        if (!progressFill) return;
        let progressPercent;

        if (currentMode === 'mobile') {
            progressPercent = (currentIndex / (expertsData.length - 2)) * 100;
        } else {
            progressPercent = (currentIndex / (expertsData.length - 1)) * 100;
        }

        progressFill.style.width = `${Math.min(progressPercent, 100)}%`;
    }

    function updateArrows() {
        const leftArrow = document.querySelector('.arrow--left');
        const rightArrow = document.querySelector('.arrow--right');

        if (!leftArrow || !rightArrow) return;

        if (currentMode === 'mobile') {
            leftArrow.disabled = currentIndex === 0;
            rightArrow.disabled = currentIndex === expertsData.length - 2;
        } else {
            leftArrow.disabled = false;
            rightArrow.disabled = false;
        }
        leftArrow.style.opacity = leftArrow.disabled ? '0.5' : '1';
        rightArrow.style.opacity = rightArrow.disabled ? '0.5' : '1';
        leftArrow.style.cursor = leftArrow.disabled ? 'default' : 'pointer';
        rightArrow.style.cursor = rightArrow.disabled ? 'default' : 'pointer';
    }

    function renderLayout(container) {
        container.innerHTML = createCommonMarkup();

        if (currentMode === 'mobile') {
            renderMobileLayout(container);
        } else if (currentMode === 'tablet') {
            renderTabletLayout(container);
        } else {
            renderDesktopLayout(container);
        }

        container.innerHTML += createNavigation();
        setupEventListeners(container);
    }

    function renderMobileLayout(container) {
        const cardsHTML = expertsData.map(expert => createExpertCard(expert)).join('');

        container.innerHTML += `
            <div class="experts__carousel">
                <div class="carousel-container">
                    ${cardsHTML}
                </div>
            </div>
        `;
    }

    function renderTabletLayout(container) {
        const cardsHTML = expertsData.map(expert =>
            createExpertCard(expert, { showBio: true })
        ).join('');

        container.innerHTML += `
            <div class="experts__carousel">
                <div class="carousel-container">
                    ${cardsHTML}
                </div>
            </div>
        `;

        const cards = container.querySelectorAll('.expert__card');
        if (cards.length > 0) {
            cards[0].classList.add('active');
        }
    }

    function renderDesktopLayout(container) {
        container.innerHTML += `
            <div class="experts__carousel">
                <div class="carousel-container">
                    ${createExpertCard(expertsData[0], { showBio: true })}
                </div>
            </div>
            
            <div class="experts__carousel experts__carousel--mobile">
                <div class="carousel-container carousel-container--mobile">
                    ${expertsData.slice(1).map((expert, idx) =>
            createExpertCard(expert, {
                isThumbnail: true,
                originalIndex: idx + 1
            })
        ).join('')}
                </div>
            </div>
        `;
    }

    function setupEventListeners(container) {
        const leftArrow = container.querySelector('.arrow--left');
        const rightArrow = container.querySelector('.arrow--right');

        if (currentMode === 'mobile') {
            setupMobileCarousel(container, leftArrow, rightArrow);
        } else if (currentMode === 'tablet') {
            setupTabletCarousel(container, leftArrow, rightArrow);
        } else {
            setupDesktopCarousel(container, leftArrow, rightArrow);
        }

        updateProgressBar();
        updateArrows();
    }

    function setupMobileCarousel(container, leftArrow, rightArrow) {
        const carouselContainer = container.querySelector('.carousel-container');
        const CARD_WIDTH = 174;

        function scrollToIndex() {
            carouselContainer.scrollTo({
                left: currentIndex * CARD_WIDTH,
                behavior: 'smooth'
            });
        }

        leftArrow.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                scrollToIndex();
                updateProgressBar();
                updateArrows();
            }
        });

        rightArrow.addEventListener('click', () => {
            if (currentIndex < expertsData.length - 2) {
                currentIndex++;
                scrollToIndex();
                updateProgressBar();
                updateArrows();
            }
        });

        let startX = 0;
        const SWIPE_THRESHOLD = 50;

        carouselContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        carouselContainer.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;

            if (Math.abs(diff) > SWIPE_THRESHOLD) {
                if (diff > 0 && currentIndex < expertsData.length - 2) {
                    currentIndex++;
                } else if (diff < 0 && currentIndex > 0) {
                    currentIndex--;
                }

                scrollToIndex();
                updateProgressBar();
                updateArrows();
            }
        });
    }

    function setupTabletCarousel(container, leftArrow, rightArrow) {
        const cards = container.querySelectorAll('.expert__card');

        function showCard(index) {
            cards.forEach(card => card.classList.remove('active'));
            cards[index].classList.add('active');
        }

        leftArrow.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + expertsData.length) % expertsData.length;
            showCard(currentIndex);
            updateProgressBar();
        });

        rightArrow.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % expertsData.length;
            showCard(currentIndex);
            updateProgressBar();
        });
    }

    function setupDesktopCarousel(container, leftArrow, rightArrow) {
        const mainCarousel = container.querySelector('.carousel-container');
        const thumbnailsCarousel = container.querySelector('.carousel-container--mobile');

        function updateView() {
            mainCarousel.innerHTML = createExpertCard(expertsData[currentIndex], { showBio: true });

            const thumbnailsHTML = expertsData
                .filter((_, idx) => idx !== currentIndex)
                .map((expert, idx) => {
                    const originalIndex = expertsData.findIndex(e => e.id === expert.id);
                    return createExpertCard(expert, {
                        isThumbnail: true,
                        originalIndex: originalIndex
                    });
                }).join('');

            thumbnailsCarousel.innerHTML = thumbnailsHTML;
        }

        leftArrow.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + expertsData.length) % expertsData.length;
            updateView();
            updateProgressBar();
        });

        rightArrow.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % expertsData.length;
            updateView();
            updateProgressBar();
        });

        thumbnailsCarousel.addEventListener('click', (e) => {
            const thumbnail = e.target.closest('.expert__card--mobile');
            if (thumbnail && thumbnail.dataset.originalIndex) {
                currentIndex = parseInt(thumbnail.dataset.originalIndex);
                updateView();
                updateProgressBar();
            }
        });
    }

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            initExperts();
        }, 250);
    });

    loadExpertsData();
});