import { NavLink } from 'react-router-dom';
import FindInput from '../UI/FindInput/FindInput';

import WikiTitle from '../UI/WikiTitle/WikiTitle';

import classes from './WikiFind.module.scss';

const WikiFind = () => {
  return (
    <div className={classes.container}>
      <WikiTitle
        fastClicker="Ch"
        firsPart="ara"
        flicker="ct"
        secondPart="ers"
      />
      <FindInput
        name="Enter character name"
        placeholder="Enter character name"
      />
      {/* 
      <form className={classes.wikiFind}>
        <input type="text" placeholder="Enter character name" />
      </form> */}
    </div>
  );
};

export default WikiFind;

/* <ul className={classes.wikiList}></ul>
      <NavLink to={`/wiki/character`}>Персонажи</NavLink>
      <NavLink to="/wiki/location">Локации</NavLink>characters
      <NavLink to="/wiki/episode">Эпизоды</NavLink> */
