import classes from "../styles/ArticleList.module.css"
import ArticleItem from "./ArticleItem"
const ArticleList = ({articles}) => {
    return (
        <div className={classes.grid}>
            {articles.map(article => (
                <ArticleItem article={article}/>
            ))}
        </div>
    )
}

export default ArticleList
