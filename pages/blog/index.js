import Link from "next/link";
import getLocalMdx from "../../lib/getLocalMdx";

export default function BlogPage({ posts }) {
	return (
		<div>
			{posts.map(post => (
				<div key={post.slug}>
					<Link href={`/blog/${post.slug}`}>
						<a>{post.title}</a>
					</Link>
					<p>{post.publishedAt}</p>
					<p>{post.summary}</p>
				</div>
			))}
		</div>
	);
}

export async function getStaticProps() {
	const posts = await getLocalMdx("./data/blog/");
	const allMdx = posts.map(post => ({
		slug: post.slug,
		...post.data,
	}));

	return {
		props: {
			posts: allMdx,
		},
	};
}
