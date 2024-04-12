import { useState, useEffect } from "react";
import PostWidget from "./PostWidget";
import { posts } from "./../../data";

const PostsWidget = () => {
  const [dummyPosts, setDummyPosts] = useState();
  const handleSetPostsData = () => {
    setDummyPosts(posts);
  };
  useEffect(() => {
    handleSetPostsData();
  }, []);
  return (
    <>
      {dummyPosts &&
        dummyPosts.length > 0 &&
        dummyPosts.map(
          ({
            id,
            firstName,
            lastName,
            description,
            location,
            picturePath,
            userPicturePath,
          }) => (
            <PostWidget
              key={id}
              name={`${firstName} ${lastName}`}
              description={description}
              location={location}
              picturePath={picturePath}
              userPicturePath={userPicturePath}
            />
          )
        )}
    </>
  );
};

export default PostsWidget;
