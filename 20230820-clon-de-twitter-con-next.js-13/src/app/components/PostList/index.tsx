import React from 'react';
import PostCard from '../PostCard';
import { Post } from '@/app/types/posts';

interface IPostList {
  posts: Post[] | null;
}

export default function PostList(props: IPostList) {
  const { posts } = props;
  return (
    <>
      {posts?.map((post) => {
        const { id, user, content } = post;

        const {
          user_name: userName,
          name: userFullName,
          avatar_url: avatarUrl,
        } = user;

        return (
          <PostCard
            key={id}
            userName={userName}
            userFullName={userFullName}
            avatarUrl={avatarUrl}
            content={content}
          />
        );
      })}
    </>
  );
}
