
import { useEffect, useState } from 'react'


type Post = {
    userId: number;
    id: number;
    title: string; 
    body: string;
}
export const PostsPage = () => {

    const [posts, setPosts] = useState<Post[]>([]);

    const getPosts = async () => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
        const jsonResp = await resp.json();

        setPosts(jsonResp);
        console.log(jsonResp);
    }


    useEffect(() => {
        getPosts();
    },[]);
    
  return (
    <section>
        <div>
            PostsPage
        </div>
        <button>Click Me!</button>
        {
            posts.map(postItem => {
                return (
                    <div key={postItem.id}>
                        <h2 className='text-xl font-bold'>{postItem.title}</h2>
                        <p>{postItem.body}</p>
                    </div>
                )
            })
        }
    </section>
  )
}

export default PostsPage
