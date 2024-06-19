import { Autocomplete, Box, Paper, Popper, TextField, styled } from "@mui/material"
import { FC, useEffect, useState } from "react"
import axios from "axios";
import { fetchPosts } from "@/utils/api";
import { useDispatch } from "react-redux";
import { selectPost, setPostsRedux } from "@/redux/postsSlice";
import { useRouter } from "next/router";

type Post = {
    userid: number;
    id: number;
    title: string;
    body: string;
  };

  const CustomPopper = styled(Popper)({
    "& .MuiAutocomplete-paper": {
      "& .MuiAutocomplete-option": {
        "&:hover": {
          backgroundColor: "#10178f",
          color: "#fff", // optional: change the text color on hover
        },
      },
    },
  });
  
  const CustomPaper = styled(Paper)({
    "& .MuiAutocomplete-option": {
      "&:hover": {
        backgroundColor: "#10178f",
        color: "#fff", // optional: change the text color on hover
      },
    },
  });
  
const PostList:FC = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [posts, setPosts] = useState<Post[]>([]);
    useEffect(() => {
        const fetchPostsData = async () => {
        try {
            const postsData = await fetchPosts();
            setPosts(postsData);
            dispatch(setPostsRedux(postsData))
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
        }

        fetchPostsData();
    }, []);
    const handlePostChange = (event: React.ChangeEvent<{}>, newValue: Post | null) => {
        if (newValue !== null){
            dispatch(selectPost(newValue));
            router.push(`/posts/${newValue.id}`)
        }
    };
    return(
        <Box mt={4}>
        <Autocomplete
          options={posts}
          getOptionLabel={(option) => option.title}
          onChange={handlePostChange}
          PopperComponent={(props) => <CustomPopper {...props} />}
          PaperComponent={(props) => <CustomPaper {...props} />}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#10178f", 
              },
              "&:hover fieldset": {
                borderColor: "#10178f", 
              },
              "&.Mui-focused fieldset": {
                borderColor: "#10178f", 
              },
            },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select a Post"
              variant="outlined"
            />
          )}
        />
      </Box>
    )
}

export default PostList