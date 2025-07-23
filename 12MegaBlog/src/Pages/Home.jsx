import React from 'react'
import { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config';
import { Container, PostCard } from '../components/index';
import auth from '../appwrite/auth'

function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserAndPosts = async () => {
            const currentUser = await auth.getCurrentUser();
            setUser(currentUser);

            if (currentUser) {
                const posts = await appwriteService.getPosts();
                if (posts) setPosts(posts);
            }

            setLoading(false);
        };

        fetchUserAndPosts();
    }, []);

    function AllPosts() {
        if (posts.length != 0) {
            return (
                <div className='w-full py-8'>
                    <h4> All Blogs -</h4>
                    <Container>
                        <div className='flex flex-wrap'>

                            {
                                posts.map((post) => (
                                    <div key={post.$id} className='p-2 w-1/4'>
                                        <PostCard {...post} />
                                    </div>
                                ))
                            }

                        </div>
                    </Container>
                </div>
            )
        }
        else {
            return (
                <h4 className="text-center text-1xl font-bold my-3">Login to view your Blogs</h4>
            )
        }
    }

    return (
        <div className="py-8">
            <Container>
                <h2 className="text-3xl font-semibold mb-4">Welcome to BloggedIn</h2>
                <p className="text-gray-700">Share your voice with the world. <br /> Welcome to our community-driven blogging platform where creativity meets expression. Whether you're a seasoned writer or just getting started, this is your space to share stories, ideas, and insights.Log in to explore posts, create your own, and connect with other passionate writers.Let your thoughts live here.</p>
                <AllPosts/>


            </Container>
        </div>
    )




}

export default Home
