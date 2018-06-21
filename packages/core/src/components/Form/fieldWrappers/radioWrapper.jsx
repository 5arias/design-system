import ChoiceList from '../../ChoiceList/ChoiceList';
import PropTypes from 'prop-types';
import React from 'react';

const getInitialChecked = choices => {
  const checkedChoices = choices.filter(c => c.checked || c.defaultChecked);
  let checkedValue;
  if (checkedChoices.length === 1) {
    checkedValue = checkedChoices[0]['value'];
  } else if (checkedChoices.length === 0) {
    checkedValue = undefined;
  } else {
    checkedValue = console.error(
      'Radio field may only have 1 default choice selected'
    );
  }

  return checkedValue;
};

const setCheckedChoices = (choices, activeValue) => {
  return choices.map(choice => {
    return {
      ...choice,
      checked: choice.value === activeValue
    };
  });
};

const RadioWrapper = ({ field, form, ...props }) => {
  const controlledProps = {
    ...field,
    ...props,
    value: field.value ? field.value : getInitialChecked(props.choices),
    choices: field.value
      ? setCheckedChoices(props.choices, field.value)
      : props.choices
  };

  return <ChoiceList {...controlledProps} />;
};

RadioWrapper.propTypes = {
  choices: PropTypes.instanceOf(Array),
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
};

export default RadioWrapper;
