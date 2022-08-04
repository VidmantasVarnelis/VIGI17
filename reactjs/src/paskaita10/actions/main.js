export const initialState = {
  name: 'CodeAcademy',
  year: 2010,
  color: 'black',
  count: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'change-name':
      return { ...state, name: action.payload };
    case 'change-year':
      return { ...state, year: action.payload };
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
