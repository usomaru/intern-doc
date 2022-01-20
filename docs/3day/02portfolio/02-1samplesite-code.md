---
sidebarDepth: 0
---
## やろう！ サンプルサイトのコードを記述する①
0. まずは今回使わないファイルを削除します
  + pages/apiフォルダ
  + yarn.lock
1. ヘッダー画像を表示するために、`public`フォルダに`home`というフォルダを追加し、その中に用意した写真を置きます。
2. サイト全体に適用するデザインのファイルを作成します。  
`styles`フォルダの中に`reset.css`というファイルを作成し、以下のコードを貼り付けます。
  ```css
    /* http://meyerweb.com/eric/tools/css/reset/ 
      v2.0 | 20110126
      License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    body {
      line-height: 1;
    }
    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }    
  ```
  さらに、`/pages/_app.js`ファイルの冒頭に以下のコードを記述します。  
  このファイルにこのコードを書くことで、起動したときにこのcssファイルが適用されるようになります。
  ```js
    import '../styles/reset.css'
  ```

3. 全体の構成を設定するファイルを作ります。  
`pages/_document.js`を作成し、以下のコードを貼り付けます。
```js
// /pages/_document.js
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=PT+Sans:300,400,700,800"
            rel="stylesheet"
          />
          {/* Webフォント */}
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100&display=swap" rel="stylesheet" />

          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;

```
4. メインページに表示するヘッダー部分を作成します。  
`index.js`の先ほどhello!と書いた部分を以下のコードに置き換えます。

```html
    <div className="custom-header">
      <div className="header-image">
        <img src="/home/用意した写真のファイル名" alt="top-img" className="" />
      </div>
      <div className="site-branding">
        <div className="wrap">
          <div className="site-title">
            <h1 className="title">SAMPLE PORTFOLIO</h1>
          </div>
        </div>
      </div>
      <div className="navigate-top site-nabigation-fixed">
        <div className="wrap">
          <nav className="menu-toggle">
            <a href='#aboutme'>
              <button className="toggle">about me</button>
            </a>
            <a href='#blog'>
              <button className="toggle">blog</button>
            </a>
            <a href='#works'>
              <button className="toggle">works</button>
            </a>
            <button className="toggle">contact</button>
          </nav>
        </div>
      </div>
    </div>
    <div className='content'>
      <div className='wrap'>
        <div id='aboutme'>
          {/* <AboutMe /> */}
        </div>
        <div id='blog'>
          {/* <Blog blog={blog} /> */}
        </div>
        <div id='works'>
          {/* <Work works={works} /> */}
        </div>

      </div>
    </div>
```

4. デザインを決めます。
`globals.css`の中身を以下のコードに置き換えます。  
```css
* {
  box-sizing: border-box;
  font-family: Helvetica, '游ゴシック', 'Yu Gothic', YuGothic, HiraKakuProN-W3, 'メイリオ', Meiryo, sans-serif;
}

body {
  background-color: #fbfbfb;
}

.custom-header {
  display: block;
  height: auto;
}

.header-image {
  height: 100vh;
  max-height: 100%;
  overflow: hidden;
  position: relative;
}

.site-branding {
  margin-bottom: 36px;
  bottom: 0;
  display: block;
  left: 0;
  height: auto;
  padding-top: 0;
  position: absolute;
  width: 100%;
}

.fixed-background {
  /* min-height: 100vh; */
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  height: 80%;
  width: 100%;
  overflow: hidden;
}

.site-title {
  display: inline-block;
  vertical-align: middle;
}

.wrap {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-right: 3em;
  padding-left: 3em;
  max-width: 1000px;
}

.title {
  color: whitesmoke;
  font-size: 2.25rem;
 }
 
.navigate-top {
  color: rgb(31, 67, 71);
  background: rgb(255, 255, 255);
  border-bottom-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  bottom:0;
  font-size:0.875rem;
  left:0;
  position: absolute;
  right: 0;
  width: 100%;
  z-index: 3;
}

.site-nabigation-fixed {
  bottom: auto;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 7;
}

.menu-toggle {
  padding: 1em;
  width: 360px;
}

.toggle {
  background-color: transparent;
  color: rgb(31, 67, 71);
  border: 0;
  box-shadow: none;
  font-size: 0.875rem;
  font-weight: 800;
  padding: 1em;
  text-shadow: none;
  margin-right: auto;
  margin-left: auto;
  cursor: pointer;
}

.content {
  position: relative;
  word-wrap: break-word;
}
```

ここまで記述すると、サンプルサイトのヘッダー部分と同じ画面ができあがります。