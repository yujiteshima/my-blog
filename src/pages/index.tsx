import { FC } from 'react';
import { PostsData } from '../../types';
import PostCard from '../components/PostCard';
import { getPostsData } from '../repositories';

export const getStaticProps = async () => {
  const getStorageData: Array<PostsData> = await getPostsData();
  const sortedPosts: Array<PostsData> = getStorageData.sort((postA, postB) =>
    new Date(postA.metadata.date) > new Date(postB.metadata.date) ? -1 : 1,
  );
  return {
    props: {
      posts: sortedPosts,
    },
  };
};

const Home: FC<{ posts: Array<PostsData> }> = ({ posts }) => {
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

export default Home;
