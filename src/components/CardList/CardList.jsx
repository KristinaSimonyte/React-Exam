import Card from '../Card/Card';
import Grid from '../Grid/Grid';

function CardList(props) {
  return (
    <Grid>
      {props.items?.map((skill) => (
        <Card
          key={skill.id}
          title={skill.title}
          description={skill.description}
        />
      ))}
    </Grid>
  );
}

export default CardList;
