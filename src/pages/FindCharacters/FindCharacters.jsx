import { useLocation } from 'react-router';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { requestItems } from '../../actions/wikiAction';

import WIkiTitle from '../../components/UI/WikiTitle/WikiTitle';
import WikiFind from '../../components/WikiFind/WikiFind';

import classes from './FindCharacters.module.scss';

const FindCharacters = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const requestItemsHandler = useCallback(() => {
    dispatch(requestItems(location.pathname.slice(5)));
  }, [dispatch, location]);

  useEffect(() => {
    requestItemsHandler();
  }, [requestItemsHandler]);

  return (
    <div className={classes.container}>
      <WIkiTitle
        fastClicker="Ch"
        firsPart="ara"
        flicker="ct"
        secondPart="ers"
      />
      <WikiFind />
    </div>
  );
};

export default FindCharacters;
