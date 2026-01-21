document.addEventListener('DOMContentLoaded', function () {
    const faqSection = document.getElementById('faq-section');

    if (!faqSection) return;

    faqSection.innerHTML = `
            <h2 class="faq__title">Всегда на связи<br>с клиентом</h2>
            
            <div class="faq__image-container">
                <img src="assets/images/woman-doing-yoga-cleaning-chakra.png" " class="faq__image">
                <img src="assets/images/flowers/faq-Flower.svg" class="faq__flower">
            </div>
            
            <div class="faq__content">
                <div class="faq__item active">
                    <button class="faq__question" aria-expanded="true">
                        <div class="faq__accordion-icon">
                            <div class="faq__icon-circle"></div>
                            <div class="faq__icon-horizontal"></div>
                            <div class="faq__icon-vertical"></div>
                        </div>
                        <span class="faq__question-text">Как записаться на занятия йогой? </span>
                    </button>
                    <div class="faq__answer">
                        <p class="faq__answer-text">Вы можете записаться на занятия через наш сайт или по телефону.<br>Также вы можете прийти в наш центр и записаться на ресепшене.</p>
                    </div>
                </div>
                
                <div class="faq__item">
                    <button class="faq__question" aria-expanded="false">
                        <div class="faq__accordion-icon">
                            <div class="faq__icon-circle"></div>
                            <div class="faq__icon-horizontal"></div>
                            <div class="faq__icon-vertical"></div>
                        </div>
                        <span class="faq__question-text">Нужно ли покупать коврик для занятий и другой инвентарь?</span>
                    </button>
                    <div class="faq__answer">
                        <p class="faq__answer-text">Нет, ничего покупать не нужно. Весь необходимый инвентарь: коврики, кубики, подушки для растяжки, ремни и т.д. - все это есть в студии. Вам нужно только прийти самим и не забыть взять с собой хорошее настроение!</p>
                    </div>
                </div>
                
                <div class="faq__item">
                    <button class="faq__question" aria-expanded="false">
                        <div class="faq__accordion-icon">
                            <div class="faq__icon-circle"></div>
                            <div class="faq__icon-horizontal"></div>
                            <div class="faq__icon-vertical"></div>
                        </div>
                        <span class="faq__question-text">Что нужно брать на пробное занятие?</span>
                    </button>
                    <div class="faq__answer">
                        <p class="faq__answer-text">Не было текста на макете</p>
                    </div>
                </div>
                
                <div class="faq__item">
                    <button class="faq__question" aria-expanded="false">
                        <div class="faq__accordion-icon">
                            <div class="faq__icon-circle"></div>
                            <div class="faq__icon-horizontal"></div>
                            <div class="faq__icon-vertical"></div>
                        </div>
                        <span class="faq__question-text">Смогу ли заниматься с моей комплекцией?</span>
                    </button>
                    <div class="faq__answer">
                        <p class="faq__answer-text">Нет текста на макете!</p>
                    </div>
                </div>

                 <div class="faq__item">
                    <button class="faq__question" aria-expanded="false">
                        <div class="faq__accordion-icon">
                            <div class="faq__icon-circle"></div>
                            <div class="faq__icon-horizontal"></div>
                            <div class="faq__icon-vertical"></div>
                        </div>
                        <span class="faq__question-text">Для моего возраста подойдут занятия?</span>
                    </button>
                    <div class="faq__answer">
                        <p class="faq__answer-text">Тоже нет</p>
                    </div>
                </div>
            </div>
    `;

    function initFAQAccordion() {
        const faqItems = document.querySelectorAll('.faq__item');
        const faqQuestions = document.querySelectorAll('.faq__question');

        faqItems.forEach((item, index) => {
            if (index !== 0) {
                item.classList.remove('active');
                const answer = item.querySelector('.faq__answer');
                answer.style.maxHeight = '0';
                answer.style.opacity = '0';
                answer.style.marginTop = '0';
                item.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
            }
        });

        faqQuestions.forEach(question => {
            question.addEventListener('click', function () {
                const item = this.parentElement;
                const answer = item.querySelector('.faq__answer');
                const isActive = item.classList.contains('active');

                if (!isActive) {
                    item.classList.add('active');
                    this.setAttribute('aria-expanded', 'true');

                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    answer.style.opacity = '1';
                    answer.style.marginTop = '16px';
                } else {
                    item.classList.remove('active');
                    this.setAttribute('aria-expanded', 'false');
                    answer.style.maxHeight = '0';
                    answer.style.opacity = '0';
                    answer.style.marginTop = '0';
                }
            });
        });

        window.addEventListener('resize', function () {
            const activeItem = document.querySelector('.faq__item.active');
            if (activeItem) {
                const answer = activeItem.querySelector('.faq__answer');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    }

    initFAQAccordion();
});