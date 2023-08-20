# Add Other Language into WebGal

## Get Source Code

See the [How to Start with Source Code](./guide#方法3（适用于想要更高自定义程度的前端开发者）：从源代码开始调试).

## Create Language Config File

1. Open folder **WebGal/packages/webgal/src/translations**.
2. Copy *en.ts*, rename it like *yourlang.ts*.

## Translate

Translate the config file's value.

::: warning

Don't change the value in **{{}}**, it's the variable.

:::

## Add Your Language into WebGal

1. Open file **WebGal/packages/webgal/src/config/language.ts**.

2. Add you language into it.

   For example, I will add a language named *myLang*, it will be this.

   ```typescript
   import myLang from '@/translations/my-lang';
   
   export enum language {
     zhCn,
     en,
     jp,
     myLang
   }
   
   const languages: Record<string, string> = {
     zhCn: '中文',
     en: 'English',
     jp: '日本語',
     myLang: 'Example Lang'
   };
   
   export const i18nTranslationResources: Record<string, { translation: Record<string, any> }> = {
     en: { translation: en },
     zhCn: { translation: zhCn },
     jp: { translation: jp },
     myLang: {translation: myLang},
   };
   ```

### Change Default Language

Edit variable named **defaultLanguage** in **WebGal/packages/webgal/src/config/language.ts**. The value must be a key in **language**.

- Example:

  ```typescript
  export enum language {
    zhCn,
    en,
    jp,
    myLang
  }
  
  const languages: Record<string, string> = {
    zhCn: '中文',
    en: 'English',
    jp: '日本語',
    myLang: 'Example Lang'
  };
  
  export const i18nTranslationResources: Record<string, { translation: Record<string, any> }> = {
    en: { translation: en },
    zhCn: { translation: zhCn },
    jp: { translation: jp },
    myLang: {translation: myLang},
  };
  
  export const defaultLanguage: language = language.mylang;
  ```

## Finally - Build WebGal

Run this command in project root folder:

```shell
yarn run build
```

After, you can see a folder named **build** in *packages/parser/*, another folder named **dist** in *packages/webgal/*, that's the built file of WebGal.
