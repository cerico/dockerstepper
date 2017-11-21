import React, { Component } from 'react';
import StepperComponent from './StepperComponent';

class StepContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      steps: [
        'Design',
        'Build',
        'Ship',
      ],
      step: -1,
      hasError: false,
    }
    this.handleStepperClick = this.handleStepperClick.bind(this);
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { steps, step } = this.state;
    const { step: nextStep, steps: nextSteps } = nextState;
    return (nextStep !== step) || (nextSteps.length !== steps);
    return true;
  }

  handleStepperClick(step) {
    this.setState( { step } );
  }

  render() {
    const { steps, step, hasError } = this.state;
    if (hasError) {
      // Custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return(
      <div className="outer-container">
        <StepperComponent
          steps={steps}
          currentStep={step}
          onClick={step => {this.handleStepperClick(step)}}
        />
        <div>
          <h2>{`The current step is...... `}</h2>
          <h2>{`${(step<0) ? '--' : steps[step]}`}</h2>
        </div>
      </div>
    )
  }
}

export default StepContainer;
