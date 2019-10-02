import axios from 'axios';
import {
  GET_EXPENSES,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  UPDATE_EXPENSE,
} from './types';
import { setAlert } from './alert';

export const getExpenses = () => async dispatch => {
  try {
    const res = await axios.get('/api/expense');
    dispatch({
      type: GET_EXPENSES,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert("Can't find any expenses man"));
  }
};

export const addExpense = formData => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post('/api/expense', formData, config);
    dispatch({
      type: ADD_EXPENSE,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert('cannot add expenses man'));
  }
};

export const removeExpense = expenseID => async dispatch => {
  try {
    const res = await axios.delete(`/api/expense/${expenseID}`);
    dispatch({
      type: REMOVE_EXPENSE,
      payload: res.data,
    });
  } catch (err) {
    setAlert('Cant remove expense man');
  }
};

export const updateExpense = formData => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put(
      `/api/expense/${formData.id}`,
      formData,
      config,
    );
    dispatch({
      type: UPDATE_EXPENSE,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert('Cant remove expense man'));
  }
};
