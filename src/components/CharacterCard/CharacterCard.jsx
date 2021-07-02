import { NavLink } from 'react-router-dom';

import ButtonDetail from '../UI/ButtonDetail/ButtonDetail';

import classes from './CharacterCard.module.scss';

const CharacterCard = ({ character }) => {
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
              <NavLink to={`/wiki/character/${character.id}`}>
                <ButtonDetail name="WHO IS IT...???" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  } else return null;
};
export default CharacterCard;
