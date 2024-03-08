/*電卓作成
0~9までの10個の数値ボタン、+-*÷の4個の演算ボタンを用意する
上記ボタンを押すと、それぞれの値が入力される
値は連続して表示される
演算ボタンは連続して表示できない、数値ボタンに挟まれたときのみ処理を行う
ボタンを押下すると、それぞれの処理を行う
数値を押すと表示される
続けて数値、演算子を押すと連続して表示されていく
演算子は連続して押すことができない
+を押すと加算される
-を押すと減算される
*を押すと乗算される
÷を押すと除算される
リセットを押すと値が0になる

・数値のクリックイベントで、メインテキストに取得した値をメインテキストに表示
・リセットボタンのクリックインベントで、0の変数をメインテキストに表示
・初期の表示（メインテキスト）を空白にする
・0~9が入力されたら値をメインテキストに表示する
・演算子は最初に入力しても表示されない
・数値の後に演算子が表示される
・演算子は２つ以上連続して表示されない
・ボタンがおクリックされたとき
*/

//テキスト表示用
let sample = document.querySelector('.tg-main');

//表示用テキスト
let numBaseText = '';
let calBaseText = '';
let addBaseText = '';
let num2BaseText = '';

//計算式用の値
let total = 0;

//取得用の値
const val = [0,1,2,3,4,5,6,7,8,9,'.'];
const cal = ['+', '-', '*', '/', '.'];
const dec = '.'

//数値クリック時の値を格納するための空の配列
let numData = [];

//演算子クリック時の値を格納するための空の配列
let calData = [];

//計算結果の値を取得ための空の配列
let calTotalBase = [];


//数値クリック時の関数処理
function clickNum(getNum) {
  numData.push(getNum);
  numBaseText = numBaseText + getNum;
  console.log(numBaseText);
  sample.textContent = numBaseText;
}

//数値クリック時関数処理２回目
function clickNum2(getNum2) {
  numData.push(getNum2);
  addBaseText = addBaseText + getNum2
  sample.textContent = addBaseText;
  console.log(sample.textContent);
  num2BaseText = sample.textContent;
}

//数値(0)ボタンクリック用
let zero = document.querySelector('.zero');
zero.addEventListener('click',event => {
  if(sample.textContent == addBaseText) {
    getNum0A = val[0]; 
    clickNum2(getNum0A);
  }  
  else if(sample.textContent == num2BaseText) {
    getNum0A = val[0]; 
    clickNum2(getNum0A);
  }
  else {
    getNum0 = val[0];
    clickNum(getNum0);
  }
})

//数値(1)ボタンクリック用
let one = document.querySelector('.one');
one.addEventListener('click',event => {
  if(sample.textContent == addBaseText) {
    getNum1A = val[1]; 
    clickNum2(getNum1A);
  }
  else if(sample.textContent == num2BaseText) {
    getNum1A = val[1]; 
    clickNum2(getNum1A);
  }
  else {
    getNum1 = val[1];
    clickNum(getNum1);
  }
})

//数値(2)ボタンクリック用
let two = document.querySelector('.two');
two.addEventListener('click',event => {
  if(sample.textContent == addBaseText) {
    getNum2A = val[2]; 
    clickNum2(getNum2A);
  }
  else if(sample.textContent == num2BaseText) {
    getNum2A = val[2]; 
    clickNum2(getNum2A);
  }
  else {
    getNum2 = val[2];
    clickNum(getNum2);
  }
})

//数値(3)ボタンクリック用
let three = document.querySelector('.three');
three.addEventListener('click',event => {
  if(sample.textContent == addBaseText) {
    getNum3A = val[3]; 
    clickNum2(getNum3A);
  }
  else if(sample.textContent == num2BaseText) {
    getNum3A = val[3]; 
    clickNum2(getNum3A);
  }
  else {
    getNum3 = val[3];
    clickNum(getNum3);
  }
})

//数値(4)ボタンクリック用
let four = document.querySelector('.four');
four.addEventListener('click',event => {
  if(sample.textContent == addBaseText) {
    getNum4A = val[4]; 
    clickNum2(getNum4A);
  }
  else if(sample.textContent == num2BaseText) {
    getNum4A = val[4]; 
    clickNum2(getNum4A);
  }
  else {
    getNum4 = val[4];
    clickNum(getNum4);
  }
})

//数値(5)ボタンクリック用
let five = document.querySelector('.five');
five.addEventListener('click',event => {
  if(sample.textContent == addBaseText) {
    getNum5A = val[5]; 
    clickNum2(getNum5A);
  }
  else if(sample.textContent == num2BaseText) {
    getNum5A = val[5]; 
    clickNum2(getNum5A);
  }
  else {
    getNum5 = val[5];
    clickNum(getNum5);
  }
})

//数値(6)ボタンクリック用
let six = document.querySelector('.six');
six.addEventListener('click',event => {
  if(sample.textContent == addBaseText) {
    getNum6A = val[6]; 
    clickNum2(getNum6A);
  }
  else if(sample.textContent == num2BaseText) {
    getNum6A = val[6]; 
    clickNum2(getNum6A);
  }
  else {
    getNum6 = val[6];
    clickNum(getNum6);
  }
})

//数値(7)ボタンクリック用
let seven = document.querySelector('.seven');
seven.addEventListener('click',event => {
  if(sample.textContent == addBaseText) {
    getNum7A = val[7]; 
    clickNum2(getNum7A);
  }
  else if(sample.textContent == num2BaseText) {
    getNum7A = val[7]; 
    clickNum2(getNum7A);
  }
  else {
    getNum7 = val[7];
    clickNum(getNum7);
  }
})

//数値(8)ボタンクリック用
let eight = document.querySelector('.eight');
eight.addEventListener('click',event => {
  if(sample.textContent == addBaseText) {
    getNum8A = val[8]; 
    clickNum2(getNum8A);
  }
  else if(sample.textContent == num2BaseText) {
    getNum8A = val[8]; 
    clickNum2(getNum8A);
  }
  else {
    getNum8 = val[8];
    clickNum(getNum8);
  }
})

//数値(9)ボタンクリック用
let nine = document.querySelector('.nine');
nine
.addEventListener('click',event => {
  if(sample.textContent == addBaseText) {
    getNum9A = val[9]; 
    clickNum2(getNum9A);
  }
  else if(sample.textContent == num2BaseText) {
    getNum9A = val[9]; 
    clickNum2(getNum9A);
  }
  else {
    getNum9 = val[9];
    clickNum(getNum9);
  }
})


//小数点ボタンクリック用
let decimal = document.querySelector('.decimal');
decimal.addEventListener('click',event => {
  if(sample.textContent == addBaseText) {
    getNum10A = val[10]; 
    clickNum2(getNum10A);
  }
  else if(sample.textContent == num2BaseText) {
    getNum10A = val[10]; 
    clickNum2(getNum10A);
  }
  else {
    getNum10 = val[10];
    clickNum(getNum10);
  }
})

//演算子クリック用関数
function clickCal(getCal) {
  calData.push(getCal);
  numBaseText = numBaseText + getCal;
  console.log(numBaseText);
  sample.textContent = numBaseText;
}

//演算子クリック計算後２回目
function clickCal2(getCal2) {
  sample.textContent = calTotalBase[calTotalBase.length - 1];
  calData.push(getCal2);
  sample.textContent = calTotalBase[calTotalBase.length - 1] + getCal2;
  addBaseText = calTotalBase[calTotalBase.length - 1] + getCal2;
  console.log(addBaseText);
}

//演算子ボタン(+)ボタンクリック時
let plus = document.querySelector('.plus');
plus.addEventListener('click',event => {
  if(sample.textContent === numBaseText) {
    getCalPlus = cal[0];  
    clickCal(getCalPlus);
  }
  else if(sample.textContent === calTotalBase[calTotalBase.length - 1]) {
    getCalPlus2 = cal[0];
    clickCal2(getCalPlus2);
  }

  else {
    sample.textContent = addBaseText;
  }
}) 

//演算子ボタン(-)ボタンクリック時
let minus = document.querySelector('.minus');
minus.addEventListener('click',event => {
  if(sample.textContent == numBaseText) {
    getCalMinus = cal[1];  
    clickCal(getCalMinus);
  }
  else if(sample.textContent == calBaseText) {
    getCalMinus2 = cal[1];
    clickCal2(getCalMinus2);
  }
  else {
    sample.textContent = numBaseText;
  }
}) 

//演算子ボタン(*)ボタンクリック時
let calcu = document.querySelector('.kakeru');
calcu.addEventListener('click',event => {
  if(sample.textContent == numBaseText) {
    getCalKakeru = cal[2];  
    clickCal(getCalKakeru);
  }
  else if(sample.textContent == calBaseText) {
    getCalKakeru2 = cal[2];
    clickCal2(getCalKakeru2);
  }
  else {
    sample.textContent = numBaseText;
  }
}) 

//演算子ボタン(÷)ボタンクリック時
let waru = document.querySelector('.waru');
waru.addEventListener('click',event => {

  if(sample.textContent == numBaseText) {
    getCalWaru = cal[3];  
    clickCal(getCalWaru);
  }
  else if(sample.textContent == calBaseText) {
    getCalWaru2 = cal[3];
    clickCal2(getCalWaru2);
  }
  else {
    sample.textContent = numBaseText;
  }
}) 

//計算結果(=)イコールボタンクリック時
let equal = document.querySelector('.equal');
equal.addEventListener('click',event => {
  if(sample.textContent == numBaseText) {
    sample.textContent = eval(numBaseText);
    calBaseText = sample.textContent
    console.log(eval(numBaseText)); //※コンソールだけでは値として保持されないため、変数に値を代入する
    console.log(typeof(numBaseText));
    //計算後の値を格納して、配列の最後の値を取得
    calTotalBase.push(calBaseText);
    let calTotal = calTotalBase[calTotalBase.length - 1];
    console.log(calTotalBase);
    console.log(calTotal);
  }
  else {
    sample.textContent = eval(addBaseText);
    // console.log(eval(addBaseText));
    calBaseText = sample.textContent
    console.log(eval(addBaseText)); //※コンソールだけでは値として保持されないため、変数に値を代入する
    console.log(typeof(addBaseText));
   //計算後の値を格納して、配列の最後の値を取得
    calTotalBase.push(calBaseText);
    let calTotal = calTotalBase[calTotalBase.length - 1];
    console.log(calTotalBase);
    console.log(calTotal);
  }
})

//リセットボタン用
let reset = document.querySelector('.reset');
reset.addEventListener('click',event => {
  numBaseText = total;
  addBaseText = total;
  sample.textContent = '0';
  numBaseText = sample.textContent;
  console.log(sample.textContent);
  console.log(typeof(sample.textContent));
})


