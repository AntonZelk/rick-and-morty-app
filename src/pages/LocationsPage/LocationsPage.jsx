import { useDispatch, useSelector } from 'react-redux';
import { getNextPage, getPreviosPage } from '../../actions/wikiAction';
import Button from '../../components/UI/Button/Button';
import { useChangePage } from '../../hooks/useChangePage';

import classes from './LocationsPage.module.scss';

const LocationsPage = () => {
  const currentPage = useSelector((state) => state.wiki.currentPage);
  const maxLocationsPage = useSelector((state) => state.wiki.maxLocationsPage);

  const dispatch = useDispatch();

  useChangePage(currentPage, maxLocationsPage);
  return (
    <>
      <h1 className={classes.h1}>ЛОКАЦИИ</h1>

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
          disabled={currentPage === maxLocationsPage ? true : false}
        />
      </div>
    </>
  );
};

export default LocationsPage;
