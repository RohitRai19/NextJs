"use client"
import React, { useEffect, useState } from "react";
import Image  from "next/image";
import {
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://fakestoreapi.com/products/");
      const data = await response.json();
      console.log(data)
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <Grid container spacing={1} >
      {posts.map((post) => (
        <Grid item xs={6} >
          <Typography variant="h5" gutterBottom>
      <Image
        alt="store Image"
        width={100}
        height={100}
        src={post.image}
      />
          </Typography>
          <Typography variant="h6">
          {post.title}
          </Typography>
          <Typography variant="body2">
            {post.description}
          </Typography>
          <Button variant="contained">
            View More
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default PostsPage;