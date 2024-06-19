import { FC } from "react";
import { Box, Typography, Container } from "@mui/material";
import PostList from "@/component/PostList";
import Head from "next/head"
import Layout from "@/component/Layout";

const Home: FC = () => {
  return (
    <Layout pageTitle="PostGuru">
      <Head>
        <title>PostGuru</title>
      </Head>
      <Container maxWidth="md">
        <Box my={6} textAlign="center">
          <Typography variant="h3" mb={3} sx={{ fontWeight: "bold", color: "#3F51B5" }}>
            Welcome to PostGuru!
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" mb={4}>
            Discover the latest posts and stay connected.
          </Typography>
          <PostList />
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;