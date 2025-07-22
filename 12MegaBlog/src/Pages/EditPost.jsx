import React, { use } from 'react'
import { Container, PostForm } from '../components/index';
import { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState({});
    const { slug } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post);
                }
                else {
                    navigate('/'); // fallback if post not found
                }
            })
        }
        else {
            navigate('/');
        }
    }, [slug, navigate]);

    return post? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null 
}

export default EditPost
