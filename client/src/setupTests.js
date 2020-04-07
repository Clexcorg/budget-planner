import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-canvas-mock'

const observe = jest.fn();
window.IntersectionObserver = jest.fn(function() {
  this.observe = observe;
});

Enzyme.configure({
  adapter: new Adapter()
})