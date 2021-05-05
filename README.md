<h1 align="center">
React Template
</h1>

<p align="center">
  <img src="https://img.shields.io/github/languages/count/wesleyadriann/react_template" />
  <img src="https://img.shields.io/github/last-commit/wesleyadriann/react_template" />
  <img src="https://img.shields.io/github/license/wesleyadriann/react_template" />
    <img src="https://img.shields.io/github/repo-size/wesleyadriann/react_template" />
</p>

## Description

This is template for react projects

## Hierarchy

- **/nginx** directory where nginx configuration to production version is located;
- **/public** directory where the react injects javascript in develop;
- **/build** directory created after execute command build, where is located files for production;
- **/src** directory where the develop files is located;
  - **/assets** directory where static files like fonts and images is located;
  - **/components** directory where the react components is located;
  - **/services** directory where the files related to services used in the application will be created, for example HTTP requests;
  - **/settings** directory where project configuration and texts is located;
  - **/store** directory where redux configuration is located;
    - **/actions** directory where redux actions is located;
    - **/actionsTypes** directory where files to configure the actions types to actions;
    - **/reduces** directory where reducers is located;
  - **/style** directory where global style, fonts imports and colors is located;
  - **/utils** directory where files make it easy to develop;
  - **/views** directory where de pages is located;

## Prerequisites

- [Node](https://nodejs.org/)
- [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com/)

## Usage
### Without Docker
In the directory, install the dependencies
```bash
# with npm
npm install
# with yarn
yarn install
```
Start React development server
```bash
# withnpm
npm start
# with yarn
yarn start
```
Await for browser window open in [http://localhost:3000](http://localhost:3000).

### With Docker (Recommended)
In the directory build Dockerfile
```bash
# docker image build -t <IMAGE_NAME> <DOCKERFILE_DIRECTORY>
docker image build -t <IMAGE_NAME> .
```
Run the Container
```bash
#  docker run -p <pc_port>:<container_port> <IMAGE_NAME>
docker run -p 3000:3000 <IMAGE_NAME>
```
Application will be running on [http://localhost:3000](http://localhost:3000)
## Deployment (Production)
### Without Docker
In the directory, install the dependencies
```bash
# with npm
npm install
# with yarn
yarn install
```
Execute *build* command to create minify version to production
```bash
# with npm
npm run build
# with yarn
yarn build
```
Will be create folder /build with the files. Inserts into HTTP server. [More information](https://create-react-app.dev/docs/deployment/)

### With Docker
In the directory build Dockerfile image
```bash
# docker image build -t <IMAGE_NAME> -f <DOCKERFILE_NAME> <DOCKERFILE_DIRECTORY>
docker image build -t <IMAGE_NAME> -f DockerfileBuild .
```
Run the Container
```bash
#  docker run -p <PC_PORT>:<CONTAINER_PORT> <IMAGE_NAME>
docker run -p 80:80 <IMAGE_NAME>
```
Application will be running on [http://localhost:80](http://localhost:80)

## Built With

- [Axios](https://github.com/axios/axios)
- [Create React App](https://create-react-app.dev)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io/)
- [Prop Types](https://www.npmjs.com/package/prop-types)
- [ReactJs](https://reactjs.org)
- [Redux Persist](https://github.com/rt2zz/redux-persist)
- [React Redux](https://react-redux.js.org)
- [React Router Dom](https://github.com/ReactTraining/react-router)
- [Redux](https://redux.js.org)
- [Styled Components](https://www.styled-components.com)

## Authors
- Wesley Adriann
  - Github: [wesleyadriann](https://github.com/WesleyAdriann)
  - LinkedIn: [in/wesleyadriann](https://www.linkedin.com/in/wesleyadriann/)

## Project Status

- **Development**

## URL Project Reference

- [https://github.com/WesleyAdriann/react_template](https://github.com/WesleyAdriann/react_template)
