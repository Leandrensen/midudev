import Link from 'next/link';
import { LikeButton } from './LikeButon';

const fetchPosts = () => {
  console.log('ESTOY FETCHEANDO LOS POSTS!!!!!!!!!!!!!!');
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    // // esto le indica al browser que no guarde en cache la data. Lo que vuelve no-estatico a este componente.
    // cache: 'no-store',
    // Cada 60 segundos, si ha recibido una request, revalida y vuelve a generar un archivo estatico
    // en caso de haber recibido nuevos datos
    // Es una de las mejores soluciones para fetchear, si no sabes que va a ser estatico el contenido de esta pagina
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export async function ListOfPosts() {
  const posts = await fetchPosts();

  return posts.slice(0, 5).map((post) => (
    <article key={post.id}>
      <Link href="/posts/[id]" as={`/posts/${post.id}`}>
        <h2 style={{ color: '#09f' }}>{post.title}</h2>
        <p>{post.body}</p>
        <LikeButton />
      </Link>
    </article>
  ));
}
