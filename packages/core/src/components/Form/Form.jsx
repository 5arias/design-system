import FormPage from './FormPage';
import FormWizard from './FormWizard';
import PropTypes from 'prop-types';
import React from 'react';

export const Form = ({ schema }) => {
  return (
    <div className="ds-c-form">
      <h1>{schema.formTitle}</h1>
      <FormWizard schema={schema}>
        {schema.pages.map(page => (
          <FormWizard.Page key={page.id}>
            <FormPage schema={page} />
          </FormWizard.Page>
        ))}
      </FormWizard>
    </div>
  );
};
Form.defaultProps = {
  schema: {
    formTitle: 'Form',
    initialValues: {},
    onSubmit: () => {},
    pages: []
  }
};
Form.propTypes = {
  schema: PropTypes.shape({
    formTitle: PropTypes.string,
    initialValues: PropTypes.object,
    onSubmit: PropTypes.func,
    pages: PropTypes.arrayOf(PropTypes.object)
  }).isRequired
};

export default Form;
