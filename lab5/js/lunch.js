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

// Функция добавления блюда в заказ
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

// Функция обновления отображения выбранных блюд
function updateSelectedItemsDisplay() {
    const container = document.getElementById('selectedItems');
    container.innerHTML = '';
    
    let total = 0;
    let hasItems = false;
    
    for (const [category, item] of Object.entries(AppState.selectedItems)) {
        if (item) {
            hasItems = true;
            total += item.price;
            
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

// Функция создания меню
function createMenu() {
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

// Функция для отправки формы
async function submitOrderForm(event) {
    event.preventDefault();
    
    // Собираем данные формы
    const formData = new FormData(document.getElementById('orderForm'));
    const formValues = Object.fromEntries(formData.entries());
    
    // Добавляем информацию о заказе
    const orderData = {
        formData: formValues,
        order: {
            items: Object.fromEntries(
                Object.entries(AppState.selectedItems)
                    .filter(([_, item]) => item !== null)
            ),
            total: calculateTotal()
        },
        timestamp: new Date().toISOString()
    };
    
    try {
        // Используем правильный URL для тестирования POST-запросов
        const response = await fetch('https://httpbin.org/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(orderData)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        console.log('Ответ сервера:', result);
        
        const newWindow = window.open('', '_blank');
        newWindow.document.write(`
            <h1>Ответ сервера</h1>
            <pre>${JSON.stringify(result, null, 2)}</pre>
            <p>Вы можете также посмотреть результат на <a href="https://httpbin.org/post" target="_blank">httpbin.org</a></p>
        `);
        
    } catch (error) {
        console.error('Ошибка при отправке заказа:', error);
        alert(`Произошла ошибка: ${error.message}`);
    }
}
function calculateTotal() {
    return Object.values(AppState.selectedItems)
        .filter(item => item !== null)
        .reduce((total, item) => total + item.price, 0);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    createMenu();
    
    // Обработчик для радиокнопок доставки
    document.querySelectorAll('input[name="delivery"]').forEach(radio => {
        radio.addEventListener('change', function() {
            document.getElementById('timeSelect').style.display = 
                this.value === 'scheduled' ? 'block' : 'none';
        });
    });
    
    // Добавляем обработчик отправки формы
    document.getElementById('orderForm').addEventListener('submit', submitOrderForm);
});