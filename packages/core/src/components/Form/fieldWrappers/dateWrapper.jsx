import DateField from '../../DateField/DateField';
import PropTypes from 'prop-types';
import React from 'react';

const DateWrapper = ({ field, form, ...props }) => {
  return <DateField {...field} {...props} />;
};

DateWrapper.propTypes = {
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
};

export default DateWrapper;
