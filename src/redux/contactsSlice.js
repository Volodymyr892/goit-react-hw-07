import { createSelector, createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact,deleteContact } from './contactsOps';
import { selectNameFilter } from './filtersSlice';


const contactsSlice = createSlice({
  name: 'contacts',
  initialState:  {
    items: [],
    loading: false,
    error: null
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state)=> {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action)=>{
        state.items = action.payload;
        state.loading = false
      }) 
      .addCase(fetchContacts.rejected, (state)=>{
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, (state)=> {
        state.loading = true;
        state.error = false;
      })
      .addCase(addContact.fulfilled, (state,action)=> {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContact.pending, (state)=> {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteContact.fulfilled,(state,action)=>{
        state.loading = false;
        state.error = false;
        state.items =state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
  
    }
});


export const selectContacts = state => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter ],
  (contacts, filter ) => {
  return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()));
  }
);
export const contactsReducer =  contactsSlice.reducer;
