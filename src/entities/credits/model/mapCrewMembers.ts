import { getImageUrl, type CrewMember } from "@shared/api";

export const mapCrewMembers = (crews: CrewMember[]) => {
  return crews.map(crew => ({
    ...crew,
    profile_path: getImageUrl(crew.profile_path),
  }));
};
