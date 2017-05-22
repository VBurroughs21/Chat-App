import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import '../assets/styles/App.css';

const FormTextInput = ({ label, type, name, value, validation, inputChange }) => (
  <FormGroup
    controlId={name}
    validationState={validation}
  >
    <ControlLabel>{label}</ControlLabel>
    <FormControl
      type={type}
      name={name}
      value={value}
      onChange={inputChange}
    />
    <FormControl.Feedback />
  </FormGroup>
);

FormTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
};

FormTextInput.defaultProps = {
  validation: '',
};

export default FormTextInput;
