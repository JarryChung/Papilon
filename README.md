# papilon

A powerful and awesome Vue CLI

## Base-preset

```json
{
  "useConfigFiles": true,
  "plugins": {
    "@vue/cli-plugin-babel": {},
    "@vue/cli-plugin-router": {
      "historyMode": false
    },
    "@vue/cli-plugin-vuex": {},
    "@vue/cli-plugin-eslint": {
      "config": "standard",
      "lintOn": ["save","commit"]
    }
  },
  "cssPreprocessor": "node-sass"
}
```

Already imported *babel* / *eslint with standard* / *hash-router* / *vuex* / *node-sass*.

Modify preset `preset/preset.json` to customize your Vue CLI.

## What added

The following are optional：

- **Axios**: as a Vue plugin
- **lodash**: as a global variable
- **Reset.scss** or **Normalize.scss**  or neither

## Start

1. Install @vue/cli

   ```shell
   npm install -g @vue/cli
   ```

2. Install papilon

   ```shell
   npm install -g papilon
   ```

3. Create your powerful vue project

   ```shell
   papilon new <your-project-name>
   ```

## By the way

When you are not using `new` (e.g. `create`), you will use the regular Vue CLI.