import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button/Button';
import { sendFetch } from '../helpers/helpers';
import Container from '../components/Container';
import css from './Register.module.css'


const initErrors = {
    userEmail: '',
    password: '',
  };
  
  function RegisterPage() {
    const history = useHistory();
    const [userEmail, setUserEmail] = useState('ttt@ttt.lt');
    const [password, setPassword] = useState('ttt');
    const [isError, setIsError] = useState(false);
    const [errorObj, setErrorObj] = useState(initErrors);
  
    useEffect(() => {
      const isErrorsEmpty = Object.values(errorObj).every((el) => el === '');
      if (!isErrorsEmpty) {
        setIsError(true);
      }
    }, [userEmail, password, errorObj]);
  
    async function submitHandler(e) {
      setIsError(false);
      setErrorObj(initErrors);
      e.preventDefault();
  
      if (userEmail.trim() === '') {
        setErrorObj((prevState) => ({ ...prevState, name: 'Please insert email' }));
      }
      if (password.trim() === '') {
        setErrorObj((prevState) => ({ ...prevState, dob: 'Please insert password' }));
      }
  
      const newRegisterObj = {
        email: userEmail,
        password: password,
      };
      const sendResult = await sendFetch('auth/register', newRegisterObj);
      if (sendResult.changes === 1) {
        history.push('/login');
      }
      if (sendResult.err) {
        setIsError(true);
      }
    }
  
    return (
      <Container>
        <h2>Register</h2>
        <form onSubmit={submitHandler} className={css.form}>
          {isError && <h3 className={css.err}>Please check username and password</h3>}
          <input
            onChange={(e) => setUserEmail(e.target.value)}
            value={userEmail}
            className={`${css.input} ${errorObj.userEmail ? css.errBg : ''}`}
            type='email'
            placeholder='Please enter your email'
          />
          {errorObj.userEmail && <p>{errorObj.userEmail}</p>}
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className={`${css.input} ${errorObj.password ? css.errBg : ''}`}
            type='password'
            placeholder='Please enter your password'
          />
          {errorObj.password && <p>{errorObj.password}</p>}
          {errorObj.userEmail && <p>{errorObj.userEmail}</p>}
          <Button>Register</Button>
        </form>
      </Container>
    );
  }
  
  
  export default RegisterPage;