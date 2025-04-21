// Объект с категориями и блюдами
const MENU_CATEGORIES = {
    SOUPS: {
        name: 'soups',
        title: 'Выберите суп',
        items: [
            {
                id: 'gaspacho',
                name: 'Гаспачо',
                price: 195,
                weight: '350 г',
                filters: ['Холодный', 'Овощной', 'Средняя порция'],
                img: 'https://avatars.mds.yandex.net/i?id=3dea0fb79005e05b0cf2deda54d17687_l-8350745-images-thumbs&n=13'
            },
            {
                id: 'mushroom-soup',
                name: 'Грибной суп-пюре',
                price: 185,
                weight: '330 г',
                filters: ['Горячий', 'Грибной', 'Средняя порция'],
                img: 'https://avatars.mds.yandex.net/i?id=6ec1d8f3574ada483bb2267d23c49153_l-5222449-images-thumbs&n=13'
            },
            {
                id: 'norwegian-soup',
                name: 'Норвежский суп',
                price: 270,
                weight: '330 г',
                filters: ['Горячий', 'Рыбный', 'Большая порция'],
                img: 'https://obitel-minsk.ru/assets/images/read/2024/inside/osennie-supy-2.jpg'
            },
            {
                id: 'tomato-soup',
                name: 'Томатный суп',
                price: 220,
                weight: '350 г',
                filters: ['Горячий', 'Овощной', 'Средняя порция'],
                img: 'https://avatars.mds.yandex.net/i?id=8bf6242bad0b251bbb39855a578d7e721b32d37b-4593379-images-thumbs&n=13'
            }
        ]
    },
    APPETIZERS: {
        name: 'appetizers',
        title: 'Выберите закуску',
        items: [
            {
                id: 'bruschetta',
                name: 'Брускетта',
                price: 180,
                weight: '200 г',
                filters: ['Холодная', 'Овощная', 'Итальянская кухня'],
                img: 'https://avatars.mds.yandex.net/i?id=64c6678d7de7b136184d3e8ef3a7a69f60552be0-5292157-images-thumbs&n=13'
            },
            {
                id: 'spring-rolls',
                name: 'Спринг-роллы',
                price: 220,
                weight: '250 г',
                filters: ['Холодная', 'Овощная', 'Азиатская кухня'],
                img: 'https://avatars.mds.yandex.net/i?id=57ccd37a8adb3edf80db3678ad8e50e7d9b58d8b-5221392-images-thumbs&n=13'
            },
            {
                id: 'cheese-plate',
                name: 'Сырная тарелка',
                price: 280,
                weight: '300 г',
                filters: ['Холодная', 'Сырная', 'Французская кухня'],
                img: 'https://avatars.mds.yandex.net/i?id=42d57b33ab286881f12719d7e25520d4c270ccb2-5333586-images-thumbs&n=13'
            }
        ]
    },
    MAIN_DISHES: {
        name: 'mainDishes',
        title: 'Выберите главное блюдо',
        items: [
            {
                id: 'lasagna',
                name: 'Лазанья',
                price: 300,
                weight: '350 г',
                filters: ['Горячее', 'Мясное', 'Итальянская кухня', 'Большая порция'],
                img: 'https://avatars.mds.yandex.net/i?id=30155fd467e4b0bff8a07a9402f8d274_l-5275128-images-thumbs&n=13'
            },
            {
                id: 'shashlik',
                name: 'Шашлык',
                price: 325,
                weight: '330 г',
                filters: ['Горячее', 'Мясное', 'Кавказская кухня', 'Большая порция'],
                img: 'https://avatars.mds.yandex.net/i?id=c423b17cd20ba7508213f7ce9001eded_l-12473832-images-thumbs&n=13'
            },
            {
                id: 'grechka',
                name: 'Гречка с котлетой',
                price: 270,
                weight: '330 г',
                filters: ['Горячее', 'Мясное', 'Русская кухня', 'Средняя порция'],
                img: 'https://avatars.mds.yandex.net/i?id=c3e47053eede7aca2987fecde5169e60_l-5294324-images-thumbs&n=13'
            }
        ]
    },
    DESSERTS: {
        name: 'desserts',
        title: 'Выберите десерт',
        items: [
            {
                id: 'donat_small',
                name: 'Пончики',
                price: 200,
                weight: '3 шт',
                filters: ['Холодный', 'Кофейный', "Маленькая порция", 'Итальянская кухня'],
                img: 'https://avatars.mds.yandex.net/i?id=ab0228e6bab54be40297165eaad9c7ccd3bc6dda-5220043-images-thumbs&n=13'
            },
            {
                id: 'donat_medium',
                name: 'Пончики',
                price: 300,
                weight: '5 шт',
                filters: ['Холодный', 'Кофейный', "Средняя порция", 'Итальянская кухня'],
                img: 'https://avatars.mds.yandex.net/i?id=ab0228e6bab54be40297165eaad9c7ccd3bc6dda-5220043-images-thumbs&n=13'
            },
            {
                id: 'donat_small',
                name: 'Пончики',
                price: 400,
                weight: '8 шт',
                filters: ['Холодный', 'Кофейный', "Большая порция", 'Итальянская кухня'],
                img: 'https://avatars.mds.yandex.net/i?id=ab0228e6bab54be40297165eaad9c7ccd3bc6dda-5220043-images-thumbs&n=13'
            }
        ]
    },
    DRINKS: {
        name: 'drinks',
        title: 'Выберите напиток',
        items: [
            {
                id: 'juice',
                name: 'Сок',
                price: 300,
                weight: '400 мл',
                filters: ['Холодный', 'Фруктовый'],
                img: 'https://avatars.mds.yandex.net/i?id=8cacc1e96a91eb03475873230774b283_l-12345551-images-thumbs&n=13'
            },
            {
                id: 'cappuccino',
                name: 'Капучино',
                price: 325,
                weight: '300 мл',
                filters: ['Горячий', 'Кофе'],
                img: 'https://avatars.mds.yandex.net/i?id=719949eccf55193cb765327fd0ead87fe50d79fa-5235076-images-thumbs&n=13'
            },
            {
                id: 'water',
                name: 'Вода',
                price: 40,
                weight: '300 мл',
                filters: ['Холодный', 'Без добавок'],
                img: 'https://avatars.mds.yandex.net/i?id=8a615a2adee8b65239bf5ff03b2bcc76549d1b0d-5220621-images-thumbs&n=13'
            }
        ]
    }
};

// Состояние приложения
const AppState = {
    selectedItems: {
        soup: null,
        appetizer: null,
        mainDish: null,
        dessert: null,
        drink: null
    },
    activeFilters: {
        soups: [],
        appetizers: [],
        mainDishes: [],
        desserts: [],
        drinks: []
    }
};

const COMBO_OPTIONS = [
    {
        id: 'combo1',
        name: 'Комбо 1',
        dishes: [
            { type: 'soup', text: 'Суп', image: "https://avatars.mds.yandex.net/i?id=e67f697099a5371080cc748a7fd9a745abb2c5a3-5629755-images-thumbs&n=13" },
            { type: 'mainDish', text: 'Главное блюдо', image: "https://avatars.mds.yandex.net/i?id=257f31058fc23bee931e6e7b7baed87b0cfae7e0-9106331-images-thumbs&ref=rim&n=33&w=200&h=200" },
            { type: 'appetizer', text: 'Салат', image: "https://avatars.mds.yandex.net/i?id=1581d58340f828fdd487d72700cf80f8_sr-4079319-images-thumbs&n=13" },
            { type: 'drink', text: 'Напиток', image: "https://avatars.mds.yandex.net/i?id=889fbdd176211f86f6fb8fa0cc7cb8786d3f8642-5211644-images-thumbs&n=13" }
        ]
    },
    {
        id: 'combo2',
        name: 'Комбо 2',
        dishes: [
            { type: 'soup', text: 'Суп', image: "https://avatars.mds.yandex.net/i?id=e67f697099a5371080cc748a7fd9a745abb2c5a3-5629755-images-thumbs&n=13" },
            { type: 'mainDish', text: 'Главное блюдо', image: "https://avatars.mds.yandex.net/i?id=257f31058fc23bee931e6e7b7baed87b0cfae7e0-9106331-images-thumbs&ref=rim&n=33&w=200&h=200" },
            { type: 'drink', text: 'Напиток', image: "https://avatars.mds.yandex.net/i?id=889fbdd176211f86f6fb8fa0cc7cb8786d3f8642-5211644-images-thumbs&n=13" }
        ]
    },
    {
        id: 'combo3',
        name: 'Комбо 3',
        dishes: [
            { type: 'soup', text: 'Суп', image: "https://avatars.mds.yandex.net/i?id=e67f697099a5371080cc748a7fd9a745abb2c5a3-5629755-images-thumbs&n=13" },
            { type: 'appetizer', text: 'Салат', image: "https://avatars.mds.yandex.net/i?id=1581d58340f828fdd487d72700cf80f8_sr-4079319-images-thumbs&n=13" },
            { type: 'drink', text: 'Напиток', image: "https://avatars.mds.yandex.net/i?id=889fbdd176211f86f6fb8fa0cc7cb8786d3f8642-5211644-images-thumbs&n=13" }
        ]
    },
    {
        id: 'combo4',
        name: 'Комбо 4',
        dishes: [
            { type: 'mainDish', text: 'Главное блюдо', image: "https://avatars.mds.yandex.net/i?id=257f31058fc23bee931e6e7b7baed87b0cfae7e0-9106331-images-thumbs&ref=rim&n=33&w=200&h=200" },
            { type: 'appetizer', text: 'Салат', image: "https://avatars.mds.yandex.net/i?id=1581d58340f828fdd487d72700cf80f8_sr-4079319-images-thumbs&n=13" },
            { type: 'drink', text: 'Напиток', image: "https://avatars.mds.yandex.net/i?id=889fbdd176211f86f6fb8fa0cc7cb8786d3f8642-5211644-images-thumbs&n=13" }
        ]
    },
    {
        id: 'combo5',
        name: 'Комбо 5',
        dishes: [
            { type: 'mainDish', text: 'Главное блюдо', image: "https://avatars.mds.yandex.net/i?id=257f31058fc23bee931e6e7b7baed87b0cfae7e0-9106331-images-thumbs&ref=rim&n=33&w=200&h=200" },
            { type: 'drink', text: 'Напиток', image: "https://avatars.mds.yandex.net/i?id=889fbdd176211f86f6fb8fa0cc7cb8786d3f8642-5211644-images-thumbs&n=13" }
        ]
    }
];

// Функция переключения фильтра
function toggleFilter() {
    const filter = this.dataset.filter;
    const category = this.dataset.category;

    if (AppState.activeFilters[category].includes(filter)) {
        AppState.activeFilters[category] = AppState.activeFilters[category].filter(f => f !== filter);
        this.classList.remove('active');
    } else {
        AppState.activeFilters[category].push(filter);
        this.classList.add('active');
    }

    applyFilters();
}

// Функция сброса фильтров
function resetFilters(e) {
    e.preventDefault();
    const category = this.dataset.category;
    AppState.activeFilters[category] = [];

    document.querySelectorAll(`.filters button[data-category="${category}"]`).forEach(button => {
        button.classList.remove('active');
    });

    applyFilters();
}

// Функция применения фильтров
function applyFilters() {
    Object.values(MENU_CATEGORIES).forEach(category => {
        const cards = document.querySelectorAll(`.food-container[data-category="${category.name}"] .card`);

        cards.forEach((card, index) => {
            const item = category.items[index];
            const matchesFilters = AppState.activeFilters[category.name].length === 0 ||
                AppState.activeFilters[category.name].every(filter => item.filters.includes(filter));

            card.style.display = matchesFilters ? 'flex' : 'none';
        });
    });
}

// Обновленная функция updateSelectedItemsDisplay
function updateSelectedItemsDisplay() {
    const container = document.getElementById('selectedItems');
    container.innerHTML = '';
    
    let total = 0;
    let hasItems = false;
    
    // Сбросить все скрытые поля
    document.getElementById('hiddenSoup').value = '';
    document.getElementById('hiddenAppetizer').value = '';
    document.getElementById('hiddenMainDish').value = '';
    document.getElementById('hiddenDessert').value = '';
    document.getElementById('hiddenDrink').value = '';
    
    for (const [category, item] of Object.entries(AppState.selectedItems)) {
        if (item) {
            hasItems = true;
            total += item.price;
            
            // Установить значения в скрытые поля
            if (category === 'soup') document.getElementById('hiddenSoup').value = item.id;
            else if (category === 'appetizer') document.getElementById('hiddenAppetizer').value = item.id;
            else if (category === 'mainDish') document.getElementById('hiddenMainDish').value = item.id;
            else if (category === 'dessert') document.getElementById('hiddenDessert').value = item.id;
            else if (category === 'drink') document.getElementById('hiddenDrink').value = item.id;
            
            const itemDiv = document.createElement('div');
            itemDiv.className = 'selected-item';
            
            const img = document.createElement('img');
            img.src = item.img;
            img.alt = item.name;
            img.width = 50;
            img.height = 50;
            
            const infoDiv = document.createElement('div');
            infoDiv.className = 'item-info';
            
            const name = document.createElement('span');
            name.className = 'item-name';
            name.textContent = item.name;
            
            const price = document.createElement('span');
            price.className = 'item-price';
            price.textContent = `${item.price}₽`;
            
            const removeBtn = document.createElement('button');
            removeBtn.className = 'remove-item';
            removeBtn.textContent = '×';
            removeBtn.dataset.category = category;
            removeBtn.addEventListener('click', removeItem);
            
            infoDiv.appendChild(name);
            infoDiv.appendChild(price);
            itemDiv.appendChild(img);
            itemDiv.appendChild(infoDiv);
            itemDiv.appendChild(removeBtn);
            container.appendChild(itemDiv);
        }
    }
    
    if (!hasItems) {
        container.innerHTML = '<p>Выберите блюда из меню выше</p>';
    }
    
    document.getElementById('totalAmount').textContent = `${total}₽`;
}



// Функция удаления блюда из заказа
function removeItem(e) {
    e.preventDefault();
    const category = this.dataset.category;
    AppState.selectedItems[category] = null;
    updateSelectedItemsDisplay();
}

function getUniqueFilters(categoryName) {
    const category = Object.values(MENU_CATEGORIES).find(c => c.name === categoryName);
    if (!category) return [];

    const filters = new Set();
    category.items.forEach(item => {
        item.filters.forEach(filter => filters.add(filter));
    });
    return Array.from(filters);
}

// Функция создания блока комбо
function createComboSection() {
    const comboSection = document.querySelector('.lunch-combos');
    if (!comboSection) return;

    // Очищаем секцию перед добавлением
    comboSection.innerHTML = '';

    // Добавляем заголовок
    const title = document.createElement('h2');
    title.textContent = 'Доступные для заказа комбо';
    comboSection.appendChild(title);

    // Создаем grid-контейнер для комбо
    const comboGrid = document.createElement('div');
    comboGrid.className = 'combo-grid';

    // Добавляем каждое комбо
    COMBO_OPTIONS.forEach(combo => {
        const comboOption = document.createElement('div');
        comboOption.className = 'combo-option';
        comboOption.dataset.comboId = combo.id;

        // Добавляем название комбо
        const comboName = document.createElement('h3');
        comboName.textContent = combo.name;
        comboOption.appendChild(comboName);

        // Добавляем блюда комбо
        combo.dishes.forEach(dish => {
            const dishElement = document.createElement('div');
            dishElement.className = 'combo-dish';

            const img = document.createElement('img');
            img.src = dish.image;
            img.alt = dish.text;

            const caption = document.createElement('span');
            caption.textContent = dish.text;

            dishElement.appendChild(img);
            dishElement.appendChild(caption);
            comboOption.appendChild(dishElement);
        });

        comboGrid.appendChild(comboOption);
    });

    comboSection.appendChild(comboGrid);

    // Добавляем блок с десертами
    const dessertInfo = document.createElement('div');
    dessertInfo.className = 'dessert-info';

    const dessertText = document.createElement('p');
    dessertText.innerHTML = 'Десерт <small>(Можно добавить к любому заказу)</small>';

    const dessertImages = document.createElement('div');
    dessertImages.className = 'dessert-images';



    const img = document.createElement('img');
    img.src = "https://avatars.mds.yandex.net/i?id=d6064b4e446cd50136ff224be4e739e33dca055c-8285499-images-thumbs&n=13";
    img.alt = 'Десерт';
    dessertImages.appendChild(img);


    dessertInfo.appendChild(dessertText);
    dessertInfo.appendChild(dessertImages);
    comboSection.appendChild(dessertInfo);
}

function addItemToOrder(categoryTitle, itemName) {
    const category = Object.values(MENU_CATEGORIES).find(c => c.title === categoryTitle);
    if (!category) return;
    
    const item = category.items.find(i => i.name === itemName);
    if (!item) return;
    
    let categoryType;
    if (categoryTitle.includes('суп')) categoryType = 'soup';
    else if (categoryTitle.includes('закуск')) categoryType = 'appetizer';
    else if (categoryTitle.includes('главное')) categoryType = 'mainDish';
    else if (categoryTitle.includes('десерт')) categoryType = 'dessert';
    else if (categoryTitle.includes('напиток')) categoryType = 'drink';
    else return;
    
    AppState.selectedItems[categoryType] = item;
    updateSelectedItemsDisplay();
}

// Функция создания меню
function createMenu() {
    createComboSection();
    const menuSection = document.querySelector('section.menu');
    if (!menuSection) return;

    // Очищаем секцию меню
    menuSection.innerHTML = '';

    // Добавляем каждую категорию в секцию меню
    Object.values(MENU_CATEGORIES).forEach(category => {
        // Создаем контейнер для категории
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'menu-category';

        // Добавляем заголовок категории
        const h1 = document.createElement('h1');
        h1.textContent = category.title;
        categoryDiv.appendChild(h1);

        // Добавляем контейнер для фильтров
        const filtersDiv = document.createElement('div');
        filtersDiv.className = 'filters';

        // Добавляем кнопки фильтров
        getUniqueFilters(category.name).forEach(filter => {
            const button = document.createElement('button');
            button.textContent = filter;
            button.dataset.filter = filter;
            button.dataset.category = category.name;
            button.addEventListener('click', toggleFilter);
            filtersDiv.appendChild(button);
        });

        // Добавляем кнопку сброса фильтров
        const resetButton = document.createElement('button');
        resetButton.textContent = 'Сбросить фильтры';
        resetButton.className = 'reset-filter';
        resetButton.dataset.category = category.name;
        resetButton.addEventListener('click', resetFilters);
        filtersDiv.appendChild(resetButton);

        categoryDiv.appendChild(filtersDiv);

        // Добавляем контейнер для карточек
        const foodContainer = document.createElement('div');
        foodContainer.className = 'food-container';
        foodContainer.dataset.category = category.name;

        // Добавляем карточки блюд
        category.items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';

            card.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <div>
                    <p class="price">${item.price}₽</p>
                    <p class="name">${item.name}</p>
                    <p class="weight">${item.weight}</p>
                    <button>Добавить</button>
                </div>
            `;

            // Добавляем обработчик на кнопку
            card.querySelector('button').addEventListener('click', (e) => {
                e.preventDefault();
                addItemToOrder(category.title, item.name);
            });

            foodContainer.appendChild(card);
        });

        categoryDiv.appendChild(foodContainer);
        menuSection.appendChild(categoryDiv);
    });
}




function calculateTotal() {
    return Object.values(AppState.selectedItems)
        .filter(item => item !== null)
        .reduce((total, item) => total + item.price, 0);
}

function validateOrder() {
    const selected = AppState.selectedItems;
    const hasSoup = selected.soup !== null;
    const hasMain = selected.mainDish !== null;
    const hasSalad = selected.appetizer !== null;
    const hasDrink = selected.drink !== null;
    const hasDessert = selected.dessert !== null;

    // 1. Ничего не выбрано
    if (!hasSoup && !hasMain && !hasSalad && !hasDrink && !hasDessert) {
        showNotification('Ничего не выбрано. Выберите блюда для заказа', 'none-selected');
        return false;
    }

    // 2. Проверяем валидные комбинации
    if (hasSoup && hasMain && hasSalad && hasDrink) return true; // Комбо 1
    if (hasSoup && hasMain && hasDrink) return true;            // Комбо 2
    if (hasSoup && hasSalad && hasDrink) return true;           // Комбо 3
    if (hasMain && hasSalad && hasDrink) return true;           // Комбо 4
    if (hasMain && hasDrink) return true;                       // Комбо 5
    if ((hasSoup || hasMain || hasSalad) && hasDrink && hasDessert) return true; // Комбо + десерт

    // 3. Проверяем частичные комбинации для показа уведомлений
    if (!hasDrink) {
        showNotification('Выберите напиток для завершения заказа', 'select-drink');
        return false;
    }

    if (hasSoup && !hasMain && !hasSalad) {
        showNotification('К супу нужно выбрать главное блюдо или салат', 'select-main');
        return false;
    }

    if (!hasSoup && !hasMain && hasSalad) {
        showNotification('Добавьте главное блюдо или суп к салату', 'select-soup-or-main');
        return false;
    }

    if (!hasMain && !hasSoup && (hasDrink || hasDessert)) {
        showNotification('Выберите главное блюдо или суп', 'select-main');
        return false;
    }

    // Общее сообщение, если комбинация не распознана
    showNotification('Выбранные блюда не соответствуют ни одному варианту комбо', 'invalid-combo');
    return false;
}

// Функция показа уведомления
function showNotification(message, imageKey) {
    // Создаем оверлей, который блокирует страницу
    const overlay = document.createElement('div');
    overlay.className = 'notification-overlay';

    // Создаем контейнер уведомления
    const notification = document.createElement('div');
    notification.className = 'notification-modal';

    // Добавляем изображение (можно использовать ваши иконки)
    const notificationImage = document.createElement('div');
    notificationImage.className = 'notification-image ' + imageKey;

    // Текст сообщения
    const notificationText = document.createElement('p');
    notificationText.textContent = message;

    // Кнопка "ОКЕЙ"
    const okButton = document.createElement('button');
    okButton.className = 'notification-button';
    okButton.textContent = 'ОКЕЙ';

    // Собираем уведомление
    notification.appendChild(notificationImage);
    notification.appendChild(notificationText);
    notification.appendChild(okButton);
    overlay.appendChild(notification);

    // Добавляем на страницу
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden'; // Блокируем прокрутку

    // Обработчик закрытия
    okButton.addEventListener('click', () => {
        document.body.removeChild(overlay);
        document.body.style.overflow = ''; // Разблокируем прокрутку
    });

    // Возвращаем элемент для возможного управления
    return overlay;
}

function validateFormFields() {
    const requiredFields = [
        { id: 'name', name: 'Имя' },
        { id: 'email', name: 'Email' },
        { id: 'phone', name: 'Номер телефона' },
        { id: 'address', name: 'Адрес' }
    ];

    const emptyFields = [];
    
    requiredFields.forEach(field => {
        const value = document.getElementById(field.id).value.trim();
        if (!value) {
            emptyFields.push(field.name);
        }
    });

    if (emptyFields.length > 0) {
        const message = `Пожалуйста, заполните следующие поля:\n${emptyFields.join('\n')}`;
        showNotification(message, 'form-error');
        return false;
    }

    return true;
}

document.addEventListener('DOMContentLoaded', function() {
    createMenu();
    
    // Обработчик для радиокнопок доставки
    document.querySelectorAll('input[name="delivery"]').forEach(radio => {
        radio.addEventListener('change', function() {
            document.getElementById('timeSelect').style.display = 
                this.value === 'scheduled' ? 'block' : 'none';
        });
    });
    
    // Обработчик кнопки отправки
    document.getElementById('submitBtn').addEventListener('click', function(e) {
        e.preventDefault();
        
        // Сначала проверяем обязательные поля
        if (!validateFormFields()) {
            return;
        
        }
        
        // Затем проверяем комбо
        if (validateOrder()) {
            document.getElementById('orderForm').submit();
        }
    });
});