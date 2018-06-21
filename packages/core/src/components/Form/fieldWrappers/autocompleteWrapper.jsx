import Autocomplete from '../../Autocomplete/Autocomplete';
import PropTypes from 'prop-types';
import React from 'react';
import TextField from '../../TextField/TextField';

const AutocompleteWrapper = ({ field, form, ...props }) => {
  return (
    <Autocomplete>
      <TextField {...props} />
    </Autocomplete>
  );
};

AutocompleteWrapper.propTypes = {
  field: PropTypes.instanceOf(Object),
  form: PropTypes.instanceOf(Object)
};

export default AutocompleteWrapper;
