import { createSlice } from '@reduxjs/toolkit';

const Filter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts(state, action) {
      return action.payload;
    },
  },
});

export const { filterContacts } = Filter.actions;
export const filterReducer = Filter.reducer;