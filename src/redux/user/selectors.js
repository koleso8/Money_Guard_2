export const selectIsError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.loading;
export const selectContacts = state => state.contacts.items;

export const selectCurrent = state => state.editing.current;
