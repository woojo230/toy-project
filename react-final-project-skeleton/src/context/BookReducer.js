export const bookReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BOOKS':
      return { ...state, books: action.payload };
    case 'ADD_BOOKS':
      return { ...state, books: [...state.books, action.payload] };
    case 'UPDATE_BOOKS':
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id ? { ...books, ...action.payload } : book
        ),
      };
  }
};
