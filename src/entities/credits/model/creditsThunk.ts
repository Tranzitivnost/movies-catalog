import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMovieCredits } from "@shared/api";
import type { ErrorType } from "@shared/error";
import type { CastMember, CrewMember } from "@shared/api";
import { mapCastMembers } from "./mapCastMembers";
import { mapCrewMembers } from "./mapCrewMembers";

type FetchMovieCreditsParams = {
  movieId: number;
  language?: string;
};

type FetchMovieCreditsResult = {
  movieId: number;
  cast: CastMember[];
  crew: CrewMember[];
};

export const fetchMovieCredits = createAsyncThunk<
  FetchMovieCreditsResult,
  FetchMovieCreditsParams,
  {
    rejectValue: ErrorType;
  }
>("movieCredits/fetchMovieCredits", async ({ movieId, language }, thunkAPI) => {
  try {
    const response = await getMovieCredits(movieId, { language });

    return {
      movieId,
      cast: mapCastMembers(response.cast),
      crew: mapCrewMembers(response.crew),
    };
  } catch (err: unknown) {
    return thunkAPI.rejectWithValue(err as ErrorType);
  }
});
