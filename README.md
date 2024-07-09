# project_search-for-flights / Приложение для поиска авиабилетов

**Ссылка для просмотра проекта:** ***https://project-search-for-flights.vercel.app/***

**Для запуска проекта (на своем устройстве) выполнить действия:**

- клонировать репозиторий на свой ПК: git clone https://github.com/Ivan-ISS/project_search-for-flights.git;<br>
- для режима development: последовательно выполнить команды в терминале: npm install ==> npm run dev;<br>
- для production: последовательно выполнить команды в терминале: npm run build ==> npm run start;<br>

---

## Цель:
***Создать приложение для поиска авиабилетов***

## Описание проекта
__Проект *Приложение для поиска авиабилетов*__ - инструмент для визуализации, сортировки, фильтрации и загрузки авиабилетов с API сервера.<br>

__Проект *Приложение для поиска авиабилетов*__ представлен в виде приложения, которое позволяет:
- Загружать информацию о авиабилетах и визуализировать ее на экране (кнопка *"Загрузить еще билеты"*);
- Сортировать билеты по разным критериям (по стоимости, времени перелета и кол-ву пересадок);
- Фильтровать билеты по разным критериям (по кол-ву пересадок, по авиакомпании).<br>

**Проект написан с помощью React, Redux Toolkit и TypeScript**<br>
**Реализована работа с фейковым серверным API с помощью async-thunk**

__Интерфейс приложения__ представлен элементами:
- кнопка *"Загрузить еще билеты"*, - при клике отправляет запрос на поиск информации о авиабилетах;
- кнопки *"Самый дешевый, Самый быстрый, Самый оптимальный"* - для сортировки билетов;
- чекбоксы *"Без пересадок, 1, 2 или 3 пересадки"* - для фильтрации по кол-ву пересадок;
- инпуты (тип radio) *"Название авиакомпании"* - для фильтрации по авиакомпании.<br>

## Технологии:
<img src="https://img.shields.io/badge/-TypeScript-blue?logo=typescript&logoColor=white" alt="TS"/>&nbsp;
<img src="https://img.shields.io/badge/-JavaScript-f0db4f?logo=javaScript&logoColor=black" alt="JS"/>&nbsp;
<img src="https://img.shields.io/badge/-React-000000?logo=React&logoColor=#00fff" alt="React"/>&nbsp;
<img src="https://img.shields.io/badge/-Redux-8a2eb2?logo=Redux&logoColor=#00fff" alt="Redux"/>&nbsp;
<img src="https://img.shields.io/badge/HTML5-red?logo=html5&logoColor=white" alt="HTML5"/>&nbsp;
<img src="https://img.shields.io/badge/-Sass-DB7093?logo=sass&logoColor=white" alt="SASS"/>&nbsp;
<img src="https://img.shields.io/badge/CSS3-blue?logo=css3&logoColor=white" alt="CSS3"/>&nbsp;

## В проекте реализованы функциональные требования:

&nbsp; :heavy_check_mark: Работа с фейковым серверным API с помощью async-thunk<br>
&nbsp; :heavy_check_mark: Сортировка билетов по цене, длительности перелёта и количеству пересадок<br>
&nbsp; :heavy_check_mark: Фильтрация по авиакомпаниям<br>
&nbsp; :heavy_check_mark: Фильтрация по количеству пересадок<br>

## В проекте реализованы технические требования:
&nbsp; :heavy_check_mark: Проект создан с помощью Vite<br>
&nbsp; :heavy_check_mark: Проект написан с помощью React, Redux Toolkit и TypeScript<br>
&nbsp; :heavy_check_mark: Использован компонентный подход<br>
&nbsp; :heavy_check_mark: Для запросов к API используются дополнительный метод createAsyncThunk<br>
&nbsp; :heavy_check_mark: Использован условный рендеринг для вывода разного состояния элементов в зависимости от действий пользователя<br>
&nbsp; :heavy_check_mark: Отзывчивая и адаптивная верстка (десктоп, планшет и мобильные телефоны)<br>
&nbsp; :heavy_check_mark: Соблюдение семантической верстки<br>

---

**Для запуска проекта (на своем устройстве) выполнить действия:**

&nbsp; :heavy_check_mark: клонировать репозиторий на свой ПК: git clone https://github.com/Ivan-ISS/project_search-for-flights.git;<br>
&nbsp; :heavy_check_mark: поставить пакеты: npm install;<br>
&nbsp; :heavy_check_mark: для режима development выполнить команду в терминале: npm run dev;<br>
&nbsp; :heavy_check_mark: для production последовательно выполнить команды в терминале: npm run build ==> npm run start;<br>

**Ссылка для просмотра проекта:** ***https://project-search-for-flights.vercel.app/***