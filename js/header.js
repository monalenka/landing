document.addEventListener('DOMContentLoaded', function () {
    const headerSection = document.getElementById('header-section');
    headerSection.innerHTML = `
        <div class="header__logo">
            <img src="assets/images/Vector.svg" alt="штучка">
            <span class="logo-text">BALANCE</span>
        </div>

        <nav class="header__nav">
            <a href="#" class="nav__link">Программы</a>
            <a href="#" class="nav__link">Прайс</a>
            <a href="#" class="nav__link">Расписание</a>
            <a href="#" class="nav__link">Отзывы</a>
            <a href="#" class="nav__link">Контакты</a>
        </nav>

        <a href="tel:+79244447777" class="header__phone">
            <img src="assets/images/call.svg" alt="звонок">
            <span class="phone-number">+7 (924) 444-77-77</span>
        </a>

        <button class="header__menu-btn">
            <img src="assets/images/menu.svg" alt="меню">
        </button>
    `;
});