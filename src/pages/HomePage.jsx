import { useEffect, useState } from 'react';
import CardList from '../components/CardList/CardList';
import Container from '../components/Container';
import { getFetch } from '../helpers/helpers';
import css from './HomePage.module.css';

function HomePage() {
  const [skillsArr, setSkillsArr] = useState([]);

  useEffect(() => {
    getSkills();
  }, []);

  async function getSkills() {
    const skillsFromDb = await getFetch('content/skills');
    setSkillsArr(skillsFromDb);
  }

  return (
    <Container>
      <div className={css.flex}>
      <h2 className={css.title}>Skills</h2>
      </div>
      <CardList items={skillsArr} />
    </Container>
  );
}

export default HomePage;
