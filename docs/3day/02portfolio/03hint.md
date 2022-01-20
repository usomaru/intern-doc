---
sidebarDepth: 0
---
## 実装のヒント
#### 役に立つサイト
+ [サルワカ HTML&CSS入門 Webデザインをイチから学ぼう](https://saruwakakun.com/html-css/basic)
#### 画像を挿入したいとき
Next.jsで画像を扱う時は、*public*ディレクトリで管理します。  
使いたい画像が用意できたら、publicディレクトリに配置します。  
コード側で呼び出すときは、👇のようになります。  
hogehoge.js
``` javascript
<img src="/sample-icon.png"/>
```

画像を加工したいときは、*main.css*ファイルに加工の設定を追加しましょう。  
hogehoge.js
```javascript
<img src="/sample-icon.png" alt="mainimage" className='aboutme-icon' />
```
main.css
```css
.aboutme-icon {
  width: 200px;
  height:200px;
  border-radius: 50%;
}
```
この設定のcssだと、画像は円で表示されます。  

#### 表を挿入したいとき
+ 参考になるサイト  
  - [【コピペOK】CSSだけで実装できるおしゃれテーブルデザイン10つ](https://webliker.info/75964/)
  - [レスポンシブも対応！綺麗で見やすい表のデザイン11個[HTML&CSS]](https://pecopla.net/web-column/table-design)  

以下の例では、列1にアイコンを表示させるコードです。
[SAMPLEサイトのABOUT ME](https://its-atd-portfolio.azurewebsites.net/contents/aboutme/)で実際に書かれているコードです。  
アイコンは、*public*ディレクトリに格納します。今回はpublicの中にさらにportfolioディレクトリを切り、そこに格納しました。  
hogehoge.js
```javascript
    <table className='skills-table'>
        <tr>
            <th>技術</th><th>経験年数</th><th>スキル</th>
        </tr>
        <tr>
            <td className='icon C-Sharp'>C#</td><td>〇年</td><td>★★★☆☆</td>
        </tr>
        <tr>
            <td className='icon HTML'>HTML</td><td>〇年</td><td>★★★★☆</td>
        </tr>
    </table>
```
main.css
```css
table td.icon.C-Sharp{
  background-image: url(../public/portfolio/C_Sharp.svg.png);
}

table td.icon.HTML{
  background-image: url(../public/portfolio/HTML5.png);
}
```


