import React, { useEffect, useState } from "react";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";
import { IPost } from "types/IPost";

const PostContainer = () => {
    const [limit, setLimit] = useState(100);
    const { data: posts, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(limit);
    const [createPost, {error: createError}] = postAPI.useCreatePostMutation();
    const [updatePost, {}] = postAPI.useUpdatePostMutation();
    const [deletePost, {}] = postAPI.useDeletePostMutation();

    useEffect(() => {
        // setTimeout(() => {
        //     setLimit(3)
        // }, 2000)
    }, []);

    const handleCreate = async () => {
        const title = prompt();
        await createPost({ title, body: title } as IPost);
    };

    const handleRemove = (post: IPost) => {
        deletePost(post);
    };
 
    const handleUpdate = (post: IPost) => {
        updatePost(post);
    };

    return (
        <div>
            <div className="post__list">
                <button onClick={handleCreate}>Add new post</button>
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>Произошла ошибка при загрузке</h1>}
                {posts && posts.map((post) => <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post} />)}
            </div>
        </div>
    );
};

export default PostContainer;


// function useUpdateCourses(successCollbalck: () => void) {

//     const navigate = useNavigate();
//     const { data: responseUser } = useGetUserQuery(undefined);
//     const { data: responseCourses } = useGetCoursesQuery(undefined, { skip: !responseUser });

//     const login = async () => {
//         if (!responseUser) {
//             message.error("Failed to get student data");
//             navigate("/signin");
//             return;
//         }

//         if (responseCourses) {
//             successCollbalck();
//         } else {
//             message.error("Failed to get course data");
//         }
//     };

//     return login;
// }