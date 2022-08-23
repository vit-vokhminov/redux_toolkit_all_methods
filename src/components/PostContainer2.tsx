import React from "react";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";
import { IPost } from "types/IPost";

const PostContainer2 = () => {
    const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(3);

    const [updatePost, {}] = postAPI.useUpdatePostMutation();
    const [deletePost, {}] = postAPI.useDeletePostMutation();

    const handleRemove = (post: IPost) => {
        deletePost(post);
    };

    const handleUpdate = (post: IPost) => {
        updatePost(post);
    };


    return (
        <div>
            <div className="post__list">
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>Произошла ошибка при загрузке</h1>}
                {posts && posts.map((post) => <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post} />)}
            </div>
        </div>
    );
};

export default PostContainer2;
