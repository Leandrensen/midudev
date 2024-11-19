'use client';
import { useState } from 'react';

export function LikeButton() {
  const [liked, setLiked] = useState(false);
  const handleClick = () => setLiked(!liked);

  return (
    <button onClick={handleClick}>{liked ? 'ME GUSTA' : 'Me gusta?'}</button>
  );
}
