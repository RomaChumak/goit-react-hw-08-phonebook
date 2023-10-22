import { createSlice } from '@reduxjs/toolkit';
import { addNumber, fetchContacts, deleteContact } from './operations';
import { logOutUser } from './auth/authOperations';

const sliceContacts = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    isErr: false,
    },
  
   extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.contacts = action.payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.isErr = action.payload;
       },
    
    [addNumber.pending](state) {
      state.isLoading = true;
    },
    [addNumber.fulfilled](state, action) {
      state.contacts.push(action.payload);
      state.isLoading = false;
    },
    [addNumber.rejected](state, action) {
      state.isLoading = false;
      state.isErr = action.payload;
       },
    
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
      state.isLoading = false;
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.isErr = action.payload;
    },

    [logOutUser.fulfilled](state) {
      state.contacts = [];
      state.isLoading = false;
      state.isErr = false;
    },
  },
});

export const contactsReducer = sliceContacts.reducer;