import FormField from './FormField';
import PropTypes from 'prop-types';
import React from 'react';

export const FormPage = ({ schema }) => {
  const { title, description, fields } = schema;
  return (
    <React.Fragment>
      {title && <h2>{title}</h2>}
      {description && <div>{description}</div>}
      {fields &&
        fields.map(field => (
          <FormField schema={field} key={`${field.type}_${field.label}`} />
        ))}
    </React.Fragment>
  );
};

FormPage.propTypes = {
  schema: PropTypes.instanceOf(Object).isRequired
};

export default FormPage;
