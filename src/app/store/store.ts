import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { popularMoviesSliceReducer } from "@entities/popular-movies";
import { movieCastSliceReducer } from "@entities/credits";

const rootReducer = combineReducers({
  popularMovies: popularMoviesSliceReducer,
  movieCast: movieCastSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  });

  setupListeners(store.dispatch);

  return store;
};

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
