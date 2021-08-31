import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Count from '../Count';
import { shallow, mount, render } from 'enzyme';

it('innerHTMLに含まれているか確認', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  //<App />内のinnerHTMLに「jest sample」が含まれているかどうかをテストする
  //”toContain”は含まれているかどうかをチェックする関数
  expect(div.innerHTML).toContain('jest sample');
  ReactDOM.unmountComponentAtNode(div);
});
