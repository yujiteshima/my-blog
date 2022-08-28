import { FC } from 'react';
import { PostsData } from '../../../types';
import PostCard from '../../components/PostCard';
import { loadPosts } from '../../repositories';

type Props = {
  params: {
    category: string;
  };
};

export const getStaticProps = async ({ params }: Props) => {
  const posts: Array<PostsData> = await loadPosts();
  const category = params.category;
  const filteredPosts = posts.filter((post) => {
    return post.metadata.categories.includes(category);
  });

  const sortedPosts: Array<PostsData> = filteredPosts.sort((postA, postB) =>
    new Date(postA.metadata.date) > new Date(postB.metadata.date) ? -1 : 1,
  );
  return {
    props: {
      posts: sortedPosts,
    },
  };
};

export const getStaticPaths = async () => {
  // TODO: categoriesの取得方法をloadpostで取れるようにする。
  //       functionsでjsonに組み込むか、nextがのビルド時にloadpostで取得したjsonに対して操作するか。
  const categories = ['react', 'nextjs', 'golang', 'nuxtjs'];
  const paths = categories.map((category) => ({ params: { category } }));
  return {
    paths,
    fallback: false,
  };
};

const Category: FC<{ posts: Array<PostsData> }> = ({ posts }) => {
  return (
    <div className="my-8">
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard key={post.metadata.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Category;
