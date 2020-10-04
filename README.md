# @vizapp-france/prettier-config

A Prettier
[shareable config](https://prettier.io/docs/en/configuration.html#sharing-configurations)
for projects using **[Prettier](https://prettier.io/)** and
**[JavaScript Standard Style](https://standardjs.com/)** as ESLint rules or
separate processes.

## Installation

```
npm install --save-dev @vizapp-france/prettier-config
```

_This is only a shareable configuration. It does not install Prettier, Standard,
ESLint, or any other part of the tool chain._

## Usage

Reference it in `package.json` using the `prettier` property:

```json
{
  "name": "my-projects-name",
  "prettier": "@vizapp-france/prettier-config",
  "devDependencies": {
    "@vizapp-france/prettier-config": "1.0.0 - 1.2.0"
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
    "format": "prettier '**/*.js' --write"
  }
  ```

  You can then run the following, to automatically format your project's code:

  ```
  npm run format
  ```

## Related repos

- https://github.com/vizapp-france/prettier-config
- https://github.com/vizapp-france/eslint-config
- https://github.com/zestia/stylelint-config
