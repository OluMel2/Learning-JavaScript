//2章 【JavaScriptの基本文法】

//let 変数名 = 内容 ;
//let hello = 'Hello World';
//alert(hello);



//変数は数値、文字列、関数を代入できる。

// 整数を代入する
//let int1 = 1;
// 負数を代入する
//let int2 = -10;
// 小数点を代入する
//let float1 = 3.14;
// 文字列を代入する
//let str1 = 'JavaScriptを覚えよう';
//alert(str1);



//四則演算
// 足し算
//alert(4 + 3);
// 引き算
//alert(8 - 5);
// 掛け算
//alert(2 * 6);
// 割り算
//alert(10 / 2);



//文字列の結合
//alert('Hello' + 'World');

//let str1 = 'Hello';
//let str2 = 'World!!';
//alert(str1 + str2);



//条件分岐

//条件式が１つの場合
//if(条件1){
//  処理1
//}
// 条件1を満たすときは、処理1を実行

//1つの条件式で、処理を2つに分ける場合
//if(条件1){
//  処理1
//} else{
//  処理2
//}
// 条件1を満たすときは処理1、満たさないときは処理2を実行

//2つの条件式で処理を分ける場合
//if(条件1){
//  処理1
//} else if(条件2){
//  処理2
//} else{
//  処理3
//}
// 条件1を満たすときは処理1、条件2を満たすときは処理2、どちらも満たさないときは処理3を実行

//let orange = 100;
//let apple = 120;

//if(orange < apple){
//  alert('みかんの値段がりんごより安い');
//} else if(orange == apple){
//  alert('みかんとりんごが同じ値段');
//} else{
//  alert('みかんの値段がりんごより高い');
//}



//繰り返し処理
//JavaScriptで繰り返し処理を行うには、「while文」と「for文」
//While文は、条件式が真（true）ならば制限なく繰り返します。
//for文は、決められた回数だけ繰り返します。

//while文
// 引数の条件がtrueの間、波括弧内部の処理が繰り返される。
//while(条件){
// 処理
//}

//let max = 100;
//let num = 1;
//let count = 0;

//while(num < max){
//  num = num * 2;
//  count = count + 1;
//}

//alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');


//do...while文
//do...while文では、条件式のtrue／falseに関わらず、最初の1回だけは必ず処理が行われます。
//その後、条件式を評価して、繰り返し処理を続けるか／抜けるかを決めていきます。

//do{
//  最低1回は行われる処理
//}while(条件式);


//for文
//「for文」は、決められた回数の処理を繰り返すときに使います。

//for ( 初期値; 条件式; 増減値 ){
//  繰り返し処理
//}

//let i;
//let num = 0;

//for(i = 1; i < 11; i++){
//  num = num + i;
//}

//alert('1から10まで足し算した結果は' + num + 'です');

//解説
//「変数i」を宣言
//「変数num」を宣言し、初期値を「0」に設定
//変数iの初期値を「1」に設定し、変数iが「11」未満のときは変数iに1を足す（「i++」は「i = i+1」と同じ）
//変数numに「num+i」を代入
//アラートウィンドウに計算結果を表示

