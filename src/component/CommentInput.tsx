import { Box, Button, Stack, TextField } from "@mui/material";
import { FC, useEffect, useState } from "react";
import axios from "axios";
import { postComment } from "@/utils/api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { toast } from "react-toastify";
import { addPostsComment } from "@/redux/postsSlice";

const CommentInput:FC = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState("");
    const [disabledButton, setDisabledButton] = useState(true)
    const selectedPost = useSelector((state: RootState) => state.posts.selectedPost);

    useEffect(() => {
        if (name && email && comment) {
            setDisabledButton(false);
        } else {
            setDisabledButton(true);
        }
    }, [name, email, comment]);
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setComment(event.target.value);
    };

    const handleCommentSubmit = async () => {
        if(selectedPost){
            try {
                const newComment = {
                    postId: selectedPost?.id,
                    name: name, 
                    email: email, 
                    body: comment,
                };
    
                const response = await postComment(newComment);
                
                toast.success("Comment posted successfully!", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                dispatch(addPostsComment(response))
                setComment("");
            } catch (error) {
                console.error("Error posting comment:", error);
                toast.error("Failed to post comment. Please try again later.", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
        }
    };

    return (
        <Box mt={4} p={2} border={1} borderColor="grey.300" borderRadius={8}>
            <Stack direction="row" spacing={2} mb={2}>
                <TextField
                label="Name"
                variant="outlined"
                value={name}
                onChange={handleNameChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
                sx={{ marginBottom: 2 }}
                />
                <TextField
                label="Email"
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
                sx={{ marginBottom: 2 }}
                />
            </Stack>
            <TextField
                label="Add a comment"
                variant="outlined"
                fullWidth
                value={comment}
                onChange={handleCommentChange}
                multiline
                rows={4}
                InputLabelProps={{ shrink: true }}
                sx={{ marginBottom: 2 }}
            />
            <Box textAlign="right">
            <Button
                disabled={disabledButton}
                variant="contained"
                onClick={handleCommentSubmit}
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
            Post Comment
            </Button>
            </Box>
        </Box>
    );
};

export default CommentInput;
