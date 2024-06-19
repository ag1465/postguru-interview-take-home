import { Box, Button, Typography, CircularProgress } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { fetchComments, fetchPosts } from "@/utils/api";
import { selectPost, setPostsComments, setPostsRedux } from "@/redux/postsSlice";
import CommentInput from "@/component/CommentInput";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "@/component/Layout";

type Post = {
  userid: number;
  id: number;
  title: string;
  body: string;
};

const PostPage: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { postId } = router.query;
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const selectedPost = useSelector((state: RootState) => state.posts.selectedPost);
  const selectedPostsComment = useSelector((state: RootState) => state.posts.selectedPostComments);

  useEffect(() => {
    const fetchPostsData = async () => {
      try {
        const postsData = await fetchPosts();
        dispatch(setPostsRedux(postsData));
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    const fetchSelectedPost = async () => {
      if (typeof postId === "string") {
        const postIdNumber = parseInt(postId);
        const selectedPostData = posts.filter((post: Post) => post.id === postIdNumber);
        if (selectedPostData.length > 0) {
          dispatch(selectPost(selectedPostData[0]));
        }
      }
    };

    const fetchCommentsData = async () => {
      if (typeof postId === "string") {
        const postIdNumber = parseInt(postId);
        try {
          const commentsData = await fetchComments(postIdNumber);
          dispatch(setPostsComments(commentsData));
        } catch (error) {
          console.error(`Error fetching comments for postId ${postIdNumber}:`, error);
        }
      }
    };

    const loadData = async () => {
      setLoading(true);
      if(posts.length < 1){
        await fetchPostsData();
      }
      if(!selectedPost?.title){
        await fetchSelectedPost();
      }
      await fetchCommentsData();
      setLoading(false);
    };

    loadData();
  }, [postId,posts,selectedPost]);

  if (loading) {
    return (
      <Layout pageTitle="Post">
        <Head>
          <title>Loading...</title>
        </Head>
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <CircularProgress />
        </Box>
      </Layout>
    );
  }

  return (
    <Layout pageTitle="Post">
      <Head>
        <title>Post</title>
      </Head>
      <Box>
        {selectedPost ? (
          <Box>
            <Box
              bgcolor="#ffffff"
              boxShadow="0px 2px 5px rgba(0, 0, 0, 0.1)"
              borderRadius={20}
              p={3}
              maxWidth="80%"
              textAlign="center"
              mb={4}
              mt={4}
            >
              <Typography variant="h5" fontWeight={600} mb={2}>
                {selectedPost?.title}
              </Typography>
              <Typography variant="body1" color="#666666">
                {selectedPost?.body}
              </Typography>
            </Box>
            <Box mt={4}>
              {selectedPostsComment.map((comment) => (
                <Box key={comment.id} display="flex" flexDirection="row" alignItems="center" mt={2}>
                  <Image
                    src={comment.email[0].charCodeAt(0) % 2 === 0 ? "/avatar-icon.png" : "/avatar-icon-2.png"}
                    alt="Avatar Image"
                    width={100}
                    height={100}
                  />
                  <Box
                    ml={2}
                    bgcolor="#8b9fea"
                    color="#000000"
                    borderRadius={20}
                    p={2}
                    width="100%"
                    sx={{
                      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                      maxWidth: "80%",
                    }}
                  >
                    <Typography variant="subtitle1" fontWeight={600}>{comment.name}</Typography>
                    <Typography variant="body2">{comment.body}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
            <CommentInput />
          </Box>
        ) : (
          <Box mt={4} textAlign="center">
            <Image
              src="/post-not-found-image.png"
              alt="Not Found Image"
              width={500}
              height={500}
            />
            <Typography variant="h4">Post Not Found</Typography>
            <Typography variant="body1">
              The postId {postId} you are looking for does not exist or could not be loaded.
            </Typography>
            <Box mt={2}>
              <Link href="/">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#1A44E2",
                    borderRadius: "100px",
                    fontSize: "16px",
                    fontWeight: 700,
                    "&:hover": {
                      backgroundColor: "#072dba",
                    }
                  }}
                >
                  Back to Home
                </Button>
              </Link>
            </Box>
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default PostPage;
