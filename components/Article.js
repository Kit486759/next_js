import articleStyles from '../styles/Article.module.css';
import ArticleItem from './ArticleItem';

export default function Article({data}) {
// console.log(data)

    return (

        <div className={articleStyles.grid}>
            {data.map((info,index) => 
            <ArticleItem data={info} key={index}/> 
            )}
        </div>


    )
}
