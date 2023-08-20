# WebGALのUIを他の言語に書き換える

## ソースコードを取得する

[こちら](./README###その3：ソースコードからデバッグ（高いカスタマイズ性を望むフロントエンド開発者向け）)を参照してください。

## 言語設定ファイルの作成

1. フォルダー **WebGal/packages/webgal/src/translations** をオープンする
2. *en.ts* をコピーし、*yourlang.ts* のようにファイル名を変更する。

## 翻訳

言語設定ファイルの内容を翻訳する。

::: warning 警告

**{{}}** の内容は変更しないでください、それは変数です。

:::

## あなたの言語をWebGALに追加する

1. ファイル **WebGal/packages/webgal/src/config/language.ts** をオープンする。

2. あなたの言語をこれに追加する。

   たとえば、*myLang* という言語を追加します。

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

### デフォルト言語の変更

**WebGAL/packages/webgal/src/config/language.ts** で変数 **defaultLanguage** を編集します。変数の値は **language** のキーである必要があります。

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

## 最後に、WebGALをビルドする

プロジェクトのルートフォルダーで次のコマンドを実行します。

```shell
yarn run build
```

その後、*packages/parser/* に **build** というフォルダーがアウトプットされ、*packages/webgal/* に **dist** という別のフォルダーが表示され、それがビルドされた WebGAL だ。