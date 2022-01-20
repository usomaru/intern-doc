---
sidebarDepth: 0
---
## やろう！ Step2 地面と敵を増やす

キャラクターが動くようになったので、地面を階段のように増やし、敵も配置してみましょう。

### 地面を増やしてみる

ソースコードの52行目～57行目を見てみましょう。

```javascript
  // grounds = [
  //   { x: 0, y: 432, w: 200, h: 32 },
  //   { x: 200, y: 332, w: 150, h: 32 },
  //   { x: 350, y: 232, w: 250, h: 32 },
  //   { x: 600, y: 132, w: 200, h: 32 }
  // ];
```

ここでは地面を表示する位置を定義しています。

{}内のxは地面を表示するx軸(横)の位置、yはy軸(縦)の位置、wは地面の画像の横幅、hは地面の画像の縦幅を示しています。

![step2_1](/img/game/step2_1.png)

そして、{}の固まりが4つあるかと思います。
これは1つ目の階段の定義、2つ目の階段の定義…と階段の定義が4つあることを意味しています。

![step2_2](/img/game/step2_2.png)

では、52行目から57行目のコメントを外してみます。

このように、<b>同じ種類のものを複数定義したいときに、配列という定義方法が使われます。</b>

参考:[プログラミングにおける配列（array）とは？ 意味をわかりやすく図解](https://26gram.com/what-is-array)

では、この地面はどのように表示するのでしょうか？
ソースコードの238行目～244行目を見てみましょう。

```javascript
    // 地面の画像を表示
    // var groundImage = new Image();
    // groundImage.src = "images/ground-01/base.png";
    // ループすることで、上で定義した数ぶんの地面を表示できる
    // for (var i = 0; i < grounds.length; i++) {
    //   ctx.drawImage(groundImage, grounds[i].x, grounds[i].y, grounds[i].w, grounds[i].h);
    // }
```

ここでは1つめの地面から順にループ処理をすることで表示しています。

コメントアウトを外してみると、地面が階段のように4段追加されたかと思います。

このように、<b>配列で定義した数ぶん同様の処理を行いたい場合に、ループ処理をします。</b>

参考:[ループと反復処理](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Loops_and_iteration)

ここで、ブロックを追加したことにより、何点かコメントアウトを外してほしい部分があります。
大きな理由として、今回追加した地面にキャラクターが着地してほしいからです。
また、地面に着地できなかった場合は画面下まで落下してほしいからです。(マリ〇のような感じ)

ソースコード 153～156行目

```javascript
    // if (getPositionGroundWithCharacter(characterImageX, characterImageY, updatedImageX, updatedImageY) === null) {
    //   isJump = true;
    //   characterImageVY = 0;
    // }
```

ソースコード 304行目

```javascript
// var isJump = false;
```

ソースコード 321～329行目

```javascript
  // 地面に着地していたら着地。地面に着地していなかったら、そのまま落下。
  // キャラクターがいる地面の座標を取得する
  // const positionWithCharacter =
  //   getPositionGroundWithCharacter(x, y, updatedX, updatedY);

  // // キャラクターのいる地面の座標を取得できたら、着地処理。
  // if (positionWithCharacter !== null) {
  //   updatedY = positionWithCharacter.y - imageHeight;
  // } else {
  //   isJump = true;
  // }
```

次にソースコード313行目～316行目をコメントアウトしてみてください。
コメントアウトは、コメントをしたい部分を選択し、「Ctrl」+「K」+「C」を押すとつけれます。

```javascript
if (updatedY + imageHeight > 432) {
    updatedY = 432 - imageHeight;
    isJump = false;
  }
```

終わったら、動かしてみましょう。

ぜひ、適当に地面の定義をしていた配列部分の値を変更してオリジナルのステージを作ってみてください。

### 敵を配置してみる

基本的にやっていることや、プログラミングの手法は地面を配置したときと同じです。

ソースコードの58行目~62行目を見てみましょう。

```javascript
  // enemies = [
  //   { x: 528, y: 0, isJump: true, vy: 0 },
  //   { x: 750, y: 0, isJump: true, vy: 0 },
  //   { x: 300, y: 180, isJump: true, vy: 0 }
  // ];
```

ここでは敵を最初に表示する位置とジャンプ中かどうかのフラグ、重力加速度が定義されています。
コメントアウトを外してみます。

続いて敵の画像を表示させます。
ソースコード248行目～253行目のコメントアウトを外してみます。

```javascript
  // 敵の画像を表示
  // var enemyImage = new Image();
  // enemyImage.src = "images/character-02/kani_enemy.png";
  // ループすることで、上で定義した数ぶんの敵を表示できる
  // for (var i = 0; i < enemies.length; i++) {
  //   ctx.drawImage(enemyImage, enemies[i].x, enemies[i].y, 32, imageHeight);
  // }
```

このまま一度動かしてみると、敵が表示されることが確認できると思いますが、動きません。
そこで、85行目～116行目のコメントアウトを外してみます。

```javascript
  // 敵に関する処理
  // 敵の数ぶん、ループを回して敵を動かす処理をする
  // for (var i = 0; i < enemies.length; i++) {
  //   var updatedEnemyX = enemies[i].x;
  //   var updatedEnemyY = enemies[i].y;
  //   var updatedEnemyVY = enemies[i].vy;
  //   var updatedEnmeyIsJump = enemies[i].isJump;

  //   // 敵は左に固定の速度で移動
  //   updatedEnemyX = updatedEnemyX - 1;

  //   if (updatedEnmeyIsJump) {
  //     const [fallingPositionY, fallingPositionVY, isJumpEnemy] =
  //       falling(
  //         enemies[i].x,
  //         enemies[i].y,
  //         enemies[i].vy,
  //         updatedEnemyX,
  //         updatedEnemyY
  //       );
  //     updatedEnemyY = fallingPositionY;
  //     updatedEnemyVY = fallingPositionVY;
  //     updatedEnmeyIsJump = isJumpEnemy;
  //   } else {
  //     if (getPositionGroundWithCharacter(enemies[i].x, enemies[i].y, updatedEnemyX, updatedEnemyY) === null) {
  //       updatedEnmeyIsJump = true;
  //       updatedEnemyVY = 0;
  //     }
  //   }
  //   enemies[i].x = updatedEnemyX;
  //   enemies[i].y = updatedEnemyY;
  //   enemies[i].vy = updatedEnemyVY;
  //   enemies[i].isJump = updatedEnmeyIsJump;
  // }
```

少々複雑なため、詳しい説明は割愛させていただきますが、配置した敵の数だけ上で説明したループ処理を使って「敵が動く」という処理をしています。

ここで一旦動かしてみましょう。
敵がエビに向かって近づいてくるようになったかと思います。

では、敵を定義している部分の値を変えてみて、敵の数や、敵が湧いてくる配置を変更してみましょう。

少々複雑になってきましたがこのStepでは、配列で何かを定義したときには、ループ処理をしている点を頭の片隅に覚えていただけるといいかなと思います。




