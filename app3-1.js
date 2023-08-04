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

function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );

  if(js_hand_num == 0){
    js_hand = "グー";
  } else if(js_hand_num == 1){
    js_hand = "チョキ";
  } else if(js_hand_num == 2){
    js_hand = "パー";
  }

  return js_hand;
}