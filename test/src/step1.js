import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const, letは ECMA Script2015 から使える変数宣言(通常ブラウザでは動作しないがbabelが翻訳してくれている)
// const は代入不可能な変数
// letは は代入可能な変数
const name = {
  firstName: 'Akihiko',
  lastName: 'SHIRAI'
}
let count = 0;
// const count = 0; // もちろん const では以下の for文は動かない

for (let i = 0 ; i < 10; i++) {
  count ++;
}

const someHtml = {__html: '<h2>これはH2要素</h2>' };

function Hello(){
  return(
    <section>

    <div>
      <h1>こんにちわ { name.firstName + " "+  name.lastName } です ＝^_^＝ { count + 1}  </h1>
      <p>ReactJSから書くJSXには一つの要素しか含むことができない。</p>
      <p>const, letはECMA Script2015から使える変数宣言</p>
      <br />
      <p id="hello">Helloコンポーネントから書いています</p>
    </div>
  <span dangerouslySetInnerHTML={someHtml} />
    <div style={{'margin-top': '100px', 'padding' : '50px', 'border' : 'dotted' }}>
      <img src="https://goo.gl/0kZocc" alt="Google" />
    </div>

    {/*JSXのコメントはブレスで囲ってから書く
      <div htmlFor="ImageBox">
         <img src="https://goo.gl/0kZocc" alt="Google" />
      </div>
    */}
  
    </section>

  );
}

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
