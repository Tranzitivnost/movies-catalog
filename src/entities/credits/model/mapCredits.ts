import { getImageUrl, type CastMember } from "@shared/api";

export const mapCredits = (casts: CastMember[]) => {
  return casts.map(cast => ({
    ...cast,
    profile_path: getImageUrl(cast.profile_path),
  }));
};
