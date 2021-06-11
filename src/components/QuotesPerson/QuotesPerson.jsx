import { useDispatch, useSelector } from 'react-redux';

import {
  clearTimer,
  getNextPerson,
  getPrevPerson,
} from '../../actions/quotesAction';

import Quote from '../../components/Quote/Quote';
import Button from '../../components/UI/Button/Button';

import classes from './QuotesPerson.module.scss';

const QuotesPerson = () => {
  const dispatch = useDispatch();
  const currentPerson = useSelector((state) => state.quote.currentPerson);
  const allPerson = useSelector((state) => state.quote.fetchedQuotes);

  const getNextPersonHandler = () => {
    dispatch(clearTimer());
    dispatch(getNextPerson(allPerson, currentPerson.id));
  };

  const getPrevPersonHandler = () => {
    dispatch(clearTimer());
    dispatch(getPrevPerson(allPerson, currentPerson.id));
  };

  return (
    <>
      <div className={classes.gradient1}></div>
      <div className={classes.row}>
        <div className={classes.text}>
          <Quote />
        </div>
        <div className={classes.img}>
          <img src={currentPerson.img} alt="about" />
        </div>
      </div>
      <div className={classes.buttonRow}>
        <Button name={'Back'} onClick={getPrevPersonHandler} />
        <Button name={'Next'} onClick={getNextPersonHandler} />
      </div>
      <div className={classes.gradient2}></div>
    </>
  );
};

export default QuotesPerson;
