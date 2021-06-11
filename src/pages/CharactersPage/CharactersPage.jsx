import { useDispatch, useSelector } from 'react-redux';
import { useChangePage } from '../../hooks/useChangePage';
import { getNextPage, getPreviosPage } from '../../actions/wikiAction';

import Character from '../../components/Character/Character';
import Button from '../../components/UI/Button/Button';
import WikiFind from '../../components/WikiFind/WikiFind';

import classes from './CharactersPage.module.scss';

const CharactersPage = () => {
  const currentPage = useSelector((state) => state.wiki.currentPage);
  const maxCharactersPage = useSelector(
    (state) => state.wiki.maxCharactersPage
  );
  const fetchedItems = useSelector((state) => state.wiki.fetchedItems);

  const dispatch = useDispatch();

  useChangePage(currentPage, maxCharactersPage);
  return (
    <>
      <WikiFind />
      <div className={classes.characterRow}>
        {fetchedItems.map((item) => (
          <Character character={item} key={item.id} />
        ))}
      </div>

      <div className={classes.btnRow}>
        <Button
          name="back"
          onClick={() => {
            dispatch(getPreviosPage(currentPage));
          }}
          disabled={currentPage === 1 ? true : false}
        />

        <Button
          name="next"
          onClick={() => {
            dispatch(getNextPage(currentPage));
          }}
          disabled={currentPage === maxCharactersPage ? true : false}
        />
      </div>
    </>
  );
};

export default CharactersPage;
