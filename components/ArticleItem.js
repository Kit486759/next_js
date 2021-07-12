import articleStyles from '../styles/Article.module.css'
import Link from 'next/link'

export default function ArticleItem({ data }) {

    return (
        <Link href="/article/[id]" as={`/article/${data.id}`}>
            <a className={articleStyles.card}>
                <h3>{data.name}</h3>
                <p>{data.email}</p>
            </a>
        </Link>
    )
}
