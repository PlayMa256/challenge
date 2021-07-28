import gql from "graphql-tag";
import { client } from "../../config";

export interface LongTails {
	tail: string;
	json_id: number;
}

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


	return hellos.data.long_tails as Array<LongTails>;
}

export async function getHelloByTail(tail: string) {
	const hello = await client.query({
		query: gql`
		query MyQuery {
			getHelloByTailName(tail: "${tail}") {
				title,
				description
			}
		}
		`,
	});

	return hello.data.getHelloByTailName
}