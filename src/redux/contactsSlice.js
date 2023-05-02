import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const fulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

const extraActions = [fetchContacts, addContact, deleteContact];
const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(task => task.id === payload.id);
        state.items.splice(index, 1);
      })
      .addMatcher(getActions('pending)'), pendingReducer)
      .addMatcher(getActions('rejected'), rejectedReducer)
      .addMatcher(getActions('fulfilled'), fulfilledReducer);
  },
});

export const contactsReducer = contactsSlice.reducer;

//   extraReducers: {
//     [fetchContacts.pending]: handlePending,
//     [fetchContacts.fulfilled](state, { payload }) {
//       state.isLoading = false;
//       state.error = null;
//       state.contacts = payload;
//     },
//     [fetchContacts.rejected]: handleRejected,
//     [addContact.pending]: handlePending,
//     [addContact.fulfilled](state, { payload }) {
//       state.isLoading = false;
//       state.error = null;
//       state.contacts.push(payload);
//     },
//     [addContact.rejected]: handleRejected,
//     [deleteContact.pending]: handlePending,
//     [deleteContact.fulfilled](state, { payload }) {
//       state.isLoading = false;
//       state.error = null;
//       state.contacts = state.contacts.filter(contact => contact.id !== payload);
//     },
//     [deleteContact.rejected]: handleRejected,
//   },
