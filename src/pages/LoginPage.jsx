import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button/Button';
import { sendFetch } from '../helpers/helpers';
import Container from '../components/Container';
import css from './LoginPage.module.css';
import AuthContext from '../store/authContext';


const initErrors = {
    userEmail: '',
    password: '',
  };
  
  function LoginPage() {
    const history = useHistory();
    const [userEmail, setUserEmail] = useState('ttt@ttt.lt');
    const [password, setPassword] = useState('ttt');
    const [isError, setIsError] = useState(false);
    const [errorObj, setErrorObj] = useState(initErrors);
    const authCtx = useContext(AuthContext);

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
  
      const newLoginObj = {
        email: userEmail,
        password: password,
      };
      const sendResult = await sendFetch('auth/login', newLoginObj);
      if (sendResult.msg === 'Successfully logged in') {
        alert (sendResult.msg);
        console.log(sendResult);
        authCtx.login(sendResult.token);
        history.push('/home');
      }
      if (sendResult.err) {
        setIsError(true);
      }
    }
  
    return (
      <Container>
        <h2 className={css.title}>Login</h2>
        <form onSubmit={submitHandler} className={css.form}>
          {isError && <h3 className={css.err}>Please check username and password</h3>}
          <label className={css.label}>Insert email</label>
          <input
            onChange={(e) => setUserEmail(e.target.value)}
            value={userEmail}
            className={`${css.input} ${errorObj.userEmail ? css.errBg : ''}`}
            type='email'
            placeholder='Please enter your email'
          />
          {errorObj.userEmail && <p>{errorObj.userEmail}</p>}
          <label className={css.label}>Insert password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className={`${css.input} ${errorObj.password ? css.errBg : ''}`}
            type='password'
            placeholder='Please enter your password'
          />
          {errorObj.password && <p>{errorObj.password}</p>}
          {errorObj.userEmail && <p>{errorObj.userEmail}</p>}
          <Button>Login</Button>
        </form>
      </Container>
    );
  }
  
  export default LoginPage;