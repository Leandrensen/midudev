import Link from 'next/link';
import Image from 'next/image';

const fetchComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw new Error('Error al cargar los comentarios');

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default async function Comments({ params }) {
  const { id } = await params;
  const comments = await fetchComments(id);

  return (
    <ul style={{ background: '#444', fontSize: '10px' }}>
      {comments.map((comment) => (
        <li key={comment.id}>
          {/* <img alt={comment} src={`https://unavatar.io/${comment.email}`} /> */}
          <Image
            width="50"
            height="50"
            alt={comment}
            src={`https://api.dicebear.com/9.x/pixel-art/svg?seed=${comment.email}`}
          />
          <h4>{comment.name}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  );
}
