import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import '../assets/styles/App.css';

class UserInfoForm extends React.Component {
  // getInitialState() {
  //   return {
  //     value: '',
  //   };
  // }

  // getValidationState() {
  //   const length = this.state.value.length;
  //   if (length > 10) return 'success';
  //   else if (length > 5) return 'warning';
  //   else if (length > 0) return 'error';
  //   return true;
  // }

  // handleChange () {

  // }
  render() {
    return (
      <form>
        <FormGroup
          controlId="userInfo"
        >
          <ControlLabel>Name</ControlLabel>
          <FormControl
            type="text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup
          controlId="userInfo"
        >
          <ControlLabel>Email</ControlLabel>
          <FormControl
            type="text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup
          controlId="userInfo"
        >
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup
          controlId="userInfo"
        >
          <ControlLabel>Confirm</ControlLabel>
          <FormControl
            type="password"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
    );
  }
}

export default UserInfoForm;
