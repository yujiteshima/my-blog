import { toc, Options, Result } from 'mdast-util-toc';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import { createElement } from 'react';
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkPrism from 'remark-prism';
import remarkRehype from 'remark-rehype';
import remarkToc, { Root } from 'remark-toc';
import { unified } from 'unified';
import { PostsData } from '../../../types';
import { loadPosts } from '../../repositories';
import Link from 'next/link';

type Props = {
  params: {
    slug: string;
  };
};

type returnValueType = {
  props: {
    frontMatter: {
      title: string;
      date: string;
      description: string;
      image: string;
      slug: string;
    };
    content: string;
    toc: string;
  };
};

const getToc = (options: Options) => {
  return (node: Root) => {
    const result: Result = toc(node, options);
    if ( result.map === null ) { return; }
    node.children = [ result.map, ];
  };
};

export const getStaticProps = async ({ params, }: Props): Promise<returnValueType> => {
  const posts: Array<PostsData> = await loadPosts();
  const file = posts.filter((v) => { return v.metadata.slug === params.slug; });
  const metadata = file[0].metadata;
  const content = file[0].content;
  const result = await unified()
    .use(remarkParse)
    .use(remarkPrism, {
      /* options */
      plugins: ['line-numbers'],
    })
    .use(remarkToc, {
      heading: '目次だよ',
    })
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(content);

  const toc = await unified()
    .use(remarkParse)
    .use(getToc, { tight: true, })
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(content);

  return {
    props: {
      frontMatter: metadata,
      content: result.toString(),
      toc: toc.toString(),
    },
  };
};

export const getStaticPaths = async () => {
  const posts = await loadPosts();
  const paths = posts.map((posts) => ({
    params: {
      slug: posts.metadata.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

const toReactNode = (content: string) => {
  return unified()
    .use(rehypeParse, {
      fragment: true,
    })
    .use(rehypeReact, {
      createElement,
    })
    .processSync(content).result;
};

type PostProps = {
  frontMatter: {
    title: string;
    date: string;
    description: string;
    image: string;
    slug: string;
    categories: Array<string>;
  };
  content: string;
  toc: string;
};

const Post = ({ frontMatter, content, toc }: PostProps): JSX.Element => {
  return (
    <>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.description}
        openGraph={{
          type: 'website',
          url: `http:localhost:3000/posts/${frontMatter.slug}`,
          title: frontMatter.title,
          description: frontMatter.description,
          images: [
            {
              url: `https://localhost:3000/${frontMatter.image}`,
              width: 1200,
              height: 700,
              alt: frontMatter.title,
            },
          ],
        }}
      />
      <div className="prose prose-lg max-w-none">
        <div className="border">
          <Image
            src={`/icon/${frontMatter.image}`}
            width={1200}
            height={700}
            alt={frontMatter.title}
          />
        </div>
        <h1 className="mt-12">{frontMatter.title}</h1>
        <span>{frontMatter.date}</span>
        {/* <div dangerouslySetInnerHTML={{ __html: content }}></div> */}
        <div className="space-x-2">
          {frontMatter.categories.map((category) => (
            <span key={category}>
              <Link href={`/categories/${category}`}>
                <a>{category}</a>
              </Link>
            </span>
          ))}
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-9">{toReactNode(content)}</div>
          <div className="col-span-3">
            <div
              className="sticky top-[50px]"
              dangerouslySetInnerHTML={{ __html: toc }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
