import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {} from '../../hooks/useInterval';

import { getNextPerson, getPrevPerson } from '../../actions/quotesAction';

import Quote from '../../components/Quote/Quote';
import Button from '../../components/UI/Button/Button';

import classes from './QuotesPerson.module.scss';

const QuotesPerson = ({ personQuotes }) => {
  const dispatch = useDispatch();
  // const [counter, setCounter] = useState(0);
  const currentPerson = useSelector((state) => state.quote.currentPerson);
  const allPerson = useSelector((state) => state.quote.fetchedQuotes);

  const getNextPersonHandler = () => {
    dispatch(getNextPerson(allPerson, currentPerson.id));
  };

  const getPrevPersonHandler = () => {
    dispatch(getPrevPerson(allPerson, currentPerson.id));
  };

  // console.log(getNextPerson(allPerson, currentPerson.id));
  // useInterval(() => {
  //   setCounter(counter + 1);
  //   if (counter === personQuotes.length - 1) {
  //     setCounter(0);
  //   }
  // }, 10000);
  return (
    <>
      <div className={classes.gradient1}></div>
      <div className={classes.row}>
        <div className={classes.text}>
          {/* <Quote quote={personQuotes ? personQuotes[counter] : null} /> */}
          <Quote quote={null} />
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
