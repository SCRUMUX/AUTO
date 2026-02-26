# Encar Catalog

Каталог автомобилей в стиле Encar, построенный на дизайн-системе [@ai-ds/core](https://github.com/SCRUMUX/AICADS-).

## Быстрый старт

```bash
git clone https://github.com/SCRUMUX/AUTO.git
cd AUTO
npm run setup
```

Storybook откроется на http://localhost:6006

## Структура проекта

```
├── pages/
│   └── encar-catalog/
│       ├── EncarCatalog.tsx          # Главная страница каталога
│       ├── EncarCarCardPage.tsx      # Страница карточки автомобиля
│       └── EncarCatalog.stories.tsx  # Storybook stories
├── .storybook/                       # Конфигурация Storybook
├── .cursor/rules/                    # AI-контракты для Cursor
├── tailwind.config.cjs               # Tailwind (наследует токены ядра)
├── postcss.config.cjs
└── tsconfig.json
```

## Компонентная база

Все компоненты поступают из `@ai-ds/core`:

```tsx
import { Button } from '@ai-ds/core/components/Button';
import { Badge }  from '@ai-ds/core/components/Badge';
import { Input }  from '@ai-ds/core/components/Input';
import { SearchIcon } from '@ai-ds/core/icons';
```

## Обновление ядра

Когда выходит новая версия @ai-ds/core:

```bash
npm run update-core
```

Или вручную — измените тег в `package.json`:

```json
"@ai-ds/core": "git+https://github.com/SCRUMUX/AICADS-.git#v0.3.0"
```

Затем `npm install`.

## Скрипты

| Команда | Описание |
|---|---|
| `npm run setup` | Установка зависимостей + запуск Storybook |
| `npm run storybook` | Запуск Storybook (порт 6006) |
| `npm run storybook:build` | Сборка статического Storybook |
| `npm run update-core` | Обновить ядро дизайн-системы |
