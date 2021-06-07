import { useEffect, useState } from 'react';

import classes from './Quote.module.scss';

const Quote = ({ quote }) => {
  const [currentQuote, setCurrentQuote] = useState('');
  const [clsCircle, setClsCircle] = useState([classes.circle]);
  const [clsLineLeft, setClsLineLeft] = useState([classes.line, classes.left]);
  const [clsLineRight, setClsLineRight] = useState([
    classes.line,
    classes.right,
  ]);
  const [clsBracketLeft, setClsBracketLeft] = useState([
    classes.bracket,
    classes.left,
  ]);
  const [clsBracketRight, setClsBracketRight] = useState([
    classes.bracket,
    classes.right,
  ]);
  const [clsSmallBottom, setClsSmallBottom] = useState([
    classes.small,
    classes.bottom,
  ]);

  useEffect(() => {
    setClsCircle([classes.circle, classes.active]);
    setClsLineLeft([classes.line, classes.left, classes.active]);
    setClsLineRight([classes.line, classes.right, classes.active]);
    setClsBracketLeft([classes.bracket, classes.left, classes.active]);
    setClsBracketRight([classes.bracket, classes.right, classes.active]);
    setClsSmallBottom([classes.small, classes.bottom, classes.active]);
    setCurrentQuote(quote);
    const tick = setTimeout(() => {
      setClsCircle([classes.circle]);
      setClsLineLeft([classes.line, classes.left]);
      setClsLineRight([classes.line, classes.right]);
      setClsBracketLeft([classes.bracket, classes.left]);
      setClsBracketRight([classes.bracket, classes.right]);
      setClsSmallBottom([classes.small, classes.bottom]);
    }, 5000);
    return () => {
      clearInterval(tick);
    };
  }, [quote]);

  return (
    <div className={classes.frame}>
      <div className={clsCircle.join(' ')}></div>
      <div className={clsLineLeft.join(' ')}></div>
      <div className={clsLineRight.join(' ')}></div>
      <div className={clsBracketLeft.join(' ')}></div>
      <div className={clsBracketRight.join(' ')}></div>

      <div className={clsSmallBottom.join(' ')}>
        <span className={classes.firstLetter}>
          {currentQuote ? currentQuote[0] : null}
        </span>
        {currentQuote ? currentQuote.slice(1) : null}
      </div>
    </div>
  );
};

export default Quote;
