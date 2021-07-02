import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import {
  fetchItems,
  setCurrentItem,
  setFilteredNames,
} from '../../actions/wikiAction';

import Character from '../CharacterCard/CharacterCard';
import ButtonDetail from '../UI/ButtonDetail/ButtonDetail';
import FindInput from '../UI/FindInput/FindInput';

import classes from './WikiFind.module.scss';

const WikiFind = () => {
  const dispatch = useDispatch();
  const currentItem = useSelector((state) => state.wiki.currentItem);

  const onClickHandler = () => {
    dispatch(fetchItems([]));
    dispatch(setCurrentItem({}));
    dispatch(setFilteredNames([]));
  };

  return (
    <div className={classes.container}>
      <FindInput
        name="Enter character name"
        placeholder="Enter character name"
      />
      {Object.keys(currentItem).length !== 0 ? (
        <div className={classes.cardWrapper}>
          <Character character={currentItem} />
        </div>
      ) : null}

      <div className={classes.btnWrapper}>
        <NavLink to={`/wiki/character/page/1`}>
          <ButtonDetail name="SHOW ALL" onClick={onClickHandler} />
        </NavLink>
      </div>
    </div>
  );
};

export default WikiFind;
