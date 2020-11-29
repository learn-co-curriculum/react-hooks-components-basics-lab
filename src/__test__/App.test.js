import { expect } from 'chai';
import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

import App from '../App'

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
	let wrapper;

	beforeAll(() => {
		wrapper = shallow(React.createElement(App));
	});

	it('should include the cat component', () => {
		expect(wrapper.text()).to.include('<CatComponent />');
	});

	it('should include the grace-hopper-quote component', () => {
		expect(wrapper.text()).to.include('<GraceHopperQuoteComponent />');
	});

	it('should include the mouse component', () => {
		expect(wrapper.text()).to.include('<MouseComponent />');
	});

	it('should render each component once', () => {
		expect(wrapper.children()).to.have.length(3);
	});

	it('should render the components in the proper order', () => {
		const [first, second, third] = wrapper.children();
		expect(first.type.name === 'CatComponent').to.be.true;
		expect(second.type.name === 'GraceHopperQuoteComponent').to.be.true;
		expect(third.type.name === 'MouseComponent').to.be.true;
	});
});