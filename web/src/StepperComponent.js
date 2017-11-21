import React from 'react';
import Step from './Step';
import './StepperComponent.scss';

/*
   StepperComponent

   This is a stateless functional component. State must be managed by the container.

   // ERRORS

   - Error will be thrown if the number of steps is not more than 1 or greater than 5
   - Error will be thrown if the user tries to increment the step more then 1

*/

const StepperComponent = (props) => {
  const { steps, currentStep, onClick, minSteps = 2, maxSteps = 5, maxStepIncrement = 1 } = props;

  // Error Handling for max steps
  if (steps.length > maxSteps || steps.length < minSteps) {
    errorHandle(`The number of steps passed to the Stepper
                      Component must be greater than ${minSteps}
                      but no more than ${maxSteps} `);
  }

  return (
    <div className="stepper-container">
    {
      <ul>
        {
          steps.map((step, index) => (
            <Step
              key={index}
              name={step.toString()}
              currentStep={currentStep}
              onClick={event => incrementChecked(index, currentStep, maxStepIncrement) ?
                              onClick(index) :
                              errorHandle(`Step increment incorrect in Stepper Component,
                                          should be no more than ${maxStepIncrement}`)}
              isActive={index<=currentStep}
            />
          ))
        }
      </ul>
    }
    </div>
  )
}

// Error thrown when requried parameters are not met
const errorHandle = (msg) => {
  throw new Error(msg);
}

// Ensures that steps do not increase by more than defined increment (default is 1)
const incrementChecked = (index, currentStep, maxStepIncrement) => {
  if (index > currentStep + maxStepIncrement) return false;
  return true;
}

export default StepperComponent;
