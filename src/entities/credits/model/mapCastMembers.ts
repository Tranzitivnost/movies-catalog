import { getImageUrl, type CastMember } from "@shared/api";

export const mapCastMembers = (casts: CastMember[]) => {
  return casts.map(cast => ({
    ...cast,
    profile_path: getImageUrl(cast.profile_path),
  }));
};
