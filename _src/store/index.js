// third-party
import { configureStore } from '@reduxjs/toolkit';

// project import
import reducers from './reducers';
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';

// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //

const store = configureStore({
  reducer: reducers
});

const { dispatch } = store;
const useDispatch = () => useAppDispatch();
const useSelector = useAppSelector;


export { store, dispatch, useSelector, useDispatch };
