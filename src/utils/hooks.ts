import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from 'react-redux';
import {
  TDispatch,
  TThunk,
  RootState,
} from '../types';

export const useDispatch = () => dispatchHook<TDispatch | TThunk>();

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
