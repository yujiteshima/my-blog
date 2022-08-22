// blog データ
export type PostsData = {
    metadata: {
        title: string,
        date: string,
        description: string,
        image: string,
        slug: string
    },
    content: string
}