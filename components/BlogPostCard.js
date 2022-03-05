import Link from "next/link";

export default function BlogPostCard({ title, slug, gradient, date }) {
	return (
		<Link href={`/blog/${slug}`}>
			<a
				className={`
					w-full transform rounded-xl
					bg-gradient-to-r p-1 transition-all hover:scale-[1.01] md:w-1/3
					${gradient}`}
			>
				<div className="flex h-full flex-col justify-between rounded-lg bg-white p-4 dark:bg-gray-900">
					<div className="flex flex-col justify-between md:flex-row">
						<h4 className="mb-6 w-full text-lg font-medium tracking-tight text-gray-900 dark:text-gray-100 sm:mb-10 md:text-lg">
							{title}
						</h4>
					</div>
					<div className="capsize flex items-center text-gray-800 dark:text-gray-200">
						<span className="capsize ml-2 align-baseline">
							{date}
						</span>
					</div>
				</div>
			</a>
		</Link>
	);
}
