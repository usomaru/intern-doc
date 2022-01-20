---
sidebarDepth: 0
---
## やろう！ Step3 ゲームオーバーとゴールを設定する

### ゲームオーバーを判定する

ソースコードの123行目~136行目を見てみましょう。

```javascript
  // if (isGameOver) {
  //   // ゲームオーバーしたときの挙動
  //   updatedImageY = characterImageY + characterImageVY;
  //   characterImageVY = characterImageVY + 0.5;
  //   if (updatedImageY > 530) {
  //     music.pause();
  //     alert("Game Over");
  //     init();
  //     return;
  //   }
  // } else {
  updatedImageX = putKey(updatedImageX);
  // }
```

ここでは、ゲームオーバーの際の挙動を定義しています。
ゲームオーバーになった場合の条件を指定し、音楽や「Game Over」のメッセージ、初期設定などをおこなっています。
ゲームオーバーかどうかの基準は何で判断しているかというと、isGameOverの値です。trueだとゲームオーバー、falseだとゲーム続行とします。
ソースコードの36行目を見ると、isGameOverは初期の段階ではfalseになっています。
```javascript
var isGameOver = false;
``` 

では、isGameOverがtrueになる状況を設定してみましょう。

まず1つは、ジャンプに失敗して下に落ちてしまった時にゲームオーバーにしてみます。
ソースコードの160行目～165行目を見てみましょう。

```javascript
  // 下まで落ちたらゲームオーバーとする
  // if (characterImageY > 530) {
  //   isGameOver = true;
  //   updatedImageY = 530;
  //   characterImageVY = -20;
  // }
```

ここでは、下に落ちた時にisGameOverのフラグをtrueにしています。

2つ目は、敵にぶつかってしまった場合にゲームオーバーになるようにしましょう。
そのために、まずは敵にぶつかったかどうかを判定する当たり判定をします。そのあとでゲームオーバーかどうかを判断する処理を実装してみましょう。

ソースコードの172行目～202行目を見てみましょう。

```javascript
  // この時点でまだゲームオーバーでなかったら、あたり判定を行う
  // if (!isGameOver) {

  //   // 敵情報ごとに当たり判定を行う必要があるので、ループ
  //   for (var i = 0; i < enemies.length; i++) {
  //     var isHit = isAreaOverlap(
  //       updatedImageX,
  //       updatedImageY,
  //       32,
  //       imageHeight,
  //       enemies[i].x,
  //       enemies[i].y,
  //       32,
  //       imageHeight
  //     );

  //     // ジャンプして踏みつぶしたら、敵が消せる
  //     if (isHit) {
  //       if (isJump && characterImageVY > 0) {
  //         // ジャンプしていて、落下している状態で敵にぶつかった場合には
  //         // 敵を消し去る(見えない位置に移動させる)とともに、上向きにジャンプさせる
  //         characterImageVY = -7;
  //         enemies[i].y = 530;
  //       } else {
  //         // ぶつかっていた場合にはゲームオーバーとし、上方向の初速度を与える
  //         isGameOver = true;
  //         characterImageVY = -10;
  //       }
  //     }
  //   }
  // }
```

step2で敵を複数作りました。その敵の数だけ当たり判定を行う必要があるので、step2でもやったループ処理をして1体1体当たったかどうか確認します。  
そのときに、エビがジャンプして踏みつぶしたら敵を消して上向きにジャンプさせる処理、ぶつかってしまったらisGameOverをtrueにします。

ここまでで、
+ 地面から落ちてしまったとき
+ 敵にぶつかったとき
にゲームオーバーになる仕組みを作ることができました。

### ゴールを判定する

最後に、このゲームのゴールを作りましょう。
まずはゴールの画像を表示させます。
ソースコードの257行目～259行目をコメントアウトします。

``` javascript
  // ゴールの画像を表示
  var goal = new Image();
  goal.src = "images/goal/text_goal.png"
  ctx.drawImage(goal, 760, 100, 32, 32);
}
```

動かしてみてゴールが現れたのが確認出来たら、ゴールの判定をしましょう。

ソースコードの205行目～223行目を見てみましょう。
```javascript
  // ゴールを作る
  // if (!isGameOver) {
  //   var isHitGoal = isAreaOverlap(
  //     updatedImageX,
  //     updatedImageY,
  //     32,
  //     imageHeight,
  //     760,
  //     100,
  //     32,
  //     imageHeight
  //   );
  //   if (isHitGoal) {
  //     music.pause();
  //     alert("GOAL");
  //     init();
  //     return;
  //   }
  // }
```

ここでは、ゲームオーバーせずにゴールまでたどり着けた場合にゴールの判定をしています。
ゴールすると、GOALの表示が出されるようになります。