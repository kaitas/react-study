import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function Hello(){
  return(
    <div>
      <h1>こんにちわ＝^_^＝</h1>
      <p>Helloコンポーネントから書いています</p>
      <p>ReactJSから書くJSXには一つの要素しか含むことができない。</p>
    </div>

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
