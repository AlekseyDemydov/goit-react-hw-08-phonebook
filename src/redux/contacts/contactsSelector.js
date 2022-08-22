import { createSelector } from '@reduxjs/toolkit';

export const getContact = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getFilterContact = createSelector(
  [getContact, getFilter],
  (items, filter) => {
    const filterContact = items.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filterContact;
  }
);
