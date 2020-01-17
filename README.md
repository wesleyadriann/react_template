React Template
============

## Description

This is basic template with create basic app to projects

## Hierarchy

- **/public** directory where the react injects javascript in develop;
- **/build** directory created after execute command build, where is located files for production;
- **/src** directory where the develop files is located;
  - **/assets** directory where static files like fonts and images is located;
  - **/components** directory where the react components is located;
  - **/config** directory where project configuration is located;
    - **./index.js** file where project environment variables is located;
  - **/services** directory where the files related to services used in the application will be created, for example HTTP requests;
  - **/store** directory where redux configuration is located;
    - **/actions** directory where redux actions is located;
    - **/actionsTypes** directory where files to configure the actions types to actions;
    - **/reduces** directory where reducers is located;
    - **./index.js** file where store is creates;
  - **/utils** directory where files make it easy to develop;
  - **/views** directory where de pages is located;
  - **./routes.js** file where routes is configured.

## Prerequisites

- [Node](https://nodejs.org/)
- [npm](https://www.npmjs.com)

## Usage

In the directory, install the dependencies
```bash
npm install
```
Start React development server
```bash
npm start
```
Await for browser window open in http://localhost:3000.

## Deployment
In the directory, install the dependencies
```bash
npm install
```
Execute build command to create minify version to production
```bash
npm run build
```
Will be create folder /build with the files. Inserts into HTTP server. [More information](https://create-react-app.dev/docs/deployment/)

## Built With

- [ReactJs](https://reactjs.org)
- [Create React App](https://create-react-app.dev)
- [Redux](https://redux.js.org)
- [React Redux](https://react-redux.js.org)
- [Axios](https://github.com/axios/axios)
- [Styled Components](https://www.styled-components.com)
- [ESLint](https://eslint.org)
- [Prop Types](https://www.npmjs.com/package/prop-types)

## Versioning

- [CHANGELOG](CHANGELOG.md)

## Authors

- [Wesley Adriann](https://github.com/WesleyAdriann)

## URL Project Reference

- [https://github.com/WesleyAdriann/react_template](https://github.com/WesleyAdriann/react_template)
