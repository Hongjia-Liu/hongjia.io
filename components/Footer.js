import Link from "next/link";

const ExternalLink = ({ href, children }) => (
	<a
		className="text-gray-500 transition hover:text-gray-600"
		target="_blank"
		rel="noopener noreferrer"
		href={href}
	>
		{children}
	</a>
);

const Footer = () => {
	return (
		<footer className="mx-auto mb-8 flex w-full max-w-2xl flex-col items-start justify-center">
			<div className="grid w-full max-w-2xl grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
				<div className="flex flex-col space-y-4">
					<Link href="/">
						<a className="text-gray-500 transition hover:text-gray-600">
							Home
						</a>
					</Link>
					<Link href="/blog">
						<a className="text-gray-500 transition hover:text-gray-600">
							Blog
						</a>
					</Link>
				</div>
				<div className="flex flex-col space-y-4">
					<ExternalLink href="https://twitter.com/Hongjia__Liu">
						Twitter
					</ExternalLink>
					<ExternalLink href="https://github.com/Hongjia-Liu">
						GitHub
					</ExternalLink>
				</div>
				<div className="flex flex-col space-y-4">
					<Link href="/uses">
						<a className="text-gray-500 transition hover:text-gray-600">
							Projects
						</a>
					</Link>
					<Link href="/guestbook">
						<a className="text-gray-500 transition hover:text-gray-600">
							About
						</a>
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
