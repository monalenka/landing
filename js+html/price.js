document.addEventListener('DOMContentLoaded', function () {
    fetch('data/price.json')
        .then(response => response.json())
        .then(data => {
            const priceData = data.prices;
            initPrices(priceData);
        })
        .catch(error => {
            console.error('Ошибка (цены)', error);
            const fallbackData = {
                "title": "Стоимость наших тренировок",
                "note": "Первая тренировка для новых клиентов <strong>бесплатно</strong>!",
                "info": "После покупки абонемента его необходимо <strong>активировать в течение трех месяцев</strong> с момента приобретения (дата активации - первое занятие).",
                "singleSession": {
                    "price": 800,
                    "currency": "₽",
                    "count": 1,
                    "description": "занятие"
                },
                "subscriptions": [
                    {
                        "id": 1,
                        "count": 4,
                        "description": "занятия в месяц",
                        "monthPrice": 3000,
                        "sessionPrice": 750
                    },
                    {
                        "id": 2,
                        "count": 8,
                        "description": "занятий в месяц",
                        "monthPrice": 5200,
                        "sessionPrice": 650
                    },
                    {
                        "id": 3,
                        "count": 12,
                        "description": "занятий в месяц",
                        "monthPrice": 6600,
                        "sessionPrice": 550
                    },
                    {
                        "id": 4,
                        "count": null,
                        "description": "безлимит на месяц",
                        "monthPrice": 8000,
                        "sessionPrice": null,
                        "note": "зависит от вашей активности"
                    }
                ]
            };
            initPrices(fallbackData);
        });

    function initPrices(priceData) {
        const priceSection = document.getElementById('price-section');
        const tabletButton = `
        <button class="price__button price__button--tablet">
            <span class="price__button-text">Оставить отзыв</span>
        </button>
    `;

        priceSection.innerHTML = `
    <div class="price__header">
        <h2 class="price__title">${priceData.title}</h2>
        <p class="price__note">${priceData.note}</p>
        <p class="price__info">${priceData.info}</p>
    </div>

    <div class="price__description">
        <p class="price__note">${priceData.note}</p>
        <p class="price__info">${priceData.info}</p>
    </div>

    <div class="price__single">
        <div class="single-session">
            <div class="single-session__price">${priceData.singleSession.price}${priceData.singleSession.currency}</div>
            <div class="single-session__divider"></div>
            <div class="single-session__details">
                <span class="single-session__count">${priceData.singleSession.count}</span>
                <span class="single-session__text">${priceData.singleSession.description}</span>
            </div>
        </div>
        <button class="price__button price__button--mobile">
            <span class="price__button-text">записаться</span>
        </button>
    </div>

    <div class="price__cards">
        ${generatePriceCards(priceData.subscriptions)}
        ${tabletButton}
    </div>
    `;
    }


    function generatePriceCards(subscriptions) {
        const cardConfigs = {
            withCount: (sub) => ({
                countHtml: `<span class="price-card__count">${sub.count}</span>`,
                offerHtml: `<div class="price-card__session-price">${sub.sessionPrice}₽</div>`
            }),
            unlimited: (sub) => ({
                countHtml: '',
                offerHtml: `
                <div class="price-card__unlimited">
                    <span class="price-card__unlimited-text">${sub.note}</span>
                </div>`
            })
        };

        return subscriptions.map(subscription => {
            const config = subscription.sessionPrice
                ? cardConfigs.withCount(subscription)
                : cardConfigs.unlimited(subscription);

            return `
            <div class="price-card" data-id="${subscription.id}">
                <div class="price-card__main">
                    <div class="price-card__details">
                        ${config.countHtml}
                        <span class="price-card__text">${subscription.description}</span>
                    </div>
                    <div class="price-card__month-price">${subscription.monthPrice}₽</div>
                </div>
                <div class="price-card__divider"></div>
                <div class="price-card__offer">
                    <div class="price-card__offer-details">
                        <span class="price-card__offer-count">1</span>
                        <span class="price-card__offer-text">занятие</span>
                    </div>
                    ${config.offerHtml}
                </div>
            </div>
        `;
        }).join('');
    }
});