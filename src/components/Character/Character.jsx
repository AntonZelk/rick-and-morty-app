import ButtonDetail from '../UI/ButtonDetail/ButtonDetail';
import classes from './Character.module.scss';

const Character = ({ character }) => {
  if (character) {
    const { name } = character;
    return (
      <div className={classes.card}>
        <div className={classes.content}>
          <div
            className={classes.front}
            style={{
              background: '#000',
            }}
          >
            <div className={classes.border}>
              <h3 className={classes.title}>{name}</h3>
            </div>
          </div>
          <div
            className={classes.back}
            style={{
              backgroundImage: `url(/img/characterSpace.jpg)`,
            }}
          >
            <div className={classes.body}>
              <ButtonDetail name="WHO IS IT...???" />
            </div>
          </div>
        </div>
      </div>
    );
  } else return null;
};
export default Character;
