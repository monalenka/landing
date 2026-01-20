document.addEventListener('DOMContentLoaded', function () {
    fetch('data/reviews.json')
        .then(response => response.json())
        .then(data => initReviews(data.reviews))
        .catch(() => initReviews(fallbackReviews));

    const fallbackReviews = [
        {
            id: 1,
            name: "Уварова Полина",
            date: "01.09.2023",
            text: "Никогда не думала, что стретчинг может быть таким увлекательным! В студии работают настоящие профессионалы, которые умеют находить подход к каждому ученику. Благодаря занятиям я стала более гибкой и уверенной в себе. Рекомендую всем, кто хочет улучшить свою физическую форму и самочувствие!",
            imageUrl: "assets/images/reviews/1.jpeg",
            active: false
        },
        {
            id: 2,
            name: "Елена Смирнова",
            date: "01.09.2023",
            text: "Я начала заниматься йогой после того, как увидела потрясающие результаты своей подруги. И знаете, я не пожалела о своем выборе! Йога помогла мне улучшить гибкость, укрепить мышцы и самое главное, научиться контролировать свои эмоции. Спасибо студии за компетентность и индивидуальный подход к каждому клиенту!",
            imageUrl: "assets/images/reviews/2.jpeg",
            active: true
        },
        {
            id: 3,
            name: "Попова Алиса",
            date: "01.09.2023",
            text: "Мне очень нравится заниматься в студии йоги и пилатеса! Здесь работают опытные инструкторы, которые всегда готовы помочь и подсказать, если что-то не получается. Кроме того, атмосфера в студии очень дружелюбная и позитивная. Я чувствую, что мое тело становится более гибким и сильным с каждым занятием.",
            imageUrl: "assets/images/reviews/3.jpeg",
            active: false
        },
        {
            id: 4,
            name: "Малышева София",
            date: "01.09.2023",
            text: "Я уже несколько месяцев занимаюсь в этой студии, очень довольна результатами. Йога, пилатес и стретчинг помогли мне укрепить мышцы, улучшить гибкость и научиться контролировать свое дыхание. Инструкторы здесь...",
            imageUrl: "assets/images/reviews/4.jpeg",
            active: false
        },
        {
            id: 5,
            name: "Головина Ева",
            date: "01.09.2023",
            text: "Я недавно начала заниматься йогой и пилатесом в этой студии, и мне очень нравится! Йога помогает мне расслабиться и улучшить свою гибкость, а пилатес укрепляет мышцы. Инструкторы в студии очень профессиональны и доброжелательны. Рекомендую эту студию всем, кто хочет заняться своим здоровьем и улучшить свою физическую форму.",
            imageUrl: "assets/images/reviews/5.jpeg",
            active: false
        },
        {
            id: 6,
            name: "Новикова Дарья",
            date: "01.09.2023",
            text: "Я долго искала подходящий фитнес-клуб, и наконец нашла его! Пилатес здесь просто потрясающий! Инструкторы всегда готовы помочь, объяснить и показать, как правильно выполнять упражнения. Атмосфера в клубе очень дружелюбная, и я чувствую, что становлюсь сильнее и здоровее с каждым занятием.",
            imageUrl: "assets/images/reviews/6.jpeg",
            active: false
        }
    ];

    function initReviews(reviews) {
        const reviewsSection = document.getElementById('reviews-section');
        if (!reviewsSection) return;

        reviewsSection.innerHTML = `
            <div class="reviews__header">
                <h2 class="reviews__title">Наши довольные клиенты</h2>
            </div>
            <div class="reviews__carousel-wrapper">
                <div class="reviews__carousel-container"></div>
            </div>
            <div class="reviews__navigation">
                <div class="navigation__arrows">
                    <button class="arrow arrow-left">
                        <img src="assets/images/left.png" alt="Предыдущий" class="arrow__icon">
                    </button>
                    <button class="arrow arrow-right">
                        <img src="assets/images/right.png" alt="Следующий" class="arrow__icon">
                    </button>
                </div>
                <div class="reviews__progress">
                    <div class="reviews__progress-bar"></div>
                    <div class="reviews__progress-fill"></div>
                </div>
            </div>
            <button class="reviews__button">оставить отзыв</button>
        `;

        const carouselContainer = reviewsSection.querySelector('.reviews__carousel-container');
        const carouselWrapper = reviewsSection.querySelector('.reviews__carousel-wrapper');
        const leftArrow = reviewsSection.querySelector('.arrow-left');
        const rightArrow = reviewsSection.querySelector('.arrow-right');
        const progressFill = reviewsSection.querySelector('.reviews__progress-fill');
        const progressBar = reviewsSection.querySelector('.reviews__progress-bar');

        let currentIndex = reviews.findIndex(review => review.active);
        if (currentIndex === -1) currentIndex = 0;
        const totalReviews = reviews.length;

        reviews.forEach(review => {
            const card = document.createElement('div');
            card.className = `review-card ${review.active ? 'active' : ''}`;
            card.dataset.id = review.id;
            card.innerHTML = `
                <div class="review-card__image">
                    <div class="review-card__avatar-container">
                        <img src="assets/images/reviews/${review.id}.svg" alt="${review.name}" onerror="this.onerror=null; this.src='assets/images/default-avatar.svg';">
                    </div>
                </div>
                <h3 class="review-card__name">${review.name}</h3>
                <div class="review-card__divider"></div>
                <p class="review-card__text">${review.text}</p>
                <div class="review-card__bottom">
                    <button class="review-card__more">Подробнее</button>
                    <div class="review-card__date">${review.date}</div>
                </div>
            `;
            carouselContainer.appendChild(card);
        });

        function getProgressBarWidth() {
            return window.innerWidth >= 768 ? 660 : 241;
        }

        function initProgressBar() {
            progressBar.style.width = `${getProgressBarWidth()}px`;
        }

        function updateProgressBar() {
            const barWidth = getProgressBarWidth();
            const fillWidth = ((currentIndex + 1) / totalReviews) * barWidth;
            progressFill.style.width = `${fillWidth}px`;
        }

        function moveCarousel() {
            const isTablet = window.innerWidth >= 768;
            const activeWidth = isTablet ? 338 : 300;
            const inactiveWidth = isTablet ? 285 : 223;
            const gap = 20;
            const viewportWidth = isTablet ? 768 : 375;
            const viewportCenter = isTablet ? 170 : viewportWidth / 2;

            let offset = 0;
            for (let i = 0; i < currentIndex; i++) {
                offset += inactiveWidth + gap;
            }
            offset += activeWidth / 2;

            let translateX = viewportCenter - offset;
            const containerWidth = carouselContainer.scrollWidth;

            if (containerWidth > viewportWidth) {
                const maxTranslate = viewportWidth - containerWidth;
                translateX = Math.max(translateX, maxTranslate);
                translateX = Math.min(translateX, 0);
            } else {
                translateX = (viewportWidth - containerWidth) / 2;
            }

            carouselContainer.style.transform = `translateX(${translateX}px)`;

            carouselContainer.querySelectorAll('.review-card').forEach((card, index) => {
                card.classList.toggle('active', index === currentIndex);
            });

            updateProgressBar();
        }

        function handleResize() {
            initProgressBar();
            moveCarousel();
        }

        leftArrow.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalReviews) % totalReviews;
            moveCarousel();
        });

        rightArrow.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalReviews;
            moveCarousel();
        });

        carouselContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('review-card__more')) {
                const card = event.target.closest('.review-card');
                const reviewId = parseInt(card.dataset.id);
                const review = reviews.find(r => r.id === reviewId);
                if (review) {
                    alert(`Полный отзыв от ${review.name}:\n\n${review.text}`);
                }
            }
        });

        const submitButton = reviewsSection.querySelector('.reviews__button');
        if (submitButton) {
            submitButton.addEventListener('click', () => {
                alert('Форма для добавления отзыва будет здесь');
            });
        }

        window.addEventListener('resize', handleResize);

        initProgressBar();
        moveCarousel();

        let touchStartX = 0;
        let touchEndX = 0;

        carouselWrapper.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        carouselWrapper.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const swipeThreshold = 50;

            if (touchStartX - touchEndX > swipeThreshold) {
                currentIndex = (currentIndex + 1) % totalReviews;
                moveCarousel();
            }

            if (touchEndX - touchStartX > swipeThreshold) {
                currentIndex = (currentIndex - 1 + totalReviews) % totalReviews;
                moveCarousel();
            }
        });
    }
});