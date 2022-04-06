# Техническое задание:

Создать мини-приложение на CRA (create-react-app + typescript) которое по api получает список товаров и выводит их на странице каталога <br/>

1. Получить список товаров по запросу GET https://artisant.io/api/products <br/>
2. Сверстать страницу каталога и вывести на нее полученные товары (https://www.figma.com/file/ionATUrBU8JrxipjmhQCjb/Untitled?node-id=0%3A1) <br/>
3. Сделать возможность фильтрации товаров по полю «наличие» (quantity_available > 0) (любые удобным способом, например чекбоксом где-угодно) <br/>

От исполнителя ожидаем аккуратную верстку. Огромным плюсом будет адаптивная верстка mobile-first.<br/>
Изображения на товарах можно сделать статичными или взять из макета.<br/>
Вся стилизация должна быть построена на styled-components или scss modules.<br/>
Можно использовать redux (при необходимости, или аналоги), fetch или axios или react-query для запросов. <br/>

Как результат хотим видеть ссылку на github/bitbucket/gitlab с кодом (не забывайте проверять что открыт доступ к репозиторию). Будет плюсом если захостите свой app на гитхабе и отдадите рабочую ссылку (например по этой инструкции https://github.com/gitname/react-gh-pages )<br/>



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
