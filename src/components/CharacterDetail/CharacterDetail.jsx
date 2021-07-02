import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { requestItem } from '../../actions/wikiAction';

import classes from './CharacterDetail.module.scss';

const CharacterDetail = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentItem = useSelector((state) => state.wiki.currentItem);
  console.log(currentItem);
  const requestItemsHandler = useCallback(() => {
    dispatch(requestItem(location.pathname.slice(5)));
  }, [dispatch, location]);

  useEffect(() => {
    requestItemsHandler();
  }, [requestItemsHandler]);

  if (Object.keys(currentItem).length !== 0) {
    return (
      <div className={classes.container}>
        <div className={classes.box}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div
            className={classes.content}
            style={{
              backgroundImage: `url(${currentItem.image})`,
            }}
          ></div>
        </div>
        <div className={classes.blockAbout}>
          <ul>
            <li>{currentItem.name}</li>
            <li>{currentItem.gender}</li>
            <li>{currentItem.status}</li>
            <li>{currentItem.type}</li>
            <li>{currentItem.species}</li>
            <li>{currentItem.location.name}</li>
            <li>{currentItem.episode[0]}</li>
          </ul>
        </div>
      </div>
    );
  } else return null;
};

export default CharacterDetail;
