document.addEventListener('DOMContentLoaded', function () {
    const footerSection = document.getElementById('footer-section');
    footerSection.innerHTML = `
            <div class="footer__container">
                <div class="footer__logo">
                    <img src="assets/images/footer/Vector-w.svg" class="footer__logo-icon">
                    <span class="footer__logo-text">BALANCE</span>
                </div>
                
                <nav class="footer__menu">
                    <a href="#" class="footer__menu-link">Главная</a>
                    <a href="#" class="footer__menu-link">Направления</a>
                    <a href="#" class="footer__menu-link">Прайс</a>
                    <a href="#" class="footer__menu-link">Расписание</a>
                    <a href="#" class="footer__menu-link">Эксперты</a>
                    <a href="#" class="footer__menu-link">Отзывы</a>
                    <a href="#" class="footer__menu-link">FAQ</a>
                    <a href="#" class="footer__menu-link">Контакты</a>
                </nav>
                
                <div class="footer__social">
                    <a href="#" class="footer__social-link">
                        <img src="assets/images/footer/vk-w.svg" alt="ВКонтакте" class="footer__social-icon">
                    </a>
                    <a href="#" class="footer__social-link">
                        <img src="assets/images/footer/watsap-w.svg" alt="WhatsApp" class="footer__social-icon">
                    </a>
                    <a href="#" class="footer__social-link">
                        <img src="assets/images/footer/tg-w.svg" alt="Telegram" class="footer__social-icon">
                    </a>
                </div>
                
                <div class="footer__contacts">
                    <div class="footer__contact">Адрес: г. Томск, Варшавское шоссе 26</div>
                    <div class="footer__contact">Тел: +7 (924) 444-77-77</div>
                    <div class="footer__contact">Email: balans@maiil.ru</div>
                </div>
                
                <div class="footer__documents">
                    <a href="#" class="footer__personal">Согласие на обработку персональных данных</a>
                    <a href="#" class="footer__privacy">Политика конфиденциальности</a>
                </div>
            </div>
    `;
});