import { render, screen } from '@testing-library/react';
import App from '../App';

test('includes the CatComponent component', () => {
  render(<App />);
  expect(screen.getByTestId('cat-component')).toBeInTheDocument();
});

test('includes the GraceHopperQuoteComponent component', () => {
  render(<App />);
  expect(screen.getByTestId('quote-component')).toBeInTheDocument();
});

test('includes the MouseComponent component', () => {
  render(<App />);
  expect(screen.getByTestId('mouse-component')).toBeInTheDocument();
})

test('renders each component once', () => {
  const { container } = render(<App />);
  const { childNodes } = container.firstChild;
  expect(childNodes).toHaveLength(3);
});

// describe('App', () => {
// 	let wrapper;

// 	before(() => {
// 		wrapper = shallow(React.createElement(App));
// 	});

// 	it('should include the cat component', () => {
// 		expect(wrapper.text()).to.include('<CatComponent />');
// 	});

// 	it('should include the grace-hopper-quote component', () => {
// 		expect(wrapper.text()).to.include('<GraceHopperQuoteComponent />');
// 	});

// 	it('should include the mouse component', () => {
// 		expect(wrapper.text()).to.include('<MouseComponent />');
// 	});

// 	it('should render each component once', () => {
// 		expect(wrapper.children()).to.have.length(3);
// 	});

// 	it('should render the components in the proper order', () => {
// 		const [first, second, third] = wrapper.children();
// 		expect(first.type.name === 'CatComponent').to.be.true;
// 		expect(second.type.name === 'GraceHopperQuoteComponent').to.be.true;
// 		expect(third.type.name === 'MouseComponent').to.be.true;
// 	});
// });