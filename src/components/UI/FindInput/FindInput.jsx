import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentItem, setFilteredNames } from '../../../actions/wikiAction';

import classes from './FindInput.module.scss';

const FindInput = ({ name, placeholder }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.wiki.fetchedItems);
  const filteredItems = useSelector((state) => state.wiki.filteredItems);

  const setFilteredNamesHandler = useCallback(
    (items, value) => {
      dispatch(setFilteredNames(items, value));
    },
    [dispatch]
  );

  const onClickHandler = (item) => {
    dispatch(setCurrentItem(item));
    setFilteredNamesHandler([]);
  };

  const onInputHandler = (event) => {
    dispatch(setCurrentItem({}));
    setFilteredNamesHandler(items, event.target.value);
  };
  const onBlurHandler = (event) => {
    event.target.value = '';
  };

  return (
    <div className={classes.form}>
      <input
        type="input"
        className={classes.field}
        placeholder={placeholder}
        id="name"
        onInput={onInputHandler}
        onBlur={onBlurHandler}
        autoComplete="off"
      />
      <ul className={classes.list}>
        {filteredItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => {
                onClickHandler(item);
              }}
            >
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
      <label htmlFor="name" className={classes.label}>
        {name}
      </label>
    </div>
  );
};

export default FindInput;
