import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withActiveItem from './with-active-item.jsx';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

it(`Should change activeItem when call clickHandler`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  wrapper.props().clickHandler(`click-item`);
  expect(wrapper.state().activeItem).toEqual(`click-item`);
});
