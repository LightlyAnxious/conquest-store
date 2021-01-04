Conquest Store
App for multibrand watch store

## Contents

```shell script
├── .env # dotenv config file
├── .eslintrc # eslint configutation
├── .lintstagedrc # lintstaged configutation
├── .nvmrc # required Node version
├── .prettierrc # prettier configutation
├── .stylelintrc # stylelint configutation
├── README.md # this file
├── README_CRA.md # original Readme from CRA
├── .gitignore
├── huskyrc-template # template for husky configuration
├── jsconfig.json # absolute path configuration
├── public # public assets
└── src
    ├── components # React components folder
    ├── config.js # shared config file
    ├── features # features logic folder
    ├── index.css
    ├── index.js # entry point file
    ├── serviceWorker.js # service worker boilerplate
    ├── setupTests.js # configuration ti run jest tests
    ├── withProvider.js # utility to generate Provider components
    └── withReduxFeatures.js # Redux store HOC
```

## Basic commands for work
* Installation - `npm i`
* Start local server - `npm start`
* Building the project without starting the local server - `npm run-script build`
* Start testing for compliance with code guides - `npm test`
