---
sidebarDepth: 0
---
## やろう！ ゲームをポートフォリオサイトにリンクする
+ Next.jsのプロジェクトに作ったゲームを載せる場所を作成します。
  + ゲームだけを載せるのではない意図で「works」とします。
+ 「/components」フォルダの下に「Work.js」ファイルを作成し、下のソースをコピーして貼り付けます。

```js
export default function Work({ works }) {
    return (
        <main className="sectionworks">
            <h2 className="heading2">works</h2>
            <section id="work">
                <ul className="itemList">
                    {works.map((work) => (
                        <li key={work.id}>
                            <a href={`${work.path}`} target="_blank" rel="noopener noreferrer">
                                <img src={work.src} alt={work.alt}
                                    height={240} width={240} objectFit="contain" /><br />
                            </a>
                            <div className="heading3">{work.name}</div>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
```

+ 「/utils」フォルダの下に「worksData.js」ファイルを作成し、下のソースをコピーして貼り付けます。

```js
const works = [
    { id: 'ebikani', name: 'エビカニゲーム', path: 'https://its-atd-internship-game.azurewebsites.net', alt: 'ebikani', src: '/home/shrimp.jpeg'},
];
  
module.exports = { works: works };
```

+ 今後 work が増えた場合には、行を増やして対応します。
