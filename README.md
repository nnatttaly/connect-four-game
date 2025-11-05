# <span style="font-size: 3rem; font-weight: 900; background: linear-gradient(90deg, #FFB6C1, #FF8EC7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-shadow: 2px 2px 8px rgba(0,0,0,0.1); letter-spacing: 1px;">Игра «4 в ряд»</span>

Интеллектуальный поединок на поле 7×6

**Автор:** [Дмитриева Наталья](https://github.com/nnatttaly)

---

### ⚙️ Стек технологий

<img src="https://img.shields.io/badge/React-61dafb?style=for-the-badge&logo=react&logoColor=white" height="34" />
<img src="https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=typescript&logoColor=white" height="34" />
<img src="https://img.shields.io/badge/Vite-646cff?style=for-the-badge&logo=vite&logoColor=white" height="34" />

---

### 🍒 Как начать играть?

1. Клонировать репозиторий:
```sh
git clone https://github.com/nnatttaly/connect-four-game.git
```

2. Перейти в папку проекта:
```sh
cd connect-four-game
```

3. Установить зависимости:
```sh
npm install 
```

4. И запустить игру в режиме разработки:
```sh
npm run dev
```

Игра откроется по адресу: http://localhost:5173

---

### 🪄 Структура проекта

```text
📁 connect-four-game/
└── 📁 src/
    ├── 📁 components/      # Компоненты интерфейса игры
    ├── 📁 consts/          # Константы (например, размеры поля)
    ├── 📁 hooks/           # Кастомные React-хуки
    ├── 📁 pages/           # Основные страницы приложения
    ├── 📁 styles/          # Общие стили и темы
    ├── 📁 types/           # Типы данных и интерфейсы
    └── 📁 utils/           # Утилиты проекта
         └── 📄 validator.ts   # ✅ Функция validator (требование задания)
```

--- 

### 🕹️ Функциональность

#### 🌷 `/welcome`
Короткие правила и кнопка **«Играть»**  

![Welcome Page](public/screenshots/welcome.jpeg) 


#### 🧑‍🤝‍🧑 `/players`
Настройка игроков: ник, цвет и форма фишки  
Для каждого игрока своя палитра — цвета гармонируют между собой  

![Players Page](public/screenshots/players.jpeg) 


#### 🎲 `/game`
Основное поле **7×6**  
Отображается текущий игрок и его фигурка, есть возможность вернуться к настройкам или начать новую игру

![Game Page](public/screenshots/game.jpeg)
 

#### 🎯 Особенности игрового процесса:

- Автоматическое определение победителя
- Подсветка победной комбинации
- При попытке поставить фишку в заполненную колонку появляется **предупреждение**

![warning](public/screenshots/warning.jpeg)

- При победе — **конфетти**! 🎉 🎉 🎉

![confetti](public/screenshots/confetti.jpeg)

---

### 💡 Сильные стороны проекта

⚡ **React Router** — плавная навигация и приятный пользовательский опыт (SPA)

🎨 **Кастомизация игроков** — каждый может выбрать ник, цвет и форму фишки

🧁 **Типизация** — через as const и typeof array[number] 

🎉 **Конфетти** без canvas — чистый CSS, лёгкость и производительность

🌿 **Оптимизированные хуки** — useRef, cleanup в useEffect 

🧩 **Компонентный подход** — аккуратная структура, переиспользуемые элементы

📱 **Адаптивный дизайн** — комфортная игра на любом устройстве 

---

### 💖 ПРИЯТНОЙ ИГРЫ! 💖
