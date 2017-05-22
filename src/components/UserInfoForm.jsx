import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import FormTextInput from './FormInput';
import '../assets/styles/App.css';


const UserInfoForm = ({
  inputName,
  inputEmail,
  inputPassword,
  inputConfirmation,
  handleChange,
}) => (
  <Form horizontal>
    <FormTextInput
      label="Name"
      type="text"
      name="inputName"
      value={inputName.value}
      validation={inputName.validation}
      inputChange={handleChange}
    />
    <FormTextInput
      label="Email"
      type="text"
      name="inputEmail"
      value={inputEmail.value}
      validation={inputEmail.validation}
      inputChange={handleChange}
    />
    <FormTextInput
      label="Password"
      type="password"
      name="inputPassword"
      value={inputPassword.value}
      validation={inputPassword.validation}
      inputChange={handleChange}
    />
    <FormTextInput
      label="Confirm"
      type="password"
      name="inputConfirmation"
      value={inputConfirmation.value}
      validation={inputConfirmation.validation}
      inputChange={handleChange}
    />
  </Form>
);

UserInfoForm.propTypes = {
  inputName: PropTypes.shape({
    value: PropTypes.string,
    validation: PropTypes.string,
  }).isRequired,
  inputEmail: PropTypes.shape({
    value: PropTypes.string,
    validation: PropTypes.string,
  }).isRequired,
  inputPassword: PropTypes.shape({
    value: PropTypes.string,
    validation: PropTypes.string,
  }).isRequired,
  inputConfirmation: PropTypes.shape({
    value: PropTypes.string,
    validation: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default UserInfoForm;
