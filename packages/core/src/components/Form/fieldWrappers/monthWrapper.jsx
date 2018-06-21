import MonthPicker from '../../MonthPicker/MonthPicker';
import PropTypes from 'prop-types';
import React from 'react';

const MonthWrapper = ({ field, form, ...props }) => {
  const handleCheckboxChange = e => {
    let newValue = field.value || [];
    if (e.target.checked) {
      newValue = newValue.concat([e.target.value]).sort();
    } else {
      newValue = newValue.filter(v => v !== e.target.value).sort();
    }

    return form.setFieldValue(field.name, newValue);
  };

  return <MonthPicker onChange={handleCheckboxChange} {...field} {...props} />;
};

MonthWrapper.propTypes = {
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
};

export default MonthWrapper;
