import QuotesPerson from '../QuotesPerson/QuotesPerson';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { requestQuotes } from '../../actions/quotesAction';

import Error from '../../components/UI/Error/Error';
import Loader from '../../components/UI/Loader/Loader';

import classes from './QuotesСarousel.module.scss';

const QuotesСarousel = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.quote.isLoading);
  const error = useSelector((state) => state.quote.isError);

  useEffect(() => {
    dispatch(requestQuotes());
  }, [dispatch]);

  return (
    <section>
      <div className={classes.container}>
        {error ? <Error /> : loading ? <Loader /> : <QuotesPerson />}
      </div>
    </section>
  );
};

export default QuotesСarousel;
