import axios from 'axios';
import { TextDecoder } from 'text-encoding';
import admin from '../../firebase/initFirebase';
import type { PostsData } from '../../types';

export const loadPosts = async (): Promise<Array<PostsData>> => {
  const res = await axios(
    'https://storage.googleapis.com/simple-git-test.appspot.com/blogData.txt',
  );
  return res.data;
};

export const getPostsData = async (): Promise<Array<PostsData>> => {
  const bucket = admin.storage().bucket(process.env.FIREBASE_STORAGE_BUCKET);
  // File Name
  const fileName = 'blogData.txt';
  // File DownLoadPath
  const file = await bucket.file(fileName).download();
  const textDecoder = new TextDecoder('utf-8');
  const text: Array<PostsData> = JSON.parse(
    textDecoder.decode(Uint8Array.from(file[0])),
  );
  return text;
};
