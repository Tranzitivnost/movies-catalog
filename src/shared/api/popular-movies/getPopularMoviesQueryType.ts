export type GetPopularMoviesQueryType = {
  page?: number;
  language?: string;
  region?: string;
  sort_by?: "vote_count.desc";
  primary_release_year?: number;
};
