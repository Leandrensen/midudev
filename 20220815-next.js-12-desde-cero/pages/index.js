import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import PageLayout from '../components/pageLayout';

import styles from '../styles/Home.module.css';

export default function Home({ articles }) {
  return (
    <PageLayout title="NewsApp - Home">
      <div className={styles.container}>
        {articles.length === 0 && <p>No tenemos articulos</p>}
        {articles.length > 0 &&
          articles.map((article, index) => (
            <article key={index}>
              <Image
                alt={`Image for the article ${article.title}`}
                src={article.urlToImage}
                width={450}
                height={300}
                quality={50}
                layout="responsive"
                priority={index < 2}
                // placeholder="blur"
                // blurDataURL=''
              />
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </article>
          ))}
        <Link href="/about">Ir al about</Link>
      </div>
    </PageLayout>
  );
}

// ESTE METODO SE EJECUTA EN EL SERVIDOR
// Pero a veces no...
// Para N Request ==> Se ejecuta N vecees
// Es para datos que necesitas que sean MUY live
// Tiene demasiados datos dinamicos
export async function getServerSideProps(context) {
  const response = await fetch(
    'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=08771b372b494dbeb19d052c44917ad6'
  );
  const { articles } = await response.json();

  return {
    props: {
      articles,
    },
  };
}

// Este Metodo hace la request una sola vez. Pre-renderiza la pagina entera con la informacion
// N requests ==> se ejecutra 1 vez en build time (o para refrescar la pagina)
// export async function getStaticProps() {
//   const response = await fetch(
//     'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=08771b372b494dbeb19d052c44917ad6'
//   );
//   const { articles } = await response.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// }
