import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory, useParams } from 'react-router-dom';

import { requestPage } from '../../actions/wikiAction';

import Character from '../../components/CharacterCard/CharacterCard';
import Button from '../../components/UI/Button/Button';
import ButtonDetail from '../../components/UI/ButtonDetail/ButtonDetail';
import Loader from '../../components/UI/Loader/Loader';
import WIkiTitle from '../../components/UI/WikiTitle/WikiTitle';

import classes from './CharactersPage.module.scss';

const CharactersPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const maxPages = useSelector((state) => state.wiki.maxPages);
  const fetchedItems = useSelector((state) => state.wiki.fetchedItems);
  const isLoading = useSelector((state) => state.wiki.isLoading);

  const setCurrentPageHandler = (sign) => {
    if (sign === '+') {
      params.number = +params.number + 1;
    } else {
      params.number = +params.number - 1;
    }
    history.push(`${params.number}`);
  };

  useEffect(() => {
    dispatch(requestPage('/character', params.number));
  }, [params, dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.container}>
          <WIkiTitle
            fastClicker="Ch"
            firsPart="ara"
            flicker="ct"
            secondPart="ers"
          />
          <div className={classes.backWrapper}>
            <NavLink to="/wiki/character">
              <ButtonDetail name="BACK TO FIND" />
            </NavLink>
          </div>
          <div className={classes.characterRow}>
            {fetchedItems.map((item) => (
              <Character character={item} key={item.id} />
            ))}
          </div>
          <div className={classes.backWrapper}>
            <Button
              name="back"
              onClick={() => {
                setCurrentPageHandler('-');
              }}
              disabled={+params.number === 1 ? true : false}
            />
            <Button
              name="next"
              onClick={() => {
                setCurrentPageHandler('+');
              }}
              disabled={+params.number === maxPages ? true : false}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CharactersPage;
