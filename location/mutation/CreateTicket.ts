  import { gql } from "@apollo/client";
export const CreatTicket = gql`
mutation CreatTicket($data :CreateTicketInput! ){
    createTicket(createTicketInput:$data){
      id
    }
  }
`;
