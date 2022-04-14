import { Link } from 'react-router-dom';

function NotLoggedIn() {
  return (
    <>
      <h2>You are not logged in</h2>
      <p>Please login to see the content</p>
      <Link to='/login'>
        <button>Login</button>
      </Link>
    </>
  );
}

export default NotLoggedIn;
