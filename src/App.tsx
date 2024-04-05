import { useEffect } from 'react';
// import viteLogo from '/vite.svg';
import { useDispatch, useSelector/* , TypedUseSelectorHook */ } from 'react-redux';
import { RootState, RootDispatch } from './redux/store';
import { fetchTicketsAsync, filterTicketsByCompany } from './redux/slices/ticketSlice';
// import './App.css';
import styles from './App.module.scss';

import Layout from './components/Layout/layout';
import Header from './components/Header/header';
import Main from './components/Main/main';
import Footer from './components/Footer/footer';

function App() {
    const dispatch = useDispatch<RootDispatch>();
    //const data: TypedUseSelectorHook<RootState> = useSelector((state: TypedUseSelectorHook<RootState>) => state );
    const data = useSelector((state: RootState) => state.dataTickets.tickets );
    const dataDuplicate = useSelector((state: RootState) => state.dataTickets.ticketsDuplicate );
    const dataFilter = useSelector((state: RootState) => state.dataTickets.filteredTickets );

    useEffect(() => {
        dispatch(fetchTicketsAsync());
    }, [dispatch]);

    /* useEffect(() => {
      dispatch(filterTicketsByCompany('S7 Airlines'));
    }, [data]); */

  return (
      <div className={styles.app}>
          <ul>
              {data.map(item => (
              <li key={item.id}>{item.company} {item.price} {item.id}</li>
              ))}
          </ul>
          <button onClick={() => dispatch(fetchTicketsAsync())}>more</button>

          {/* <button onClick={() => dispatch(sortTickets('price'))}>Самый дешевый</button> */}
          <button >Самый быстрый</button>
          <button >Самый оптимальный</button>

          <p>
              <label><input type="radio" />all</label>
              <label><input type="radio" />Victory</label>
              <label><input type="radio" />RW</label>
              <label onClick={() => dispatch(filterTicketsByCompany('S7 Airlines'))}><input type="radio" />s7</label>
          </p>
          
          <p>
              <label><input type="checkbox" />not</label>
              <label><input type="checkbox" />1</label>
              <label><input type="checkbox" />2</label>
              <label><input type="checkbox" />3</label>
          </p>

          <p>
            <ul>
                {dataFilter.map(item => (
                <li key={item.id}>{item.company} {item.price} {item.id}</li>
                ))}
            </ul>
          </p>

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