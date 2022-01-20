---
sidebarDepth: 0
---
## やろう！ サンプルサイトのコードを記述する②
①で書き写した部分に<AboutMe />という箇所があります。  
ここには、みなさんのオリジナルの内容を書いてもらいます。  
以下では、その内容をどのように表示するかを確認します。

1. プロジェクトの直下に`components`というフォルダを作成します。  
その中に`AboutMe.js`というファイルを作成しましょう。中身は以下の通りです。
```js
const AboutMe = () => {
    return (
        <main>
            <h2>about me</h2>
            <div>
              自己紹介など
              写真など載せてもいいかもしれません
            </div>

            <div>
                <h2>skill</h2>
                テーブルやカード形式で表現すると見やすいかも
            </div>

            <div>
                <h2>qualification</h2>
                <div>
                資格など
                </div>
            </div>
        </main>
    )
}

export default AboutMe;
```
これをindex.jsのほうで表示します。  
まず冒頭に以下のコードを記述します。
```js
import AboutMe from '../components/aboutme';
```
index.jsの35行目あたりに`{/* <AboutMe /> */}`と書かれている部分があるので、この部分にフォーカスをあててCtrl＋K＋Uでコメントアウトを外します。

ここまでの変更を保存できたら、画面を確認してみましょう。  
AboutMe.jsで記述した内容を表示することができていると思います。

2. 内容を表示できたら、HTMLの教科書を見ながら自分の好みのデザインにしてみましょう。  
