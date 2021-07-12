import { useRouter } from 'next/router'
import Link from 'next/link';

export default function index({ article }) {

    // const router = useRouter()
    // const {id} = router.query
    // console.log(id)


    return (
        <>
        <div>
            Name: {article.name}
            Email: {article.email}
        </div>
        <Link href="/">Back to home</Link>
        </>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`
    https://jsonplaceholder.typicode.com/users/${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {

    const res = await fetch(`
    https://jsonplaceholder.typicode.com/users/`)

    const article = await res.json()
    const ids = article.map(info => info.id)
    const paths = ids.map(id=>
        ({params:{id:id.toString()}})
        )

        
       

    return {

        //    ============= path setting
        // paths: [
        //     {params: { id: '1' }},
        //     {params: { id: '2' }},
        //     {params: { id: '3' }},
        //     {params: { id: '4' }},
        // ],
        paths,
        fallback: false
    }
}


