import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from './shared/Header';
import UserInfoForm from './shared/UserInfoForm';
import { loginUser } from '../actions/userActions';

class Login extends React.Component {
  static formValidations(name, value) {
    // Validate length
    if (value.length <= 2) {
      return 'error';
    }

    // Validate email format
    if (name === 'inputEmail') {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line no-useless-escape
      return re.test(value) ? 'success' : 'error';
    }

    return 'success';
  }

  constructor(props) {
    super(props);
    this.state = {
      inputEmail: {
        value: '',
        validation: null,
      },
      inputPassword: {
        value: '',
        validation: null,
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const inputValue = target.value;
    const name = target.name;
    const inputvalidation = Login.formValidations(name, inputValue);

    this.setState({
      [name]: {
        value: inputValue,
        validation: inputvalidation,
      },
    });
  }

  handleSubmit(event) {
    this.props.loginUser({
      email: this.state.inputEmail.value,
      password: this.state.inputPassword.value,
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        {this.props.user.id ?
          <Redirect to={{
            pathname: '/register',
            state: { from: this.props.location },
          }}
          />
        :
          <div>
            <Header
              right="Login"
              left="Register"
              title="OraChat"
              rightClick={this.handleSubmit}
              leftClick="/register"
            />
            <UserInfoForm
              inputEmail={this.state.inputEmail}
              inputPassword={this.state.inputPassword}
              handleChange={this.handleChange}
            />
          </div>
        }
        
      </div>
    );
  }
}

Login.propTypes = {
  user: PropTypes.shape({
    id: null,
    email: PropTypes.string,
    token: PropTypes.string,
  }).isRequired,
  location: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  loginUser: PropTypes.func.isRequired,
};

export default connect((state) => state, {
  loginUser,
})(Login);
