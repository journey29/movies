import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import { RootState, AppDispatch } from 'store/index.ts';

export const useAppDispatch = ()=> useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector