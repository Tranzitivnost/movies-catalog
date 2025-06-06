import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMovieCredits } from "@shared/api";
import type { ErrorType } from "@shared/error";
import type { CastMember } from "@shared/api";
import { mapCredits } from "./mapCredits";

type FetchMovieCastParams = {
  movieId: number;
  language?: string;
};

type FetchMovieCastResult = {
  movieId: number;
  cast: CastMember[];
};

export const fetchMovieCast = createAsyncThunk<
  FetchMovieCastResult,
  FetchMovieCastParams,
  {
    rejectValue: ErrorType;
  }
>("movieCast/fetchMovieCast", async ({ movieId, language }, thunkAPI) => {
  try {
    const response = await getMovieCredits(movieId, { language });
    return {
      movieId,
      cast: mapCredits(response),
    };
  } catch (err: unknown) {
    return thunkAPI.rejectWithValue(err as ErrorType);
  }
});
