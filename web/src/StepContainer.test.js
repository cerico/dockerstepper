import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Step from './Step';
import StepperComponent from './StepperComponent';
import StepContainer from './StepContainer';

configure({ adapter: new Adapter() });

describe('Checking the StepContainer Suite', function() {
  it('should be selectable by class "outer-container"', function() {
    expect(shallow(<StepContainer />).is('.outer-container')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<StepContainer />).find('.outer-container').length).toBe(1);
  });

  it('step is defaulting to -1 on mount', function() {
    expect(mount(<StepContainer />).state().step).toBe(-1);
  });

  it('step increments up 1 on click', function() {
    const container = mount(<StepContainer />);
    const stepperComponent = container.find('StepperComponent');
    const firstStepButton = stepperComponent.find('Step').at(0);
    firstStepButton.simulate('click');
    expect(container.state().step).toBe(0);
  });

});
