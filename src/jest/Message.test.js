import React from 'react';
import Message from "../Message";
import { shallow } from 'enzyme';

test('受け取ったpropsの値を表示できているか確認', () => {
  /*'北海道へ'という値をtextに渡して、Messageコンポーネントをshallowレンダリング*/
  const wrapper = shallow(<Message message={'北海道へ'} />);
  /** レンダリングされたテキストが'ようこそ! 北海道へ'であればOK */
  expect(wrapper.text()).toBe('ようこそ! 北海道へ');
  /** props.messageの値を'World'に変更 */
  wrapper.setProps({ message: 'World' });
  /** レンダリングされたテキストが'ようこそ! World'であればOK */
  expect(wrapper.text()).toBe('ようこそ! World');
});
