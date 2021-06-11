import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addAnimateClasses } from '../../actions/quotesAction';
import { useIntervalQuotes } from '../../hooks/useIntervalQuotes';

import classes from './Quote.module.scss';

const Quote = () => {
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.quote.currentPerson.quotes);
  const counter = useSelector((state) => state.quote.counter);
  const animateClasses = useSelector((state) => state.quote.animateClasses);

  useEffect(() => {
    dispatch(
      addAnimateClasses({
        clsCircle: [classes.circle, classes.active],
        clsLineLeft: [classes.line, classes.left, classes.active],
        clsLineRight: [classes.line, classes.right, classes.active],
        clsBracketLeft: [classes.bracket, classes.left, classes.active],
        clsBracketRight: [classes.bracket, classes.right, classes.active],
        clsSmallBottom: [classes.small, classes.bottom, classes.active],
      })
    );
  }, [dispatch]);

  useIntervalQuotes(quotes, animateClasses, classes.active, counter);

  return (
    <div className={classes.frame}>
      <div className={quotes ? animateClasses.clsCircle.join(' ') : null}></div>

      <div
        className={quotes ? animateClasses.clsLineLeft.join(' ') : null}
      ></div>
      <div
        className={quotes ? animateClasses.clsLineRight.join(' ') : null}
      ></div>
      <div
        className={quotes ? animateClasses.clsBracketLeft.join(' ') : null}
      ></div>
      <div
        className={quotes ? animateClasses.clsBracketRight.join(' ') : null}
      ></div>

      <div className={quotes ? animateClasses.clsSmallBottom.join(' ') : null}>
        <span className={classes.firstLetter}>
          {quotes && quotes[counter] ? quotes[counter][0] : null}
        </span>
        {quotes && quotes[counter] ? quotes[counter].slice(1) : null}
      </div>
    </div>
  );
};

export default Quote;
