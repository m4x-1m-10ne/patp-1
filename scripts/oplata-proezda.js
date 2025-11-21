const locations = [
    {
        number: 1,
        name: "Информационно-справочный центр",
        address: "ул. Пушкинская, 15",
        mapLink: "https://maps.yandex.ru/-/CVwmA0OG",
        phone: "8 (800) 200-44-88",
        hours: "Пн-Пт: 09:00-18:00<br><small>(перерыв 14:00-15:00)</small>"
    },
    {
        number: 2,
        name: "Пункт продаж",
        address: "ул. Конева, 33",
        mapLink: "http://maps.yandex.ru/-/CVvRzGOk",
        phone: "-",
        hours: "9:00-20:00<br><small>(перерыв 14:00-15:00)</small>"
    },
    {
        number: 3,
        name: "ТЦ \"Остров\"",
        address: "ул. Северная, 7",
        mapLink: "http://maps.yandex.ru/-/CVbcMIMI",
        phone: "-",
        hours: "9:00-20:00<br><small>(перерыв 14:00-15:00)</small>"
    },
    {
        number: 4,
        name: "Кассы автовокзала<br><small>(ГП ВО «ДОАП»)</small>",
        address: "пл. Бабушкина, 10",
        mapLink: "https://maps.yandex.ru/-/CVDCnCOt",
        phone: "-",
        hours: "5:30-21:00"
    },
    {
        number: 5,
        name: "Вологодский почтамт",
        address: "Советский пр., 4",
        mapLink: "https://maps.yandex.ru/-/CVwhmAZz",
        phone: "72-16-34",
        hours: "Пн-Пт: 8:00-22:00<br>Сб-Вс: 9:00-18:00"
    },
    {
        number: 6,
        name: "Отделение \"Почты России\" в Лосте",
        address: "ул. Пионерская, 32",
        mapLink: "https://maps.yandex.ru/-/CVwhmKOU",
        phone: "74-91-55",
        hours: "Пн-Пт: 8:00-22:00<br>Сб-Вс: 9:00-18:00"
    },
    {
        number: 7,
        name: "Отделение \"Почты России\" в Прилуках",
        address: "ул. Колхозная, 14а",
        mapLink: "https://maps.yandex.ru/-/CVwhmKOU",
        phone: "8 (800) 100-00-00",
        hours: "Пн-Пт: 8:00-22:00<br>Сб-Вс: 9:00-18:00"
    },
    {
        number: 8,
        name: "Отделение \"Почты России\" №1",
        address: "ул. Мира, 38",
        mapLink: "https://maps.yandex.ru/-/CVwhmAok",
        phone: "57-13-34",
        hours: "Пн-Пт: 8:00-20:00<br>Сб: 9:00-18:00<br>Вс: выходной"
    },
    {
        number: 9,
        name: "Отделение \"Почты России\" №2",
        address: "ул. Тендрякова, 2",
        mapLink: "https://maps.yandex.ru/-/CVwhmIyy",
        phone: "53-00-54",
        hours: "Пн-Пт: 8:00-20:00<br>Сб: 9:00-18:00<br><small>(перерыв 13:00-14:00)</small><br>Вс: выходной"
    },
    {
        number: 10,
        name: "Отделение \"Почты России\" №4",
        address: "пр. Победы, 70",
        mapLink: "https://maps.yandex.ru/-/CVwhmI1M",
        phone: "21-67-50",
        hours: "Пн-Пт: 8:00-20:00<br>Сб: 9:00-18:00<br><small>(перерыв 13:00-14:00)</small><br>Вс: выходной"
    },
    {
        number: 11,
        name: "Отделение \"Почты России\" №5",
        address: "Окружное шоссе,26",
        mapLink: "https://maps.yandex.ru/-/CVwhmI1M",
        phone: "8 (800) 100-00-00",
        hours: "Пн-Сб: 12:00-18:00<br>Вс: выходной"
    },
    {
        number: 12,
        name: "Отделение \"Почты России\" №9",
        address: "пл. Бабушкина, 1",
        mapLink: "https://maps.yandex.ru/-/CVwhmMpd",
        phone: "56-05-63",
        hours: "Пн-Пт: 8:00-22:00<br>Сб: 9:00-18:00<br><small>(перерыв 13:00-14:00)</small><br>Вс: 9:00-18:00<br><small>(перерыв 13:00-14:00)</small>"
    },
    {
        number: 13,
        name: "Отделение \"Почты России\" №10",
        address: "ул. Кубинская, 11",
        mapLink: "http://maps.yandex.ru/-/CVriVHlm",
        phone: "78-50-90",
        hours: "Пн-Пт: 8:00-20:00<br>Сб: 9:00-18:00<br><small>(перерыв 13:00-14:00)</small><br>Вс: выходной"
    },
    {
        number: 14,
        name: "Отделение \"Почты России\" №11",
        address: "ул. Герцена, 61",
        mapLink: "https://maps.yandex.ru/-/CVwhmUjV",
        phone: "75-32-04",
        hours: "Пн-Пт: 8:00-20:00<br>Сб: 9:00-18:00<br><small>(перерыв 13:00-14:00)</small><br>Вс: выходной"
    },
    {
        number: 15,
        name: "Отделение \"Почты России\" №12",
        address: "ул. Яшина, 3",
        mapLink: "https://maps.yandex.ru/-/CVwhmYzp",
        phone: "75-20-96",
        hours: "Пн-Пт: 8:00-20:00<br>Сб: 9:00-18:00<br><small>(перерыв 13:00-14:00)</small><br>Вс: выходной"
    },
    {
        number: 16,
        name: "Отделение \"Почты России\" №14",
        address: "ул. Некрасова, 67",
        mapLink: "https://maps.yandex.ru/-/CVwhm4Jb",
        phone: "27-02-22",
        hours: "Пн-Пт: 8:00-20:00<br>Сб: 9:00-18:00<br><small>(перерыв 13:00-14:00)</small><br>Вс: выходной"
    },
    {
        number: 17,
        name: "Отделение \"Почты России\" №17",
        address: "Тепличный мкр., 2",
        mapLink: "https://maps.yandex.ru/-/CVwhmBz4",
        phone: "71-07-21",
        hours: "Пн-Пт: 9:00-17:00<br>Сб: 9:00-16:00<br><small>(перерыв 13:00-14:00)</small><br>Вс: выходной"
    },
    {
        number: 18,
        name: "Отделение \"Почты России\" №19",
        address: "ул. Чернышевского, 108",
        mapLink: "https://maps.yandex.ru/-/CVwhmFms",
        phone: "54-14-37",
        hours: "Пн-Пт: 8:00-20:00<br>Сб: 9:00-18:00<br><small>(перерыв 13:00-14:00)</small><br>Вс: выходной"
    },
    {
        number: 19,
        name: "Отделение \"Почты России\" №22",
        address: "ул. Новгородская, 23",
        mapLink: "https://maps.yandex.ru/-/CVwhmJ2e",
        phone: "71-72-29",
        hours: "Пн-Пт: 8:00-20:00<br>Сб: 9:00-18:00<br>Вс: 9:00-14:00"
    },
    {
        number: 20,
        name: "Отделение \"Почты России\" №23",
        address: "ул. Молодежная, 5б",
        mapLink: "https://maps.yandex.ru/-/CVwhmNj9",
        phone: "8 (800) 100-00-00",
        hours: "Пн-Пт: 11:00-19:00<br>Сб: 10:00-16:00<br><small>(перерыв 13:00-14:00)</small><br>Вс: выходной"
    },
    {
        number: 21,
        name: "Отделение \"Почты России\" №24",
        address: "ул. Северная, 17",
        mapLink: "https://maps.yandex.ru/-/CVwhmNj9",
        phone: "27-12-62",
        hours: "Пн-Пт: 8:00-20:00<br>Сб: 9:00-18:00<br>Вс: 9:00-18:00"
    },
    {
        number: 22,
        name: "Отделение \"Почты России\" №25",
        address: "ул. Конева, 3",
        mapLink: "https://maps.yandex.ru/-/CVwhmR2V",
        phone: "73-81-60",
        hours: "Пн-Пт: 8:00-20:00<br>Сб: 9:00-18:00<br><small>(перерыв 13:00-14:00)</small><br>Вс: выходной"
    },
    {
        number: 23,
        name: "Отделение \"Почты России\" №26",
        address: "ул. Панкратова, 80-а",
        mapLink: "https://maps.yandex.ru/-/CVwhmVjt",
        phone: "53-17-40",
        hours: "Пн-Пт: 9:00-17:00<br>Сб: 9:00-16:00<br><small>(перерыв 13:00-14:00)</small><br>Вс: выходной"
    },
    {
        number: 24,
        name: "Отделение \"Почты России\" №28",
        address: "ул. Ильюшина, 4",
        mapLink: "https://maps.yandex.ru/-/CVwhmZNp",
        phone: "51-30-41",
        hours: "Пн-Пт: 8:00-20:00<br>Сб: 9:00-18:00<br><small>(перерыв 13:00-14:00)</small><br>Вс: выходной"
    },
    {
        number: 25,
        name: "Отделение \"Почты России\" №29",
        address: "ул. Северная, 6",
        mapLink: "https://maps.yandex.ru/-/CVwhmZP3",
        phone: "27-14-00",
        hours: "Пн-Пт: 8:00-20:00<br>Сб: 9:00-18:00<br>Вс: выходной"
    },
    {
        number: 26,
        name: "Отделение \"Почты России\" №31",
        address: "ул. Авксентьевского, 6",
        mapLink: "https://maps.yandex.ru/-/CVwhm6zn",
        phone: "21-15-13",
        hours: "Пн-Пт: 8:00-19:00<br>Сб: 9:00-16:00<br><small>(перерыв 13:00-14:00)</small><br>Вс: выходной"
    },
    {
        number: 27,
        name: "Отделение \"Почты России\" №32",
        address: "Технический пер., 46-б",
        mapLink: "https://maps.yandex.ru/-/CVwhmCYw",
        phone: "73-94-30",
        hours: "Пн-Пт: 8:00-20:00<br>Сб: 9:00-18:00<br><small>(перерыв 13:00-14:00)</small><br>Вс: выходной"
    },
    {
        number: 28,
        name: "Отделение \"Почты России\" №33",
        address: "ул. Дзержинского, 37",
        mapLink: "http://maps.yandex.ru/-/CVriVTi9",
        phone: "74-58-08",
        hours: "Пн-Пт: 8:00-20:00<br>Сб: 9:00-18:00<br>Вс: выходной"
    },
    {
        number: 29,
        name: "Отделение \"Почты России\" №34",
        address: "ул. Ленинградская, 93",
        mapLink: "https://maps.yandex.ru/-/CVwhmC2L",
        phone: "53-64-08",
        hours: "Пн-Пт: 8:00-20:00<br>Сб: 9:00-19:00<br>Вс: 9:00-19:00"
    },
    {
        number: 30,
        name: "Отделение \"Почты России\" в с.Молочное",
        address: "ул. Шмидта, 28",
        mapLink: "https://maps.yandex.ru/-/CVwhmG52",
        phone: "52-53-64",
        hours: "Пн-Пт: 11:00-19:00<br>Сб: 10:00-16:00<br><small>(перерыв 13:00-14:00)</small><br>Вс: выходной"
    },
    {
        number: 31,
        name: "АО «ПАТП №1» (бухгалтерия)",
        address: "ул. Мудрова, 31",
        mapLink: "https://yandex.ru/maps/-/CKqwmIzF",
        phone: "55-66-70",
        hours: "Пн-Пт: 09:00-16:00<br><small>(перерыв 12:00-13:00)</small>"
    }
];

function highlightText(text, searchTerm) {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

function displayDesktopCards(locationsToShow, searchTerm = '') {
    const desktopCards = document.getElementById('desktopCards');
    desktopCards.innerHTML = '';
    
    locationsToShow.forEach(location => {
        const card = document.createElement('div');
        card.className = 'location-card';
        card.innerHTML = `
            <div class="card-header">
                <div class="card-number">${location.number}</div>
                <div class="card-title">${highlightText(location.name, searchTerm)}</div>
                <div class="card-subtitle">Пункт продажи проездных билетов</div>
            </div>
            <div class="card-body">
                <div class="info-item">
                    <div class="info-icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div class="info-content">
                        <div class="info-label">Адрес</div>
                        <div class="info-text">
                            <a href="${location.mapLink}" target="_blank" class="map-link">
                                ${highlightText(location.address, searchTerm)}
                                <i class="fas fa-external-link-alt"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="info-item">
                    <div class="info-icon">
                        <i class="fas fa-phone"></i>
                    </div>
                    <div class="info-content">
                        <div class="info-label">Телефон</div>
                        <div class="info-text">
                            ${location.phone !== '-' ? 
                                `<a href="tel:${location.phone.replace(/[^0-9+]/g, '')}" class="phone-link">${highlightText(location.phone, searchTerm)}</a>` : 
                                highlightText(location.phone, searchTerm)
                            }
                        </div>
                    </div>
                </div>
                <div class="info-item">
                    <div class="info-icon">
                        <i class="fas fa-clock"></i>
                    </div>
                    <div class="info-content">
                        <div class="info-label">Время работы</div>
                        <div class="info-text">${location.hours}</div>
                        ${location.hours.includes('перерыв') ? 
                            '<div class="hours-badge"><i class="fas fa-coffee"></i> Есть перерыв</div>' : 
                            ''
                        }
                    </div>
                </div>
            </div>
            <div class="card-actions">
                <a href="${location.mapLink}" target="_blank" class="action-btn">
                    <i class="fas fa-map-marked-alt"></i>
                    На карте
                </a>
                ${location.phone !== '-' ? 
                    `<a href="tel:${location.phone.replace(/[^0-9+]/g, '')}" class="action-btn primary">
                        <i class="fas fa-phone"></i>
                        Позвонить
                    </a>` : 
                    `<button class="action-btn" disabled style="opacity: 0.6;">
                        <i class="fas fa-phone"></i>
                        Нет телефона
                    </button>`
                }
            </div>
        `;
        desktopCards.appendChild(card);
    });
}

function displayMobileCards(locationsToShow, searchTerm = '') {
    const mobileCards = document.getElementById('mobileCards');
    mobileCards.innerHTML = '';
    
    locationsToShow.forEach(location => {
        const card = document.createElement('div');
        card.className = 'mobile-location-card';
        card.innerHTML = `
            <div class="mobile-card-header">
                <div class="mobile-card-number">${location.number}</div>
                <div class="mobile-card-title">${highlightText(location.name, searchTerm)}</div>
                <div class="mobile-card-subtitle">Пункт продажи проездных билетов</div>
            </div>
            <div class="mobile-card-body">
                <div class="mobile-info-section">
                    <div class="mobile-info-header">
                        <div class="mobile-info-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="mobile-info-label">Адрес</div>
                    </div>
                    <div class="mobile-info-content">
                        <a href="${location.mapLink}" target="_blank" class="mobile-map-link">
                            ${highlightText(location.address, searchTerm)}
                        </a>
                    </div>
                </div>
                <div class="mobile-info-section">
                    <div class="mobile-info-header">
                        <div class="mobile-info-icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div class="mobile-info-label">Телефон</div>
                    </div>
                    <div class="mobile-info-content">
                        ${location.phone !== '-' ? 
                            `<a href="tel:${location.phone.replace(/[^0-9+]/g, '')}" class="mobile-phone-link">${highlightText(location.phone, searchTerm)}</a>` : 
                            highlightText(location.phone, searchTerm)
                        }
                    </div>
                </div>
                <div class="mobile-info-section">
                    <div class="mobile-info-header">
                        <div class="mobile-info-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="mobile-info-label">Время работы</div>
                    </div>
                    <div class="mobile-info-content">
                        ${location.hours}
                        ${location.hours.includes('перерыв') ? 
                            '<div class="mobile-hours-badge"><i class="fas fa-coffee"></i> Есть перерыв</div>' : 
                            ''
                        }
                    </div>
                </div>
            </div>
            <div class="mobile-card-actions">
                <a href="${location.mapLink}" target="_blank" class="mobile-action-btn">
                    <i class="fas fa-map-marked-alt"></i>
                    Карта
                </a>
                ${location.phone !== '-' ? 
                    `<a href="tel:${location.phone.replace(/[^0-9+]/g, '')}" class="mobile-action-btn primary">
                        <i class="fas fa-phone"></i>
                        Позвонить
                    </a>` : 
                    `<button class="mobile-action-btn" disabled style="opacity: 0.6;">
                        <i class="fas fa-phone"></i>
                        Нет телефона
                    </button>`
                }
            </div>
        `;
        mobileCards.appendChild(card);
    });
}

function displayLocations(locationsToShow, searchTerm = '') {
    const desktopCards = document.getElementById('desktopCards');
    const mobileCards = document.getElementById('mobileCards');
    const noResults = document.getElementById('noResults');
    const resultsCount = document.getElementById('resultsCount');
    
    resultsCount.textContent = locationsToShow.length;
    
    desktopCards.innerHTML = '';
    mobileCards.innerHTML = '';
    
    if (locationsToShow.length === 0) {
        noResults.style.display = 'block';
        desktopCards.style.display = 'none';
        mobileCards.style.display = 'none';
        return;
    } else {
        noResults.style.display = 'none';
        
        if (window.innerWidth <= 768) {
            desktopCards.style.display = 'none';
            mobileCards.style.display = 'block';
            displayMobileCards(locationsToShow, searchTerm);
        } else {
            desktopCards.style.display = 'grid';
            mobileCards.style.display = 'none';
            displayDesktopCards(locationsToShow, searchTerm);
        }
    }
}

function searchLocations(searchTerm) {
    if (!searchTerm.trim()) {
        return locations;
    }
    
    const lowerSearchTerm = searchTerm.toLowerCase();
    return locations.filter(location => 
        location.name.toLowerCase().includes(lowerSearchTerm) ||
        location.address.toLowerCase().includes(lowerSearchTerm) ||
        location.phone.toLowerCase().includes(lowerSearchTerm)
    );
}

document.addEventListener('DOMContentLoaded', function() {
    displayLocations(locations);
    
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value;
        const filteredLocations = searchLocations(searchTerm);
        displayLocations(filteredLocations, searchTerm);
    });
    
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value;
        const filteredLocations = searchLocations(searchTerm);
        displayLocations(filteredLocations, searchTerm);
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const searchTerm = this.value;
            const filteredLocations = searchLocations(searchTerm);
            displayLocations(filteredLocations, searchTerm);
        }
    });
});
