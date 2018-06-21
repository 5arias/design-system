import {
  AutocompleteWrapper,
  CheckboxWrapper,
  DateWrapper,
  MonthWrapper,
  RadioWrapper,
  SelectWrapper,
  TextWrapper
} from './fieldWrappers';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';

const FormField = ({ schema }) => {
  const { type } = schema;

  const fields = Object.freeze({
    autocomplete: AutocompleteWrapper,
    checkbox: CheckboxWrapper,
    date: DateWrapper,
    month: MonthWrapper,
    radio: RadioWrapper,
    select: SelectWrapper,
    text: TextWrapper
  });

  return <Field {...schema} component={fields[type]} />;
};

FormField.propTypes = {
  schema: PropTypes.instanceOf(Object).isRequired
};

export default FormField;
