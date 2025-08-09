import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index"
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.slug || "",
            content: post?.content || "",
            status: post?.status || "active",

        }
    });
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData?.userData);

    // console.log("userData in store:", userData);


    const submit = async (data) => {

        console.log("submitted data", data);

        if (post) {
            console.log("post image is: ", post.image);
            console.log("uploaded ", data.image[0]);
            
            const file = data.image[0] ? await appwriteService.uploadImage(data.image[0]) : null;

            if (file && post.image) {
                appwriteService.deleteImage(post.image);
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                image: file ? file.$id : post.image,

            })

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }

        }
        else {
            const file = await appwriteService.uploadImage(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.image = fileId;
                console.log("File uploaded successfully:", fileId);
                const previewUrl = appwriteService.getFilePreview(fileId);
                console.log("File preview URL:", previewUrl);
                
                
                if (!userData) {
                    console.error("User data not found. Aborting post creation.");
                    return;
                }
                console.log("user data: " , userData);
                console.log("Creating post with user ID:", userData.$id);
                
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });
                console.log("created post", dbPost);
                console.log("Post ID:", dbPost?.$id);                 

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string") {
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");
        }
        return ''
    }, [])

    React.useEffect(() => {
        
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        })

        return () => {
            subscription.unsubscribe();
        }

    }, [watch, slugTransform, setValue]);


    useEffect(() => {
                
    },[])

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {(post) && (
                    <div className="w-full mb-4">
                        {post.image && <img
                            src={appwriteService.getFilePreview(post.image)}
                            alt={post.title}
                            className="rounded-lg"
                        />}
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    )
}



export default PostForm
