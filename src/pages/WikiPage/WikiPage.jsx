import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { requestAllItems } from '../../actions/wikiAction';

import Header from '../../components/Header/Header';
import CharactersPage from '../CharactersPage/CharactersPage';
import LocationsPage from '../LocationsPage/LocationsPage';
import EpisodesPage from '../EpisodesPage/EpisodesPage';

import classes from './WikiPage.module.scss';

const WikiPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestAllItems());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <div className={classes.wrapper}>
          <Switch>
            <Route path="/wiki/character" component={CharactersPage} />
            <Route path="/wiki/location" component={LocationsPage} />
            <Route path="/wiki/episode" component={EpisodesPage} />
            <Redirect to={'/wiki'} />
          </Switch>
        </div>
      </main>
    </>
  );
};

export default WikiPage;
