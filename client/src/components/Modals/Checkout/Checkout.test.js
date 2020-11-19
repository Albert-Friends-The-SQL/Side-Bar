import React from 'react';
import { shallow } from 'enzyme';
import Right from './Right.jsx';
import AddToBag from '../../AddToBag.jsx';

it("should update the total amount when clicking the add to bag button", () => {
  const wrapper = shallow(Right);
  const price = wrapper.find("div.totalAmount");
  const totalSum = price.text();

  const wrapper2 = shallow(AddToBag);
  const button = wrapper2.find("button.addToBag");

  button.simulate('click');

  expect(totalSum).toBe("140");

});