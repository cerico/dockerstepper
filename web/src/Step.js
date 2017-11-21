import React from 'react';
import './StepperComponent.scss';

const Step = (props) => {
const { name, currentStep, onClick, isActive } = props;
  return(
    <a
      onClick={event => onClick()}
    >
      <li
        className={`step${isActive ? '-active' : ''}`}
      >{name}</li>
    </a>
  )
}

export default Step;
