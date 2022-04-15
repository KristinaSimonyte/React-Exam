import React from 'react';
import PropTypes from 'prop-types';
import Container from '../UI/Container';
import ErrorContainer from '../UI/ErrorContainer';
import css from './LoginRegister.module.css';

function LoginRegister(props) {
  LoginRegister.propTypes = {
    email: PropTypes.node.isRequired,
    password: PropTypes.node.isRequired,
    errorMessage: PropTypes.node.isRequired,
    formTitle: PropTypes.node.isRequired,
  };

  const { email, password, errorMessage, formTitle } = props;

  return (
    <Container>
      <h1 className={css.formTitle} >{formTitle}</h1>
      <form onSubmit={formHandler}>
        <label>Email</label>
        <input className={css.email} type='email' placeholder='Email' required />
        <br />
        <label>Password</label>
        <input type='password' placeholder='Password' required />
        <br />
      </form>
    </Container>
  );
}

export default LoginRegister;