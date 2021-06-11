import { useDispatch, useSelector } from 'react-redux';
import { getNextPage, getPreviosPage } from '../../actions/wikiAction';
import Button from '../../components/UI/Button/Button';
import { useChangePage } from '../../hooks/useChangePage';

import classes from './EpisodesPage.module.scss';

const EpisodesPage = () => {
  const currentPage = useSelector((state) => state.wiki.currentPage);
  const maxEpisodesPage = useSelector((state) => state.wiki.maxEpisodesPage);

  const dispatch = useDispatch();

  useChangePage(currentPage, maxEpisodesPage);
  return (
    <>
      <h1 className={classes.h1}>ЭПИЗОДЫ</h1>

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
          disabled={currentPage === maxEpisodesPage ? true : false}
        />
      </div>
    </>
  );
};

export default EpisodesPage;
