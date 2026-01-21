document.addEventListener('DOMContentLoaded', function () {
    const contactsSection = document.getElementById('contacts-section');

    if (!contactsSection) return;

    contactsSection.innerHTML = `
        <section class="contacts">
            <h2 class="contacts__title">Нас можно найти</h2>
            
            <h3 class="contacts__subtitle">Свяжитесь с нами</h3>
            
            <form class="contacts__form" id="contact-form">
                <div class="contacts__form-row">
                    <div class="contacts__form-group">
                        <input type="text" class="contacts__input" placeholder=" ">
                        <label class="contacts__label">Имя</label>
                    </div>
                    <div class="contacts__form-group">
                        <input type="tel" class="contacts__input" placeholder=" ">
                        <label class="contacts__label">Номер телефона</label>
                    </div>
                </div>
                
                <div class="contacts__form-group contacts__form-group--full">
                    <input type="text" class="contacts__input" placeholder=" ">
                    <label class="contacts__label">Ваш вопрос</label>
                </div>
                
                <div class="contacts__checkbox">
                    <input type="checkbox" class="contacts__checkbox-input">
                    <label class="contacts__checkbox-label">
                        принимаю условия политики конфиденциальности
                    </label>
                </div>
                
                <div class="contacts__form-row">
                    <button type="submit" class="contacts__submit" disabled>ОТПРАВИТЬ</button>
                    
                    <div class="contacts__social">
                        <a href="#" class="contacts__social-link" aria-label="ВКонтакте">
                            <img src="assets/images/contacts/vk.svg" alt="VK" class="contacts__social-icon">
                        </a>
                        <a href="#" class="contacts__social-link" aria-label="WhatsApp">
                            <img src="assets/images/contacts/watsap.svg" alt="WhatsApp" class="contacts__social-icon">
                        </a>
                        <a href="#" class="contacts__social-link" aria-label="Telegram">
                            <img src="assets/images/contacts/tg.svg" alt="Telegram" class="contacts__social-icon">
                        </a>
                    </div>
                </div>
            </form>
            
            <div class="contacts__info">
                <div class="contacts__info-content">
                    <div class="contacts__info-item">
                        <img src="assets/images/contacts/place.svg" alt="Местоположение" class="contacts__info-icon">
                        <a href="#" class="contacts__info-text">г. Томск, Варшавское шоссе 26</a>
                    </div>
                    
                    <div class="contacts__info-item">
                        <img src="assets/images/contacts/call.svg" alt="Телефон" class="contacts__info-icon">
                        <a href="tel:+79244447777" class="contacts__info-text">+7 (924) 444-77-77</a>
                    </div>
                    
                    <div class="contacts__info-item">
                        <img src="assets/images/contacts/mail.svg" alt="Почта" class="contacts__info-icon">
                        <a href="mailto:balans@mail.ru" class="contacts__info-text">balans@mail.ru</a>
                    </div>

                    <div class="contacts__social-2">
                    <a href="#" class="contacts__social-link-2" aria-label="ВКонтакте">
                        <img src="assets/images/contacts/vk-w.svg" alt="VK" class="contacts__social-icon">
                    </a>
                    <a href="#" class="contacts__social-link-2" aria-label="WhatsApp">
                        <img src="assets/images/contacts/watsap-w.svg" alt="WhatsApp" class="contacts__social-icon">
                    </a>
                    <a href="#" class="contacts__social-link-2" aria-label="Telegram">
                        <img src="assets/images/contacts/tg-w.svg" alt="Telegram" class="contacts__social-icon">
                    </a>
                </div>
                </div>

                <div class="contacts__flower">
                <img src="assets/images/flowers/contacts-Flower.svg">
                </div>
            </div>
            
            <div class="contacts__map">
                <img src="assets/images/contacts/map.svg" alt="Карта" class="contacts__map-placeholder">
            </div>
        </section>
    `;

    initContactForm();
});