document.addEventListener('DOMContentLoaded', function () {
    const heroSection = document.getElementById('hero-section');

    heroSection.innerHTML = `
        <h1 class="hero__title">Студия йоги и пилатеса</h1>
        <div class="hero__image-wrapper">
            <img src="assets/images/full-shot-woman-stretching-inside.png" alt="Женщина молодец" class="hero__main-image">
            <div class="hero__zap-container">
                <button class="hero__zap"><span class="hero__zap-text">записаться</span></button>
                <img src="assets/images/flowers/anime-Flower.svg" class="hero__zap-flower">
            </div>
        </div>
        <p class="hero__subtitle">Здесь мы поможем вам держать тело в тонусе, а душу - в гармонии.</p>

        <div class="hero__flower">
            <img src="assets/images/flowers/hero-Flower.svg" alt="цветок для телефона" class="hero__flower-mobile">
            <img src="assets/images/flowers/hero-FlowerTablet.svg" alt="цветок для планшета" class="hero__flower-tablet">
        </div>

        <div class="hero__navigation">
            <div class="navigation__counter">1/3</div>
            <div class="navigation__progress">
                <div class="navigation__progress-bar"></div>
                <div class="navigation__progress-current"></div>
            </div>
            <div class="navigation__arrows">
                <button class="arrow arrow--left"><img src="assets/images/left.png" alt="Предыдущий" class="arrow__icon"></button>
                <button class="arrow arrow--right"><img src="assets/images/right.png" alt="Следующий" class="arrow__icon"></button>
            </div>
        </div>

        <div class="hero__stats">
            <div class="stats__image"><img src="assets/images/full-shot-woman-meditating.jpg" alt="Женщина спокойная" class="stats__current-img"></div>
            <div class="stats__list">
                <div class="stat"><span class="stat__number">6</span><span class="stat__text">направлений в одном абонементе</span></div>
                <div class="stat"><span class="stat__number">4</span><span class="stat__text">тренера с большим практическим опытом</span></div>
                <div class="stat"><span class="stat__number">2</span><span class="stat__text">просторных зала для занятий</span></div>
            </div>
        </div>
    `;

    const slideImages = [
        'assets/images/hero/full-shot-woman-stretching-inside.png',
        'assets/images/hero/full-shot-smiley-woman-standing-one-leg.png',
        'assets/images/hero/full-shot-woman-holding-foot.png'
    ];

    const mainImage = document.querySelector('.hero__main-image');
    const counter = document.querySelector('.navigation__counter');
    const progressCurrent = document.querySelector('.navigation__progress-current');
    const progressBar = document.querySelector('.navigation__progress-bar');
    const progressContainer = document.querySelector('.navigation__progress');
    const prevBtn = document.querySelector('.arrow--left');
    const nextBtn = document.querySelector('.arrow--right');

    let current = 0;
    const total = slideImages.length;

    const updateSlider = () => {
        mainImage.src = slideImages[current];
        counter.textContent = `${current + 1}/${total}`;

        if (progressContainer && progressCurrent && progressBar) {
            const width = (progressContainer.offsetWidth / total) * (current + 1);
            progressCurrent.style.width = `${width}px`;
            progressBar.style.width = `${width}px`;
        }
    };

    const goToSlide = (index) => {
        const newIndex = (index + total) % total;
        if (current === newIndex) return;

        const newImage = document.createElement('img');
        newImage.className = 'hero__main-image fade-in';
        newImage.src = slideImages[newIndex];
        newImage.alt = 'Женщина молодец';
        const wrapper = document.querySelector('.hero__image-wrapper');
        const oldImage = document.querySelector('.hero__main-image:not(.fade-in)');

        if (oldImage) {
            oldImage.classList.add('fade-out');
        }
        wrapper.appendChild(newImage);

        current = newIndex;
        counter.textContent = `${current + 1}/${total}`;

        if (progressContainer && progressCurrent && progressBar) {
            const width = (progressContainer.offsetWidth / total) * (current + 1);
            progressCurrent.style.width = `${width}px`;
            progressBar.style.width = `${width}px`;
        }

        setTimeout(() => {
            if (oldImage && oldImage.parentNode) {
                oldImage.remove();
            }
            newImage.classList.remove('fade-in');
        }, 300);
    };

    prevBtn.addEventListener('click', () => goToSlide(current - 1));
    nextBtn.addEventListener('click', () => goToSlide(current + 1));

    window.addEventListener('resize', () => {
        if (progressContainer && progressCurrent && progressBar) {
            const width = (progressContainer.offsetWidth / total) * (current + 1);
            progressCurrent.style.width = `${width}px`;
            progressBar.style.width = `${width}px`;
        }
    });

    setTimeout(updateSlider, 100);
});