import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import PropTypes from 'prop-types';

function Hello(props){
  return(
    <section>
      <h1>こんにちわ {props.name} さん</h1>
      <div>Helloコンポーネント</div>
    </section>

  );
}
Hello.propTypes = {
  name: PropTypes.string
}
Hello.defaultProps = {
  name : 'デフォルトの名前'
}

function Message(){
  return(
    <section>
      <Hello />
      <Hello name={10} />
      <Hello name={true} />
      <div>Messageコンポーネント</div>
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
  <Message />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
