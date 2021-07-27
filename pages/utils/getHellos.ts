import gql from "graphql-tag";
import { client } from "../../config";

export async function fetchAllHellos() {
	const hellos = await client.query({
		query: gql`
		query MyQuery {
			long_tails {
				tail
			}
		}
		`
	})

	return hellos
}

export async function getIdByTail(tail: string) {
	const hello = await client.query({
		query: gql`
		query MyQuery {
			long_tails(where: { tail: {_eq: ${tail}}}}) {
				tail,
				json_id
			}
		}
		
		`
	});
}