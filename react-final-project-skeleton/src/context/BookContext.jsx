import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { bookReducer } from './BookReducer';
import { useFetch } from '../hooks/useFetch';

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookReducer, { books: [] });
  const [filterParams, setFilterParams] = useState({ genre: '', search: '' });
  const queryString = new URLSearchParams(filterParams).toString();
  const { data, loading, error } = useFetch(`/books?${queryString}`); //API 매서드 따로 지정 안할경우 기본값 GET

  useEffect(() => {
    if (data) {
      dispatch({ type: 'SET_BOOKS', payload: data });
    }
  }, [data]);

  const setGenre = () => {
    setFilterParams((prev) => ({ ...prev, genre }));
  };

  const setSearch = () => {
    setFilterParams((prev) => ({ ...prev, search }));
  };

  return (
    <BookContext.Provider
      value={{
        books: state.books,
        dispatch,
        loading,
        error,
        setGenre,
        setSearch,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => useContext(BookContext);
