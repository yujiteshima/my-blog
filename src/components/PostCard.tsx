import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import type { PostsData } from '../../types';

const PostCard: FC<{ key: string; post: PostsData }> = ({ post }) => {
  return (
    <Link href={`/posts/${post.metadata.slug}`}>
      <a className="flex flex-row">
        <div className="border flex items-center">
          <Image
            className=""
            src={`/icon/${post.metadata.image}`}
            width={200}
            height={100}
            alt={post.metadata.title}
          />
        </div>
        <div className="px-2 py-4 border">
          <h1 className="font-bold text-base">{post.metadata.title}</h1>
          <span>{post.metadata.date}</span>
        </div>
      </a>
    </Link>
  );
};

export default PostCard;
