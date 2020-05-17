# react-study

## React入門


1. `npm install -g create-react-app`: Facebook製のReactアプリのスケルトン
1. `create-react-app test` : test プロジェクトの作成
1. `cd test` : test ディレクトリに移動
1. `npm start` : ブラウザ内でアプリが確認できる（http://localhost:3000）
1. その後は `/test/index.js` などを保存すると自動でブラウザが更新される

## 変数宣言

ブレス``{}``を使って変数を表示することができる。


（varではなく）const, letは ECMA Script2015 から使える変数宣言(通常ブラウザでは動作しないがbabelが翻訳してくれている)。

const は代入不可能な変数、letは は代入可能な変数。コンパイルは通るがブラウザ内でエラーとして表示される。

## JSXのコメントアウト
`    {/*JSXのコメントはブレスで囲ってから書く*/}


## HTMLとJSXの違い(予約名と例外)

``<div className="ImageBox">`` というようにHTML/CSSのクラスは ``className`` と書く（JavaScriptのclassと被るため）と、生成されたHTMLでは``class``に置き換えられる。

``label`` 要素の ``for`` 属性は ``htmlFor`` と書く（ ``for`` に変換される）

## 独自属性

``<div hoge="">`` といった属性を付けたいときは ``<div data-hoge="">``と書く。そうしないと無視されて生成されたHTML上では消滅する。
JSXの変数名は基本はすべて ``lowerCamelCase`` 形式で書くが、 ``aria-*``, ``data-*`` のみ自由書式。

## HTMLのエスケープ処理

通常は文字列内のHTML要素はエスケープされる（＝クロスサイトスクリプティングなどを防ぐために、ltなどに変換される）。
以下のように書くことで、エスケープをせずにHTMLとして扱うことができる。

``someHtml = {__html: '<h2>これはH2要素</h2>' };``

``dangerouslySetInnerHTML={someHtml} ``

# コンポーネント

## ファンクショナル・コンポーネント

関数を書くだけでコンポーネントになる、これを ``Functional Component`` もしくは ``Stateless Component`` と呼ぶ。

## クラス・コンポーネント

クラス定義を書く
`  class Morning extends React.Component {
`   render() {
`     return (
`       <section><h1>おはようございます</h1><p>Morning Component</p></section>
`     )
`   }
` }

## コンポーネントへの変数渡し

function Hello(props){
  return(
    <section>
      <h1>こんにちわ {props.name} さん</h1>
      <div>Helloコンポーネント</div>
    </section>

  );
}

render関数では ``   <Hello name="白井暁彦" />, `` という感じで受け渡す 。

## Propsによるデータチェック

コンポーネントに対するデータの受け渡しを ``Props`` と呼ぶ。
ReactJS標準で型チェックの仕組みを持っている（[詳細](https://reactjs.org/docs/typechecking-with-proptypes.html)）。

v15.5以降は別ライブラリになっているのでインポートする。

`` import PropTypes from 'prop-types';``

```
Hello.propTypes = {
  name: PropTypes.string
}
```

型チェック（この場合は`string`）を無視してコンポーネントに値を渡しても、（ビルド時にエラーは出ないが）検証時に `string` ではないことから、コンソールに `warning` が出る。

値を必ず要求する場合、

```
Hello.propTypes = {
  name: PropTypes.string.isRequired
}
```

省略時のデフォルト値を設定する場合（ライブラリの`import`は不要）。

```
Hello.defaultProps = {
  name : 'デフォルトの名前'
}
```

