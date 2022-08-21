import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className="my-8">
      <div className="grid grid-cols-3 gap-4">
        Hello World
        {/* {posts.map((post) => (
          <PostCard key={post.metadata.slug} post={post} />
        ))} */}
      </div>
    </div>
  );
};

export default Home;
