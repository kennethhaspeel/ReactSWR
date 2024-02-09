export const addPostOptions = (newPost) => {
    return {
        // optimistic data displays until we populate cache
        // param is previous data
        optimisticData: (posts) => [...posts, newPost]
            .sort((a, b) => b.id - a.id),
        rollbackOnError: true,
        populateCache: (added, posts) => [...posts, added]
            .sort((a, b) => b.id - a.id),
        revalidate: false
    }
}

export const updatePostOptions = (updatedPost) => {
    return {
        // optimistic data displays until we populate cache
        // param is previous data
        optimisticData: (posts) => {
            const prevPosts = posts.filter(post => {
                return post.id !== updatedPost.id
            })
            return [...prevPosts, updatedPost]
                .sort((a, b) => b.id - a.id)
        },
        rollbackOnError: true,
        // response from API request is 1st param
        // previous data is 2nd param
        populateCache: (updated, posts) => {
            const prevPosts = posts.filter(post => {
                return post.id !== updatedPost.id
            })
            return [...prevPosts, updated]
                .sort((a, b) => b.id - a.id)
        },
        revalidate: false,
    }
}

export const deletePostOptions = ({ id }) => {
    return {
        // optimistic data displays until we populate cache
        // param is previous data
        optimisticData: (posts) => {
            return posts.filter(post => {
                return post.id !== id
            })
        },
        rollbackOnError: true,
        // response from API request is 1st param
        // previous data is 2nd param
        populateCache: (emptyResponseObj, posts) => {
            return posts.filter( post=> {
                return post.id !== id
            })
        },
        revalidate: false,
    }
}