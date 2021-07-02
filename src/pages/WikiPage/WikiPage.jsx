import { Switch, Route, Redirect } from 'react-router-dom';

import Header from '../../components/Header/Header';
import FindCharacters from '../FindCharacters/FindCharacters';
import LocationsPage from '../LocationsPage/LocationsPage';
import EpisodesPage from '../EpisodesPage/EpisodesPage';
import CharactersPage from '../CharactersPage/CharactersPage';
import CharacterDetail from '../../components/CharacterDetail/CharacterDetail';

// import classes from './WikiPage.module.scss';

const WikiPage = () => {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/wiki/character" exact component={FindCharacters} />
          <Route
            path="/wiki/character/page/:number"
            component={CharactersPage}
          />
          <Route path="/wiki/character/:id" component={CharacterDetail} />
          <Route path="/wiki/location" component={LocationsPage} />
          <Route path="/wiki/episode" component={EpisodesPage} />
          <Redirect to={'/wiki'} />
        </Switch>
      </main>
    </>
  );
};

export default WikiPage;
