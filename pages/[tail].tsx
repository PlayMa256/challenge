import { GetStaticPropsContext } from "next";
import { fetchAllHellos, getHelloByTail } from "./utils/getHellos";

export interface TailComponentProps {
  hello?: {
    title: string;
    description: string;
  };
}

function TailComponent(props: TailComponentProps) {
	const { hello } = props;
	if (!hello) {
		return <h1>No slug provided, please provide one to perform search</h1>
	}

  return (
		<div style={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			flexDirection: "column",
		}}>
      <h1>{hello.title}</h1>
      <p>{hello.description}</p>
    </div>
  );
}

export async function getStaticProps(
  props: GetStaticPropsContext<{ tail: string }>
) {
	const tail = props?.params?.tail
	let data = null;
	if (tail) {
		data = await getHelloByTail(tail);
	}

  return {
    props: {
      hello: data,
    },
  };
}

export async function getStaticPaths() {
  const hellos = await fetchAllHellos();
  return {
    paths: hellos.map((datum) => `/${datum.tail}`),
    fallback: true,
  };
}

export default TailComponent;
