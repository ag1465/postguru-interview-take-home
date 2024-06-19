import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";

const api = axios.create({
    baseURL,
    headers: {
    "Content-Type": "application/json",
    },
});

// Define functions for different API calls
export const fetchPosts = async () => {
    try {
    const response = await api.get("/posts");
    return response.data;
    } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
    }
};
export const fetchComments = async (postId: number) => {
    try {
        const response = await api.get(`/comments?postId=${postId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching comments for post ${postId}:`, error);
        throw error;
    }
};

export const postComment = async (comment: { postId: number; name: string; email: string; body: string }) => {
    try {
      const response = await api.post("/comments", comment);
      return response.data;
    } catch (error) {
      console.error("Error posting comment:", error);
      throw error;
    }
  };
export default api;