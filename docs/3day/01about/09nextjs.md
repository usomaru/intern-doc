---
sidebarDepth: 0
---
## Next.jsの主なファイル構成
project_root/  
├── components/  
│   ├── <font color="royalblue">AboutMe.js ：about meの表示箇所</font>  
│   ├── <font color="royalblue">Blog.js ：blogの表示箇所</font>  
│   └── <font color="royalblue">Work.js ：worksの表示箇所</font>  
├── libs/  
│   └── client.js ：ブログ用のmicroCMSの接続データ  
├── out ：npm run build時に作成されるフォルダ、公開用  
├── pages/ ：表示データ  
│   ├── contents/  
│   │   └── blogs/  
│   │         └── [id].js ：ブログの個別ページ  
│   └── index.js ：初期ページ  
├── public/ ：画像データ  
├── style/ ：css  
└── utils/ ：プログラムで使用する設定値

---

<font color="royalblue">青字：今回主に使用するページ（予定）</font>  

### pageについて
Next.jsでは、ページはReact Componentです。
ReactComponentはpagesフォルダの中にある.js, .jsx, .ts,.tsxから吐き出されています。
例えば、pagesフォルダの中に、👇のようなReactComponentをエクスポートするabout.jsというファイルがあったら、
/aboutでアクセスすることができます。

```js
function About() {
  return <div>About</div>
}

export default About
```
