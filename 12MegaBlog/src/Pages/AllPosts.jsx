import React, { useState, useEffect } from 'react'
import appwriteService from '../appwrite/config';
import { Container, PostCard } from '../components/index';

function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts([]).then((po) => {
            if (po) {
                setPosts(po);
            }
        });
    }, []);
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts
