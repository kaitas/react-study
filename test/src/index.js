import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function Hello(props){
  return(
    <section>
      <h1>こんにちわ {props.name} さん</h1>
      <div>Helloコンポーネント</div>
    </section>

  );
}

//Class component
class Morning extends React.Component {
  render() {
    return (
      <section><h1>おはようございます</h1><p>Morning Component</p></section>
    )
  }
}
ReactDOM.render(
  <Hello name="白井暁彦" />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
