# frontend-advanced-production

### Run the app 
npm install - installing dependencies
npm run start:dev or npm run start:dev:vite - start the server + frontend app in dev mode
### Scripts
* npm run start - Start frontend app with webpack dev server
* npm run start:vite - Start frontend app with vite
* npm run start:dev - Start frontend app with webpack dev server + backend
* npm run start:dev:vite - Start frontend app with vite + backend
* npm run start:dev:server - Start backend server
* npm run build:prod - Bundling in prod mode
* npm run build:dev - Bundling in dev mode (not minimised)
* npm run lint:ts - Linting the ts files  
* npm run lint:ts:fix - Lint fixing the ts files
* npm run lint:scss - Scss linting the style files
* npm run lint:scss:fix - Scss lint fixing the style files
* npm run test:unit - Run unit test with jest
* npm run test:ui - Run screenshot tests with loki
* npm run test:ui:ok - Confirming new screenshots
* npm run test:ui:ci - Run screenshot testing in CI
* npm run test:ui:report - Generating the full report of screenshot tests
* npm run test:ui:json - Generating json report of screenshot tests
* npm run test:ui:html - Generating HTML report of screenshot tests
* npm run storybook - Run Storybook
* npm run storybook:build - Bundle storybook build
* npm run prepare - pre commit hooks
* npm run generate:slice - Script for generating FSD slices

## Архитектура проекта
Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - feature sliced design

### Работа с переводами
В проекте используется библиотека i18next для работы с переводами. Файлы с переводами хранятся в public/locales.

Для комфортной работы рекомендуем установить плагин для webstorm/vscode

Документация i18next - https://react.i18next.com/

### Тесты
В проекте используются 4 вида тестов:

Обычные unit тесты на jest - npm run test:unit
Тесты на компоненты с React testing library -npm run test:unit
Скриншотное тестирование с loki npm run test:ui
e2e тестирование с Cypress npm run test:e2e
Подробнее о тестах - документация тестирование

### Линтинг
В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

Также для строгого контроля главных архитектурных принципов используется собственный eslint plugin eslint-plugin-ulbi-tv-plugin, который содержит 3 правила

path-checker - запрещает использовать абсолютные импорты в рамках одного модуля
layer-imports - проверяет корректность использования слоев с точки зрения FSD (например widgets нельзя использовать в features и entitites)
public-api-imports - разрешает импорт из других модулей только из public api. Имеет auto fix
Запуск линтеров
npm run lint:ts - Проверка ts файлов линтером
npm run lint:ts:fix - Исправление ts файлов линтером
npm run lint:scss - Проверка scss файлов style линтером
npm run lint:scss:fix - Исправление scss файлов style линтером

### Storybook
В проекте для каждого компонента описываются стори-кейсы. Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:

npm run storybook
Подробнее о Storybook

Пример:

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
title: 'shared/Button',
component: Button,
argTypes: {
backgroundColor: { control: 'color' },
},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
children: 'Text',
theme: ButtonTheme.CLEAR,
};

### Конфигурация проекта
Для разработки проект содержит 2 конфига:

Webpack - ./config/build
vite - vite.config.ts
Оба сборщика адаптированы под основные фичи приложения.

Вся конфигурация хранится в /config

/config/babel - babel
/config/build - конфигурация webpack
/config/jest - конфигурация тестовой среды
/config/storybook - конфигурация сторибука
В папке scripts находятся различные скрипты для рефакторинга\упрощения написания кода\генерации отчетов и тд.

### CI pipeline и pre commit хуки
Конфигурация github actions находится в /.github/workflows. В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

В прекоммит хуках проверяем проект линтерами, конфиг в /.husky

### Работа с данными
Взаимодействие с данными осуществляется с помощью redux toolkit. По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью RTK query

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется DynamicModuleLoader

### Работа с feature-flags
Разрешено использование feature flags только с помощью хелпера toggleFeatures

в него передается объект с опциями

{ name: название фича-флага, on: функция, которая отработает после Включения фичи of: функция, которая отработает после ВЫключения фичи }

Для автоматического удаления фичи использовать скрипт remove-feature.ts, который принимает 2 аргумента

Название удаляемого фича-флага
Состояние (on\off)
Сущности (entities)
Article
Comment
Counter
Country
Currency
Notification
Profile
Rating
User
Фичи (features)
addCommentForm
articleEditForm
articleRating
articleRecommendationsList
AuthByUsername
avatarDropdown
editableProfileCard
LangSwitcher
notificationButton
profileRating
ThemeSwitcher
UI
