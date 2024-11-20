import { Counter } from './posts/Counter';

export default function PostsLayout({ children }) {
  return (
    <div>
      <marquee style={{ background: 'white', color: 'purple ' }}>
        El mejor canal de programacion de twitch: @midudev
      </marquee>
      <small>Home &bull; Posts</small>
      <Counter />
      {children}
    </div>
  );
}
