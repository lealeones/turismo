import { gql } from "@apollo/client";


export const createLocation = gql`
mutation createLocation($data: CreateLocationInput! ) {
    createLocation(createLocationInput:$data){
  id
    }
  }
`;
