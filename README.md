# @vizapp-france/prettier-config

## Installation

### Install prettier

```
npm i -D prettier eslint-plugin-prettier eslint-config-prettier
```

### Install the package

```
npm install --save-dev @vizapp-france/prettier-config
```

## Usage

Reference it in `package.json` using the `prettier` property:

```json
{
  "name": "my-projects-name",
  "prettier": "@vizapp-france/prettier-config",
  "devDependencies": {
    "@vizapp-france/prettier-config": "1.0.0 - 2.0.0"
  }
}
```

## Running

As this package only provides the Prettier configuration, it is assumed you
already have `prettier` installed in your project.

- It's recommended to install the relevant Editor Addons/Plugins and enable
  "Pretter on Save".

- It's recommended to add a prettier script to `package.json`. An example one
  is:

  ```json
  scripts: {
    "prettier": "prettier \"**/*.js\" --write"
  }
  ```

  You can then run the following, to automatically format your project's code:

  ```
  npm run prettier
  ```

## Related repos

- https://github.com/vizapp-france/prettier-config
- https://github.com/vizapp-france/eslint-config
- https://github.com/zestia/stylelint-config
