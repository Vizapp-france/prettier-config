# @vizapp-france/prettier-config

## Installation

### Install prettier

```
npm i -D prettier eslint-plugin-prettier eslint-config-prettier
```

### Install the package

```
npm i -D @vizapp-france/prettier-config
```

## Setup

1. Create the following file `.prettierrc.js`

   ```javascript
   module.exports = require("@vizapp-france/prettier-config");
   ```

2. Add the following to `scripts` in `package.json`

   ```
   "prettier": "prettier '**/*.{js,ts,json,css,scss,html,hbs,md}' --write"
   ```

3. Install the relevant Editor Addon/Plugin and enable "Prettier on Save".

## Running

```
npm run prettier
```

## Related repos

- https://github.com/vizapp-france/eslint-config
