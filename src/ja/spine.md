# Spineについて

WebGALでSpine Runtimeを統合する場合、以下のSpine Runtime統合契約に基づき、Spineエディターのライセンスを取得する必要があります。

https://esotericsoftware.com/spine-runtimes-license#spine-runtimes

```
Spine Runtimes License Agreement
Last updated February 20, 2024. Replaces all prior versions.

Copyright (c) 2013-2024, Esoteric Software LLC

Spine Runtimesのソフトウェアへの統合、またはその他のSpine Runtimesの派生物の作成は、Spine Editor License Agreementのセクション2の条項に基づいて許可されます。
http://esotericsoftware.com/spine-editor-license

それ以外の場合は、製品の各ユーザーが自身のSpine Editorライセンスを取得し、いかなる形式での製品の再配布にもこのライセンスと著作権表示を含めることを条件として、Spine Runtimesをソフトウェアに統合したり、Spine Runtimesの派生物を作成したりすることができます（まとめて「製品」）。

SPINE RUNTIMESは、ESOTERIC SOFTWARE LLCによって「現状のまま」提供され、商品性および特定目的への適合性に関する黙示の保証を含むがこれらに限定されない、明示または黙示の保証はすべて否認されます。いかなる場合においても、ESOTERIC SOFTWARE LLCは、SPINE RUNTIMESの使用に起因する、直接的、間接的、偶発的、特別、懲罰的、または結果的な損害（代替の商品またはサービスの調達、事業の中断、使用、データ、または利益の損失を含むがこれらに限定されない）について、原因の如何を問わず、契約、厳格責任、または不法行為（過失を含む）のいずれの責任の理論に基づいても、たとえそのような損害の可能性について知らされていたとしても、責任を負わないものとします。
```

**そのため、Spine機能を必要としないユーザーへの影響を避けるため、WebGALはプロジェクトから`pixi-spine`パッケージを削除しました。** Spineを使用したい場合は、以下の手順を参照してください。

:::info
注意：以下の手順はすべてWebGALのソースコードに基づいています。ソースコードはGitHubで入手できます。

[WebGAL ソースコード](https://github.com/OpenWebGAL/WebGAL)
:::

1. Spineエディターのライセンスを取得する [http://esotericsoftware.com/](http://esotericsoftware.com/)

2. `package/webgal`パッケージでyarnを使用してpixi-spineをインストールする

```
cd package/webgal
yarn add pixi-spine@3.1.2
```

3. 次のファイルに移動します： `packages/webgal/src/Core/controller/stage/pixi/spine.ts`

以下のコメントアウトされた行（約30行目から）のコメントを外します。

```
  // pixiSpineLoading = import('pixi-spine')
  //   .then((module) => {
  //     spineLoader = new PIXI.Loader();
  //     pixiSpineModule = module;
  //     return module;
  //   })
  //   .catch((error) => {
  //     console.error('Failed to load pixi-spine. Spine features will be disabled.', error);
  //     return null;
  //   })
  //   .finally(() => {
  //     pixiSpineLoading = null;
  //   });
```

4. プロジェクトのルートディレクトリで以下のスクリプトを実行してWebGALをデバッグします

`yarn dev`

5. これでSpineを立ち絵として使用できるようになりました。モデル全体のディレクトリを`game/figure`ディレクトリに配置する必要があります。立ち絵を呼び出す方法は、立ち絵のjsonファイルを呼び出すことです。

例：
```
game/
  figure/
    exampleSpine/
      data.json
      atlas.atlas
      skeleton.skel
```

JSON形式のSpine立ち絵を使用している場合は、エンジンがSpineタイプとして認識できるように、以下のようなスクリプトを使用してタイプを渡す必要があります。

```
changeFigure:exampleSpine/data.json?type=spine;
```

6. 本番用パッケージをビルドする場合、またはWebGAL Terreで使用する場合は、`yarn build`コマンドを実行してWebGALをビルドします。完了したら、[カスタムエンジンの使用方法](derivative) を参照して、変更後のエンジンを使用してください。


### 重要な注意点

Spine Runtime統合契約に基づき、**Spine機能を使用する各ユーザーは、Spineエディターの有効なライセンスを所有している必要があります。** Spine機能を合法的に使用するために、適切なライセンスを取得していることを確認してください。

### 免責事項

以下の内容をよくお読みになり、ご理解ください。

Spine機能を統合したWebGALバージョンを使用する前に、Spineエディターの正式なライセンスを取得していることを確認する必要があります。Spineはサードパーティ製ソフトウェアであり、そのランタイムコンポーネントはSpineエディターのライセンス契約の制約を受けます。この契約に基づき、Spine Runtimeを統合したソフトウェアを使用する場合は、Spineエディターの正式なライセンスを各自で取得する必要があります。

Spineエディターのライセンスを取得せずに、Spine Runtimeを統合したWebGALを個人的に統合または使用した場合、それによって生じるすべての法的責任、経済的損失、評判の損害、およびその他のあらゆる形式の結果は、個人または組織が全責任を負います。WebGALプロジェクトチームは一切の責任を負いません。私たちはSpineライセンスを提供せず、ライセンスの取得または配布プロセスにも関与しません。WebGALは技術プラットフォームとしてのみ機能し、Spineとの統合をサポートしますが、ユーザーの使用行為を監督または責任を負うことはありません。

許可なくSpine Runtimeを使用することは、著作権侵害とみなされ、サードパーティから損害賠償を求める訴訟を起こされる可能性があります。Spineエディターのライセンス契約に違反したために発生した法的紛争または経済的賠償請求は、すべてユーザー自身で解決することに同意するものとします。また、ユーザーの行為によってWebGALプロジェクトチームおよびその関連会社に発生した損失（弁護士費用、賠償金、およびその他の関連費用を含むがこれらに限定されない）を全額補償することに同意するものとします。

さらに、WebGALプロジェクトチームは、Spine機能の統合または使用中に発生した直接的または間接的な損害、不便、または損失について、一切の責任を負いません。技術的な不具合、ソフトウェアエラー、無許可の使用、またはライセンス契約の不遵守によって生じた結果について、WebGALは一切責任を負いません。Spineを統合したWebGALバージョンの使用に伴うすべてのリスクと責任は、ユーザーが完全に負うものとします。

要約すると、WebGALでSpine機能を統合または使用する場合、Spineエディターの正式なライセンスを取得済みであり、すべての関連ライセンス条項と規制を遵守することを約束する必要があります。そうでない場合、発生するすべてのリスク、責任、および結果は、個人または組織が負担し、WebGALプロジェクトチームとは無関係です。

本ソフトウェアを使用することにより、上記の免責事項のすべてを読み、理解し、同意したものとみなされます。これらの条項に同意しない場合は、Spine機能を統合したWebGALバージョンの使用を直ちに中止してください。
