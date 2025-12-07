import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {State} from '@/state/state.ts';

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
