import ChoiceList from '../../ChoiceList/ChoiceList';
import PropTypes from 'prop-types';
import React from 'react';

const CheckboxWrapper = ({ field, form, ...props }) => {
  const handleCheckboxChange = e => {
    let newValue = field.value || [];
    if (e.target.checked) {
      newValue = newValue.concat([e.target.value]).sort();
    } else {
      newValue = newValue.filter(v => v !== e.target.value).sort();
    }

    return form.setFieldValue(field.name, newValue);
  };

  return <ChoiceList onChange={handleCheckboxChange} {...field} {...props} />;
};

CheckboxWrapper.propTypes = {
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
};

export default CheckboxWrapper;
