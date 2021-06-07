import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/HomePage';
import WikiPage from './pages/WikiPage';

import StartLoader from './components/UI/StartLoader/StartLoader';

import './App.scss';

import { startApp } from './actions/startApp';

const App = () => {
  const dispatch = useDispatch();
  const isStart = useSelector((state) => state.start.isStart);

  useEffect(() => {
    setTimeout(() => {
      if (!isStart) {
        dispatch(startApp());
      }
    }, 400);
  });

  return (
    <>
      {isStart ? (
        <BrowserRouter>
          <Switch>
            <Route path="/wiki" component={WikiPage} />
            <Route path="/" exact component={HomePage} />
            <Redirect to={'/'} />
          </Switch>
        </BrowserRouter>
      ) : (
        <StartLoader />
      )}
    </>
  );
};

export default App;
