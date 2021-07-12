import Head from 'next/head';
import Article from '../components/Article';

export default function Home({article}) {
    console.log(article)

    return (
        <div>
            <Head>
                <title>News</title>
                <meta name="keywords" contain="web development
                , programming"/>
            </Head>
            <h1>Welcome to Next</h1>
            <Article data={article}/>
        </div>
    )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/`)
  const article = await res.json();

  return{
      props:{
          article
      }
  }
}