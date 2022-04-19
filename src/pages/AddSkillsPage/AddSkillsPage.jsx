import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Container from '../../components/Container';
import { sendFetchWithToken } from '../../helpers/helpers';
import css from './AddSkillsPage.module.css';
import Button from '../../components/Button/Button';
import Loading from '../../components/Loading/Loading';
import SuccessMessage from '../../components/SuccessMessage/SuccessMessage';

const initErrors = {
  title: '',
  description: '',
};

function AddSkillsPage() {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorObj, setErrorObj] = useState(initErrors);
  const [isLoading, setIsLoading] = useState(false);
  const [isAddedSuccess, setIsAddedSuccess] = useState(false);

  useEffect(() => {
    const isErrorsEmpty = Object.values(errorObj).every((el) => el === '');
    if (!isErrorsEmpty) {
      setIsError(true);
    }
  }, [title, description, errorObj]);

  async function submitHandler(e) {
    setIsError(false);
    setErrorObj(initErrors);
    e.preventDefault();

    if (title.trim() === '') {
      setErrorObj((prevState) => ({
        ...prevState,
        name: 'Please enter title',
      }));
    }
    if (description.trim() === '') {
      setErrorObj((prevState) => ({
        ...prevState,
        userEmail: 'Please enter description',
      }));
    }

    const newSkillObj = {
      title: title,
      description: description,
    };
    setIsLoading(true);
    const sendResult = await sendFetchWithToken('content/skills', newSkillObj);
    if (sendResult.msg === 'Added new skill to account') {
      setIsAddedSuccess(true);
      setTimeout(() => {
        history.push('/home');
      }, 1000);
    }
    if (sendResult.err) {
      setIsError(true);
    }
    setIsLoading(false);
  }

  return (
    <Container>
      {isLoading && <Loading />}
      <h2 className={css.title}>Add new skills</h2>
      <form onSubmit={submitHandler} className={css.form}>
        {isError && <h3 className={css.err}>Please check the form</h3>}
        {isAddedSuccess && <SuccessMessage message={'Skill added'} />}{' '}
        <label className={css.label}>Skill title</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className={`${css.input} ${errorObj.title ? css.errBg : ''}`}
          type='text'
          placeholder='title'
        />
        {errorObj.name && <p>{errorObj.name}</p>}
        <label className={css.label}>Description</label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className={`${css.input} ${errorObj.description ? css.errBg : ''}`}
          placeholder='description'
        />
        {errorObj.description && <p>{errorObj.description}</p>}
        <Button>Add new skill</Button>
      </form>
    </Container>
  );
}

export default AddSkillsPage;
