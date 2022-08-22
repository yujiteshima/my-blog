import axios from 'axios';
type PostsData = {
    metadata: {
        title: string,
        date: string,
        description: string,
        image: String
    },
    content: string
}
export const loadPosts = async (): Promise<Array<PostsData>> => {
    const res = await axios("https://storage.googleapis.com/simple-git-test.appspot.com/blogData.txt");
    return res.data;
}