import React from "react";
import StoryCard from "./StoryCard";

const Stories = () => {
  const stories = [
    {
      id: "1",
      name: "John",
      src: "https://i.pinimg.com/originals/a4/9f/36/a49f360a6a2ed73a7d80e0d5f37dcf60.jpg",
      profile:
        "https://i.pinimg.com/originals/a4/9f/36/a49f360a6a2ed73a7d80e0d5f37dcf60.jpg",
    },
    {
      id: "2",
      name: "John",
      src: "https://i.pinimg.com/originals/a4/9f/36/a49f360a6a2ed73a7d80e0d5f37dcf60.jpg",
      profile:
        "https://i.pinimg.com/originals/a4/9f/36/a49f360a6a2ed73a7d80e0d5f37dcf60.jpg",
    },
    {
      id: "3",
      name: "John",
      src: "https://i.pinimg.com/originals/a4/9f/36/a49f360a6a2ed73a7d80e0d5f37dcf60.jpg",
      profile:
        "https://i.pinimg.com/originals/a4/9f/36/a49f360a6a2ed73a7d80e0d5f37dcf60.jpg",
    },
    {
      id: "4",
      name: "John",
      src: "https://i.pinimg.com/originals/a4/9f/36/a49f360a6a2ed73a7d80e0d5f37dcf60.jpg",
      profile:
        "https://i.pinimg.com/originals/a4/9f/36/a49f360a6a2ed73a7d80e0d5f37dcf60.jpg",
    },
    {
      id: "5",
      name: "John",
      src: "https://i.pinimg.com/originals/a4/9f/36/a49f360a6a2ed73a7d80e0d5f37dcf60.jpg",
      profile:
        "https://i.pinimg.com/originals/a4/9f/36/a49f360a6a2ed73a7d80e0d5f37dcf60.jpg",
    },
  ];

  return (
    <div className="flex justify-center space-x-3">
      {/* {stories.map((story, id) => (
        <StoryCard
          key={id}
          name={story.name}
          profile={story.profile}
          src={story.src}
        />
      ))} */}
    </div>
  );
};

export default Stories;
