import { useEffect, useState } from 'react';
import CardList from '../components/CardList/CardList';
import Container from '../components/Container';
import { getFetch } from '../helpers/helpers';
import css from './HomePage.module.css';
import Loading from '../components/Loading/Loading';

function HomePage() {
  const [skillsArr, setSkillsArr] = useState([]);
  const [isLoading, setIsLoading] = useState (false);

  useEffect(() => {
    getSkills();
  }, []);

  async function getSkills() {
    setIsLoading (true);
    const skillsFromDb = await getFetch('content/skills');
    setSkillsArr(skillsFromDb);
    setIsLoading(false);
  }

  return (
    <Container>
      {isLoading && <Loading />}
      <div className={css.flex}>
      <h2 className={css.title}>Skills</h2>
      </div>
      <CardList items={skillsArr} />
    </Container>
  );
}

export default HomePage;
