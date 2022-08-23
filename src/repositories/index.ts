import axios from 'axios';
import type { PostsData } from '../../types';

export const loadPosts = async (): Promise<Array<PostsData>> => {
  const res = await axios(
    'https://storage.googleapis.com/simple-git-test.appspot.com/blogData.txt',
  );
  return res.data;
};
