import { NextApiRequest, NextApiResponse } from "next";
import JsonSource from './content.json';

const HASURA_OPERATION = `
query MyQuery($tail: String) {
  long_tails(where: {tail: {_eq:$tail}} ) {
    json_id
    tail
  }
}
`;

// execute the parent operation in Hasura
const execute = async (variables: any) => {
  const fetchResponse = await fetch(
    "http://localhost:8080/v1/graphql",
    {
      method: 'POST',
      body: JSON.stringify({
        query: HASURA_OPERATION,
        variables
      })
    }
  );
  const data = await fetchResponse.json();
  return data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
	 // get request input
	 const { tail } = req.body.input;

	 // run some business logic
 
	 // execute the Hasura operation
	const { data, errors } = await execute({ tail });
	
	const { json_id } = data.long_tails[0];
	const helloReturn = JsonSource.find((hello) => hello.id === json_id) || {};
 
	 // if Hasura operation errors, then throw error
	 if (errors) {
		 return res.status(400).json(errors[0])
	 }
 
	 // success
	return res.json(helloReturn);
}