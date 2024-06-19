import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { NextPage } from "next";
import Image from "next/image";

const Custom404: NextPage = () => {
  return (
    <Box mt={4} textAlign="center">
      <Image
        src="/404-image.png"
        alt="404 Image"
        width={500}
        height={500}
      />
      <Typography variant="h4" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        Oops! The page you are looking for does not exist.
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
  );
};

export default Custom404;
