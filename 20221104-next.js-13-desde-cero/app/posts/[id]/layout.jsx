
import Link from 'next/link';

const fetchSinglePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};


export default async function Post({ children, params }) {
  const { id } = params;
  const post = await fetchSinglePost(id)

  return (
    <article>
      <h1 style={{ color: '#09f' }}>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
      {children}
    </article>
  )
}

