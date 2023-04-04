import baseApi from "./baseApi";

export const getPost = (page) => {
    return baseApi.get(`/posts?_page=${page}&limit=10&_expand=user`)
}

export const getPostByUser = (userId, page) => {
    return baseApi.get(`/posts?userId=${userId}&_page${page}&limit=10&_expand=user`)
}

export const getPostById = (postId) => {
    return baseApi.get(`/posts?postId=${postId}&_expand=user`)
}

export const getPostSearch = (search, page) => {
    return baseApi.get(`/posts?q=${search}&_page=${page}&limit=10&_expand=user`)
}

export default {
    getPost,
    getPostByUser,
    getPostById,
    getPostSearch
}