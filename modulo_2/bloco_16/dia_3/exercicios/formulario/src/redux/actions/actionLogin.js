export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_REGISTER = 'ADD_REGISTER';
export const DELETE_REGISTER = 'DELETE_REGISTER';

export const actionEmail = (payload) => ({
  type: ADD_EMAIL, payload,
});

export const actionRegister = (payload) => ({
  type: ADD_REGISTER, payload,
});

export const actionDelete = (payload) => ({
  type: DELETE_REGISTER, payload,
});


