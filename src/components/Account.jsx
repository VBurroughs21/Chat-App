import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './shared/Header';
import UserInfoForm from './shared/UserInfoForm';
import { updateUser, readUser } from '../actions/userActions';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: {
        value: '',
        validation: null,
      },
      inputEmail: {
        value: '',
        validation: null,
      },
      inputPassword: {
        value: '',
        validation: null,
      },
      inputConfirmation: {
        value: '',
        validation: null,
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.formValidations = this.formValidations.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.readUser();
  }

  handleChange(event) {
    const target = event.target;
    const inputValue = target.value;
    const name = target.name;
    const inputvalidation = this.formValidations(name, inputValue);

    this.setState({
      [name]: {
        value: inputValue,
        validation: inputvalidation,
      },
    });
  }

  formValidations(name, value) {
    // Validate length
    if (value.length <= 2) {
      return 'error';
    }

    // Validate email format
    if (name === 'inputEmail') {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line no-useless-escape
      return re.test(value) ? 'success' : 'error';
    }

    // Check if passwords match
    if (name === 'inputConfirmation' && value !== this.state.inputPassword.value) {
      return 'error';
    }

    return 'success';
  }

  handleSubmit(event) {
    this.props.updateUser({
      name: this.state.inputName.value,
      email: this.state.inputEmail.value,
      password: this.state.inputPassword.value,
      password_confirmation: this.state.inputConfirmation.value,
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Header
          right="Save"
          title="Account"
          rightClick={this.handleSubmit}
        />
        <UserInfoForm
          inputName={this.state.inputName}
          inputEmail={this.state.inputEmail}
          inputPassword={this.state.inputPassword}
          inputConfirmation={this.state.inputConfirmation}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

Account.propTypes = {
  updateUser: PropTypes.func.isRequired,
  readUser: PropTypes.func.isRequired,
  // user: PropTypes.shape({
  //   id: null,
  //   name: null,
  //   email: PropTypes.string,
  //   token: PropTypes.string,
  // }).isRequired,
};

export default connect((state) => state, {
  readUser,
  updateUser,
})(Account);
