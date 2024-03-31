import { useEffect } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import { useDispatch, useSelector/* , TypedUseSelectorHook */ } from 'react-redux';
import { RootState, RootDispatch } from './redux/store';
import { fetchUsersAsync } from './redux/slices/ticketSlice';
import './App.css';
// import style from './App.module.scss';

function App() {
    const dispatch = useDispatch<RootDispatch>();
    //const data: TypedUseSelectorHook<RootState> = useSelector((state: TypedUseSelectorHook<RootState>) => state );
    const data = useSelector((state: RootState) => state.dataTicket.users );

    useEffect(() => {
        dispatch(fetchUsersAsync());
    });

  return (
      <div className="App">
          <ul>
              {data.map(item => (
              <li key={item.id}>{item.company}</li>
              ))}
          </ul>
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