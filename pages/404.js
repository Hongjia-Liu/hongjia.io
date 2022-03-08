import Link from "next/link";
import Container from "../components/Container";
export default function Custom404() {
	return (
		<Container>
			<div className="mx-auto mt-32 mb-16 flex max-w-2xl flex-col items-start justify-center">
				<h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
					404 - PAGE NOT FOUND
				</h1>
				<p className="mx-auto mb-8 text-center text-gray-600 dark:text-gray-400">
					Sorry, we couldn’t find the page you’re looking for.
				</p>
				<Link href="/">
					<a className="mx-auto w-64 rounded-md bg-gray-200 p-1 text-center font-bold text-black dark:bg-gray-800 dark:text-white sm:p-4">
						Return Home
					</a>
				</Link>
			</div>
		</Container>
	);
}
