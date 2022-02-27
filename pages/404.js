import Link from "next/link";

export default function Custom404() {
	return (
		<div className="flex min-h-full flex-col justify-center bg-white pt-16 pb-12">
			<main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
				<div className="py-16">
					<div className="text-center">
						<p className="text-md font-semibold uppercase tracking-wide text-cyan-600">
							404 error
						</p>
						<h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
							PAGE NOT FOUND.
						</h1>
						<p className="mt-2 text-xl text-gray-500">
							Sorry, we couldn’t find the page you’re looking for.
						</p>
						<div className="mt-6">
							<Link href="/">
								<a className="text-lg font-medium text-cyan-600 hover:text-cyan-500">
									Go back home →
								</a>
							</Link>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
