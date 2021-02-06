import React from 'react';
import Counter from './Counter';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new EnzymeAdapter()});

const setup = () => shallow(<Counter />);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('counter starts at 0', () => {
    const wrapper = setup();
    const count = findByTestAttr(wrapper, "count").text();
    expect(count).toBe("0");
})