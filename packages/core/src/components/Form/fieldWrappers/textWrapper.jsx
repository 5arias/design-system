import PropTypes from 'prop-types';
import React from 'react';
import TextField from '../../TextField/TextField';

const TextWrapper = ({ field, form, ...props }) => {
  const controlledProps = Object.assign(field, props, {
    value: field.value ? field.value : ''
  });
  return <TextField {...controlledProps} />;
};

TextWrapper.propTypes = {
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
};

export default TextWrapper;
