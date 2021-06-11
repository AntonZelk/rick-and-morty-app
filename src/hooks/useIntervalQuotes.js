import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addActiveClasses,
  clearTimer,
  onTimer,
  removeActiveClasses,
} from '../actions/quotesAction';

export const useIntervalQuotes = (quotes, classes, activeClass, counter) => {
  const [isActive, setIsActive] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const id = setInterval(() => {
      if (counter === quotes.length - 1) {
        dispatch(clearTimer());
      }

      dispatch(removeActiveClasses(classes, activeClass));
      setIsActive(false);
    }, 10000);
    return () => clearInterval(id);
  });
  useEffect(() => {
    if (!isActive) {
      dispatch(onTimer(counter));
      dispatch(addActiveClasses(classes, activeClass));
      setIsActive(true);
    }
  }, [isActive, dispatch, counter, activeClass, classes]);
};
