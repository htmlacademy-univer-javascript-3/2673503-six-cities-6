import {useDispatch} from 'react-redux';
import {AppDispatch} from '@/state/state.ts';

export const useAppDispatch = () => useDispatch<AppDispatch>();
