---
sidebarDepth: 0
---
## やろう！ ブログを立ち上げる
### <a href="https://codezine.jp/article/detail/15054" target="_blank" rel="noopener noreferrer">ヘッドレスCMS</a>の利用
  + <a href="https://microcms.io/lp/non-developer" target="_blank" rel="noopener noreferrer">microCMS</a>の利用。
    + 個人利用、月100.GBまで、無償。

    + チュートリアル
      + <a href="https://blog.microcms.io/microcms-next-jamstack-blog" target="_blank" rel="noopener noreferrer">microCMS + Next.jsでJamstackブログを作ってみよう</a>


### APIの使用

APIとはApplication Programming Interfaceの略称です。
主にソフトウェアやプログラム同士をつないでいるインターフェースのことを言います。
例えば、[TwitterAPI](https://developer.twitter.com/en/docs)というAPIが存在します。
このAPIを使用すると、自作したWebサイトに最新のツイートを表示させるなど、ユーザーのTwitterアカウントからデータを取り出すことができます。
microCMSはAPIを使って利用することになります。

[参考]
- [API](https://developer.mozilla.org/ja/docs/Glossary/API)
- [WebAPIの紹介](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
- [APIとは何か？API連携ってどういうこと？図解で仕組みをやさしく解説](https://www.sbbit.jp/article/cont1/62752)


### microCMSのアカウント登録

1. [microCMS](https://microcms.io/)のサイトにアクセスして無料で始めるを選択します。

1. アカウント登録画面にてメールアドレスとパスワードを入力して登録してください。
![blog-acount](/img/blog/blog-acount.png)

1. サービス情報を入力します。サービス名にはこの後作成するブログのタイトルを入力するといいと思います。サービスIDは管理画面のURL、APIのエンドポイントのサブドメインに設定される値で、変更が出来ないので慎重に考えてください。  

1. APIの作成をします。今回の使用用途はブログのため、API名は<b>ブログ</b>、エンドポイントは<b>blog</b>と入力してください。
![blog-apicreate](/img/blog/blog-apicreate.png)

1. APIの型はリスト形式を選択します。
![blog-apilist](/img/blog/blog-apilist.png)

1. 最後にAPIスキーマーを定義します。
タイトル・本文・タイトル写真の3項目で試してみましょう。  
※タグを作成したい場合は、タグ用のAPIも作成する必要があるので、やってみたい方は[こちら(カテゴリーやタグは作成できますか？)](https://help.microcms.io/ja/knowledge/categories-and-tabs)を参考にしてみてください。

## ブログの記事をかいてみる

### ブログページを追加する

1. コンテンツ(API)からブログを選択します。すると、記事一覧が表示されます。
<b>+追加</b>ボタンから、記事を1つ追加してみます。
![blog-ichiran](/img/blog/blog-ichiran.png)

1. 適当に記事を書いてみます。書けたら公開ボタンを押して公開します。

### APIキーを参照させる

1. microCMSの管理画面の左下の<b>1個のAPIキー</b>を選択して、APIキーを取得します。copyボタンを押すとコピーできます。この値は後ほど使用するので、どこかにメモしておいてください。

1. Visual Studio Codeを立ち上げ、ターミナルを起動させます。(`Ctrl+@` を押すと表示できます。)ターミナルから、microcms-js-sdkをインストールするために、以下のコマンドを叩きます。  
```
npm install --save microcms-js-sdk
```

3. project_root下にlibsフォルダーを作成し、その直下に<b>client.js</b>という名前でファイルを作成します。
![blog-microcms](/img/blog/blog-microcms.png)

中身は以下のように書いてみてください。
serviceDomainには、microCMS登録時に設定したサービスIDが入ります。

```javascript
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'hoge',
  apiKey: process.env.API_KEY,
});
```

4. APIキーをGitHubなどのソース管理サービスでパブリックで公開されてしまうのはまずいので、ローカル環境のみで使用できるように、envファイルを作成します。
project_root下に、<b>.env.development.local</b>ファイルを作成します。

![blog-nextjs3](/img/blog/blog-nextjs3.png)

5. 作成したファイルに、1. で取得したAPIキーを記述します。
```
API_KEY=xxxxxxxxxxxxx
```
こうすることで、ソース管理サービスにAPIキーを含むことなく、参照することができます。

### Next.jsにブログ項目を作成する

1. 以下のディレクトリに、<b>Blog.js</b>という名前でファイルを作成します。
![blog-nextjs1](/img/blog/blog-nextjs1.png)

1. 以下のソースコードを作成したBlog.jsファイルにコピペしてみます。
```javascript
export default function Blog({ blog }) {
    return (
        <main>
            <h2>blog</h2>
            {/* ブログの投稿を表示する。*/}
            <section id="blog">
                <ul>
                    {blog.map((blog) => (
                        <li key={blog.id}>
                            <a href={`/contents/blogs/${blog.id}`}>
                                {/* ブログ画像 */}
                                <img src={blog.titlephoto.url} alt="titlephoto" 
                                    height={240} width={240} objectFit="contain" />
                            </a>
                            {/* ブログタイトル */}
                            <h3>{blog.title}</h3>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
```

3. 続いて上で作成したBlog.jsファイル内の内容を読み込ませるために、index.jsファイルに以下のコードを追加します。  

index.js
```javascript
import { client } from '../libs/client';
import Blog from '../components/Blog';

省略

const Home = ({ blog }) => (
省略
<Blog blog={blog} />
省略
);
```

4. さらに、microCMSのデータを取得する処理を、index.jsの一番下に追加します。

index.js
```javascript
省略

/**
 * microCMSと連携しブログデータを取得する。
 * @returns 
 */
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};

```

5. 画面を立ち上げてみます。作成した記事のタイトルとタイトル写真が表示されるようになったかと思います。

6. 今度はブログ詳細項目画面を作成します。以下のディレクトリにblogsフォルダを作成し、その中に<b>[id].js</b>という名前でファイルを作成します。

![blog-nextjs2](/img/blog/blog-nextjs2.png)

7. 以下のソースコードを作成した[id].jsファイルにコピペしてみます。
```javascript
import { client } from '../../../libs/client';

const BlogId = ({ blog }) => {
    return (
        <main>
            <article>
                {/* APIを使って取得したブログの内容を表示する */}
                <div>
                    {/* ブログタイトル */}
                    <h1>{blog.title}</h1>
                </div>
                {/* 発行日 */}
                <p>{blog.publishedAt)}</p>
                {/* 記事内容 */}
                <div
                    dangerouslySetInnerHTML={{
                        __html: `${blog.body}`,
                    }}
                />
            </article>
            <h2>
                <a href="/">
                    Back
                </a>
            </h2>
        </main>
    )
}

export default BlogId;

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "blog" });

    const paths = data.contents.map((content) => `/contents/blogs/${content.id}`);
    return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: "blog", contentId: id });

    return {
        props: {
            blog: data,
        },
    };
};
```
8. 画面を立ち上げてみます。作成した記事の詳細ページが表示されるようになったかと思います。

## レイアウトを整えて、ブログを装飾してみる

stylesフォルダ下にあるmain.cssを修正するとブログのレイアウトをいろいろ変更できます。
今回のお手本サイトが参考にしているサイトは以下の2つです。  
(サイト内でF12をすると開発者モードが立ち上がり、CSSが見れるのでそちらを参考にできます。)

- [UNDERLINE 大阪でフリーランスのWeb制作を行っています。 (u-d-l.jp)](https://u-d-l.jp/)
- [AYAKA YAMADA – portfolio (pupu.jp)](http://me-puru.pupu.jp/portfolio/)

自由に見やすいブログを作成してみてください。  

### レイアウトを軽く整えるその他の例

#### 記事詳細ページでソースコードが投稿されたときに、ソースコードとわかるようにする

```
hoge hogehoge
```

👆こんな感じ

main.css
```css
pre {
  margin: 1em 0; /* ブロック前後の余白 */
  padding: 1em; /* ブロック内の余白 */
  border-radius: 5px; /* 角丸 */
  background: #25292f; /* 背景色 */
  color: #fff; /* 文字色 */
  white-space: pre-wrap; /* はみ出たときに折り返す */
}
```

### ブログの作成日付を日本時間に変更する

[id].js
```javascript
const BlogId = ({ blog }) => {
    return (
      /** 省略 */
      <p>{convertDate(blog.publishedAt)}</p>
      /** 省略 */
    )
}

/** 日付を日本時間に変換 */
const convertDate = day => {
    const date = new Date(day);

    var year_str = date.getFullYear();
    //月だけ+1すること
    var month_str = 1 + date.getMonth();
    var day_str = date.getDate();
    var hour_str = date.getHours();
    var minute_str = date.getMinutes();
    var second_str = date.getSeconds();

    var format_str = 'YYYY-MM-DD hh:mm:ss';
    format_str = format_str.replace(/YYYY/g, year_str);
    format_str = format_str.replace(/MM/g, month_str);
    format_str = format_str.replace(/DD/g, day_str);
    format_str = format_str.replace(/hh/g, hour_str);
    format_str = format_str.replace(/mm/g, minute_str);
    format_str = format_str.replace(/ss/g, second_str);
    return format_str;
}

```
### アイコンを表示させる

- [React でアイコンを使うなら React Icons がおすすめ](https://zenn.dev/taichifukumoto/articles/how-to-use-react-icons)





