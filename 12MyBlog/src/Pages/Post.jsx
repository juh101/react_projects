import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData.userData);

    var isAuthor = isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
            isAuthor = post && userData ? post.userId === userData.$id : false;
        }

        else navigate("/");
    }, [slug, navigate]);

    useEffect(() => {
        if (post && userData) {
            console.log("post.userId: ", post.userId);
            console.log("userData.id: ", userData.$id);


        }
    }, [])

    const deletePost = () => {
        appwriteService.deleteDocument(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteImage(post.featuredImage);

            }
            navigate("/");
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={appwriteService.getFilePreview(post.image)}
                        alt={post.title}
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <div
                                    className="w-8 h-8 flex items-center justify-center bg-pink-100 hover:bg-pink-200 text-pink-600 hover:text-pink-700 rounded-full cursor-pointer transition duration-200"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M15.2 2.3l6.5 6.5-2.8 2.8-6.5-6.5 2.8-2.8zm-3.5 3.6l6.5 6.5L10.1 20H3.6v-6.5l8.1-8.1z" />
                                    </svg>
                                </div>

                            </Link>
                            <div
                                onClick={deletePost}
                                className="w-8 h-8 flex items-center justify-center bg-pink-100 hover:bg-pink-200 text-pink-600 hover:text-pink-700 rounded-full cursor-pointer transition duration-200"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6 2a1 1 0 00-1 1v1H3.5a.5.5 0 000 1h.768l.7 10.493A2 2 0 006.963 18h6.074a2 2 0 001.995-1.507L15.7 5H16.5a.5.5 0 000-1H15V3a1 1 0 00-1-1H6zm2 5a.5.5 0 011 0v7a.5.5 0 01-1 0V7zm4 0a.5.5 0 10-1 0v7a.5.5 0 001 0V7z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="break-words whitespace-normal mt-2 text-sm text-gray-800">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}