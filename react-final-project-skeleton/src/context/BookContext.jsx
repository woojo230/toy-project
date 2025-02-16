import { useReducer } from 'react';
import { bookReducer } from './BookReducer';

export const BookProvider = () => {
  const [state, dispatch] = useReducer(bookReducer, { books: [] });
  cosnt[(filterParams, setFilterParams)] = useState({ genre: '', search: '' });
  const queryString = new URLSearchParams(filterParams).toString();
  const { data, loading, error } = useFetch(`/books?${queryString}`);

  return <></>;
};
