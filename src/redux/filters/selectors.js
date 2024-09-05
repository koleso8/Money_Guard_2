import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '../contacts/selectors';

export const selectNameFilter = state => state.filters.name;

export const selectContactsFilteredMemo = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    let filtered = contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );

    if (filtered.length <= 0)
      filtered = contacts.filter(item =>
        item.number
          .replace(' ', '')
          .replace('+', '')
          .replace('(', '')
          .replace(')', '')
          .replace('-', '')
          .replace(' ', '')
          .includes(
            filter
              .replace(' ', '')
              .replace('+', '')
              .replace('(', '')
              .replace(')', '')
              .replace('-', '')
              .replace(' ', '')
          )
      );
    return filtered;
  }
);
