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


//letのスコープ
//letではブロックスコープ（ローカルスコープ）の変数を宣言することができる。
//ブロックとは() 、{}の組で区切られたもの
//function foo() {
//  let x = "webcamp"
//  {
//    let y = "hello webcamp"
//  }
//  console.log(x)
//  console.log(y)
//}

//foo()
//「Uncaught ReferenceError: y is not defined」と、参照エラーが起きる。
//yという変数は3~5行目の{ }のブロック内でletによって宣言されたもの。

//for (let i = 0; i < 10; i++) {
//  console.log(i)
//}
//
//console.log(i)
//「Uncaught ReferenceError: i is not defined」と、参照エラーが起きる。
//ブロック外から参照したためエラーになる。
//letによる変数宣言では宣言されたブロック内が有効範囲。


//constのスコープ

//巻き上げ
//JavaScriptには変数の巻き上げ（ホイスティング） がある。

//var str = "webcamp"

//function foo() {
//  console.log(str)
//  var str = "dmm webcamp"
//  console.log(str)
//}

//foo()

//「undefined」が出力されているが、これの裏には変数の巻き上げが隠れている。
//普通に考えると、1行目はグローバルスコープのstrという変数に「webcamp」を格納している。
//グローバルスコープはどこからでも参照できる有効範囲を持っていますので、初めのconsole.log(str)では「webcamp」と出力されるはず。
//コードでは5行目にvar str = "dmm webcamp"とあるが、内部的にはvar strの変数宣言の部分が巻き上げられる。
//変数の巻き上げとは関数内のどの部分で変数を宣言したとしても、関数冒頭で変数を宣言したことになる。
//グローバルスコープのstrという変数と、関数スコープのstrという同名の変数が存在するが、console.log(str)が関数内で使用されているため、関数スコープのstrが参照される。
//そのため、初めのconsole.logで参照されたstrは、宣言されたのみの変数で値は代入されていない。
//結果、「undefined」と出力される。



//変数宣言の使い分け
//変数宣言の際に意識すべきことはスコープと、再代入。
//昨今は、letとconstを変数宣言に使用していく
//letとconstの違い
//letは再代入が可能であり、constは再代入が不可能
//constで宣言した変数に値を格納した場合、新たに値を代入することはできまない
//基本的に、新たに値を代入する必要のないものに関してはconstで宣言していく
//etは再代入をする場面において、使用すべきもの

//for (let i = 0; i < 10; i++) {
//  console.log(i);
//}

//０~9までをループによってコンソールに出力するコード
//この場合、iをletで宣言する理由はループするたびにiに再代入を行うためである。