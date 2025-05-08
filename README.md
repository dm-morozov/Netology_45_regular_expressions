# Домашнее задание к занятию "Регулярные выражения"

[![Build status](https://ci.appveyor.com/api/projects/status/w637s9dd2bhwy5pd?svg=true)](https://ci.appveyor.com/project/dm-morozov/netology-45-regular-expressions)
![Netology](https://img.shields.io/badge/Netology-JavaScript-blue)
![Jest Coverage](https://img.shields.io/badge/Покрытие-100%25-brightgreen)

## 📝 Описание проекта

Это домашнее задание к лекции [«Регулярные выражения» курса JavaScript](./README_for_Netology.md) от Нетологии. Проект реализован как отдельный репозиторий на GitHub и включает две задачи:

1. **Никнеймы**: Реализация валидации имени пользователя с помощью регулярных выражений.
2. **Телефоны** (задача со звёздочкой): Очистка и приведение номеров телефонов к единому формату.

Код написан на JavaScript, использует шаблон Webpack, проходит ESLint без ошибок и имеет 100% покрытие тестами по строкам (Jest). Затраченное время на изучение темы 10 часов.

## 📋 Требования

- Отдельный GitHub-репозиторий: [dm-morozov/Netology_45_regular_expressions](https://github.com/dm-morozov/Netology_45_regular_expressions).
- Код проходит ESLint без ошибок.
- Тесты обеспечивают 100% покрытие тестируемых функций и классов по строкам.
- Проект построен на базе шаблона Webpack.

## 📚 Задачи

### 1. Никнеймы

**Легенда**: Пользователи игры используют «мусорные» логины с непонятными символами. Нужно реализовать валидацию никнеймов.

**Описание**:
Класс `Validator` с методом `validateUsername` проверяет имя пользователя по следующим правилам:
- Допустимы только латинские буквы, символы тире (`-`), подчёркивания (`_`) и цифры (0-9).
- Имя не должно начинаться или заканчиваться цифрами, тире или подчёркиванием.
- Имя не должно содержать более трёх цифр подряд.
- Длина имени: от 2 до 10 символов.

**Реализация**:
- Файл: `src/js/Validator.js`.
- Тесты: `src/js/__tests__/Validator.test.js` (100% покрытие).

### 2. Телефоны (дополнительная задача)

**Легенда**: Необходимо очищать номера телефонов, вводимые в любом формате, и приводить их к единому виду: `+{код}{10 цифр}`.

**Описание**:
Класс `PhoneValidator` с методом `cleanPhoneNumber` обрабатывает номера телефонов:
- Поддерживает российские номера (начинающиеся с `8`, `7`, `+7`) и международные (например, `+86` для Китая).
- Удаляет пробелы, скобки, дефисы, точки и другие символы.
- Приводит к формату `+{код}{10 цифр}` (например, `8 (927) 000-00-00` → `+79270000000`).
- Проверяет корректность: код страны (1-3 цифры) и ровно 10 цифр номера.

**Примеры**:
- `8 (927) 000-00-00` → `+79270000000`
- `+7 960 000 00 00` → `+79600000000`
- `+86 000 000 0000` → `+860000000000`

**Реализация**:
- Файл: `src/js/PhoneValidator.js`.
- Тесты: `src/js/__tests__/PhoneValidator.test.js` (100% покрытие).

## 📂 Структура проекта

```
Netology_45_regular_expressions/
├── src/
│   ├── js/
│   │   ├── __tests__/
│   │   │   ├── Character.test.js
│   │   │   ├── getSpecialAttack.test.js
│   │   │   ├── orderByProps.test.js
│   │   │   ├── PhoneValidator.test.js
│   │   │   ├── Validator.test.js
│   │   ├── Bowman.js
│   │   ├── Character.js
│   │   ├── Daemon.js
│   │   ├── Magician.js
│   │   ├── PhoneValidator.js
│   │   ├── Swordsman.js
│   │   ├── Undead.js
│   │   ├── Validator.js
│   │   ├── Zombie.js
│   ├── css/
│   ├── index.html
│   ├── index.js
├── .appveyor.yml
├── .eslintrc
├── babel.config.json
├── jest.config.js
├── package.json
├── webpack.common.mjs
├── webpack.config.mjs
├── webpack.dev.mjs
├── webpack.prod.mjs
├── README.md
```

**Ключевые файлы**:
- `src/js/Validator.js`: Класс для валидации никнеймов.
- `src/js/PhoneValidator.js`: Класс для обработки номеров телефонов.
- `src/js/__tests__/*.test.js`: Unit-тесты для всех классов.
- `.eslintrc`: Конфигурация ESLint.
- `jest.config.js`: Конфигурация Jest для тестов.

## 🛠️ Установка и запуск

1. **Клонируйте репозиторий**:
   ```bash
   git clone https://github.com/dm-morozov/Netology_45_regular_expressions.git
   cd Netology_45_regular_expressions
   ```

2. **Установите зависимости**:
   ```bash
   npm install
   ```

3. **Запустите проект в режиме разработки**:
   ```bash
   npm start
   ```
   Откройте `http://localhost:8080` в браузере.

4. **Соберите проект для продакшена**:
   ```bash
   npm run build
   ```

## 🧪 Тестирование

Тесты написаны с использованием Jest и обеспечивают 100% покрытие по строкам для всех тестируемых классов (`Validator`, `PhoneValidator`, `Character` и др.).

1. **Запустите тесты**:
   ```bash
   npm run test
   ```

2. **Проверьте покрытие**:
   ```bash
   npm run test -- --coverage
   ```

**Пример результата**:
```
-------------------|---------|----------|---------|---------|-------------------
File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-------------------|---------|----------|---------|---------|-------------------
All files          |     100 |      100 |     100 |     100 |
 PhoneValidator.js |     100 |      100 |     100 |     100 |
 Validator.js      |     100 |      100 |     100 |     100 |
 ...
-------------------|---------|----------|---------|---------|-------------------
```

## 🔍 Проверка кода

Код проверяется ESLint для обеспечения качества и отсутствия ошибок.

1. **Проверьте код**:
   ```bash
   npm run lint
   ```

2. **Исправьте ошибки автоматически**:
   ```bash
   npm run lint:fix
   ```

## 🚀 CI и статус

Проект интегрирован с AppVeyor для непрерывной интеграции. Статус сборки:

[![Build status](https://ci.appveyor.com/api/projects/status/w637s9dd2bhwy5pd?svg=true)](https://ci.appveyor.com/project/dm-morozov/netology-45-regular-expressions)

## 📧 Контакты

Если возникнут вопросы, пишите:
- ![LinkedIn](./svg/linkedin-icon.svg) [LinkedIn](https://www.linkedin.com/in/dm-morozov/)
- ![Telegram](./svg/telegram.svg) [Telegram](https://t.me/dem2014)
- ![GitHub](./svg/github-icon.svg) [GitHub](https://github.com/dm-morozov/)

## 🙏 Примечания

- Задача «Телефоны» выполнена как дополнительная (со звёздочкой).
- Все тесты и код находятся в директории `src/js` и `src/js/__tests__`.
- Проект полностью соответствует требованиям Нетологии: ESLint, 100% покрытие, шаблон Webpack.