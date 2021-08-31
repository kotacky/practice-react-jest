
import React from 'react';
import Count from "../Count";
import { shallow } from 'enzyme';

test('setStateで<Form>のnameが変更されるかを確かめる', () => {
  /** Countコンポーネントをshallowレンダリング */
  const wrapper = shallow(<Count />);
  /** コンポーネントの数を取得し、0であればOK */
  expect(wrapper.state().count).toBe(0);
  /** setStateでcountを1に更新 */
  wrapper.setState({ count: 1});
  /** state.countが1ならOK */
  expect(wrapper.state().count).toBe(1)
});
