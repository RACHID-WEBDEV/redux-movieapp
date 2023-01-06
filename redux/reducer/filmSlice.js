import { createSlice } from '@reduxjs/toolkit';

const filmSlice = createSlice({
  name: 'film',
  initialState: {
    filmsList: [],
    film: {}
  },
  reducer: {
    getFilms(name) {
      return name;
    },
    setFilms: (state, action) => {
      state.filmsList = action.payload;
    }
  }
});

export const { getFilms, setFilms } = filmSlice.actions;

export default filmSlice.reducer;
