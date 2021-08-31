import React from 'react';
import Name from '../Name';
import { shallow } from 'enzyme';

test('setStateで<Form>のnameが変更されるかを確かめる', () => {
  const wrapper = shallow(<Name />);
  /** <Form />のstate.nameが’’ではない。(初期stateは{name: ‘hoge’}) */
  expect(wrapper.state().name).not.toEqual('')
  /** setStateでnameを「fuga」に更新 */
  wrapper.setState({ name: 'fuga'});
  /** state.nameが「fuga」ならOK */
  expect(wrapper.state().name).toEqual('fuga')
});
