import React, { Component } from 'react';
import Count from './Count';
import Name from './Name';
import Message from './Message';

class App extends Component {
  render() {
    return (
      <div>
        <h1>jest sample</h1>
        // カウントUP/表示するコンポネント
        <Count />
        // 名前を入力/表示するコンポネント
        <Name />
        // メッセージを表示するコンポネント
        <Message message='長崎へ' />
      </div>
    );
  }
}

export default App;
