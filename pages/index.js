import Meta from '../components/Meta';
import Article from '../components/Article';

export default function Home({ article }) {
    console.log(article)

    const ids = article.map(info => info.id)
    console.log(ids)

    const paths = ids.map(id => ({ params: { id: id } }))
    console.log(paths)
    return (
        <div>
            <Meta/>
            <h1>Welcome to Next</h1>
            <Article data={article} />
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/`)
    const article = await res.json();

    return {
        props: {
            article
        }
    }
}