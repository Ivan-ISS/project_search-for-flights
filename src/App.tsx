import { useEffect } from 'react';
import { useDispatch, useSelector/* , TypedUseSelectorHook */ } from 'react-redux';
import { RootState, RootDispatch } from './redux/store';
import { fetchTicketsAsync, filterTicketsByCompany } from './redux/slices/ticketSlice';
import styles from './App.module.scss';

import Layout from './components/Layout/layout';
import Header from './components/Header/header';
import Main from './components/Main/main';
import Footer from './components/Footer/footer';

function App() {
    const dispatch = useDispatch<RootDispatch>();
    //const data: TypedUseSelectorHook<RootState> = useSelector((state: TypedUseSelectorHook<RootState>) => state );
    const data = useSelector((state: RootState) => state.dataTickets.tickets );

    useEffect(() => {
        dispatch(fetchTicketsAsync());
    }, [dispatch]);

  return (
      <div className={styles.app}>
          <Layout
              HeaderComponent={<Header />}
              MainComponent={<Main ticketsData={data}/>}
              FooterComponent={<Footer />}
          />
      </div>
  );
}

export default App;



/* // Функция-заглушка для имитации асинхронного запроса к серверу
function fakeApiRequest(data, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
}
export function fetchPosts() {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_POSTS_REQUEST' });

    try {
      // Имитация асинхронного запроса к серверу
      const response = await fakeApiRequest([
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' },
        { id: 3, title: 'Post 3' },
      ]);

      dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: response });
    } catch (error) {
      dispatch({ type: 'FETCH_POSTS_FAILURE', payload: error.message });
    }
  };
} */