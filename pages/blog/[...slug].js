import getLocalMdx from "../../lib/getLocalMdx";
import { MDXRemote } from "next-mdx-remote";

export default function BlogPost({ post, frontMatter }) {
	return (
		<div className="prose">
			<h1>{frontMatter.title}</h1>
			<p>{frontMatter.publishedAt}</p>
			<MDXRemote {...post.mdx} />
		</div>
	);
}

export async function getStaticPaths() {
	const posts = await getLocalMdx("./data/blog/");
	const paths = posts.map(({ slug }) => ({
		params: {
			slug: slug.split("/"),
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { slug } }) {
	const posts = await getLocalMdx("./data/blog/");
	const postSlug = slug.join("/");
	const [post] = posts.filter(post => post.slug === postSlug);

	if (!post) {
		console.warn(`No content found for slug ${postSlug}`);
	}

	return {
		props: {
			post,
			frontMatter: { ...post.data },
		},
	};
}
