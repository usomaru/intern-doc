---
sidebarDepth: 0
---
## やろう！ Webサイトを自作する
+ 既存のブログサービスを利用すると簡単に作成できますが、今回は自作でやります。
+ ブログサービスを自作できるのは、Webのバックグランドの一部を理解しているとして、有効。
  + 自身の経験のため。
  + 第三者へのアピール。
+ 今回は、Next.jsというフレームワークを使って、Webサイトを作ってみます。
  - Next.jsとは？
    * JavaScriptライブラリであるReact開発におけるフレームワーク

## Next.js を使って静的サイトを作成する。
### 必要なもの
+ ツール
  - VSCode（今回はすでにインストール済みです）
+ アカウント
  - Azureアカウント（この後説明します）
  - GitHubアカウント(あると良いもの)
### 手順
1. 新しいプロジェクトを作成する  
  デスクトップにある`2022_internship-ショートカット`を立ち上げ、`WebSource`フォルダに移動し、そこで右クリックをして`Codeで開く`を選択します。  
  VSCodeが開いたら、`Ctrl+@`でターミナルを開きます。   
  `npx create-next-app@latest`と打ちます。  
  プロジェクト名の設定をする必要があるので、今回は`portfolio`としておきましょう。
  作成できたら、一度VSCodeを閉じて、portfolioフォルダでVSCodeを開きなおします。
2. 実行する  
  1と同じく、ターミナルで`npm run dev`と打って実行します。
  `http://localhost:3000`と出てくるので、Ctrlを押しながらクリックします。
  ![nextjs](/img/portfolio/setup-nextjs.PNG)  
  と出てきたらOKです。
3. 中身を変えてみよう
  `index.js`ファイルの中を全て削除して、
  ```js
    const Home = () => (
      <div>
        hello!
      </div>
    );

    export default Home; 
  ```
  と書いてみましょう。  
  Ctrl＋Sで保存すると、画面に表示される内容が変更されたのが確認できます。  
4. 動くことが確認出来たら、デプロイします。(ここではAzure Web Appにデプロイする手順を説明します。)  
  1. コードをビルドします。
      `package.json`ファイルをひらいて、6行目を書き直します
      ```json
        "build": "next build && next export",
      ```
      Ctrl+Sで保存します。
      ターミナルで`npm run build`と入力し、Enterキーを押します。  
      `out`という名前のフォルダが生成されます。  
  2. [Azureポータル](https://portal.azure.com/#home)からWebAppsを作成します。 
  3. 上の検索バーで`App Service`と検索し、`App Service`を選択します。
    ![azure13](/img/azure/azure13.png)
  4. App Serviceの作成を選択します。必要項目を埋めていきます。
  5. 確認および作成を選択します。問題ないことを確認し、作成します。

5. VS Codeに戻り、拡張機能「Azure App Service」をインストールします。
6. 「APP SERVICE」で「Deploy」をクリックし、「out」フォルダを選択します。

7. デプロイができたら、URLにアクセスしてデプロイした内容を確認してみましょう。
