import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App.jsx';
import Right from '../client/src/components/Modals/Checkout/Right.jsx';
import AddToBag from '../client/src/components/AddToBag.jsx'
import SizeCell from '../client/src/components/TableCell.jsx';
import '../setupTests.js';

it("should update the total amount with different quantity", () => {
  const wrapper = shallow(<Right quantity={20}/>).dive();
  expect(wrapper.find('.totalAmount').text()).toEqual('$2800.00')
});

it("should render app", ()=> {
  shallow(<App/>)
})