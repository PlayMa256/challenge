import { fetchAllHellos } from "./utils/getHellos";

function TailComponent() {
	return (
		<h1>hi</h1>
	)
}

export async function getStaticProps({ params }) {
	const { tail } = params;

	return {
    props: {}, // will be passed to the page component as props
  }
}


export async function getStaticPaths() {
	const hellos = await fetchAllHellos();
  return {
    paths: hellos.data.long_tails.map((datum) => `/${datum.tail}`),
    fallback: true
  }
}

export default TailComponent;