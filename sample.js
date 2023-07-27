//JavaScriptの変数宣言を学ぼう
//[var][let][const]JavaScriptで変数を宣言する際には、この3つを使用してい。
//varはほとんど使わない。 constは慣例的にすべて大文字とすることもありますが、小文字でも宣言できます。



//宣言
//一度、宣言した変数名で再度、変数宣言を行うことを再宣言といいます。

// varによる再宣言
//var nickname = "taro"
//console.log(nickname)
//var nickname = "ichiro"
//console.log(nickname)

// letによる再宣言
//let nickname = "taro"
//console.log(nickname)
//let nickname = "ichiro"
//console.log(nickname)
//「Uncaught SyntaxError: Identifier 'nickname' has already been declared」と、エラーが出ています。

// constによる再宣言
//const nickname = "taro"
//console.log(nickname)
//const nickname = "ichiro"
//console.log(nickname)
//constの場合でも再宣言はできないため、letの時と同様のエラーを確認。



//再代入
//変数に値を代入した後で、別の値を代入することを再代入と言います。
//再代入はvarとletで可能。constでは再代入はできない。

// varによる再代入
//var nickname = "taro"
//console.log(nickname)
//nickname = "jiro"
//console.log(nickname)
//4行目でnickname = "jiro"と再代入を行っていて、5行目でconsoleへ出力しています。
//再代入が反映されていることを確認。

// letによる再代入
//let nickname = "taro"
//console.log(nickname)
//nickname = "jiro"
//console.log(nickname)
//varと同様の結果を確認

// constによる再代入
//const nickname = "taro"
//console.log(nickname)
//nickname = "jiro"
//console.log(nickname)
//「Uncaught TypeError: Assignment to constant variable. at sample.js:4」というエラーを確認。
//エラーの内容は定数とした変数には割り当てできないというもの。
//constでは再宣言と再代入ができない。



//スコープ
//変数にはスコープ（定義した変数の有効範囲）がある。
//グローバルスコープとローカルスコープがあり、ローカルスコープには「関数スコープ」と「ブロックスコープ」がある。

//varのスコープ
//varでは関数スコープ（ローカルスコープ）、グローバルスコープの変数を宣言できる。
//グローバルスコープはどこからでも参照可能な変数。
//関数スコープは関数の中でvarによって宣言された変数。(関数スコープの有効範囲は関数内になる)

//var str = "webcamp" //グローバルスコープ

//function foo() {
//  console.log(str)
//  var y = "hello" //関数スコープ
//}

//foo()
//console.log(y)

//10行目のconsole.log(y)で「Uncaught ReferenceError: y is not defined」というエラーが発生。
//yはfooという関数の中でvarによって宣言された、関数スコープ。関数の外からyを参照しようとしても有効範囲外となりエラーとなる。