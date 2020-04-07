import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from 'store'
import { loadUser } from 'actions/auth'

export default props => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}