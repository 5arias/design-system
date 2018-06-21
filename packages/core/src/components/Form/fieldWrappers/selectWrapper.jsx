import ChoiceList from '../../ChoiceList/ChoiceList';
import PropTypes from 'prop-types';
import React from 'react';

const SelectWrapper = ({ field, form, ...props }) => {
  return <ChoiceList {...field} {...props} />;
};

SelectWrapper.propTypes = {
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
};

export default SelectWrapper;
