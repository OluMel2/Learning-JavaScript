//複数の関数で表示できる

//関数は、複数定義することもできる

//入力ダイアログで値を入力

//let promptStr = prompt('何か好きな文字を入力してください。');

//alert(promptStr);

//入力してOKボタンをクリックすると、入力された文字列はprompt()関数の戻り値として変数「promptStr」に格納され、アラートウィンドウ上に表示される


//複数の関数を定義する


//じゃんけんの手とJavaScriptがランダムに出すじゃんけんの手を比較し、勝ち負けの結果を表示させる関数を定義。

//let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

//alert('あなたの選んだ手は' + user_hand + 'です。');

//このコードを実行しても、入力したじゃんけんと同じものがアラートウィンドウ上に表示されるだけになってしまう。


//この処理に、相手のじゃんけんの手をランダムに選択する関数を追加していく。

//function getJShand(){
//  let js_hand_num = Math.floor( Math.random() * 3 );
//Math.floor( Math.random() * 3 )は、0～2までのランダムな整数値を生成する。
//関数内の「3」は、ランダム生成したい整数値の+1を指定している。

//  if(js_hand_num == 0){
//    js_hand = "グー";
//  } else if(js_hand_num == 1){
//    js_hand = "チョキ";
//  } else if(js_hand_num == 2){
//    js_hand = "パー";
//  }
//ランダム生成された数値を基に条件分岐させ、グー・チョキ・パーを出し分ける。

//  return js_hand;
//}
//関数の戻り値として、グー・チョキ・パーの文字列を返す。
//これを応用し、入力されたグー・チョキ・パーと、JavaScriptで生成したランダムなじゃんけんの手を比べ、勝ち・負け・引き分けの結果を表示。


//WinLose関数内で、勝ち・負け・引き分けの判定を行っている。
// じゃんけんの手を入力してもらうプロンプト欄を生成
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

// じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand, js_hand);

// 結果を表示する
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');

// ランダムでじゃんけんの手を作成する関数
function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}