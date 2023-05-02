import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.filter;
export const getIsLoading = state => state.contacts.IsLoading;
export const getError = state => state.contacts.error;

export const getfiltredContact = createSelector(
  [getFilter, getContacts],
  (filter, contacts) => {
    if (Array.isArray(contacts)) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
      );
    }
    return [];
  }
);
