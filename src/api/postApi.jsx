import axios from "axios"

const delay = () => new Promise(res => setTimeout(() => res(), 800))

const axiosApi = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

export const PostUrlEndpoint = '/posts'

export const getPosts = async () => {
    await delay()
    const response = await axiosApi.get(PostUrlEndpoint)
    console.log(response.data)
    return response.data
}

export const addPost = async ({ userId, title, body }) => {
    await delay()
    if (Math.random() < 0.5) throw new Error("Failed to add new item!")
    const response = await axiosApi.post(PostUrlEndpoint, { userId, title, body })
    return response.data
}

export const updatePost = async (post) => {
    await delay()
    const response = await axiosApi.patch(`${PostUrlEndpoint}/${post.id}`, post)
    return response.data
}

export const deletePost = async ({ id }) => {
    await delay()
    const response = await axiosApi.delete(`${PostUrlEndpoint}/${id}`)
    return response.data
}