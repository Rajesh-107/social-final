import React from "react";
import Post from "./Post";

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "John",
      email: "john@gmail.com",
      message: "Wow tailwind great job",
      timeDate: "14/02/23",
      title: "Post 1",
      postImage:
        "https://i.pinimg.com/originals/a4/9f/36/a49f360a6a2ed73a7d80e0d5f37dcf60.jpg",
      img: "https://i.pinimg.com/originals/a4/9f/36/a49f360a6a2ed73a7d80e0d5f37dcf60.jpg",
    },
    {
      id: 2,
      name: "John",
      email: "john@gmail.com",
      message: "Wow tailwind great job",
      timeDate: "14/02/23",
      title: "Post 1",
      postImage:
        "https://i.pinimg.com/originals/a4/9f/36/a49f360a6a2ed73a7d80e0d5f37dcf60.jpg",
      img: "https://i.pinimg.com/originals/a4/9f/36/a49f360a6a2ed73a7d80e0d5f37dcf60.jpg",
    },
    {
      id: 3,
      name: "John",
      email: "john@gmail.com",
      title: "Post 1",
      timeDate: "14/02/23",
      message: "Wow tailwind great job",
      postImage:
        "https://i.pinimg.com/originals/a4/9f/36/a49f360a6a2ed73a7d80e0d5f37dcf60.jpg",
      img: "https://i.pinimg.com/originals/a4/9f/36/a49f360a6a2ed73a7d80e0d5f37dcf60.jpg",
    },
  ];

  return (
    <div className="">
      {posts.map((post) => (
        <Post
          key={post.id}
          name={post.name}
          message={post.message}
          email={post.email}
          title={post.title}
          img={post.img}
          postImage={post.postImage}
          timeDate={post.timeDate}
        />
      ))}
    </div>
  );
};

export default Posts;
