import Layout from "@/component/Layout";
import { Box, Typography, Grid, Paper, Avatar, List, ListItem, ListItemText } from "@mui/material";
import Head from "next/head";
import { FC } from "react";

const About: FC = () => {
  return (
    <Layout pageTitle="About">
      <Head>
        <title>About</title>
      </Head>
        <Box mt={5} p={4} sx={{ border: "1px solid #8b9fea", borderRadius: 8 }}>
        <Typography variant="h4" gutterBottom>About PostGuru</Typography>
        <Typography variant="body1" paragraph>
            PostGuru is an application designed to provide users with access to a collection of posts and their comments. It allows users to browse posts, read comments, and interact by adding their own comments.
        </Typography>
        <Typography variant="body1" paragraph>
            Key features of PostGuru include:
        </Typography>
        <List sx={{ mb: 2 }}>
            <ListItem disableGutters>
            <ListItemText primary="View posts from various authors." />
            </ListItem>
            <ListItem disableGutters>
            <ListItemText primary="Read comments and contribute your thoughts." />
            </ListItem>
            <ListItem disableGutters>
            <ListItemText primary="Simple and intuitive user interface." />
            </ListItem>
            <ListItem disableGutters>
            <ListItemText primary="Responsive design for seamless experience across devices." />
            </ListItem>
        </List>

        <Box sx={{ borderTop: "1px solid #8b9fea", pt: 2, mb: 8}}>
            <Typography variant="h5" align="center" sx={{ pb: 2 }}>Meet the Team</Typography>
            <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ p: 2, display: "flex", flexDirection: "column", alignItems: "center", height: "100%" }}>
                <Avatar sx={{ width: 100, height: 100, mb: 2 }} />
                <Typography variant="subtitle1">Arun Rajagopal</Typography>
                <Typography variant="body2" color="textSecondary">Team Lead</Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ p: 2, display: "flex", flexDirection: "column", alignItems: "center", height: "100%" }}>
                <Avatar sx={{ width: 100, height: 100, mb: 2 }} />
                <Typography variant="subtitle1">Allen Guo</Typography>
                <Typography variant="body2" color="textSecondary">Software Developer</Typography>
                </Paper>
            </Grid>
            </Grid>
        </Box>
        </Box>
    </Layout>
  );
};

export default About;
