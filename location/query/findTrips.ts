import { gql } from "graphql-tag";
export const findTrips = gql`
query findTrips{
    findTrips
    {
      id
      startTime
      title
      dscr
    }
  }
`;
