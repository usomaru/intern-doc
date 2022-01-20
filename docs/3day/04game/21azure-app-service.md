---
sidebarDepth: 0
---
## やろう！ ゲームをWebサイトに公開する
1. VSCodeの拡張機能から「Azure App Service」をインストールします。
   ![azure1](/img/azure/azure1.png)
2. VSCodeのAzureを開き、「APP SERVICE」の「Deploy to Web App...」をクリックします。
3. 今作業しているフォルダを選択します。
   ![azure3](/img/azure/azure3.png)
4. 使用したいサブスクリプションを選択します。
5. 【初回のみ】Create new Web Appを選択します。【2回目以降】作成したWebAppを選択します。
   ![azure5](/img/azure/azure5.png)
6. 【初回のみ】このWebサイトの名前を付けます。
   ![azure6](/img/azure/azure6.png)
7. 【初回のみ】リソースグループを選択します。
8. 【初回のみ】ランタイムスタックを選択します。今回は、「.NET Core 3.1(LTS)」を選択します。
   ![azure8](/img/azure/azure8.png)
9. 【初回のみ】OSを選択します。
   ![azure9](/img/azure/azure9.png)
10. 【初回のみ】ロケーションを選択します。今回は「東日本」を選択します。
   ![azure10](/img/azure/azure10.png)
11. 【初回のみ】プランを選択します。今回は「Create new App Service plan」となっているプランを選択します。  
   ![azure11-1](/img/azure/azure11-1.png)  
   先ほどのWebサイトと同じ名前を付けます。
   プランを選びます。今回は「Free(F1)」を選択します。
   ![azure11-2](/img/azure/azure11-2.png)
12. 【初回のみ】Webアプリを監視するリソースの作成を選択します。今回は不要なので「Skip for now」を選択します。
   ![azure12](/img/azure/azure12.png)
13. 公開されるまでしばらく待ちます。
