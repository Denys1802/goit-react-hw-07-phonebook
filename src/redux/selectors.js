import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContact = createSelector(
  [selectFilter, selectContacts],
  (filter, contacts) => {
    if (Array.isArray(contacts)) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
      );
    }
    return [];
  }
);
