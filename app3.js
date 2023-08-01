//関数とは
//"関数" は、同じ処理をひとまとめにして再利用しやすくする方法
//処理内容に変更があった場合でも関数の中を変更するだけでいいので、保守性が高い。
//「関数（function）」は、繰り返し使われる一連の処理を1つにまとめたもの
//関数の形で定義しておき、毎回同じプログラムを書く代わりに、この関数を呼び出すことで処理を実行する。

//簡単な関数の形
//function 関数名(){
//  処理内容
//}

//JavaScriptでは、functionに続けて関数名を書き、{ }内に処理内容を記述する


//「引数」と「戻り値」
//関数に引数を渡したいときは、( )内に引数を書く
//引数は「,」でつないで複数の指定も可能です。複数指定すると、それぞれ順番に引数が格納される。
//関数の結果を出力したいときは、return内に戻り値を渡す。

//function 関数名(引数){
//  処理
//  return 戻り値;
//}

//function addString(strA){
//  let addStr = "Hello " + strA;
//  return addStr;
//}

//functionの後に、関数名「addString」を記述し、引数として「strA」を定義している。
//変数名「addStr」に、「Hello 」の文字列と、関数の引数「strA」に設定されている文字列を結合している。
//結合結果の格納された「addStr」を、関数の戻り値としている。returnを記述することで、出力結果が表示される。
//与えられた引数を基にして、特定の文字列を結合する関数が作成できた。

// メイン部分
let alertString;

// 作成した関数を呼び出し、変数へ格納
alertString = addString("WebCamp");

//変数の中身をアラートで表示する
alert(alertString);

// 作成した関数
function addString(strA){
  let addStr = "Hello " + strA;
  return addStr;
}