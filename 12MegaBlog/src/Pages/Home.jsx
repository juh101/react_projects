import React from 'react'
import { useEffect,useState } from 'react'
import appwriteService from '../appwrite/config';
import { Container, PostCard} from '../components/index';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if(posts) setPosts(posts);
        }).catch((error) => {
            console.error("Error fetching posts:", error);
        });
    },[])

    if(posts.length === 0) {
        return(
            <div className="py-8">
                <Container>
                    <h2 className="text-center text-2xl font-bold">No Posts Available</h2>
                </Container>
            </div>
        )
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {
                        posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard {...post}  />
                            </div>
                        ))
                    }

                </div>
            </Container>
        </div>
    )
}

export default Home
