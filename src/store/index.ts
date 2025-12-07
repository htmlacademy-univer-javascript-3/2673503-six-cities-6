import {configureStore} from '@reduxjs/toolkit';
import {reducer} from '@/store/reducer.ts';
import {createAPI} from '@/api/api.ts';
import {redirect} from '@/middlewares/redirect.ts';


export const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
