
import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement,login} from './actions'

const App = () => {
  console.log("rendered")
  const counter = useSelector(state => state.counter);
  const isLoggedIn = useSelector(state => state.isLogged);
  const dispatch = useDispatch()

  const onIncrement = () => {
    dispatch(increment())
    dispatch(login());
  }

  const onDecrement = () => {
    dispatch(decrement())
  }


  return (
    <div>
      <h1>Hello</h1>
      <button onClick = {onIncrement}>+</button>
      <p>{counter}</p>
      <button onClick = {onDecrement}>-</button>
      {isLoggedIn ? <p>Logged In</p> : null}
    </div>
    );
}

export default App;
