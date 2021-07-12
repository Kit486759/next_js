import { useRouter } from 'next/router'

export default function index({article}) {

    // const router = useRouter()
    // const {id} = router.query
    // console.log(id)

    return (
        <div>
            Name: {article.name}
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`
    https://jsonplaceholder.typicode.com/users/${context.params.id}`)
   
    const article = await res.json()

    return {
        props: {
            article
        }
    }
}


