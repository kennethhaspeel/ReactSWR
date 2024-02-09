import toast, { Toaster } from 'react-hot-toast'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faUpload } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'

import useSWR from 'swr'

import { getPosts, addPost, updatePost, deletePost, PostUrlEndpoint as postCacheKey } from '../api/postApi'
import { addPostOptions, updatePostOptions, deletePostOptions } from '../api/postSWRoptions'



const PostList = () => {
    const {
        isLoading,
        error,
        data: posts,
        mutate,
    } = useSWR(postCacheKey, getPosts, {
        onSuccess: data => data.sort((a, b) => b.id - a.id)
    })

    let content
    if (isLoading) {
        content = <p>Loading...</p>
    } else if (error) {
        content = <p>{error.message}</p>
    } else {
        content =
            <>
                <table>
                    <tbody>
                        {
                            posts.map((post) => {
                                return (
                                <tr key={post.id}>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </>
    }


    return (
        <main>
            <Toaster toastOptions={{position:"top-center"}}/>
            <h4>List all posts</h4>
            {content}
        </main>
    )
}

export default PostList