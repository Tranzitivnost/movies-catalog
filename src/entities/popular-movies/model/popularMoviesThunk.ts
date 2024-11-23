import { createAsyncThunk } from "@reduxjs/toolkit"
import { getPopularMovies } from "@shared/api"
import type { ErrorType } from "@shared/error"
import type { GetPopularMoviesQueryType, Movie } from "@shared/api"
import { mapMovies } from "./mapMovies"
export const fetchPopularMovies = createAsyncThunk<
  Movie[],
  GetPopularMoviesQueryType | undefined,
  {
    rejectValue: ErrorType
  }
>("popularMovies/fetchPopularMovies", async (query, thunkAPI) => {
  try {
    const response = await getPopularMovies(query)
    return mapMovies(response)
  } catch (err: unknown) {
    return thunkAPI.rejectWithValue(err as ErrorType)
  }
})
