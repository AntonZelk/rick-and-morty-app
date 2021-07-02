// import { useCallback, useEffect } from 'react';

// import { useDispatch } from 'react-redux';
// import { useHistory, useLocation } from 'react-router';

// import { requestItems, setCurrentPage } from '../actions/wikiAction';

// export const useChangePage = (currentPage, maxPage) => {
//   const dispatch = useDispatch();
//   const { pathname } = useLocation();
//   const history = useHistory();

//   const setStartPage = useCallback(() => {
//     dispatch(setCurrentPage(1));
//   }, [dispatch]);

//   const requestItemsHandler = useCallback(() => {
//     if (currentPage <= maxPage) {
//       dispatch(requestItems(`${pathname.slice(5)}?page=${currentPage}`));
//       history.push(`${history.location.pathname}?page=${currentPage}`);
//     }
//   }, [currentPage, history, pathname, dispatch, maxPage]);

//   useEffect(() => {
//     return () => {
//       setStartPage();
//     };
//   }, [setStartPage]);

//   useEffect(() => {
//     requestItemsHandler();
//   }, [requestItemsHandler]);
// };
